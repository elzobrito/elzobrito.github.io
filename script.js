(function () {
  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = document.querySelector(".theme-icon");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const year = document.querySelector("#current-year");
  const storageKey = "elzo-site-theme";

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem(storageKey, theme);
    if (themeIcon) {
      themeIcon.textContent = theme === "dark" ? "☀" : "◐";
    }
  }

  const savedTheme = localStorage.getItem(storageKey);
  setTheme(savedTheme || "light");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        document.body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
