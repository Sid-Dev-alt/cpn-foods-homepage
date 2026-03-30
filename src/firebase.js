import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDSAmrN05IMmMOfhcBGo1qAoXuY7YfxoG8",
  authDomain: "cpn-foods.firebaseapp.com",
  projectId: "cpn-foods",
  storageBucket: "cpn-foods.firebasestorage.app",
  messagingSenderId: "745382339156",
  appId: "1:745382339156:web:af9b474252de4a0b3503c1",
  measurementId: "G-BKCM7WWJBJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
