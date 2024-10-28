const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

// Daca nu avem oras salvat in localStorage, salvam orasul default, adica Bucuresti.
if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

// Actualizam orasul afisat pe ecran.
currentCityTag.innerHTML = currentCity;
displayCurrentWeather(currentCity);
displayForecast(currentCity);

// scroll-to-top button
// Pas 1: Selectarea tagului html
const scrollToTopButton = document.querySelector(".scroll-to-top");
// Pas 3: definirea functiei:
function handleScrollToTop() {
  const viewportHeight = window.innerHeight;
  if (window.scrollY > viewportHeight / 2) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
}

scrollToTopButton.addEventListener("scroll", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// Pas 2: adaugarea eventListener:
document.addEventListener("scroll", handleScrollToTop);
