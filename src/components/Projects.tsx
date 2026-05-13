"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  HiOutlineTrendingUp,
  HiOutlineChartBar,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineServer,
} from "react-icons/hi";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  gradient: string;
  accentColor: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "Real-Time Trading Platform",
    description: "High-performance trading engine",
    longDescription:
      "A full-featured real-time trading platform supporting live market data streaming, order placement, position tracking, and portfolio management. Built with WebSocket for sub-second data delivery and optimized for high concurrency.",
    icon: HiOutlineTrendingUp,
    technologies: [
      "Node.js",
      "NestJS",
      "WebSocket",
      "Redis",
      "MySQL",
      "React",
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
    accentColor: "#00d4ff",
    githubUrl: "https://github.com/Abdelrhman098",
    liveUrl: "#",
  },
  {
    title: "Investment Portfolio Dashboard",
    description: "Analytics & portfolio management",
    longDescription:
      "An interactive investment dashboard providing real-time portfolio analytics, asset allocation insights, profit/loss tracking, and historical performance charts. Features responsive design with data visualization and automated reporting.",
    icon: HiOutlineChartPie,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Chart.js",
    ],
    gradient: "from-violet-500/20 to-purple-500/20",
    accentColor: "#7c3aed",
    githubUrl: "https://github.com/Abdelrhman098",
    liveUrl: "#",
  },
  {
    title: "Fintech Payment API",
    description: "Secure payment processing system",
    longDescription:
      "A robust payment processing API supporting multiple payment methods, transaction management, refund handling, and comprehensive audit logging. Implements industry-standard security with encryption, tokenization, and fraud detection.",
    icon: HiOutlineCreditCard,
    technologies: [
      "Node.js",
      "Express.js",
      "MySQL",
      "Redis",
      "JWT",
      "OAuth2",
    ],
    gradient: "from-emerald-500/20 to-green-500/20",
    accentColor: "#10b981",
    githubUrl: "https://github.com/Abdelrhman098",
    liveUrl: "#",
  },
  {
    title: "Stock Market Analytics System",
    description: "Market data aggregation & analysis",
    longDescription:
      "An advanced analytics system for stock market data aggregation, technical indicator calculations, and trend analysis. Processes large volumes of market data in real-time with efficient caching and query optimization.",
    icon: HiOutlineChartBar,
    technologies: [
      "NestJS",
      "TypeScript",
      "Redis",
      "MySQL",
      "WebSocket",
      "REST",
    ],
    gradient: "from-amber-500/20 to-orange-500/20",
    accentColor: "#f59e0b",
    githubUrl: "https://github.com/Abdelrhman098",
    liveUrl: "#",
  },
  {
    title: "Brokerage Backend Infrastructure",
    description: "Scalable brokerage platform core",
    longDescription:
      "The core backend infrastructure for a digital brokerage platform, handling user account management, KYC verification, order routing, and settlement processing. Designed for high availability and regulatory compliance.",
    icon: HiOutlineServer,
    technologies: [
      "Node.js",
      "NestJS",
      "Oracle DB",
      "Redis",
      "Docker",
      "REST APIs",
    ],
    gradient: "from-rose-500/20 to-pink-500/20",
    accentColor: "#f43f5e",
    githubUrl: "https://github.com/Abdelrhman098",
    liveUrl: "#",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="Showcasing production-grade fintech and trading systems"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl overflow-hidden card-hover group flex flex-col"
          >
            {/* Card Header with Icon */}
            <div
              className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
            >
              {/* Animated grid pattern */}
              <div className="absolute inset-0 bg-grid opacity-30" />

              {/* Floating decorative elements */}
              <div
                className="absolute top-4 right-4 w-20 h-20 rounded-full blur-2xl opacity-30"
                style={{ backgroundColor: project.accentColor }}
              />
              <div
                className="absolute bottom-4 left-4 w-16 h-16 rounded-full blur-2xl opacity-20"
                style={{ backgroundColor: project.accentColor }}
              />

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ color: project.accentColor }}
              >
                <project.icon className="w-16 h-16 relative z-10" />
              </motion.div>

              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[rgba(10,10,15,0.6)] to-transparent" />
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p
                className="text-sm font-medium mb-3"
                style={{ color: project.accentColor }}
              >
                {project.description}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
                {project.longDescription}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/[0.04] text-muted border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-white/[0.05] text-muted hover:text-foreground hover:bg-white/[0.1] border border-white/[0.08] transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                  Code
                </motion.a>
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-white/90 transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}40, ${project.accentColor}20)`,
                    borderColor: `${project.accentColor}30`,
                    borderWidth: "1px",
                  }}
                >
                  <FaExternalLinkAlt className="w-3 h-3" />
                  Preview
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="section-divider mt-20" />
    </SectionWrapper>
  );
}
