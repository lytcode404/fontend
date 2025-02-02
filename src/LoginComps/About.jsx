import Head from "next/head";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        {`
            <style>
                section{
                    font-family: 'Abril Fatface', cursive;
                    font-family: 'Roboto', sans-serif;
                }
            </style>
            `}
      </Head>
      <section className="relative py-10 sm:py-16 lg:py-24">
        <Image
          src="/bg2.png"
          alt=""
          height={44}
          width={44}
          className="absolute top-0 bottom-0 left-0 right-0 -z-40"
        />
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <Image
                className="w-full"
                src="/about.png"
                width={944}
                height={944}
              />
            </div>
            <div>
              <h1 className="mt-4 text-4xl font-bold text-heading lg:mt-8 sm:text-4xl">
                In the world of exams, we&apos;re your guiding light. Navigate
                the chapters of success with our test book web service
              </h1>
              <p className="mt-4 text-base text-sub-heading lg:mt-8 sm:text-xl">
                Empowering minds, one test at a time. Our test book web service
                is your key to mastering every subject.
              </p>
              <a
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-primary rounded-full lg:mt-16 hover:bg-success focus:bg-purple-500"
                href="#"
              >
                <span>Join for free </span>
                <span className="w-fit">
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
              </a>
              <p className="mt-5 text-info">
                <span>Already joined us? </span>
                <a
                  className=" transition-all text-blue-500 duration-200 hover:underline"
                  href="#"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
