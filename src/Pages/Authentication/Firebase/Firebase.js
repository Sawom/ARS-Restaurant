import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAuEUdq93BW6obh55WZx1-5YHryihR5Sao",
  authDomain: "arsrestaurant-d5e39.firebaseapp.com",
  projectId: "arsrestaurant-d5e39",
  storageBucket: "arsrestaurant-d5e39.appspot.com",
  messagingSenderId: "261966925157",
  appId: "1:261966925157:web:dcf3bec2cefa451bb3a58c",
  measurementId: "G-ZK428WHXHX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);