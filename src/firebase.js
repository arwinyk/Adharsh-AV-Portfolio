import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlE9lDDbmqni8chjko6pBG1ziXY6ukf5c",
  authDomain: "adharsh-av.firebaseapp.com",
  projectId: "adharsh-av",
  storageBucket: "adharsh-av.firebasestorage.app",
  messagingSenderId: "293595265353",
  appId: "1:293595265353:web:993743af3cc78fd2100298"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
