function displayForecast(city) {
  const forecastEndpoint = getForecastEndpoint(city);

  // dar prima data curatam prognoza pentru orasul anterior, adica sa nu pastreze pe ecran fiecare prognoza cautata, ci sa se actualizeze in functie de oras
  let forecastContainer = document.querySelector(".weather-forecast");
  forecastContainer.innerHTML = "";

  fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const { list } = data;

      // I. PRELUCRAREA DATELOR: Crearea structurii dorite:
      //Cream obiectul dorit cu cheile drrept zilele saptamanii:
      //Pas 1: Cream un obiect gol
      let idealForecastStructure = {};
      //Pas 2: Adaugam elemente in obiectul gol creat: Extragem ziua  din "list" si o punem pe post de cheie in obiectul creat:
      list.forEach((forecast) => {
        const { dt } = forecast;
        const day = getDayOfTheWeek(dt);

        // Daca am deja o prognoza(forecast) pt a cea zi, adica s-a creat deja cheia cu acea zi a saptamanii si a primit valori: atunci adauga si restul valorilor in arrayul cu acea cheie
        if (idealForecastStructure[day] !== undefined) {
          idealForecastStructure[day].push(forecast);
        } else {
          // Daca este o cheie noua, cream cheia si introducem in obiectul creat = si ii dam ca valoare un array in care sa bage toate prognozele din acea zi: (cu asta[forecast] facem din forest un array de obiecte)
          idealForecastStructure[day] = [forecast];
        }
      });
      console.log(idealForecastStructure);

      // II. Parcurgerea structurii dorite si afisarea pe ecran a informatiei:

      for (const day in idealForecastStructure) {
        // Afisez ziua: numele de chei ale obicetului idealForectStructure:
        forecastContainer.innerHTML += `<h2>${day}</h2>`;

        // Extragem valoarea fiecarei chei si le asezam:
        let forecastList = idealForecastStructure[day];
        forecastList.forEach((forecast) => {
          const { dt, main, weather } = forecast;
          const hours = getHour(dt);
          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);
          const weatherDescription = weather[0].description;
          const weatherIcon = getWeatherIcon(weather[0].icon);

          // Afisam pe ecran informatiile extrase din API.
          forecastContainer.innerHTML += `
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>${hours}</div> 
              <div><img src="${weatherIcon}" alt=""></div>
              <div class="fs-3"><strong>${temperature}°C</strong></div>
              <div><p>${weatherDescription}</p></div>
              <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
            </div>
          `;
        });
      }
    });
}

// const forecastIdealStructure = {
//   Luni: [
//     {dr:878, sun:kyy}
//     {...}
//   ]
//   Marti: [
//     {dr:888, sun:yyy}
//     {...},
//     {}
//   ]
// }
