// Adds a visible "Edit this page" button that links to GitHub
(function () {
  function sourcePath() {
    let p = window.location.pathname;
    // root
    if (p === "/") return "index.md";
    // nice URLs like /standards/
    if (p.endsWith("/")) {
      const seg = p.replace(/\/$/, "").split("/").pop() || "index";
      return `${seg}.md`;
    }
    // fallback for .html
    const last = p.split("/").pop();
    if (last && last.endsWith(".html")) {
      const name = last.replace(/\.html$/, "") || "index";
      return `${name}.md`;
    }
    return "index.md";
  }

  const editUrl =
    "https://github.com/NooMinds/global-ai-standards/edit/main/initial-standards-site/docs/" +
    sourcePath();

  const btn = document.createElement("a");
  btn.href = editUrl;
  btn.className = "md-button md-button--primary";
  btn.style.float = "right";
  btn.style.marginTop = "0.5rem";
  btn.textContent = "Edit this page";

  const container = document.querySelector(".md-content .md-typeset");
  if (container) container.prepend(btn);
})();
