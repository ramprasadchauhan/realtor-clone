// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realtor-clone-28f86.firebaseapp.com",
  projectId: "realtor-clone-28f86",
  storageBucket: "realtor-clone-28f86.appspot.com",
  messagingSenderId: "964359890115",
  appId: "1:964359890115:web:0324e200bbccb3e0926e76",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
