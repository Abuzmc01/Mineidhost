// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (window.scrollY > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// ========== MOBILE MENU TOGGLE ==========
const menuBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
    });
  });

  const closeBtn = mobileMenu.querySelector(".close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
    });
  }
}

// ========== SMOOTH SCROLL + TRANSITION ==========
document.body.classList.add("fade-effect", "transition");
setTimeout(() => {
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => {
    document.body.classList.remove("transition");
  }, 400);
}, 200);
    }
  });
});

// ========== FADE-IN ON SCROLL ==========
const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach(el => fadeObserver.observe(el));

// ========== PARALLAX EFFECT ==========
window.addEventListener("scroll", () => {
  document.querySelectorAll(".parallax").forEach(el => {
    const speed = el.getAttribute("data-speed") || 0.3;
    const yPos = -(window.scrollY * speed);
    el.style.transform = `translateY(${yPos}px)`;
  });
});

// ========== AUTO YEAR UPDATE ==========
document.getElementById("year").textContent = new Date().getFullYear();

// ========== PAGE FADE TRANSITION (GLOBAL) ==========
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-effect");
});
