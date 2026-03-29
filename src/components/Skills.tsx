"use client";
import { motion } from "framer-motion";
import { Code2, Brain, Database, Wrench } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Programming",
      icon: <Code2 size={28} className="text-[#00e5c8]" />,
      skills: ["Python", "C", "C++"],
      color: "from-[#00e5c8]/20 to-[#00e5c8]/5",
      border: "border-[#00e5c8]/40",
      glow: "hover:shadow-[0_0_30px_rgba(0,229,200,0.15)]",
      tagColor: "border-[#00e5c8]/20 text-[#00e5c8]/80 hover:bg-[#00e5c8]/10",
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain size={28} className="text-[#f5a623]" />,
      skills: ["Supervised Learning", "Unsupervised Learning", "NLP", "Computer Vision", "Time Series Forecasting", "Deep Learning"],
      color: "from-[#f5a623]/20 to-[#f5a623]/5",
      border: "border-[#f5a623]/40",
      glow: "hover:shadow-[0_0_30px_rgba(245,166,35,0.15)]",
      tagColor: "border-[#f5a623]/20 text-[#f5a623]/80 hover:bg-[#f5a623]/10",
    },
    {
      title: "Libraries & Frameworks",
      icon: <Code2 size={28} className="text-purple-400" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "PyTorch", "TensorFlow", "Seaborn", "Plotly", "Flask", "Streamlit", "Prophet"],
      color: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/40",
      glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      tagColor: "border-purple-500/20 text-purple-400/80 hover:bg-purple-500/10",
    },
    {
      title: "Databases & OS",
      icon: <Database size={28} className="text-emerald-400" />,
      skills: ["MySQL", "PostgreSQL", "Windows", "Linux"],
      color: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/40",
      glow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]",
      tagColor: "border-emerald-500/20 text-emerald-400/80 hover:bg-emerald-500/10",
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={28} className="text-blue-400" />,
      skills: ["Power BI", "Tableau", "Git & GitHub", "Google Colab", "Jupyter Notebook", "VS Code", "OpenAI API", "Streamlit Cloud"],
      color: "from-blue-500/20 to-blue-500/5",
      border: "border-blue-500/40",
      glow: "hover:shadow-[0_0_30px_rgba(96,165,250,0.15)]",
      tagColor: "border-blue-500/20 text-blue-400/80 hover:bg-blue-500/10",
    },
  ];

  const softSkills = ["Critical Thinking", "Problem Solving", "Effective Communication", "Team Collaboration", "Self-Learning"];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-[#00e5c8]/60 uppercase tracking-[0.4em] mb-3">04 / Skills</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)" }}>
            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5c8] to-[#f5a623]">ARSENAL</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#00e5c8] to-[#f5a623] rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 ${cat.border} ${cat.glow} ${index === 0 || index === 4 ? "md:col-span-1" : ""}`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-5 border border-white/10`}>
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold mb-5 font-mono text-white">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 bg-white/3 border rounded-lg text-xs font-mono transition-colors cursor-default ${cat.tagColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass rounded-2xl p-6 border border-[#00e5c8]/20 hover:shadow-[0_0_30px_rgba(0,229,200,0.1)] transition-all duration-300 hover:-translate-y-2 md:col-span-1"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00e5c8]/15 to-[#f5a623]/5 flex items-center justify-center mb-5 border border-white/10">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-lg font-bold mb-5 font-mono text-white">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-white/3 border border-white/15 rounded-lg text-xs font-mono text-gray-300 hover:text-white hover:bg-white/8 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
