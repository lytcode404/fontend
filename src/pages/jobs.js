import { fetchAllJobs } from "@/hooks/jobs";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Button = ({ children, onClick, type = "button" }) => (
  <button
    type={type}
    onClick={onClick}
    className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
  >
    {children}
  </button>
);

const Card = ({ children, className = "" }) => (
  <div className={`p-4 border rounded-lg shadow bg-bodydark1 ${className}`}>{children}</div>
);

const CardContent = ({ children }) => <div className="p-2">{children}</div>;

const JobsPortal = () => {
  const [jobsData, setJobsData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchJobs() {
      const resp = await fetchAllJobs();
      setJobsData(resp);
    }
    fetchJobs();
  }, []);

  const handleApply = (jobId) => {
    router.push(`/jobs/${jobId}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobsData.map((job) => (
          <Card key={job.id}>
            <CardContent>
              <h2 className="text-lg font-semibold">{job.jobTitle}</h2>
              {/* <p className="text-sm text-gray-600">{job.jobDescription}</p> */}
              <p className="text-sm font-medium">Salary: {job.salary}</p>
              <Button onClick={() => handleApply(job.id)}>Apply Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobsPortal;
