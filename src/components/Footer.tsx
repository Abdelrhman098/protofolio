"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.05]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="group">
              <span className="text-xl font-bold gradient-text">AT</span>
              <span className="text-xl font-light text-muted ml-0.5">
                .dev
              </span>
            </a>
            <p className="text-sm text-muted/50">
              © {currentYear} Abdelrhman Tarek. Crafted with precision.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: FaGithub,
                href: "https://github.com/Abdelrhman098",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/abdelrhman-tarek-066715271",
                label: "LinkedIn",
              },
              {
                icon: HiOutlineMail,
                href: "mailto:abdelrhmantarek208@gmail.com",
                label: "Email",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm text-muted/50 hover:text-primary transition-colors flex items-center gap-1"
          >
            Back to top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
