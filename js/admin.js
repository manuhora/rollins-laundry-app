import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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
const db = getFirestore(app);
const auth = getAuth(app);

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  signOut(auth);
});

const bookingsBody = document.getElementById("bookingsBody");

// Only show data if logged in
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  // Get bookings sorted by creation date
  const q = query(collection(db, "bookings"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.name || "-"}</td>
      <td>${data.email || "-"}</td>
      <td>${data.pickupDate || "-"}</td>
      <td>${data.serviceType || "-"}</td>
      <td>${new Date(data.createdAt.seconds * 1000).toLocaleString()}</td>
    `;
    bookingsBody.appendChild(row);
  });
});
