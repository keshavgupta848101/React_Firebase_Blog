import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu_OHeRkTt8a9c7aziSfzhD9JTqe9H3n4",
  authDomain: "blogapp-9e815.firebaseapp.com",
  projectId: "blogapp-9e815",
  storageBucket: "blogapp-9e815.appspot.com",
  messagingSenderId: "952305446365",
  appId: "1:952305446365:web:d2309fedaffd2b8a149a34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
