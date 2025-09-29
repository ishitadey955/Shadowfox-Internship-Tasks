const ExperienceSection = () => {
  const experience = [
    {
      position: "Generative AI Intern (Internship)",
      company: "AI Wallah(under Quirky Connections Pvt Ltd), Kolkata",
      year: "July 2025 - August 2025",
      description: " Built and deployed multiple LLM-powered applications using transformer-based architectures, implemented prompt engineering techniques, fine tuned open-source models for domain-specific tasks, and optimized inference pipelines for production scenarios.Contributed to the development of generative AI tools for text generation, summarization, and chatbot systems.Collaborated using Git and Agile workflows in a fast-paced startup environment.",
    },
    {
      position: "Virtual Intern",
      company: "TATA DATA VISUALIZATION: EMPOWERING BUSINESS WITH EFFECTIVE INSIGHTS",
      year: "June 2025",
      description: "Formulated 8 targeted questions, 4 each for the CEO and CMO, generating insights for business performance and expansion planning.Analyzed large datasets of up to half a million rows using Power Query in Power BI.",
    },
    {
      position: "Certifications",
      description: " Problem Solving(Basic)-HackerRank, April 2025.Natural Language Processing for Developers- Infosys Springboard, April 2025.Python 101 for Data Science-Cognitive Class, August 2025.Training of 30 hours on Python with Django-Ardent Computech Pvt Ltd, February 2025.Cyber Job Simulation-Deloitte Australia,August 2025",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            Internships & Certifications
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {experience.map((item, index) => (
            <div 
              key={index} 
              className="relative"
            >
              <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              
              <div className="pl-24">
                <div className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {item.year}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.position}</h3>
                <p className="text-purple-600 font-medium mb-4">{item.company}</p>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;