document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const html = document.documentElement;

  // Apply saved theme from localStorage or default to 'light'
  const savedTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-theme", savedTheme);
  toggle.textContent = savedTheme === "light" ? "🌙" : "☀️";

  toggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const nextTheme = currentTheme === "light" ? "dark" : "light";

    // Update theme and save preference
    html.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    toggle.classList.add("fade");

    // Emoji transition
    toggle.textContent = nextTheme === "light" ? "🌙" : "☀️";

    // Remove animation class after animation completes
    setTimeout(() => toggle.classList.remove("fade"), 300);
  });
});
