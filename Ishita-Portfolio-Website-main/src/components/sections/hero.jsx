import { useRef, useState, useEffect } from 'react';
import LetterGlitch from '../common/LetterGlitch';
import FloatingParticles from '../common/floatingParticles';
import Lanyard from '../common/lanyard';
import Squares from '../common/squares';
import AnimatedText from '../common/animatedText';
import { Download, Send } from 'lucide-react';

const HeroSection = ({ scrollToSection, heroBackgroundRef, modelContainerRef }) => {
  
  const handleGetInTouch = () => {
    if (scrollToSection) {
      scrollToSection('contact');
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/ISHITA_DEY_RESUME.pdf'; 
    link.download = 'ISHITA_DEY_RESUME.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 xl:px-12 overflow-visible"
    >
     {<div ref={heroBackgroundRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
          glitchColors={['#302b45', '#7a61dc', '#a761dc']}
        /> */}

        {/* <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal'
          borderColor='#fff'
          hoverFillColor='#222'
        /> */}
      
      </div>} 

      <FloatingParticles />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center">
          <div className="text-center ml-5 lg:ml-10 max-[640px]:mt-30 lg:text-left order-2 lg:order-1 px-2 sm:px-4 lg:px-0 lg:pr-8 pt-8 lg:pt-0">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 animate-fadeIn leading-tight">
              Ishita <span className="text-purple-600">Dey</span>
            </h1>
            
            <div className="flex flex-wrap justify-center max-[640px]:mb-5  lg:justify-start gap-2 sm:gap-3 md:mb-45mb-6 sm:mb-8">
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base text-gray-800 dark:text-gray-200 transform hover:scale-105 transition-transform duration-300">
                MERN stack Developer
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base text-gray-800 dark:text-gray-200 transform hover:scale-105 transition-transform duration-300">
                UI/UX Designer
              </span>
              {/* <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base text-gray-800 dark:text-gray-200 transform hover:scale-105 transition-transform duration-300">
                React Specialist
              </span> */}
            </div>
            
            <p className="text-lg sm:text-xl lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 px-2 sm:px-0">
              Creating elegant, user-friendly digital experiences with modern web technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-14 md:mt-7 justify-center lg:justify-start">
              <button 
                onClick={handleGetInTouch}
                className="group relative px-6 py-3 sm:px-8 sm:py-4 cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Send size={18} className="sm:w-5 sm:h-5" />
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={handleDownloadCV}
                className="group px-6 py-3 sm:px-8 sm:py-4 border-2 cursor-pointer border-purple-400 text-purple-400 font-semibold rounded-full transition-all duration-300 hover:bg-purple-400 hover:text-white hover:scale-105 text-sm sm:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  <Download size={18} className="sm:w-5 sm:h-5" />
                  Download CV
                </span>
              </button>
            </div>
          </div>

          {/* Right side - Lanyard */}
          <div className="relative flex justify-center items-start order-1 lg:order-2 h-64 sm:h-80 md:h-96 lg:h-auto lg:min-h-[600px]">
            <div
              className="
                w-full h-full max-w-sm sm:max-w-md lg:max-w-none
                -translate-y-8 sm:-translate-y-12 lg:-translate-y-16
                -mt-8 sm:-mt-55 lg:-mt-5 max-[640px]:-mt-65
              "
            >
              <Lanyard 
                position={[0, 0, 15]} 
                gravity={[0, -30, 0]} 
                fov={24} 
                transparent={true} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hide on mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:hidden lg:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;