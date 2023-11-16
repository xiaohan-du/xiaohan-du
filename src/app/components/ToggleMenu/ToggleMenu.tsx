import Image from "next/image";
import {useRef} from "react";
import {useDimensions} from "@/app/hooks/useDimensions";
import {motion, useCycle} from "framer-motion";
import {MenuToggle} from "../MotionToggleMenu/MenuToggle";
import {Navigation} from "../MotionToggleMenu/Navigation";
import {IToggleItemProps} from "@/app/interfaces/IToggleItem";
import {IToggleMenuProps} from "@/app/interfaces/IToggleMenu";

export const ToggleMenu = ({icon, main, text, mappings, iconSize, iconClasses, ulPosition}: IToggleMenuProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const {height} = useDimensions(containerRef);
  const navContents: IToggleItemProps[] = mappings.map(item => {
    const {field_key, name, unit} = item;
    return {
      field_key,
      name,
      unit,
      value: main[field_key as keyof Main]
    }
  });
  return (
    <>
      <div className={'flex flex-row mx-1 relative'}>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className={'relative'}
        >
          <MenuToggle toggle={() => toggleOpen()} image={
            <Image
              src={icon}
              alt="Menu Icon"
              width={iconSize}
              height={iconSize}
              className={`w-8 ${iconClasses}`}
            />
          } text={text}/>
          <Navigation content={navContents} isOpen={isOpen} ulPosition={ulPosition}/>
        </motion.nav>
      </div>
    </>
  )
};
