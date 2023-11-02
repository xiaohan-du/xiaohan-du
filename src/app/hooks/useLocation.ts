import {ILocationProps} from "@/app/interfaces/ILocation";

export const getUserLocation = async (): Promise<ILocationProps> => {
  const apiUrl: URL = process.env.API_URL_LOCATION as unknown as URL;
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      }
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
