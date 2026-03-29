"use client";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      title: "Data Analyst 101",
      issuer: "Microsoft",
      description: "Foundational data analysis skills covering Excel, Power BI, and data storytelling techniques.",
      icon: "🏆",
      color: "border-[#00e5c8]/40",
      glow: "hover:shadow-[0_0_30px_rgba(0,229,200,0.15)]",
      badgeColor: "bg-[#00e5c8]/10 text-[#00e5c8] border-[#00e5c8]/30",
      driveUrl: "https://drive.google.com/drive/folders/15BSSR4W7VYkSO6Q-mDxWHmNGuMZt5TIh?usp=sharing",
    },
    {
      title: "Data Science & Machine Learning with Python",
      issuer: "Ostad",
      description: "Comprehensive course covering Python for data science, machine learning algorithms, and practical project implementation.",
      icon: "🤖",
      color: "border-[#f5a623]/40",
      glow: "hover:shadow-[0_0_30px_rgba(245,166,35,0.15)]",
      badgeColor: "bg-[#f5a623]/10 text-[#f5a623] border-[#f5a623]/30",
      driveUrl: "https://drive.google.com/drive/folders/15BSSR4W7VYkSO6Q-mDxWHmNGuMZt5TIh?usp=sharing",
    },
    {
      title: "Data Science Math Skills",
      issuer: "Duke University",
      description: "Mathematical foundations for data science including statistics, probability, linear algebra, and calculus concepts.",
      icon: "📐",
      color: "border-purple-500/40",
      glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      driveUrl: "https://drive.google.com/drive/folders/15BSSR4W7VYkSO6Q-mDxWHmNGuMZt5TIh?usp=sharing",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-[#00e5c8]/60 uppercase tracking-[0.4em] mb-3">06 / Certifications</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)" }}>
            CREDENTIALS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5c8] to-[#f5a623]">&amp; CERTS</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#00e5c8] to-[#f5a623] rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`glass rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 flex flex-col ${cert.color} ${cert.glow}`}
            >
              <div className="flex justify-between items-start mb-5">
                <span className="text-4xl">{cert.icon}</span>
                <span className={`text-xs font-mono px-3 py-1 rounded-full border ${cert.badgeColor}`}>
                  {cert.issuer}
                </span>
              </div>

              <div className="flex items-start gap-2 mb-3">
                <Award size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <h3 className="text-base font-bold text-white leading-snug" style={{ fontFamily: "var(--font-display)" }}>{cert.title}</h3>
              </div>

              <p className="text-gray-400 text-xs font-mono leading-relaxed flex-grow mb-5">{cert.description}</p>

              <a
                href={cert.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#00e5c8] transition-colors mt-auto pt-4 border-t border-white/5"
              >
                <ExternalLink size={12} />
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>

        {/* Drive link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="https://drive.google.com/drive/folders/15BSSR4W7VYkSO6Q-mDxWHmNGuMZt5TIh?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-[#00e5c8]/60 hover:text-[#00e5c8] transition-colors underline underline-offset-4"
          >
            View all certificates on Google Drive →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
