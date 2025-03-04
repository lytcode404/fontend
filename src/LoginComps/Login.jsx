import About from "@/LoginComps/About";
import CarouselComp from "@/LoginComps/Carousel";
import Content, { Content1, Content12, Content5 } from "@/LoginComps/Content";
import { Cta3 } from "@/LoginComps/Cta";
import { Faq4 } from "@/LoginComps/Faq";
import { Footer6 } from "@/LoginComps/Footer";
import Hero from "@/LoginComps/Hero";
import Navigation from "@/LoginComps/Navigation";
import { Pricing8 } from "@/LoginComps/Pricing";
import QuestionList from "@/components/QuestionList";
import Questionnaire from "@/components/Questionaire";
import { Step2 } from "@/LoginComps/Step";
import TabNavigation from "@/LoginComps/TabNavigation";
import { Testimonial5 } from "@/LoginComps/Testimonial";
import { auth, db } from "@/db/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { motion } from "framer-motion";
const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        router.push("/");
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const { displayName, photoURL, uid } = result.user;

      console.log(result.user);
      // Store user's name and photo in Firestore
      await setDoc(doc(db, "users", uid), {
        displayName,
        photoURL,
        uid,
      });

      router.push("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <div className="flex flex-col gap-8">
      <Navigation handleLogin={handleLogin} />
      <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center justify-center p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-[#38BDF8] text-center"
        >
          Next Navigator
        </motion.h1>
        <p className="mt-4 text-lg text-[#CBD5E1] text-center max-w-2xl">
          Unlock custom career opportunities based on your skill assessment. We
          curate personalized pathways in cutting-edge tech domains.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#1E293B] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-[#FACC15]">
                {domain.title}
              </h3>
              <p className="mt-2 text-[#E2E8F0]">{domain.description}</p>
            </motion.div>
          ))}
        </div>
        <button
          onClick={handleLogin}
          className="mt-10 bg-[#38BDF8] hover:bg-[#0284C7] text-white px-6 py-3 rounded-full text-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Login;

const domains = [
  {
    title: "Data Structures & Algorithms",
    description: "Master problem-solving skills and ace coding interviews.",
  },
  {
    title: "AI & Machine Learning",
    description: "Dive into deep learning, NLP, and AI-driven solutions.",
  },
  {
    title: "Web Development",
    description: "Build responsive, scalable, and modern web applications.",
  },
  {
    title: "App Development",
    description:
      "Create high-performance mobile applications for Android & iOS.",
  },
];
