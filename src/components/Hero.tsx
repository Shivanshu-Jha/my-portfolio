/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Terminal, MessageSquare, Download, Sparkles, Cpu, Github, Linkedin, Briefcase } from "lucide-react";
import { developerInfo } from "../data";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-8 pb-16 overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-36 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left column: Text details */}
        <motion.div
          id="hero-text-block"
          className="md:col-span-7 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-teal-950/40 border border-teal-800/50 rounded-full text-xs font-mono text-teal-400">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>Open for Job, Internship & Freelancing Opportunities</span>
          </motion.div>

          <div className="space-y-3">
            <motion.p variants={itemVariants} className="text-sm font-mono tracking-wider text-teal-400">
              Hello, I AM
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight"
            >
              {developerInfo.name}
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-display font-bold text-slate-400"
            >
              {developerInfo.title}
            </motion.h2>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg leading-relaxed max-w-xl"
          >
            {developerInfo.bio}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              id="hero-view-work-btn"
              href="#projects"
              className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded-lg shadow-lg shadow-teal-500/20 hover:shadow-teal-500/45 flex items-center gap-2 group transition-all duration-300 transform hover:-translate-y-0.5 text-sm cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              id="hero-contact-btn"
              href="#contact"
              className="px-6 py-3 border border-slate-800 hover:border-teal-400/50 hover:bg-teal-950/20 text-slate-300 hover:text-teal-400 rounded-lg flex items-center gap-2 transition-all duration-300 text-sm cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Social Profiles Quick links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5 pt-4 border-t border-slate-900 max-w-md text-slate-500 text-xs font-mono"
          >
            <span>CONNECT:</span>
            <div className="flex gap-4">
              <a
                href={developerInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-teal-400 text-slate-400 transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={developerInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-teal-400 text-slate-400 transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column: Interactive Code / Dashboard mock */}
        <motion.div
          id="hero-dashboard-preview"
          className="md:col-span-5 hidden md:block"
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm group">
            {/* Top Bar window indicators */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/50">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                <Terminal className="w-3 h-3" />
                <span>node server.ts</span>
              </div>
            </div>

            {/* Simulated micro terminal output */}
            <div className="space-y-4 font-mono text-xs">
              <div className="text-slate-400">
                <span className="text-emerald-400">~/shivanshu</span> $ npx dev-profile --start
              </div>

              <div className="space-y-1.5">
                <div className="text-slate-500">&gt; Authenticating user developer...</div>
                <div className="text-slate-300 flex items-center gap-1.5">
                  <span className="text-teal-400">✔</span> Login successful: <span className="text-emerald-400">{developerInfo.email}</span>
                </div>
              </div>

              <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 space-y-1.5">
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>DEPLOYED APP STATUS</span>
                  <span className="text-emerald-400 animate-pulse">● LIVE</span>
                </div>
                <div className="text-slate-300 grid grid-cols-2 gap-1 text-[11px]">
                  <div>Framework: <span className="text-teal-300">Next.js/React</span></div>
                  <div>Language: <span className="text-indigo-300">TypeScript</span></div>
                  <div>Main DB: <span className="text-emerald-300">MongoDB / Firebase</span></div>
                  <div>AI Engine: <span className="text-pink-300">Gemini Pro</span></div>
                </div>
              </div>

              {/* Console logs animation simulating loading */}
              <div className="space-y-1 text-[11px] text-slate-500 max-h-24 overflow-hidden border-l-2 border-slate-800 pl-3">
                <div>[INFO] Initializing PrepWise dynamic audio loops...</div>
                <div>[INFO] Binding Zod schemas to structured Gemini responses...</div>
                <div>[INFO] Syncing Clerk sessions with Client Context Store...</div>
                <div className="text-teal-400 animate-pulse">&gt; Waiting for user telemetry engagement...</div>
              </div>

              <div className="pt-2 text-center text-slate-500 text-[10px]">
                Type <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300">help</kbd> in Recruiter Console (Header)
              </div>
            </div>

            {/* Visual tech indicator overlay */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-teal-500/10 rounded-full blur-xl group-hover:scale-150 transition-all duration-500 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
