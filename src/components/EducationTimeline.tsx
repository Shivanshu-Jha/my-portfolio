/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { GraduationCap, MapPin, Calendar, BookOpen, Clock } from "lucide-react";
import { educationData } from "../data";

export default function EducationTimeline() {
  return (
    <section id="education" className="py-20 bg-slate-900/10 border-t border-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/2 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-950/30 border border-teal-900/50 rounded-full text-xs font-mono text-teal-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Education History
          </h2>
          <p className="text-slate-400 mt-2 max-w-lg mx-auto text-sm sm:text-base">
            Detailed view of my core curriculum, computer science engineering coursework, and secondary qualifications.
          </p>
        </div>

        {/* Timeline body columns */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12 pb-4">
          {educationData.map((edu, index) => {
            const isLatest = index === 0;
            return (
              <div 
                key={edu.institution + edu.degree} 
                id={`edu-item-${index}`}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Visual Circle Node representing the event */}
                <div 
                  className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 transition-all duration-300 group-hover:scale-125 ${
                    isLatest 
                      ? "border-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.5)]" 
                      : "border-slate-700 group-hover:border-teal-400"
                  }`} 
                />

                <div className="bg-slate-900/35 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 hover:bg-slate-900/50 transition-all duration-300 shadow-md">
                  
                  {/* Title and duration headers */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-teal-400 transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-medium text-slate-300 mt-1 min-h-[1.25rem]">
                        {edu.degree}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                      <span className="text-[10px] font-mono font-semibold text-teal-400 bg-teal-950/50 border border-teal-850 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-teal-400 animate-pulse" />
                        {edu.duration}
                      </span>
                    </div>
                  </div>

                  {/* Location & Indicators */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-mono mb-4 pb-3 border-b border-slate-900">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {edu.location}
                    </span>
                    <span className="text-slate-700">|</span>
                    <span className="text-teal-500/80 font-semibold uppercase">Verified</span>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                      <span>Key Highlights & Academic Milestones:</span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-400 list-disc pl-4 leading-relaxed">
                      {edu.highlights.map((bullet, idx) => (
                        <li key={idx} className="marker:text-teal-500/60">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
