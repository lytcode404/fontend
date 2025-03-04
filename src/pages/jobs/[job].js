import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchOneJob } from "@/hooks/jobs";
import { auth, db, storage } from "@/db/firebase";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from "axios";
import { Lock, Unlock } from "lucide-react";

const Button = ({ children, onClick, type = "button" }) => (
  <button
    type={type}
    onClick={onClick}
    className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
  >
    {children}
  </button>
);

const Input = ({ type, name, value, onChange, accept, required }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    accept={accept}
    required={required}
    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
  />
);

const Label = ({ children }) => (
  <label className="font-medium text-gray-700">{children}</label>
);

const JobDetails = () => {
  const router = useRouter();
  const jobId = router.query.job;
  const [job, setJob] = useState(null);
  const [atsScore, setAtsScore] = useState(null);
  const [missingSkills, setMissingSkills] = useState(null);
  const [userData, setUserData] = useState([]);
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);

  const [applicantData, setApplicantData] = useState({
    name: "",
    email: "",
    expectedSalary: "",
  });

  const [loading, setLoading] = useState(false);
  const [effectiveMissingSkills, setEffectiveMissingSkills] = useState([]);
  const [attemptedTests, setAttemptedTests] = useState([]);

  useEffect(() => {
    const userId = auth?.currentUser?.uid;
    if (!userId) return;

    const userDocRef = doc(db, "users", userId);

    const unsubscribe = onSnapshot(
      userDocRef,
      (userDocSnap) => {
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          console.log("Live User Data:", userData);

          // Extract tests array safely
          if (userData.tests) {
            console.log(userData.tests);
            setAttemptedTests(userData.tests);
          } else {
            setAttemptedTests([]); // No tests found
          }
        } else {
          console.log("User document not found");
          setAttemptedTests([]);
        }
      },
      (err) => {
        console.error("Error fetching live user details:", err);
      }
    );

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (jobId) {
      const fetchJob = async () => {
        try {
          const jobData = await fetchOneJob(jobId);
          console.log("Fetched Job:", jobData);
          setJob(jobData);
        } catch (error) {
          console.error("Error fetching job:", error);
        }
      };
      fetchJob();
    }
  }, [jobId]);


  useEffect(() => {
    if (!missingSkills || !attemptedTests) return; // Ensure data exists before processing

    const filteredSkills = missingSkills.filter((skill) => {
      const userTest = attemptedTests.find((test) => test.slug === skill);
      return !(userTest?.isPass === "Pass"); // Keep only skills the user hasn't passed
    });

    setEffectiveMissingSkills(filteredSkills); // Update state
  }, [missingSkills, attemptedTests]); // Runs when missingSkills or attemptedTests change

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicantData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };
  const onCoverLetterChange = (e) => {
    setCoverLetter(e.target.files[0]);
  };

  const handleParsePdf = async () => {
    if (!resume) {
      console.error("Please select a PDF file.");
      return null;
    }

    const formData = new FormData();
    formData.append("pdf_doc", resume);

    try {
      console.log("Uploading resume for parsing...");
      const response = await axios.post(
        "https://resume-parser-2a39.onrender.com/process",
        // "http://127.0.0.1:8000/process",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.error) {
        console.error("Error in parsing:", response.data.error);
        return null;
      }

      console.log("Resume parsed successfully!");
      return response.data;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  const handleAtsScore = async () => {
    if (!job) {
      console.error("Job data is missing.");
      return null;
    }

    const parsedResume = await handleParsePdf();
    if (!parsedResume) {
      console.error("Resume parsing failed. Cannot calculate ATS score.");
      return null;
    }

    const requestData = {
      resume_json: JSON.stringify(parsedResume),
      job_description: JSON.stringify(job),
    };

    try {
      console.log("Calculating ATS Score...");
      const response = await axios.post(
        "https://resume-parser-2a39.onrender.com/ats",
        // "http://127.0.0.1:8000/ats",
        requestData,
        { headers: { "Content-Type": "application/json" } }
      );

      const { ats_score, missing_skills } = response.data;
      setAtsScore(ats_score);
      setMissingSkills(missing_skills);

      if (ats_score !== undefined) {
        console.log("ATS Score:", ats_score);

        // Store ATS score in user Firestore document
        // const userId = auth?.currentUser?.uid;
        // if (userId) {
        //   const userDocRef = doc(db, "users", userId);
        //   await updateDoc(userDocRef, {
        //     ats_score,
        //     missing_skills: missing_skills.reduce((acc, skill) => {
        //       acc[skill] = false;
        //       return acc;
        //     }, {}),
        //   });
        // }

        return response.data;
      } else {
        console.error("ATS score not returned.");
        return null;
      }
    } catch (error) {
      console.error("Error calculating ATS score:", error);
      return null;
    }
  };

  const handleCheckResume = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader

    await handleAtsScore();
    setLoading(false); // Show loader
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!job || !job.id) {
      console.error("Invalid job details. Please try again.");
      return;
    }

    setLoading(true); // Show loader

    console.log("Starting ATS Score Calculation...");

    let resumeUrl = "No file uploaded";
    // if (applicantData.resume) {
    //   try {
    //     const resumeRef = ref(
    //       storage,
    //       `resumes/${job.id}/${applicantData.resume.name}`
    //     );
    //     const snapshot = await uploadBytes(resumeRef, applicantData.resume);
    //     resumeUrl = await getDownloadURL(snapshot.ref);
    //     console.log("Resume uploaded successfully:", resumeUrl);
    //   } catch (error) {
    //     console.error("Error uploading resume:", error);
    //     return;
    //   }
    // }

    const applicantInfo = {
      name: applicantData.name,
      email: applicantData.email,
      expectedSalary: applicantData.expectedSalary,
      atsScore,
      missingSkills,
      userTestedSkills: userData?.missing_skills
        ? userData?.missing_skills
        : null,
      skilledLearnt: userData?.missing_skills ? userData?.missing_skills : null,
      resumeUrl,
      appliedAt: new Date(),
    };

    try {
      const jobRef = doc(db, "jobsData", job.id);
      await updateDoc(jobRef, {
        applicants: arrayUnion(applicantInfo),
      });

      console.log(`Successfully applied for ${job.jobTitle}!`);
      setApplicantData({
        name: "",
        email: "",
        expectedSalary: "",
        resume: null,
      });
      alert(`Successfully applied for ${job.jobTitle}!`);
      setLoading(false); // Hide loader

      router.push("/jobs");
    } catch (error) {
      setLoading(false); // Hide loader

      console.error("Error applying for the job:", error);
    }
  };

  const handleLearn = (skill) => {
    window.open(`/suggestions?skill=${skill}`, "_blank");
  };

  const handleTest = (skill) => {
    window.open(`/tests/${skill}`, "_blank");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{job?.jobTitle}</h1>
      <p className="text-gray-600 mb-2">{job?.jobDescription}</p>
      <p className="text-sm font-medium mb-1">Salary: {job?.salary}</p>
      <p className="text-sm mb-1">
        <strong>Required Skills:</strong> {job?.requiredSkills}
      </p>
      <p className="text-sm mb-1">
        <strong>Number of Openings:</strong> {job?.numberOfOpenings}
      </p>
      <p className="text-sm mb-1">
        <strong>Who Can Apply:</strong> {job?.whoCanApply}
      </p>
      <p className="text-sm mb-1">
        <strong>Perks:</strong> {job?.perks}
      </p>
      <p className="text-sm mb-1">
        <strong>Other Requirements:</strong> {job?.otherRequirements || "N/A"}
      </p>
      <p className="text-sm mb-1">
        <strong>Preferred Qualifications:</strong>{" "}
        {job?.preferredQualifications || "N/A"}
      </p>
      <p className="text-sm mb-1">
        <strong>Key Responsibilities:</strong>
      </p>
      <pre className="whitespace-pre-wrap text-sm mb-4">
        {job?.keyResponsibilities}
      </pre>

      <div className="mt-6 p-4 border rounded-lg shadow bg-white">
        <h2 className="text-lg font-semibold mb-2">
          Check your profile for the role: {job?.jobTitle}
        </h2>

        <div>
          <Label>Resume</Label>
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
          />
        </div>

        <button
          onClick={handleCheckResume}
          className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md flex items-center justify-center mt-4"
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          ) : (
            "Check Resume"
          )}
        </button>

        {/* Display ATS Score */}
        {atsScore !== null && (
          <div className="mt-4 p-3 border rounded-md bg-gray-50">
            <h3 className="text-md font-semibold">ATS Score: {atsScore}</h3>
          </div>
        )}

        {/* Display Missing Skills */}
        {missingSkills?.length > 0 && (
          <div className="mt-4 p-3 border rounded-md bg-gray-50">
            <h3 className="text-md font-semibold">
              Recommended skills you should practice before applying
            </h3>
            <ul className="mt-2">
              {missingSkills.map((skill) => {
                // Find if the user has passed this skill
                const userTest = attemptedTests?.find(
                  (test) => test?.slug === skill
                );
                const isPassed = userTest?.isPass === "Pass";

                return (
                  <li
                    key={skill}
                    className="p-2 rounded-md flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      {isPassed ? "✅" : "❌"}
                      <span>{skill}</span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        className="bg-meta-3 hover:bg-success text-white px-3 py-1 rounded-md text-sm"
                        onClick={() => handleLearn(skill)}
                      >
                        Learn
                      </button>
                      <button
                        className={`px-3 py-1 rounded-md text-sm text-white ${
                          isPassed
                            ? "bg-success hover:bg-meta-3"
                            : "bg-meta-5 hover:bg-secondary"
                        }`}
                        onClick={() => handleTest(skill)}
                      >
                        {isPassed ? "Retest" : "Test"}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {atsScore && (
          <button className="p-4 mt-3 rounded-lg text-white capitalize text-center flex gap-2 bg-primary hover:bg-secondary">
            Curette Resume
            {effectiveMissingSkills.length > 5 ? (
              <Lock size={18} className="text-white" />
            ) : (
              <Unlock
                size={18}
                className="text-gray-500 group-hover:text-white"
              />
            )}
          </button>
        )}
      </div>

      <div className="relative mt-6 p-4 border rounded-lg shadow bg-white">
        {/* Application Form */}
        <h2 className="text-lg font-semibold mb-2">
          Apply for {job?.jobTitle}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={applicantData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={applicantData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label>Work Experience (in years)</Label>
            <Input
              type="string"
              name="workExperience"
              value={applicantData.workExperience}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label>Highest Education</Label>
            <Input
              type="string"
              name="highestEducation"
              value={applicantData.highestEducation}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label>Expected Salary</Label>
            <Input
              type="number"
              name="expectedSalary"
              value={applicantData.expectedSalary}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              "Apply Now"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobDetails;
