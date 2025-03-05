'use client';
import {IToggleMenuProps} from "@/app/interfaces/IToggleMenu";
import {ReactNode} from "react";

export const WidgetBar = (widgetBarData: {
  cryptoData: IToggleMenuProps;
  stockData: IToggleMenuProps;
  currencyData: IToggleMenuProps;
  metalData: IToggleMenuProps;
}): ReactNode => {
  return (
    <div className={'bg-neutral-50 w-full p-2 flex flex-row justify-between mb-4 rounded-lg'}></div>
  )
};
