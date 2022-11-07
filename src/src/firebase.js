// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator} from "firebase/auth";
import { getFirestore, connectFirestoreEmulator} from 'firebase/firestore'
import React from "react";


export const FirebaseContext = React.createContext([])


export function initApp(){
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
  try {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  // DEVELOPMENT ONLY!

  
  } catch(error) {
    return Promise.reject(error)
  }
  const auth = getAuth()
  const firestore = getFirestore()


  // connectAuthEmulator(auth, 'http://localhost:9099')
  // connectFirestoreEmulator(firestore, 'http://localhost:8081')
  console.log('Firebase succesfully initialized')
  return Promise.resolve([auth, firestore])
}

