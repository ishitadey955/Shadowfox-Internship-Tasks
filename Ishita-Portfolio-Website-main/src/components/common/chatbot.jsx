import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// Removed unused characterModel import to avoid linter/compile error

const PlaceholdersAndVanishInput = ({ placeholders, onChange, onSubmit }) => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [value, setValue] = useState('');
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [placeholders.length]);

  const handleSubmit = () => {
    if (value.trim()) {
      setAnimating(true);
      onSubmit(value);
      setTimeout(() => {
        setValue('');
        setAnimating(false);
      }, 300);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholders[currentPlaceholder]}
        className={`w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 ${
          animating ? 'animate-pulse' : ''
        }`}
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-200 hover:scale-105"
      >
        <Send size={16} className="text-white" />
      </button>
    </div>
  );
};

const TypewriterText = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayText}</span>;
};

const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <div
      className="animate-bounce"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s',
        animationIterationCount: 'infinite',
      }}
    >
      {children}
    </div>
  );
};

const ModernPortfolioChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content:
        "Hi! I'm here to help you explore Ishita's portfolio. Ask me about projects, skills, or experience!",
      sender: 'assistant',
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [apiKeyError, setApiKeyError] = useState(false);
  const messagesEndRef = useRef(null);

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const placeholders = [
    'Ask about my projects...',
    'What technologies do I use?',
    'Tell me about experience...',
    'How can we collaborate?',
    "What's my background?",
    'Ask me anything...',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!GEMINI_API_KEY) {
      setApiKeyError(true);
      console.error(
        'Gemini API key not found. Please add VITE_GEMINI_API_KEY to your .env file'
      );
    }
  }, [GEMINI_API_KEY]);

  const callGeminiAPI = async (userMessage) => {
    if (!GEMINI_API_KEY) {
      throw new Error('API key not configured');
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are a helpful assistant for Ishita's portfolio. Answer questions about:

Profile: Ishita Dey , a passionate student currently interning in web development in Narula Institute of Technology,Kolkata.

Skills: Python, C/C++, Java, HTML/CSS, JavaScript, React. Specializes in frontend development and creating interactive user interfaces.

Experience: Currently interning as a web developer, focusing on frontend development and creating engaging web experiences at ShadowFox.

Projects: Web applications with React, Python automation tools, mobile-responsive designs. Each project showcases full-stack development and problem-solving skills.

Contact: ishitadey955@gmail.com

Keep responses conversational, helpful, and focused on the portfolio. User question: ${userMessage}`,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();

      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error('Invalid response format from API');
      }
    } catch (error) {
      console.error('Gemini API Error:', error);

      const mockResponses = {
        projects:
          "I've worked on several exciting projects including web applications with React, Python automation tools, and mobile-responsive designs. Each project showcases different aspects of full-stack development and problem-solving skills.",
        skills:
          'My technical stack includes Python, C/C++, Java, HTML/CSS, JavaScript, and React. I specialize in frontend development and love creating beautiful, interactive user interfaces.',
        experience:
          "Currently interning as a web developer in Kolkata, focusing on full stack development. I'm passionate about creating engaging web experiences and always eager to learn new technologies.",
        contact:
          'Feel free to reach out at ishitadey955@gmail.com. I\'m always open to discussing new opportunities and collaborations!',
        background:
          "I'm Ishita Dey, a passionate student currently interning in web development. Based in Kolkata, I love MERN stack development and creating amazing user experiences.",
        default:
          "That's a great question! I'd love to help you learn more about my portfolio. Feel free to ask about specific projects, technologies I use, or my development journey.",
      };

      const lowerMessage = userMessage.toLowerCase();
      for (const [key, response] of Object.entries(mockResponses)) {
        if (lowerMessage.includes(key)) {
          return response;
        }
      }
      return mockResponses.default;
    }
  };

  const sendMessage = async (messageText) => {
    if (!messageText.trim() || isTyping) return;

    const userMessage = {
      id: messages.length + 1,
      content: messageText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await callGeminiAPI(messageText);

      const assistantMessage = {
        id: messages.length + 2,
        content: response,
        sender: 'assistant',
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('SendMessage Error:', error);
      const errorMessage = {
        id: messages.length + 2,
        content: apiKeyError
          ? 'Please configure your Gemini API key in the .env file to enable AI responses.'
          : "I'm having trouble responding right now. Please try again!",
        sender: 'assistant',
        timestamp: new Date().toLocaleTimeString(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {apiKeyError && (
        <div className="mb-4 p-3 bg-yellow-500/90 backdrop-blur-md text-white rounded-lg text-sm">
          ⚠️ Add VITE_GEMINI_API_KEY to your .env file
        </div>
      )}

      {!isOpen && (
        <FloatingElement delay={0}>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transform hover:scale-110 transition-all duration-300"
          >
            <div className="relative">
              <Bot size={28} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </div>
          </button>
        </FloatingElement>
      )}

      {isOpen && (
        <div className="w-96 h-[600px] bg-gradient-to-br from-purple-500/90 to-indigo-600/90 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-500">
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative p-6 bg-gradient-to-r from-purple-500/20 to-indigo-600/20 backdrop-blur-md border-b border-white/10 z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <Sparkles size={20} className="text-white" />
                  </div>
                  <div
                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white animate-pulse ${
                      apiKeyError ? 'bg-yellow-400' : 'bg-green-400'
                    }`}
                  ></div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Portfolio AI</h3>
                  <p className="text-white/70 text-sm">
                    {apiKeyError ? 'Limited mode' : 'Online now'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 text-white/70 hover:text-white"
              >
                &times;
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide z-10 relative">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500'
                        : 'bg-gradient-to-r from-purple-500 to-indigo-500'
                    }`}
                  >
                    {message.sender === 'user' ? (
                      <User size={16} className="text-white" />
                    ) : (
                      <Bot size={16} className="text-white" />
                    )}
                  </div>

                  <div
                    className={`max-w-[80%] ${
                      message.sender === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-2xl backdrop-blur-md ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-indigo-500/80 to-purple-500/80 text-white ml-auto'
                          : message.isError
                          ? 'bg-red-500/20 text-white border border-red-500/30'
                          : 'bg-white/10 text-white border border-white/20'
                      }`}
                    >
                      {message.sender === 'assistant' &&
                      index === messages.length - 1 &&
                      !isTyping ? (
                        <TypewriterText text={message.content} speed={30} />
                      ) : (
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      )}
                    </div>
                    <p className="text-xs text-white/50 mt-1 px-2">
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-500/10 to-indigo-600/10 backdrop-blur-md border-t border-white/10 z-10 relative">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={() => {}}
                onSubmit={sendMessage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernPortfolioChatbot;
