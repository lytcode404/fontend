import React from "react";
import Cards from "./Cards";
import Image from "next/image";
const Dashboard = ({ data }) => {
  return (
    <div className="container px-6 mx-auto grid">
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark::text-gray-200">
        Dashboard
      </h2>
      <Cards data={data} sent={`sent`} />
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark::text-gray-200">
        Charts
      </h2>
      {data && data.length > 0 ? (
        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark::bg-gray-800">
            <h4 className="mb-4 font-semibold text-gray-800 dark::text-gray-300">
              Revenue
            </h4>
            <canvas id="pie"></canvas>
            <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark::text-gray-400">
              {/* <!-- Chart legend --> */}
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"></span>
                <span>Shirts</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span>
                <span>Shoes</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
                <span>Bags</span>
              </div>
            </div>
          </div>
          <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark::bg-gray-800">
            <h4 className="mb-4 font-semibold text-gray-800 dark::text-gray-300">
              Traffic
            </h4>
            <canvas id="line"></canvas>
            <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark::text-gray-400">
              {/* <!-- Chart legend --> */}
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span>
                <span>Organic</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
                <span>Paid</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No Data found for evaluation</p>
      )}
    </div>
  );
};

export default Dashboard;
