// Simple form submission demo
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for reaching out! Our team will contact you soon.");
  this.reset();
});
