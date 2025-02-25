import React from "react";
import Head from "next/head";
import Breadcrumb from "@/Utils/Breadcrumb";
import Image from "next/image";
import { auth } from "@/db/firebase";

const Profile = () => {
  function formatCreationTime(creationTime) {
    const dateObject = new Date(creationTime);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(dateObject);

    return formattedDate;
  }
  function parseSignInTime(lastSignInTime) {
    const dateObject = new Date(lastSignInTime);

    const formattedObject = {
      day: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
        dateObject
      ),
      date: new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(dateObject),
      time: new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(dateObject),
    };

    return formattedObject;
  }

  function extractUserName(email) {
    // Assuming the email format is "username@domain"
    const userName = email.split("@")[0];
    return userName.charAt(0).toUpperCase();
  }

  return (
    <>
      <Head>
        <title>Profile | Fyndra Online Services</title>
        <meta
          name="description"
          content="This is Home Blog page for Career Catalyst Next.js E-commerce Dashboard Template."
        />
        {/* Add other meta tags as needed (e.g., keywords, author, viewport, etc.) */}
      </Head>
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <Image
            src="https://picsum.photos/602/226"
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-center"
            width={970}
            height={260}
          />
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full  p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2 w-full h-full">
              <div
                className={`flex items-center justify-center w-full h-full rounded-full bg-primary`}
              >
                <div className="text-white font-bold text-7xl">
                  {extractUserName(auth.currentUser.email)}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white capitalize">
              {auth.currentUser.email.split("@")[0]}
            </h3>
            <p className="font-medium">
              since {formatCreationTime(auth.currentUser.metadata.creationTime)}
            </p>
            <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  {
                    parseSignInTime(auth.currentUser.metadata.lastSignInTime)
                      .day
                  }
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  {
                    parseSignInTime(auth.currentUser.metadata.lastSignInTime)
                      .date
                  }
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  {
                    parseSignInTime(auth.currentUser.metadata.lastSignInTime)
                      .time
                  }
                </span>
              </div>
            </div>

            <div className="mx-auto max-w-180">
              <p className="mt-4.5">
                Marketing mastery is forged in the crucible of resilience.
                It&apos;s not about avoiding setbacks, but about persistently
                turning challenges into triumphs, navigating the dynamic
                landscape with unwavering determination, and creating success
                from every obstacle encountered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
