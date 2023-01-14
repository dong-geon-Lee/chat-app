import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzd3q8WnDbYeVGpGFybLKYs11YkyYKSIo",
  authDomain: "chating-app-bbc67.firebaseapp.com",
  projectId: "chating-app-bbc67",
  storageBucket: "chating-app-bbc67.appspot.com",
  messagingSenderId: "967492504403",
  appId: "1:967492504403:web:91a24d227072fe8e1fafa6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };
