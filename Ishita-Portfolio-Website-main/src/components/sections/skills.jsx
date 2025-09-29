import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
    { name: "HTML/CSS", level: 95, color: "from-red-500 to-pink-500" },
    { name: "Tailwind CSS", level: 90, color: "from-teal-500 to-green-500" },
    { name: "C/C++", level: 98, color: "from-green-600 to-emerald-600" },
    { name: "Python", level: 75, color: "from-blue-600 to-purple-600" },
    { name: "UI/UX Design", level: 80, color: "from-purple-500 to-indigo-500" },
    { name: "Git", level: 80, color: "from-gray-600 to-gray-800" },
  ];

  const additionalSkills = ["Figma", "Canva", "Docker"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.2,
        ease: "easeOut"
      }
    })
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={ref} id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-purple-200 dark:bg-purple-900 opacity-20 blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-blue-200 dark:bg-blue-900 opacity-20 blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-green-200 dark:bg-green-900 opacity-15 blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            My Skills
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </h2>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={skillCardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 opacity-0"
                animate={{ opacity: hoveredSkill === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <div className="mb-4 flex justify-between items-center">
                  <motion.h3 
                    className="text-lg font-semibold text-gray-900 dark:text-white"
                    animate={{ 
                      color: hoveredSkill === index ? "#8B5CF6" : undefined 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.name}
                  </motion.h3>
                  <motion.span 
                    className="text-sm font-medium text-purple-600"
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: hoveredSkill === index ? 1.1 : 1,
                      color: hoveredSkill === index ? "#EC4899" : "#8B5CF6"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    variants={progressBarVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={skill.level}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: [-100, 300] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: 3,
                        ease: "easeInOut" 
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white md:col-span-2 lg:col-span-1 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full bg-gradient-to-r from-white/20 to-transparent rounded-full transform scale-150" />
            </motion.div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Additional Skills
              </motion.h3>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {additionalSkills.map((skill, index) => (
                  <motion.span 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { 
                        opacity: 1, 
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 500,
                          damping: 25,
                          delay: index * 0.1
                        }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;