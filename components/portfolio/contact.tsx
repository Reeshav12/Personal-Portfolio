"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const contactLinks = [
  {
    label: "Email",
    value: "rishab00raj01@gmail.com",
    href: "mailto:rishab00raj01@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Reeshav12",
    href: "https://github.com/Reeshav12",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/reeshavraj",
    href: "https://www.linkedin.com/in/reeshav-raj-81279423b/",
    icon: Linkedin,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-primary font-mono text-sm mb-4">{"What's"} Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {"I'm"} currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, a project idea, or just want to say hi, 
            {"I'll"} try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="https://wa.me/916201069814"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 flex items-center gap-2"
          >
            Say Hello
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {contactLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group"
            >
              <link.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                {link.label}
              </p>
              <p className="text-muted-foreground text-sm mt-1">{link.value}</p>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
