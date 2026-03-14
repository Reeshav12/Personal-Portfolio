"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com/Reeshav12", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/reeshav-raj-81279423b/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rishab00raj01@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
          
          <p className="text-muted-foreground text-sm text-center flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary" /> by Reeshav Raj
          </p>
          
          <p className="text-muted-foreground/60 text-xs font-mono">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
