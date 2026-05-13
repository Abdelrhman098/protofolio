"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import {
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiRedis,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiJsonwebtokens,
} from "react-icons/si";
import {
  HiOutlineDatabase,
  HiOutlineServer,
  HiOutlineCode,
  HiOutlineCog,
  HiOutlineKey,
  HiOutlineStatusOnline,
  HiOutlineCollection,
  HiOutlinePuzzle,
  HiOutlineLightningBolt,
  HiOutlineChip,
} from "react-icons/hi";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    icon: HiOutlineServer,
    accent: "from-cyan-400 to-blue-500",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
      { name: "NestJS", icon: SiNestjs, color: "#e0234e" },
      { name: "Express.js", icon: SiExpress, color: "#888899" },
      { name: "REST APIs", icon: HiOutlineCode, color: "#00d4ff" },
      { name: "WebSocket", icon: HiOutlineStatusOnline, color: "#10b981" },
      { name: "Authentication", icon: HiOutlineKey, color: "#f59e0b" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#d63aff" },
      { name: "OAuth2", icon: HiOutlinePuzzle, color: "#7c3aed" },
      { name: "Redis", icon: SiRedis, color: "#dc382d" },
    ],
  },
  {
    title: "Frontend",
    icon: HiOutlineCode,
    accent: "from-violet-400 to-purple-500",
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    ],
  },
  {
    title: "Databases",
    icon: HiOutlineDatabase,
    accent: "from-emerald-400 to-green-500",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#00758f" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Oracle DB", icon: HiOutlineDatabase, color: "#f80000" },
    ],
  },
  {
    title: "Tools & Concepts",
    icon: HiOutlineCog,
    accent: "from-amber-400 to-orange-500",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "OOP", icon: HiOutlineCollection, color: "#a78bfa" },
      { name: "Data Structures", icon: HiOutlineLightningBolt, color: "#fbbf24" },
      { name: "Algorithms", icon: HiOutlineChip, color: "#34d399" },
      { name: "System Design", icon: HiOutlinePuzzle, color: "#00d4ff" },
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        title="Technical Skills"
        subtitle="Technologies and tools I use to build production-grade systems"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            className="glass rounded-2xl p-6 sm:p-8 card-hover group"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.accent} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}
              >
                <category.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {category.title}
              </h3>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: catIndex * 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.06] transition-all cursor-default"
                >
                  <span style={{ color: skill.color }}>
                    <skill.icon className="w-4 h-4 shrink-0" />
                  </span>
                  <span className="text-sm text-muted group-hover:text-foreground/80 truncate">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="section-divider mt-20" />
    </SectionWrapper>
  );
}
