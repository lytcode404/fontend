import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ResumeUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const router = useRouter();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setUploadStatus("Please select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf_doc", selectedFile);

    try {
      setUploadStatus("Uploading...");
      const response = await axios.post(
        "http://127.0.0.1:8000/process",
        // "https://resume-parser-2a39.onrender.com/process",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.error) {
        setUploadStatus(response.data.error);
      } else {
        setUploadStatus("Upload Successful!");
        router.push({
          pathname: "/process",
          query: { data: JSON.stringify(response.data) },
        });
      }
    } catch (error) {
      setUploadStatus("Upload Failed. Try Again.");
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-black">
      <h1 className="text-3xl font-bold">Upload Resume for Parsing</h1>
      <form onSubmit={handleUpload} className="mt-4">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="bg-white p-2 rounded-md text-black"
        />
        <button
          type="submit"
          className="mt-4 bg-primary text-black px-4 py-2 rounded-md"
        >
          Process Resume
        </button>
      </form>

      {uploadStatus && <p className="mt-4">{uploadStatus}</p>}
    </div>
  );
}
