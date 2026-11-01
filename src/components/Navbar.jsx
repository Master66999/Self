import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Search,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function Navbar({ onOpenResume, onOpenCommandPalette }) {
  const [soundActive, setSoundActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const nextState = sounds.toggle();
    setSoundActive(nextState);
  };

  // Streamlined to 4 high-impact, essential navigation items
  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Neural Lab', href: '#simulation-lab' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      
      {/* Ultra-Sleek Floating Island Capsule Dock */}
      <nav className={`pointer-events-auto w-full max-w-4xl rounded-full transition-all duration-300 border px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl border-emerald-300/80 shadow-green-glow/20' 
          : 'bg-white/85 backdrop-blur-lg border-slate-200/90'
      }`}>
        
        {/* Left Side: Avatar & Identity Pill */}
        <div className="flex items-center gap-2.5">
          <a 
            href="#" 
            onClick={() => sounds.playClick()}
            className="group flex items-center gap-2 text-slate-900"
          >
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-emerald-500 shadow-soft-sm group-hover:scale-105 transition-all">
              <img 
                src="/profile_photo.jpg" 
                alt="Atharva Lawange" 
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 border border-white"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-xs sm:text-sm tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">
                Atharva Lawange
              </span>
              <span className="text-[10px] font-mono text-emerald-700 font-semibold hidden sm:inline-block">
                AI & SWE • Honors 9.48
              </span>
            </div>
          </a>
        </div>

        {/* Center: Streamlined Navigation Links (4 core links) */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/60">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => sounds.playClick()}
              className="animated-text-link px-3.5 py-1 rounded-full text-xs font-mono font-medium text-slate-600 hover:text-emerald-800 hover:bg-white transition-all shadow-none hover:shadow-soft-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions: Search (⌘K), ATS Resume Pill, Audio */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Quick Search (Cmd + K) */}
          <button
            onClick={() => {
              sounds.playClick();
              if (onOpenCommandPalette) onOpenCommandPalette();
            }}
            title="Quick Search & Navigation (Ctrl+K / ⌘K)"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 transition-colors text-xs font-mono font-medium"
          >
            <Search className="w-3.5 h-3.5 text-emerald-600" />
            <kbd className="hidden sm:inline-block font-sans text-[10px] font-bold text-slate-500">⌘K</kbd>
          </button>

          {/* ATS Resume Primary Action Button */}
          <button
            onClick={() => {
              sounds.playSuccess();
              onOpenResume();
            }}
            className="btn-magnetic flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transition-all shadow-sm hover:shadow-green-glow"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>ATS Resume</span>
          </button>

          {/* Audio Feedback Switch */}
          <button
            onClick={handleSoundToggle}
            title={soundActive ? "Mute tactile audio cues" : "Enable tactile audio cues"}
            className={`p-1.5 sm:p-2 rounded-full border transition-all ${
              soundActive 
                ? 'bg-emerald-50 border-emerald-300 text-emerald-700' 
                : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50'
            }`}
          >
            {soundActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => {
              sounds.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </nav>

      {/* Mobile Navigation Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-14 sm:top-16 left-4 right-4 p-4 rounded-3xl bg-white/95 border border-slate-200 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 max-w-sm mx-auto">
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100 text-xs font-mono text-emerald-700 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Atharva Lawange • AI & SWE
          </div>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  sounds.playClick();
                  setMobileMenuOpen(false);
                }}
                className="px-3.5 py-2 rounded-xl text-xs font-mono text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            ))}
            <button
              onClick={() => {
                sounds.playSuccess();
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full mt-2 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-mono font-bold bg-emerald-600 text-white shadow-soft"
            >
              <FileText className="w-3.5 h-3.5" />
              View & Download ATS Resume
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
