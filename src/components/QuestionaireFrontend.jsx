import React, { useState } from "react";
import { Pagination, Question } from "./HandleTest";
import TestNavbar from "./TestNavbar";
import SidebarTest from "./SidebarTest";
import { useRouter } from "next/router";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/db/firebase";

const QuestionaireFrontend = ({ questions, slug }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Submitting State

  const router = useRouter();

  const handleSelectOption = (optionIndex) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const handleNextQuestion = () => setCurrentQuestionIndex((prev) => prev + 1);
  const handlePreviousQuestion = () =>
    setCurrentQuestionIndex((prev) => prev - 1);
  const handlePageChange = (pageNumber) => setCurrentQuestionIndex(pageNumber);

  const currentQuestion = questions[currentQuestionIndex];

  const handleSubmitParent = async () => {
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);

    let tMarks = 0;
    questions.forEach((question, index) => {
      let idx = selectedOptions[index];
      if (idx !== undefined && question?.options[idx] === question.answer) {
        tMarks += 1;
      }
    });

    if (!slug) {
      console.error("Error: Slug is undefined.");
      setIsSubmitting(false);
      return;
    }

    if (window.confirm("Do you really want to submit?")) {
      console.log("Selected Options:", selectedOptions);
      console.log("Total Marks:", tMarks);

      try {
        const userDoc = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(userDoc);

        const testData = {
          slug: slug || "unknown",
          attempted: Object.keys(selectedOptions).length, // Correct way to count selected answers
          tMarks: tMarks,
          isPass: tMarks>15 ? "Pass": "Fail",
          timestamp: new Date(),
        };

        if (docSnap.exists()) {
          if (docSnap.data()?.tests) {
            await updateDoc(userDoc, {
              tests: arrayUnion(testData),
            });
          } else {
            await updateDoc(userDoc, {
              tests: [testData],
            });
          }
        } else {
          await setDoc(userDoc, {
            tests: [testData],
          });
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Redirect to evaluation page
        router.push(
          `/Evaluation?selectedOption=${JSON.stringify(
            selectedOptions
          )}&tMarks=${tMarks}&slug=${slug}`
        );
      } catch (error) {
        console.error("Error updating Firestore:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <TestNavbar
        totalQuestions={questions.length}
        currentQuestionIndex={currentQuestionIndex}
        onPageChange={handlePageChange}
        selectedOptions={selectedOptions}
        slug={slug}
        handleSubmitParent={handleSubmitParent}
      />

      {currentQuestion ? (
        <div className="background h-[80vh] bg-white p-8 grid grid-cols-[5fr,1fr] gap-4 overflow-y-hidden">
          <div className="p-8 bg-gray rounded overflow-y-auto">
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

            {/* Submit Button with Loading Spinner */}
            <div className="mt-6">
              <button
                onClick={handleSubmitParent}
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-lg text-white transition-all ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
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
                    Submitting...
                  </div>
                ) : (
                  "Submit Test"
                )}
              </button>
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
