const filterButtons = document.querySelectorAll<HTMLButtonElement>("[data-project-filter]");
const projectCards = document.querySelectorAll<HTMLElement>("[data-project-type]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.projectFilter || "all";

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("button-highlight", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    projectCards.forEach((card) => {
      const isVisible = filter === "all" || card.dataset.projectType === filter;
      card.classList.toggle("hidden", !isVisible);
      card.classList.toggle("visible", isVisible);
    });
  });
});
