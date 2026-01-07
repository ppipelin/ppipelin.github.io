let theme = localStorage.getItem("theme");

if (!theme) {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "dark";
  } else {
    theme = "light";
  }
  localStorage.setItem("theme", theme);
}

// Apply the theme
document.documentElement.dataset.theme = theme;
updateHljsTheme(theme);

document.addEventListener("DOMContentLoaded", async () => {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  if (header) {
    header.innerHTML = await fetch("/header.html").then(r => r.text());
    initTheme();
  }

  if (footer) {
    footer.innerHTML = await fetch("/footer.html").then(r => r.text());
  }
});

function updateHljsTheme(theme) {
  const light = document.getElementById("hljs-light");
  const dark = document.getElementById("hljs-dark");

  if (!light || !dark) return;

  if (theme === "dark") {
    light.disabled = true;
    dark.disabled = false;
    dark.style.display = "";
    light.style.display = "none";
  } else {
    light.disabled = false;
    dark.disabled = true;
    light.style.display = "";
    dark.style.display = "none";
  }
}

function initTheme() {
  const toggle = document.getElementById("dark-mode-toggle");
  if (!toggle) return;

  let theme = localStorage.getItem("theme");

  toggle.checked = theme === "dark";

  // Listen for changes
  toggle.addEventListener("change", () => {
    const theme = toggle.checked ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    updateHljsTheme(theme);
  });
}
