import React from "react";
import { useState, useEffect } from "react";
import Navigation from "./components/layout/navigation";
import MobileMenu from "./components/layout/mobileMenu";
import HeroSection from "./components/sections/hero";
import AboutSection from "./components/sections/about";
import SkillsSection from "./components/sections/skills";
import PortfolioSection from "./components/sections/portfolio";
import EducationSection from "./components/sections/education";
import ExperienceSection from "./components/sections/experience";
import ContactSection from "./components/sections/contact";
import CircleBackground from "./components/common/circleBackground";
import ScrollToTopButton from "./components/common/scrollToTopButton";
import HeroBackground from "./components/threejs/heroBackground";
import CodingPersonModel from "./components/threejs/codingPersonModel";
import StarBackground from "./components/common/starBackground";
import ClickSpark from "./components/common/clickSpark";
import Footer from "./components/layout/footer";
import PortfolioAssistant from "./components/common/chatbot";
import { Routes } from "react-router-dom";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-white dark:bg-gray-800">
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
      <Navigation 
        activeSection={activeSection} 
        toggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)} 
      />
      
      {mobileMenuOpen && (
        <MobileMenu 
          activeSection={activeSection} 
          closeMobileMenu={() => setMobileMenuOpen(false)} 
        />
      )}
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="portfolio">
          <PortfolioSection />
        </section>
        
        <section id="education">
          <EducationSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <PortfolioAssistant />
      <ScrollToTopButton />
      </ClickSpark>

      <Footer />
    </div>
  );
}

export default App;