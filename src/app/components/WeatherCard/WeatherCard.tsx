import {IWeatherCardProps} from "@/app/interfaces/IWeatherCard";
import {Dropdown} from "flowbite-react";
import Image from "next/image";

export const WeatherCard = ({weather, main}: IWeatherCardProps) => {
  const fieldsToDisplay = ['temp', 'feels_like', 'temp_min', 'temp_max', 'pressure'];
  const fieldNames = ['Temperature', 'Feels like', 'Min', 'Max', 'Pressure'];
  const fieldUnits = ['°C', '°C', '°C', '°C', 'hPa'];
  return (
    <Dropdown
      label={<Image src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="Weather Icon" width={100}
                    height={100}/>} dismissOnClick={false}>
      <Dropdown.Item>Weather: {weather[0].description}</Dropdown.Item>
      {
        fieldsToDisplay.map((field: string, index: number) => {
          return <Dropdown.Item
            key={field}>{fieldNames[index]}: {main[field as keyof Main]}{fieldUnits[index]}</Dropdown.Item>;
        })
      }
    </Dropdown>
  )
};
