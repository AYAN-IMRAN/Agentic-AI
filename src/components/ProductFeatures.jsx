import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Easy Onboarding",
    description:
      "Quickly get started with intuitive tools and step-by-step agent setup.",
  },
  {
    title: "Smart Automation",
    description:
      "Automate your workflows using intelligent behavior trees and triggers.",
  },
  {
    title: "Real-Time Insights",
    description:
      "Track agent performance with live analytics and optimization suggestions.",
  },
  {
    title: "Seamless Integration",
    description:
      "Integrate effortlessly with your existing tech stack and APIs.",
  },
  {
    title: "Secure Deployment",
    description:
      "Deploy agents with enterprise-grade security and version control.",
  },
];

function ProductFeatures() {
  return (
    <section className="w-full bg-zinc-900 text-white py-24 px-8 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16 overflow-visible">


        <motion.h5
  initial={{ opacity: 0, y: -60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
>
  Agentic AI Features Timeline
</motion.h5>

      </div>

      <div className="relative border-l border-purple-700 ml-4 md:ml-10 space-y-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="relative pl-10 md:pl-14"
          >
            {/* Dot */}
            <div className="absolute -left-[6px] top-2 w-4 h-4 bg-purple-600 rounded-full border border-white shadow-lg" />

            {/* Content */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle size={20} className="text-purple-400" />
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-zinc-300 text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProductFeatures;
