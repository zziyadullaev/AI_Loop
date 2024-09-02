// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loop-ai-38c8c.firebaseapp.com",
  projectId: "loop-ai-38c8c",
  storageBucket: "loop-ai-38c8c.appspot.com",
  messagingSenderId: "763609881430",
  appId: "1:763609881430:web:31276adb0c68b132a954f7",
  measurementId: "G-NCMZJVQR27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
