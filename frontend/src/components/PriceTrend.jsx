import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import './PriceTrend.css'

function PriceTrend() {

  const priceData = [
    { day: 'Mon', price: 16500 },
    { day: 'Tue', price: 17200 },
    { day: 'Wed', price: 16800 },
    { day: 'Thu', price: 17800 },
    { day: 'Fri', price: 18100 },
    { day: 'Sat', price: 17600 },
    { day: 'Sun', price: 18500 },
  ]

  return (
    <section className="price-trend">

      <div className="trend-header">

        <div>
          <span className="section-label">
            PRICE TREND
          </span>

          <h2>
            Chilli — Last 7 Days
          </h2>

          <p>
            Track how the market price has changed over the past week.
          </p>
        </div>

        <div className="trend-current-price">
          <span>Current price</span>
          <strong>₹18,500</strong>
          <small>↑ 12%</small>
        </div>

      </div>

      <div className="chart-container">

        <ResponsiveContainer width="100%" height={320}>

          <LineChart data={priceData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="price"
              stroke="#287047"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </section>
  )
}

export default PriceTrend