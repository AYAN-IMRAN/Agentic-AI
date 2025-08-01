import React from "react";
import { Github } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-zinc-700 pb-8">
        
        {/* Logo & Tagline */}
        <div>
          <h1 className="text-2xl font-bold font-mono mb-2">Agentic AI</h1>
          <p className="text-zinc-400 text-sm max-w-sm">
            Empowering the future with autonomous AI agents.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm font-medium">
          <a href="#home" className="hover:text-purple-400 transition">Home</a>
          <a href="#evolution" className="hover:text-purple-400 transition">AI Evolution</a>
          <a href="#features" className="hover:text-purple-400 transition">Features</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>

        {/* GitHub Icon */}
        <div>
          <a
            href="https://github.com/AYAN-IMRAN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition"
          >
            <Github size={20} />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-zinc-500 text-xs">
        © {new Date().getFullYear()} Agentic AI — Made with 💖 by <span className="text-purple-400 font-medium">Ayan</span>
      </div>
    </footer>
  );
}

export default Footer;
