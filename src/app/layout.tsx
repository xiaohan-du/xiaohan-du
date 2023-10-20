'use server';
import { DefaultNavbar } from "@/app/components/Navbar/navbar";
import { Footer } from "@/app/components/Footer/footer";
import {getWeatherData} from "@/app/hooks/useWeather";
import './globals.scss'

interface LayoutProps {
  children: React.ReactNode;
}
export default async function RootLayout({ children }: LayoutProps) {
  const weatherData = await getWeatherData();
  return (
    <html lang="en">
    <body>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 main">
      <DefaultNavbar weather={weatherData.weather}/>
      {children}
      <Footer />
    </main>
    </body>
    </html>
  )
};
