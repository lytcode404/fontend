// components/TabNavigation.js
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BulletCard from "../components/BulletCard";
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
      { title: "SSC CGL" },
      { title: "SSC MTS" },
      { title: "SSSC CPO" },
      { title: "SSC CHSL" },
      { title: "DELHI POLICE CONSTABLE" },
      { title: "SSC GD CONSTABLE" },
      { title: "SSC STENOGRAPHER" },
      { title: "SSC JE CE" },
      { title: "SSC JE ME" },
      { title: "SSC JE EE" },
      { title: "SSC SELECTION POST" },
      { title: "EXPLORE ALL EXAMS" },
    ],
    2: [
      { title: "IBPS CLERK" },
      { title: "IBPS PO" },
      { title: "RRP OFFICER SCAL - 1" },
      { title: "SBI CLERK" },
      { title: "RRB OFFICE ASSISTANT" },
      { title: "SBI PO" },
      { title: "CENTRAL BANK OF INDIA MANAGER" },
      { title: "BANK OF INDIA PO" },
      { title: "JAIIB EXAM" },
      { title: "BOB ACQUSITION OFFICER" },
      { title: "EPFO STENOGRAPHER" },
      { title: "EXPLORE ALL EXAMS" },
    ],
    3: [
      { title: "UGC NET" },
      { title: "BIHAR STET" },
      { title: "EMRS HOSTEL WARDEN" },
      { title: "JSSC PRIMARY TEACHER" },
      { title: "DSSSB TGT" },
      { title: "EMRS LIBRARIAN" },
      { title: "EMRS ACCOUNTANT" },
      { title: "CTET" },
      { title: "BIHAR PRIMARY TECHER" },
      { title: "EMRS TGT" },
      { title: "EMRS PGT" },
      { title: "EXPLORE ALL EXAMS" },
    ],
    4: [
      { title: "Card 4" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
    ],
    5: [
      { title: "Card 5" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
    ],
    6: [
      { title: "Card 6" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
    ],
    7: [
      { title: "Card 7" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
      { title: "Card 11" },
    ],
    // Add more cards for each category...
  },
};
const TabNavigation = ({ handleLogin }) => {
  const [activeCategory, setActiveCategory] = useState(data.categories[0].id);

  const activeCards = data.cards[activeCategory] || [];

  return (
    <div className="w-[90%] mx-auto py-4 ">
      <div className="w-full text-center mb-4">
        <h1 className="text-2xl font-bold mb-4">Popular Exams</h1>
        <p>
          Get exam-ready with concepts, questions and study notes as per the
          latest pattern
        </p>
      </div>
      <ul
        className="mb-5 flex w-full max-sm:overflow-x-auto justify-center max-sm:justify-start gap-4 list-none flex-row border-b-2 pl-0"
        role="tablist"
      >
        {data.categories.map((category) => (
          <li
            role="presentation"
            key={category.id}
            className={`  my-2 block border-b-2 whitespace-nowrap px-2 pb-3.5 pt-4 font-medium uppercase leading-tight text-sm hover:bg-gray-100  focus:bg-gray-100 ${
              activeCategory === category.id
                ? "border-blue-400  bg-slate-100"
                : "border-none"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <button className="">{category.name}</button>
          </li>
        ))}
      </ul>

      <div className="mt-4 w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:h-[400px] max-sm:overflow-y-auto gap-3 place-items-center">
        {activeCards &&
          activeCards.map((activeCard, index) => (
            <BulletCard
              key={index}
              title={activeCard.title}
              image={`/hero.png`}
              handleLogin={handleLogin}
            />
          ))}
      </div>
    </div>
  );
};

export default TabNavigation;
