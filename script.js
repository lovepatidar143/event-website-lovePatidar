// -------------------- script.js --------------------

// Preloader Hide
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// AOS Init
AOS.init({ duration: 1000 });

// GSAP Splash Animation
window.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("introSplash");
  const title = document.querySelector(".splash-title");

  gsap.to(title, {
    duration: 1.2,
    opacity: 1,
    ease: "power2.out"
  });

  gsap.to(splash, {
    delay: 2.5,
    duration: 1,
    opacity: 0,
    onComplete: () => splash.style.display = "none"
  });
});

// Countdown Timer to 13 July 2025, 5 PM
const eventDate = new Date("July 13, 2025 17:00:00").getTime();
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Event Started!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Typed.js Enhanced Typing Effect
window.addEventListener("DOMContentLoaded", () => {
  const typedTarget = document.querySelector("#typed-text");
  if (typedTarget && typeof Typed !== "undefined") {
    const options = {
      strings: [
        "<span class=' fw-bold'>ProdCon 2025</span>",
        "<span class=' fw-bold'>Product Strategy</span>",
        "<span class=' fw-bold'>Consulting Excellence</span>",
        "<span class=' fw-bold'>Innovation at Scale</span>"
      ],
      typeSpeed: 900,
      backSpeed: 1000,
      startDelay: 9000,
      backDelay: 9000,
      loop: true,

    //   showCursor: true,
    //   cursorChar: ".",
      contentType: "html"
    };
    new Typed("#typed-text", options);
  }
});

// Particles.js fallback init
if (typeof particlesJS !== "undefined") {
  particlesJS.load("particles-js", "assets/particles.json", function () {
    console.log("particles.js config loaded");
  });
}

// Smooth Scroll Polyfill for Legacy Support
if ('scrollBehavior' in document.documentElement.style === false) {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}


// -------------------- gallery.js snippet --------------------
function scrollGallery(direction) {
  const container = document.getElementById("gallery-scroll");
  const scrollAmount = 320; // Image width + margin
  container.parentElement.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
