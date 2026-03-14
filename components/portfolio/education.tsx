"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen } from "lucide-react"

const education = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    institution: "Rungta College of Engineering & Technology",
    location: "Bhilai, Chhattisgarh",
    period: "Oct 2022 – May 2026",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "OOP",
      "Software Engineering",
      "Machine Learning",
    ],
  },
  {
    degree: "Intermediate (I.Sc) – Computer Science",
    institution: "College of Commerce",
    location: "Chhattisgarh",
    period: "2019 – 2021",
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-24 h-px bg-primary" />
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-primary">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm">{edu.location}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground font-mono">{edu.period}</span>
              </div>

              {edu.coursework && (
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
