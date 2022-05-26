// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import 'firebase/auth';
//import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXDAyNnSaFR9nIoIsmKh3JsDh-YMLMLgw",
  authDomain: "simple-notes-firebase-794af.firebaseapp.com",
  projectId: "simple-notes-firebase-794af",
  storageBucket: "simple-notes-firebase-794af.appspot.com",
  messagingSenderId: "437593727555",
  appId: "1:437593727555:web:e865ecddca90a95b056af6",
  measurementId: "G-043JKB5YJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;