import React, { useEffect, useState } from 'react';
import { 
  X, 
  Layers, 
  CheckCircle2, 
  ExternalLink, 
  Cpu, 
  TrendingUp, 
  Server, 
  HelpCircle,
  Code2,
  Copy,
  Check,
  ArrowRight,
  GitBranch
} from 'lucide-react';
import { GitHubIcon } from './Icons';
import { sounds } from '../utils/soundEffects';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture' | 'code'
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { caseStudy } = project;

  const handleCopyCode = () => {
    if (!caseStudy?.codeSnippet) return;
    navigator.clipboard.writeText(caseStudy.codeSnippet);
    sounds.playSuccess();
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 bg-slate-50 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">Engineering Case Study</span>
            </div>
            <h3 className="text-2xl font-display font-extrabold text-slate-900 mt-1">
              {project.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab Switcher */}
            <div className="flex p-1 rounded-xl bg-slate-200/80 text-xs font-mono">
              <button
                onClick={() => {
                  sounds.playClick();
                  setActiveTab('architecture');
                }}
                className={`px-3 py-1.5 rounded-lg transition-all font-semibold ${
                  activeTab === 'architecture' ? 'bg-white text-slate-900 shadow-soft-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Architecture & Results
              </button>
              <button
                onClick={() => {
                  sounds.playClick();
                  setActiveTab('code');
                }}
                className={`px-3 py-1.5 rounded-lg transition-all font-semibold ${
                  activeTab === 'code' ? 'bg-white text-slate-900 shadow-soft-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Production Code
              </button>
            </div>

            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
          
          {activeTab === 'architecture' ? (
            <>
              {/* Tagline & Flow Diagram */}
              <div>
                <p className="text-sm sm:text-base font-sans text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Visual Pipeline Flow Diagram */}
                {caseStudy?.flowNodes && (
                  <div className="mt-5 p-5 rounded-2xl bg-slate-900 text-slate-100 shadow-inner">
                    <div className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                      <GitBranch className="w-3.5 h-3.5" />
                      Visual Ingestion & Inference Flow
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
                      {caseStudy.flowNodes.map((node, i) => (
                        <React.Fragment key={i}>
                          <div className="px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-medium">
                            {node}
                          </div>
                          {i < caseStudy.flowNodes.length - 1 && (
                            <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Problem Statement */}
              {caseStudy?.problem && (
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                  <div className="text-xs font-mono font-bold text-amber-900 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-600" />
                    The Core Problem & Context
                  </div>
                  <p className="text-xs sm:text-sm text-amber-950 font-sans leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>
              )}

              {/* Decision Rationales & Tradeoffs */}
              {caseStudy?.decisionRationale && (
                <div>
                  <h4 className="text-sm font-mono font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    Architectural Tradeoffs & Technology Choices
                  </h4>
                  <div className="space-y-3">
                    {caseStudy.decisionRationale.map((d, i) => (
                      <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="text-xs font-mono font-bold text-emerald-800">
                          {d.topic}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-600 mt-1 font-sans leading-relaxed">
                          {d.rationale}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantitative Benchmarks & Results */}
              {caseStudy?.results && (
                <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                  <div className="text-xs font-mono font-bold text-emerald-900 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    Quantitative Benchmark Results
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-950 font-sans leading-relaxed font-medium">
                    {caseStudy.results}
                  </p>
                  
                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono text-emerald-900 pt-3 border-t border-emerald-200">
                    {Object.entries(project.metrics).map(([k, v]) => (
                      <div key={k}>
                        <span className="uppercase text-[10px] text-emerald-700 block font-semibold">{k}:</span>
                        <strong className="text-sm">{v}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Production Deployment */}
              {caseStudy?.deployment && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 flex items-start gap-3">
                  <Server className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Deployment Packaging:</strong>
                    <span>{caseStudy.deployment}</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Production Code Tab */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-emerald-600" />
                    Production Python Pipeline Implementation
                  </h4>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    Clean, modular inference endpoint with typing and error handling
                  </p>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors shadow-soft-sm"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied Snippet' : 'Copy Code'}</span>
                </button>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed overflow-x-auto shadow-inner border border-slate-800">
                <pre>{caseStudy?.codeSnippet}</pre>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
                💡 <strong className="text-slate-900">Engineering Note:</strong> All production code follows PEP 8 standards with strict type hints, exception handlers, and input validation schemas.
              </div>
            </div>
          )}

        </div>

        {/* Bottom Actions */}
        <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sounds.playClick()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 transition-colors shadow-soft-sm"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-soft"
          >
            Close Case Study
          </button>
        </div>

      </div>

    </div>
  );
}
