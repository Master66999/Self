import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Terminal, 
  FileText, 
  Cpu, 
  Briefcase, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink,
  Volume2,
  X
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon, LeetCodeIcon, HackerRankIcon } from './Icons';
import { personalInfo, projects } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function CommandPalette({ isOpen, onClose, onOpenResume }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(prev => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'resume',
      title: 'Open ATS Resume Viewer & PDF Export',
      category: 'Documentation',
      icon: FileText,
      run: () => {
        onClose(false);
        onOpenResume();
      }
    },
    {
      id: 'fraudlock',
      title: 'Test FraudLock AI Sandbox (SHAP & ML)',
      category: 'Interactive Sandboxes',
      icon: Cpu,
      run: () => {
        onClose(false);
        window.location.hash = '#simulation-lab';
      }
    },
    {
      id: 'voltvision',
      title: 'Explore VoltVision AI Pune EV Forecaster',
      category: 'Interactive Sandboxes',
      icon: Cpu,
      run: () => {
        onClose(false);
        window.location.hash = '#simulation-lab';
      }
    },
    {
      id: 'cottonleaf',
      title: 'Test Cotton Leaf YOLOv8 Vision Analyzer',
      category: 'Interactive Sandboxes',
      icon: Cpu,
      run: () => {
        onClose(false);
        window.location.hash = '#simulation-lab';
      }
    },
    {
      id: 'projects',
      title: 'Jump to Production Systems Showcase',
      category: 'Navigation',
      icon: Briefcase,
      run: () => {
        onClose(false);
        window.location.hash = '#projects';
      }
    },
    {
      id: 'skills',
      title: 'View Verified Technical Tooling Matrix',
      category: 'Navigation',
      icon: Terminal,
      run: () => {
        onClose(false);
        window.location.hash = '#skills';
      }
    },
    {
      id: 'copy-email',
      title: `Copy Email: ${personalInfo.email}`,
      category: 'Contact',
      icon: copied ? Check : Copy,
      run: () => {
        navigator.clipboard.writeText(personalInfo.email);
        sounds.playSuccess();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    },
    {
      id: 'leetcode',
      title: 'Open LeetCode Profile (Atharva_lawange)',
      category: 'Coding Profiles',
      icon: LeetCodeIcon,
      run: () => {
        window.open(personalInfo.leetcode, '_blank');
        onClose(false);
      }
    },
    {
      id: 'hackerrank',
      title: 'Open HackerRank Profile (lawangeatharva)',
      category: 'Coding Profiles',
      icon: HackerRankIcon,
      run: () => {
        window.open(personalInfo.hackerrank, '_blank');
        onClose(false);
      }
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Social',
      icon: LinkedInIcon,
      run: () => {
        window.open(personalInfo.linkedin, '_blank');
        onClose(false);
      }
    },
    {
      id: 'github',
      title: 'Open GitHub Repositories',
      category: 'Social',
      icon: GitHubIcon,
      run: () => {
        window.open(personalInfo.github, '_blank');
        onClose(false);
      }
    },
    {
      id: 'audio-toggle',
      title: 'Toggle Tactile Audio Feedback',
      category: 'Settings',
      icon: Volume2,
      run: () => {
        sounds.toggle();
      }
    }
  ];

  const filtered = actions.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-150">
      
      <div className="relative w-full max-w-xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-slate-200">
          <Search className="w-5 h-5 text-emerald-600 mr-3" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command, project, or shortcut..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm font-sans text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-bold text-slate-400 bg-slate-100 rounded border border-slate-200">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-slate-400">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    sounds.playClick();
                    item.run();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-emerald-50/80 text-left transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 group-hover:bg-emerald-100 text-slate-700 group-hover:text-emerald-800 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-emerald-900">
                        {item.title}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-emerald-600">↵</span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] font-mono text-slate-400 flex items-center justify-between">
          <span>Navigation Quick Menu</span>
          <span>Press <strong>Esc</strong> to dismiss</span>
        </div>

      </div>

    </div>
  );
}

