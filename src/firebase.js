import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8a80lBGQCjbryitNftCzVl-jtCQYLlgk",
  authDomain: "react-blogs-app-f246d.firebaseapp.com",
  projectId: "react-blogs-app-f246d",
  storageBucket: "react-blogs-app-f246d.appspot.com",
  messagingSenderId: "727014674693",
  appId: "1:727014674693:web:56da6bb037fc499b39e76c",
  measurementId: "G-EBHZ0VH0X7"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
