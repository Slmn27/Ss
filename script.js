// script.js

// Detect if a screenshot attempt is made
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    showOverlay();
  }
});

function showOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "flex";

  // Automatically hide the overlay after a few seconds (optional)
  setTimeout(() => {
    overlay.style.display = "none";
  }, 3000);
}

// Optional: Prevent screen recording detection by using a device motion listener
if ("ondevicemotion" in window) {
  window.addEventListener("devicemotion", (event) => {
    if (event.rotationRate.alpha || event.rotationRate.beta || event.rotationRate.gamma) {
      showOverlay();
    }
  });
}
