const CircleBackground = ({ className }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-300 to-blue-300 opacity-20 blur-md animate-pulse"></div>
  </div>
);

export default CircleBackground;