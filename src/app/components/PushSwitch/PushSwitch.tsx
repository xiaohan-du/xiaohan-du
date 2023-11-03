'use client'
import {ReactNode} from "react";
import styles from './PushSwitch.module.scss';
import {IPushSwitchProps} from "@/app/interfaces/IPushSwitch";
import {motion} from 'framer-motion';
import Image from "next/image";
import {IAnimationVariantsProps} from "@/app/interfaces/IAnimationVariants";

export const PushSwitch = ({bgImage, bgVerticalPosition, bgSize}: IPushSwitchProps): ReactNode => {

  // increase x = move right
  // increase y = move down
  const getAnimationVariants = ({hiddenX, hiddenY, visibleX, visibleY, duration, delay}: IAnimationVariantsProps) => {
    return ({
      hidden: {x: hiddenX, y: hiddenY},
      visible: {x: visibleX, y: visibleY, transition: {duration: duration, delay: delay}},
    })
  };

  const pushSwitchStyle: PushSwitch = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: `${bgSize} auto`,
    backgroundPosition: `center ${bgVerticalPosition}`
  };
  return (
    <div className={`${styles.pushSwitchContainer} -mt-192`}>
      <div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={getAnimationVariants({
            hiddenX: 210,
            hiddenY: 550,
            visibleX: 0,
            visibleY: 360,
            duration: 1.5,
            delay: 0
          })}
        >
          <Image src="/icons/nextjs.svg" className="shadow-xl rounded-full" title="NextJS" alt="NextJS Logo" width={120} height={120}/>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={getAnimationVariants({
            hiddenX: 200,
            hiddenY: 320,
            visibleX: 400,
            visibleY: 300,
            duration: 1.5,
            delay: 0
          })}
        >
          <Image src="/icons/react.svg" className="shadow-xl rounded-full" title="React" alt="React Logo" width={100} height={100}/>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={getAnimationVariants({
            hiddenX: 200,
            hiddenY: 320,
            visibleX: -80,
            visibleY: 280,
            duration: 1.5,
            delay: 0
          })}
        >
          <Image src="/icons/java.svg" title="Java" alt="Java Logo" width={80} height={80}/>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={getAnimationVariants({
            hiddenX: 200,
            hiddenY: 120,
            visibleX: 250,
            visibleY: 0,
            duration: 1.5,
            delay: 1
          })}
        >
          <Image src="/icons/sql.png" title="SQL" alt="SQL Logo" width={80} height={80}/>
        </motion.div>
        <input type="checkbox" className={`${styles.pushSwitch} z-10`} style={pushSwitchStyle}/>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={getAnimationVariants({
            hiddenX: 200,
            hiddenY: -300,
            visibleX: -40,
            visibleY: -140,
            duration: 1.5,
            delay: 1
          })}
        >
          <Image src="/icons/tailwind.png" title="Tailwind CSS" alt="Tailwind Logo" width={100} height={100}/>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={getAnimationVariants({
            hiddenX: 190,
            hiddenY: -400,
            visibleX: 330,
            visibleY: -150,
            duration: 1.5,
            delay: 0
          })}
        >
          <Image src="/icons/springboot.svg" className="shadow-xl rounded-full" title="Springboot" alt="Springboot Logo" width={100}
                 height={100}/>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={getAnimationVariants({
            hiddenX: 200,
            hiddenY: -480,
            visibleX: 140,
            visibleY: -200,
            duration: 1.5,
            delay: 1
          })}
        >
          <Image src="/icons/devops.png" className="shadow-xl rounded-full" title="DevOps" alt="Devops Logo" width={70} height={70}/>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={getAnimationVariants({
            hiddenX: 220,
            hiddenY: -550,
            visibleX: 470,
            visibleY: -450,
            duration: 1.5,
            delay: 1
          })}
        >
          <Image src="/icons/testing.png" title="React-testing-library" alt="React-testing-library Logo" width={70} height={70}/>
        </motion.div>
      </div>
    </div>
  )
};
