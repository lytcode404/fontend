import Link from "next/link";
import React from "react";
import Image from "next/image";
const TestCard = ({ heading }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark::bg-gray-800 dark::border-gray-700 pt-4">
      <div className="px-5 pb-5">
        <div>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark::text-white">
            {heading}
          </h5>
        </div>
        <div className="flex items-center mt-2.5 mb-5 gap-3 text-purple-600">
          <p>
            <span>10</span>Questions
          </p>
          <p>
            <span>10</span>Marks
          </p>
          <p>
            <span>10</span>Mins
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xl text-white bg-primary rounded px-4 py-1">
            free
          </div>
          <Link
            href={`/exam/${heading}`}
            className="text-white bg-success hover:bg-meta-3 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark::bg-bg-success dark::hover:bg-bg-success dark::focus:ring-blue-800"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
