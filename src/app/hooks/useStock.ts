const finnhub = require('finnhub');

export const getStockData = async () => {
  const api_key = finnhub.ApiClient.instance.authentications['api_key'];
  api_key.apiKey = process.env.API_KEY_FINNHUB;
  const finnhubClient = new finnhub.DefaultApi()

  const makeRequests = (symbol: string) => new Promise((resolve, reject) => {
    finnhubClient.quote(symbol, (error: object, data: object) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });

  try {
    const [data1, data2, data3, data4, data5] = await Promise.all([
      makeRequests('AAPL'),
      makeRequests('MSFT'),
      makeRequests('AMZN'),
      makeRequests('META'),
      makeRequests('NVDA')
    ]);
    return { AAPL: data1, MSFT: data2, AMZN: data3, META: data4, NVDA: data5 };
  } catch (error) {
    throw error;
  }
};
