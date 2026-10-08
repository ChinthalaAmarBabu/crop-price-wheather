import './WeatherSection.css'

function WeatherSection() {

  return (
    <section className="weather-section">

      <div className="weather-heading">

        <span className="section-label">
          LOCAL WEATHER
        </span>

        <h2>
          Plan around the weather
        </h2>

        <p>
          Stay prepared with local weather conditions and upcoming forecasts.
        </p>

      </div>

      <div className="weather-content">

        <div className="current-weather">

          <div className="weather-location">
            📍 Ongole
          </div>

          <div className="current-weather-main">

            <div className="big-weather-icon">
              ☀️
            </div>

            <div>
              <div className="big-temperature">
                28°
              </div>

              <div className="weather-condition">
                Partly cloudy
              </div>
            </div>

          </div>

          <div className="weather-details">

            <div>
              <span>Humidity</span>
              <strong>68%</strong>
            </div>

            <div>
              <span>Wind</span>
              <strong>14 km/h</strong>
            </div>

            <div>
              <span>Feels like</span>
              <strong>30°</strong>
            </div>

          </div>

        </div>

        <div className="forecast-grid">

          <div className="forecast-card">
            <span>Tomorrow</span>
            <div className="forecast-icon">🌤️</div>
            <strong>30°</strong>
            <small>24°</small>
          </div>

          <div className="forecast-card">
            <span>Fri</span>
            <div className="forecast-icon">☀️</div>
            <strong>31°</strong>
            <small>25°</small>
          </div>

          <div className="forecast-card">
            <span>Sat</span>
            <div className="forecast-icon">🌧️</div>
            <strong>28°</strong>
            <small>23°</small>
          </div>

          <div className="forecast-card">
            <span>Sun</span>
            <div className="forecast-icon">🌦️</div>
            <strong>29°</strong>
            <small>24°</small>
          </div>

          <div className="forecast-card">
            <span>Mon</span>
            <div className="forecast-icon">🌧️</div>
            <strong>27°</strong>
            <small>22°</small>
          </div>

          <div className="forecast-card">
            <span>Tue</span>
            <div className="forecast-icon">⛅</div>
            <strong>30°</strong>
            <small>24°</small>
          </div>

        </div>
                </div>

        <div className="weather-alerts">

          <div className="alert-header">
            <span className="section-label">
              WEATHER ALERTS
            </span>

            <h3>
              Stay prepared
            </h3>
          </div>

          <div className="alert-grid">

            <div className="weather-alert rain-alert">
              <div className="alert-icon">
                🌧️
              </div>

              <div>
                <strong>Heavy rain expected</strong>
                <p>
                  Rain may affect harvesting tomorrow.
                </p>
              </div>
            </div>

            <div className="weather-alert heat-alert">
              <div className="alert-icon">
                🌡️
              </div>

              <div>
                <strong>High temperature</strong>
                <p>
                  Take extra care of crops during peak afternoon heat.
                </p>
              </div>
            </div>

            <div className="weather-alert wind-alert">
              <div className="alert-icon">
                💨
              </div>

              <div>
                <strong>Strong winds</strong>
                <p>
                  Secure lightweight farm equipment and coverings.
                </p>
              </div>
            </div>

          </div>

        </div>

    


    </section>
  )
}

export default WeatherSection