// Simple contact form handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message! I will get back to you soon.");
});

const roles = ["a Developer.", "a Designer.", "an Engineer."];
let i = 0, j = 0, current = "";
setInterval(() => {
  current = roles[i];
  document.getElementById("typing-text").textContent = current.slice(0, j++);
  if (j > current.length) { j = 0; i = (i + 1) % roles.length; }
}, 200);
