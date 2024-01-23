import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.VITE_FIREBASE_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);