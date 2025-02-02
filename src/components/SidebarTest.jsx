// components/Sidebar.js
import Link from "next/link";
import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Pagination } from "./HandleTest";
import Image from "next/image";
import Head from "next/head";
{
  /* Right Column */
}
const SidebarTest = ({
  selectedOptions,
  totalQuestions,
  currentQuestionIndex,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalQuestions }, (_, i) => i + 1);

  return (
    <>
      <Head></Head>
      <div className="overflow-y-auto bg-gray p-4 rounded shadow">
        <div className="flex flex-wrap gap-3 justify-start items-center">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page - 1)}
              className={`px-4 py-2 rounded-md ${
                currentQuestionIndex === page - 1
                  ? "bg-primary text-white"
                  : selectedOptions?.hasOwnProperty(page - 1)
                  ? "bg-meta-1 text-white"
                  : "bg-secondary text-white"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* <div className="h-[100px]"></div> */}
      </div>
    </>
  );
};

export default SidebarTest;
