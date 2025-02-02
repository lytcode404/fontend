import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
const CategoryNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <Head>{`<style>
      header{
        font-family: 'Abril Fatface', cursive;
        font-family: 'Roboto', sans-serif;
      }
    </style>`}</Head>
      <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none px-4 shadow-2 md:px-6 2xl:px-11">
        <nav className="bg-white border-gray-200 py-2.5 dark::bg-gray-900">
          <div className="flex items-center justify-between w-full px- mx-auto">
            <div className="flex">
              <Link href="#" className="flex items-center mr-10">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark::text-white">
                  Nextgen Navigator
                </span>
              </Link>
              <div
                className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                  <li
                    onClick={() => {
                      setActiveTab("Overview");
                    }}
                    className={`my-2 block border-b-2  px-2 pb-3.5 pt-4 font-medium uppercase leading-tight text-sm hover:bg-gray-100  focus:bg-gray-100 ${
                      activeTab === "Overview"
                        ? "border-blue-400  bg-slate-100"
                        : "border-none"
                    }`}
                  >
                    <Link
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark::text-gray-400 lg:dark::hover:text-white dark::hover:bg-gray-700 dark::hover:text-white lg:dark::hover:bg-transparent dark::border-gray-700"
                    >
                      OverView
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setActiveTab("Test Series");
                    }}
                    className={`my-2 block border-b-2  px-2 pb-3.5 pt-4 font-medium uppercase leading-tight text-sm hover:bg-gray-100  focus:bg-gray-100 ${
                      activeTab === "Test Series"
                        ? "border-blue-400  bg-slate-100"
                        : "border-none"
                    }`}
                  >
                    <Link
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark::text-gray-400 lg:dark::hover:text-white dark::hover:bg-gray-700 dark::hover:text-white lg:dark::hover:bg-transparent dark::border-gray-700"
                    >
                      Test Series
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setActiveTab("Quizzes");
                    }}
                    className={`my-2 block border-b-2  px-2 pb-3.5 pt-4 font-medium uppercase leading-tight text-sm hover:bg-gray-100  focus:bg-gray-100 ${
                      activeTab === "Quizzes"
                        ? "border-blue-400  bg-slate-100"
                        : "border-none"
                    }`}
                  >
                    <Link
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark::text-gray-400 lg:dark::hover:text-white dark::hover:bg-gray-700 dark::hover:text-white lg:dark::hover:bg-transparent dark::border-gray-700"
                    >
                      Quizzes
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setActiveTab("Exam Info");
                    }}
                    className={`my-2 block border-b-2  px-2 pb-3.5 pt-4 font-medium uppercase leading-tight text-sm hover:bg-gray-100  focus:bg-gray-100 ${
                      activeTab === "Exam Info"
                        ? "border-blue-400  bg-slate-100"
                        : "border-none"
                    }`}
                  >
                    <Link
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark::text-gray-400 lg:dark::hover:text-white dark::hover:bg-gray-700 dark::hover:text-white lg:dark::hover:bg-transparent dark::border-gray-700"
                    >
                      Exam Info
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setActiveTab("PYQs");
                    }}
                    className={`my-2 block border-b-2  px-2 pb-3.5 pt-4 font-medium uppercase leading-tight text-sm hover:bg-gray-100  focus:bg-gray-100 ${
                      activeTab === "PYQs"
                        ? "border-blue-400  bg-slate-100"
                        : "border-none"
                    }`}
                  >
                    <Link
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark::text-gray-400 lg:dark::hover:text-white dark::hover:bg-gray-700 dark::hover:text-white lg:dark::hover:bg-transparent dark::border-gray-700"
                    >
                      PYQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <Link
              href="https://dilshad.com/product/tailwind-css/landing-page"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark::bg-purple-600 dark::hover:bg-purple-700 focus:outline-none dark::focus:ring-purple-800"
            >
              Login
            </Link> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default CategoryNavigation;
