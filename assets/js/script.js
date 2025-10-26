// Tab switcher
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.querySelector(`#tab-${btn.dataset.tab}`).classList.add("active");
  });
});

// Navbar scroll blur
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const menuBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// Auto-scroll review slider
const slider = document.querySelector(".review-slider");
let scrollPos = 0;
setInterval(() => {
  if (!slider) return;
  scrollPos += 320;
  if (scrollPos >= slider.scrollWidth - slider.clientWidth) scrollPos = 0;
  slider.scrollTo({ left: scrollPos, behavior: "smooth" });
}, 4000);

// Update tahun footer
document.getElementById("year").textContent = new Date().getFullYear();
