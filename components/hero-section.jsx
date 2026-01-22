"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/zainabbasi38", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/zain-abbasi-a24b83331", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:zainabbasi7534@gmail.com", label: "Email" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold text-primary">
              Dev
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
<div className="flex-1 flex items-center pt-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      
      {/* Profile Image */}
      <div className="flex justify-center md:justify-start">
        <Image
          src="/portfolio/pic.png"
          alt="Profile Picture"
          width={260}
          height={260}
          className="rounded-full object-cover
                     w-40 h-40
                     sm:w-48 sm:h-48
                     md:w-56 md:h-56
                     lg:w-64 lg:h-64
                     border-4 border-primary/30 shadow-xl"
        />
      </div>

      {/* Text Content */}
      <div>
        <p className="text-primary font-mono mb-4">
          Hi, my name is
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          Zain Abbasi
        </h1>

        <h2 className="text-3xl sm:text-4xl font-bold text-muted-foreground mb-6">
          I build things for the web.
        </h2>

        <p className="text-lg text-muted-foreground max-w-xl mb-8">
          I'm a full stack web developer with 1 year of experience specializing
          in building exceptional digital experiences.
        </p>

        <div className="flex gap-4 mb-10">
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              className="p-2 text-muted-foreground hover:text-primary transition"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

      </div>
    </div>
  </div>
</div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
