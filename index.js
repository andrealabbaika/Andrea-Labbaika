// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close menu when a link is clicked 
  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "a") {
      navLinks.classList.remove("open");
    }
  });
}

// Smooth scrolling for internal links 
const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);

    if (target) {
      event.preventDefault();
      const headerOffset = 72; 
      const rect = target.getBoundingClientRect();
      const offsetTop = rect.top + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});
