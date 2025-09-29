import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Instagram, GitBranch } from 'lucide-react';
import ChangelogPopup from '../sections/changelog';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/ishitadey955',
      hoverColor: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ishita-dey-63b8a729a',
      hoverColor: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/ishitadey955_/',
      hoverColor: 'hover:text-pink-500'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:ishitadey955@gmail.com',
      hoverColor: 'hover:text-red-500'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <footer className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-50 hover:text-purple-500">Ishita Dey</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Full-stack developer passionate about creating beautiful, 
                functional web experiences. Always learning, always building.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${link.hoverColor} transition-colors duration-200`}
                      aria-label={link.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-50">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-purple-500 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-50">Get In Touch</h4>
              <div className="space-y-2 text-sm text-gray-500">
                <p>Open to new opportunities</p>
                <p>Available for freelance work</p>
                <a
                  href="mailto:ishitadey955@gmail.com"
                  className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  <Mail className="h-4 w-4" />
                  <span>ishitadey955@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 py-6 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-gray-500">
              © {currentYear} Ishita Dey. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <button
                onClick={() => setIsChangelogOpen(true)}
                className="inline-flex items-center space-x-1 hover:text-purple-500 transition-colors duration-200 cursor-pointer"
              >
                <GitBranch className="h-3 w-3" />
                <span>Changelog</span>
              </button>
              <a
                href="#top"
                className="inline-flex items-center space-x-1 hover:text-gray-700 transition-colors duration-200"
              >
                <ExternalLink className="h-3 w-3" />
                <span>Back to top</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ChangelogPopup 
        isOpen={isChangelogOpen} 
        onClose={() => setIsChangelogOpen(false)} 
      />
    </>
  );
}