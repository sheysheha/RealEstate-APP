// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-46aae.firebaseapp.com",
  projectId: "real-estate-app-46aae",
  storageBucket: "real-estate-app-46aae.firebasestorage.app",
  messagingSenderId: "1075271208014",
  appId: "1:1075271208014:web:4783c43990597c2579071f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);