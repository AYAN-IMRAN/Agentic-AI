import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "evolution", label: "AI Evolution" },
  { id: "features", label: "Features" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // mobile menu close after click
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="h-[80px] px-6 md:px-16 flex items-center justify-between bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-white">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wider font-mono cursor-pointer">
          Agentic AI
        </h1>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-purple-400 transition duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-[80px] left-0 w-full bg-zinc-900 text-white flex flex-col items-start gap-5 py-6 px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-base font-medium hover:text-purple-400 transition"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
