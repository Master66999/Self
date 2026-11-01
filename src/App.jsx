import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SimulationLab from './components/SimulationLab';
import ProjectsSection from './components/ProjectsSection';
import PhilosophyBento from './components/PhilosophyBento';
import SkillsSection from './components/SkillsSection';
import ExperienceEducation from './components/ExperienceEducation';
import RecruiterFAQ from './components/RecruiterFAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CaseStudyModal from './components/CaseStudyModal';
import CommandPalette from './components/CommandPalette';
import ParticleCanvas from './components/ParticleCanvas';
import { initGSAPScrollTriggers } from './animations/gsapScrollTriggers';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Initialize GSAP ScrollTriggers and Text Triggers
  useEffect(() => {
    const cleanup = initGSAPScrollTriggers();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#10B981]/20 selection:text-[#047857]">
      {/* GSAP Scroll Progress Scrub Indicator */}
      <div className="scroll-progress-bar" />

      {/* Living Interactive Particle Constellation Canvas */}
      <ParticleCanvas />

      {/* Navigation Telemetry Bar with Command Palette Trigger */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandPalette={() => setIsCmdOpen(true)}
      />

      {/* Main Content Sections with GSAP ScrollTriggers */}
      <main className="relative z-20">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <SimulationLab />
        <ProjectsSection onSelectCaseStudy={(p) => setSelectedCaseStudy(p)} />
        <PhilosophyBento />
        <SkillsSection />
        <ExperienceEducation />
        <RecruiterFAQ />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Dedicated High-Fidelity ATS Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Engineering Case Study Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Interactive Command Palette (Cmd + K / Ctrl + K) */}
      <CommandPalette
        isOpen={isCmdOpen}
        onClose={setIsCmdOpen}
        onOpenResume={() => setIsResumeOpen(true)}
      />
    </div>
  );
}
