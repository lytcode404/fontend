import React from "react";
import Head from "next/head";
import TableOne from "@/Utils/Tables/TableOne";
import TableTwo from "@/Utils/Tables/TableTwo";
import TableThree from "@/Utils/Tables/TableThree";
import Breadcrumb from "@/Utils/Breadcrumb";

const Tables = () => {
  return (
    <>
      <Head>
        <title>Tables | Fyndra Online</title>
        <meta
          name="description"
          content="This is Home Blog page for Next Navigator Next.js E-commerce Dashboard Template."
        />
        {/* Add other meta tags as needed (e.g., keywords, author, viewport, etc.) */}
      </Head>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        {/* <TableTwo />
        <TableThree /> */}
      </div>
    </>
  );
};

export default Tables;
