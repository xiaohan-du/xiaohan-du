export interface IWeatherProps {
  weather: {
    id: number,
    main: string,
    description: string,
    icon: string
  }[];
  main: Main;
  text: string;
};
