import './Hero.css'
import WeatherPreview from './WeatherPreview'

function Hero() {
  return (
    <div className="hero">

      <div className="hero-content">

        <span className="hero-label">
          LOCAL FARMING INTELLIGENCE
        </span>

        <h1>
          Know your market.
          <br />
          Plan with confidence.
        </h1>

        <h3>
          Get crop prices and local weather insights
          in one simple place.
        </h3>

        <div className="hero-buttons">

          <button className="primary-btn">
            Explore Market Prices
          </button>

          <button className="secondary-btn">
            View Weather
          </button>

        </div>

      </div>

      <div className="hero-preview">
  <WeatherPreview />
</div>

    </div>
  )
}

export default Hero