import React from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageCircle } from "lucide-react";

function Contact() {
  return (
    <section className="w-full bg-zinc-950 text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        >
          Let's Connect
        </motion.h2>
        <p className="text-zinc-400 mt-4 text-sm md:text-base">
          Got a question, idea or just want to say hello? We’d love to hear from you.
        </p>
      </div>

      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-3xl mx-auto space-y-6"
      >
        {/* Name Field */}
        <div className="flex items-center bg-white/5 px-4 py-3 rounded-lg">
          <User className="text-purple-400 mr-3" />
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent outline-none w-full text-white placeholder-zinc-400"
          />
        </div>

        {/* Email Field */}
        <div className="flex items-center bg-white/5 px-4 py-3 rounded-lg">
          <Mail className="text-blue-400 mr-3" />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent outline-none w-full text-white placeholder-zinc-400"
          />
        </div>

        {/* Message Field */}
        <div className="flex items-start bg-white/5 px-4 py-3 rounded-lg">
          <MessageCircle className="text-pink-400 mr-3 mt-1" />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="bg-transparent outline-none w-full text-white placeholder-zinc-400 resize-none"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Send Message ✉️
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;
