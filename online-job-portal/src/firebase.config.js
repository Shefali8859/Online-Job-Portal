
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTzYBfAelLDDh7HN7hAOM-FMmxktwAdMs",
  authDomain: "online-job-portal-833a3.firebaseapp.com",
  projectId: "online-job-portal-833a3",
  storageBucket: "online-job-portal-833a3.appspot.com",
  messagingSenderId: "955791745182",
  appId: "1:955791745182:web:913e544763539529a35b8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};