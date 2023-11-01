export const getCurrencyData = async () => {
  const apiKey: string | undefined = process.env.API_KEY_OPEN_EXCHANGE_RATES;
  const apiUrl = `${process.env.API_URL_OPEN_EXCHANGE_RATES}?app_id=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.log('error fetching weather data, fallback to London')

    };

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  };
};
