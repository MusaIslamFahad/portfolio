"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-14 h-8" />;

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-14 h-8 rounded-full bg-white/10 border border-[#00e5c8]/20 shadow-inner flex items-center p-1 cursor-pointer overflow-hidden transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className={`absolute inset-0 transition-opacity duration-300 ${theme === "dark"
        ? "bg-gradient-to-r from-[#00e5c8]/20 to-[#f5a623]/20 opacity-100"
        : "bg-gradient-to-r from-yellow-200 to-orange-200 opacity-100"
      }`} />
      <motion.div
        className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md relative z-10"
        initial={false}
        animate={{ x: theme === "dark" ? 24 : 0, rotate: theme === "dark" ? 360 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === "dark" ? (
          <Moon size={14} className="text-[#050c12]" />
        ) : (
          <Sun size={14} className="text-orange-500" />
        )}
      </motion.div>
    </motion.button>
  );
}
