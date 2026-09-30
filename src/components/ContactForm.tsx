
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

        <div className="grid md:grid-cols-12 gap-12 items-start translate-x-[30%]">

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

          </div>

        </div>

      </div>
    </section>
  );
}
