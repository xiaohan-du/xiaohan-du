import {ReactNode} from "react";
import styles from './PushSwitch.module.scss';
import {IPushSwitchProps} from "@/app/interfaces/IPushSwitch";

export const PushSwitch = ({bgImage, bgVerticalPosition, bgSize}: IPushSwitchProps): ReactNode => {
  const pushSwitchStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: `${bgSize} auto`,
    backgroundPosition: `center ${bgVerticalPosition}`
  };

  return (
    <div className={styles.pushSwitchContainer}>
      <input type="checkbox" className={styles.pushSwitch} style={pushSwitchStyle}/>
    </div>
  )
};
