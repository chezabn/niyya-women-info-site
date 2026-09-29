document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("[data-menu-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll("[data-faq]").forEach((item) => {
    const button = item.querySelector(".faq-question");
    if (!button) return;
    button.addEventListener("click", () => {
      const open = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
    });
  });

  const reportForm = document.querySelector("[data-report-form]");
  const reportMessage = document.querySelector("[data-report-message]");

  if (reportForm && reportMessage) {
    reportForm.addEventListener("submit", (event) => {
      event.preventDefault();
      reportMessage.className = "form-message success";
      reportMessage.textContent =
        "Votre signalement est prêt à être envoyé. Connectez ce formulaire à votre endpoint Django avant la mise en production.";
    });
  }
});
