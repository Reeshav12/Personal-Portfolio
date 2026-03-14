"use client"

import { motion } from "framer-motion"
import { Briefcase, ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Software Engineering Job Simulation",
    company: "JPMorgan Chase & Co. (Forage)",
    period: "March 2026",
    description: [
      "Completed practical tasks in Project Setup, Kafka Integration, H2 Integration, and REST API Integration.",
      "Built REST API controllers and implemented backend services following enterprise software engineering practices.",
    ],
    certificate: "/certificates/jpmorgan-software-engineering.pdf",
  },
  {
    title: "Data Science Job Simulation",
    company: "BCG X (Forage)",
    period: "March 2026",
    description: [
      "Completed practical tasks in exploratory data analysis, data cleaning, and feature engineering for business problem solving.",
      "Built and evaluated predictive models; delivered actionable insights and recommendations to stakeholders.",
    ],
    certificate: "/certificates/bcg-data-science.pdf",
  },
  {
    title: "Data Analyst – Virtual Internship",
    company: "Deloitte (Forage)",
    period: "December 2025",
    description: [
      "Analyzed 3+ business datasets using data cleaning, transformation, and visualization techniques to surface actionable insights for stakeholders.",
      "Performed forensic technology analysis and interpreted KPIs; delivered concise, data-driven reports aligned with enterprise consulting frameworks.",
    ],
    certificate: "/certificates/deloitte-virtual-internship.pdf",
  },
  {
    title: "Data Visualisation: Empowering Business with Effective Insights",
    company: "Tata (Forage)",
    period: "July 2024",
    description: [
      "Completed practical tasks in framing business scenarios, choosing the right visuals, and creating effective visualizations.",
      "Communicated insights and analysis to stakeholders through compelling data-driven presentations.",
    ],
    certificate: "/certificates/tata-data-analytics.pdf",
  },
]

const certifications = [
  {
    title: "Software Engineer Role Certification",
    issuer: "HackerRank",
    date: "March 2026",
    certificate: "/certificates/software-engineer-hackerrank.pdf",
  },
  {
    title: "Python Programming",
    issuer: "Microsoft (Skill India Digital Hub)",
    date: "December 2025",
    duration: "40 Hours",
    certificate: "/certificates/python-microsoft.pdf",
  },
  {
    title: "AWS Cloud Essentials Knowledge Badge",
    issuer: "Amazon Web Services",
    date: "December 2024",
    certificate: "/certificates/aws-cloud-essentials.pdf",
  },
  {
    title: "Machine Learning Terminology and Process",
    issuer: "Amazon Web Services",
    date: "September 2024",
    certificate: "/certificates/aws-machine-learning.pdf",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "September 2024",
    certificate: "/certificates/postman-api.pdf",
  },
  {
    title: "Master Figma: The Ultimate UI/UX Design Tool",
    issuer: "Physics Wallah",
    date: "September 2024",
    certificate: "/certificates/figma-uiux.pdf",
  },
  {
    title: "Introduction to Data Science",
    issuer: "IBM (Cognitive Class)",
    date: "August 2024",
    certificate: "/certificates/ibm-data-science.pdf",
  },
  {
    title: "Getting Started with MongoDB Atlas",
    issuer: "MongoDB University",
    date: "August 2024",
    certificate: "/certificates/mongodb-atlas.pdf",
  },
  {
    title: "Backend Development",
    issuer: "Physics Wallah",
    certificate: "/certificates/backend-development.pdf",
  },
  {
    title: "DSA With Java",
    issuer: "Apna College",
    certificate: "/certificates/dsa-java.pdf",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Certifications
          </h2>
          <div className="w-24 h-px bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-primary" />
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors duration-300"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                        <span className="text-primary mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {exp.certificate && (
                    <button
                      onClick={() => window.open(exp.certificate, '_blank', 'noopener,noreferrer')}
                      className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-primary/80 transition-colors font-medium cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <button
                  key={index}
                  onClick={() => cert.certificate && window.open(cert.certificate, '_blank', 'noopener,noreferrer')}
                  className="block w-full text-left p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors duration-300 group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                      {(cert.date || cert.duration) && (
                        <p className="text-xs text-primary/80 mt-1 font-mono">
                          {cert.date}{cert.date && cert.duration && " • "}{cert.duration}
                        </p>
                      )}
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
