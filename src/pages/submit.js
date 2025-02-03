import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/db/firebase";

export default function SubmitPage() {
  const [resumeData, setResumeData] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [atsScore, setAtsScore] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.query.data) {
      // Decode the URL-encoded data from the query string
      const decodedData = decodeURIComponent(router.query.data);

      try {
        // Parse the decoded string into a JSON object
        const parsedData = JSON.parse(decodedData);
        setResumeData(parsedData); // Set the resume data in the state
      } catch (error) {
        console.error("Error parsing resume data from URL:", error);
      }
    }
  }, [router.query.data]); // Only run when the `data` query parameter changes

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!jobDescription) {
      alert("Please enter a job description.");
      return;
    }

    console.log(resumeData);

    const data = {
      resume_json: JSON.stringify(resumeData), // Pass the resume data as JSON
      job_description: jobDescription,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/ats", data, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
      const userId = auth?.currentUser?.uid;
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, {
        ats_score: response.data.ats_score,
        missing_data: response?.data?.missing_skills,
      });
      // Check if ATS score is part of the response
      if (response.data.ats_score) {
        console.log(response.data);
        console.log("ATS Score:", response.data.ats_score);
        setAtsScore(response.data.ats_score);
        // You can handle further processing or page redirection here
      } else {
        console.error("ATS score not returned:", response.data);
        alert("Error: No ATS score received.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-800 text-black">
      <h2 className="text-2xl font-bold mb-4">Evaluate ATS Score</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="job_description"
            className="block text-sm font-medium text-gray-200"
          >
            Job Description
          </label>
          <textarea
            id="job_description"
            name="job_description"
            rows="10"
            value={jobDescription}
            onChange={handleJobDescriptionChange}
            className="mt-1 block w-full rounded-md bg-gray-700 text-black p-2 border border-gray-500"
            placeholder="Paste the job description here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-primary px-8 py-2 rounded-2xl text-black font-semibold hover:bg-secondary"
        >
          Evaluate ATS Score
        </button>
      </form>
      {atsScore !== null && (
        <div className="flex justify-center items-center mt-8">
          <div className="w-40 h-40 rounded-full flex justify-center items-center text-3xl font-semibold bg-primary text-black shadow-lg">
            {atsScore}%
          </div>
        </div>
      )}
    </div>
  );
}
