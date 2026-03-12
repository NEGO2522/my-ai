import React, { useState, useEffect, useRef } from 'react';
import { Search, Lightbulb, Paperclip, ArrowUp, Clock, ChevronDown, Sun, Moon, Settings, Menu, MessageSquare } from 'lucide-react';

const AI = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [darkMode, setDarkMode] = useState(true); 
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  const models = [
    { category: 'GPT Models', items: [{ value: 'gpt-4o', label: 'GPT-4o (Latest)' }, { value: 'gpt-4o-mini', label: 'GPT-4o Mini' }] },
    { category: 'Claude Models', items: [{ value: 'claude-3.5-sonnet', label: 'Claude 3.5 Sonnet' }] },
    { category: 'Gemini Models', items: [{ value: 'gemini-2.0-flash', label: 'Gemini 2.0 Flash' }] }
  ];

  return (
    <div className={`min-h-screen flex font-sans transition-colors duration-300 ${darkMode ? 'bg-[#121212] text-white' : 'bg-[#f4f4f4] text-[#1a1a1a]'}`}>
      
      {/* Sidebar Navigation */}
      <aside className={`
        ${isSidebarOpen ? 'w-64' : 'w-16'} 
        flex flex-col py-4 border-r-2 h-screen sticky top-0 transition-all duration-300 ease-in-out z-20
        ${darkMode ? 'bg-[#1e1e1e] border-gray-800' : 'bg-white/50 border-gray-300 backdrop-blur-sm'}
      `}>
        
        {/* Top Section: Hamburger Only */}
        <div className="flex flex-col items-start px-3">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`p-2 rounded-xl transition-colors mb-6 flex-shrink-0 ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-200 text-gray-600'}`}
          >
            <Menu size={20} />
          </button>

          {/* Navigation Icons in Series */}
          <div className="flex flex-col gap-6 w-full">
            {/* New Chat / Message Icon */}
            <div className="flex items-center gap-4 cursor-pointer group px-2">
              <MessageSquare size={20} className="text-gray-400 group-hover:text-gray-600 transition flex-shrink-0" />
              <span className={`text-sm font-medium transition-opacity duration-300 whitespace-nowrap ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                New Chat
              </span>
            </div>

            {/* History Icon */}
            <div className="flex items-center gap-4 cursor-pointer group px-2">
              <Clock size={20} className="text-gray-400 group-hover:text-gray-600 transition flex-shrink-0" />
              <span className={`text-sm font-medium transition-opacity duration-300 whitespace-nowrap ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                History
              </span>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className={`h-[1px] my-6 mx-4 transition-all ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} ${isSidebarOpen ? 'w-auto' : 'w-6'}`} />

        {/* Bottom Section: Settings */}
        <div className="mt-auto px-5 mb-8">
          <div className="flex items-center gap-4 cursor-pointer group">
            <Settings size={20} className="text-gray-400 group-hover:text-gray-600 transition flex-shrink-0" />
            <span className={`text-sm font-medium transition-opacity duration-300 whitespace-nowrap ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              Settings
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center relative">
        
        {/* Top Header with Theme Toggle */}
        <header className="absolute top-0 right-0 p-4 z-10">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition ${darkMode ? 'hover:bg-gray-800 text-yellow-400' : 'hover:bg-gray-100 text-gray-600'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>
        
        <main className="flex-1 flex flex-col items-center justify-center w-full max-w-3xl px-6">
          <h1 className="text-4xl font-medium mb-8 tracking-tight">What can I help with?</h1>
          
          {/* Search Container */}
          <div className={`w-full rounded-[32px] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border transition-all ${darkMode ? 'bg-[#1e1e1e] border-gray-800' : 'bg-white border-gray-100'}`}>
            <textarea 
              className={`w-full resize-none border-none focus:ring-0 focus:outline-none text-lg placeholder-gray-400 min-h-[100px] px-4 pt-2 bg-transparent ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}
              placeholder="Ask anything"
            />
            
            <div className="flex justify-between items-center mt-2 px-2">
              <div className="flex items-center gap-2">
                <button className={`p-2 rounded-full transition ${darkMode ? 'hover:bg-gray-800 text-gray-500' : 'hover:bg-gray-100 text-gray-400'}`}>
                  <Paperclip size={18} />
                </button>
                
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex items-center gap-2 px-3 py-1.5 border rounded-full text-sm transition focus:outline-none focus:ring-0 ${darkMode ? 'bg-[#2a2a2a] border-gray-700 text-gray-300 hover:bg-[#333]' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                  >
                    <span className="truncate max-w-[120px]">{selectedModel || 'Select Model'}</span>
                    <ChevronDown size={14} />
                  </button>
                  
                  {isOpen && (
                    <div className={`absolute top-full mt-1 left-0 w-48 border rounded-2xl shadow-lg z-50 p-1 ${darkMode ? 'bg-[#2a2a2a] border-gray-700' : 'bg-white border-gray-200'}`}>
                      {models.map((group, i) => (
                        <div key={i}>
                          <div className={`px-3 py-1 text-[10px] font-bold uppercase ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{group.category}</div>
                          {group.items.map((m, j) => (
                            <button 
                              key={j} 
                              onClick={() => {setSelectedModel(m.label); setIsOpen(false)}} 
                              className={`w-full text-left px-3 py-2 text-sm rounded-lg transition ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                              {m.label}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <button className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-full text-sm transition ${darkMode ? 'bg-[#2a2a2a] border-gray-700 text-gray-300 hover:bg-[#333]' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                  <Lightbulb size={14} />
                  <span>Reasoning</span>
                </button>
              </div>

              <button className={`p-2.5 rounded-xl transition ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                <ArrowUp size={20} strokeWidth={3} />
              </button>
            </div>
          </div>
        </main>

        <footer className="pb-8 flex flex-col items-center gap-4 text-center">
          <div className={`px-6 py-3 rounded-2xl max-w-md ${darkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'}`}>
            <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Developed By Students Developer.</p>
          </div>
          <p className="text-xs text-gray-400">AI can make mistakes. Please double-check responses.</p>
        </footer>
      </div>
    </div>
  );
};

export default AI;