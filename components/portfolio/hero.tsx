"use client"

import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

const socialLinks = [
  { icon: Github, href: "https://github.com/Reeshav12", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/reeshav-raj-81279423b/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rishab00raj01@gmail.com", label: "Email" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image
                src="/images/profile.png"
                alt="Reeshav Raj"
                width={256}
                height={256}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl -z-10" />
          </motion.div>
          
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-mono text-sm mb-4 tracking-wider">Hi, my name is</p>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-foreground mb-4"
            >
              Reeshav Raj
            </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-4xl font-medium text-muted-foreground mb-6"
        >
          Full Stack Developer & ML Engineer
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-8"
        >
          Computer Science undergraduate specializing in Data Science, with hands-on experience in backend development, machine learning, natural language processing (NLP), optical character recognition (OCR), and data-driven automation. Passionate about designing and developing intelligent, scalable solutions to address real-world challenges.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-3 text-sm text-muted-foreground mb-8"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span>Bhilai, Chhattisgarh</span>
          <span className="text-border">|</span>
          <Phone className="w-4 h-4 text-primary" />
          <span>+91-6201069814</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-6"
        >
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </Link>
          ))}
          <Link
            href="#projects"
            className="ml-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
          >
            View My Work
          </Link>
        </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}
