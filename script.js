// Get the form and input element
const form = document.getElementById("qr-form");
const input = document.getElementById("qr-input");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting

  const url = input.value;

  // Generate QR code using QRCode.js library
  const qrCode = new QRCode("qr-code", {
    text: url,
    width: 128,
    height: 128,
  });

  input.value = ""; // Clear input field
});
