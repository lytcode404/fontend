import BreadCrumb from "@/components/BreadCrumb";
import OverviewBackend from "@/components/OverviewBackend";
import UploadPaper from "@/components/UploadPaper";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

const CreateExam = () => {
  const [selectedValue, setSelectedValue] = useState("PYQs");
  const router = useRouter();
  const activeCategoryName = router.query.activeCategoryName;
  const categoryTitle = router.query.categoryTitle;

  return (
    <div>
      <BreadCrumb
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />

      {selectedValue == "Overview" && "Exam Info" ? (
        <OverviewBackend />
      ) : (
        <UploadPaper
          selectedValue={selectedValue}
          activeCategoryName={activeCategoryName}
          categoryTitle={categoryTitle}
        />
      )}
    </div>
  );
};

export default CreateExam;
