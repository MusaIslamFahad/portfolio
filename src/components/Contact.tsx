"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    const subjectLine = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:musa.islam.fahad@gmail.com?subject=${subjectLine}&body=${body}`;
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#00e5c8]" />,
      label: "Email",
      value: "musa.islam.fahad@gmail.com",
      href: "mailto:musa.islam.fahad@gmail.com",
    },
    {
      icon: <Phone size={18} className="text-[#00e5c8]" />,
      label: "Phone",
      value: "+880 1518-447339",
      href: "tel:+8801518447339",
    },
    {
      icon: <MapPin size={18} className="text-[#f5a623]" />,
      label: "Location",
      value: "84/A, Middle Pirerbag, Mirpur, Dhaka-1216",
      href: null,
    },
  ];

  const socials = [
    { icon: <Github size={20} />, href: "https://github.com/MusaIslamFahad", label: "GitHub", color: "hover:text-white hover:border-white" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/md-musa-islam-fahad-b18759249/", label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-400" },
    { icon: <Mail size={20} />, href: "mailto:musa.islam.fahad@gmail.com", label: "Email", color: "hover:text-[#00e5c8] hover:border-[#00e5c8]" },
  ];

  const inputClass =
    "w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00e5c8]/50 focus:bg-white/6 transition-all font-mono text-sm";
  const labelClass = "text-xs uppercase tracking-widest font-mono text-[#00e5c8]/70 mb-2 block";

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#050c12]/80 border-t border-[#00e5c8]/8">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-[#00e5c8]/60 uppercase tracking-[0.4em] mb-3">07 / Contact</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)" }}>
            LET&apos;S <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5c8] to-[#f5a623]">CONNECT</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#00e5c8] to-[#f5a623] rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left – Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Let&apos;s build something great together.
            </h3>
            <p className="text-gray-400 mb-10 leading-relaxed text-sm font-mono">
              I&apos;m always open to discussing data science projects, AI collaborations, internships, or just having a great conversation about technology and innovation.
            </p>

            <div className="space-y-5 mb-10">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 glass rounded-full flex items-center justify-center border border-white/10 group-hover:border-[#00e5c8]/30 transition-colors flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-gray-200 hover:text-[#00e5c8] transition-colors font-mono">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-300 font-mono">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/8">
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-5">Find me on</p>
              <div className="flex gap-4">
                {socials.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className={`w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 transition-all hover:scale-110 border border-white/10 ${link.color}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-[#00e5c8]/10 space-y-5">
              <div>
                <label className={labelClass}>Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className={labelClass}>Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={inputClass}
                  placeholder="Project collaboration / Internship / Hello!"
                />
              </div>
              <div>
                <label className={labelClass}>Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#00e5c8] to-[#00bfa5] hover:opacity-90 text-[#050c12] font-bold rounded-xl flex items-center justify-center gap-2 transition-opacity font-mono uppercase tracking-widest text-sm"
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
