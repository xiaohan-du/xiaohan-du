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
    h-full
    rounded-2xl
    fixed
    top-0
    right-0
    bottom-0
    left-0
    m-auto
    z-40
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
    my-8 
    rounded-2xl 
    gap-1
    p-1
    grid
    grid-cols-3
    grid-rows-2
    aspect-video
    md:mt-8
    `}>
      {animatedCardsData.content.map((value: CardData, index: number) => (
        <motion.div
          className={selectedId === value.title ? openCardStyles : `text-xl ${value.classNames} ${cardStyles}`}
          style={{gridColumn: value.styleNames}}
          key={index}
          layout
          onClick={() => handleCardClick(value.title)}
        >
          {selectedId !== value.title && (
            <div className={'flex flex-col xl:flex-row items-center'}>
              <Image
                src={value.icon.imageSrc}
                alt={value.icon.alt}
                width={value.icon.width}
                height={value.icon.width}
                className={'mr-1'}
              />
              <span className={'m-auto sm:text-2xl md:text-2xl lg:text-3xl'}>{value.title}</span>
            </div>
          )}
          {selectedId === value.title && (
            <div className={`
              bg-white
              w-2/3
              max-h-3/4
              max-w-lg
              mx-auto
              my-4
              z-50
              rounded-2xl
              shadow-2xl
              p-8
              md:p-16
              flex
              flex-col
              items-center
              justify-start
              overflow-auto
            `}>
              <Image
                src={value.icon.imageSrc}
                alt={value.icon.alt}
                width={value.contents.iconWidth}
                height={value.contents.iconWidth}
                className={'w-16 md:w-24'}
              />
              <div className={'text-2xl md:text-4xl mt-4 font-black'}>
                {(value.title as string).toUpperCase()}
              </div>
              <div>
                <div className={'mt-4 text-base md:text-2xl'}>
                  {value.contents.title}
                </div>
                <div className={'mt-4'}>
                  <ul>
                    {
                      value.contents.text.map((item: string, index: number) => {
                        return (
                          <li key={index} className={'mt-1 text-sm md:text-lg'}>{item}</li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
              {
                value.isShowLinks &&
                  <div className={'flex flex-col md:flex-row'} key={index}>{
                    value.btn?.map((item: ButtonData, index: number) => {
                      return (
                        <motion.button
                          className={`
                            border-2
                            border-solid 
                            border-slate-200 
                            mt-8
                            mx-2
                            flex
                            items-center
                            p-2 
                            shadow-lg
                            flex
                            flex-col
                            md:flex-row
                            justify-center
                          `}
                          key={index}
                          whileHover={{scale: 1.2}}
                          onHoverStart={() => setHoveredButton(index)}
                          onHoverEnd={() => setHoveredButton(null)}
                          whileTap={{scale: 0.9}}>
                          <div className={'md:border-r-2 md:pr-1'}>
                            <motion.div animate={{
                              rotate: hoveredButton === index ? 360 : 0
                            }}>
                              <Image src={item.icon.imageSrc} className={'lg:mr-1 lg:pr-1 mb-2 md:mb-0'} alt={item.icon.alt}
                                     width={item.icon.width} height={item.icon.width}/>
                            </motion.div>
                          </div>
                          <Link href={item.icon.alt === 'Call' ? `tel:${process.env.PHONE_NUMBER}` : item.url}
                                className={'font-bold text-center w-full md:pl-1'}>{item.text}</Link>
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
          fixed 
          h-full 
          w-full 
          left-0 
          top-0 
          bg-black 
          opacity-0 
          pointer-events-none
          z-20
        `}
        animate={{opacity: selectedId ? .3 : 0}}
      />
    </div>
  )
};
