"use strict";

const /**{node element} */ $HTML = document.documentElement;
const /**{boolean} */ isDark = window.matchMedia(
    "(prefers-color-schema:dark)"
  ).matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
}

let /** {boolean} */ isPressed = false;

const changeTheme = function () {
  isPressed = isPressed ? false : true;
  this.setAttribute("aria-pressed", isPressed);
  $HTML.setAttribute(
    "data-theme",
    $HTML.dataset.theme === "light" ? "dark" : "light"
  );
  sessionStorage.setItem("theme", $HTML.dataset.theme);
};

window.addEventListener("load", function () {
  const /**{node element} */ $themeBtn =
      document.querySelector("[data-theme-btn]");
  $themeBtn.addEventListener("click", changeTheme);
});
