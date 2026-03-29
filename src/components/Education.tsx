"use client";
import { motion } from "framer-motion";
import { GraduationCap, Star, Calendar } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      major: "Major in Data Science",
      institution: "Daffodil International University",
      location: "Dhaka, Bangladesh",
      period: "Aug 2022 – Present",
      gpa: "3.50 / 4.00",
      status: "Ongoing",
      highlight: true,
      color: "border-[#00e5c8]",
      badgeColor: "bg-[#00e5c8]/10 border-[#00e5c8]/30 text-[#00e5c8]",
      statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      major: "Group: Science",
      institution: "Government Science College",
      location: "Dhaka, Bangladesh",
      period: "Jun 2019 – Nov 2021",
      gpa: "5.00 / 5.00",
      status: "Completed",
      highlight: false,
      color: "border-[#f5a623]",
      badgeColor: "bg-[#f5a623]/10 border-[#f5a623]/30 text-[#f5a623]",
      statusColor: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      major: "Group: Science",
      institution: "Sher-e-Bangla Nagar Govt Boys' High School",
      location: "Dhaka, Bangladesh",
      period: "Jan 2017 – Jan 2019",
      gpa: "5.00 / 5.00",
      status: "Completed",
      highlight: false,
      color: "border-[#f5a623]",
      badgeColor: "bg-[#f5a623]/10 border-[#f5a623]/30 text-[#f5a623]",
      statusColor: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    },
  ];

  return (
    <section id="education" className="py-24 relative z-10 bg-gradient-to-b from-transparent via-[#050c12]/60 to-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-[#00e5c8]/60 uppercase tracking-[0.4em] mb-3">03 / Education</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)" }}>
            ACADEMIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5c8] to-[#f5a623]">JOURNEY</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#00e5c8] to-[#f5a623] rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`glass rounded-2xl p-6 md:p-8 border transition-all group hover:-translate-y-1 hover:shadow-2xl ${
                edu.highlight
                  ? "border-[#00e5c8]/30 bg-[#00e5c8]/3 hover:shadow-[#00e5c8]/10"
                  : "border-white/8 hover:border-[#f5a623]/20 hover:shadow-[#f5a623]/5"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border ${
                  edu.highlight ? "border-[#00e5c8]/30 bg-[#00e5c8]/10" : "border-[#f5a623]/30 bg-[#f5a623]/10"
                }`}>
                  <GraduationCap size={26} className={edu.highlight ? "text-[#00e5c8]" : "text-[#f5a623]"} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{edu.degree}</h3>
                      <p className="text-sm text-gray-400 font-mono mt-1">{edu.major}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-start sm:items-end">
                      <span className={`text-xs font-mono px-3 py-1 rounded-full border ${edu.statusColor}`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-base text-gray-300 font-mono mb-4">{edu.institution} · {edu.location}</p>

                  <div className="flex flex-wrap gap-4">
                    <div className={`flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border ${edu.badgeColor}`}>
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300">
                      <Star size={12} className="text-[#f5a623]" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
