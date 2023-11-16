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
  const {
    icon: iconW,
    main: weatherMain,
    text: textW,
    mappings: weatherMappings,
    iconSize: iconSizeW,
    iconClasses: iconClassesW
  } = widgetBarData.weatherData;
  const {
    icon: iconC,
    main: cryptoPrices,
    text: textC,
    mappings: cryptoMappings,
    iconSize: iconSizeC,
    iconClasses: iconClassesC
  } = widgetBarData.cryptoData;
  const {
    icon: iconS,
    main: stockPrices,
    text: textS,
    mappings: stockMappings,
    iconSize: iconSizeS,
    iconClasses: iconClassesS
  } = widgetBarData.stockData;
  const {
    icon: iconCU,
    main: currencyPrices,
    text: textCU,
    mappings: currencyMappings,
    iconSize: iconSizeCU,
    iconClasses: iconClassesCU
  } = widgetBarData.currencyData;
  const {
    icon: iconM,
    main: metalPrices,
    text: textM,
    mappings: metalMappings,
    iconSize: iconSizeM,
    iconClasses: iconClassesM
  } = widgetBarData.metalData;
  return (
    <div className={'bg-neutral-50 w-full p-2 flex flex-row justify-between mb-4 rounded-lg'}>
      <ToggleMenu icon={`https://openweathermap.org/img/wn/${iconW}@2x.png`} main={weatherMain} text={textW}
                  mappings={weatherMappings} iconSize={iconSizeW} iconClasses={iconClassesW} ulPosition={''}/>
      <ToggleMenu icon={iconC} main={cryptoPrices} text={textC} mappings={cryptoMappings} iconSize={iconSizeC}
                  iconClasses={iconClassesC} ulPosition={''}/>
      <ToggleMenu icon={iconS} main={stockPrices} text={textS} mappings={stockMappings} iconSize={iconSizeS}
                  iconClasses={iconClassesS} ulPosition={''}/>
      <ToggleMenu icon={iconCU} main={currencyPrices} text={textCU} mappings={currencyMappings} iconSize={iconSizeCU}
                  iconClasses={iconClassesCU} ulPosition={''}/>
      <ToggleMenu icon={iconM} main={metalPrices} text={textM} mappings={metalMappings} iconSize={iconSizeM}
                  iconClasses={iconClassesM} ulPosition={'right-0'}/>
    </div>
  )
};
