// Hero animation on page load
window.addEventListener("load", () => {
  document.getElementById("hero-title").style.opacity = "1";
  document.getElementById("hero-title").style.transform = "translateY(0)";
  setTimeout(() => {
    document.getElementById("hero-subtitle").style.opacity = "1";
    document.querySelector(".profile-photo").classList.add("visible");
  }, 500);
});

// Scroll-triggered reveal for sections
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});
