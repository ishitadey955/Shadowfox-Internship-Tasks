const EducationSection = () => {
  const education = [
    {
      degree: "BTECH in Computer Science and Engineering",
      institution: "Narula Institute of Technology,Kolkata.",
      year: "2023-2027",
      description: "At Narula Institute of Technology, I focused on software development, database systems, and IT applications, gaining expertise in programming languages such as PHP, Java and Python, as well as system analysis and design with 9.19 CGPA. As the team lead of various project teams, I collaborated with peers to complete assignments and real-world projects, including inventory management systems and user interface development. These experiences enhanced my technical skills while strengthening my ability to communicate and work effectively in a team environment.",
    },
    {
      degree: "ICSE & ISC",
      institution: "St. Xavier's Institution,Panihati.",
      year: "ICSE(2021) - ISC(2023)",
      description: "During my time at St. Xavier's Institution, I pursued a well-rounded academic curriculum, including Mathematics, Physics, and Computer Science, which built a solid foundation for my future studies. I was an active member of school clubs, where I developed strong teamwork and communication skills through organizing and participating in group activities and events. These experiences not only enhanced my ability to work collaboratively but also helped me grow as a disciplined and proactive individual.",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-200 dark:bg-purple-900 opacity-20 blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-blue-200 dark:bg-blue-900 opacity-20 blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            Education
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <div 
              key={index} 
              className={`relative pl-12 pb-12 ${index !== education.length - 1 ? "border-l-2 border-purple-200 dark:border-purple-800" : ""}`}
            >
              <div className="absolute top-0 left-0 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white">
                {index + 1}
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {item.year}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.degree}</h3>
                <p className="text-purple-600 font-medium mb-3">{item.institution}</p>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          {/* <div className="bg-white dark:bg-gray-700 rounded-full py-3 px-6 shadow-md">
            <span className="text-gray-600 dark:text-gray-300">
              Additional certifications in UI/UX Design and Web Accessibility
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;