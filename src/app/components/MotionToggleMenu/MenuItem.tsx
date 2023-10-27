import * as React from "react";
import { motion } from "framer-motion";
import styles from '../WeatherCard/WeatherCard.module.scss';
import {IMenuItemProps} from "@/app/interfaces/IMenuItem";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
export const MenuItem = ({ i , content}: IMenuItemProps) => {
  const style = { border: `0.125rem solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={styles.weatherCardLi}
    >
      <div className={styles.weatherCardPlaceholderText} style={style}>
        <div>{content.name}:&nbsp;</div>
        <div>{content.value}</div>
        <div>{content.unit}</div>
      </div>
    </motion.li>
  );
};
