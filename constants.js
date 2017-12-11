


const PRODUCT_ID = "{product-id}";
const GDAX_TICKER_URL = "https://api.gdax.com/products/" + PRODUCT_ID + "/ticker";
const BITFINEX_URL = "https://api.bitfinex.com/v1/"
const BITFINEX_URL_TICKER = "pubticker/"+PRODUCT_ID

module.exports = {
    PRODUCT_ID : PRODUCT_ID,
    BITFINEX : {
      URL : BITFINEX_URL,
      SUFFIX_TICKER: BITFINEX_URL_TICKER,
      BITCOIN_PRODUCTS :[ 'btcusd','btceur']
    },
    GDAX :{
      TICKER_URL : GDAX_TICKER_URL,
      BITCOIN_PRODUCTS :[ 'BTC-USD' , 'BTC-EUR']
      }
    };
