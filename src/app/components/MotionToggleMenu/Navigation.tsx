import * as React from "react";
import {motion} from "framer-motion";
import {MenuItem} from "./MenuItem";
import {INavigationProps} from "@/app/interfaces/INavigation";

const variants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 0.2}
  },
  closed: {
    transition: {staggerChildren: 0.05, staggerDirection: -1}
  }
};

export const Navigation = ({content, isOpen}: INavigationProps) => (
  <motion.ul variants={variants}
             className={`absolute top-20 min-w-[9.5rem] ${isOpen ? 'block' : 'hidden'}`}>
    {content.map((content, index) => (
      <MenuItem i={index} key={index} content={content}/>
    ))}
  </motion.ul>
);
