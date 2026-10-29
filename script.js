const toggle = document.getElementById("language-toggle");

let language = "en";

toggle.addEventListener("click", () => {
  language = language === "en" ? "tr" : "en";

  document.documentElement.lang = language;

  document.querySelectorAll("[data-en][data-tr]").forEach((element) => {
    element.textContent = element.dataset[language];
  });

  toggle.textContent = language === "en" ? "TR / EN" : "EN / TR";
});
