import {DefaultNavbar} from "@/app/components/Navbar/Navbar";
import {DefaultFooter} from "@/app/components/Footer/Footer";
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
import {Poppins} from 'next/font/google'
import {getStockData} from "@/app/hooks/useStock";
import {IStockProps} from "@/app/interfaces/IStock";
import stockMappings from "@/app/mappings/StockMappings.json";
import {getCurrencyData} from "@/app/hooks/useCurrency";
import currencyMappings from "@/app/mappings/CurrencyMappings.json";
import {ICurrencyProps} from "@/app/interfaces/ICurrency";
import {getMetalData} from "@/app/hooks/useMetal";
import metalMappings from "@/app/mappings/MetalMappings.json";
import {IMetalProps} from "@/app/interfaces/IMetal";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
});

interface LayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({children}: LayoutProps) {

  const locationData: ILocationProps = await getUserLocation();
  const {lat = 51.5, lon = 0.127, city = 'London'} = locationData || {};
  const weatherData: IWeatherProps = await getWeatherData({lat: lat, lon: lon, city: city});

  // enable this and remove dummy to show price
  // const cryptoData: ICryptoProps = await getCryptoData();
  // const cryptoPrices: Cryptos = Object.values(cryptoData.data).reduce((result, item) => {
  //   result[item.symbol] = item.quote.USD.price.toString().substring(0, 9);
  //   return result;
  // }, {
  //   BTC: 0,
  //   DOGE: 0,
  //   XLM: 0,
  //   ETH: 0,
  //   ADA: 0
  // });

  const dummyCryptoPrices = {
    BTC: 0,
    DOGE: 0,
    XLM: 0,
    ETH: 0,
    ADA: 0
  };

  // enable this and remove dummy to show price
  // const stockData: IStockProps = await getStockData();
  //
  // const stockPrices: Stock = Object.keys(stockData).reduce((result, symbol) => {
  //   (result as IStockProps)[symbol] = (stockData[symbol] as Quote)?.c;
  //   return result;
  // }, {
  //   AAPL: 0,
  //   MSFT: 0,
  //   AMZN: 0,
  //   META: 0,
  //   NVDA: 0
  // });

  const dummyStockPrices = {
    AAPL: 0,
    MSFT: 0,
    AMZN: 0,
    META: 0,
    NVDA: 0
  }

  // const currencyData: ICurrencyProps = await getCurrencyData();

  const dummyCurrencyData = {
    GBP: 0,
    CAD: 0,
    JPY: 0,
    AUD: 0,
    EUR: 0
  };

  // enable this and remove dummy to show price
  // const metalPriceData: IMetalProps = await getMetalData();
  const dummyMetalPriceData = {
    success: true,
    base: 'USD',
    timestamp: 1698940670,
    rates: {
      XAG: 0,
      XAU: 0,
      XCU: 0,
      XPT: 0,
      ZNC: 0
    }
  }

  const metalPriceDataPerOz: Partial<Metal> = Object.keys(dummyMetalPriceData.rates).reduce((result, symbol) => {
    const key = symbol as keyof Metal;
    return {
      ...result,
      [key]: (1 / (dummyMetalPriceData.rates[key] as unknown as number)).toString().substring(0, 8)
    };
  }, {});

  const toggleMenuDataMetal: IToggleMenuProps = {
    icon: '/icons/gold.svg',
    main: metalPriceDataPerOz,
    text: 'Metal (USD/oz)',
    mappings: metalMappings,
    iconSize: 30,
    iconClasses: 'ml-2'
  };

  const toggleMenuDataCurrency: IToggleMenuProps = {
    icon: '/icons/currency.svg',
    // main: currencyData.rates,
    main: dummyCurrencyData,
    text: 'USD to',
    mappings: currencyMappings,
    iconSize: 30,
    iconClasses: 'ml-2'
  };

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
    // main: cryptoPrices,
    main: dummyCryptoPrices,
    text: 'Crypto (USD)',
    mappings: cryptoMappings,
    iconSize: 30,
    iconClasses: 'ml-2'
  };

  const toggleMenuDataStock: IToggleMenuProps = {
    icon: '/icons/stock.svg',
    // main: stockPrices,
    main: dummyStockPrices,
    text: 'Stock (USD)',
    mappings: stockMappings,
    iconSize: 30,
    iconClasses: 'ml-2'
  };

  const widgetBarData: {
    weatherData: IToggleMenuProps;
    cryptoData: IToggleMenuProps;
    stockData: IToggleMenuProps;
    currencyData: IToggleMenuProps;
    metalData: IToggleMenuProps;
  } = {
    weatherData: toggleMenuDataWeather,
    cryptoData: toggleMenuDataCrypto,
    stockData: toggleMenuDataStock,
    currencyData: toggleMenuDataCurrency,
    metalData: toggleMenuDataMetal
  };

  return (
    <html lang="en" className={poppins.className}>
    <body>
    <main className="flex min-h-screen flex-col items-center p-12 pb-0 main justify-between">
      <DefaultNavbar {...widgetBarData} />
      {children}
      <DefaultFooter />
    </main>
    </body>
    </html>
  )
};
