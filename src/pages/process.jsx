
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ResumeForm from "@/components/ResumeForm";

export default function ProcessPage() {
  const router = useRouter();
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    if (router.query.data) {
      try {
        setResumeData(JSON.parse(router.query.data));
        // console.log(JSON.parse(router.query.data))
      } catch (error) {
        console.error("Error parsing resume data:", error);
      }
    }
  }, [router.query.data]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Process Resume</h1>
      {resumeData ? <ResumeForm resumeData={resumeData} /> : <p>Loading...</p>}
    </div>
  );
}

