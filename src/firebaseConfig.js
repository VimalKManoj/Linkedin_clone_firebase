// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADP79DoCjmd2kj3XWCc9v4-Ehf3utRIJ4",
  authDomain: "linkedin-clone-de0c0.firebaseapp.com",
  projectId: "linkedin-clone-de0c0",
  storageBucket: "linkedin-clone-de0c0.appspot.com",
  messagingSenderId: "964458406822",
  appId: "1:964458406822:web:f32d181ad2e14097b82567",
  measurementId: "G-4WKV93RKHV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
export { app, auth, firestore, storage };
