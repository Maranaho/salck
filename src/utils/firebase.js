import {
    doc,
    onSnapshot,
    collection,
    query,
    orderBy,
    startAfter,
    limit,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    Timestamp,
    getFirestore,
} from "firebase/firestore"

import { getAuth,signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from "firebase/app"

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY
const appId = import.meta.env.VITE_FIREBASE_APP_ID

const firebaseConfig = {
  apiKey,
  authDomain: "slack-78330.firebaseapp.com",
  projectId: "slack-78330",
  storageBucket: "slack-78330.appspot.com",
  messagingSenderId: "128098857378",
  appId
}
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export {
    db,
    doc,
    collection,
    query,
    orderBy,
    startAfter,
    limit,
    getDocs,
    getDoc,
    updateDoc,
    getAuth,
    addDoc,
    onSnapshot,
    provider,
    signInWithPopup,
    GoogleAuthProvider,
    Timestamp,
    onAuthStateChanged,
  }