import {ICryptoProps} from "@/app/interfaces/ICrypto";

export const getCryptoData = async (): Promise<ICryptoProps> => {
  const apiKey: string | undefined = process.env.API_KEY_CRYPTO;
  const apiUrl: string = `${process.env.API_URL_CRYPTO}?id=1,1027,2010,74,512&convert=USD`;

  try {
    const headers = apiKey
      ? { "X-CMC_PRO_API_KEY": apiKey } as Record<string, string>
      : {};

    const response = await fetch(apiUrl, {
      method: 'GET',
      cache: 'no-store',
      headers
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
