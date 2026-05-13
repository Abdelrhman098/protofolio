"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePaperAirplane,
} from "react-icons/hi";

const contactLinks = [
  {
    name: "Email",
    value: "abdelrhmantarek208@gmail.com",
    href: "mailto:abdelrhmantarek208@gmail.com",
    icon: HiOutlineMail,
    color: "#00d4ff",
    description: "Send me an email",
  },
  {
    name: "GitHub",
    value: "Abdelrhman098",
    href: "https://github.com/Abdelrhman098",
    icon: FaGithub,
    color: "#f0f0f0",
    description: "Check my repositories",
  },
  {
    name: "LinkedIn",
    value: "Abdelrhman Tarek",
    href: "https://www.linkedin.com/in/abdelrhman-tarek-066715271",
    icon: FaLinkedin,
    color: "#0077b5",
    description: "Let's connect professionally",
  },
  {
    name: "WhatsApp",
    value: "01010316950",
    href: "https://wa.me/201010316950",
    icon: FaWhatsapp,
    color: "#25d366",
    description: "Quick message",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Get In Touch"
        subtitle="Let's discuss how I can contribute to your next project"
      />

      <div className="max-w-4xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or how my experience in fintech and backend engineering
            can add value to your team.
          </p>
          <motion.a
            href="mailto:abdelrhmantarek208@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            <HiOutlinePaperAirplane className="w-5 h-5 rotate-45" />
            Say Hello
          </motion.a>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass rounded-2xl p-6 card-hover group flex items-center gap-5"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${link.color}15, ${link.color}08)`,
                  border: `1px solid ${link.color}20`,
                }}
              >
                <link.icon
                  className="w-6 h-6 transition-colors"
                  style={{ color: link.color }}
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-foreground font-semibold text-base">
                  {link.name}
                </h3>
                <p className="text-muted text-sm truncate">{link.value}</p>
                <p className="text-xs mt-0.5" style={{ color: link.color }}>
                  {link.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mt-10 text-muted/50 text-sm"
        >
          <HiOutlineLocationMarker className="w-4 h-4" />
          <span>Open to remote opportunities worldwide</span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
