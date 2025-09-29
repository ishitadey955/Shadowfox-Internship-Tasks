import React, { useState } from 'react';
import { GitBranch, Plus, Bug, Zap, Sparkles, Calendar, Code, X } from 'lucide-react';

const ChangelogPopup = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState('all');

  const versionData = [
    {
      version: 'v1.2.1',
      type: 'patch',
      date: 'May 29, 2025',
      description: 'Added AI-powered portfolio assistant using Google Gemini 1.5 API to enhance user interaction and provide intelligent responses about projects and skills.',
      changes: {
        features: [
          'Integrated Google Gemini 1.5 API for intelligent conversations',
          'Added interactive chat interface with typing indicators',
          'Implemented conversation history and context awareness',
          'Added mobile-responsive chat design'
        ]
      },
      technologies: ['Google Gemini API', 'React', 'Tailwind CSS', 'JavaScript ES6']
    },
    {
      version: 'v1.1.3',
      type: 'minor',
      date: 'May 15, 2025',
      description: 'Major UI/UX overhaul with modern design patterns, improved accessibility, and enhanced mobile experience.',
      changes: {
        improvements: [
          'Redesigned navigation with smooth animations',
          'Improved color scheme with better contrast ratios',
          'Enhanced loading performance with lazy loading',
        ]
      },
      technologies: ['CSS Grid', 'Intersection Observer', 'React Hooks', 'Tailwind CSS']
    },
    {
      version: 'v1.1.2',
      type: 'hotfix',
      date: 'April 28, 2025',
      description: 'Critical bug fixes for mobile compatibility and form submission issues.',
      changes: {
        fixes: [
          'Fixed contact form submission on mobile devices',
          'Resolved image loading issues on slow connections',
          'Fixed navigation menu behavior on tablet screens'
        ]
      },
      technologies: ['React', 'CSS Media Queries']
    },
    {
      version: 'v1.0.0',
      type: 'minor',
      date: 'March 20, 2025',
      description: 'Enhanced portfolio sections with new projects, testimonials, and improved contact functionality.',
      changes: {
        features: [
          'Added testimonials section with carousel',
          'Integrated new project showcases',
          'Enhanced contact form with validation',
          'Added social media integration'
        ]
      },
      technologies: ['React', 'Formik', 'Yup Validation', 'EmailJS']
    }
  ];

  const stats = {
    currentVersion: '1.2.1',
    totalUpdates: 4,
    newFeatures: 2,
    bugFixes: 8
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'major': return <Sparkles className="w-4 h-4" />;
      case 'minor': return <Plus className="w-4 h-4" />;
      case 'patch': return <Zap className="w-4 h-4" />;
      case 'hotfix': return <Bug className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  const getTypeStyles = (type) => {
    switch (type) {
      case 'major': return 'bg-blue-900 text-blue-200 border-blue-700';
      case 'minor': return 'bg-purple-900 text-purple-200 border-purple-700';
      case 'patch': return 'bg-green-900 text-green-200 border-green-700';
      case 'hotfix': return 'bg-orange-900 text-orange-200 border-orange-700';
      default: return 'bg-gray-800 text-gray-200 border-gray-600';
    }
  };

  const filteredVersions = selectedType === 'all' 
    ? versionData 
    : versionData.filter(version => version.type === selectedType);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-opacity-70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700">
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <GitBranch className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Version Changelog</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200"
              aria-label="Close changelog"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-indigo-100 mt-2">
            Track the evolution and improvements of this portfolio
          </p>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="p-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 mb-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Portfolio Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-gray-800 rounded-lg shadow-sm border border-gray-600">
                  <div className="text-xl font-bold text-indigo-300">{stats.currentVersion}</div>
                  <div className="text-xs text-gray-400 mt-1">Current Version</div>
                </div>
                <div className="text-center p-3 bg-gray-800 rounded-lg shadow-sm border border-gray-600">
                  <div className="text-xl font-bold text-purple-300">{stats.totalUpdates}</div>
                  <div className="text-xs text-gray-400 mt-1">Total Updates</div>
                </div>
                <div className="text-center p-3 bg-gray-800 rounded-lg shadow-sm border border-gray-600">
                  <div className="text-xl font-bold text-green-300">{stats.newFeatures}</div>
                  <div className="text-xs text-gray-400 mt-1">New Features</div>
                </div>
                <div className="text-center p-3 bg-gray-800 rounded-lg shadow-sm border border-gray-600">
                  <div className="text-xl font-bold text-orange-300">{stats.bugFixes}</div>
                  <div className="text-xs text-gray-400 mt-1">Bug Fixes</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {['all', 'major', 'minor', 'patch', 'hotfix'].map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedType === type
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>

              {filteredVersions.map(version => (
                <div key={version.version} className="relative mb-6 ml-12">
                  <div className="absolute -left-8 top-4 w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-2 border-gray-900 shadow-lg"></div>

                  <div className="bg-gray-800 rounded-xl shadow-md border border-gray-700 p-4 hover:shadow-lg hover:border-gray-600 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">{version.version}</h3>
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getTypeStyles(version.type)}`}>
                          {getTypeIcon(version.type)}
                          {version.type.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Calendar className="w-3 h-3" />
                        {version.date}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-3 text-sm leading-relaxed">{version.description}</p>

                    <div className="space-y-3">
                      {Object.entries(version.changes).map(([changeType, items]) => (
                        <div key={changeType}>
                          <h4 className="flex items-center gap-2 font-semibold text-gray-200 mb-2 capitalize text-sm">
                            {changeType === 'features' && <Plus className="w-3 h-3 text-green-400" />}
                            {changeType === 'improvements' && <Sparkles className="w-3 h-3 text-blue-400" />}
                            {changeType === 'fixes' && <Bug className="w-3 h-3 text-red-400" />}
                            {changeType}
                          </h4>
                          <ul className="space-y-1 ml-5">
                            {items.map(item => (
                              <li key={item} className="text-gray-400 text-xs relative">
                                <span className="absolute -left-3 text-indigo-400">→</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {version.technologies && (
                      <div className="mt-3 pt-3 border-t border-gray-700">
                        <h4 className="font-semibold text-gray-200 mb-2 text-xs">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {version.technologies.map(tech => (
                            <span
                              key={tech}
                              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700">
              <p className="text-gray-300 text-sm">
                Want to see what's coming next? Check back regularly for updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangelogPopup;
