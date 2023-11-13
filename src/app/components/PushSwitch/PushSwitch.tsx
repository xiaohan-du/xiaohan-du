'use client'
import {ReactNode} from "react";
import styles from './PushSwitch.module.scss';
import {IPushSwitchProps} from "@/app/interfaces/IPushSwitch";
import {MotionAnimatedIcon} from "@/app/components/MotionAnimatedIcon/MotionAnimatedIcon";
import {IMotionAnimatedIconProps} from "@/app/interfaces/IMotionAnimatedIcon";

export const PushSwitch = ({
                             bgImage,
                             bgHorizontalPosition,
                             bgVerticalPosition,
                             bgSize,
                             animatedIconData
                           }: IPushSwitchProps): ReactNode => {
  const pushSwitchStyle: PushSwitch = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: `${bgSize} auto`,
    backgroundPosition: `${bgHorizontalPosition} ${bgVerticalPosition}`
  };
  // increase x = move right
  // increase y = move down
  return (
    <div className={`
    aspect-square
    flex
    justify-end
    ${styles.pushSwitchContainer}
    `}>
      <div>
        <input type="checkbox" className={`
          relative 
          h-auto 
          w-full 
          min-w-[30rem] 
          min-h-[30rem] 
          z-10
          rounded-full
          border-[1.25rem]
          border-solid
          border-white
          cursor-default
          bg-cover
          bg-no-repeat
          aspect-square
          transition-shadow
          hover: duration-1000
          ${styles.pushSwitch}
        `} style={pushSwitchStyle} disabled/>
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
