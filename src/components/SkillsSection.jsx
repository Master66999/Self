import React, { useState } from 'react';
import { 
  Code, 
  Search, 
  Terminal, 
  Sparkles, 
  Boxes,
  Database,
  Cpu,
  Globe,
  Wrench
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    "AI & Machine Learning": Cpu,
    "Data Science & Analytics": Boxes,
    "Web & Full-Stack Systems": Globe,
    "Databases, Cloud & DevTools": Database,
  };

  return (
    <section id="skills" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      
      {/* Section Header with GSAP triggers */}
      <div className="gsap-section-header flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <div className="gsap-header-badge inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-700 font-semibold mb-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            04 // TECHNICAL TOOLING MATRIX
          </div>
          <h2 className="gsap-header-title text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Verified Stack & Domain Competencies.
          </h2>
          <p className="gsap-header-sub mt-3 text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Technologies I have built, deployed, and benchmarked in production code. No buzzword stuffing—only frameworks ready for technical interview scrutiny.
          </p>
        </div>

        {/* Live Filter / Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search e.g. PyTorch, YOLO, SQL..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 shadow-soft-sm transition-all"
          />
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {skillsCategories.map((catGroup) => {
          const Icon = categoryIcons[catGroup.category] || Wrench;
          
          const filteredSkills = catGroup.skills.filter(s => 
            s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.badge.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (searchQuery && filteredSkills.length === 0) return null;

          return (
            <div
              key={catGroup.category}
              className="gsap-skill-category bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-soft hover:shadow-soft-lg hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 shadow-soft-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-900">
                      {catGroup.category}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">
                      {catGroup.description}
                    </p>
                  </div>
                </div>

                {/* Skills Cloud */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-xs font-mono font-semibold text-slate-800 group-hover:text-emerald-800 transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                          {skill.badge}
                        </div>
                      </div>
                      <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md ${
                        skill.level === 'Expert' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                        skill.level === 'Advanced' ? 'bg-teal-50 text-teal-800 border border-teal-200' :
                        'bg-white text-slate-700 border border-slate-200'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Interview Promise */}
              <div className="mt-7 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                ⚡ Demonstrable with live code architecture & test suites.
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
