'use client'
import {ReactNode} from "react";
import styles from './PushSwitch.module.scss';
import {IPushSwitchProps} from "@/app/interfaces/IPushSwitch";
import {motion} from 'framer-motion';
import Image from "next/image";

export const PushSwitch = ({bgImage, bgVerticalPosition, bgSize}: IPushSwitchProps): ReactNode => {

  // increase x = move right
  // increase y = move down
  const nextDivVariants = {
    hidden: {x: 210, y: 550},
    visible: {x: 0, y: 360, transition: {duration: 1.5}},
  };

  const tailwindDivVariants = {
    hidden: {x: 200, y: -300},
    visible: {x: -40, y: -140, transition: {duration: 1.5, delay: 1}},
  };

  const springDivVariants = {
    hidden: {x: 190, y: -400},
    visible: {x: 330, y: -150, transition: {duration: 1.5}},
  };

  const testingDivVariants = {
    hidden: {x: 220, y: -550},
    visible: {x: 460, y: -450, transition: {duration: 1.5, delay: 1}},
  };

  const reactDivVariants = {
    hidden: {x: 200, y: 320},
    visible: {x: 400, y: 300, transition: {duration: 1.5}},
  };

  const javaDivVariants = {
    hidden: {x: 200, y: 320},
    visible: {x: -80, y: 280, transition: {duration: 1.5}},
  };

  const sqlDivVariants = {
    hidden: {x: 200, y: 120},
    visible: {x: 250, y: 0, transition: {duration: 1.5, delay: 1}},
  };

  const devopsDivVariants = {
    hidden: {x: 200, y: -480},
    visible: {x: 140, y: -200, transition: {duration: 1.5, delay: 1}},
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
          variants={nextDivVariants}
        >
          <Image src="/icons/nextjs.svg" className="shadow-xl rounded-full" alt="NextJS Logo" width={120} height={120}/>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reactDivVariants}
        >
          <Image src="/icons/react.svg" className="shadow-xl rounded-full" alt="React Logo" width={100} height={100}/>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={javaDivVariants}
        >
          <Image src="/icons/java.svg" alt="Java Logo" width={80} height={80}/>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sqlDivVariants}
        >
          <Image src="/icons/sql.png" alt="SQL Logo" width={80} height={80}/>
        </motion.div>
        <input type="checkbox" className={`${styles.pushSwitch} z-10`} style={pushSwitchStyle}/>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={tailwindDivVariants}
        >
          <Image src="/icons/tailwind.png" alt="Tailwind Logo" width={100} height={100}/>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={springDivVariants}
        >
          <Image src="/icons/springboot.svg" className="shadow-xl rounded-full" alt="Springboot Logo" width={100} height={100}/>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={devopsDivVariants}
        >
          <Image src="/icons/devops.png" className="shadow-xl rounded-full" alt="Devops Logo" width={70} height={70}/>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={testingDivVariants}
        >
          <Image src="/icons/testing.png" alt="React-testing-library Logo" width={70} height={70}/>
        </motion.div>
      </div>
    </div>
  )
};
