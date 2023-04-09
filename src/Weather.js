import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function SearchEngine() {
  let [city, setCity] = useState(" ");
  const [weather, setWeather] = useState(" ");
  let [date, setDate] = useState(" ");

  function displayWeather(response) {
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = Math.round(response.data.wind.speed);
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    let details = [
      {
        component: "Humidity:",
        result: `${humidity}%`
      },
      {
        component: "Wind:",
        result: `${wind}km/h`
      },
      {
        tempComponent: " ",
        tempResult: `${description}`
      },
      {
        measureComponent: " ",
        tempMeasure: `${temperature}°C`
      },
      {
        tempComponent: " ",
        tempResult: <img src={icon} alt={description} />
      }
    ];

    return setWeather(
      <div>
        <ul>
          {details.map(function (detail, index) {
            return (
              <li key={index}>
                {detail.component} {detail.result}
              </li>
            );
          })}
        </ul>
        <ul className="tempDetails">
          {details.map(function (detail, index) {
            return (
              <li key={index}>
                {detail.tempComponent} {detail.tempResult}
              </li>
            );
          })}
        </ul>
        <ul className="temperature">
          {details.map(function (detail, index) {
            return (
              <li key={index}>
                {detail.measureComponent} {detail.tempMeasure}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e97ae5d675e4c0ea5fe7521c6da29471&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
    if (city) setDate(`Last updated: Saturday 22:00`);
  }

  return (
    <div>
      <div className="SearchEngine">
        <form onSubmit={handleSearch}>
          <input
            className="searchBox"
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <input className="searchButton" type="submit" value="Search" />
        </form>
      </div>
      <div className="row">
        <div className="col-8">
          <h1>{city}</h1>
          <p>{date}</p>
        </div>
        <div className="col-4">
          <p>{weather}</p>
        </div>
      </div>
    </div>
  );
}
