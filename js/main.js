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

  if (reportForm && reportMessage) { // TODO Wik Sending mail
    reportForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submitButton = reportForm.querySelector('button[type="submit"]');
      const endpoint = reportForm.dataset.reportEndpoint || "/api/report-problem/";
      const fields = new FormData(reportForm);

      reportMessage.className = "form-message";
      reportMessage.textContent = "Envoi du signalement…";
      if (submitButton) submitButton.disabled = true;

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            category: fields.get("category"),
            email: fields.get("email"),
            message: fields.get("message"),
          }),
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        reportMessage.className = "form-message success";
        reportMessage.textContent = "Votre signalement a bien été envoyé. Merci.";
        reportForm.reset();
      } catch (error) {
        reportMessage.className = "form-message error";
        reportMessage.textContent =
          "L’envoi a échoué. Veuillez réessayer plus tard ou écrire à contact@niyya-women.com.";
      } finally {
        if (submitButton) submitButton.disabled = false;
      }
    });
  }

  const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);

  const renderInlineMarkdown = (value) => {
    let html = escapeHtml(value);
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, href) => {
      const safeHref = href.trim();
      if (!/^(?:[a-z0-9_-]+\.html(?:#[\w-]+)?|https:\/\/[^\s]+)$/i.test(safeHref)) return label;
      return `<a href="${safeHref}">${label}</a>`;
    });
    return html
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");
  };

  const renderMarkdown = (markdown) => markdown.trim().split(/\n\s*\n/).map((block) => {
    const lines = block.split("\n");
    const heading = lines.length === 1 && lines[0].match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = Math.min(heading[1].length + 1, 6);
      return `<h${level}>${renderInlineMarkdown(heading[2])}</h${level}>`;
    }
    if (lines.every((line) => /^\s*[-*+]\s+/.test(line))) {
      return `<ul>${lines.map((line) => `<li>${renderInlineMarkdown(line.replace(/^\s*[-*+]\s+/, ""))}</li>`).join("")}</ul>`;
    }
    if (lines.every((line) => /^\s*\d+[.)]\s+/.test(line))) {
      return `<ol>${lines.map((line) => `<li>${renderInlineMarkdown(line.replace(/^\s*\d+[.)]\s+/, ""))}</li>`).join("")}</ol>`;
    }
    if (lines.every((line) => /^>\s?/.test(line))) {
      return `<div class="notice">${lines.map((line) => renderInlineMarkdown(line.replace(/^>\s?/, ""))).join("<br>")}</div>`;
    }
    return `<p>${lines.map(renderInlineMarkdown).join("<br>")}</p>`;
  }).join("\n");

  document.querySelectorAll("[data-markdown-src]").forEach(async (container) => {
    try {
      const response = await fetch(container.dataset.markdownSrc);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      container.innerHTML = renderMarkdown(await response.text());
    } catch (error) {
      container.textContent = "Impossible de charger ce document. Veuillez réessayer ultérieurement.";
      container.setAttribute("role", "alert");
    }
  });
});
