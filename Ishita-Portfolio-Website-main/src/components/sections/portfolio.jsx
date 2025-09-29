import React, { useState, useEffect } from "react";
import { Github, ExternalLink, Eye } from "lucide-react";
import LuminaeImg from '../../assets/screenshot/Luminae.jpeg';
import ZenFitImg from '../../assets/screenshot/Zenfit.jpeg';
import InvisibilityCloakImg from '../../assets/screenshot/InvisibilityCloak.jpeg';
import SnakeImg from '../../assets/screenshot/Snake.jpeg';

const PortfolioSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  const GITHUB_USERNAME = "ishitadey955";

  const portfolioProjects = [
    {
      title: "Luminae",
      description: "A full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React, Node.js).This project includes features like product listings, cart management, order management, authentication,and an admin dashboard for managing orders and featured images.",
      tags: ["MERN e-commerce", "Authentication", "Admin Dashboard"],
      github: `https://github.com/ishitadey955/Luminae`,
      image: LuminaeImg
    },
    {
      title: "ZenFit",
      description: "Zenfit is an AI-powered mental health and wellness platform for students, offering personalized support, early detection, counseling, progress tracking, and an accessible, stigma-free space for well-being.",
      tags: ["Mental health", "AI support", "Counseling Platform"],
      github: `https://github.com/aniket00101/SIH_2025`, 
      image: ZenFitImg    
    },
    {
      title: "Invisibility Cloak",
      description: "Real-time video capture with smooth background replacement using color detection, creating a simple yet eye-catching computer vision experiment.",
      tags: ["OpenCV", "Real time Processing", "Computer vision"],
      github: `https://github.com/ishitadey955/Ishita-invisibility-cloak`,
      image: InvisibilityCloakImg
    },
    /*{
      title: "Retro Snake Game",
      description: "Retro Snake Game based on Unity",
      tags: ["Unity", "C++"],
      github: `https://github.com/${GITHUB_USERNAME}/retro-snake-game`,
      live: "https://snake-game-demo.itch.io",
      image: SnakeImg
    },*/
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: "50px"
      }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleViewMore = () => {
    window.open(`https://github.com/ishitadey955?tab=repositories`, '_blank');
  };

  const handleProjectClick = (project) => {
    window.open(project.github, '_blank');
  };

  const handleLiveDemo = (e, project) => {
    e.stopPropagation();
    window.open(project.live, '_blank');
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            My Project
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </h2>
           <p className="mt-10 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-300">
            Here are some of my recent projects showcasing different technologies and skills
          </p>
        </div>

        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project, index) => (
            <div 
              key={index}
              data-index={index}
              className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 ${
                visibleCards.has(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleProjectClick(project)}
            >
 
              <div className="h-56 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 flex items-end ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="p-6 w-full">
                    <div className="flex space-x-3">
                      <button 
                        className="bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center space-x-2 hover:scale-105"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project);
                        }}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </button>
                      {/* <button 
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 flex items-center space-x-2 hover:scale-105"
                        onClick={(e) => handleLiveDemo(e, project)}
                      >
                        <ExternalLink size={16} />
                        <span>Live</span>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm transform hover:scale-105 transition-transform duration-200 hover:bg-purple-100 dark:hover:bg-purple-900/30"
                      style={{
                        animationDelay: `${(index * 200) + (tagIndex * 100)}ms`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>


                <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  <Github size={14} className="mr-1" />
                  <span>Click to view repository</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        

        <div className="text-center mt-12">
          <button 
            onClick={handleViewMore}
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center space-x-3 mx-auto"
          >
            <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>View All Projects on GitHub</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2 hover:text-purple-600 transition-colors duration-300">
              <Eye size={16} />
              <span>3 Featured Projects</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-purple-600 transition-colors duration-300">
              <Github size={16} />
              <span>More on GitHub</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-x {
          to {
            transform: scaleX(1);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-scale-x {
          animation: scale-x 1s ease-out 0.5s forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;