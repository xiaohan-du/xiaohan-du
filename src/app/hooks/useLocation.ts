import {ILocationProps} from "@/app/interfaces/ILocation";

export const getUserLocation = async (): Promise<ILocationProps> => {
  try {
    const response = await fetch('http://ip-api.com/json/', {
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
