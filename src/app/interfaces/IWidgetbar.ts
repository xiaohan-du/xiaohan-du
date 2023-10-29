import {IWeatherCardProps} from "@/app/interfaces/IWeatherCard";

export interface IWidgetbarProps extends IWeatherCardProps{
  text: string;
  gbpPrices: GbpPrices;
};
