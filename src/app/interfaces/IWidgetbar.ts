import {IWeatherCardProps} from "@/app/interfaces/IWeatherCard";

export interface IWidgetbarProps extends IWeatherCardProps{
  city: string;
  gbpPrices: GbpPrices;
};
