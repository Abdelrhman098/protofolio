"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDown, HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-pulse-glow" />

      {/* Name glow background effect */}
      <div className="hero-name-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-sm text-muted font-medium">
            Available for opportunities
          </span>
        </motion.div>

        {/* Greeting label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hero-greeting"
        >
          HELLO, I&apos;M
        </motion.p>

        {/* Main name heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hero-name"
        >
          <span className="hero-name-text">Abdelrhman Tarek</span>
        </motion.h1>

        {/* Job title with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="hero-title-wrapper"
        >
          <span className="hero-title-line" />
          <span className="hero-title-text">Software Engineer</span>
          <span className="hero-title-line" />
        </motion.div>

        {/* Specialization typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-base sm:text-lg md:text-xl text-muted font-light mb-8 h-[28px] sm:h-[32px]"
        >
          <span className="text-muted/60 mr-2">Specializing in</span>
          <TypeAnimation
            sequence={[
              "Backend Engineering",
              2000,
              "Fintech Systems",
              2000,
              "Trading Platforms",
              2000,
              "Real-Time Applications",
              2000,
              "Scalable APIs",
              2000,
              "Modern Frontend Development",
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="gradient-text-accent font-medium"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-muted text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable fintech systems, trading platforms, and modern web
          applications with a focus on performance, clean architecture, and
          exceptional user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <motion.a
            href="#contact"
            className="hero-btn-primary group"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <HiOutlineMail size={18} />
            <span>Contact Me</span>
            <FaArrowRight
              size={12}
              className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
            />
          </motion.a>
          <motion.a
            href="#projects"
            className="hero-btn-outline"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="https://github.com/Abdelrhman098"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-ghost"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaGithub size={18} />
            GitHub
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted/50"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Scroll
            </span>
            <HiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
