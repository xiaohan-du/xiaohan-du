import Image from "next/image";
import {useRef} from "react";
import {useDimensions} from "@/app/hooks/useDimensions";
import {motion, useCycle} from "framer-motion";
import {MenuToggle} from "@/app/components/MotionToggleMenu/MenuToggle";
import {Navigation} from "@/app/components/MotionToggleMenu/Navigation";
import styles from './CryptoCard.module.scss';

const fieldMappings = [
  {
    "field_key": "temp",
    "name": "Temperature",
    "unit": "°C"
  },
  {
    "field_key": "feels_like",
    "name": "Feels like",
    "unit": "°C"
  },
  {
    "field_key": "temp_min",
    "name": "Min",
    "unit": "°C"
  },
  {
    "field_key": "temp_max",
    "name": "Max",
    "unit": "°C"
  },
  {
    "field_key": "pressure",
    "name": "Pressure",
    "unit": "hPa"
  }
]

export const CryptoCard = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const {height} = useDimensions(containerRef);
  const navContents = fieldMappings.map(item => {
    const {field_key, name, unit} = item;
    return {
      field_key,
      name,
      unit,
      value: 20
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
          className={styles.cryptoCardNav}
        >
          <motion.div className={styles.cryptoCardBg}/>
          <Navigation content={navContents}/>
          <MenuToggle toggle={() => toggleOpen()} image={
            <Image src={'https://openweathermap.org/img/wn/10d@2x.png'} alt="Crypto Icon" width={50}
                   height={50}/>
          } city={'Cardiff'}/>
        </motion.nav>
      </div>
    </>
  )
};
