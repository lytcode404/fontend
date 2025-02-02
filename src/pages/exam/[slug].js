import MarksEvaluation from "@/components/MarksEvaluation";
import QuestionaireFrontend from "@/components/QuestionaireFrontend";
import { db } from "@/db/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [documentData, setDocumentData] = useState([]);

  const router = useRouter();
  const slug = router.query.slug;

  useEffect(() => {
    console.log(documentData);
  }, [documentData]);

  // window.onbeforeunload = function () {
  //   return "Dude, are you sure you want to leave? Think of the kittens!";
  // };

  useEffect(() => {
    // Local mock data
    const localData = [
      {
        question: "What is the output of the following code?\n\nprint(2 ** 3)",
        options: ["2", "3", "8", "Error"],
        correctAnswer: "8",
      },
      {
        question:
          "Which of the following is the correct syntax to create a function in Python?",
        options: [
          "def function_name():",
          "function_name def():",
          "def: function_name()",
          "function: name()",
        ],
        correctAnswer: "def function_name():",
      },
      {
        question:
          "What is the result of the following expression in Python?\n\n5 // 2",
        options: ["2", "2.5", "3", "Error"],
        correctAnswer: "2",
      },
      {
        question: "Which of the following data types is immutable in Python?",
        options: ["list", "set", "dictionary", "tuple"],
        correctAnswer: "tuple",
      },
      {
        question: "How do you add an element to a list in Python?",
        options: [
          "list.add(element)",
          "list.append(element)",
          "list.insert(element)",
          "list.push(element)",
        ],
        correctAnswer: "list.append(element)",
      },
    ];

    // Set local data as documentData
    setDocumentData(localData);
  }, []); // Empty dependency array ensures it runs once when the component is mounted

  return (
    <div>
      <QuestionaireFrontend questions={documentData} slug={slug} />
    </div>
  );
};

export default Home;
