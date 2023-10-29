import Image from "next/image";
import {useRef} from "react";
import {useDimensions} from "@/app/hooks/useDimensions";
import {motion, useCycle} from "framer-motion";
import {MenuToggle} from "../MotionToggleMenu/MenuToggle";
import {Navigation} from "../MotionToggleMenu/Navigation";
import styles from './WeatherCard.module.scss';
import {IToggleItemProps} from "@/app/interfaces/IToggleItem";
import {IToggleMenuProps} from "@/app/interfaces/IToggleMenu";

export const WeatherCard = ({icon, main, text, mappings, iconSize, iconClasses}: IToggleMenuProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const {height} = useDimensions(containerRef);
  const navContents: IToggleItemProps[] = mappings.map(item => {
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
            <Image src={icon} alt="Weather Icon" width={iconSize} height={iconSize} className={iconClasses}/>
          } text={text}/>
        </motion.nav>
      </div>
    </>
  )
};
