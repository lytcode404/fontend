import CategoryNavigation from "@/components/CategoryNavigation";
import ExamInfo from "@/components/ExamInfo";
import Overview from "@/components/Overview";
import PYQs from "@/components/PYQs";
import Quizzes from "@/components/Quizzes";
import TestSeries from "@/components/TestSeries";
import { db } from "@/db/firebase";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Test = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, "available-tests");
      const querySnapshot = await getDocs(collectionRef);

      const firestoreData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(firestoreData);
    };
    fetchData();
  }, []);

  const handleActiveTab = (activeTab) => {
    switch (activeTab) {
      case "Overview":
        return <Overview />;
      case "Test Series":
        return <TestSeries data={data} />;
      case "Quizzes":
        return <Quizzes />;
      case "Exam Info":
        return <ExamInfo />;
      case "PYQs":
        return <PYQs />;

      default:
        return "";
    }
  };

  return (
    <div className=" relative">
      <CategoryNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {handleActiveTab(activeTab)}
    </div>
  );
};

export default Test;
