'use client';
import {IToggleMenuProps} from "@/app/interfaces/IToggleMenu";
import {ReactNode} from "react";
import {ToggleMenu} from "@/app/components/ToggleMenu/ToggleMenu";

export const WidgetBar = (widgetBarData: {
  weatherData: IToggleMenuProps;
  cryptoData: IToggleMenuProps;
  stockData: IToggleMenuProps;
  currencyData: IToggleMenuProps;
  metalData: IToggleMenuProps;
}): ReactNode => {
  const { icon: iconW, main: weatherMain, text: textW, mappings: weatherMappings } = widgetBarData.weatherData;
  const { icon: iconC, main: cryptoPrices, text: textC, mappings: cryptoMappings } = widgetBarData.cryptoData;
  const { icon: iconS, main: stockPrices, text: textS, mappings: stockMappings } = widgetBarData.stockData;
  const { icon: iconCU, main: currencyPrices, text: textCU, mappings: currencyMappings } = widgetBarData.currencyData;
  const { icon: iconM, main: metalPrices, text: textM, mappings: metalMappings } = widgetBarData.metalData;
  return (
    <div className={'bg-slate-50 w-full p-2 flex flex-row justify-between mb-4'}>
      <ToggleMenu icon={`https://openweathermap.org/img/wn/${iconW}@2x.png`} main={weatherMain} text={textW} mappings={weatherMappings} iconSize={50} iconClasses={''} />
      <ToggleMenu icon={iconC} main={cryptoPrices} text={textC} mappings={cryptoMappings} iconSize={30} iconClasses={'ml-2'} />
      <ToggleMenu icon={iconS} main={stockPrices} text={textS} mappings={stockMappings} iconSize={30} iconClasses={'ml-2'} />
      <ToggleMenu icon={iconCU} main={currencyPrices} text={textCU} mappings={currencyMappings} iconSize={30} iconClasses={'ml-2'} />
      <ToggleMenu icon={iconM} main={metalPrices} text={textM} mappings={metalMappings} iconSize={30} iconClasses={'ml-2'} />
    </div>
  )
};
