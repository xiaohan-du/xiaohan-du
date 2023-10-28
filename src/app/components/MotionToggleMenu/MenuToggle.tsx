import * as React from "react";
import {Button} from "flowbite-react";
import styles from '../WeatherCard/WeatherCard.module.scss';
import {IToggleProps} from "@/app/interfaces/IToggle";

export const MenuToggle = ({ toggle, image, text }: IToggleProps) => (
  <Button
    onMouseEnter={toggle}
    onMouseLeave={toggle}
    className={`${styles.weatherCardBtn} focus:ring-0 p-0`}
    color='light'
  >
    {text}
    {image}
  </Button>
);
