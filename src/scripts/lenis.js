import Lenis from "lenis";
import "lenis/dist/lenis.css";

function initLenis() {
  let lastWheelSign = 0;

  const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.5,
    duration: 0.5,
    smoothWheel: true,
    wheelMultiplier: 1.2,
    touchMultiplier: 1.2,
    anchors: true,
    virtualScroll: ({ deltaY, event }) => {
      if (event.type !== "wheel") return;

      const sign = Math.sign(deltaY);
      if (sign === 0) return;

      const directionChanged = lastWheelSign !== 0 && sign !== lastWheelSign;
      lastWheelSign = sign;

      if (directionChanged) {
        event.preventDefault();
        lenis.scrollTo(lenis.animatedScroll + deltaY, {
          programmatic: false,
          lerp: lenis.options.lerp,
          duration: lenis.options.duration,
          easing: lenis.options.easing,
        });
        return false;
      }
    },
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLenis);
} else {
  initLenis();
}
