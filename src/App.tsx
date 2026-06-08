

import React, { useState, useRef } from "react";
import { Terminal, Github, Linkedin, Mail, Sparkles, AlertCircle, Heart } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillsGrid from "./components/SkillsGrid";
import ProjectsShowcase from "./components/ProjectsShowcase";
import EducationTimeline from "./components/EducationTimeline";
import ContactForm from "./components/ContactForm";
import InteractiveTerminal from "./components/InteractiveTerminal";
import { developerInfo } from "./data";

export default function App() {
  const [terminalActive, setTerminalActive] = useState(false);
  const terminalSectionRef = useRef<HTMLDivElement>(null);

  const handleTerminalTrigger = () => {
    setTerminalActive(true);
    // Smooth scroll down to the terminal console panel
    setTimeout(() => {
      terminalSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      // Focus on the input inside the terminal component
      const input = document.getElementById("terminal-input");
      if (input) {
        input.focus();
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950 flex flex-col justify-between overflow-x-hidden antialiased">
      {/* Background visual grain or ambient noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[radial-gradient(transparent_50%,rgba(15,23,42,0.1))] mix-blend-overlay" />

      {/* Navigation Header */}
      <Header onTerminalClick={handleTerminalTrigger} terminalActive={terminalActive} />

      {/* Main Structural Layout Modules */}
      <main className="flex-grow w-full">
        {/* Hero Section */}
        <Hero />

        {/* Technical Expertise */}
        <SkillsGrid />

        {/* Projects Showcase with interactive filtering */}
        <ProjectsShowcase />

        {/* Retro Recruiter Console Terminal Container */}
        <div
          ref={terminalSectionRef}
          id="terminal-console-section"
          className="pb-20 pt-10 bg-slate-950 max-w-4xl mx-auto px-6 relative z-10"
        >
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-950/30 border border-teal-900/50 rounded-full text-xs font-mono text-teal-400 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>INTERACTIVE TELEMETRY TERMINAL</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Recruiter Command Center
            </h3>
            <p className="text-slate-400 mt-2 text-xs sm:text-sm">
              An interactive Unix-style terminal sandbox designed to query my credentials, print my raw resume JSON dataset, or discover secret easter-eggs!
            </p>
          </div>

          <InteractiveTerminal />
        </div>

        {/* Education Timeline */}
        <EducationTimeline />

        {/* Comprehensive Contact message composer & Sent Streams log */}
        <ContactForm />
      </main>

      {/* Modern Developer Footnote info block */}
      <footer className="border-t border-slate-900 bg-slate-950/60 py-10 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="text-center md:text-left space-y-1">
            <p className="font-semibold text-slate-400">
              © {new Date().getFullYear()} {developerInfo.name}
            </p>
            <p className="text-[10px]">
              Full Stack Developer
            </p>
          </div>



          {/* Icon lists */}
          <div className="flex items-center space-x-4">
            <a
              href={developerInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-teal-400 transition-colors"
              aria-label="GitHub Core link"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={developerInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-teal-400 transition-colors"
              aria-label="LinkedIn Profile link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${developerInfo.email}`}
              className="text-slate-500 hover:text-teal-400 transition-colors"
              aria-label="Email support contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
