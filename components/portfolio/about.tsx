"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Database, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building scalable web applications with modern technologies like Node.js, Express, and JavaScript.",
  },
  {
    icon: Brain,
    title: "Machine Learning & NLP",
    description: "Creating intelligent systems using ML, NLP, spaCy, TF-IDF, and Word2Vec for real-world automation.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Designing data pipelines with OCR, document parsing, and automated verification systems.",
  },
  {
    icon: Sparkles,
    title: "Problem Solver",
    description: "Built 2+ end-to-end projects reducing manual effort by up to 80% through intelligent automation.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-px bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              {"I'm"} a Computer Science undergraduate passionate about crafting intelligent, scalable applications 
              that solve real-world problems. My journey began with curiosity about how software can automate 
              complex tasks and evolved into expertise in full-stack development, machine learning, and NLP.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my B.Tech at Rungta College of Engineering & Technology, I specialize in 
              backend development, building automation pipelines, and creating AI-powered solutions. {"I've"} 
              worked on projects ranging from document verification systems achieving 95%+ accuracy to 
              AI-based recommendation engines.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When {"I'm"} not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or diving deep into the latest developments in AI and machine learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
