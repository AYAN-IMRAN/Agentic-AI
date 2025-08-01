import React from "react";
import { motion } from "framer-motion";
import Robot from "../assets/robot.png";

function Hero() {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111827] flex items-center justify-center px-6 md:px-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 py-10">
        {/* LEFT TEXT */}
        <motion.div
          className="md:w-1/2 p-6 rounded-2xl bg-white/10 backdrop-blur-xl shadow-lg"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
            Welcome to Agentic AI
          </h1>
          <p className="text-zinc-300 mb-6 text-base md:text-lg leading-relaxed">
            Build powerful autonomous agents that supercharge your productivity and imagination. Fully open-source. Limitless potential.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full text-white font-semibold shadow-xl hover:shadow-2xl transition duration-300"
          >
            Get Started 🚀
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src={Robot}
            alt="AI Robot"
            className="w-[80%] md:w-[90%] h-auto rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
