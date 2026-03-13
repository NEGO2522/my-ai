import React, { useState, useEffect } from 'react';
import { 
  Star, ChevronUp, Send, Zap, User, FileText, Lock, Globe, Paperclip, Plus, Bot, ArrowRight 
} from 'lucide-react';

const Landing = () => {
  const [isPrivate, setIsPrivate] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);

  // --- States for the NEW Demo Model ---
  const [demoStep, setDemoStep] = useState(0);
  const [demoIsPrivate, setDemoIsPrivate] = useState(true);

  // Auto-run the demo sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setDemoStep((prev) => {
        const next = (prev + 1) % 5;
        if (next === 3) setDemoIsPrivate(false); 
        if (next === 0) setDemoIsPrivate(true);  
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { id: '01', title: 'Document Q&A', desc: 'Upload documents and ask AI direct questions with context-aware responses.', icon: <FileText size={24} /> },
    { id: '02', title: 'Public Knowledge', desc: 'Share selected documents publicly to help others in your field learn faster.', icon: <Globe size={24} /> },
    { id: '03', title: 'Private by Choice', desc: 'Keep sensitive files private and visible only to you at all times.', icon: <Lock size={24} /> },
    { id: '04', title: 'Cost Efficiency', desc: 'Optimize resources and reduce expenses with automated reading.', icon: <path d="M2 2H11V11H2V2ZM13 13H22V22H13V13Z" /> },
    { id: '05', title: 'Seamless Integration', desc: 'Easily connect AI with your existing systems and workflows.', icon: <path d="M12 2L22 12L12 22L2 12L12 2Z" /> },
    { id: '06', title: 'Future-Proof', desc: 'Stay ahead with cutting-edge Assistant technology.', icon: <rect x="4" y="4" width="16" height="16" rx="2" /> },
  ];

  const faqs = [
    { q: "How secure are my uploaded files?", a: "Your files are encrypted with AES-256 at rest and TLS 1.3 during transit. In 'Private' mode, data is never used for training." },
    { q: "What file formats are supported?", a: "We support PDF, CSV, JSON, and standard text formats up to 50MB per file." },
    { q: "Can I share my documents?", a: "Yes, you can toggle between Private and Public modes to share knowledge with the community." },
    { q: "Does the AI support multiple languages?", a: "Absolutely. Our core model is multilingual and can analyze documents in over 40 languages." },
    { q: "Is there a limit on assistant requests?", a: "Free trials include 100 requests per month. Pro plans offer unlimited access." }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0f1115] text-white selection:bg-orange-500/30 overflow-x-hidden" style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}>
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none z-0">
          <div className="absolute inset-0" style={{ background: `linear-gradient(125deg, transparent 20%, rgba(255,69,34,0.4) 40%, rgba(255,69,34,0.8) 50%, rgba(255,69,34,0.4) 60%, transparent 80%)`, transform: 'skewX(-20deg) translateX(15%)', filter: 'blur(80px)' }} />
        </div>

        <nav className="relative z-50 flex items-center justify-between px-12 py-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#ff4522] rounded-full flex items-center justify-center">
              <Star size={20} fill="black" stroke="black" />
            </div>
            <h1 className="text-xl font-semibold tracking-tight">My AI</h1>
          </div>
          <button className="bg-white text-black px-8 py-3 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-all">Open Assistant</button>
        </nav>

        <main className="relative z-10 px-12 flex-grow grid grid-cols-1 lg:grid-cols-12 items-center pb-20">
          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            <div className="mt-10">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-wider text-gray-300">
                <Bot size={14} /> Document-Powered AI Assistant
              </p>
              <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-tighter mb-10 font-semibold">
                Upload docs, ask smarter questions, and share knowledge securely.
              </h2>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 hover:bg-[#ff4522] hover:text-white transition-all">
                   GET STARTED <ArrowRight size={16} />
                </button>
                <button className="bg-transparent border border-gray-800 px-10 py-5 rounded-full font-bold text-sm tracking-wide hover:border-white transition-all">VIEW FEATURES</button>
              </div>
            </div>
            <div className="max-w-md mt-16">
              <p className="text-gray-300 text-lg leading-relaxed">My AI helps you chat with your documents, keep private files protected, and publish public resources for your community.</p>
            </div>
          </div>

          {/* --- 3D AI MODEL --- */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-80 pointer-events-none">
            <img 
              src="https://img.freepik.com/premium-photo/robot-face-with-blue-eyes-isolated-white-background-3d-render_116124-11005.jpg?w=826" 
              alt="AI Model" 
              className="w-[450px] animate-float-slow mix-blend-screen"
              style={{ filter: 'drop-shadow(0 0 50px rgba(255,69,34,0.2)) contrast(1.1)' }}
            />
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-20 lg:mt-0">
            {/* Phone Mockup remains visually same but with updated logic */}
            <div className="animate-float relative w-[380px] h-[620px] bg-[#0A0A0A] rounded-[50px] p-3 border-[6px] border-[#1A1A1A] shadow-[0_50px_100px_-20px_rgba(255,69,34,0.2)]">
              <div className="relative h-full w-full bg-black rounded-[40px] border border-white/5 flex flex-col overflow-hidden">
                <div className="px-5 pt-8 pb-4 border-b border-white/5 bg-black/80 backdrop-blur-md">
                   <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#ff4522] rounded-lg flex items-center justify-center"><Zap size={14} fill="black" stroke="black" /></div>
                        <span className="text-[11px] font-bold">My Assistant</span>
                      </div>
                      <button onClick={() => setIsPrivate(!isPrivate)} className="bg-white/5 border border-white/10 rounded-full p-1 flex items-center gap-1">
                        <div className={`px-2 py-1 rounded-full flex items-center gap-1 transition-all ${isPrivate ? 'bg-[#ff4522] text-black' : 'text-gray-500'}`}>
                          <Lock size={10} /><span className="text-[8px] font-bold uppercase">Private</span>
                        </div>
                        <div className={`px-2 py-1 rounded-full flex items-center gap-1 transition-all ${!isPrivate ? 'bg-blue-500 text-white' : 'text-gray-500'}`}>
                          <Globe size={10} /><span className="text-[8px] font-bold uppercase">Public</span>
                        </div>
                      </button>
                   </div>
                </div>
                <div className="flex-grow p-4 space-y-5 overflow-y-auto text-[10px]">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"><Star size={10} className="text-[#ff4522]" /></div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-3">Welcome! Upload a document to ask smarter questions.</div>
                  </div>
                  <div className="flex gap-2 flex-row-reverse">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center"><User size={10} className="text-gray-400" /></div>
                    <div className="space-y-2 max-w-[80%]">
                      <div className="bg-[#111] border border-[#ff4522]/30 rounded-2xl p-3 flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#ff4522]/10 rounded flex items-center justify-center"><FileText size={16} className="text-[#ff4522]" /></div>
                        <div>
                          <p className="text-[10px] font-bold">Project_Brief.pdf</p>
                          <p className="text-[8px] text-gray-500">1.2 MB • {isPrivate ? 'Private' : 'Shared'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-black border-t border-white/5 mt-auto">
                   <div className="relative flex items-center gap-2">
                      <button className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400"><Paperclip size={16} /></button>
                      <div className="relative flex-grow">
                        <input type="text" placeholder="Ask about your file..." className="w-full bg-[#111] border border-white/10 rounded-full py-2.5 px-4 text-[10px] focus:outline-none" />
                        <button className="absolute right-1.5 top-1.5 w-6 h-6 bg-[#ff4522] rounded-full flex items-center justify-center text-black"><Send size={12} /></button>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* --- SECTION 2: WHY CHOOSING MY AI --- */}
      <section id="features" className="relative py-32 px-12 bg-[#0f1115] border-t border-white/5 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Powerful <span className="text-[#ff4522]">Features</span></h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {features.map((item) => (
            <div key={item.id} className="group p-8 rounded-[32px] bg-[#0D0D0D] border border-white/5 hover:border-[#ff4522]/30 transition-all duration-500 flex flex-col justify-between min-h-[240px]">
              <div className="flex justify-between items-start">
                <span className="text-gray-600 font-mono text-sm">[{item.id}]</span>
                <div className="text-[#ff4522]">{item.icon}</div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 tracking-tight group-hover:text-[#ff4522] transition-colors">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- NEW SECTION: INTERACTIVE DEMO (AUTOMATED) --- */}
      <section className="relative py-32 px-12 bg-black border-t border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">See it in <span className="text-[#ff4522]">Action</span></h2>
            <p className="text-gray-500 text-xl leading-relaxed mb-10">
              Watch how our assistant processes your knowledge base. You have full control over privacy with a single click.
            </p>
            <div className="space-y-6">
              {[
                { t: "1. Upload", d: "Drop any PDF or CSV file into the secure chat." },
                { t: "2. Choose Mode", d: "Select Private for internal use or Public for community sharing." },
                { t: "3. Analyze", d: "Get instant insights and automated context extraction." }
              ].map((step, i) => (
                <div key={i} className={`flex gap-6 transition-opacity duration-500 ${demoStep >= i+1 ? 'opacity-100' : 'opacity-30'}`}>
                  <div className="w-8 h-8 rounded-full bg-[#ff4522] flex items-center justify-center font-bold text-black text-sm">{i+1}</div>
                  <div>
                    <h4 className="font-bold text-lg">{step.t}</h4>
                    <p className="text-gray-500 text-sm">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
             <div className="relative w-[400px] h-[500px] bg-[#0A0A0A] rounded-[40px] p-2 border-4 border-white/10">
                <div className="h-full w-full bg-black rounded-[32px] flex flex-col overflow-hidden border border-white/5">
                  <div className="p-4 border-b border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-400">DEMO SESSION</span>
                    <div className={`flex gap-1 p-1 bg-white/5 rounded-full border transition-all ${demoStep === 2 ? 'border-[#ff4522] scale-110' : 'border-transparent'}`}>
                       <div className={`px-2 py-0.5 rounded-full text-[8px] font-bold transition-all ${demoIsPrivate ? 'bg-[#ff4522] text-black' : 'text-gray-600'}`}>PRIVATE</div>
                       <div className={`px-2 py-0.5 rounded-full text-[8px] font-bold transition-all ${!demoIsPrivate ? 'bg-blue-500 text-white' : 'text-gray-600'}`}>PUBLIC</div>
                    </div>
                  </div>
                  <div className="flex-grow p-4 space-y-4">
                    <div className="flex gap-2">
                       <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"><Zap size={12} className="text-[#ff4522]" /></div>
                       <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none text-[11px] text-gray-300">Awaiting document...</div>
                    </div>
                    {demoStep >= 1 && (
                      <div className="flex gap-2 flex-row-reverse animate-in fade-in slide-in-from-right-2 duration-500">
                        <div className="bg-[#111] border border-[#ff4522]/40 p-3 rounded-2xl rounded-tr-none flex items-center gap-3">
                          <FileText size={16} className="text-[#ff4522]" />
                          <span className="text-[10px] font-bold">Research_Paper.pdf</span>
                        </div>
                      </div>
                    )}
                    {demoStep >= 3 && (
                      <div className="flex gap-2 animate-in fade-in slide-in-from-left-2 duration-500">
                         <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0"><Globe size={12} className="text-blue-400" /></div>
                         <div className="bg-blue-500/5 border border-blue-500/20 p-3 rounded-2xl rounded-tl-none text-[11px] w-full">
                            <p className="text-blue-400 font-bold text-[9px] mb-1 uppercase tracking-widest">Knowledge Published</p>
                            <p className="text-gray-400">Your analysis is now live for the community.</p>
                         </div>
                      </div>
                    )}
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: FAQ'S --- */}
      <section className="relative py-32 px-12 bg-[#0f1115] border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center">Common <span className="text-[#ff4522]">Questions</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="group border border-white/5 rounded-3xl bg-[#0D0D0D] overflow-hidden transition-all hover:border-white/10">
                <button onClick={() => setActiveFaq(activeFaq === index ? null : index)} className="w-full p-6 text-left flex items-center justify-between">
                  <span className="text-lg font-semibold tracking-tight">{faq.q}</span>
                  <div className={`transition-transform duration-300 ${activeFaq === index ? 'rotate-45 text-[#ff4522]' : 'rotate-0 text-gray-500'}`}><Plus size={20} /></div>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-6 pb-6 text-gray-500 leading-relaxed text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-12 bg-black border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <button onClick={scrollToTop} className="group flex flex-col items-center gap-2 text-gray-500 hover:text-[#ff4522] transition-all">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#ff4522] group-hover:bg-[#ff4522]/5 transition-all"><ChevronUp size={24} /></div>
            <span className="text-[9px] font-bold uppercase tracking-widest">Back to top</span>
          </button>
          <p className="text-[50px] text-gray-100 uppercase font-bold tracking-widest">Made By Kshitij Jain</p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(0.5deg); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .animate-in { animation: fadeIn 0.5s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
    </div>
  );
};

export default Landing;