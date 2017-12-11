const axios = require("axios");
const numeral = require('numeral');
const CONSTANTS = require('./constants');

function createDaxProductExchangeRateURL(id){
  return CONSTANTS.GDAX.TICKER_URL.replace(CONSTANTS.PRODUCT_ID, id)
}

function getProductExchangeRate(url) {
  return axios.get(url);
}

function formatExchangeRate(exchangeRate, symbol) {
  return numeral(exchangeRate).format(symbol + '0.00')
}

function printExchangeRate(productId, exchangeRate) {
  console.log(productId + ': ' + formatExchangeRate(exchangeRate, '$'))
}

function extractExchangeRate(products) {
  products.forEach(product => {
    let url = createDaxProductExchangeRateURL(product);
    getProductExchangeRate(url)
    .then(response =>
      printExchangeRate(product, response.data.price))
      .catch(error => {
      console.log(error);
    })
  })
}

function getRatesFromGdax(){
  extractExchangeRate(CONSTANTS.GDAX.BITCOIN_PRODUCTS)
}

function getRatesFromBitfinex(){
  extractExchangeRate(CONSTANTS.BITFINEX.BITCOIN_PRODUCTS)

}

getRatesFromGdax();
// getRatesFromBitfinex();
