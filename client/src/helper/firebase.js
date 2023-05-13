import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3l5Fcq93t7KEFKSuBw8UQluOLCSXXOs8",
  authDomain: "coffee-shop-d3dcf.firebaseapp.com",
  projectId: "coffee-shop-d3dcf",
  storageBucket: "coffee-shop-d3dcf.appspot.com",
  messagingSenderId: "392155117475",
  appId: "1:392155117475:web:3221a56d77a0811cb48c16",
  measurementId: "G-BTV51994GB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
