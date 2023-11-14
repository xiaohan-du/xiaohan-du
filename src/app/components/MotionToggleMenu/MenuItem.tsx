import * as React from "react";
import {motion} from "framer-motion";
import {IMenuItemProps} from "@/app/interfaces/IMenuItem";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100}
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000}
    }
  }
};

const colors = ["#92FE9D", "#83FB33", "#5CEA75", "#36D9B7", "#00C9FF"];
export const MenuItem = ({i, content}: IMenuItemProps) => {
  const style = {border: `0.125rem solid ${colors[i]}`};
  return (
    <motion.li
      variants={variants}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.95}}
      className={'mb-5 z-20 relative cursor-default bg-white rounded-xl'}
    >
      <div className={'w-full h-full flex p-4 rounded-xl'} style={style}>
        <div>{content.name}:&nbsp;</div>
        <div>{content.value}</div>
        <div>{content.unit}</div>
      </div>
    </motion.li>
  );
};
