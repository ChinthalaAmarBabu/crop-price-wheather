import './WeatherPreview.css'

function WeatherPreview() {
  return (
    <div className="weather-preview">

      <div className="weather-location">
        <span>📍</span>
        <span>Ongole</span>
      </div>

      <div className="weather-main">
        <div className="weather-icon">
          ☀️
        </div>

        <div>
          <div className="temperature">28°</div>
          <div className="weather-condition">
            Partly cloudy
          </div>
        </div>
      </div>

      <div className="weather-divider"></div>

      <div className="weather-footer">
        <span>Today's overview</span>
        <span>Weather</span>
      </div>

    </div>
  )
}

export default WeatherPreview