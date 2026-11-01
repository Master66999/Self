import React from 'react';
import { 
  Server, 
  ShieldCheck, 
  Network, 
  GitBranch, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Terminal
} from 'lucide-react';

export default function PhilosophyBento() {
  const principles = [
    {
      index: "01",
      title: "From Notebooks to Production Services",
      subtitle: "Microservices & Clean APIs",
      description: "Jupyter notebooks are for experimentation; production requires robust software engineering. I wrap models in asynchronous FastAPI services with strict Pydantic schemas, Docker images, and sub-40ms latency budgets.",
      icon: Server,
      accent: "bg-emerald-50 text-emerald-700 border-emerald-200",
      highlight: "Docker • FastAPI • Redis • Pydantic"
    },
    {
      index: "02",
      title: "Mathematical & Spatial Precision",
      subtitle: "Beyond Naive Euclidean Distances",
      description: "Real-world engineering demands spatial and geometric reality. In VoltVision, I modeled road networks using OSMnx graphs and PostGIS R-Tree indices rather than simplistic Euclidean approximations.",
      icon: Network,
      accent: "bg-teal-50 text-teal-700 border-teal-200",
      highlight: "PostGIS • OSMnx • Voronoi • GeoPandas"
    },
    {
      index: "03",
      title: "Auditable & Explainable AI",
      subtitle: "Anti-Blackbox Architecture",
      description: "High-stakes financial and medical applications require regulatory transparency. I integrate TreeSHAP and localized attribution maps to provide mathematically provable reasons for every inference.",
      icon: ShieldCheck,
      accent: "bg-emerald-50 text-emerald-700 border-emerald-200",
      highlight: "SHAP • Interpretability • Fair Lending"
    },
    {
      index: "04",
      title: "Collaborative Git Hygiene",
      subtitle: "Open Source Discipline",
      description: "Code is read more often than it is written. As a Hacktoberfest contributor, I follow atomic commits, descriptive PR documentation, comprehensive type hints, and automated CI tests.",
      icon: GitBranch,
      accent: "bg-slate-100 text-slate-800 border-slate-200",
      highlight: "Hacktoberfest • GitHub Actions • CI/CD"
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      
      {/* Section Header */}
      <div className="gsap-section-header mb-14 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-700 font-semibold mb-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          HOW I THINK & OPERATE
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
          Engineering Philosophy.
        </h2>
        <p className="mt-3 text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
          Four foundational principles that govern how I translate mathematical theory into maintainable, scalable software.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {principles.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.index}
              className="gsap-bento-card group bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-soft hover:shadow-soft-lg hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-2xl border ${p.accent} shadow-soft-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    PHILOSOPHY // {p.index}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {p.title}
                </h3>
                <div className="text-xs font-mono text-emerald-700 font-semibold mt-1">
                  {p.subtitle}
                </div>

                <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-7 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  {p.highlight}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

