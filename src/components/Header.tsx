/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Terminal, Menu, X, Mail, Github, Linkedin } from "lucide-react";
import { developerInfo } from "../data";

interface HeaderProps {
  onTerminalClick: () => void;
  terminalActive: boolean;
}

export default function Header({ onTerminalClick, terminalActive }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#hero" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-slate-900 shadow-xl"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          id="nav-logo"
          href="#hero"
          className="text-2xl font-display font-bold tracking-tight text-white hover:text-teal-400 transition-colors flex items-center gap-2 group"
        >
          <span className="text-teal-400 group-hover:rotate-12 transition-transform duration-300">
            &lt;
          </span>
          SSJ
          <span className="text-teal-400">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors relative group py-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* Terminal Console Trigger */}
          <button
            id="terminal-trigger-btn"
            onClick={onTerminalClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono border transition-all duration-300 cursor-pointer ${
              terminalActive
                ? "bg-teal-500/20 border-teal-400 text-teal-400 shadow-lg shadow-teal-500/10"
                : "border-slate-800 text-slate-400 hover:text-teal-400 hover:border-teal-400/50 hover:bg-teal-950/20"
            }`}
          >
            <Terminal className="w-3.5 h-3.5 animate-pulse" />
            <span>Recruiter Console</span>
          </button>
        </nav>

        {/* Mobile Nav Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            id="mobile-console-btn"
            onClick={onTerminalClick}
            className={`p-2 rounded-lg border transition-colors cursor-pointer ${
              terminalActive
                ? "bg-teal-500/20 border-teal-400 text-teal-400"
                : "border-slate-800 text-slate-400"
            }`}
            title="Recruiter Console"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-slate-800 rounded-lg text-slate-300 hover:text-teal-400 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-t border-slate-900 bg-slate-950 px-6 py-6 space-y-4 animate-fadeIn"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-teal-400 block py-1.5 border-b border-slate-900"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between">
            <span className="text-xs text-slate-500">Connect:</span>
            <div className="flex space-x-4">
              <a
                href={developerInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={developerInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${developerInfo.email}`}
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
