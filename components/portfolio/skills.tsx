"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages & Backend",
    skills: ["Python", "JavaScript", "Node.js", "Express.js", "REST API", "HTML5", "CSS3"],
  },
  {
    title: "AI / ML / NLP",
    skills: ["Machine Learning", "NLP", "spaCy", "TF-IDF", "Word2Vec", "OCR (Tesseract)", "PyPDF2"],
  },
  {
    title: "Database & Tools",
    skills: ["MongoDB", "SQL", "Git", "GitHub", "Postman", "VS Code", "Figma"],
  },
  {
    title: "Design & Visualization",
    skills: ["UI/UX Design", "Responsive Design", "Data Visualization", "EDA", "Feature Engineering"],
  },
  {
    title: "Core CS",
    skills: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "DBMS", "OOP"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-px bg-primary" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
