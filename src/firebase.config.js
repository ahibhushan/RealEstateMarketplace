// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxwXiiX-pEv1-rDZ41AMIGUMbnrCvjp5Y",
  authDomain: "realestatemarketplace-efedc.firebaseapp.com",
  projectId: "realestatemarketplace-efedc",
  storageBucket: "realestatemarketplace-efedc.appspot.com",
  messagingSenderId: "608793565059",
  appId: "1:608793565059:web:57f1303ed144160001c8b6",
  measurementId: "G-XFDF6GJS86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);