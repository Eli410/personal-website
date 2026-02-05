import Lenis from "lenis";
import "lenis/dist/lenis.css";

function initLenis() {
  const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.45,
    duration: 0.5,
    smoothWheel: true,
    wheelMultiplier: 1.5,
    touchMultiplier: 1.5,
    anchors: true,
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLenis);
} else {
  initLenis();
}
