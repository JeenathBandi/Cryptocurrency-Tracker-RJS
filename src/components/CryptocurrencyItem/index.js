// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyList} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyList

  return (
    <li className="item-row-container">
      <div className="row-container-logo">
        <img src={currencyLogo} alt={currencyName} className="currency-logos" />
        <p className="currency-name">{currencyName}</p>
      </div>

      <p className="usd-value">{usdValue}</p>
      <p className="usd-value">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
