import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { Pagination } from "./HandleTest";

const TestNavbar = ({
  totalQuestions,
  currentQuestionIndex,
  onPageChange,
  selectedOptions,
  slug,
  handleSubmitParent,
}) => {
  const handleSubmit = () => {
    handleSubmitParent(); // Calls the parent-provided submit function
  };
  return (
    <>
      <Head></Head>
      <header className="sticky top-0 z-999 flex w-full bg-white bg-gray-200 border-b-2 shadow-md">
        <nav className="w-full flex justify-between px-7 py-2.5 container mx-auto">
          <div className="flex flex-wrap items-center justify-between px-4">
            <Link href="#" className="flex items-center">
              <span className="selftext-xl font-semibold whitespace-nowrap text-black capitalize">
                <Timer />
                {slug}
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <button
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-primary hover:bg-secondary rounded text-white uppercase px-2 py-1 pt-[8px]"
          >
            submit
          </button>
        </nav>
        <div className="lg:hidden">
          <Pagination
            totalQuestions={totalQuestions}
            currentQuestionIndex={currentQuestionIndex}
            onPageChange={onPageChange}
          />
        </div>
      </header>
    </>
  );
};

export default TestNavbar;

const Timer = () => {
  const initialTime = 20*60; // 3 hours in seconds
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => Math.max(0, prevTime - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return <p>{formatTime(time)}</p>;
};
