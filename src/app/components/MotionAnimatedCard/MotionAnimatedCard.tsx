'use client'
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import styles from './MotionAnimatedCard.module.scss';

const cards = [1, 2, 3, 4];
export const LayoutCards = () => {
  const [selectedId, setSelectedId] = useState(null);
  const handleCardClick = (card: any) => {
    setSelectedId(selectedId === card ? null : card);
  };
  const openCardStyles: string = `
    w-full
    rounded-2xl
    cursor-pointer
    absolute
    top-0
    right-0
    bottom-0
    left-0
    m-auto
    z-10
    flex
    justify-center
    flex-wrap
    flex-col
  `;
  const cardStyles: string = `
    bg-white
    rounded-2xl
    w-full
    h-full
    cursor-pointer
  `;
  return (
    <div className={`${styles.motionAnimatedCard} 
    w-full 
    h-full 
    my-8 
    bg-slate-100 
    rounded-2xl 
    gap-6
    p-12
    grid
    grid-cols-3
    grid-rows-2`}>
      {cards.map((card, i) => (
        <motion.div
          className={selectedId === card ? openCardStyles : `${styles.card} ${cardStyles}`}
          key={i}
          layout
          onClick={() => handleCardClick(card)}
        >
          {selectedId === card && (
            <div className={`
              bg-white
              h-1/2
              w-1/2
              max-w-3xl
              mx-auto
              my-0
              z-10
              rounded-2xl
              shadow-2xl
            `}>
              Test
            </div>
          )}
        </motion.div>
      ))}
      <motion.div
        className={`
          absolute 
          h-full 
          w-full 
          left-0 
          top-0 
          bg-black 
          opacity-0 
          pointer-events-none
        `}
        animate={{opacity: selectedId ? .3 : 0}}
      />
    </div>
  )
};
