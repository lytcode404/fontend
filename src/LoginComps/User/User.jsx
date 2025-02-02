import React from "react";
import { useState } from "react";
import BulletCard from "../../components/BulletCard";
import Head from "next/head";
import Link from "next/link";
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

const User = () => {
  return <div>User</div>;
};

export default User;

export const Profile = () => {
  return <div>Profile</div>;
};

export const History = () => {
  return <div>History</div>;
};

export const Credits = () => {
  return <div>Credits</div>;
};

export const Settings = () => {
  return <div>Settings</div>;
};

export const InstantTest = () => {
  const [activeCategory, setActiveCategory] = useState(data.categories[0].id);

  const activeCards = data.cards[activeCategory] || [];
  return (
    <div className="container mx-auto py-4">
      <div className="w-full text-center mb-4">
        <h1 className="text-2xl font-bold mb-4">Popular Exams</h1>
        <p>
          Get exam-ready with concepts, questions and study notes as per the
          latest pattern
        </p>
      </div>
      <ul
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
      </ul>

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

const BulletCard2 = ({ title, image }) => {
  return (
    <>
      <Head>
        <style>
          {`
      #card:hover svg {
        transform: translateX(5px);
        transition: transform 0.3s ease-in-out;
      }
    `}
        </style>
      </Head>
      <Link
        href={`/test`}
        id="card"
        className="card rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300 ease-in-out flex justify-between items-center cursor-pointer hover:scale-110 p-4 w-[30%]"
      >
        <div className="flex justify-between">
          <Image
            src={image}
            alt={title}
            height={44}
            width={44}
            className="rounded-full w-16 h-16"
          />
          <div className="py-4">
            <h2 className="text-md">{title}</h2>
          </div>
        </div>
        <div className="flex items-center justify-end p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    </>
  );
};
