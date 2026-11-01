import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, LeetCodeIcon, HackerRankIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="no-print border-t border-slate-200 bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-lg text-slate-900 tracking-tight">
              Atharva Lawange
            </span>
            <span className="text-slate-400 font-mono text-xs">/</span>
            <span className="text-xs font-mono font-semibold text-emerald-700">B.Tech CSE (AI & DS)</span>
          </div>
          <p className="text-xs text-slate-500 font-mono mt-1">
            Pimpri Chinchwad University, Pune • CGPI 9.48
          </p>
        </div>

        {/* Center: Quick links */}
        <div className="flex items-center gap-6 text-xs font-mono text-slate-600">
          <a href="#projects" className="hover:text-emerald-700 transition-colors">Projects</a>
          <a href="#simulation-lab" className="hover:text-emerald-700 transition-colors">Sandboxes</a>
          <a href="#skills" className="hover:text-emerald-700 transition-colors">Skills</a>
          <a href="#education" className="hover:text-emerald-700 transition-colors">Education</a>
          <button 
            onClick={() => {
              sounds.playSuccess();
              onOpenResume();
            }} 
            className="hover:text-emerald-700 transition-colors font-semibold"
          >
            ATS Resume
          </button>
        </div>

        {/* Right: Back to top & social */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200 transition-colors"
            title="LeetCode Profile"
          >
            <LeetCodeIcon className="w-4 h-4 text-amber-600" />
          </a>
          <a
            href={personalInfo.hackerrank}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            title="HackerRank Profile"
          >
            <HackerRankIcon className="w-4 h-4 text-emerald-600" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-slate-50 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200 transition-colors"
            title="LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
            title="GitHub (Master66999)"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 transition-colors shadow-soft-sm"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-100 text-center text-xs font-mono text-slate-400">
        Engineered with bespoke GSAP scroll triggers, generous optical spacing, and modern White & Emerald theme.
      </div>
    </footer>
  );
}
