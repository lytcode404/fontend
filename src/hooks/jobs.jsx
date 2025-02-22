import { serverTimestamp } from "firebase/firestore";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  doc,
  query,
  where,
  orderBy,
  deleteDoc,
} from "@firebase/firestore";
import { auth, db } from "@/db/firebase";

// create job
export const createJob = async (jobObj) => {
  const jobWithTimestamp = {
    ...jobObj,
    createdAt: serverTimestamp(),
    jobId: serverTimestamp(),
  };

  try {
    const docRef = await addDoc(collection(db, "jobsData"), jobWithTimestamp);
    console.log("Document written with ID: ", docRef.id);

    return docRef.id;
  } catch (error) {
    console.error("Error creating job: ", error);
    throw error;
  }
};

// fetch all jobs
export const fetchAllJobs = async () => {
  const jobs = [];
  const q = query(collection(db, "jobsData"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    jobs.push({ ...doc.data(), id: doc.id });
  });
//   console.log("jobs", jobs);

  return jobs;
};

// Fetch a single job by ID
export const fetchOneJob = async (jobId) => {
  if (!jobId) throw new Error("Job ID is required");

  const jobRef = doc(db, "jobsData", jobId);
  const jobSnap = await getDoc(jobRef);

  if (jobSnap.exists()) {
    return { ...jobSnap.data(), id: jobSnap.id };
  } else {
    throw new Error("Job not found");
  }
};

// Fetch user data from Firestore
export const fetchUserData = async () => {
  if (!auth.currentUser) return null; // Ensure the user is logged in

  const userDocRef = doc(db, "users", auth.currentUser.uid);
  const userDocSnap = await getDoc(userDocRef);

  if (userDocSnap.exists()) {
    return { ...userDocSnap.data(), id: userDocSnap.id };
  } else {
    console.log("No user data found");
    return null;
  }
};
