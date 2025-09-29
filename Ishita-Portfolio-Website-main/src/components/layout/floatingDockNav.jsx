import React, { useState } from "react";
import { motion as Motion } from "framer-motion";

const FloatingDockNav = ({ 
  activeSection, 
  scrollToSection,
  navItems 
}) => {
  // Ensure scrollToSection is a function
  const handleScrollToSection = (sectionId) => {
    if (typeof scrollToSection === "function") {
      scrollToSection(sectionId);
    } else {
      console.error("scrollToSection is not a function");
      // Fallback behavior - just scroll to the element
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <Motion.div
        className="flex items-center gap-1 p-2 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {navItems.map((item) => (
          <Motion.button
            key={item.id}
            onClick={() => handleScrollToSection(item.id)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === item.id
                ? "text-white"
                : "text-gray-300 hover:text-white"
            }`}
            initial={{ scale: 1 }}
            animate={{
              scale: hoveredItem === item.id || activeSection === item.id ? 1.2 : 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {activeSection === item.id && (
              <Motion.div
                className="absolute inset-0 bg-purple-600 rounded-full -z-10"
                layoutId="activeSection"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </Motion.button>
        ))}
      </Motion.div>
    </div>
  );
};

export default FloatingDockNav;
