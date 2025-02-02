import React, { useState } from 'react';
import Image from 'next/image'
const Questionnaire = ({ questionData }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers({ ...answers, [questionIndex]: selectedOption });
  };

  const calculateTotalMarks = () => {
    let totalMarks = 0;
    questionData.forEach((question, index) => {
      if (answers[index] === question.answer) {
        totalMarks += 1;
      }
    });
    return totalMarks;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        {questionData.map((question, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-md font-semibold mb-1">{`Question ${index + 1}: ${question.question}`}</h3>
            <div className="space-y-2">
              {Object.keys(question.options).map((optionKey) => (
                <label key={optionKey} className="block">
                  <input
                    type="radio"
                    name={`question${index}`}
                    value={optionKey}
                    onChange={() => handleAnswerChange(index, optionKey)}
                    disabled={submitted}
                  />
                  {`${optionKey}) ${question.options[optionKey]}`}
                </label>
              ))}
            </div>
          </div>
        ))}
        {!submitted && (
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        )}
      </form>
      {submitted && (
        <p className="font-semibold">{`Total Marks: ${calculateTotalMarks()} out of ${questionData.length}`}</p>
      )}
    </div>
  );
};

export default Questionnaire;
