import QuestionaireFrontend from "@/components/QuestionaireFrontend";
import TestCard from "@/components/TestCard";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Test = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [testGenerated, setTestGenerated] = useState(false); // To hide button after generation
  const [selectedOptions, setSelectedOptions] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const fetchTestData = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/generate-test", {
        topic: router.query.test,
      });

      // Parse JSON string inside "data"
      const parsedData = JSON.parse(response.data);
      console.log(parsedData);

      setData(parsedData);
      setTestGenerated(true);
    } catch (error) {
      console.error("Error fetching test:", error);
    }
    setLoading(false);
  };

  return (
    <div className="">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-center">Test Questions</h1>
        {!testGenerated && (
          <div className="flex justify-center mt-4">
            <button
              onClick={fetchTestData}
              className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md flex items-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white mr-2"
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
                  Generating...
                </>
              ) : (
                "Generate Test"
              )}
            </button>
          </div>
        )}
      </div>

      <div>
        {data.length > 0 ? (
          <QuestionaireFrontend
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            questions={data}
            submitted={submitted}
            setSubmitted={setSubmitted}
            slug={router.query.test}
          />
        ) : (
          <p className="text-center col-span-full">
            {loading
              ? "Generating test questions..."
              : "No test generated yet."}
          </p>
        )}
      </div>
    </div>
  );
};

export default Test;
