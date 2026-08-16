# 🌤️ Weather App

A modern and responsive **Weather Application** built with **React.js** that provides real-time weather information for any city using the **OpenWeather API**.

Users can search for a city and view temperature, weather conditions, humidity, wind speed, pressure, visibility, and other useful weather information.

---

## 🚀 Live Demo

🔗 **Live Website:** YOUR_VERCEL_LINK

🔗 **GitHub Repository:** YOUR_GITHUB_REPOSITORY_LINK

---

## ✨ Features

- 🌍 Search weather by city name
- 🌡️ Real-time temperature
- 🤒 Feels-like temperature
- 💧 Humidity percentage
- 💨 Wind speed
- 🔵 Atmospheric pressure
- 👁️ Visibility information
- ☀️ Dynamic weather icons
- 📅 Live date
- 🕐 Live current time
- ⏳ Loading indicator
- ❌ Error handling
- 🔐 Environment variable for API key
- 📱 Responsive design
- ⚡ Axios API integration

---

## 🛠️ Technologies Used

- **React.js**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Axios**
- **OpenWeather API**
- **Git & GitHub**
- **Vercel**

---

## 📂 Project Structure

```text
weather-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Weather.jsx
│   │   └── Weather.css
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### 2. Navigate to the Project

```bash
cd weather-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment File

Create a `.env` file in the root directory.

```env
REACT_APP_WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```

### 5. Start the Application

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

---

## 🌦️ How It Works

1. User enters a city name.
2. React captures the search input.
3. Axios sends a request to the OpenWeather API.
4. OpenWeather returns the weather information.
5. React stores the response using `useState`.
6. The weather information is displayed dynamically.

---

## 📊 Weather Information

| Information | Description |
|---|---|
| 🌡️ Temperature | Current temperature in Celsius |
| 🤒 Feels Like | Perceived temperature |
| 💧 Humidity | Current humidity |
| 💨 Wind Speed | Current wind speed |
| 🔵 Pressure | Atmospheric pressure |
| 👁️ Visibility | Visibility distance |
| 🌡️ Minimum | Minimum temperature |
| 🔥 Maximum | Maximum temperature |
| ☁️ Condition | Current weather condition |

---

## 🧠 React Concepts Used

- Functional Components
- `useState`
- `useEffect`
- Event Handling
- Conditional Rendering
- API Integration
- Axios
- Async/Await
- Error Handling
- Environment Variables
- Component-Based Architecture

---

## 🔐 Environment Variables

The OpenWeather API key is stored using an environment variable.

```env
REACT_APP_WEATHER_API_KEY=YOUR_API_KEY
```

Make sure `.env` is included in `.gitignore`.

```gitignore
.env
```

**Never upload your API key to GitHub.**

---

## 📱 Responsive Design

The application is responsive and works across:

- 💻 Desktop
- 💻 Laptop
- 📱 Mobile
- 📱 Tablet

---

## 🚨 Error Handling

The application handles:

- Empty city input
- Invalid city names
- Invalid API keys
- Missing API keys
- API request failures
- Loading states

---

## 🚀 Deployment

This project is deployed using **Vercel**.

### Build

```bash
npm run build
```

### Vercel Environment Variable

Add this environment variable in your Vercel project:

```text
REACT_APP_WEATHER_API_KEY
```

Then add your OpenWeather API key as the value and redeploy.

---

## 🔮 Future Improvements

- 📍 Current location weather
- 🌤️ 5-day weather forecast
- 🌙 Dark mode
- ⭐ Favorite cities
- 🔍 Search suggestions
- 🌡️ Celsius / Fahrenheit toggle
- 🌅 Sunrise and sunset information
- 📈 Weather charts
- 🗺️ Weather map integration

---

## 👨‍💻 Author

### Mukesh

**Full Stack Developer | React Developer**

🔗 **LinkedIn:** YOUR_LINKEDIN_LINK

🐙 **GitHub:** YOUR_GITHUB_LINK

📧 **Email:** YOUR_EMAIL

---

## ⭐ Support

If you found this project useful, please consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project was created for learning and portfolio purposes.
