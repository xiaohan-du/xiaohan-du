'use client'
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import styles from './MotionAnimatedCard.module.scss';
import Image from "next/image";
import {IMotionAnimatedCard} from "@/app/interfaces/IMotionAnimatedCard";

const cardsData = [
  {
    "title": "Frontend",
    "contents": {
      "iconWidth": 100,
      "title": "As a highly skilled and creative front-end developer, I am passionate about crafting exceptional user experiences on the web.",
      "text": [
        "My day to day work could be ⬇️",
        "Building reusable components, connect to backend services",
        "Writing unit tests",
        "Deploying code to QA environments and assist testers",
        "Or it could be ⬇️",
        "Creating visually stunning and animated interfaces from scratch",
        "Mentoring junior developers",
        "Learning and applying new technologies in real-world projects"
      ]
    },
    "icon": {
      "imageSrc": "/icons/code.svg",
      "alt": "Frontend",
      "width": 45
    }
  },
  {
    "title": "Backend",
    "contents": {
      "iconWidth": 100,
      "title": "Java, Spring Boot MVC, and SQL expertise for efficient backend development",
      "text": [
        "Proficient in Java programming",
        "Experienced in implementing comprehensive unit tests",
        "Establish a Spring Boot MVC framework to develop RESTful APIs",
        "Familiarity with Spring Boot's auto-configuration",
        "Familiarity with SQL for effective database querying and manipulation"
      ]
    },
    "icon": {
      "imageSrc": "/icons/terminal.svg",
      "alt": "Backend",
      "width": 30
    }
  },
  {
    "title": "Agile",
    "contents": {
      "iconWidth": 100,
      "title": "In my professional journey, I have embraced and thrived in Agile methodologies. ",
      "text": [
        "Regular Agile meetings",
        "N-week sprints",
        "Sprint Planning",
        "Daily Stand-Up",
        "Sprint Retrospective",
        "Backlog Refinement",
        "Ad-Hoc Collaboration",
        "Cross-Functional Problem Solving"
      ]
    },
    "icon": {
      "imageSrc": "/icons/loop.svg",
      "alt": "Agile",
      "width": 30
    }
  },
  {
    "title": "Full Stack",
    "contents": {
      "iconWidth": 100,
      "title": "Full Stack Development for seamless end-to-end application development",
      "text": [
        "High level understanding of software architecture principles",
        "Independently developing full stack applications transforming raw data to eye-pleasing UI",
        "Proven ability to analyze and solve complex problems in the development process"
      ]
    },
    "icon": {
      "imageSrc": "/icons/stack.svg",
      "alt": "Full Stack",
      "width": 45
    }
  }
];

export const MotionAnimatedCard = () => {
  const [selectedId, setSelectedId] = useState(null);
  const handleCardClick = (card: any): void => {
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
      {cardsData.map((value: IMotionAnimatedCard, index: number) => (
        <motion.div
          className={selectedId === value.title ? openCardStyles : `${styles.card} ${cardStyles}`}
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
