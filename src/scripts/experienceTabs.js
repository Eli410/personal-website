function updateIndicator(activeButton, indicator, container) {
  if (!indicator || !activeButton || !container) return;
  const containerRect = container.getBoundingClientRect();
  const buttonRect = activeButton.getBoundingClientRect();
  const height = buttonRect.height * 0.7;
  const topOffset =
    buttonRect.top - containerRect.top + (buttonRect.height - height) / 2;
  indicator.style.top = `${topOffset}px`;
  indicator.style.height = `${height}px`;
}

function updateIconBox(activeButton, iconBox, container) {
  if (!iconBox || !activeButton || !container) return;
  const containerRect = container.getBoundingClientRect();
  const buttonRect = activeButton.getBoundingClientRect();
  iconBox.style.left = `${buttonRect.left - containerRect.left}px`;
  iconBox.style.top = `${buttonRect.top - containerRect.top}px`;
  iconBox.style.width = `${buttonRect.width}px`;
  iconBox.style.height = `${buttonRect.height}px`;
  iconBox.style.opacity = "1";
}

export function initExperienceTabs() {
  const tabButtons = document.querySelectorAll("[data-index].tabbutton");
  const tabContents = document.querySelectorAll("[data-index].tabcontent");
  const container = document.querySelector(".job-title");
  const indicator = document.querySelector(".job-title-indicator");
  const iconBox = document.querySelector(".job-title-icon-box");

  const descriptionsEl = document.querySelector(".jobs-descriptions");
  const REVEAL_DURATION_MS = 1500; // Longer than staggered bullet animation

  function setActiveTab(button) {
    const index = button.getAttribute("data-index");
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", btn === button ? "true" : "false");
    });
    tabContents.forEach((content) => content.classList.remove("active"));
    button.classList.add("active");
    const content = document.querySelector(
      `.tabcontent[data-index='${index}']`
    );
    if (content) content.classList.add("active");
    updateIndicator(button, indicator, container);
    updateIconBox(button, iconBox, container);

    // Suppress scrollbar until bullet reveal animation finishes (avoids scrollbar flash)
    if (descriptionsEl) {
      descriptionsEl.classList.add("content-revealing");
      clearTimeout(descriptionsEl._revealTimeout);
      descriptionsEl._revealTimeout = setTimeout(() => {
        descriptionsEl.classList.remove("content-revealing");
      }, REVEAL_DURATION_MS);
    }
  }

  // Initial indicator and icon box position
  const activeButton = document.querySelector(".job-title .tabbutton.active");
  if (activeButton && container) {
    requestAnimationFrame(() => {
      updateIndicator(activeButton, indicator, container);
      updateIconBox(activeButton, iconBox, container);
    });
  }

  // Suppress scrollbar flash during initial bullet reveal
  if (descriptionsEl) {
    descriptionsEl.classList.add("content-revealing");
    descriptionsEl._revealTimeout = setTimeout(() => {
      descriptionsEl.classList.remove("content-revealing");
    }, REVEAL_DURATION_MS);
  }

  // Reposition on resize (e.g. mobile → desktop)
  window.addEventListener("resize", () => {
    const active = document.querySelector(".job-title .tabbutton.active");
    if (active && container) {
      updateIndicator(active, indicator, container);
      updateIconBox(active, iconBox, container);
    }
  });

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveTab(button));
  });
}
