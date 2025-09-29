import { ArrowUp } from "lucide-react";

const ScrollToTopButton = ({ showScrollTop, scrollToTop }) => {
  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-6 bottom-6 z-50 p-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition-all duration-300 animate-bounce"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;