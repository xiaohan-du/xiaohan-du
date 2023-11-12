'use client'
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import styles from './MotionAnimatedCard.module.scss';
import Image from "next/image";
import {IMotionAnimatedCard} from "@/app/interfaces/IMotionAnimatedCard";
import Link from "next/link";

export const MotionAnimatedCard = (animatedCardsData: IMotionAnimatedCard): React.ReactNode => {
  const [selectedId, setSelectedId] = useState<string>('');
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const handleCardClick = (card: string): void => {
    setSelectedId(selectedId === card ? '' : card);
  };
  const openCardStyles: string = `
    w-full
    rounded-2xl
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
    p-4
    flex
    items-center
    justify-center
    font-mono
  `;
  return (
    <div className={`${styles.motionAnimatedCard} 
    w-full 
    h-full 
    my-8 
    rounded-2xl 
    gap-1
    p-1
    grid
    grid-cols-3
    grid-rows-2`}>
      {animatedCardsData.content.map((value: CardData, index: number) => (
        <motion.div
          className={selectedId === value.title ? openCardStyles : `${value.classNames} ${cardStyles}`}
          key={index}
          layout
          onClick={() => handleCardClick(value.title)}
        >
          {selectedId !== value.title && (
            <div className={'flex flex-row'}>
              <Image
                src={value.icon.imageSrc}
                alt={value.icon.alt}
                width={value.icon.width}
                height={value.icon.width}
                className={'mr-1'}
              />
              {value.title}
            </div>
          )}
          {selectedId === value.title && (
            <div className={`
              bg-white
              w-1/3
              max-w-lg
              mx-auto
              my-0
              z-10
              rounded-2xl
              shadow-2xl
              p-12
              flex
              flex-col
              items-center
              justify-start
            `}>
              <Image
                src={value.icon.imageSrc}
                alt={value.icon.alt}
                width={value.contents.iconWidth}
                height={value.contents.iconWidth}
              />
              <div className={'text-5xl mt-8 font-black'}>
                {(value.title as string).toUpperCase()}
              </div>
              <div>
                <div className={'mt-8 text-2xl'}>
                  {value.contents.title}
                </div>
                <div className={'mt-4'}>
                  <ul>
                    {
                      value.contents.text.map((item: string, index: number) => {
                        return (
                          <li key={index} className={'mt-3'}>{item}</li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
              {
                value.isShowLinks &&
                  <div className={'flex flex-row'} key={index}>{
                    value.btn?.map((item: ButtonData, index: number) => {
                      return (
                        <motion.button
                          className={`
                      h-12 
                      border-2
                      border-solid 
                      border-slate-200 
                      mt-8
                      mx-2
                      flex
                      flex-row
                      items-center
                      p-2 
                      shadow-lg
                      `}
                          key={index}
                          whileHover={{scale: 1.2}}
                          onHoverStart={() => setHoveredButton(index)}
                          onHoverEnd={() => setHoveredButton(null)}
                          whileTap={{scale: 0.9}}>
                          <div className={'border-r-2'}>
                            <motion.div animate={{
                              rotate: hoveredButton === index ? 360 : 0
                            }}>
                              <Image src={item.icon.imageSrc} className={'mr-2 pr-1'} alt={item.icon.alt}
                                     width={item.icon.width} height={item.icon.width}/>
                            </motion.div>
                          </div>
                          <Link href={item.icon.alt === 'Call' ? `tel:${process.env.PHONE_NUMBER}` : item.url}
                                className={'font-bold text-center w-full'}>{item.text}</Link>
                        </motion.button>
                      )
                    })
                  }
                  </div>
              }
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
