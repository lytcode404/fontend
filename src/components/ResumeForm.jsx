import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ResumeForm({ resumeData }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    github: "",
    linkedIn: "",
    employmentDetails: [],
    technicalSkills: {
      languages: [],
      frameworks: [],
      developerTools: [],
      libraries: [],
    },
    softSkills: [],
  });
  const router = useRouter();

  // Populate formData when resumeData changes
  useEffect(() => {
    if (resumeData) {
      console.log(resumeData)
      setFormData({
        fullName: resumeData.fullName || "",
        email: resumeData.email || "",
        github: resumeData.github || "",
        linkedIn: resumeData.linkedIn || "",
        employmentDetails:
          resumeData.employmentDetails?.map((job) => ({
            title: job.title || "",
            company: job.company || "",
            location: job.location || "",
            dates: job.dates || "",
          })) || [],
        technicalSkills: {
          languages: resumeData.technicalSkills?.languages || [],
          frameworks: resumeData.technicalSkills?.frameworks || [],
          developerTools: resumeData.technicalSkills?.developerTools || [],
          libraries: resumeData.technicalSkills?.libraries || [],
        },
        softSkills: resumeData.soft_skills || [],
      });
    }
  }, [resumeData]);

  // Handle form field updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to /submit page (via router push)
      await router.push({
        pathname: "/submit",
        query: { data: JSON.stringify(formData) }, // Send formData in query string
      });
    } catch (error) {
      console.error("Error submitting resume:", error);
      alert("Submission failed.");
    }
  };

  // Handle employment details change
  const handleEmploymentChange = (index, field, value) => {
    const updatedEmployment = [...formData.employmentDetails];
    updatedEmployment[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      employmentDetails: updatedEmployment,
    }));
  };

  // Handle technical skills change
  const handleSkillsChange = (category, index, value) => {
    const updatedSkills = [...formData.technicalSkills[category]];
    updatedSkills[index] = value;
    setFormData((prev) => ({
      ...prev,
      technicalSkills: { ...prev.technicalSkills, [category]: updatedSkills },
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 border rounded-lg shadow-lg space-y-4 bg-gray-100"
    >
      <h2 className="text-2xl font-bold text-center">Resume Form</h2>

      {/* Personal Information */}
      <div className="flex flex-col">
        <label className="font-semibold">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">GitHub</label>
        <input
          type="text"
          name="github"
          value={formData.github}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">LinkedIn</label>
        <input
          type="text"
          name="linkedIn"
          value={formData.linkedIn}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>

      {/* Employment History */}
      <h3 className="text-lg font-semibold">Employment History</h3>
      {formData.employmentDetails.map((job, index) => (
        <div key={index} className="p-3 border rounded space-y-2">
          <input
            type="text"
            placeholder="Job Title"
            value={job.title}
            onChange={(e) =>
              handleEmploymentChange(index, "title", e.target.value)
            }
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Company"
            value={job.company}
            onChange={(e) =>
              handleEmploymentChange(index, "company", e.target.value)
            }
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Location"
            value={job.location}
            onChange={(e) =>
              handleEmploymentChange(index, "location", e.target.value)
            }
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Duration"
            value={job.dates}
            onChange={(e) =>
              handleEmploymentChange(index, "dates", e.target.value)
            }
            className="p-2 border rounded w-full"
          />
        </div>
      ))}

      {/* Technical Skills */}
      <h3 className="text-lg font-semibold">Technical Skills</h3>
      {Object.keys(formData.technicalSkills).map((category) => (
        <div key={category} className="flex flex-col">
          <label className="font-semibold capitalize">
            {category.replace(/([A-Z])/g, " $1")}
          </label>
          {formData.technicalSkills[category].map((skill, index) => (
            <input
              key={index}
              type="text"
              value={skill}
              onChange={(e) =>
                handleSkillsChange(category, index, e.target.value)
              }
              className="p-2 border rounded my-1"
            />
          ))}
        </div>
      ))}

      {/* Soft Skills */}
      <h3 className="text-lg font-semibold">Soft Skills</h3>
      {formData.softSkills.map((skill, index) => (
        <input
          key={index}
          type="text"
          value={skill}
          onChange={(e) =>
            setFormData((prev) => {
              const updatedSoftSkills = [...prev.softSkills];
              updatedSoftSkills[index] = e.target.value;
              return { ...prev, softSkills: updatedSoftSkills };
            })
          }
          className="p-2 border rounded my-1"
        />
      ))}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-primary text-white p-2 rounded-lg hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
