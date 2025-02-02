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
    <>
      <Navigation handleLogin={handleLogin} />
      <Hero />
      <TabNavigation handleLogin={handleLogin} />
      <CarouselComp />
      {/* <Content1 /> */}
      <About />
      <Content5 />
      <Content12 />
      <Step2 />
      <p className="mx-8 my-16 max-w-full text-xl leading-relaxed text-gray-600">
        Throughout your journey with us, we are dedicated to providing a
        user-friendly, digital experience that empowers you to make informed
        financial decisions. Your success is our priority, and our team of
        experts is here to ensure your satisfaction. Are you ready to streamline
        your bookkeeping and gain valuable financial insights? Book a free
        consultation or sign up for a free month today and experience the
        convenience of our tailored solution.
      </p>
      <Testimonial5 />
      <Cta3 />
      <Pricing8 />
      <Faq4 />
      <Footer6 />
    </>
  );
};

export default Login;
