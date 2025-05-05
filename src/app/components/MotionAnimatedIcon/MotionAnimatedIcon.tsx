import {ReactNode} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import {IMotionAnimatedIconProps} from "@/app/interfaces/IMotionAnimatedIcon";

export const MotionAnimatedIcon = (
  {
    hiddenX,
    hiddenY,
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
    // hiddenX is the x coord when icon is hidden initially
    // hiddenY is the y coord when icon is hidden initially
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {x: hiddenX, y: hiddenY},
        visible: {x: visibleX, y: visibleY, transition: {duration: duration, delay: delay}},
      }}
      className={'m-auto w-1/6'}
    >
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        <Image src={imageSrc} className={`${classNames} max-w-none w-full relative`} title={title} alt={alt} width={200}
               height={200}/>
      </motion.div>
    </motion.div>
  )
};
