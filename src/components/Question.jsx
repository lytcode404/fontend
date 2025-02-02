import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from 'next/image'
const EditableMathField = dynamic(() => import("react-mathquill"), {
    ssr: false,
  });

const Question = ({q, index , deleteQuestion, duplicateQuestion, updateQuestion }) => {
    const [isMathEditableOptions, setIsMathEditableOptions] = useState(false);
    const [isMathEditable, setIsMathEditable] = useState(false);
    
  return (
    <div key={index} id={index} className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">Question {index + 1}</h2>
      <button
        className="bg-red-500 text-white py-1 px-2 rounded mb-2"
        onClick={() => deleteQuestion(index)}
      >
        Delete
      </button>
      <button
        className="bg-green-500 text-white py-1 px-2 rounded mb-2 ml-2"
        onClick={() => duplicateQuestion(index)}
      >
        Duplicate
      </button>

      <div className="flex items-center mb-2">
        <span className="mr-2">Math Editable:</span>
        <input
          type="checkbox"
          checked={isMathEditable}
          onChange={() => setIsMathEditable(!isMathEditable)}
        />
        <span className="ml-4 mx-2">Math Editable Options:</span>
        <input
          type="checkbox"
          checked={isMathEditableOptions}
          onChange={() => setIsMathEditableOptions(!isMathEditableOptions)}
        />
      </div>
      <textarea
        type="text"
        className="border rounded w-full px-2 py-1 mb-2"
        placeholder="Question"
        value={q.question}
        onChange={(e) => updateQuestion(index, "question", e.target.value)}
      />
      {isMathEditable && (
        <div className="bg-white p-4 rounded-lg shadow-md w-full">
          <EditableMathField
            latex={q.question2 || "\\frac{1}{\\sqrt{2}}\\cdot 2"}
            onChange={(e) => updateQuestion(index, "question2", e.latex())}
            style={{ width: "100%", minHeight: "100px", padding: "10px" }}
          />
        </div>
      )}
      {Object.keys(q.options).map((optKey, optIndex) => (
        <div key={optKey} className="flex items-center mb-2">
          <span className="mr-2 font-bold">{`${optKey})`}</span>
          {!isMathEditableOptions ? (
            <input
              type="text"
              className="border rounded w-full px-2 py-1"
              placeholder={`Option ${optKey}`}
              value={q.options[optKey]}
              onChange={(e) =>
                updateQuestion(index, "options", {
                  ...q.options,
                  [optKey]: e.target.value,
                })
              }
            />
          ) : (
            <EditableMathField
              className="border rounded w-full px-2 py-1"
              latex={q.options[optKey] || "\\frac{1}{2}"}
              onChange={(e) =>
                updateQuestion(index, "options", {
                  ...q.options,
                  [optKey]: e.latex(),
                })
              }
              style={{
                width: "100%",
                minHeight: "50px",
                padding: "10px",
              }}
            />
          )}
        </div>
      ))}
      <label className="block mb-2">Answer:</label>
      <select
        className="border rounded w-full px-2 py-1"
        value={q.answer}
        onChange={(e) => updateQuestion(index, "answer", e.target.value)}
      >
        <option value="">Select Answer</option>
        {Object.keys(q.options).map((optKey) => (
          <option key={optKey} value={optKey}>
            Option {optKey}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Question;
