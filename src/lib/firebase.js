import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk-r-CxOQ6r1BU3PaG4kXYP-fx2r86sZ4",
  authDomain: "ebgaming-292a7.firebaseapp.com",
  projectId: "ebgaming-292a7",
  storageBucket: "ebgaming-292a7.firebasestorage.app",
  messagingSenderId: "1069471239849",
  appId: "1:1069471239849:web:e342c43f730ebbbd2d23b8"
};

// --- AQUÍ ESTÁ LA CORRECCIÓN ---
// Comprobamos si ya existe una app iniciada, si no, la iniciamos.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);