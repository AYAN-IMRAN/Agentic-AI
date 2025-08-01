import React from "react";
import { motion } from "framer-motion";
import video from "../assets/ai-evolution.mp4";

function AIEvolution() {
  return (
    <section className="w-full bg-zinc-900 text-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-400 drop-shadow-lg"
        >
          The Evolution of AI
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-zinc-400 text-base md:text-lg mb-12 max-w-2xl"
        >
          Witness the transformation of artificial intelligence — from basic
          bots to autonomous agents changing our future.
        </motion.p>

        {/* VIDEO EMBED */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-full max-w-5xl aspect-video shadow-2xl rounded-2xl overflow-hidden border border-purple-800/20 bg-black/30 backdrop-blur-md"
        >
          <video
            className="w-full h-full rounded-xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}

export default AIEvolution;
