"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { SplitText } from "./SplitText";

const roles = [
  "Data Science & AI Enthusiast",
  "Machine Learning Engineer",
  "Python Developer",
  "CSE Student @ DIU",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 60);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 35);
    } else {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const stats = [
    { label: "CGPA", value: "3.50" },
    { label: "Projects", value: "10+" },
    { label: "Certifications", value: "20+" },
    { label: "Years Coding", value: "4+" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden grid-bg">
      {/* Radial glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,200,0.06)_0%,transparent_60%)]" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#f5a623]/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00e5c8]/4 rounded-full blur-3xl z-0" />

      <div className="max-w-5xl mx-auto px-6 z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00e5c8]/30 glass"
          >
            <span className="w-2 h-2 rounded-full bg-[#00e5c8] animate-pulse" />
            <span className="text-xs text-[#00e5c8] font-mono uppercase tracking-widest">
              Open to Opportunities · Dhaka, Bangladesh
            </span>
          </motion.div>

          {/* Name */}
          <div className="mb-2">
            <p className="text-sm font-mono text-gray-500 uppercase tracking-[0.4em] mb-3">Md Musa Islam</p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none" style={{ fontFamily: "var(--font-display)" }}>
              <SplitText
                text="FAHAD"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5c8] via-[#00bfa5] to-[#f5a623]"
              />
            </h1>
          </div>

          {/* Typing role */}
          <div className="h-12 mt-6 flex items-center justify-center">
            <p className="text-lg md:text-2xl font-light text-gray-300 font-mono">
              <span className="text-[#f5a623]">$ </span>
              {displayText}
              <span className="inline-block w-[2px] h-6 ml-1 bg-[#00e5c8] animate-pulse align-middle" />
            </p>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 max-w-2xl mx-auto text-gray-400 text-base md:text-lg font-light leading-relaxed"
          >
            Passionate CSE student at Daffodil International University, specializing in Data Science.
            Building intelligent systems at the intersection of <span className="text-[#00e5c8]">AI, ML, and Data Engineering</span> to
            solve real-world challenges with data-driven innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
          >
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-[#00e5c8] text-[#00e5c8] hover:bg-[#00e5c8]/10 font-bold uppercase tracking-widest transition-all glass-glow-teal rounded-md text-sm font-mono"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-[#00e5c8] to-[#00bfa5] hover:opacity-90 text-[#050c12] font-bold uppercase tracking-widest transition-all rounded-md text-sm font-mono"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1KvYyCJARQuqlyZzkqD08NDLTcwfpAqQu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#f5a623]/70 text-[#f5a623] hover:bg-[#f5a623]/10 font-bold uppercase tracking-widest transition-all glass-glow-gold rounded-md text-sm font-mono flex items-center gap-2 justify-center"
            >
              <Download size={16} />
              Download Resume 
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass rounded-xl p-4 border border-[#00e5c8]/10 hover:border-[#00e5c8]/30 transition-colors text-center">
                <p className="text-2xl md:text-3xl font-black text-[#00e5c8]" style={{ fontFamily: "var(--font-display)" }}>{stat.value}</p>
                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-[#00e5c8] transition-colors">
          <span className="text-xs uppercase tracking-widest mb-2 font-mono">Explore</span>
          <ArrowDown size={18} />
        </a>
      </motion.div>
    </section>
  );
}
