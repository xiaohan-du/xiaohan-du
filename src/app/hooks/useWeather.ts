import {ILocationProps} from "@/app/interfaces/ILocation";
import {IWeatherProps} from "@/app/interfaces/IWeather";
export const getWeatherData = async ({lon, lat}: ILocationProps): Promise<IWeatherProps> => {

  const apiKey: string | undefined = process.env.API_KEY_WEATHER;
  const apiUrl: string = `${process.env.API_URL_WEATHER}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
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
