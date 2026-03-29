"use client";

import { motion } from "framer-motion";

export function SplitText({ text, className = "" }: { text: string; className?: string }) {
  const characters = text.split("");

  return (
    <div style={{ display: "inline-block" }}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0, y: 60, rotate: -20, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 10,
            delay: index * 0.05,
          }}
          className={className}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
