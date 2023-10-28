import Image from "next/image";
import {useRef} from "react";
import {useDimensions} from "@/app/hooks/useDimensions";
import {motion, useCycle} from "framer-motion";
import {MenuToggle} from "@/app/components/MotionToggleMenu/MenuToggle";
import {Navigation} from "@/app/components/MotionToggleMenu/Navigation";
import styles from './CryptoCard.module.scss';
import fieldMappings from './CryptoCard.json';
import {IToggleItemProps} from "@/app/interfaces/IToggleItem";
import {ICryptoCard} from "@/app/interfaces/ICryptoCard";

export const CryptoCard = ({gbpPrices}: ICryptoCard) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const {height} = useDimensions(containerRef);
  const navContents: IToggleItemProps[] = fieldMappings.map(item => {
    const {field_key, name, unit} = item;
    return {
      field_key,
      name,
      unit,
      value: gbpPrices[field_key as keyof GbpPrices]
    }
  });
  return (
    <>
      <div className={'flex flex-row'}>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className={styles.cryptoCardNav}
        >
          <motion.div className={styles.cryptoCardBg}/>
          <Navigation content={navContents}/>
          <MenuToggle toggle={() => toggleOpen()} image={
            <Image src={'/icons/crypto.svg'} alt="Crypto Icon" width={40}
                   height={40} className={'ml-2'}/>
          } text={'Crypto'}/>
        </motion.nav>
      </div>
    </>
  )
};
