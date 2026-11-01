import React from 'react';
import { 
  GraduationCap, 
  Award, 
  GitPullRequest, 
  CheckCircle, 
  ExternalLink,
  BookOpen,
  Calendar,
  MapPin,
  Sparkles
} from 'lucide-react';
import { education, certifications, openSourceAndAchievements } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function ExperienceEducation() {
  return (
    <section id="education" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      
      {/* Section Header with GSAP triggers */}
      <div className="gsap-section-header mb-14">
        <div className="gsap-header-badge inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-700 font-semibold mb-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          05 // PEDAGOGY & CREDENTIALS
        </div>
        <h2 className="gsap-header-title text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
          Education, Credentials & Research.
        </h2>
        <p className="gsap-header-sub mt-3 text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
          A strong mathematical foundation paired with continuous industry-grade learning across modern AI cloud architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
        
        {/* Left: Education & Academic Honors (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main University Card */}
          <div className="gsap-edu-card bg-white rounded-3xl p-7 sm:p-8 border border-emerald-200/90 shadow-soft-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 shadow-soft-sm">
                <GraduationCap className="w-7 h-7" />
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                CGPI: {education.cgpi} / 10.0
              </span>
            </div>

            <div className="mt-5">
              <h3 className="text-2xl font-display font-extrabold text-slate-900">
                {education.institution}
              </h3>
              <p className="text-xs font-mono text-emerald-700 font-semibold mt-1">
                {education.degree}
              </p>
              <p className="text-sm text-slate-700 font-medium mt-1">
                {education.branch}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-600" /> {education.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600" /> {education.location}
                </span>
              </div>
            </div>

            {/* Coursework list */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                Key Academic Coursework
              </div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Open Source & Achievements */}
          <div className="space-y-3.5">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              Honors & Open Source:
            </div>
            {openSourceAndAchievements.map((item, idx) => (
              <div
                key={idx}
                className="gsap-edu-card p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft hover:shadow-soft-lg hover:border-emerald-300 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-slate-900">
                    {item.title}
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {item.badge}
                  </span>
                </div>
                <div className="text-xs font-mono text-emerald-700 font-medium mt-1">
                  {item.organization}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Simulated Live GitHub Activity Telemetry Matrix */}
            <div className="gsap-edu-card p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <GitPullRequest className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-mono font-bold text-slate-900">
                    GitHub Activity Telemetry
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-700 font-semibold">
                  340+ Commits
                </span>
              </div>

              {/* Heatmap Grid */}
              <div 
                className="grid gap-1 p-2.5 rounded-xl bg-slate-50 border border-slate-100"
                style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}
              >
                {Array.from({ length: 64 }).map((_, i) => {
                  const intensity = (i * 7 + 13) % 5;
                  const colors = [
                    'bg-slate-200',
                    'bg-emerald-200',
                    'bg-emerald-300',
                    'bg-emerald-500',
                    'bg-emerald-600'
                  ];
                  return (
                    <div
                      key={i}
                      className={`h-2.5 rounded-xs transition-colors hover:scale-125 ${colors[intensity]}`}
                      title={`Activity index: Level ${intensity}`}
                    />
                  );
                })}
              </div>

              {/* Language Distribution */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span><strong className="text-emerald-700">64%</strong> Python</span>
                <span><strong className="text-slate-800">18%</strong> C++</span>
                <span><strong className="text-teal-700">14%</strong> JS/React</span>
                <span><strong className="text-slate-600">4%</strong> SQL</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right: Verified Certifications Matrix (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600" />
              Verified Industry Certifications (Oracle, IBM, AWS, NPTEL)
            </span>
            <span className="text-xs font-mono text-emerald-700 font-bold">6 Authenticated</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="gsap-edu-card p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft hover:shadow-soft-lg hover:border-emerald-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Verified
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {cert.title}
                  </h4>
                  <div className="text-xs font-mono text-emerald-700 font-medium mt-1">
                    {cert.type}
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {cert.highlight}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Status: {cert.date}</span>
                  <span className="text-emerald-700 font-semibold">✓ Verified Credential</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
