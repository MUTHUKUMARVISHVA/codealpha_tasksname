/* SCROLL BUTTON FUNCTION */
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth"
  });
}

/* CONTACT FORM ALERT */
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});

/* NAVBAR SCROLL EFFECT */
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  navbar.style.background = window.scrollY > 50 ? "#000" : "#111";
});