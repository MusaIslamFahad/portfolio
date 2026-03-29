"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp, Plane, Heart } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Crude Oil Price Analysis & Forecasting",
      subtitle: "1970 – 2026",
      description:
        "End-to-end time-series forecasting and geopolitical impact analysis. Analyzed 56 years of WTI crude oil prices with deep EDA, seasonal decomposition, and quantified the impact of 10 major geopolitical events using event-study methodology.",
      icon: <TrendingUp size={24} className="text-[#00e5c8]" />,
      tags: ["Python", "Pandas", "NumPy", "Statsmodels", "Prophet", "TensorFlow/Keras", "Plotly", "Streamlit", "ARIMA", "LSTM"],
      github: "https://github.com/MusaIslamFahad/Crude_Oil_Price_Analysis_and_Forecasting-1970-2026-",
      live: "https://musaislamfahad-oil-dashboard.streamlit.app/",
      highlight: true,
      badge: "Live Demo ↗",
      glow: "hover:shadow-[0_0_40px_rgba(0,229,200,0.2)]",
      border: "hover:border-[#00e5c8]/50",
      accentColor: "text-[#00e5c8]",
      accentBg: "bg-[#00e5c8]/10",
    },
    {
      title: "Global AI Travel Guide",
      subtitle: "AI-Powered Desktop Assistant",
      description:
        "Intelligent desktop travel assistant powered by GPT-4o-mini with interactive map visualization and automatic Wikipedia image fetching. Features threaded AI responses and light/dark theme support.",
      icon: <Plane size={24} className="text-[#f5a623]" />,
      tags: ["Python", "OpenAI GPT-4o-mini", "Tkinter", "TkinterMapView", "Geopy", "Pillow", "Wikipedia API"],
      github: "https://github.com/MusaIslamFahad/Global_AI_Travel_Guide",
      live: "",
      highlight: false,
      badge: null,
      glow: "hover:shadow-[0_0_40px_rgba(245,166,35,0.15)]",
      border: "hover:border-[#f5a623]/40",
      accentColor: "text-[#f5a623]",
      accentBg: "bg-[#f5a623]/10",
    },
    {
      title: "Sleep Disorder Prediction",
      subtitle: "ML Classification Model",
      description:
        "Machine learning classification model for health risk assessment. Built a complete ML pipeline including preprocessing, EDA, and feature engineering to identify risk of sleep disorders using health and lifestyle data.",
      icon: <Heart size={24} className="text-purple-400" />,
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Logistic Regression", "Random Forest", "SVM"],
      github: "https://github.com/MusaIslamFahad/Sleep_Disorder_Prediction",
      live: "",
      highlight: false,
      badge: null,
      glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
      border: "hover:border-purple-500/40",
      accentColor: "text-purple-400",
      accentBg: "bg-purple-500/10",
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10 bg-gradient-to-b from-transparent via-[#050c12]/50 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-right mb-16 flex flex-col items-end"
        >
          <p className="text-xs font-mono text-[#00e5c8]/60 uppercase tracking-[0.4em] mb-3">05 / Projects</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)" }}>
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5c8] to-[#f5a623]">PROJECTS</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#00e5c8] to-[#f5a623] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured project takes more space on first slot */}
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`glass rounded-2xl p-7 border border-white/8 transition-all duration-500 flex flex-col h-full bg-[#050c12]/40 ${project.border} ${project.glow} ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 ${project.accentBg} glass rounded-xl inline-block border border-white/10`}>
                  {project.icon}
                </div>
                <div className="flex gap-3 items-center">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs font-mono ${project.accentColor} border border-current/30 px-3 py-1.5 rounded-full hover:bg-current/10 transition-colors`}
                    >
                      {project.badge}
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className={`${project.accentColor} hover:opacity-70 transition-opacity`}>
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>{project.title}</h3>
                <p className={`text-xs font-mono ${project.accentColor}/70 uppercase tracking-widest`}>{project.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm font-mono">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-white/5">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-gray-400 bg-white/4 px-2.5 py-1 rounded-md border border-white/8">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/MusaIslamFahad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#00e5c8]/30 text-[#00e5c8] rounded-full hover:bg-[#00e5c8]/10 transition-all glass font-mono text-sm uppercase tracking-widest"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
