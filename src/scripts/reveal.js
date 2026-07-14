(function() {
  function initScrollReveal() {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll("[data-reveal]");
    
    if (prefersReduced || targets.length === 0) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    
    // Fallback: show everything after 2 seconds just in case
    setTimeout(() => {
      targets.forEach((el) => el.classList.add("is-visible"));
    }, 2000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollReveal);
  } else {
    initScrollReveal();
  }
})();
