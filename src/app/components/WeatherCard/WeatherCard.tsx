import {IWeatherCardProps} from "@/app/interfaces/IWeatherCard";
import Image from "next/image";
import {useRef} from "react";
import fieldMappings from './WeatherCard.json'
import {useDimensions} from "@/app/hooks/useDimensions";
import {motion, useCycle} from "framer-motion";
import {MenuToggle} from "./MenuToggle";
import {Navigation} from "./Navigation";
import styles from './WeatherCard.module.scss';
import {IWeatherProps} from "@/app/interfaces/IWeather";

export const WeatherCard = ({weather, main, city}: IWeatherCardProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const {height} = useDimensions(containerRef);
  const navContents: IWeatherProps[] = fieldMappings.map(item => {
    const {field_key, name, unit} = item;
    return {
      field_key,
      name,
      unit,
      value: main[field_key as keyof Main]
    }
  });
  return (
    <>
      <div className={'flex flex-row'}>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className={styles.weatherCardNav}
        >
          <motion.div className={styles.weatherCardBg}/>
          <Navigation content={navContents}/>
          <MenuToggle toggle={() => toggleOpen()} image={
            <Image src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="Weather Icon" width={100}
                   height={100}/>
          } city={city}/>
        </motion.nav>
      </div>
    </>
  )
};
