import Breadcrumb from "@/Utils/Breadcrumb";
import ChartFour from "@/Utils/Charts/ChartFour";
import ChartOne from "@/Utils/Charts/ChartOne";
import ChartThree from "@/Utils/Charts/ChartThree";
import ChartTwo from "@/Utils/Charts/ChartTwo";
import Head from "next/head";
import React from "react";

const Chart = () => {
  return (
    <>
      <Head>
        <title>Charts | Fyndra Online Services</title>
        <meta
          name="description"
          content="This is Home Blog page for Nextgen Navigator Next.js E-commerce Dashboard Template."
        />
        {/* Add other meta tags as needed (e.g., keywords, author, viewport, etc.) */}
      </Head>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <ChartFour />
        </div>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
