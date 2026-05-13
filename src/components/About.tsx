"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineLightningBolt,
  HiOutlineGlobe,
} from "react-icons/hi";

const highlights = [
  {
    icon: HiOutlineServer,
    title: "Backend Systems",
    description: "Scalable APIs & microservices architecture",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Fintech Solutions",
    description: "Trading platforms & financial applications",
  },
  {
    icon: HiOutlineCode,
    title: "Clean Architecture",
    description: "Maintainable, testable, and well-documented code",
  },
  {
    icon: HiOutlineGlobe,
    title: "Full-Stack Capability",
    description: "End-to-end development across the stack",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Me"
        subtitle="Engineering solutions at the intersection of finance and technology"
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            I am a dedicated Software Engineer with strong experience in
            building scalable backend systems and modern web applications. My
            expertise spans across the fintech domain, where I have worked on
            stock market platforms, investment solutions, and trading
            infrastructure that handles real-time data with precision and
            reliability.
          </p>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            I specialize in designing and implementing high-performance APIs,
            real-time communication systems, and secure authentication flows. My
            approach emphasizes clean architecture, comprehensive testing, and
            performance optimization — ensuring every system I build is
            production-ready and maintainable at scale.
          </p>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            With a passion for continuous learning and a focus on delivering
            business value, I thrive in fast-paced environments where technical
            excellence meets product impact. I am comfortable working across the
            full stack, from database design and API development to building
            responsive, accessible frontends.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-4">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "20+", label: "Projects Built" },
              { value: "100%", label: "Commitment" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass rounded-2xl p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </SectionWrapper>
  );
}
