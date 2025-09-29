import { useEffect, useState } from 'react';

const AnimatedText = ({ text, className = "", delay = 0 }) => {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleChars(prev => {
          if (prev < text.length) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 50);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-300 ${
            index < visibleChars 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-4'
          }`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;