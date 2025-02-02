import React from 'react';
import Image from 'next/image'
export default function QuestionList({ questionData }) {
  const calculateTotalMarks = () => {
    let totalMarks = 0;
    questionData.forEach((question) => {
      if (question.answer === question.options.b) {
        totalMarks += 1;
      }
    });
    return totalMarks;
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Question List</h2>
      {questionData.map((question, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-md font-semibold mb-1">{`Question ${index + 1}: ${question.question}`}</h3>
          <p>{`Options: a) ${question.options.a}, b) ${question.options.b}, c) ${question.options.c}, d) ${question.options.d}`}</p>
          <p>{`Answer: ${question.answer}`}</p>
        </div>
      ))}
      <hr className="my-4" />
      <p className="font-semibold">{`Total Marks: ${calculateTotalMarks()} out of ${questionData.length}`}</p>
    </div>
  );
}
