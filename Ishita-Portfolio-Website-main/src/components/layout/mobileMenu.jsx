import { motion as Motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ 
  menuOpen, 
  navItems, 
  activeSection, 
  scrollToSection 
}) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <Motion.div 
          className="md:hidden bg-black/30 backdrop-blur-lg rounded-b-2xl border border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 rounded-full text-base font-medium w-full text-left ${
                  activeSection === item.id
                    ? "bg-purple-600 text-white"
                    : "text-white hover:bg-black/20"
                } transition-all duration-300`}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {item.label}
              </Motion.button>
            ))}
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
