import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjodJd3gc6lbLwI82Mhs_larUkMTP6Eho",
  authDomain: "fir-blog-d557b.firebaseapp.com",
  projectId: "fir-blog-d557b",
  storageBucket: "fir-blog-d557b.appspot.com",
  messagingSenderId: "905353743065",
  appId: "1:905353743065:web:ec7b8ab2e3a5ee8cbb4cc8",
  measurementId: "G-5N0BC4N0Z9"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
