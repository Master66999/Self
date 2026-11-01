import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  ExternalLink,
  Mail,
  GraduationCap,
  Layers,
  Sparkles,
  Code,
  ShieldCheck,
  TrendingUp,
  Award
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon, LeetCodeIcon, HackerRankIcon } from './Icons';
import { personalInfo, stats } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

const ROLES = [
  "Computer Science & AI Engineer",
  "Machine Learning Specialist",
  "Computer Vision Researcher",
  "Geospatial Systems Architect"
];

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState('suit'); // 'suit' or 'blazer'

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-light-grid overflow-hidden">
      
      {/* Decoupled 16:9 Architectural Background Plate */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img 
          src="/white_emerald_bg.jpg" 
          alt="" 
          aria-hidden="true" 
          className="w-full h-full object-cover object-center opacity-30 mix-blend-multiply filter blur-[0.4px] scale-105 transition-transform duration-1000"
        />
        {/* Optical gradient masks for smooth transition into page body */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBFDFB]/50 via-[#FBFDFB]/85 to-[#FBFDFB]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBFDFB] via-transparent to-[#FBFDFB]/80" />
      </div>

      {/* Decorative ambient emerald glow fields */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto w-full">
        
        {/* Top Editorial Index Pill + Dynamic Ticker */}
        <div className="gsap-hero-badge flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 shadow-soft-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-800">
              01 // ATHARVA LAWANGE
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-mono text-slate-600 shadow-soft-sm">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Pimpri Chinchwad University • CGPI 9.48 / 10.0</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/60 border border-emerald-300/70 text-xs font-mono text-emerald-900 shadow-soft-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span key={roleIndex} className="ticker-slide-in font-medium">
              {ROLES[roleIndex]}
            </span>
          </div>
        </div>

        {/* Asymmetric Architectural Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Editorial Display Typography (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-slate-900">
              <span className="gsap-hero-title-line block">
                ENGINEERING
              </span>
              <span className="gsap-hero-title-line block text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600">
                DATA MATRICES
              </span>
              <span className="gsap-hero-title-line block text-slate-800 font-bold">
                INTO REALITY.
              </span>
            </h1>

            <p className="gsap-hero-desc mt-6 text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl font-normal">
              I am a <strong className="text-slate-900 font-semibold">{ROLES[roleIndex]}</strong> specializing in{' '}
              <a href="#projects" className="animated-text-link font-medium text-emerald-800">production machine learning</a>,{' '}
              <a href="#simulation-lab" className="animated-text-link font-medium text-emerald-800">computer vision architectures</a>, and{' '}
              <a href="#projects" className="animated-text-link font-medium text-emerald-800">geospatial EV placement forecasting</a>. 
              Rather than generic templates, I build mathematically rigorous, low-latency intelligence pipelines that solve high-stakes challenges.
            </p>

            {/* Direct Anti-Generic Actions */}
            <div className="gsap-hero-actions mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#simulation-lab"
                onClick={() => sounds.playClick()}
                className="btn-magnetic group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20 hover:shadow-green-glow"
              >
                <Cpu className="w-4 h-4 text-emerald-100 group-hover:rotate-12 transition-transform" />
                <span>Launch Neural Sandbox</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => {
                  sounds.playSuccess();
                  onOpenResume();
                }}
                className="btn-magnetic inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-soft transition-all hover:border-emerald-400 group"
              >
                <FileText className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                <span>ATS Resume Preview</span>
              </button>

              <a
                href="#projects"
                onClick={() => sounds.playClick()}
                className="animated-text-link inline-flex items-center gap-2 px-3 py-3.5 font-mono text-xs font-medium uppercase tracking-wider text-slate-600 hover:text-emerald-700 transition-colors"
              >
                <span>View 5 Deployed Systems</span>
                <span className="text-emerald-600 font-bold">↓</span>
              </a>
            </div>

            {/* Social & Coding Profile Verified Links */}
            <div className="mt-9 pt-7 border-t border-slate-200 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-slate-500">
              <span className="text-slate-400 uppercase tracking-widest text-[11px] font-semibold">CODING PROFILES:</span>
              
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playClick()}
                className="animated-text-link flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 transition-colors font-medium shadow-soft-sm"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-amber-600" /> LeetCode
              </a>

              <a
                href={personalInfo.hackerrank}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playClick()}
                className="animated-text-link flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors font-medium shadow-soft-sm"
              >
                <HackerRankIcon className="w-3.5 h-3.5 text-emerald-600" /> HackerRank
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playClick()}
                className="animated-text-link flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 transition-colors font-medium shadow-soft-sm"
              >
                <GitHubIcon className="w-3.5 h-3.5" /> GitHub
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playClick()}
                className="animated-text-link flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200 hover:bg-teal-100 transition-colors font-medium shadow-soft-sm"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-teal-600" /> LinkedIn
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                onClick={() => sounds.playClick()}
                className="animated-text-link flex items-center gap-1.5 hover:text-emerald-700 transition-colors font-medium ml-1"
              >
                <Mail className="w-4 h-4 text-emerald-600" /> Email
              </a>
            </div>

          </div>

          {/* Right Column: Profile Portrait Card + Code HUD + Telemetry (5 cols) */}
          <div className="gsap-hero-hud lg:col-span-5 flex flex-col gap-4">
            
            {/* User Real Professional Photograph in Executive Suit */}
            <div className="glass-card-light rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-soft-lg flex flex-col sm:flex-row items-center sm:items-start gap-5 relative overflow-hidden group">
              <div className="relative shrink-0">
                <img 
                  src={
                    selectedPhoto === 'suit' 
                      ? "/atharva_suit_portrait.jpg" 
                      : selectedPhoto === 'original' 
                      ? "/atharva_original.jpg" 
                      : "/atharva_blazer_portrait.jpg"
                  } 
                  alt="Atharva Lawange - AI & Computer Science Engineer" 
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border-2 border-emerald-500 shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
                </span>
              </div>

              <div className="min-w-0 flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Active Candidate
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Pune, India</span>
                </div>
                <h3 className="font-display font-extrabold text-slate-900 text-lg sm:text-xl mt-1 truncate">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-slate-600 font-sans mt-0.5">
                  B.Tech CSE (AI & DS) • Honors 9.48
                </p>

                {/* Attire switch pill */}
                <div className="mt-2.5 flex items-center justify-center sm:justify-start gap-1.5 flex-wrap">
                  <button 
                    onClick={() => setSelectedPhoto('suit')} 
                    className={`text-[10px] font-mono px-2.5 py-0.5 rounded-md transition-all ${
                      selectedPhoto === 'suit' 
                        ? 'bg-emerald-700 text-white font-semibold shadow-sm' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Tailored Suit
                  </button>
                  <button 
                    onClick={() => setSelectedPhoto('original')} 
                    className={`text-[10px] font-mono px-2.5 py-0.5 rounded-md transition-all ${
                      selectedPhoto === 'original' 
                        ? 'bg-emerald-700 text-white font-semibold shadow-sm' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Original Photo
                  </button>
                  <button 
                    onClick={() => setSelectedPhoto('blazer')} 
                    className={`text-[10px] font-mono px-2.5 py-0.5 rounded-md transition-all ${
                      selectedPhoto === 'blazer' 
                        ? 'bg-emerald-700 text-white font-semibold shadow-sm' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Studio Blazer
                  </button>
                </div>

                <div className="mt-2 flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Ready for Technical Rounds
                  </span>
                </div>
              </div>
            </div>

            {/* Live Model Telemetry Card */}
            <div className="glass-card-light rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-soft-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-100/60 rounded-full blur-2xl pointer-events-none group-hover:bg-teal-100/80 transition-all" />
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700">
                    System Kernel Active
                  </span>
                </div>
                <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                  FastAPI • Sub-40ms
                </span>
              </div>

              {/* Code HUD Display - Light Syntax */}
              <div className="mt-4 font-mono text-[12px] leading-relaxed bg-slate-900 p-4 rounded-2xl text-slate-200 shadow-inner overflow-x-auto">
                <div className="text-slate-400 mb-1">// Atharva Lawange: Computational Pipeline</div>
                <div><span className="text-emerald-400">from</span> core.models <span className="text-emerald-400">import</span> XGBoost, YOLOv8</div>
                <div><span className="text-emerald-400">from</span> explainability <span className="text-emerald-400">import</span> TreeSHAP</div>
                <div><span className="text-teal-300">pipeline</span> = InferenceEngine(</div>
                <div className="pl-4 text-slate-300">github=<span className="text-amber-300">'Master66999'</span>,</div>
                <div className="pl-4 text-slate-300">leetcode=<span className="text-amber-300">'Atharva_lawange'</span>,</div>
                <div className="pl-4 text-slate-300">academic_cgpi=<span className="text-emerald-300 font-bold">9.48</span></div>
                <div>)</div>
                <div className="mt-2 text-emerald-400 font-semibold text-[11px]">
                  ➜ Inference Ready • Latency: 22ms • Tests: 100% Passed
                </div>
              </div>

              {/* Verified Metrics Counter */}
              <div className="grid grid-cols-2 gap-3.5 mt-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-medium">Academic CGPI</div>
                  <div className="text-3xl font-display font-extrabold text-emerald-700 mt-0.5">
                    9.48<span className="text-xs text-slate-400 font-mono"> / 10.0</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Pimpri Chinchwad Univ.</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-medium">Deployed Systems</div>
                  <div className="text-3xl font-display font-extrabold text-slate-900 mt-0.5">
                    5+<span className="text-xs text-emerald-600 font-mono font-medium"> Live</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Vercel, Render & Netlify</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="gsap-stat-pill p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-emerald-300 transition-all"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-medium">
                {stat.label}
              </div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-1">
                {stat.value}
                <span className="text-xs font-mono font-semibold text-emerald-600 ml-1.5">{stat.suffix}</span>
              </div>
              <div className="text-xs text-slate-500 mt-1 font-mono">
                {stat.note}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
