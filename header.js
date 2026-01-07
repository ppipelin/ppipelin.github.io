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

$(function () {
  $("#header").load("/header.html", function () {
    initTheme();
    $("#footer").load("/footer.html");
  });
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
