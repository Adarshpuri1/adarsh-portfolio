import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    company: "Skyscanner",
    role: "Front-End Software Engineering Virtual Internship",
    type: "Virtual Internship",
    period: "March 2026",
    color: "#00b9f1",
    highlights: [
      "Completed a virtual internship focused on front-end software engineering practices.",
      "Integrated reusable UI components and improved application layout using modern frontend principles.",
      "Engineered an AI API to process user prompts and generate intelligent responses for project development.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "GSAP", "MongoDB", "Git & GitHub"],
  },
  {
    company: "LPU MERN Stack Training",
    role: "Full-Stack Development Training",
    type: "Intensive Program",
    period: "Jun – Jul 2025",
    color: "#6366f1",
    highlights: [
      "Completed an intensive MERN Stack training program covering full-stack web development.",
      "Built multiple real-world projects with user authentication, RESTful APIs, and database management.",
      'Developed "Read-Rent-Book" as a capstone project — a book reading and rental platform.',
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT"],
  },
];

const certs = [
  { title: "Full Stack in React and Node", org: "Centre for Professional Enhancement", date: "Jul 2025", color: "#6366f1", link: "/fullstack.png" },
  { title: "Python Programming", org: "CSE Pathsala", date: "Mar 2025", color: "#3776AB", link: "/pythonprogramming.jpg" },
  { title: "Python for Data Science", org: "Board Infinity", date: "Jan 2024", color: "#8b5cf6", link: "/pythondatascience.png" },
  { title: "Responsive Web Design", org: "FreeCodeCamp", date: "Oct 2023", color: "#06b6d4", link: "/webdesin.jpeg" },
  { title: "Skyscanner FE Engineering", org: "Forage", date: "Mar 2026", color: "#00b9f1", link: "/Foragecertificate.pdf" },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">05. Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Background & Training
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="glass rounded-xl p-5 glass-hover relative"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{ background: exp.color }}
              />

              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-mono"
                      style={{ background: `${exp.color}20`, color: exp.color }}
                    >
                      {exp.type}
                    </span>
                    <span className="text-slate-500 text-xs font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white">
                    {exp.company}
                  </h3>
                  <p className="text-slate-400">{exp.role}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-slate-300 text-sm"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: exp.color }}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono"
                    style={{
                      background: `${exp.color}10`,
                      color: exp.color,
                      border: `1px solid ${exp.color}25`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-bold text-white mb-8">
            Certifications
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certs.map((cert, i) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-5 glass-hover block"
              >
                <div
                  className="w-8 h-1 rounded-full mb-4"
                  style={{ background: cert.color }}
                />

                <h4 className="font-medium text-white text-sm mb-1">
                  {cert.title}
                </h4>
                <p className="text-slate-500 text-xs">{cert.org}</p>
                <p className="text-slate-600 text-xs font-mono mt-2">
                  {cert.date}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}