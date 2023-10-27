'use client';
import {WeatherCard} from "@/app/components/WeatherCard/WeatherCard";
import {INavbarProps} from "@/app/interfaces/INavbar";
export const WidgetBar = ({weather, main, city}: INavbarProps) => {
  return (
    <div className={'bg-slate-50 w-full p-2'}>
      <WeatherCard weather={weather} main={main} city={city}/>
    </div>
  )
};
