"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-3 border-b border-[#00e5c8]/10" : "bg-transparent py-5"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <motion.a
          href="#home"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-lg border border-[#00e5c8]/50 flex items-center justify-center bg-[#00e5c8]/10 group-hover:bg-[#00e5c8]/20 transition-colors animate-glow-pulse">
            <span className="text-[#00e5c8] font-bold text-sm font-mono">MF</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-xs text-[#00e5c8]/70 font-mono tracking-widest uppercase">Md Musa Islam</p>
            <p className="text-sm font-bold text-white tracking-wide" style={{ fontFamily: "var(--font-display)" }}>FAHAD</p>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-[#00e5c8] transition-colors text-xs uppercase tracking-widest font-mono relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00e5c8] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden md:block py-2 px-5 border border-[#00e5c8]/50 text-[#00e5c8] rounded-full hover:bg-[#00e5c8]/10 transition-colors text-xs font-mono tracking-widest uppercase"
          >
            Hire Me
          </a>
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-400 hover:text-[#00e5c8] transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-[#00e5c8]/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-[#00e5c8] transition-colors text-sm uppercase tracking-widest font-mono"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
