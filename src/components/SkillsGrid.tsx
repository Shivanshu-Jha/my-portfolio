/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Terminal, Layers, Database, Cpu, Binary, CheckCircle2, ChevronRight, Award } from "lucide-react";
import { skillsData, projectsData } from "../data";

// Helper function to render correct Lucide icon
function getCategoryIcon(iconName: string) {
  switch (iconName) {
    case "Terminal":
      return <Terminal className="w-5 h-5 text-teal-400" />;
    case "Layers":
      return <Layers className="w-5 h-5 text-purple-400" />;
    case "Database":
      return <Database className="w-5 h-5 text-emerald-400" />;
    case "Cpu":
      return <Cpu className="w-5 h-5 text-pink-400" />;
    case "Binary":
      return <Binary className="w-5 h-5 text-amber-400" />;
    default:
      return <Terminal className="w-5 h-5 text-teal-400" />;
  }
}

// Helper to count how many projects match/use that skill
function getProjectUsageCount(skillName: string): number {
  return projectsData.filter((proj) =>
    proj.technologies.some((tech) => tech.toLowerCase().includes(skillName.toLowerCase()))
  ).length;
}

export default function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 bg-slate-900/30 border-y border-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-950/30 border border-teal-900/50 rounded-full text-xs font-mono text-teal-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>TECHNOLOGIES & COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Technical Expertise
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
            Structured skill index based on deep full-stack architecture, API connections, database designs, and reactive frontends. Hover over cards to assess project implementation frequency.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => {
            const isHovered = activeCategory === category.title;
            return (
              <div
                key={category.title}
                id={`skill-card-${category.title.replace(/\s+/g, "-").toLowerCase()}`}
                className={`p-6 rounded-xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isHovered
                    ? "bg-slate-900/90 border-teal-500/30 shadow-lg shadow-teal-500/5"
                    : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50 shrink-0"
                }`}
                onMouseEnter={() => setActiveCategory(category.title)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <h3 className="font-display font-bold text-white text-base">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills tags list */}
                  <div className="space-y-3.5">
                    {category.skills.map((skill) => {
                      const count = getProjectUsageCount(skill);
                      return (
                        <div
                          key={skill}
                          className="flex items-center justify-between group/skill"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-500/70" />
                            <span className="text-sm text-slate-300 group-hover/skill:text-white transition-colors">
                              {skill}
                            </span>
                          </div>

                          {count > 0 ? (
                            <span
                              className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-950/40 text-teal-400 border border-teal-900/50"
                              title={`Featured in ${count} project(s)`}
                            >
                              {count} {count === 1 ? "proj" : "projs"}
                            </span>
                          ) : (
                            <span className="text-[10px] font-mono text-slate-600">Core</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Decorative bottom bar indicator */}
                <div
                  className={`h-1 w-full bg-gradient-to-r from-teal-500 to-indigo-500 mt-6 absolute bottom-0 left-0 transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
