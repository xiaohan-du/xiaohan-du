'use client'
import {ReactNode} from "react";
import styles from './PushSwitch.module.scss';
import {IPushSwitchProps} from "@/app/interfaces/IPushSwitch";
import {MotionAnimatedIcon} from "@/app/components/MotionAnimatedIcon/MotionAnimatedIcon";
import {IMotionAnimatedIconProps} from "@/app/interfaces/IMotionAnimatedIcon";
export const PushSwitch = ({bgImage, bgVerticalPosition, bgSize, animatedIconData}: IPushSwitchProps): ReactNode => {
  const pushSwitchStyle: PushSwitch = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: `${bgSize} auto`,
    backgroundPosition: `center ${bgVerticalPosition}`
  };
  // increase x = move right
  // increase y = move down
  return (
    <div className={`${styles.pushSwitchContainer}`}>
      <div>
        <input type="checkbox" className={`${styles.pushSwitch} z-10`} style={pushSwitchStyle} disabled />
        {animatedIconData.map((item: IMotionAnimatedIconProps, index: number): ReactNode => {
          return (
            <MotionAnimatedIcon
              key={index}
              hiddenX={item.hiddenX}
              hiddenY={item.hiddenY}
              visibleX={item.visibleX}
              visibleY={item.visibleY}
              duration={item.duration}
              delay={item.delay}
              imageSrc={item.imageSrc}
              classNames={item.classNames}
              title={item.title}
              alt={item.alt}
              width={item.width}
            />
          )
        })}
      </div>
    </div>
  )
};
