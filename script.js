document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-copy");
  if (hero && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    hero.animate(
      [
        { opacity: 0, transform: "translateY(24px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" }
    );
  }
});
