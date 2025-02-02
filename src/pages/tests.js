import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import BulletCard2 from "@/components/BulletCard2";
const data = {
  categories: [
    { id: 1, name: "Python Certification" },
    { id: 2, name: "AI & Machine Learning Exams" },
    { id: 3, name: "Web Development Certification" },
    { id: 4, name: "Data Science & Analytics Exams" },
    { id: 5, name: "Cloud Computing Certifications" },
    { id: 6, name: "Cybersecurity Exams" },
    { id: 7, name: "DevOps & Software Engineering Exams" },
  ],
  cards: {
    1: [
      { title: "Python Developer" },
      { title: "Machine Learning Specialist Exam" },
      { title: "Full-Stack Web Developer Certification" },
      { title: "Data Science Professional Exam" },
      { title: "Cloud Computing & AWS Certification" },
      { title: "Cybersecurity Analyst Certification" },
      { title: "DevOps Engineer Certification" },
      { title: "AI & Deep Learning Specialist Exam" },
      { title: "Software Engineering Mastery Exam" },
      { title: "Explore All Tech Exams" },
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
const Tests = () => {
  const [activeCategory, setActiveCategory] = useState(data.categories[0].id);

  const activeCards = data.cards[activeCategory] || [];
  return (
    <div className="container mx-auto py-4">
      {/* <ul
        className="mb-5 flex w-full justify-between list-none flex-row flex-wrap border-b-2 pl-0"
        role="tablist"
      >
        {data.categories.map((category) => (
          <li
            role="presentation"
            key={category.id}
            className={` my-2 block border-b-2  px-2 pb-3.5 pt-4 font-medium uppercase leading-tight text-sm hover:bg-gray-100  focus:bg-gray-100 ${
              activeCategory === category.id
                ? "border-blue-400  bg-slate-100"
                : "border-none"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <button className="">{category.name}</button>
          </li>
        ))}
      </ul> */}

      <div className="mt-4 w-full flex flex-wrap gap-3 justify-between  items-center ">
        {activeCards &&
          activeCards.map((activeCard, index) => (
            <BulletCard2
              key={index}
              title={activeCard.title}
              image={`/hero.png`}
            />
          ))}
      </div>
    </div>
  );
};

export default Tests;
