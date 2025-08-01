// src/components/MobileMenu.jsx
import React from "react";
import { motion } from "framer-motion";

function MobileMenu({ setIsOpen, items, scrollToSection }) {
  return (
    <motion.div
      className="fixed top-[80px] left-0 w-full bg-zinc-900 text-white px-8 py-6 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-lg text-left hover:text-zinc-300 transition"
          >
            {item.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default MobileMenu;
