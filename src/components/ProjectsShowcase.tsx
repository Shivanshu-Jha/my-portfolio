/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Github, ExternalLink, Code2, Sparkles, BookOpen, Layers, Key, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";
import { projectsData } from "../data";
import { Project } from "../types";

export default function ProjectsShowcase() {
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedProject, setExpandedProject] = useState<string | null>("PrepWise"); // Default open first one

  // Extract all unique technology tags for filtering
  const filterCategories = ["All", "Full-Stack", "AI Integrations", "Database", "React.js/Next.js"];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Filter tab logic
      let matchesCategory = true;
      if (filter === "Full-Stack") {
        matchesCategory = project.category.includes("Full-Stack") || project.category.includes("Social");
      } else if (filter === "AI Integrations") {
        matchesCategory = project.technologies.some((tech) => tech.toLowerCase().includes("gemini") || tech.toLowerCase().includes("vapi"));
      } else if (filter === "Database") {
        matchesCategory = project.technologies.some((tech) => tech.toLowerCase().includes("mongodb") || tech.toLowerCase().includes("firebase"));
      } else if (filter === "React.js/Next.js") {
        matchesCategory = project.technologies.some((tech) => tech.toLowerCase().includes("react.js") || tech.toLowerCase().includes("next.js"));
      }

      // Search bar logic
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.description.some((bullet) => bullet.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  const toggleExpand = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  return (
    <section id="projects" className="py-20 bg-slate-950 relative">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-950/30 border border-teal-900/50 rounded-full text-xs font-mono text-teal-400 mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>SELECTED PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Projects Showcase
            </h2>
            <p className="text-slate-400 mt-1 max-w-xl text-sm sm:text-base">
              A detailed catalog of full-stack systems containing functional code links and credentials.
            </p>
          </div>

          {/* Search bar inside header wrapper */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              id="project-search-input"
              type="text"
              placeholder="Search technologies or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
            />
          </div>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-900">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              id={`filter-tab-${cat.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-tight cursor-pointer transition-all duration-300 border ${
                filter === cat
                  ? "bg-teal-500/10 border-teal-400 text-teal-400 shadow-sm"
                  : "bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid/List */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => {
                const isExpanded = expandedProject === project.title;
                const isAIProject = project.technologies.some((tech) => tech.toLowerCase().includes("gemini") || tech.toLowerCase().includes("vapi"));

                return (
                  <motion.div
                    key={project.title}
                    id={`project-card-${project.title.toLowerCase()}`}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 relative group ${
                      isExpanded
                        ? "bg-slate-900 border-teal-850 shadow-xl"
                        : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60"
                    }`}
                  >
                    <div>
                      {/* Top banner / badges */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono tracking-widest uppercase bg-slate-950 px-2.5 py-1 rounded-full text-slate-400 border border-slate-800">
                          {project.category}
                        </span>

                        <div className="flex items-center gap-3">
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 hover:text-teal-400 transition-colors"
                            title="View Github codebase"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          {project.links.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noreferrer"
                              className="text-slate-400 hover:text-teal-400 transition-colors"
                              title="Go to Live Demo"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-teal-400 transition-colors flex items-center gap-2">
                        {project.title}
                        {isAIProject && (
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" title="AI Assisted" />
                        )}
                      </h3>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-teal-400 border border-slate-850"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="text-[9px] font-mono text-slate-500 py-0.5 self-center">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>

                      {/* Trigger to toggle body/details description */}
                      <button
                        onClick={() => toggleExpand(project.title)}
                        className="w-full text-left py-2 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-white transition-colors cursor-pointer"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "Hide key activities" : "Expand details & activities"}</span>
                        {isExpanded && (
                          <ChevronUp className="w-4 h-4 text-teal-400 animate-pulse" />
                        )}
                        {!isExpanded && (
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        )}
                      </button>

                      {/* Expandable Box */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-3 pb-2 space-y-3.5 border-t border-slate-800/40 mt-2">
                              <ul className="space-y-2 text-slate-400 text-xs list-disc pl-4 leading-relaxed">
                                {project.description.map((bullet, idx) => (
                                  <li key={idx} className="marker:text-teal-400">
                                    {bullet}
                                  </li>
                                ))}
                              </ul>

                              {/* Specialized info boxes */}
                              {project.demoCreds && (
                                <div className="mt-3 p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-slate-400 flex items-center gap-2">
                                  <Key className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                                  <span>{project.demoCreds}</span>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Footer decoration */}
                    <div className="mt-4 pt-3 flex items-center justify-between border-t border-slate-900/60 text-[10px] font-mono text-slate-500">
                      <span>Source: Verified Git Hub</span>
                      {project.links.live ? (
                        <span className="text-emerald-500/80 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> Enabled Demo
                        </span>
                      ) : (
                        <span>Offline Code available</span>
                      )}
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full py-16 text-center text-slate-500 font-mono text-sm border border-dashed border-slate-900 rounded-2xl bg-slate-950/40">
                No matching projects found for filter "{filter}" or search query.
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
