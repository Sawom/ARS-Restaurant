import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAuEUdq93BW6obh55WZx1-5YHryihR5Sao",
  authDomain: "arsrestaurant-d5e39.firebaseapp.com",
  projectId: "arsrestaurant-d5e39",
  storageBucket: "arsrestaurant-d5e39.appspot.com",
  messagingSenderId: "261966925157",
  appId: "1:261966925157:web:33dac17150ee0ab2b3a58c",
  measurementId: "G-BQWQGZ900L"
};

// Initialize Firebase

// const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);