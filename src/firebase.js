import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQu5eM_UEbr8mA3VV9EwufFfeDPlOqNQY",
  authDomain: "straylife-login.firebaseapp.com",
  projectId: "straylife-login",
  storageBucket: "straylife-login.appspot.com",
  messagingSenderId: "575186258493",
  appId: "1:575186258493:web:0ec358e56f20ec2dd97854",
  measurementId: "G-6LBJR582E3"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
