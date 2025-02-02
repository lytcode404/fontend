import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
const BulletCard = ({ title, image, handleLogin }) => {
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
      <div
        onClick={handleLogin}
        id="card"
        className="card col-span-1 w-full rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300 ease-in-out flex justify-between items-center cursor-pointer hover:scale-110 p-4 max-sm:h-24"
      >
        <div className="flex justify-between">
          <Image
            src={image}
            alt={title}
            height={944}
            width={944}
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
      </div>
    </>
  );
};

export default BulletCard;
