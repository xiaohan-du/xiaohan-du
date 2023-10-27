'use client';
import {WeatherCard} from "@/app/components/WeatherCard/WeatherCard";
import {INavbarProps} from "@/app/interfaces/INavbar";
import {CryptoCard} from "@/app/components/CryptoCard/CryptoCard";
export const WidgetBar = ({weather, main, city}: INavbarProps) => {
  return (
    <div className={'bg-slate-50 w-full p-2 flex flex-row'}>
      <WeatherCard weather={weather} main={main} city={city}/>
      <CryptoCard />
    </div>
  )
};
