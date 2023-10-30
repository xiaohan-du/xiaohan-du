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
  const gbpPrices = Object.values(cryptoData.data).reduce((result, item) => {
    result[item.symbol] = item.quote.GBP.price.toString().substring(0, 9);
    return result;
  }, {});

  const toggleMenuDataWeather: IToggleMenuProps = {
    icon: weatherData.weather[0].icon,
    main: weatherData.main,
    text: city,
    mappings: weatherMappings,
    iconSize: 50,
    iconClasses: ''
  }

  const toggleMenuDataCrypto: IToggleMenuProps = {
    icon: '/icons/crypto.svg',
    main: gbpPrices,
    text: 'Crypto',
    mappings: cryptoMappings,
    iconSize: 30,
    iconClasses: 'ml-2'
  }

  const widgetBarData: {
    weatherData: IToggleMenuProps;
    cryptoData: IToggleMenuProps;
  } = {
    weatherData: toggleMenuDataWeather,
    cryptoData: toggleMenuDataCrypto
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
