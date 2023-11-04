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
    alt,
    width
  }: IMotionAnimatedIconProps): ReactNode => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {x: hiddenX, y: hiddenY},
        visible: {x: visibleX, y: visibleY, transition: {duration: duration, delay: delay}},
      }}
    >
      <Image src={imageSrc} className={classNames} title={title} alt={alt} width={width}
             height={width}/>
    </motion.div>
  )
};
