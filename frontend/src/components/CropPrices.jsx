
import './CropPrices.css'
import PriceTrend from './PriceTrend'
function CropPrices() {

  return (
    <section className="crop-prices">

      <div className="section-heading">
        <span className="section-label">
          TODAY'S MARKET
        </span>

        <h2>
          Know your crop prices
        </h2>

        <p>
          Check today's market prices and make better selling decisions.
        </p>
      </div>

      <div className="crop-grid">

        {/* Chilli */}
        <div className="crop-card">
            
          <div className="crop-icon">
            🌶️
          </div>

          <div className="crop-info">
            <h3>Chilli</h3>
            <span>Guntur Market</span>
          </div>

          <div className="crop-price">
            <strong>₹18,500</strong>
            <span className="price-up">↑ 12%</span>
          </div>

        </div>

        {/* Cotton */}
        <div className="crop-card">
            
          <div className="crop-icon">
            🌿
          </div>

          <div className="crop-info">
            <h3>Cotton</h3>
            <span>Ongole Market</span>
          </div>

          <div className="crop-price">
            <strong>₹7,200</strong>
            <span className="price-up">↑ 4%</span>
          </div>

        </div>

        {/* Tomato */}
        <div className="crop-card">
            
          <div className="crop-icon">
            🍅
          </div>

          <div className="crop-info">
            <h3>Tomato</h3>
            <span>Prakasam Market</span>
          </div>

          <div className="crop-price">
            <strong>₹2,800</strong>
            <span className="price-down">↓ 6%</span>
          </div>

        </div>
        {/* Bengal Gram */}
<div className="crop-card">
    
  <div className="crop-icon">
    🫘
  </div>

  <div className="crop-info">
    <h3>Bengal Gram(Red)</h3>
    <span>Prakasam Market</span>
  </div>

  <div className="crop-price">
    <strong>₹6,200</strong>
    <span className="price-up">↑ 3%</span>
  </div>

</div>

{/* Red Gram */}
<div className="crop-card">
    
  <div className="crop-icon">
    🫘
  </div>

  <div className="crop-info">
    <h3>Bengal Gram(White)</h3>
    <span>Prakasam Market</span>
  </div>

  <div className="crop-price">
    <strong>₹8,100</strong>
    <span className="price-up">↑ 5%</span>
  </div>

</div>


  {/* Maize */}
<div className="crop-card">
   
  <div className="crop-icon">
    🌽
  </div>

  <div className="crop-info">
    <h3>Maize</h3>
    <span>Prakasam Market</span>
  </div>

  <div className="crop-price">
    <strong>₹2,400</strong>
    <span className="price-up">↑ 4%</span>
  </div>

</div>

{/* Tobacco */}
<div className="crop-card">
   
  <div className="crop-icon">
    🍂
  </div>

  <div className="crop-info">
    <h3>Tobacco</h3>
    <span>Ongole Market</span>
  </div>

  <div className="crop-price">
    <strong>₹18,000</strong>
    <span className="price-up">↑ 6%</span>
  </div>

</div>

      </div>
      <PriceTrend />

    </section>
  )
}

export default CropPrices