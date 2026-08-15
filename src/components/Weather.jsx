import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";

function Weather() {
  // Search city
  const [city, setCity] = useState("");

  // Weather data
  const [weather, setWeather] = useState(null);

  // Error message
  const [error, setError] = useState("");

  // Loading
  const [loading, setLoading] = useState(false);

  // Live date and time
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // -----------------------------------
  // LIVE DATE AND TIME
  // -----------------------------------

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // -----------------------------------
  // SEARCH WEATHER
  // -----------------------------------

  const searchWeather = async () => {
    // Check empty input
    if (!city.trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

try {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;

  const response = await axios.get(apiUrl);

  setWeather(response.data);
} catch (error) {
  setError("City not found. Please enter a valid city name.");
  setWeather(null);
} finally {
  setLoading(false);
}

};  // ✅ closes searchWeather


// -----------------------------------
// FORM SUBMIT
// -----------------------------------

const handleSubmit = (event) => {
  event.preventDefault();

  searchWeather();
};

  return (
    <main className="weather-page">

      <section className="weather-container">

        {/* --------------------------------
            HEADER
        -------------------------------- */}

        <header className="weather-header">

          <div className="weather-icon">
            🌤️
          </div>

          <h1>
            Weather Report
          </h1>

          <p>
            Search real-time weather information
          </p>

        </header>


        {/* --------------------------------
            LIVE DATE & TIME
        -------------------------------- */}

        <section className="datetime-grid">

          {/* TIME CARD */}

          <article className="datetime-card">

            <div className="datetime-icon">
              🕐
            </div>

            <div>

              <h3>
                Current Time
              </h3>

              <p className="time-text">
                {currentDateTime.toLocaleTimeString(
                  "en-IN"
                )}
              </p>

            </div>

          </article>


          {/* DATE CARD */}

          <article className="datetime-card">

            <div className="datetime-icon">
              📅
            </div>

            <div>

              <h3>
                Today's Date
              </h3>

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


        {/* --------------------------------
            SEARCH
        -------------------------------- */}

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


        {/* --------------------------------
            LOADING
        -------------------------------- */}

        {loading && (
          <div className="message loading">
            <span>⏳</span>
            Loading weather...
          </div>
        )}


        {/* --------------------------------
            ERROR
        -------------------------------- */}

        {error && !loading && (
          <div className="message error">
            ❌ {error}
          </div>
        )}


        {/* --------------------------------
            WEATHER RESULT
        -------------------------------- */}

        {weather && !loading && !error && (

          <section className="weather-result">

            {/* CITY */}

            <div className="location">

              <h2>
                {weather.name}
              </h2>

              <p>
                {weather.sys.country}
              </p>

            </div>


            {/* MAIN WEATHER */}

            <div className="main-weather">

              <div className="weather-main-icon">

                {weather.weather[0].main ===
                "Clear"
                  ? "☀️"
                  : weather.weather[0].main ===
                    "Clouds"
                  ? "☁️"
                  : weather.weather[0].main ===
                    "Rain"
                  ? "🌧️"
                  : weather.weather[0].main ===
                    "Snow"
                  ? "❄️"
                  : "🌤️"}

              </div>


              <div>

                <div className="temperature">

                  {Math.round(
                    weather.main.temp
                  )}
                  °C

                </div>

                <p className="description">

                  {weather.weather[0].description}

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

                  <h3>
                    Feels Like
                  </h3>

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

                  <h3>
                    Humidity
                  </h3>

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

                  <h3>
                    Wind Speed
                  </h3>

                  <p>
                    {weather.wind.speed} m/s
                  </p>

                </div>

              </article>


              {/* PRESSURE */}

              <article className="detail-card">

                <div className="detail-icon">
                  🌡️
                </div>

                <div>

                  <h3>
                    Pressure
                  </h3>

                  <p>
                    {weather.main.pressure} hPa
                  </p>

                </div>

              </article>

            </section>


            {/* EXTRA INFORMATION */}

            <section className="extra-info">

              <div>

                <span>
                  🌡️
                </span>

                <p>
                  Minimum
                </p>

                <strong>
                  {Math.round(
                    weather.main.temp_min
                  )}
                  °C
                </strong>

              </div>


              <div>

                <span>
                  🔥
                </span>

                <p>
                  Maximum
                </p>

                <strong>
                  {Math.round(
                    weather.main.temp_max
                  )}
                  °C
                </strong>

              </div>


              <div>

                <span>
                  👁️
                </span>

                <p>
                  Visibility
                </p>

                <strong>
                  {(
                    weather.visibility / 1000
                  ).toFixed(1)}
                  km
                </strong>

              </div>

            </section>

          </section>

        )}


        {/* --------------------------------
            FOOTER
        -------------------------------- */}

        <footer className="weather-footer">

          <p>
            Weather App
          </p>

          <span>
            Built with React + Axios
          </span>

        </footer>

      </section>

    </main>
  );
}

export default Weather;