import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'AI Solutions & Integration',
    budgetRange: '$25k - $50k',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4f46e5', '#7c3aed', '#2563eb']
        });
      } catch {
        // Fallback
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      <div className="bg-white p-5 sm:p-8 md:p-14 rounded-3xl border border-slate-200 shadow-xl shadow-indigo-500/5 relative overflow-hidden">
        {/* Background Subtle Gradient */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-mono font-semibold border border-indigo-100 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-3 sm:mb-4">
            Have Something <span className="text-indigo-600">Worth Building?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Tell us about your project or idea. We’d love to explore how we can help you build it.
          </p>
        </div>

        {/* Form Submission Confirmation */}
        {isSubmitted ? (
          <div className="relative z-10 py-12 sm:py-16 text-center animate-in zoom-in-95 duration-300">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center shadow-md">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-600" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mb-2">
              Message Received!
            </h3>

            <p className="text-slate-600 text-xs sm:text-base max-w-md mx-auto mb-8 font-body leading-relaxed">
              Thank you for reaching out. A member of our engineering team will get back to you within 24 hours.
            </p>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormState({
                  name: '',
                  email: '',
                  company: '',
                  projectType: 'AI Solutions & Integration',
                  budgetRange: '$25k - $50k',
                  message: ''
                });
              }}
              className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-xs font-mono font-semibold text-slate-800 uppercase tracking-wider rounded-xl border border-slate-300 transition-colors"
            >
              SEND ANOTHER MESSAGE
            </button>
          </div>
        ) : (
          /* Contact Form */
          <form onSubmit={handleSubmit} className="relative z-10 space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase font-semibold mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:bg-white focus:outline-none transition-colors text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:bg-white focus:outline-none transition-colors text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Company */}
              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase font-semibold mb-2">Company / Organization</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formState.company}
                  onChange={e => setFormState({ ...formState, company: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:bg-white focus:outline-none transition-colors text-sm"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase font-semibold mb-2">Project Type</label>
                <select
                  value={formState.projectType}
                  onChange={e => setFormState({ ...formState, projectType: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white focus:outline-none transition-colors text-sm"
                >
                  <option value="AI Solutions & Integration">AI Solutions & Integration</option>
                  <option value="Modern Web Application">Modern Web Application</option>
                  <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                  <option value="Product Development & Design">Product Development & Design</option>
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase font-semibold mb-2">Estimated Budget</label>
                <select
                  value={formState.budgetRange}
                  onChange={e => setFormState({ ...formState, budgetRange: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white focus:outline-none transition-colors text-sm"
                >
                  <option value="< $25k">&lt; $25k</option>
                  <option value="$25k - $50k">$25k - $50k</option>
                  <option value="$50k - $100k">$50k - $100k</option>
                  <option value="$100k+">$100k+</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-mono text-slate-700 uppercase font-semibold mb-2">Project Vision / Message *</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your project goals, scope, or timeline..."
                value={formState.message}
                onChange={e => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:bg-white focus:outline-none transition-colors text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 sm:py-4 bg-indigo-600 text-white font-heading font-bold text-xs sm:text-sm tracking-widest uppercase rounded-xl hover:bg-slate-900 shadow-lg shadow-indigo-500/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.01]"
            >
              {isSubmitting ? (
                <>
                  <Send className="w-4 h-4 animate-spin" />
                  <span>SENDING MESSAGE...</span>
                </>
              ) : (
                <>
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
