// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEQc__Azahw1Nztxgyr_-6_qi1Mnl2zb4",
  authDomain: "ikka-b6b63.firebaseapp.com",
  projectId: "ikka-b6b63",
  storageBucket: "ikka-b6b63.appspot.com",
  messagingSenderId: "115031737693",
  appId: "1:115031737693:web:1815679444fb00ef0e94b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
