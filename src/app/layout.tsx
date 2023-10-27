'use server';
import { DefaultNavbar } from "@/app/components/Navbar/Navbar";
import { Footer } from "@/app/components/Footer/Footer";
import {getWeatherData} from "@/app/hooks/useWeather";
import './globals.scss'
import {getUserLocation} from "@/app/hooks/useLocation";
import {ILocationProps} from "@/app/interfaces/ILocation";
import {IWeatherCardProps} from "@/app/interfaces/IWeatherCard";
import {WidgetBar} from "@/app/components/WidgetBar/WidgetBar";
import {getCryptoData} from "@/app/hooks/useCrypto";

interface LayoutProps {
  children: React.ReactNode;
}
export default async function RootLayout({ children }: LayoutProps) {

  const locationData: ILocationProps = await getUserLocation();
  const { lat = 51.5, lon = 0.127, city = 'London' } = locationData || {};
  const weatherData: IWeatherCardProps = await getWeatherData({lat: lat, lon: lon, city: city});
  const cryptoData =await getCryptoData();
  return (
    <html lang="en">
    <body>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 main">
      <DefaultNavbar />
      <WidgetBar city={city} weather={weatherData.weather} main={weatherData.main} />
      {children}
      <Footer />
    </main>
    </body>
    </html>
  )
};
