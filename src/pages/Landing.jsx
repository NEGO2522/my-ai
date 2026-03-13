import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, FileText, Globe, Lock, ArrowRight } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#0f1115] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">My AI</h1>
          <Link
            to="/ai"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-200"
          >
            Open Assistant
          </Link>
        </header>

        <main className="pt-20 pb-16">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-wider text-gray-300">
            <Bot size={14} /> Document-Powered AI Assistant
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Upload docs, ask smarter questions, and share knowledge securely.
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            My AI helps you chat with your documents, keep private files protected, and publish
            public resources for your community.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/ai"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              Get Started <ArrowRight size={16} />
            </Link>
            <a
              href="#features"
              className="rounded-xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              View Features
            </a>
          </div>
        </main>

        <section id="features" className="grid gap-4 pb-10 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <FileText className="mb-3 text-blue-300" size={18} />
            <h3 className="mb-2 text-lg font-medium">Document Q&A</h3>
            <p className="text-sm text-gray-300">
              Upload documents and ask AI direct questions with context-aware responses.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <Globe className="mb-3 text-emerald-300" size={18} />
            <h3 className="mb-2 text-lg font-medium">Public Knowledge</h3>
            <p className="text-sm text-gray-300">
              Share selected documents publicly to help others in your field learn faster.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <Lock className="mb-3 text-amber-300" size={18} />
            <h3 className="mb-2 text-lg font-medium">Private by Choice</h3>
            <p className="text-sm text-gray-300">
              Keep sensitive files private and visible only to you at all times.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Landing;
