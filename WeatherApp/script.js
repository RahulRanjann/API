let city = document.getElementById("city");
let country = document.getElementById("country");
let temp = document.getElementById("temperature");
let temp_icon = document.getElementById("temp_icon");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("windSpeed");
let pressure = document.getElementById("pressure");
let sunRise = document.getElementById("sunRise");
let weather = document.getElementById("weather");

async function fetchData() {
  await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city.value +
      "&appid=6776dade0bef91fa48d5f6fcf85ad800",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      country.innerHTML = data.sys.country;
      temp.innerHTML =
        "<img src='image/temperature-thermometer-svgrepo-com.svg'  class='temp' alt='Temperature'></img>" +
        (data.main.temp - 273.15).toFixed(2) +
        "°C";
      humidity.innerHTML =
        "<img src='image/humidity-svgrepo-com.svg' alt='Humidity' class='humi'>" +
        data.main.humidity +
        "%";
      wind.innerHTML =
        " <img src='image/windy-wind-svgrepo-com.svg' alt='windSpeed' class='wind'> " +
        data.wind.speed +
        "m/s";
      pressure.innerHTML = "Pressure : &nbsp;" + data.main.pressure + "hPa";
      sunRise.innerHTML =
        "Sunrise : &nbsp;" +
        new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      weather.innerHTML =
        "<img src='http://openweathermap.org/img/wn/" +
        data.weather[0].icon +
        ".png' alt='weather' class='weather'>" +
        " &nbsp;" +
        data.weather[0].main +
        " &nbsp;";
      let icon = data.weather[0].icon;
    });
  showTime();
}

function showTime() {
  let dt = new Date();
  let H = dt.getHours();
  let M = dt.getMinutes();
  let S = dt.getSeconds();
  let session = "AM";

  let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date();
  let day = date.getDay();
  let currentDate = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (currentDate < 10) {
    currentDate = "0" + currentDate;
  }

  if (month < 10) {
    month = "0" + month;
  }
  let todaytDate = `${weekDays[day]},${currentDate}-${month}-${year}`;
  document.getElementById("date").innerHTML = ` ${todaytDate}`;
  // document.getElementById("date").style.color = "red";

  if (S < 10) {
    S = "0" + S;
  }

  if (M < 10) {
    M = "0" + M;
  }

  if (H < 10) {
    H = "0" + H;
  }

  //    console.log(H+"-"+M+"-"+S);
  if (H == 0) {
    H = 12;
  }
  if (H > 12) {
    session = "PM";
  }
  document.getElementById(
    "time"
  ).innerHTML = `${H}:${M}:${S} &nbsp; ${session}`;
}
setInterval(showTime, 1000);