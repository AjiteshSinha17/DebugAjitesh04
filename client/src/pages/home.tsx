"use client";
import React from 'react';
import AnimatedBackground from '@/components/animated-background';
import SideNavigation from '@/components/side-navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';

const BlogSection: React.FC = () => (
  <section id="blog" className="py-20 relative">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Latest <span className="text-primary">Blog</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Sharing insights, tutorials, and experiences from my journey as a mobile app developer.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="glassmorphism rounded-2xl p-6 hover:scale-105 transition-transform duration-300" data-testid="blog-flutter-state">
          <div className="w-full h-48 bg-gradient-to-r from-primary to-accent rounded-xl mb-4 flex items-center justify-center">
            <i className="fab fa-flutter-dash text-4xl text-white"></i>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Flutter State Management Best Practices</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Exploring different state management solutions in Flutter and when to use each approach.
          </p>
          <div className="text-xs text-muted-foreground">Dec 15, 2024</div>
        </div>
        
        <div className="glassmorphism rounded-2xl p-6 hover:scale-105 transition-transform duration-300" data-testid="blog-cross-platform">
          <div className="w-full h-48 bg-gradient-to-r from-secondary to-primary rounded-xl mb-4 flex items-center justify-center">
            <i className="fas fa-mobile-alt text-4xl text-white"></i>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Cross-Platform Mobile Development in 2024</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Comparing Flutter, React Native, and native development for modern mobile apps.
          </p>
          <div className="text-xs text-muted-foreground">Dec 10, 2024</div>
        </div>
        
        <div className="glassmorphism rounded-2xl p-6 hover:scale-105 transition-transform duration-300" data-testid="blog-ethical-hacking">
          <div className="w-full h-48 bg-gradient-to-r from-accent to-secondary rounded-xl mb-4 flex items-center justify-center">
            <i className="fas fa-shield-alt text-4xl text-white"></i>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Ethical Hacking for Mobile Apps</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Security considerations and penetration testing techniques for mobile applications.
          </p>
          <div className="text-xs text-muted-foreground">Dec 5, 2024</div>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <div className="flex justify-center space-x-6 mb-6">
        <a 
          href="https://github.com/AjiteshSinha17" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          data-testid="footer-github"
        >
          <i className="fab fa-github text-xl"></i>
        </a>
        <a 
          href="https://www.linkedin.com/in/ajitesh-sinha-501124295/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          data-testid="footer-linkedin"
        >
          <i className="fab fa-linkedin text-xl"></i>
        </a>
        <a 
          href="mailto:ajiteshsinha2004@gmail.com" 
          className="text-muted-foreground hover:text-primary transition-colors"
          data-testid="footer-email"
        >
          <i className="fas fa-envelope text-xl"></i>
        </a>
      </div>
      <p className="text-muted-foreground" data-testid="footer-copyright">
        © 2024 Ajitesh Sinha. All rights reserved.
      </p>
    </div>
  </footer>
);

const Home: React.FC = () => {
  return (
    <div className="bg-background text-foreground font-sans overflow-x-hidden animated-bg">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <AnimatedBackground />
      <SideNavigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
