// Highlight active nav based on current page
(function () {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(a => {
    const href = a.getAttribute("href");
    if ((path === "" && href.endsWith("index.html")) || path === href) {
      a.classList.add("active");
    }
  });
})();

// Simple fade-in on load for hero/panels/cards
document.addEventListener("DOMContentLoaded", () => {
  const fadeTargets = document.querySelectorAll(".hero, .panel, .card");
  fadeTargets.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(6px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity .35s ease, transform .35s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  });
});