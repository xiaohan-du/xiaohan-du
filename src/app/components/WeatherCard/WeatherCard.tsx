import {IWeatherCardProps} from "@/app/interfaces/IWeatherCard";
import {Dropdown} from "flowbite-react";
import Image from "next/image";
import fieldMappings from './WeatherCard.json';

export const WeatherCard = ({weather, main}: IWeatherCardProps) => {
  return (
    <Dropdown
      label={<Image src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="Weather Icon" width={100}
                    height={100}/>} dismissOnClick={false}>
      <Dropdown.Item>Weather: {weather[0].description}</Dropdown.Item>
      {Object.keys(fieldMappings).map((field: string, index: number) => {
        const { field_key, name, unit } = fieldMappings[index];
        return (
          <Dropdown.Item key={index}>
            {name}: {main[field_key as keyof Main]}{unit}
          </Dropdown.Item>
        );
      })}
    </Dropdown>
  )
};
