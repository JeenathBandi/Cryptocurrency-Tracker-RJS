// Write your JS code here

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'

import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    this.setState({currencyList: formattedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    console.log(currencyList)
    return (
      <div className="currencies-list-container">
        <h1 className="currency-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="bg-img"
        />
        <div className="table-container">
          <div className="row-container">
            <p className="coin-type-1">Coin Type</p>
            <p className="coin-type">USD</p>
            <p className="coin-type">EURO</p>
          </div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            
            currencyList.map(each => (
              <CryptocurrencyItem currencyList={each} key={each.id} />
          ))
            
          )}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
