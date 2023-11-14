import {ReactNode} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import {IMotionAnimatedIconProps} from "@/app/interfaces/IMotionAnimatedIcon";

export const MotionAnimatedIcon = (
  {
    visibleX,
    visibleY,
    duration,
    delay,
    imageSrc,
    classNames,
    title,
    alt
  }: IMotionAnimatedIconProps): ReactNode => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {x: 0, y: 0},
        visible: {x: visibleX, y: visibleY, transition: {duration: duration, delay: delay}},
      }}
      className={'m-auto col-start-1 row-start-1 w-1/6'}
    >
      <Image src={imageSrc} className={`${classNames} max-w-none w-full relative`} title={title} alt={alt} width={200}
             height={200}/>
    </motion.div>
  )
};
