// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlrhE_KW9cua_gmgkNhvrWDDxqZBJVVX4",
  authDomain: "chat-portal-230b6.firebaseapp.com",
  projectId: "chat-portal-230b6",
  storageBucket: "chat-portal-230b6.appspot.com",
  messagingSenderId: "789780605738",
  appId: "1:789780605738:web:c6ea16b9d8eab44de2cc53",
  measurementId: "G-JS326NFHWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);