import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const Navigation = ({ activeSection, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    if (typeof scrollToSection === "function") {
      scrollToSection(sectionId);
    } else {
      console.error("scrollToSection is not a function");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Project" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  // Mobile Menu Component
  const MobileMenu = () => (
    <AnimatePresence>
      {menuOpen && (
        <Motion.div
          className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <Motion.button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`block px-4 py-3 rounded-lg text-base font-medium w-full text-left ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                    : "text-white hover:bg-white/10"
                } transition-all duration-300`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </Motion.button>
            ))}
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <Motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full bg-black/20 backdrop-blur-lg text-white hover:bg-black/30 focus:outline-none transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Motion.div
                  initial={false}
                  animate={{ rotate: menuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </Motion.div>
              </Motion.button>
            </div>
          </div>
        </div>
        <MobileMenu />
      </nav>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
          <Motion.div
            className="flex items-center gap-2 p-3 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {navItems.map((item) => (
              <Motion.button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === item.id && (
                  <Motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full -z-10"
                    layoutId="activeBackground"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Motion.button>
            ))}
          </Motion.div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
