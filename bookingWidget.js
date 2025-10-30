import { db, collection, addDoc } from "./firebase.js";

const form = document.getElementById("bookingForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const pickupDate = form.pickupDate.value;
  const serviceType = form.serviceType.value;

  try {
    await addDoc(collection(db, "bookings"), {
      name,
      email,
      pickupDate,
      serviceType,
      createdAt: new Date(),
    });
    window.location.href = "success.html";
  } catch (error) {
    console.error("Error saving booking: ", error);
    alert("Something went wrong.");
  }
});
