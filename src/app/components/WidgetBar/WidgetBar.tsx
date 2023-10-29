'use client';
import {WeatherCard} from "@/app/components/WeatherCard/WeatherCard";
import {CryptoCard} from "@/app/components/CryptoCard/CryptoCard";
import {IToggleMenuProps} from "@/app/interfaces/IToggleMenu";
import {ReactNode} from "react";
export const WidgetBar = (widgetBarData: {
  weatherData: IToggleMenuProps;
  cryptoData: IToggleMenuProps;
}): ReactNode => {
  const { icon, main, text, mappings } = widgetBarData.weatherData;
  const { icon: icon2, main: gbpPrices, text: text2, mappings: cryptoMappings } = widgetBarData.cryptoData;
  return (
    <div className={'bg-slate-50 w-full p-2 flex flex-row'}>
      <WeatherCard icon={`https://openweathermap.org/img/wn/${icon}@2x.png`} main={main} text={text} mappings={mappings} iconSize={50} iconClasses={''}/>
      <CryptoCard icon={icon2} main={gbpPrices} text={text2} mappings={cryptoMappings} iconSize={30} iconClasses={'ml-2'}/>
    </div>
  )
};
