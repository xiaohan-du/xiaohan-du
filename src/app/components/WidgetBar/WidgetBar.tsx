'use client';
import {WeatherCard} from "@/app/components/WeatherCard/WeatherCard";
import {IWidgetbarProps} from "@/app/interfaces/IWidgetbar";
import {CryptoCard} from "@/app/components/CryptoCard/CryptoCard";
export const WidgetBar = ({weather, main, city, gbpPrices}: IWidgetbarProps) => {
  return (
    <div className={'bg-slate-50 w-full p-2 flex flex-row'}>
      <WeatherCard weather={weather} main={main} city={city}/>
      <CryptoCard gbpPrices={gbpPrices}/>
    </div>
  )
};
