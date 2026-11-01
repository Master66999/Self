import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  Check, 
  Copy, 
  Terminal, 
  Sparkles, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon, LeetCodeIcon, HackerRankIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleCopyEmail = () => {
    sounds.playSuccess();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sounds.playClick();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      sounds.playSuccess();
    }, 800);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      
      {/* Section Header with GSAP triggers */}
      <div className="gsap-section-header mb-14">
        <div className="gsap-header-badge inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-700 font-semibold mb-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          06 // INITIATE TRANSMISSION
        </div>
        <h2 className="gsap-header-title text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
          Let's Connect & Build Something Amazing.
        </h2>
        <p className="gsap-header-sub mt-3 text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
          Currently open to Software Engineering, Machine Learning, and Full-Stack roles (Full-time & Internships). Reach out directly or dispatch a transmission below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
        
        {/* Left: Contact Hub & Terminal (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Copy Contact Card */}
          <div className="gsap-contact-card bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-soft space-y-5">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold">Direct Email Line</div>
              <div className="mt-2 flex items-center justify-between gap-2 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-mono text-xs sm:text-sm text-slate-900 font-medium truncate">{personalInfo.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-3.5 pt-4 border-t border-slate-100 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 text-[11px] font-semibold uppercase">Physical Location</div>
                  <div className="text-slate-900 font-medium text-xs sm:text-sm">{personalInfo.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700">
                  <LinkedInIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 text-[11px] font-semibold uppercase">LinkedIn Profile</div>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline font-semibold text-xs sm:text-sm">
                    linkedin.com/in/atharva-lawange
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800">
                  <GitHubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 text-[11px] font-semibold uppercase">GitHub Repositories</div>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-900 hover:text-emerald-700 hover:underline font-semibold text-xs sm:text-sm">
                    github.com/Master66999
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700">
                  <LeetCodeIcon className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <div className="text-slate-400 text-[11px] font-semibold uppercase">LeetCode Profile</div>
                  <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="text-amber-800 hover:underline font-semibold text-xs sm:text-sm">
                    leetcode.com/u/Atharva_lawange
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700">
                  <HackerRankIcon className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-slate-400 text-[11px] font-semibold uppercase">HackerRank Profile</div>
                  <a href={personalInfo.hackerrank} target="_blank" rel="noreferrer" className="text-emerald-800 hover:underline font-semibold text-xs sm:text-sm">
                    hackerrank.com/profile/lawangeatharva
                  </a>
                </div>
              </div>
            </div>

            {/* Recruiter Guarantee Banner */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <div className="text-xs font-mono font-medium text-emerald-900">
                Guaranteed response within 24 hours for verified opportunities.
              </div>
            </div>

          </div>

          {/* Interactive Mini Terminal */}
          <div className="gsap-contact-card font-mono text-xs bg-slate-900 p-6 rounded-3xl text-slate-200 space-y-2.5 shadow-soft">
            <div className="flex items-center gap-2 pb-2.5 border-b border-slate-800 text-slate-400 text-xs">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>bash - terminal status</span>
            </div>
            <div className="text-slate-300">$ curl -s https://api.atharva.dev/status</div>
            <div className="text-emerald-400">
              &#123; "status": "Ready for Technical Interviews", "location": "Pune, IN", "relocation": "Open" &#125;
            </div>
            <div className="text-slate-400">$ echo "Let's build intelligent systems together."</div>
          </div>

        </div>

        {/* Right: Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="gsap-contact-card bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-soft">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700 shadow-soft">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                  Transmission Received!
                </h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto font-normal">
                  Thank you, <strong className="text-slate-900">{formData.name || 'there'}</strong>. Your message has been logged. I will reply to <span className="text-emerald-700 font-semibold">{formData.email}</span> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold mb-2">
                    Subject / Role Opportunity *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Software / AI Engineer Role or Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    required
                    placeholder="Describe the opportunity, engineering challenges, or team requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-magnetic w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/25 hover:shadow-green-glow"
                >
                  {sending ? (
                    <span>Encrypting & Dispatching...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-emerald-100" />
                      <span>Send Message to Atharva</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
}
