
// language.js
let currentLang = "en";

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "hi" : "en";
  document.getElementById("lang-toggle").innerText = currentLang === "en" ? "हिंदी" : "English";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = el.getAttribute(`data-${currentLang}`);
  });
});
