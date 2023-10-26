import {IWeatherCardProps} from "@/app/interfaces/IWeatherCard";
import {ILocationProps} from "@/app/interfaces/ILocation";
export const getWeatherData = async ({lon, lat}: ILocationProps): Promise<IWeatherCardProps> => {

  const apiKey: string = '5d0b93558a2b542213e8cf1a3d39eff2';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
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
