/*
  THE PINTO COTTAGE — site settings
  Replace the two placeholder values below before publishing.
  WhatsApp number format: country code + number, digits only (India: 91XXXXXXXXXX).
*/
const COTTAGE_PHONE = "916361073742"; // India country code + WhatsApp number
const COTTAGE_DISPLAY_PHONE = "+91 63610 73742";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));

const callLink = document.getElementById("callLink");
const whatsappDirect = document.getElementById("whatsappDirect");
const phoneConfigured = /^\d{10,15}$/.test(COTTAGE_PHONE) && !COTTAGE_PHONE.includes("X");

if (phoneConfigured) {
  callLink.href = `tel:+${COTTAGE_PHONE}`;
  callLink.textContent = `Call ${COTTAGE_DISPLAY_PHONE} ↗`;
  whatsappDirect.href = `https://wa.me/${COTTAGE_PHONE}?text=${encodeURIComponent("Hello The Pinto Cottage, I would like to enquire about a stay.")}`;
} else {
  callLink.href = "#contact";
  whatsappDirect.href = "#contact";
  callLink.title = "Add the cottage phone number in script.js";
  whatsappDirect.title = "Add the cottage WhatsApp number in script.js";
}

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("bookingForm");
form.addEventListener("submit", event => {
  event.preventDefault();
  if (!phoneConfigured) {
    alert("Please add the cottage WhatsApp number in script.js before using booking enquiries.");
    return;
  }
  const data = new FormData(form);
  const checkin = data.get("checkin");
  const checkout = data.get("checkout");
  if (checkout <= checkin) {
    alert("Check-out date must be after check-in date.");
    return;
  }
  const message = [
    "Hello The Pinto Cottage, I would like to enquire about a stay.",
    `Name: ${data.get("name")}`,
    `Check-in: ${checkin}`,
    `Check-out: ${checkout}`,
    `Guests: ${data.get("guests")}`,
    `Message: ${data.get("message") || "Please share availability and tariff."}`
  ].join("\n");
  window.open(`https://wa.me/${COTTAGE_PHONE}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

const today = new Date().toISOString().split("T")[0];
document.querySelector('input[name="checkin"]').min = today;
document.querySelector('input[name="checkout"]').min = today;
document.querySelector('input[name="checkin"]').addEventListener("change", event => {
  const out = document.querySelector('input[name="checkout"]');
  out.min = event.target.value;
  if (out.value && out.value <= event.target.value) out.value = "";
});
