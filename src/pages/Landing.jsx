import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  Brain,
  FileText,
  Globe,
  Lock,
  MessageSquare,
  ShieldCheck,
  Users,
} from 'lucide-react';

const featureCards = [
  {
    title: 'Document Q&A',
    description: 'Ask questions about uploaded files and get context-aware answers from the assistant.',
    icon: FileText,
    iconColor: 'text-blue-300',
  },
  {
    title: 'Smart Responses',
    description: 'Responses are grounded in document content before the assistant answers.',
    icon: Brain,
    iconColor: 'text-violet-300',
  },
  {
    title: 'Knowledge Sharing',
    description: 'Public documents can become shared resources for people in the same field.',
    icon: Users,
    iconColor: 'text-emerald-300',
  },
];

const visibilityModes = [
  {
    mode: 'Public',
    description: 'Visible and queryable by other users in the same field.',
    icon: Globe,
    tone: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
  },
  {
    mode: 'Private',
    description: 'Accessible only to the owner for sensitive or personal content.',
    icon: Lock,
    tone: 'border-amber-400/30 bg-amber-400/10 text-amber-200',
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <Bot size={20} aria-hidden="true" />
            <span>My AI</span>
          </div>
          <Link
            to="/ai"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-200"
          >
            Open Assistant
          </Link>
        </header>

        <main className="pb-14 pt-16 md:pt-20">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-wider text-gray-300">
            <MessageSquare size={14} aria-hidden="true" /> AI-Powered Knowledge Platform
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Upload documents, chat with context, and choose what stays private.
          </h1>

          <p className="mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
            My AI is an intelligent document assistant where you can upload files, ask questions,
            and control visibility with public or private access.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/ai"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              Start Chatting <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href="#features"
              className="rounded-xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Explore Features
            </a>
          </div>
        </main>

        <section className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <h2 className="flex items-center gap-2 text-2xl font-semibold">
            <ShieldCheck size={20} className="text-cyan-300" aria-hidden="true" />
            Why teams use My AI
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-gray-300 md:text-base">
            It combines AI chat, document context, and access control into one clean workflow for
            daily research and collaboration.
          </p>
        </section>

        <section id="features" className="grid gap-4 pb-6 md:grid-cols-3">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Icon className={`mb-3 ${card.iconColor}`} size={18} aria-hidden="true" />
                <h2 className="mb-2 text-lg font-medium">{card.title}</h2>
                <p className="text-sm text-gray-300">{card.description}</p>
              </article>
            );
          })}
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Visibility control built in</h2>
          <p className="mt-2 max-w-3xl text-sm text-gray-300 md:text-base">
            Every uploaded document can be managed by you. Share it publicly for collaboration or
            keep it private for owner-only access.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {visibilityModes.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.mode} className={`rounded-xl border p-4 ${item.tone}`}>
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
                    <Icon size={14} aria-hidden="true" />
                    {item.mode}
                  </div>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
