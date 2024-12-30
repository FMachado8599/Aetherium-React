// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHfooXf3ei6Kb3i-iSGVWAJR50HXQ-n2I",
  authDomain: "aetherium-react.firebaseapp.com",
  projectId: "aetherium-react",
  storageBucket: "aetherium-react.firebasestorage.app",
  messagingSenderId: "725343232671",
  appId: "1:725343232671:web:efbbfcaebc6dc9efe878aa",
  measurementId: "G-HZ5H3F948J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
