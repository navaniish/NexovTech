import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot } from 'lucide-react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'ai',
    text: 'Hello! I am NexovTech AI Assistant. How can I help you scope your web, AI, or cloud project today?',
    timestamp: 'Just now',
  },
];

const SUGGESTIONS = [
  'What services do you offer?',
  'Tell me about your AI solutions',
  'What is your typical project timeline?',
  'How do I book a discovery call?',
];

export const NexovChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateAiReply = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('service') || q.includes('offer') || q.includes('build')) {
      return 'We offer 6 core disciplines: Web Engineering (React, Next.js, WebGL), AI Solutions & Integration (RAG, LLM Agents), Cloud & Infrastructure (Kubernetes, AWS/GCP), Workflow Automation, UI/UX Design Systems, and Full-Stack Product Development!';
    }
    if (q.includes('ai') || q.includes('llm') || q.includes('rag') || q.includes('agent')) {
      return 'Our AI division builds practical LLM agent networks, custom RAG search engines on your company documents, decision intelligence agents, and automated data pipelines.';
    }
    if (q.includes('timeline') || q.includes('time') || q.includes('long') || q.includes('duration')) {
      return 'Typical projects take between 2 to 6 weeks depending on scope. MVPs and web apps usually take 3–5 weeks, while targeted AI integrations take 2–4 weeks.';
    }
    if (q.includes('cost') || q.includes('price') || q.includes('budget') || q.includes('rate')) {
      return 'Project budgets range from <$25k for targeted builds up to $100k+ for full enterprise systems. Scroll to our Contact section below to request a tailored estimate!';
    }
    if (q.includes('phone') || q.includes('number') || q.includes('call') || q.includes('book') || q.includes('contact') || q.includes('hire') || q.includes('talk')) {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
      return 'You can reach us directly via Phone at +91 7075708980 or Email at contact@nexovtech.com! I have also highlighted our Contact form for you below.';
    }
    return `Thank you for asking about "${query}". NexovTech specializes in custom high-performance software and AI architectures. Would you like to schedule a free 30-minute consultation or discuss your technical stack?`;
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const replyText = generateAiReply(text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* ── Floating Launcher Trigger Button ──────────────────────────────── */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[6000] group flex items-center gap-3 p-1.5 pr-4 rounded-full bg-white border border-slate-200 shadow-2xl shadow-indigo-500/25 hover:scale-105 transition-all duration-300 focus:outline-none"
        >
          {/* Logo Frame */}
          <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-br from-indigo-500 via-violet-500 to-teal-400 shadow-md shadow-indigo-500/20 shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img src="/logo.jpeg" alt="NexovTech Logo" className="w-full h-full object-cover" />
            </div>
            {/* Live Green Online Dot */}
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
          </div>

          <div className="text-left">
            <div className="flex items-center gap-1 text-xs font-bold font-heading text-slate-900">
              <span>NexovTech AI</span>
            </div>
            <div className="text-[10px] font-mono text-emerald-600 font-semibold">Online · Ask Anything</div>
          </div>
        </button>
      )}

      {/* ── Chat Window ─────────────────────────────────────────────────── */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 z-[6000] w-[calc(100vw-3rem)] sm:w-[400px] h-[520px] rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-indigo-500/20 flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-5 duration-300"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              {/* Logo Frame */}
              <div className="w-9 h-9 rounded-xl p-0.5 bg-gradient-to-br from-indigo-400 to-teal-400 shadow-sm shrink-0">
                <div className="w-full h-full rounded-[10px] overflow-hidden bg-white">
                  <img src="/logo.jpeg" alt="NexovTech Logo" className="w-full h-full object-cover" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-heading font-bold text-sm tracking-wide">NexovTech AI</h3>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/30 text-indigo-300 border border-indigo-400/30">
                    STUDIO
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available to assist</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/50">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 border border-indigo-200 shadow-sm mt-0.5">
                    <img src="/logo.jpeg" alt="AI" className="w-full h-full object-cover" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-none shadow-md shadow-indigo-500/10 font-medium'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                  <div
                    className={`text-[9px] font-mono mt-1 text-right ${
                      msg.sender === 'user' ? 'text-indigo-200' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 justify-start items-center">
                <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 border border-indigo-200 shadow-sm">
                  <img src="/logo.jpeg" alt="AI" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-3 text-xs text-slate-400 flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
                  <span>NexovTech AI is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions Chips */}
          {messages.length < 3 && (
            <div className="px-3 pt-2 pb-1 bg-white border-t border-slate-100 flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((sug, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(sug)}
                  className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 hover:bg-indigo-100 transition-colors"
                >
                  {sug}
                </button>
              ))}
            </div>
          )}

          {/* Input Bar */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about services, timeline, pricing..."
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-indigo-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-900 transition-colors shadow-md shadow-indigo-500/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
