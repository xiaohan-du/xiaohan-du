export const getMetalData = async () => {

  const apiKey: string | undefined = process.env.API_KEY_METALPRICE;
  const apiUrl: string = `${process.env.API_URL_METALPRICE}?api_key=${apiKey}&base=USD&currencies=XAU,XAG,XPT,XCU,ZNC`;
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.log('error fetching metal price data')

    };

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  };
};
