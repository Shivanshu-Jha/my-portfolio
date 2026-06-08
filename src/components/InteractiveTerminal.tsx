/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Shield, Sparkles, Send, RefreshCw, Layers } from "lucide-react";
import { developerInfo, skillsData, projectsData, educationData } from "../data";

interface TerminalLine {
  text: string;
  type: "cmd" | "output" | "error" | "system";
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: "=== SHIVANSHU REC CONSOLE v1.0.4 ===", type: "system" },
    { text: "Initializing telemetry metrics feed... [OK]", type: "output" },
    { text: "To list all data, click on buttons below or type commands inside the terminal input.", type: "system" },
    { text: 'Type "help" for a list of available console commands.', type: "output" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const availableCommands = ["help", "whoami", "skills", "projects", "education", "resume", "contact", "clear"];

  useEffect(() => {
    // Scroll terminal to bottom of log history on update
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (command: string) => {
    const trimmed = command.trim().toLowerCase();
    if (!trimmed) return;

    const newLines: TerminalLine[] = [...history, { text: `user@shivanshu $ ${command}`, type: "cmd" }];

    switch (trimmed) {
      case "help":
        newLines.push({
          text: `Available Console Commands:\n` +
                `-----------------------------------------------------------------\n` +
                `- whoami    : Read Shivanshu's self-introduction and career objectives\n` +
                `- skills    : Output complete database technical keywords matrix\n` +
                `- projects  : Table formatting of designed full-stack projects\n` +
                `- education : Timeline overview from Secondary CBSE to REC B.Tech\n` +
                `- resume    : Generate lightweight parsed raw JSON dataset block\n` +
                `- contact   : Query verified secure mailbox coordinates\n` +
                `- clear     : Flush active visual records console terminal lines\n` +
                `-----------------------------------------------------------------`,
          type: "output"
        });
        break;

      case "whoami":
        newLines.push({
          text: `Name: ${developerInfo.name}\n` +
                `Role: ${developerInfo.title} (${developerInfo.subTitle})\n` +
                `Bio: ${developerInfo.bio}\n\n` +
                `Currently finding B.Tech placements, summer interns, and junior engineering opportunities centered on intelligence APIs, Next.js setups, and cloud integrations.`,
          type: "output"
        });
        break;

      case "skills": {
        const formattedSkills = skillsData.map(cat => 
          `[${cat.title}]\n` + cat.skills.map(skill => `  * ${skill}`).join("\n")
        ).join("\n\n");
        
        newLines.push({
          text: `TECHNICAL EXPERTISE MATRIX:\n` +
                `=================================================================\n` +
                formattedSkills +
                `\n=================================================================`,
          type: "output"
        });
        break;
      }

      case "projects": {
        const projectsText = projectsData.map(proj =>
          `* ${proj.title} [${proj.category}]\n` +
          `  Tech: ${proj.technologies.join(", ")}\n` +
          `  Role: Lead Developer\n` +
          `  Desc: ${proj.description[0]}`
        ).join("\n\n");

        newLines.push({
          text: `COMPLETED FULL-STACK DEVELOPMENT ARTIFACTS:\n` +
                `=================================================================\n` +
                projectsText +
                `\n=================================================================`,
          type: "output"
        });
        break;
      }

      case "education": {
        const eduText = educationData.map(edu =>
          `• ${edu.institution} (${edu.duration})\n` +
          `  Degree: ${edu.degree}\n` +
          `  Location: ${edu.location}\n` +
          `  Key: ${edu.highlights[0]}`
        ).join("\n\n");

        newLines.push({
          text: `ACADEMIC TIMELINE AND DEGREES:\n` +
                `=================================================================\n` +
                eduText +
                `\n=================================================================`,
          type: "output"
        });
        break;
      }

      case "resume": {
        const rawJson = {
          identity: {
            fullName: developerInfo.name,
            role: developerInfo.title,
            currentLocation: developerInfo.location,
          },
          placements: {
            university: "Raajdhani Engineering College",
            major: "Computer Science and Engineering",
            yearOfGraduation: "2026",
          },
          coreCompetencies: skillsData.map(c => ({ category: c.title, stack: c.skills })),
          showcasing: projectsData.map(p => ({ build: p.title, tools: p.technologies }))
        };

        newLines.push({
          text: JSON.stringify(rawJson, null, 2),
          type: "output"
        });
        break;
      }

      case "contact":
        newLines.push({
          text: `SECURE DIRECT CONTACT CHANNELS:\n` +
                `-----------------------------------------------------------------\n` +
                `- Mailbox  : ${developerInfo.email} (Direct response in 2 hrs)\n` +
                `- Phone    : ${developerInfo.phone} (Voice / WhatsApp)\n` +
                `- GitHub   : ${developerInfo.github}\n` +
                `- LinkedIn : ${developerInfo.linkedin}\n` +
                `-----------------------------------------------------------------`,
          type: "output"
        });
        break;

      case "clear":
        setHistory([]);
        setInputValue("");
        return;

      default:
        newLines.push({
          text: `bash: command not found: "${command}". Type "help" to display allowed instructions.`,
          type: "error"
        });
        break;
    }

    setHistory(newLines);
    setInputValue("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputValue);
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[520px]">
      
      {/* Terminal Title Header bar */}
      <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-400 font-bold ml-2">shivanshu@rec-console:~</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-teal-500">
          <Shield className="w-3.5 h-3.5 animate-pulse" />
          <span>Verified Recruit Portal</span>
        </div>
      </div>

      {/* Terminal logs body display panel */}
      <div className="flex-1 overflow-y-auto p-5 space-y-3 font-mono text-xs text-slate-300 scrollbar bg-slate-950/70 select-none">
        {history.map((line, idx) => (
          <div
            key={idx}
            className={`whitespace-pre-wrap leading-relaxed ${
              line.type === "cmd"
                ? "text-white font-medium"
                : line.type === "error"
                ? "text-rose-400 bg-rose-950/20 px-2 py-1 rounded"
                : line.type === "system"
                ? "text-teal-400 border-l border-teal-800 pl-2 font-bold"
                : "text-slate-300"
            }`}
          >
            {line.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Recommended command pills helper (highly responsive/mobile companion) */}
      <div className="bg-slate-900/60 px-4 py-2.5 border-t border-slate-900 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tight mr-1">click suggestion:</span>
        {availableCommands.map((command) => (
          <button
            key={command}
            onClick={() => executeCommand(command)}
            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 hover:bg-teal-950 hover:text-teal-400 border border-slate-750 hover:border-teal-850 text-slate-400 transition-all cursor-pointer"
          >
            {command}
          </button>
        ))}
      </div>

      {/* Console interactive text-field form */}
      <form
        onSubmit={handleFormSubmit}
        className="bg-slate-900 border-t border-slate-800 flex items-center px-4 py-2"
      >
        <span className="text-teal-400 font-mono text-xs font-bold mr-2 select-none">~ $</span>
        <input
          id="terminal-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Type command (e.g. "skills", "projects", "whoami")...'
          className="flex-1 bg-transparent border-none text-white font-mono text-xs focus:ring-0 focus:outline-none placeholder-slate-600"
          autoComplete="off"
          spellCheck={false}
        />
        <button
          id="terminal-submit-btn"
          type="submit"
          className="p-1.5 text-slate-500 hover:text-teal-400 transition-colors cursor-pointer"
          title="Submit command feed"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
