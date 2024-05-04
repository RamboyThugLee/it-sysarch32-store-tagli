// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvMt9PnPkMtjrD0ILepiIkxz5C6Mwi6ag",
  authDomain: "it-sysarch32-store-tagli.firebaseapp.com",
  projectId: "it-sysarch32-store-tagli",
  storageBucket: "it-sysarch32-store-tagli.appspot.com",
  messagingSenderId: "402738758206",
  appId: "1:402738758206:web:447dc66ced6e8a5e59476f",
  measurementId: "G-ZDRX8SSYDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);