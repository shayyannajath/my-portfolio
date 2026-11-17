
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVJJTK6QpPv6mNMzNGWix3l35AEyzYfRw",
  authDomain: "shayyan-portfolio.firebaseapp.com",
  projectId: "shayyan-portfolio",
  storageBucket: "shayyan-portfolio.firebasestorage.app",
  messagingSenderId: "211234232166",
  appId: "1:211234232166:web:dd9ddc1cebe58df02cdaa7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
