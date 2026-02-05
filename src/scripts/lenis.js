import Lenis from "lenis";
import "lenis/dist/lenis.css";

function initLenis() {
  const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.1,
    duration: 1.2,
    smoothWheel: true,
    anchors: true,
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLenis);
} else {
  initLenis();
}
