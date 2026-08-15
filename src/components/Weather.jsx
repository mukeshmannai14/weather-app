import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // ==============================
  // LIVE DATE & TIME
  // ==============================

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ==============================
  // SEARCH WEATHER
  // ==============================

  const searchWeather = async () => {
    const searchCity = city.trim();

    // Empty city check
    if (!searchCity) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      // Get API key from .env
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

      // Check API key
      if (!apiKey) {
        throw new Error("API_KEY_MISSING");
      }

      // OpenWeather API URL
      const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=${encodeURIComponent(searchCity)}` +
        `&appid=${apiKey}` +
        `&units=metric`;

      // API request
      const response = await axios.get(apiUrl);

      // Save weather data
      setWeather(response.data);
    } catch (err) {
      console.error("Weather API Error:", err);

      // API key missing
      if (err.message === "API_KEY_MISSING") {
        setError(
          "Weather API key is missing. Please check your .env file."
        );
      }

      // Invalid API key
      else if (err.response?.status === 401) {
        setError(
          "Invalid API key. Please check your OpenWeather API key."
        );
      }

      // City not found
      else if (err.response?.status === 404) {
        setError(
          "City not found. Please enter a valid city name."
        );
      }

      // Other errors
      else {
        setError(
          "Unable to get weather information. Please try again."
        );
      }

      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // FORM SUBMIT
  // ==============================

  const handleSubmit = (event) => {
    event.preventDefault();
    searchWeather();
  };

  // ==============================
  // WEATHER ICON
  // ==============================

  const getWeatherIcon = () => {
    if (!weather) {
      return "🌤️";
    }

    const weatherType = weather.weather?.[0]?.main;

    switch (weatherType) {
      case "Clear":
        return "☀️";

      case "Clouds":
        return "☁️";

      case "Rain":
        return "🌧️";

      case "Drizzle":
        return "🌦️";

      case "Thunderstorm":
        return "⛈️";

      case "Snow":
        return "❄️";

      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
        return "🌫️";

      default:
        return "🌤️";
    }
  };

  // ==============================
  // RENDER
  // ==============================

  return (
    <main className="weather-page">
      <section className="weather-container">

        {/* ==========================
            HEADER
        ========================== */}

        <header className="weather-header">
          <div className="weather-icon">
            🌤️
          </div>

          <h1>Weather Report</h1>

          <p>
            Search real-time weather information
          </p>
        </header>

        {/* ==========================
            DATE & TIME
        ========================== */}

        <section className="datetime-grid">

          {/* TIME */}

          <article className="datetime-card">
            <div className="datetime-icon">
              🕐
            </div>

            <div>
              <h3>Current Time</h3>

              <p className="time-text">
                {currentDateTime.toLocaleTimeString(
                  "en-IN"
                )}
              </p>
            </div>
          </article>

          {/* DATE */}

          <article className="datetime-card">
            <div className="datetime-icon">
              📅
            </div>

            <div>
              <h3>Today's Date</h3>

              <p className="date-text">
                {currentDateTime.toLocaleDateString(
                  "en-IN",
                  {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </p>
            </div>
          </article>

        </section>

        {/* ==========================
            SEARCH
        ========================== */}

        <form
          className="search-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(event) =>
              setCity(event.target.value)
            }
          />

          <button type="submit">
            🔍 Search
          </button>
        </form>

        {/* ==========================
            LOADING
        ========================== */}

        {loading && (
          <div className="message loading">
            <span>⏳</span>
            <span>Loading weather...</span>
          </div>
        )}

        {/* ==========================
            ERROR
        ========================== */}

        {error && !loading && (
          <div className="message error">
            ❌ {error}
          </div>
        )}

        {/* ==========================
            WEATHER RESULT
        ========================== */}

        {weather && !loading && !error && (
          <section className="weather-result">

            {/* LOCATION */}

            <div className="location">
              <h2>
                {weather.name}
              </h2>

              <p>
                {weather.sys?.country}
              </p>
            </div>

            {/* MAIN WEATHER */}

            <div className="main-weather">

              <div className="weather-main-icon">
                {getWeatherIcon()}
              </div>

              <div>
                <div className="temperature">
                  {Math.round(
                    weather.main.temp
                  )}
                  °C
                </div>

                <p className="description">
                  {weather.weather?.[0]?.description}
                </p>
              </div>

            </div>

            {/* WEATHER DETAILS */}

            <section className="weather-details">

              {/* FEELS LIKE */}

              <article className="detail-card">
                <div className="detail-icon">
                  🌡️
                </div>

                <div>
                  <h3>Feels Like</h3>

                  <p>
                    {Math.round(
                      weather.main.feels_like
                    )}
                    °C
                  </p>
                </div>
              </article>

              {/* HUMIDITY */}

              <article className="detail-card">
                <div className="detail-icon">
                  💧
                </div>

                <div>
                  <h3>Humidity</h3>

                  <p>
                    {weather.main.humidity}%
                  </p>
                </div>
              </article>

              {/* WIND */}

              <article className="detail-card">
                <div className="detail-icon">
                  💨
                </div>

                <div>
                  <h3>Wind Speed</h3>

                  <p>
                    {weather.wind.speed} m/s
                  </p>
                </div>
              </article>

              {/* PRESSURE */}

              <article className="detail-card">
                <div className="detail-icon">
                  🔵
                </div>

                <div>
                  <h3>Pressure</h3>

                  <p>
                    {weather.main.pressure} hPa
                  </p>
                </div>
              </article>

            </section>

            {/* EXTRA INFORMATION */}

            <section className="extra-info">

              {/* MINIMUM */}

              <div>
                <span>🌡️</span>

                <p>Minimum</p>

                <strong>
                  {Math.round(
                    weather.main.temp_min
                  )}
                  °C
                </strong>
              </div>

              {/* MAXIMUM */}

              <div>
                <span>🔥</span>

                <p>Maximum</p>

                <strong>
                  {Math.round(
                    weather.main.temp_max
                  )}
                  °C
                </strong>
              </div>

              {/* VISIBILITY */}

              <div>
                <span>👁️</span>

                <p>Visibility</p>

                <strong>
                  {weather.visibility
                    ? (
                        weather.visibility / 1000
                      ).toFixed(1)
                    : "N/A"}
                  km
                </strong>
              </div>

            </section>

          </section>
        )}

        {/* ==========================
            FOOTER
        ========================== */}

        <footer className="weather-footer">
          <p>Weather App</p>

          <span>
            Built with React + Axios
          </span>
        </footer>

      </section>
    </main>
  );
}

export default Weather;