// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKNSjUTCyjqoaXGMXHvotv0mpPNW3gFpc",
  authDomain: "mel-website-269c1.firebaseapp.com",
  projectId: "mel-website-269c1",
  storageBucket: "mel-website-269c1.appspot.com",
  messagingSenderId: "491313591311",
  appId: "1:491313591311:web:b482e7abc5c6e919af5f7a",
  measurementId: "G-RNNQ53MZWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);