'use client'
import {ReactNode} from "react";
import styles from './PushSwitch.module.scss';
import {IPushSwitchProps} from "@/app/interfaces/IPushSwitch";
import {MotionAnimatedIcon} from "@/app/components/MotionAnimatedIcon/MotionAnimatedIcon";
import {IMotionAnimatedIconProps} from "@/app/interfaces/IMotionAnimatedIcon";

export const PushSwitch = ({
                             bgImage,
                             animatedIconData
                           }: IPushSwitchProps): ReactNode => {
  const pushSwitchStyle: PushSwitch = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: `100% auto`,
  };
  // increase x = move right
  // increase y = move down
  return (
    <div className={`
    aspect-square
    w-full
    h-full
    grid
    ${styles.pushSwitchContainer}
    `}>
      <input type="checkbox" className={`
          relative 
          h-auto 
          w-4/5 
          z-10
          rounded-full
          border-[1rem]
          border-solid
          border-white
          cursor-default
          bg-cover
          bg-no-repeat
          aspect-square
          transition-shadow
          hover: duration-1000
          m-auto 
          col-start-1 
          row-start-1
          ${styles.pushSwitch}
        `} style={pushSwitchStyle} disabled></input>
      {animatedIconData.map((item: IMotionAnimatedIconProps, index: number): ReactNode => {
        return (
          <MotionAnimatedIcon
            key={index}
            visibleX={item.visibleX}
            visibleY={item.visibleY}
            duration={item.duration}
            delay={item.delay}
            imageSrc={item.imageSrc}
            classNames={item.classNames}
            title={item.title}
            alt={item.alt}
          />
        )
      })}
    </div>
  )
};
