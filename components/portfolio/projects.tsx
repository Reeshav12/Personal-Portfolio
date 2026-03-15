"use client"

import { motion } from "framer-motion"
import { ExternalLink, Folder } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Automated-Data-Verrification",
    description:
      "Built a Python-based automation pipeline for document verification, reducing manual verification effort by 80% across 1,000+ document records. Integrated ML, OCR (Tesseract), and NLP (spaCy) to extract and validate structured data fields with 95%+ accuracy.",
    tags: ["Python", "Machine Learning", "NLP", "OCR", "spaCy", "Tesseract"],
    link: "https://automated-data-verrification.onrender.com",
    year: "2024–2025",
    featured: true,
    live: true,
  },
  {
    title: "InternSphere – AI-Based Internship Recommendation Engine",
    description:
      "Built a resume parsing pipeline using PyPDF2, Tesseract OCR, and spaCy to extract structured data from 100+ resume formats. Implemented NLP-based matching algorithms — TF-IDF, spaCy similarity, Word2Vec — to compare resume profiles with 500+ job descriptions, improving recommendation accuracy by 35%.",
    tags: ["Python", "NLP", "TF-IDF", "Word2Vec", "spaCy", "PyPDF2", "OCR"],
    link: "https://intern-spherec.vercel.app",
    year: "2024–2025",
    featured: true,
    live: true,
  },
  {
    title: "ResuMate",
    description:
      "A Streamlit-based resume analyzer that helps applicants compare resumes against job roles and helps recruiters review candidate data. It includes applicant and recruiter demo flows, PDF resume parsing, semantic and keyword-based matching, skill-gap recommendations, and a recruiter dashboard with CSV export.",
    tags: ["Streamlit", "Python", "PDF Parsing", "NLP", "Semantic Matching", "CSV"],
    link: "https://resume-analyzer-mdvh.onrender.com",
    year: "2024–2025",
    featured: true,
    live: true,
  },
  {
    title: "CSVTU Academic Portal",
    description:
      "Designed and deployed a full-stack web portal serving 500+ students and faculty with study materials, PYQs, and structured academic resources. Built responsive, accessible UI with optimized navigation, reducing resource search time by 60%.",
    tags: ["Web Development", "HTML5", "CSS3", "JavaScript", "UI/UX Design"],
    link: "https://csvtu.site",
    year: "2023",
    featured: true,
    live: true,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-px bg-primary" />
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Folder className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground font-mono">{project.year}</span>
                    {project.live && (
                      <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
                        Live
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.link && (
                  <div className="flex items-center gap-4">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
