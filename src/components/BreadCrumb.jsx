import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const data = {
  categories: [
    { id: 1, name: "SSC Exams" },
    { id: 2, name: "Banking Exams" },
    { id: 3, name: "Teaching Exams" },
    { id: 4, name: "Civil Exams" },
    { id: 5, name: "Railway Exams" },
    { id: 6, name: "Engineering Recruitment Exams" },
    { id: 7, name: "Defence Exams" },
  ],
  cards: {
    1: [
      { id: 1, title: "SSC CGL" },
      { id: 2, title: "SSC MTS" },
      { id: 3, title: "SSSC CPO" },
      { id: 4, title: "SSC CHSL" },
      { id: 5, title: "DELHI POLICE CONSTABLE" },
      { id: 6, title: "SSC GD CONSTABLE" },
      { id: 7, title: "SSC STENOGRAPHER" },
      { id: 8, title: "SSC JE CE" },
      { id: 9, title: "SSC JE ME" },
      { id: 10, title: "SSC JE EE" },
      { id: 11, title: "SSC SELECTION POST" },
      { id: 12, title: "EXPLORE ALL EXAMS" },
    ],
    2: [
      { id: 1, title: "IBPS CLERK" },
      { id: 2, title: "IBPS PO" },
      { id: 3, title: "RRP OFFICER SCAL - 1" },
      { id: 4, title: "SBI CLERK" },
      { id: 5, title: "RRB OFFICE ASSISTANT" },
      { id: 6, title: "SBI PO" },
      { id: 7, title: "CENTRAL BANK OF INDIA MANAGER" },
      { id: 8, title: "BANK OF INDIA PO" },
      { id: 9, title: "JAIIB EXAM" },
      { id: 10, title: "BOB ACQUSITION OFFICER" },
      { id: 11, title: "EPFO STENOGRAPHER" },
      { id: 12, title: "EXPLORE ALL EXAMS" },
    ],
    3: [
      { id: 1, title: "UGC NET" },
      { id: 2, title: "BIHAR STET" },
      { id: 3, title: "EMRS HOSTEL WARDEN" },
      { id: 4, title: "JSSC PRIMARY TEACHER" },
      { id: 5, title: "DSSSB TGT" },
      { id: 6, title: "EMRS LIBRARIAN" },
      { id: 7, title: "EMRS ACCOUNTANT" },
      { id: 8, title: "CTET" },
      { id: 9, title: "BIHAR PRIMARY TECHER" },
      { id: 10, title: "EMRS TGT" },
      { id: 11, title: "EMRS PGT" },
      { id: 12, title: "EXPLORE ALL EXAMS" },
    ],
    4: [
      { id: 1, title: "UGC NET" },
      { id: 2, title: "BIHAR STET" },
      { id: 3, title: "EMRS HOSTEL WARDEN" },
      { id: 4, title: "JSSC PRIMARY TEACHER" },
      { id: 5, title: "DSSSB TGT" },
      { id: 6, title: "EMRS LIBRARIAN" },
      { id: 7, title: "EMRS ACCOUNTANT" },
      { id: 8, title: "CTET" },
      { id: 9, title: "BIHAR PRIMARY TECHER" },
      { id: 10, title: "EMRS TGT" },
      { id: 11, title: "EMRS PGT" },
      { id: 12, title: "EXPLORE ALL EXAMS" },
    ],
    5: [
      { id: 1, title: "UGC NET" },
      { id: 2, title: "BIHAR STET" },
      { id: 3, title: "EMRS HOSTEL WARDEN" },
      { id: 4, title: "JSSC PRIMARY TEACHER" },
      { id: 5, title: "DSSSB TGT" },
      { id: 6, title: "EMRS LIBRARIAN" },
      { id: 7, title: "EMRS ACCOUNTANT" },
      { id: 8, title: "CTET" },
      { id: 9, title: "BIHAR PRIMARY TECHER" },
      { id: 10, title: "EMRS TGT" },
      { id: 11, title: "EMRS PGT" },
      { id: 12, title: "EXPLORE ALL EXAMS" },
    ],
    6: [
      { id: 1, title: "UGC NET" },
      { id: 2, title: "BIHAR STET" },
      { id: 3, title: "EMRS HOSTEL WARDEN" },
      { id: 4, title: "JSSC PRIMARY TEACHER" },
      { id: 5, title: "DSSSB TGT" },
      { id: 6, title: "EMRS LIBRARIAN" },
      { id: 7, title: "EMRS ACCOUNTANT" },
      { id: 8, title: "CTET" },
      { id: 9, title: "BIHAR PRIMARY TECHER" },
      { id: 10, title: "EMRS TGT" },
      { id: 11, title: "EMRS PGT" },
      { id: 12, title: "EXPLORE ALL EXAMS" },
    ],
    7: [
      { id: 1, title: "UGC NET" },
      { id: 2, title: "BIHAR STET" },
      { id: 3, title: "EMRS HOSTEL WARDEN" },
      { id: 4, title: "JSSC PRIMARY TEACHER" },
      { id: 5, title: "DSSSB TGT" },
      { id: 6, title: "EMRS LIBRARIAN" },
      { id: 7, title: "EMRS ACCOUNTANT" },
      { id: 8, title: "CTET" },
      { id: 9, title: "BIHAR PRIMARY TECHER" },
      { id: 10, title: "EMRS TGT" },
      { id: 11, title: "EMRS PGT" },
      { id: 12, title: "EXPLORE ALL EXAMS" },
    ],
  },
};
const BreadCrumb = ({ selectedValue, setSelectedValue }) => {
  const router = useRouter();
  const activeCategoryName = router.query.activeCategoryName;
  const categoryTitle = router.query.categoryTitle;

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="w-full container mx-auto p-4 bg-gray-200">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark::text-gray-400 dark::hover:text-white"
            >
              <svg
                className="w-3 h-3 mr-2.5"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              {activeCategoryName}
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark::text-gray-400 dark::hover:text-white"
              >
                {categoryTitle}
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <div>{selectedValue}</div>
              <select
                name="exam-options"
                id="exam-options"
                value={selectedValue}
                onChange={handleSelectChange}
                className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark::text-gray-400"
              >
                <option value="Overview">Overview</option>
                <option value="Test Series">Test Series</option>
                <option value="Quizzes">Quizzes</option>
                <option value="Exam Info">Exam Info</option>
                <option value="PYQs">PYQs</option>
              </select>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
