const arad = document.querySelector(".arad");
const bucharest = document.querySelector(".dropdown-menu .bucharest");
const clujNapoca = document.querySelector(".cluj-napoca");
const oradea = document.querySelector(".dropdown-menu .oradea");
const sibiu = document.querySelector(".sibiu");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const chisinau = document.querySelector(".chisinau");

function updateCurrentCity(city) {
  // Selectam spatiul de pe ecran dedicat afisarii orasului curent si ii adaugam continut.
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  // Actualizam orasul din localStorage.
  localStorage.setItem("city", city);
  // Actualizam orasul afisat pe ecran.
  updateCurrentCity(city);
  // Reafisam vremea curenta, pentru noul oras.
  displayCurrentWeather(city);
  displayForecast(city);
}

// Adauagam event listenerii pe butoanele din dropdown.
arad.addEventListener("click", function () {
  updateWeather("Arad");
});
bucharest.addEventListener("click", function () {
  updateWeather("București");
});
clujNapoca.addEventListener("click", function () {
  updateWeather("Cluj-Napoca");
});
oradea.addEventListener("click", function () {
  updateWeather("Oradea");
});
sibiu.addEventListener("click", function () {
  updateWeather("Sibiu");
});
timisoara.addEventListener("click", function () {
  updateWeather("Timișoara");
});
chisinau.addEventListener("click", function () {
  updateWeather("Chisinau");
});
