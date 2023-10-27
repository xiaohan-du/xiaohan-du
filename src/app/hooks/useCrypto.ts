export const getCryptoData = async () => {
  const apiKey: string | undefined = process.env.API_KEY_CRYPTO;
  const apiUrl: string = `${process.env.API_URL_CRYPTO}?id=1&convert=GBP`;

  try {
    const headers = apiKey
      ? { "X-CMC_PRO_API_KEY": apiKey } as Record<string, string>
      : {};

    const response = await fetch(apiUrl, {
      method: 'GET',
      cache: 'no-store',
      headers,
    });

    if (!response.ok) {
      throw new Error('Response error');
    };

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  };
};
