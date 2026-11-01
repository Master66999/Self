import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Terminal,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Filter,
  Cpu,
  Layers
} from 'lucide-react';
import { GitHubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function ProjectsSection({ onSelectCaseStudy }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI / Machine Learning', 'Data Science & Analytics', 'Computer Vision & Deep Learning', 'Full Stack & Applied AI'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">

      {/* Section Header with GSAP triggers */}
      <div className="gsap-section-header flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <div className="gsap-header-badge inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-700 font-semibold mb-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            03 // ENGINEERED SYSTEMS
          </div>
          <h2 className="gsap-header-title text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Featured Production Architectures.
          </h2>
          <p className="gsap-header-sub mt-3 text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Engineered with real-world production constraints: handling severe class imbalance, explainability for audits, spatial indexing, and sub-second edge inference.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sounds.playClick();
                setFilter(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${filter === cat
                  ? 'bg-emerald-600 text-white font-semibold shadow-soft'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            className="gsap-project-card group bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-soft hover:shadow-soft-lg hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-emerald-100/50 via-teal-50/20 to-transparent rounded-bl-full pointer-events-none group-hover:from-emerald-200/50 transition-all duration-500" />

            <div>
              {/* Top Meta Header */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-mono font-semibold text-emerald-800">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold">
                  SYS // 0{idx + 1}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {project.name}
              </h3>
              <p className="text-xs font-mono text-emerald-700 font-medium mt-1">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                {project.description}
              </p>

              {/* Architectural Pipeline Flow */}
              <div className="mt-5 p-4 rounded-2xl bg-slate-900 text-slate-100 shadow-inner">
                <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 mb-1.5 flex items-center gap-1.5 font-semibold">
                  <Layers className="w-3.5 h-3.5" />
                  Pipeline Architecture
                </div>
                <div className="text-xs font-mono text-slate-300 leading-relaxed">
                  {project.architecture}
                </div>
              </div>

              {/* Highlights Bullet List */}
              <div className="mt-6 space-y-2.5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-sans leading-normal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions & Metrics */}
            <div className="mt-9 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">

              {/* Metrics Readout */}
              <div className="flex items-center gap-5 text-xs font-mono">
                {Object.entries(project.metrics).slice(0, 2).map(([key, val]) => (
                  <div key={key}>
                    <span className="text-slate-400 uppercase text-[10px] block font-semibold">{key}:</span>
                    <span className="text-slate-900 font-bold text-sm">{val}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {project.liveDemoUrl && project.liveDemoUrl.startsWith('http') ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sounds.playClick()}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-soft-sm"
                    title="Open live production deployment"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live App</span>
                  </a>
                ) : (
                  <a
                    href="#simulation-lab"
                    onClick={() => sounds.playClick()}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors shadow-soft-sm"
                  >
                    <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Test Sandbox</span>
                  </a>
                )}

                <button
                  onClick={() => {
                    sounds.playClick();
                    if (onSelectCaseStudy) onSelectCaseStudy(project);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 transition-colors shadow-soft-sm"
                  title="View detailed engineering case study & code"
                >
                  <Layers className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Case Study</span>
                </button>

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sounds.playClick()}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors"
                  title="View GitHub Repository"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
              </div>

            </div>

          </article>
        ))}
      </div>

    </section>
  );
}
