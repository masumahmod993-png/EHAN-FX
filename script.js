// EHAN FX Premium Animation

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 0 30px #00ff99";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "0 0 15px rgba(0,255,170,.35)";
  });
});

// Fade In Animation
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".card").animate(
    [
      { opacity: 0, transform: "translateY(30px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    {
      duration: 800,
      easing: "ease-out",
      fill: "forwards"
    }
  );
});
