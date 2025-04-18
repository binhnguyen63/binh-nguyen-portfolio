// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNDP2K1vT-zgF3DD7x_iN3wf72kzAIAZc",
  authDomain: "binh-portfolio.firebaseapp.com",
  projectId: "binh-portfolio",
  storageBucket: "binh-portfolio.firebasestorage.app",
  messagingSenderId: "903671886493",
  appId: "1:903671886493:web:b72aa1fa8ac7a85cb49a74",
  measurementId: "G-1C6BRY2GRV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export async function sendMessage(msg, senderId, name) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      msg,
      senderId,
      name,
      timestamp: serverTimestamp(), // Use Firestore's server timestamp
    });
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}
