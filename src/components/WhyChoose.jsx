import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  ShieldCheck,
  Zap,
  Brain,
  Globe,
  Code2,
} from "lucide-react";

const features = [
  {
    icon: <Cpu size={36} />,
    title: "Advanced Intelligence",
    description:
      "Next-gen algorithms that think, learn, and adapt.",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Secure & Reliable",
    description:
      "Top-notch encryption and system reliability built-in.",
  },
  {
    icon: <Zap size={36} />,
    title: "Lightning Performance",
    description:
      "Fast, optimized agents ready for heavy loads.",
  },
  {
    icon: <Brain size={36} />,
    title: "Cognitive Autonomy",
    description:
      "Agents that self-improve and reason independently.",
  },
  {
    icon: <Globe size={36} />,
    title: "Global Scalability",
    description:
      "Deploy AI across continents with zero effort.",
  },
  {
    icon: <Code2 size={36} />,
    title: "Open Source",
    description:
      "Completely open and customizable for developers.",
  },
];

function WhyChoose() {
  return (
    <section className="w-full bg-zinc-950 text-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADING */}
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-3xl font-bold mb-22 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        >
          Why Choose Agentic AI?
        </motion.h3>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-4 text-purple-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
