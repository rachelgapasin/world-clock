function showTime() {
  // Manila date and time
  let manilaElement = document.querySelector("#manila");
  if (manilaElement) {
    let manilaDateElement = manilaElement.querySelector(".date");
    let manilaTimeElement = manilaElement.querySelector(".time");
    let manilaTime = moment().tz("Asia/Manila");
    manilaDateElement.innerHTML = manilaTime.format("MMMM Do YYYY");
    manilaTimeElement.innerHTML = manilaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // New York date and time
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");
    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Paris date and time
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
    <div class="city">
      <div>
        <h2 class="name">${cityName}</h2>
        <div class="date">
          ${cityTime.format("MMMM Do YYYY")}
        </div>
      </div>
      <div class="time">
        ${cityTime.format("h:mm:ss [<small>]A[</small>]")}
      </div>
    </div>
    <a href="/" id="default-cities-link">Show default cities</a>`;
}

showTime();
setInterval(showTime, 1000);

let citiesSelectElement = document.querySelector("#cities-select");
citiesSelectElement.addEventListener("change", updateCity);
