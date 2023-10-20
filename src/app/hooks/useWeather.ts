export const getWeatherData = async () => {
  const apiKey: string = '5d0b93558a2b542213e8cf1a3d39eff2';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${51.48}&lon=${3.16}&appid=${apiKey}`;
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Response error');
    };

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
  };
};
