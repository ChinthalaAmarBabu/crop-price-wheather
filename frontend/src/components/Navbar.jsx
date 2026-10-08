import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">

      <div className="brand">
        <div className="brand-icon">🌾</div>

        <div className="brand-text">
          <span className="brand-name">CropWise</span>
          <span className="brand-tagline">Smart farming insights</span>
        </div>
      </div>

     <div className="nav-links">
  <a href="#" className="active">Home</a>
  <a href="#">Prices</a>
  <a href="#">Weather</a>
  <a href="#">About</a>
</div>

      <button className="language-btn">
        తెలుగు
      </button>

    </nav>
  )
}

export default Navbar