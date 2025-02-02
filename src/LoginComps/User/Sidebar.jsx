import { auth } from "@/db/firebase";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Sidebar = ({ displayName, sideNavActive, setSideNavActive }) => {
  const [isPagesMenuOpen, setPagesMenuOpen] = useState(true);
  const [isAutomationMenuOpen, setAutomationMenuOpen] = useState(true);

  const togglePagesMenu = () => {
    setPagesMenuOpen(!isPagesMenuOpen);
  };

  const toggleAutomationsMenu = () => {
    setAutomationMenuOpen(!isAutomationMenuOpen);
  };
  return (
    <>
      {/* <!-- Desktop sidebar --> */}
      <aside className="max-sm:hidden z-20 overflow-y-auto bg-white shadow-xl border-r-2 h-screen">
        <div className="py-4 text-gray-500 dark::text-gray-400">
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              {sideNavActive === "Dashboard" && (
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              )}
              <Link
                className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark::hover:text-gray-200 dark::text-gray-100"
                href=""
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span
                  className="ml-4"
                  onClick={() => setSideNavActive("Dashboard")}
                >
                  Dashboard
                </span>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="relative px-6 py-3">
              {sideNavActive === "InstantTest" && (
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              )}
              <Link
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark::hover:text-gray-200"
                href=""
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                <span
                  className="ml-4"
                  onClick={() => setSideNavActive("InstantTest")}
                >
                  Instant Test
                </span>
              </Link>
            </li>

            <li className="relative px-6 py-3">
              <button
                className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark::hover:text-gray-200"
                onClick={togglePagesMenu}
                aria-haspopup="true"
              >
                <span className="inline-flex items-center">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                  <span className="ml-4">{displayName}</span>
                </span>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {isPagesMenuOpen && (
                <ul
                  className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark::text-gray-400 dark::bg-gray-900"
                  aria-label="submenu"
                >
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark::hover:text-gray-200">
                    {sideNavActive === "Calendar" && (
                      <span
                        className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                        aria-hidden="true"
                      ></span>
                    )}
                    <div
                      className="w-full cursor-pointer"
                      onClick={() => setSideNavActive("Calendar")}
                    >
                      Calendar
                    </div>
                  </li>
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark::hover:text-gray-200">
                    {sideNavActive === "Profile" && (
                      <span
                        className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                        aria-hidden="true"
                      ></span>
                    )}
                    <div
                      className="w-full cursor-pointer"
                      onClick={() => setSideNavActive("Profile")}
                    >
                      Profile
                    </div>
                  </li>
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark::hover:text-gray-200">
                    {sideNavActive === "History" && (
                      <span
                        className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                        aria-hidden="true"
                      ></span>
                    )}
                    <div
                      className="w-full cursor-pointer"
                      onClick={() => setSideNavActive("History")}
                    >
                      History
                    </div>
                  </li>
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark::hover:text-gray-200">
                    {sideNavActive === "Settings" && (
                      <span
                        className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                        aria-hidden="true"
                      ></span>
                    )}
                    <div
                      className="w-full cursor-pointer"
                      onClick={() => setSideNavActive("Settings")}
                    >
                      Settings
                    </div>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative px-6 py-3">
              <button
                className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark::hover:text-gray-200"
                onClick={toggleAutomationsMenu}
                aria-haspopup="true"
              >
                <span className="inline-flex items-center">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                  <span className="ml-4">Others</span>
                </span>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {isAutomationMenuOpen && (
                <ul
                  className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark::text-gray-400 dark::bg-gray-900"
                  aria-label="submenu"
                >
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark::hover:text-gray-200">
                    {sideNavActive === "Charts" && (
                      <span
                        className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                        aria-hidden="true"
                      ></span>
                    )}
                    <div className="w-full">Charts</div>
                  </li>
                  <li className="cursor-pointer px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark::hover:text-gray-200">
                    <div onClick={() => auth.signOut()} className="w-full">
                      Logout
                    </div>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
