"use client";
import { motion } from "framer-motion";
import { User, MapPin, Mail, Phone, Globe, Github, Linkedin } from "lucide-react";

export default function About() {
  const info = [
    { icon: <MapPin size={16} className="text-[#00e5c8]" />, label: "Location", value: "Mirpur, Dhaka-1216, Bangladesh" },
    { icon: <Mail size={16} className="text-[#00e5c8]" />, label: "Email", value: "musa.islam.fahad@gmail.com", href: "mailto:musa.islam.fahad@gmail.com" },
    { icon: <Phone size={16} className="text-[#00e5c8]" />, label: "Phone", value: "+880 1518-447339", href: "tel:+8801518447339" },
    { icon: <Globe size={16} className="text-[#f5a623]" />, label: "Languages", value: "Bangla (Native) · English (Professional)" },
  ];

  const links = [
    { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/MusaIslamFahad", color: "hover:text-white hover:border-white" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/md-musa-islam-fahad-b18759249/", color: "hover:text-blue-400 hover:border-blue-400" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-[#00e5c8]/60 uppercase tracking-[0.4em] mb-3">01 / About</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)" }}>
            WHO I <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5c8] to-[#f5a623]">AM</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#00e5c8] to-[#f5a623] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass rounded-2xl p-8 border border-[#00e5c8]/10 hover:border-[#00e5c8]/25 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#00e5c8]/10 border border-[#00e5c8]/30 flex items-center justify-center">
                  <User size={20} className="text-[#00e5c8]" />
                </div>
                <h3 className="text-lg font-bold font-mono text-[#00e5c8] tracking-widest uppercase">Summary</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm mb-6">
                Passionate and curious learner with strong foundations in <span className="text-[#00e5c8]">Python, statistics,</span> and
                problem-solving. Deeply interested and dedicated in <span className="text-[#00e5c8]">data science, machine learning,</span> and
                AI — aiming to apply innovative solutions to real-world challenges.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Seeking to contribute to impactful projects, grow with forward-thinking teams, and lead future initiatives
                in <span className="text-[#f5a623]">intelligent systems</span> and <span className="text-[#f5a623]">data-driven innovation.</span>
              </p>

              {/* Social Links */}
              <div className="mt-8 flex gap-4">
                {links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className={`w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 transition-all hover:scale-110 border border-white/10 ${link.color}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {info.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-xl p-5 border border-[#00e5c8]/10 hover:border-[#00e5c8]/25 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-[#00e5c8]/30 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-gray-200 hover:text-[#00e5c8] transition-colors font-mono">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-200 font-mono">{item.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="glass rounded-xl p-5 border border-[#00e5c8]/30 bg-[#00e5c8]/5"
            >
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#00e5c8] animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-xs font-mono text-[#00e5c8]/70 uppercase tracking-widest">Status</p>
                  <p className="text-sm text-[#00e5c8] font-mono font-bold">Available for internships & projects</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
