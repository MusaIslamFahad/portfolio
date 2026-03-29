"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Campus Ambassador",
      company: "Innovator Youth",
      companyUrl: "https://innovatoryouth.com/",
      period: "May 2025 – Present",
      type: "Part-time · Leadership",
      color: "border-[#00e5c8]",
      iconColor: "text-[#00e5c8]",
      bgColor: "bg-[#00e5c8]/10",
      badgeColor: "bg-[#00e5c8]/10 border-[#00e5c8]/30 text-[#00e5c8]",
      achievements: [
        "Launched 3+ collaborative platforms for student projects in climate tech and AI, engaging 100+ participants.",
        "Organized 5+ workshops on design thinking, entrepreneurship, and leadership, empowering 200+ students.",
        "Launched a mentorship program linking 50+ students with industry professionals to foster leadership and career growth.",
      ],
    },
    {
      title: "Campus Ambassador",
      company: "International Model United Nations",
      companyUrl: "https://www.internationalmun.org/",
      period: "Sep 2021 – Oct 2022",
      type: "Part-time · Diplomacy",
      color: "border-[#f5a623]",
      iconColor: "text-[#f5a623]",
      bgColor: "bg-[#f5a623]/10",
      badgeColor: "bg-[#f5a623]/10 border-[#f5a623]/30 text-[#f5a623]",
      achievements: [
        "Promoted IMUN programs to 100+ peers, increasing participation in Model United Nations trainings.",
        "Trained 10+ students for IMUN internships, preparing them for professional opportunities.",
        "Assisted in organizing workshops and events, supporting smooth execution of training sessions.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-[#00e5c8]/60 uppercase tracking-[0.4em] mb-3">02 / Experience</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5c8] to-[#f5a623]">WORK</span> EXPERIENCE
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#00e5c8] to-[#f5a623] rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-[#00e5c8]/15 ml-4 md:ml-0 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[45px] md:-left-[53px] p-2 bg-[#050c12] border-2 ${exp.color} rounded-full z-10 ${exp.bgColor}`}>
                <Briefcase size={18} className={exp.iconColor} />
              </div>

              <div className={`glass p-6 md:p-8 rounded-2xl border border-white/8 hover:${exp.color.replace("border-", "border-")}/30 transition-all group`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5 gap-3">
                  <div>
                    <h3 className={`text-2xl font-bold text-white group-hover:${exp.iconColor.replace("text-", "text-")} transition-colors`} style={{ fontFamily: "var(--font-display)" }}>
                      {exp.title}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-200 transition-colors text-base font-mono"
                    >
                      {exp.company} ↗
                    </a>
                  </div>
                  <div className="flex flex-col gap-2 items-start md:items-end">
                    <div className={`flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border ${exp.badgeColor}`}>
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                    <span className="text-xs text-gray-500 font-mono">{exp.type}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight size={16} className={`${exp.iconColor} mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-300 text-sm leading-relaxed font-mono">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
