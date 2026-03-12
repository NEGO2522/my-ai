import React, { useState } from 'react';
import { 
  ArrowUpRight, Star, ChevronUp, Twitter, Linkedin, Github, 
  Send, Zap, User, MoreHorizontal, FileText, Lock, Globe, Paperclip, Plus, Minus
} from 'lucide-react';

const Landing = () => {
  const [isPrivate, setIsPrivate] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);

  const features = [
    { id: '01', title: 'Smart Automation', desc: 'Reduce manual work and boost productivity.', icon: <path d="M12 2L14.5 9.5H22L16 14.5L18.5 22L12 17.5L5.5 22L8 14.5L2 9.5H9.5L12 2Z" /> },
    { id: '02', title: 'Scalable Growth', desc: 'AI solutions that grow with your business.', icon: <path d="M12 2L22 22H2L12 2Z" /> },
    { id: '03', title: 'Data-Driven Decisions', desc: 'Make smarter choices with AI-powered insights.', icon: <path d="M12 2L15 9H22L17 14L19 21L12 17L5 21L7 14L2 9H9L12 2Z" /> },
    { id: '04', title: 'Cost Efficiency', desc: 'Optimize resources and reduce expenses.', icon: <path d="M2 2H11V11H2V2ZM13 13H22V22H13V13Z" /> },
    { id: '05', title: 'Seamless Integration', desc: 'Easily connect AI with your existing systems.', icon: <path d="M12 2L22 12L12 22L2 12L12 2Z" /> },
    { id: '06', title: 'Future-Proof', desc: 'Stay ahead with cutting-edge AI technology.', icon: <rect x="4" y="4" width="16" height="16" rx="2" /> },
  ];

  const faqs = [
    { q: "How secure are my uploaded files?", a: "Your files are encrypted with AES-256 at rest and TLS 1.3 during transit. In 'Private' mode, data is never used for training." },
    { q: "What file formats are supported?", a: "We support PDF, CSV, JSON, and standard text formats up to 50MB per file." },
    { q: "Can I integrate this with my team?", a: "Yes, our Enterprise plan includes collaborative workspaces and role-based access control." },
    { q: "Does the AI support multiple languages?", a: "Absolutely. Our core model is multilingual and can analyze documents in over 40 languages." },
    { q: "Is there a limit on API requests?", a: "Free trials include 100 requests per month. Pro and Enterprise plans offer scalable or unlimited API access." }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-orange-500/30 overflow-x-hidden" style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}>
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none z-0">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(125deg, transparent 20%, rgba(255,69,34,0.4) 40%, rgba(255,69,34,0.8) 50%, rgba(255,69,34,0.4) 60%, transparent 80%)`,
              transform: 'skewX(-20deg) translateX(15%)',
              filter: 'blur(80px)'
            }}
          />
        </div>

        <nav className="relative z-50 flex items-center justify-between px-12 py-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#ff4522] rounded-full flex items-center justify-center">
              <Star size={20} fill="black" stroke="black" />
            </div>
            <div className="hidden md:flex items-center gap-2 bg-[#111]/80 backdrop-blur-2xl border border-white/5 rounded-full px-6 py-3">
              {['About us', 'Product', 'Features', 'Price', 'FAQ'].map((link, idx) => (
                <React.Fragment key={link}>
                  <a href="#" className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors">{link}</a>
                  {idx !== 4 && <div className="w-1 h-1 bg-gray-700 rounded-full mx-2" />}
                </React.Fragment>
              ))}
            </div>
          </div>
          <button className="bg-[#111] border border-white/10 px-8 py-3 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white/5 transition-all">
            Contact Us
          </button>
        </nav>

        <main className="relative z-10 px-12 flex-grow grid grid-cols-1 lg:grid-cols-12 items-center pb-20">
          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            <div className="mt-10">
              <h1 className="text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-tighter mb-10">
                AI Intelligence <br /> for your files
              </h1>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-sm tracking-wide hover:bg-[#ff4522] hover:text-white transition-all">START FREE TRIAL</button>
                <button className="bg-transparent border border-gray-800 px-10 py-5 rounded-full font-bold text-sm tracking-wide hover:border-white transition-all">DOCUMENTATION</button>
              </div>
            </div>
            <div className="max-w-md mt-16">
              <p className="text-gray-500 text-lg leading-relaxed">
                Upload any dataset or document. Analyze privately or share publicly with the community. 
                <span className="text-white"> Secured by AI.CORE.</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-20 lg:mt-0">
            <div className="animate-float relative w-[380px] h-[620px] bg-[#0A0A0A] rounded-[50px] p-3 border-[6px] border-[#1A1A1A] shadow-[0_50px_100px_-20px_rgba(255,69,34,0.2)]">
              <div className="relative h-full w-full bg-black rounded-[40px] border border-white/5 flex flex-col overflow-hidden">
                <div className="px-5 pt-8 pb-4 border-b border-white/5 bg-black/80 backdrop-blur-md">
                   <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#ff4522] rounded-lg flex items-center justify-center">
                          <Zap size={14} fill="black" stroke="black" />
                        </div>
                        <span className="text-[11px] font-bold">SecureBot</span>
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
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-3">Welcome! Upload a file to begin.</div>
                  </div>
                  
                  <div className="flex gap-2 flex-row-reverse">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center"><User size={10} className="text-gray-400" /></div>
                    <div className="space-y-2 max-w-[80%]">
                      <div className="bg-[#111] border border-[#ff4522]/30 rounded-2xl p-3 flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#ff4522]/10 rounded flex items-center justify-center">
                          <FileText size={16} className="text-[#ff4522]" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold">Annual_Report.pdf</p>
                          <p className="text-[8px] text-gray-500">2.4 MB • {isPrivate ? 'Encrypted' : 'Shared'}</p>
                        </div>
                      </div>
                      <div className="bg-white text-black p-3 rounded-2xl rounded-tr-none text-right">
                        <p className="text-[10px] font-medium">Extract the key financial metrics for me.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"><Star size={10} className="text-[#ff4522]" /></div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 w-full">
                      <p className="text-[9px] font-bold text-[#ff4522] uppercase tracking-widest mb-2">Analysis Complete</p>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[9px]">
                          <span className="text-gray-500">Revenue Growth</span>
                          <span className="text-green-400">+14%</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-green-400 w-[70%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-black border-t border-white/5 mt-auto">
                   <div className="relative flex items-center gap-2">
                      <button className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400"><Paperclip size={16} /></button>
                      <div className="relative flex-grow">
                        <input type="text" placeholder="Type message..." className="w-full bg-[#111] border border-white/10 rounded-full py-2.5 px-4 text-[10px] focus:outline-none" />
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
      <section className="relative py-32 px-12 bg-black border-t border-white/5 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Why Choosing <span className="text-[#ff4522]">My AI</span></h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {features.map((item) => (
            <div key={item.id} className="group p-8 rounded-[32px] bg-[#0D0D0D] border border-white/5 hover:border-[#ff4522]/30 transition-all duration-500 flex flex-col justify-between min-h-[240px]">
              <div className="flex justify-between items-start">
                <span className="text-gray-600 font-mono text-sm">[{item.id}]</span>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#ff4522] fill-current">{item.icon}</svg>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 tracking-tight group-hover:text-[#ff4522] transition-colors">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: FAQ'S --- */}
      <section className="relative py-32 px-12 bg-black border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center">Common <span className="text-[#ff4522]">Questions</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="group border border-white/5 rounded-3xl bg-[#0D0D0D] overflow-hidden transition-all hover:border-white/10"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <span className="text-lg font-semibold tracking-tight">{faq.q}</span>
                  <div className={`transition-transform duration-300 ${activeFaq === index ? 'rotate-45 text-[#ff4522]' : 'rotate-0 text-gray-500'}`}>
                    <Plus size={20} />
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-6 pb-6 text-gray-500 leading-relaxed text-sm">
                    {faq.a}
                  </p>
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
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#ff4522] group-hover:bg-[#ff4522]/5 transition-all">
              <ChevronUp size={24} />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-widest">Back to top</span>
          </button>
          <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">Made By Student (Kshitij Jain)</p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(0.5deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}} />
    </div>
  );
};

export default Landing;