import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../components/Card";
export const Content1 = () => {
  return (
    <>
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
            <h1 className="text-black text-3xl text-center font-bold dark::text-white sm:text-4xl">
              Blog
            </h1>
            <p className="text-center text-lg mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:max-w-7xl xl:mx-auto">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export const Content5 = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4  text-gray-700">
        <h2 className="font-extrabold text-center text-3xl tracking-tight text-slate-900 sm:px-3 sm:text-4xl md:max-w-xl md:mx-auto lg:px-5 2xl:max-w-4xl">
          Let&apos;s Talk About Solutions
        </h2>
        <div className="flex mt-5 flex-col lg:flex-row lg:max-w-6xl lg:mx-auto lg:mt-11 xl:items-center">
          <Image
            alt=""
            width={944}
            height={944}
            className="rounded-md lg:w-7/12 lg:px-0 lg:mr-5 xl:h-min h-full"
            src="/desktop person.png"
          />
          <div className="flex flex-col mt-10 gap-y-10 lg:mt-0 lg:w-5/12 xl:w-4/12">
            <div>
              <div className="flex items-center gap-x-4">
                <div>
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">
                    1
                  </p>
                </div>
                <h1 className="font-extrabold text-xl text-slate-900 dark::text-slate-100">
                  Bookkeeping Services
                </h1>
              </div>
              <p className="mt-4">
                Maintain accurate financial records. Reconcile bank accounts
                regularly. Prepare and review financial statements.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-x-4">
                <div>
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">
                    2
                  </p>
                </div>
                <h1 className="font-extrabold text-xl text-slate-900 dark::text-slate-100">
                  Tax Preparation Services
                </h1>
              </div>
              <p className="mt-4">
                Calculate tax liabilities for individuals and businesses.
                Prepare and file tax returns accurately and on time. Stay
                up-to-date with the latest tax laws and regulations.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-x-4">
                <div>
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">
                    3
                  </p>
                </div>
                <h1 className="font-extrabold text-xl text-slate-900 dark::text-slate-100">
                  Payroll Processing
                </h1>
              </div>
              <p className="mt-4">
                Process employee payroll efficiently and accurately. Calculate
                and file payroll taxes. Prepare W-2s and 1099s for employees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Content12 = () => {
  return (
    <div className="py-11 ">
      <div className="text-center flex flex-col gap-y-3 px-2 sm:mx-auto sm:max-w-xl ">
        {/* <p className="dark::text-gray-300">Get Started</p> */}
        <h1 className="font-extrabold text-center text-3xl tracking-tight text-slate-900 dark::text-slate-100 sm:px-3 sm:text-4xl md:max-w-xl md:mx-auto lg:px-5 2xl:max-w-4xl">
          Tailored Solutions
        </h1>
        <p className="max-w-lg text-xl leading-relaxed text-gray-600">
          we offer financial analysis services to help you gain valuable
          insights into your business
        </p>
      </div>
      <div className="grid grid-cols-2 mt-5 gap-y-5 sm:gap-y-0 lg:mx-auto lg:max-w-6xl">
        <div className="col-span-2 sm:col-span-1">
          <Image
            height="500"
            width="500"
            alt="alt"
            className="w-full bg-gray-50"
            src="/about.png"
          />
        </div>
        <div className="col-span-2 px-3 pb-3 dark::border-slate-700 border-gray-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:border-t lg:border-r">
          <h1 className="font-extrabold text-xl text-slate-900">Bookkeeping</h1>
          <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            Our bookkeeping service provides comprehensive financial management
            support for small businesses in the USA. We offer a range of
            bookkeeping services tailored to meet your specific needs. Our team
            of experts will work with you to ensure that your financial records
            are up-to-date with all relevant regulations. We use latest
            technology to consolidate your financial data in a place, providing
            you with a clear snapshot of your financial position. With our
            service, you can stay on top of your financial health.
          </p>
        </div>
        <div className="col-span-2 px-3 pb-3 order-3 dark::border-slate-700 border-gray-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:order-none sm:border-b lg:border-l">
          <h1 className="font-extrabold text-xl text-slate-900">
            Financial Analysis
          </h1>
          <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            Financial dashboards are transforming decision-making for businesses
            by enabling the visualization of key data. Tools consolidate a
            companys Key performance indicators in one place while presenting a
            real-time snapshot of financial position, helping to inform future
            planning. Visuals that dashboards create not only makes it easier
            for everyone in the organization to understand exactly what is going
            on, but also highlights actionable steps that can be taken to boost
            performance.
          </p>
        </div>
        <div className="col-span-2 order-2 sm:col-span-1 sm:order-none">
          <Image
            height="500"
            width="500"
            alt="alt"
            className="w-full bg-gray-50"
            src="/desktop person.png"
          />
        </div>
      </div>
    </div>
  );
};
