import { useEffect, useRef, useState } from 'react';
import {
  ArrowUp,
  ChevronDown,
  Clock,
  Lightbulb,
  Menu,
  MessageSquare,
  Moon,
  Paperclip,
  Settings,
  Sparkles,
  Sun,
} from 'lucide-react';

const models = [
  {
    category: 'GPT Models',
    items: [
      { value: 'gpt-4o', label: 'GPT-4o (Latest)' },
      { value: 'gpt-4o-mini', label: 'GPT-4o Mini' },
    ],
  },
  {
    category: 'Claude Models',
    items: [{ value: 'claude-3.5-sonnet', label: 'Claude 3.5 Sonnet' }],
  },
  {
    category: 'Gemini Models',
    items: [{ value: 'gemini-2.0-flash', label: 'Gemini 2.0 Flash' }],
  },
];

const sidebarItems = [
  { label: 'New Chat', icon: MessageSquare },
  { label: 'History', icon: Clock },
  { label: 'Settings', icon: Settings },
];

const AI = () => {
  const [selectedModel, setSelectedModel] = useState('GPT-4o (Latest)');
  const [isModelMenuOpen, setIsModelMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsModelMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const pageTheme = darkMode
    ? 'bg-[#090b10] text-white'
    : 'bg-slate-100 text-slate-900';

  const cardTheme = darkMode
    ? 'border-white/10 bg-white/5'
    : 'border-slate-200 bg-white';

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${pageTheme}`}>
      <div className="relative flex min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(168,85,247,0.16),transparent_25%)]" />

        <aside
          className={`z-10 flex h-screen flex-col border-r backdrop-blur-xl transition-all duration-300 ${
            isSidebarOpen ? 'w-64 p-4' : 'w-20 p-3'
          } ${darkMode ? 'border-white/10 bg-[#0f131c]/90' : 'border-slate-200 bg-white/85'}`}
        >
          <button
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className={`mb-6 inline-flex w-fit items-center rounded-xl p-2 transition ${
              darkMode ? 'hover:bg-white/10' : 'hover:bg-slate-100'
            }`}
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>

          <div className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={`flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left text-sm transition ${
                    darkMode ? 'text-slate-300 hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={18} />
                  <span
                    className={`whitespace-nowrap transition-opacity duration-300 ${
                      isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none w-0'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="relative z-10 flex flex-1 flex-col">
          <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 pb-2 pt-6">
            <div>
              <p className={`text-xs uppercase tracking-[0.2em] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                My AI Workspace
              </p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight">What can I help with today?</h1>
            </div>

            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className={`rounded-full p-2.5 transition ${
                darkMode ? 'bg-white/10 text-yellow-300 hover:bg-white/15' : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </header>

          <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 pb-10 pt-4">
            <div className={`rounded-3xl border p-5 shadow-2xl ${cardTheme}`}>
              <textarea
                className={`min-h-[150px] w-full resize-none rounded-2xl border-none bg-transparent p-4 text-lg outline-none placeholder:text-slate-400 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
                placeholder="Ask anything about your documents..."
              />

              <div className="mt-2 flex flex-wrap items-center justify-between gap-3 px-2 pb-1">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    className={`rounded-full p-2 transition ${
                      darkMode ? 'text-slate-300 hover:bg-white/10' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                    aria-label="Attach file"
                  >
                    <Paperclip size={17} />
                  </button>

                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsModelMenuOpen((prev) => !prev)}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
                        darkMode
                          ? 'border-white/15 bg-white/5 text-slate-200 hover:bg-white/10'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="max-w-[150px] truncate">{selectedModel}</span>
                      <ChevronDown size={14} />
                    </button>

                    {isModelMenuOpen && (
                      <div
                        className={`absolute left-0 top-full z-50 mt-2 w-56 rounded-2xl border p-1 shadow-2xl ${
                          darkMode ? 'border-white/15 bg-[#171b24]' : 'border-slate-200 bg-white'
                        }`}
                      >
                        {models.map((group) => (
                          <div key={group.category} className="mb-1 last:mb-0">
                            <p className={`px-3 py-1 text-[10px] font-bold uppercase ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                              {group.category}
                            </p>
                            {group.items.map((model) => (
                              <button
                                key={model.value}
                                onClick={() => {
                                  setSelectedModel(model.label);
                                  setIsModelMenuOpen(false);
                                }}
                                className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                                  darkMode ? 'text-slate-200 hover:bg-white/10' : 'text-slate-700 hover:bg-slate-50'
                                }`}
                              >
                                {model.label}
                              </button>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition ${
                      darkMode
                        ? 'border-white/15 bg-white/5 text-slate-200 hover:bg-white/10'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Lightbulb size={14} />
                    Reasoning
                  </button>
                </div>

                <button
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    darkMode ? 'bg-white text-black hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-700'
                  }`}
                >
                  Send <ArrowUp size={16} strokeWidth={3} />
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {['Summarize this document', 'Find key action items', 'Compare two files'].map((prompt) => (
                <button
                  key={prompt}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${cardTheme} ${
                    darkMode ? 'hover:bg-white/10' : 'hover:bg-slate-50'
                  }`}
                >
                  <Sparkles size={15} className="mb-2" />
                  {prompt}
                </button>
              ))}
            </div>
          </main>

          <footer className={`px-6 pb-6 text-center text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            AI can make mistakes. Please verify important responses.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AI;
