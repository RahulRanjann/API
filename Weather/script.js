let input = document.querySelector("input");
// let output = document.getElementById("output");
let Temperature = document.getElementById("Temperature");
let Humidity = document.getElementById("Humidity");
let cloud_pct = document.getElementById("cloud_pct");
let Wind = document.getElementById("Wind");
let Sunrise = document.getElementById("Sunrise");
let Sunset = document.getElementById("Sunset");
let wind_degrees = document.getElementById("wind_degrees");


async function fetchData() {
  await fetch("https://api.api-ninjas.com/v1/weather?city=" + input.value, {
    method: "GET",
    headers: {
      "X-Api-Key": "kBEljG5dF+OaXPNOwfS+SA==meMwrq9SC6urlQxZ",
      "Content-Type": "application/json",
    },
  })
  
    .then((response) => response.json())
    .then((data) => {
      const sunriseTimestamp = data.sunrise;
      const sunriseDate = new Date(sunriseTimestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds

      const sunriseTime = sunriseDate.toLocaleTimeString(); // Convert to local time string
      console.log(sunriseTime);

      const sunsetTimestamp = data.sunset;
      const sunsetDate = new Date(sunsetTimestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds

      const sunsetTime = sunsetDate.toLocaleTimeString(); // Convert to local time string
      console.log(sunriseTime);

      console.log(data);

      // output.innerHTML = `Temperature: ${data.temp}  &deg;C<br> cloud_pct: ${data.cloud_pct} %<br> feels_like: ${data.feels_like} &deg;C<br> humidity: ${data.humidity} %<br> max_temp: ${data.max_temp} &deg;C<br> min_temp: ${data.min_temp} &deg;C<br> sunrise: ${ sunriseTime} <br> sunset: ${sunsetTime}<br> wind_degrees: ${data.wind_degrees}<br> wind_speed: ${data.wind_speed}<br><br>`;
    //   output.innerHTML += `cloud_pct: ${data.cloud_pct} %<br>`;
    //   output.innerHTML += `feels_like: ${data.feels_like} &deg;C<br>`;
    //   output.innerHTML += `humidity: ${data.humidity} %<br>`;
    //   output.innerHTML += `max_temp: ${data.max_temp} &deg;C<br>`;
    //   output.innerHTML += `min_temp: ${data.min_temp} &deg;C<br>`;
    //   output.innerHTML += `sunrise: ${ sunriseTime} <br>`;
    //   output.innerHTML += `sunset: ${sunsetTime}<br>`;
    //   output.innerHTML += `wind_degrees: ${data.wind_degrees}<br>`;
    //   output.innerHTML += `wind_speed: ${data.wind_speed}<br><br>`;

        Temperature.innerHTML += `Temperature :<br> ${data.temp}  &deg;C<br>`;
        Humidity.innerHTML = `Humidity :<br> ${data.humidity} %<br>`;
        cloud_pct.innerHTML = `cloud_pct :<br> ${data.cloud_pct} hPa<br>`;
        Wind.innerHTML = `Wind :<br> ${data.wind_speed} km/h`;
        wind_degrees.innerHTML = `wind_degrees :<br> ${data.wind_degrees} &deg;<br>`;
        Sunrise.innerHTML = `Sunrise :<br> ${sunriseTime}<br>`;
        Sunset.innerHTML = `Sunset :<br> ${sunsetTime}<br>`;

 
    });
    document.getElementById("Temperature").style.display = "block";
    document.getElementById("Humidity").style.display = "block";
    document.getElementById("cloud_pct").style.display = "block";
    document.getElementById("Wind").style.display = "block";
    document.getElementById("wind_degrees").style.display = "block";
    document.getElementById("Sunrise").style.display = "block";
    document.getElementById("Sunset").style.display = "block";


}

let weekDays = [
  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
];
let date = new Date();
let day = date.getDay();
let currentDate = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
let todaytDate = `${weekDays[day]},${currentDate}-${month}-${year}`;
console.log(todaytDate);
console.log(
  date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds()
);
document.getElementById("date").innerHTML += `Date: ${todaytDate}`;
// document.getElementById("date").style.color = "red";

function showTime() {
  let dt = new Date();
  let H = dt.getHours();
  let M = dt.getMinutes();
  let S = dt.getSeconds();
  let session = "AM";

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
  if (H > 12) {
    session = "PM";
  }
  document.getElementById("time").innerHTML = `Time: ${H}:${M}:${S} ${session}`;
}
setInterval(showTime, 1000);


// http://openweathermap.org/img/wn/50n.png    to convert weather icon

// https://api.openweathermap.org/data/2.5/weather?q=patna&units=metric&appid=6776dade0bef91fa48d5f6fcf85ad800    another api