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

export function initExperienceTabs() {
  const tabButtons = document.querySelectorAll("[data-index].tabbutton");
  const tabContents = document.querySelectorAll("[data-index].tabcontent");
  const container = document.querySelector(".job-title");
  const indicator = document.querySelector(".job-title-indicator");

  function setActiveTab(button) {
    const index = button.getAttribute("data-index");
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));
    button.classList.add("active");
    const content = document.querySelector(
      `.tabcontent[data-index='${index}']`
    );
    if (content) content.classList.add("active");
    updateIndicator(button, indicator, container);
  }

  // Initial indicator position
  const activeButton = document.querySelector(".job-title .tabbutton.active");
  if (activeButton && indicator && container) {
    requestAnimationFrame(() =>
      updateIndicator(activeButton, indicator, container)
    );
  }

  // Reposition indicator on resize (e.g. mobile → desktop)
  window.addEventListener("resize", () => {
    const active = document.querySelector(".job-title .tabbutton.active");
    if (active && indicator && container)
      updateIndicator(active, indicator, container);
  });

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveTab(button));
  });
}
