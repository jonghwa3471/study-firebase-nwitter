import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByyXs6rHrhemoshpEO4S0AfXxJAatNhqs",
  authDomain: "nwitter-reloaded-d919a.firebaseapp.com",
  projectId: "nwitter-reloaded-d919a",
  storageBucket: "nwitter-reloaded-d919a.firebasestorage.app",
  messagingSenderId: "351525718967",
  appId: "1:351525718967:web:4f422590723536d4113632",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
