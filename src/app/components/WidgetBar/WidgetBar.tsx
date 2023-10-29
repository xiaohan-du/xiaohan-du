'use client';
import {IToggleMenuProps} from "@/app/interfaces/IToggleMenu";
import {ReactNode} from "react";
import {ToggleMenu} from "@/app/components/ToggleMenu/ToggleMenu";

export const WidgetBar = (widgetBarData: {
  weatherData: IToggleMenuProps;
  cryptoData: IToggleMenuProps;
}): ReactNode => {
  const { icon: iconW, main: weatherMain, text: textW, mappings: weatherMappings } = widgetBarData.weatherData;
  const { icon: iconC, main: gbpPrices, text: textC, mappings: cryptoMappings } = widgetBarData.cryptoData;
  return (
    <div className={'bg-slate-50 w-full p-2 flex flex-row'}>
      <ToggleMenu icon={`https://openweathermap.org/img/wn/${iconW}@2x.png`} main={weatherMain} text={textW} mappings={weatherMappings} iconSize={50} iconClasses={''} />
      <ToggleMenu icon={iconC} main={gbpPrices} text={textC} mappings={cryptoMappings} iconSize={30} iconClasses={'ml-2'} />
    </div>
  )
};
