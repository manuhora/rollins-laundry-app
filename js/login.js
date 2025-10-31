import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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
const auth = getAuth(app);

const form = document.getElementById("loginForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "admin.html";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
});
