import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBlI9oAcqWwiYCJ2oTQ78PYwWN3_Sk4SMk",
  authDomain: "event-tracker-app-13ad6.firebaseapp.com",
  projectId: "event-tracker-app-13ad6",
  storageBucket: "event-tracker-app-13ad6.appspot.com",
  messagingSenderId: "1026046676305",
  appId: "1:1026046676305:web:76cceee77e023d3babd770"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Firebase Firestore
export const db = getFirestore(app);