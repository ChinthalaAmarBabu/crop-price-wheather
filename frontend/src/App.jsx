import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CropPrices from './components/CropPrices'
import WeatherSection from './components/WeatherSection'

function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <CropPrices />

      <WeatherSection />

    </div>
  )
}

export default App