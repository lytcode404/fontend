import React from "react";
import { Pagination, Question } from "./HandleTest";
import { useState } from "react";
import { useEffect } from "react";
import TestNavbar from "./TestNavbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import SidebarTest from "./SidebarTest";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const QuestionaireFrontend = ({ questions, slug }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelectOption = (optionIndex) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentQuestionIndex(pageNumber);
  };

  const currentQuestion = questions[currentQuestionIndex];

  // useEffect(() => {
  //   console.log(selectedOptions);
  // }, [selectedOptions]);

  return (
    <div>
      <TestNavbar
        totalQuestions={questions.length}
        currentQuestionIndex={currentQuestionIndex}
        onPageChange={handlePageChange}
        selectedOptions={selectedOptions}
        slug={slug}
      />

      {currentQuestion ? (
        <div className="background h-[80vh]  bg-white p-8 grid grid-cols-[5fr,1fr] gap-4 overflow-y-hidden">
          <div className="p-8 bg-gray rounded  overflow-y-auto">
            <Question
              qno={currentQuestionIndex}
              question={currentQuestion.question}
              options={currentQuestion.options}
              onSelectOption={handleSelectOption}
              selectedOption={selectedOptions[currentQuestionIndex]}
            />

            <div className="mt-4">
              {currentQuestionIndex > 0 && (
                <button
                  onClick={handlePreviousQuestion}
                  className="mr-4 px-4 py-2 bg-primary text-white rounded-lg"
                >
                  Previous
                </button>
              )}
              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 bg-success text-white rounded-lg"
                >
                  Next
                </button>
              ) : (
                <button
                  disabled
                  className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed"
                >
                  Next
                </button>
              )}
            </div>

            <div className="mt-4">
              <Pagination
                selectedOptions={selectedOptions}
                totalQuestions={questions.length}
                currentQuestionIndex={currentQuestionIndex}
                onPageChange={handlePageChange}
              />
            </div>
          </div>

          <SidebarTest
            selectedOptions={selectedOptions}
            totalQuestions={questions.length}
            currentQuestionIndex={currentQuestionIndex}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <p>No more questions.</p>
      )}
    </div>
  );
};

export default QuestionaireFrontend;
