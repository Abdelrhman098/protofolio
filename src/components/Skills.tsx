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
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiJsonwebtokens,
  SiBootstrap,
  SiFramer,
  SiRedux,
  SiHtml5,
  SiCss,
  SiPrisma,
  SiSequelize,
  SiMongoose,
} from "react-icons/si";
import {
  HiOutlineDatabase,
  HiOutlineServer,
  HiOutlineCode,
  HiOutlineCog,
  HiOutlineKey,
  HiOutlineStatusOnline,
  HiOutlinePuzzle,
  HiOutlineLightningBolt,
  HiOutlineChip,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineCube,
  HiOutlineAdjustments,
  HiOutlineBeaker,
  HiOutlineTemplate,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { FaProjectDiagram, FaDatabase } from "react-icons/fa";
import { TbApi, TbBinaryTree } from "react-icons/tb";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  glowColor: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Modern UI engineering with cutting-edge frameworks",
    icon: HiOutlineCode,
    accent: "from-violet-400 via-purple-500 to-fuchsia-500",
    glowColor: "rgba(139, 92, 246, 0.15)",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "Framer Motion", icon: SiFramer, color: "#bb4bff" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764abc" },
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss, color: "#264de4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
    ],
  },
  {
    title: "Backend",
    description: "Scalable server architecture & fintech-grade systems",
    icon: HiOutlineServer,
    accent: "from-cyan-400 via-blue-500 to-indigo-500",
    glowColor: "rgba(0, 212, 255, 0.15)",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
      { name: "NestJS", icon: SiNestjs, color: "#e0234e" },
      { name: "Express.js", icon: SiExpress, color: "#888899" },
      { name: "REST APIs", icon: TbApi, color: "#00d4ff" },
      { name: "WebSocket", icon: HiOutlineStatusOnline, color: "#10b981" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#d63aff" },
      { name: "OAuth2", icon: HiOutlineShieldCheck, color: "#7c3aed" },
      { name: "Redis", icon: SiRedis, color: "#dc382d" },
      { name: "API Integration", icon: HiOutlineGlobeAlt, color: "#38bdf8" },
      { name: "Scalable Architecture", icon: HiOutlineCube, color: "#f59e0b" },
      { name: "Real-Time Systems", icon: HiOutlineLightningBolt, color: "#10b981" },
      { name: "Auth & Authorization", icon: HiOutlineKey, color: "#fbbf24" },
      { name: "Microservices", icon: FaProjectDiagram, color: "#a78bfa" },
    ],
  },
  {
    title: "Databases",
    description: "Data persistence, optimization & query performance",
    icon: HiOutlineDatabase,
    accent: "from-emerald-400 via-green-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.15)",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#00758f" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Oracle Database", icon: FaDatabase, color: "#f80000" },
      { name: "TypeORM", icon: HiOutlineTemplate, color: "#fe0902" },
      { name: "Sequelize", icon: SiSequelize, color: "#52b0e7" },
      { name: "Prisma", icon: SiPrisma, color: "#2d3748" },
      { name: "Mongoose", icon: SiMongoose, color: "#880000" },
      { name: "DB Optimization", icon: HiOutlineAdjustments, color: "#f59e0b" },
      { name: "Query Performance", icon: HiOutlineLightningBolt, color: "#fbbf24" },
      { name: "Relational DBs", icon: HiOutlineViewGrid, color: "#38bdf8" },
      { name: "NoSQL Databases", icon: HiOutlineBeaker, color: "#10b981" },
    ],
  },
  {
    title: "Tools & Concepts",
    description: "Engineering fundamentals & software craftsmanship",
    icon: HiOutlineCog,
    accent: "from-amber-400 via-orange-500 to-red-500",
    glowColor: "rgba(245, 158, 11, 0.15)",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "OOP", icon: HiOutlinePuzzle, color: "#a78bfa" },
      { name: "DSA", icon: TbBinaryTree, color: "#fbbf24" },
      { name: "System Design", icon: HiOutlineCube, color: "#00d4ff" },
      { name: "Problem Solving", icon: HiOutlineChip, color: "#34d399" },
      { name: "Performance Opt.", icon: HiOutlineLightningBolt, color: "#f59e0b" },
      { name: "Clean Architecture", icon: HiOutlineTemplate, color: "#8b5cf6" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.04,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        title="Technical Arsenal"
        subtitle="Production-grade technologies powering scalable fintech systems & modern web applications"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-7"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            className="skill-card group relative"
          >
            {/* Animated glow border */}
            <div
              className="skill-card-glow"
              style={
                {
                  "--glow-color": category.glowColor,
                } as React.CSSProperties
              }
            />

            {/* Card content */}
            <div className="skill-card-inner">
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-7">
                <div
                  className={`skill-category-icon bg-gradient-to-br ${category.accent}`}
                >
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-foreground tracking-tight mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <span className="skill-count">
                  {category.skills.length}
                </span>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    custom={i}
                    variants={badgeVariants}
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="skill-badge"
                  >
                    <span
                      className="skill-badge-icon"
                      style={{ color: skill.color }}
                    >
                      <skill.icon className="w-4 h-4" />
                    </span>
                    <span className="skill-badge-name">{skill.name}</span>

                    {/* Hover glow dot */}
                    <div
                      className="skill-badge-glow"
                      style={
                        {
                          "--badge-glow": skill.color,
                        } as React.CSSProperties
                      }
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="section-divider mt-20"
      />
    </SectionWrapper>
  );
}
