'use client'
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
const cards = [1, 2, 3, 4];
import styles from './MotionAnimatedCard.module.scss';
export const LayoutCards = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [canDrag, setCanDrag] = useState(false);
  const containerRefs = useRef(new Array());
  const handlePanEnd = (e: any, info: any, card: any) => {
    if (selectedId) {
      if (Math.abs(info.offset.x) < 5) {
        const styles: any = getComputedStyle(containerRefs.current[card]);
        const timeout = styles.transform.split(',')[4] * -.6;
        setCanDrag(false);
        setTimeout(() => {
          setSelectedId(null);
        }, timeout);
      }
    } else {
      setCanDrag(true);
      setSelectedId(card);
    }
  }
  return (
    <div className={styles.layoutCards}>
      {cards.map((card, i) => (
        <motion.div
          className={selectedId === card ? styles.openedCard : styles.card }
          key={i}
          layout
          drag={selectedId === card ? 'x' : false}
          dragConstraints={{ left: canDrag ? -850 : 0, right: 0 }}
          dragElastic={.2}
          onPanEnd={(e, info) => handlePanEnd(e, info, card)}
          ref={el => containerRefs.current[card] = el}
        >
          {selectedId === card && (
            <>
              <div />
              <div />
              <div />
            </>
          )}
        </motion.div>
      ))}
      <motion.div
        className={styles.dimLayer}
        animate={{ opacity: selectedId ? .3 : 0 }}
      />
    </div>
  )
};
