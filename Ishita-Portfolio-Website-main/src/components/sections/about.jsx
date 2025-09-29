import { Mail, MapPin } from 'lucide-react';
import DecryptedText from '../common/decryptedText';
import BlurText from '../common/blurText';
import myPhoto1 from '../../assets/pic/1.jpeg';
import myPhoto2 from '../../assets/pic/2.jpeg';
import myPhoto3 from '../../assets/pic/3.jpeg';
import myPhoto4 from '../../assets/pic/4.jpeg';
import myPhoto5 from '../../assets/pic/5.jpeg';
import myPhoto6 from '../../assets/pic/6.jpeg';
import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../common/draggable-card";

export function DraggableCard() {
  const items = [
    {
      title: "Cherished Moments",
      image: myPhoto6,
      className: "absolute top-45 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Proud Moment",
      image: myPhoto5,
      className: "absolute top-75 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Teamwork in Action",
      image: myPhoto4,
      className: "absolute top-40 left-[40%] rotate-[8deg]",
    },
    {
      title: "SIH finalists",
      image: myPhoto3,
      className: "absolute top-55 right-[35%] rotate-[2deg]",
    },
    {
      title: "Achievement Unlocked! 🎉",
      image: myPhoto2,
      className: "absolute top-59 left-[40%] rotate-[-7deg]",
    },
    {
      title: "Me ( • ̀ω•́ )✧",
      image: myPhoto1,
      className: "absolute top-43 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-500">
        This is me in real life. Nice to meet ur all!
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            About Me
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          {/* Left side - Image/Cards */}
          <div className="w-full lg:w-1/2 relative transform transition-transform duration-700 hover:scale-105 order-1 lg:order-1">
            <DraggableCard />
            
            <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-purple-200 dark:bg-purple-900 opacity-30 blur-md animate-pulse hidden sm:block"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-200 dark:bg-blue-900 opacity-30 blur-md animate-pulse hidden sm:block"></div>
          </div>
          
          {/* Right side - Text content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2 px-2 sm:px-0">
            <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transform transition-all duration-500 hover:text-purple-600 text-center lg:text-left">
              <BlurText
                text="Hello, I'm Ishita Dey!"
                delay={50}
                animateBy="words"
                direction="top"
              />
            </h3>
            
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-md xl:text-base text-gray-600 dark:text-gray-300 text-center lg:text-left">
              <p>
                <BlurText
                  text="I'm an aspiring web developer and designer, currently pursuing a diploma and preparing to transition to a degree program after my internship. My journey in web development began during my studies, and I've been passionate about creating engaging digital experiences ever since."
                  delay={50}
                  animateBy="words"
                  direction="top"
                  initialDelay={800}
                />
              </p>
              
              <p>
                <BlurText
                  text="I'm dedicated to learning and growing, constantly improving my skills to combine clean, efficient code with thoughtful user experience design. I specialize in React and modern JavaScript frameworks, focusing on building intuitive, functional, and visually appealing interfaces."
                  delay={50}
                  animateBy="words"
                  direction="top"
                  initialDelay={1600}
                />
              </p>

              <p>
                <BlurText
                  text="Beyond web development, I love exploring new technologies, from the latest hardware components to cutting-edge AI models. This curiosity drives me to stay updated and continuously expand my knowledge in the ever-evolving tech world. My journey is just getting started, and I'm excited to keep learning and creating!"
                  delay={50}
                  animateBy="words"
                  direction="top"
                  initialDelay={2400}
                />
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-full transform transition-transform hover:scale-105 hover:bg-purple-100 dark:hover:bg-purple-900 text-xs sm:text-sm lg:text-xs xl:text-sm">
                <Mail size={14} className="sm:w-4 sm:h-4 text-purple-600 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 truncate">ishitadey955@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-full transform transition-transform hover:scale-105 hover:bg-purple-100 dark:hover:bg-purple-900 text-xs sm:text-sm lg:text-xs xl:text-sm">
                <MapPin size={14} className="sm:w-4 sm:h-4 text-purple-600 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200">India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;