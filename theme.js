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
