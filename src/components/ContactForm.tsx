
import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Trash2, Calendar, Linkedin, Github } from "lucide-react";
import { developerInfo } from "../data";
import { ContactMessage } from "../types";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [localMsgs, setLocalMsgs] = useState<ContactMessage[]>([]);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errDetails, setErrDetails] = useState("");

  // Load message logs from localStorage on mount
  useEffect(() => {
    try {
      const cache = localStorage.getItem("ssj_recruiter_inbox");
      if (cache) {
        setLocalMsgs(JSON.parse(cache));
      }
    } catch (e) {
      console.warn("Could not read local inbox messages", e);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    setErrDetails("");

    // Basic Validation Checkers
    if (!formData.name.trim()) {
      setStatus("error");
      setErrDetails("Please provide your name so I can address you correctly.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("error");
      setErrDetails("Please enter a valid email address for responses.");
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setStatus("error");
      setErrDetails("Briefly describe your enquiry or thoughts (at least 10 characters).");
      return;
    }

    // Assemble new message
    const newMsg: ContactMessage = {
      id: "msg_" + Date.now(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim() || undefined,
      message: formData.message.trim(),
      timestamp: new Date().toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Commit to state and storage
    const updated = [newMsg, ...localMsgs];
    setLocalMsgs(updated);
    try {
      localStorage.setItem("ssj_recruiter_inbox", JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }

    // Reset inputs & trigger visual success states
    setFormData({ name: "", email: "", company: "", message: "" });
    setStatus("success");
  };

  const clearInboxMessage = (id: string) => {
    const filtered = localMsgs.filter((m) => m.id !== id);
    setLocalMsgs(filtered);
    try {
      localStorage.setItem("ssj_recruiter_inbox", JSON.stringify(filtered));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative">
      <div className="absolute bottom-0 right-12 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-950/30 border border-teal-900/50 rounded-full text-xs font-mono text-teal-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>DISCUSS OR ENQUIRE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Get In Touch
          </h2>
          <p className="text-slate-400 mt-2 max-w-lg mx-auto text-sm sm:text-base">
            I am anticipating opportunities to launch my engineering contributions. Let's build together!
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates details info card */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Conventions & Coordinates
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 shrink-0">
                    <Mail className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase">DIRECT MAILBOX</h4>
                    <a href={`mailto:${developerInfo.email}`} className="text-sm font-medium text-slate-200 hover:text-teal-400 transition-colors">
                      {developerInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 shrink-0">
                    <Phone className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase">CELL PHONE & CHAT</h4>
                    <a href={`tel:${developerInfo.phone}`} className="text-sm font-medium text-slate-200 hover:text-teal-400 transition-colors">
                      {developerInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 shrink-0">
                    <MapPin className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase">CURRENT RESIDENCE</h4>
                    <span className="text-sm text-slate-300 font-medium">{developerInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Quick links footer */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-slate-400 text-xs font-mono">
                <span>CONFERENCE LINKS</span>
                <div className="flex gap-4">
                  <a href={developerInfo.github} target="_blank" rel="noreferrer" className="hover:text-teal-400 text-slate-300">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={developerInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-teal-400 text-slate-300">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Local Storage Inbox list logger */}
            {localMsgs.length > 0 && (
              <div className="bg-slate-900/10 border border-slate-900/80 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-teal-400 border-b border-slate-900 pb-2">
                  <span>OUTBOX CHRONICLES ({localMsgs.length})</span>
                  <span className="text-emerald-400 animate-pulse">● LOCAL STREAM</span>
                </div>
                
                <div className="space-y-3 max-h-56 overflow-y-auto">
                  {localMsgs.map((msg) => (
                    <div 
                      key={msg.id} 
                      className="p-3 bg-slate-900/40 border border-slate-800 rounded-lg relative group/msg space-y-1 text-xs"
                    >
                      <button
                        onClick={() => clearInboxMessage(msg.id)}
                        className="absolute top-2.5 right-2.5 text-slate-600 hover:text-rose-400 transition-colors cursor-pointer"
                        title="Delete log record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <div className="font-semibold text-slate-200 pr-5 truncate">{msg.name}</div>
                      {msg.company && <div className="text-[10px] text-slate-500 truncate">{msg.company}</div>}
                      <p className="text-slate-400 break-words leading-relaxed">{msg.message}</p>
                      <div className="pt-1.5 text-[9px] font-mono text-slate-600 flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5" />
                        <span>Submitted {msg.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Interactive compose message form */}
          <div id="contact-form-block" className="md:col-span-7 bg-slate-900/30 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
              Let's Compose a Message
            </h3>

            {/* Error logs banner */}
            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono">
                [VERIFICATION ERROR]: {errDetails}
              </div>
            )}

            {/* Success logs banner */}
            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono space-y-2">
                <div className="font-bold flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>TRANSMISSION CACHED SUCCESSFULLY!</span>
                </div>
                <p className="text-slate-400">
                  Your message has been encoded and saved securely in your browser's local sandbox store cache. Shivanshu can inspect it on his local stream timeline. Thank you for corresponding!
                </p>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4 font-sans text-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-slate-400 uppercase">Your Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="E.g. Jane Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-700 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-slate-400 uppercase">Your Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E.g. jane@company.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-700 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-xs font-mono text-slate-400 uppercase">Company/Organization <span className="text-slate-600">(Optional)</span></label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="E.g. Acme Corporation"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-700 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-slate-400 uppercase">Message details *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, team opportunity, and let's coordinate..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-700 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition resize-none"
                />
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded-xl flex items-center justify-center gap-2 transition duration-300 shadow-md shadow-teal-500/10 hover:shadow-teal-500/30 transform hover:-translate-y-0.5 mt-2 cursor-pointer text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit Transmission</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
