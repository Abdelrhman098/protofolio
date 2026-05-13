"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChevronRight,
} from "react-icons/hi";

interface ExperienceItem {
  role: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Backend Engineer",
    type: "Fintech · Investment Platform",
    period: "2024 — Present",
    description:
      "Lead backend development for a comprehensive investment and trading platform, designing the core API architecture and real-time data pipelines that power the brokerage experience.",
    highlights: [
      "Architected scalable REST APIs handling high-frequency trading data with sub-100ms response times",
      "Designed and implemented real-time portfolio tracking using WebSocket connections",
      "Built secure authentication and authorization flows with JWT, OAuth2, and role-based access control",
      "Optimized database queries and implemented Redis caching, reducing API latency by 60%",
    ],
    technologies: ["Node.js", "NestJS", "MySQL", "Redis", "WebSocket", "JWT"],
  },
  {
    role: "Software Engineer",
    type: "Fintech · Stock Market Systems",
    period: "2023 — 2024",
    description:
      "Contributed to the development of a stock market analytics and brokerage platform, building critical backend services for market data processing and order management.",
    highlights: [
      "Developed RESTful APIs for stock market data aggregation and portfolio analytics",
      "Built real-time notification systems for price alerts and trade confirmations",
      "Implemented secure payment processing and transaction management modules",
      "Collaborated with cross-functional teams to deliver new features on aggressive timelines",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "REST APIs",
    ],
  },
  {
    role: "Full-Stack Developer",
    type: "Fintech · Financial Services",
    period: "2022 — 2023",
    description:
      "Developed full-stack solutions for financial services applications, focusing on building intuitive user interfaces backed by performant API services.",
    highlights: [
      "Built responsive frontend dashboards for financial data visualization using React and Next.js",
      "Developed backend services for user management, KYC workflows, and reporting",
      "Implemented comprehensive API documentation and testing infrastructure",
      "Improved backend performance through database optimization and efficient query patterns",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "TypeScript",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        title="Experience"
        subtitle="Professional journey building financial technology and scalable systems"
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-transparent hidden sm:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative sm:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-8 w-3 h-3 -translate-x-1.5 rounded-full bg-primary glow-primary hidden sm:block">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
              </div>

              <div className="glass rounded-2xl p-6 sm:p-8 card-hover group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <HiOutlineBriefcase className="w-4 h-4 text-primary/60" />
                      <span className="text-sm text-accent-light font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted shrink-0">
                    <HiOutlineCalendar className="w-4 h-4" />
                    <span className="font-mono">{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted text-sm sm:text-base leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {exp.highlights.map((highlight, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                      className="flex items-start gap-2 text-sm text-muted/80"
                    >
                      <HiOutlineChevronRight className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/8 text-primary/80 border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </SectionWrapper>
  );
}
