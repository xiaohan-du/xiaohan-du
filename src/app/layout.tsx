import { DefaultNavbar } from "@/app/components/Navbar/Navbar";
import { Footer } from "@/app/components/Footer/Footer";
import {getWeatherData} from "@/app/hooks/useWeather";
import './globals.scss'
import {getUserLocation} from "@/app/hooks/useLocation";
import {ILocationProps} from "@/app/interfaces/ILocation";
import {WidgetBar} from "@/app/components/WidgetBar/WidgetBar";
import {getCryptoData} from "@/app/hooks/useCrypto";
import {ICryptoProps} from "@/app/interfaces/ICrypto";
import {IToggleMenuProps} from "@/app/interfaces/IToggleMenu";
import weatherMappings from "@/app/mappings/WeatherMappings.json";
import cryptoMappings from "@/app/mappings/CryptoMappings.json";
import {IWeatherProps} from "@/app/interfaces/IWeather";
import { Poppins } from 'next/font/google'
import {getStockData} from "@/app/hooks/useStock";
import {IStockProps} from "@/app/interfaces/IStock";
import stockMappings from "@/app/mappings/StockMappings.json";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
});

interface LayoutProps {
  children: React.ReactNode;
}
export default async function RootLayout({ children }: LayoutProps) {

  const locationData: ILocationProps = await getUserLocation();
  const { lat = 51.5, lon = 0.127, city = 'London' } = locationData || {};
  const weatherData: IWeatherProps = await getWeatherData({lat: lat, lon: lon, city: city});
  const cryptoData: ICryptoProps = await getCryptoData();
  const cryptoPrices = Object.values(cryptoData.data).reduce((result, item) => {
    result[item.symbol] = item.quote.GBP.price.toString().substring(0, 9);
    return result;
  }, {});

  const stockData: IStockProps = await getStockData();
  const stockPrices: Stock = Object.keys(stockData).reduce((result, symbol) => {
    (result as IStockProps)[symbol] = (stockData[symbol] as Quote)?.c;
    return result;
  }, {
    AAPL: 0,
    MSFT: 0,
    AMZN: 0,
    META: 0,
    NVDA: 0
  });

  const toggleMenuDataWeather: IToggleMenuProps = {
    icon: weatherData.weather[0].icon,
    main: weatherData.main,
    text: city,
    mappings: weatherMappings,
    iconSize: 50,
    iconClasses: ''
  };

  const toggleMenuDataCrypto: IToggleMenuProps = {
    icon: '/icons/crypto.svg',
    main: cryptoPrices,
    text: 'Crypto',
    mappings: cryptoMappings,
    iconSize: 30,
    iconClasses: 'ml-2'
  };

  const toggleMenuDataStock: IToggleMenuProps = {
    icon: '/icons/stock.svg',
    main: stockPrices,
    text: 'Stock',
    mappings: stockMappings,
    iconSize: 30,
    iconClasses: 'ml-2'
  };

  const widgetBarData: {
    weatherData: IToggleMenuProps;
    cryptoData: IToggleMenuProps;
    stockData: IToggleMenuProps;
  } = {
    weatherData: toggleMenuDataWeather,
    cryptoData: toggleMenuDataCrypto,
    stockData: toggleMenuDataStock
  };

  return (
    <html lang="en" className={poppins.className}>
    <body>
    <main className="flex min-h-screen flex-col items-center p-24 main">
      <DefaultNavbar />
      <WidgetBar {...widgetBarData} />
      {children}
      <Footer />
    </main>
    </body>
    </html>
  )
};
