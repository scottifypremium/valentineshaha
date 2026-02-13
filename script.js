const envelope = document.querySelector(".envelope");
const envelopeScreen = document.getElementById("envelope-screen");
const messageScreen = document.getElementById("message-screen");
envelope.addEventListener("click", () => {
  envelopeScreen.style.display = "none";
  messageScreen.classList.remove("hidden");
})