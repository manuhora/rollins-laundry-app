// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Paste your Firebase config here:
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdeWFXHWmzUTwIKbYnuEBgfud11Yq9nQY",
  authDomain: "rollins-laundry-service.firebaseapp.com",
  projectId: "rollins-laundry-service",
  storageBucket: "rollins-laundry-service.firebasestorage.app",
  messagingSenderId: "533512302519",
  appId: "1:533512302519:web:c828dd02ee5d90856f4232",
  measurementId: "G-69VV33MQHE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { collection, addDoc };
