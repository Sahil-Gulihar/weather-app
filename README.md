# Weather App

A simple and beautiful weather application built with React.js that uses the OpenWeatherMap API to display current weather information for any city in the world.

## Features

- 🌍 Search weather by city name
- 📍 Auto-detect user location on first load
- 🌡️ Display temperature, humidity, wind speed, and pressure
- 🎨 Beautiful gradient UI with smooth animations
- 📱 Responsive design for mobile and desktop
- ⚡ Real-time weather data from OpenWeatherMap API

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Setup Instructions

### 1. Get Your OpenWeather API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to your API keys section
4. Copy your API key

### 2. Configure the API Key

You have two options to configure your API key:

**Option 1: Using Environment Variables (Recommended)**
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and replace `YOUR_API_KEY_HERE` with your actual API key

**Option 2: Direct Configuration**
1. Open `src/services/weatherService.js`
2. Replace `'YOUR_API_KEY'` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Application

```bash
npm start
```

The app will open in your browser at [http://localhost:3000](http://localhost:3000)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## How to Use

1. **Search by City**: Enter a city name in the search bar and click "Search"
2. **Location Detection**: On first load, the app will request your location to show local weather
3. **Weather Information**: View current temperature, weather conditions, humidity, wind speed, and pressure

## Project Structure

```
src/
├── components/
│   ├── SearchBar.js       # Search input component
│   ├── SearchBar.css
│   ├── WeatherCard.js     # Weather display component
│   └── WeatherCard.css
├── services/
│   └── weatherService.js  # API service for OpenWeatherMap
├── App.js                 # Main application component
├── App.css
├── index.js
└── index.css
```

## Technologies Used

- **React.js** - Frontend framework
- **OpenWeatherMap API** - Weather data provider
- **CSS3** - Styling and animations
- **Geolocation API** - Location detection

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Created with [Create React App](https://github.com/facebook/create-react-app)
