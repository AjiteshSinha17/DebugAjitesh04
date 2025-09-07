"use client";
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchGitHubUser } from '@/lib/github-api';
import { Button } from '@/components/ui/button';
import { useScrollToSection } from '@/hooks/use-scroll-to-section';

const HeroSection: React.FC = () => {
  const { scrollToSection } = useScrollToSection();
  
  const { data: githubUser, isLoading, error } = useQuery({
    queryKey: ['github-user', 'AjiteshSinha17'],
    queryFn: () => fetchGitHubUser('AjiteshSinha17'),
  });

  const handleHireClick = () => {
    scrollToSection('contact');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
        {/* Profile Card */}
        <div className="glassmorphism rounded-3xl p-10 max-w-md animate-slide-up">
          {/* Profile Image with gradient border */}
          <div className="relative mb-6">
            <div className="w-56 h-56 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl animate-pulse-glow"></div>
              {isLoading ? (
                <div className="relative w-full h-full bg-muted rounded-3xl border-4 border-background animate-pulse"></div>
              ) : error ? (
                <div className="relative w-full h-full bg-muted rounded-3xl border-4 border-background flex items-center justify-center">
                  <i className="fas fa-user text-4xl text-muted-foreground"></i>
                </div>
              ) : (
                <img 
                  src={githubUser?.avatar_url || "https://avatars.githubusercontent.com/u/89742421?v=4"} 
                  alt="Ajitesh Sinha Profile" 
                  className="relative w-full h-full object-cover rounded-3xl border-4 border-background"
                  data-testid="profile-image"
                />
              )}
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="text-center space-y-3">
            <h2 className="text-xl font-bold text-foreground" data-testid="profile-name">
              {githubUser?.name || "Ajitesh Sinha"}
            </h2>
            <p className="text-sm text-primary font-medium" data-testid="profile-title">
              Mobile App Developer
            </p>
            <p className="text-sm text-muted-foreground" data-testid="profile-email">
              ajiteshsinha2004@gmail.com
            </p>
            <div className="text-sm text-muted-foreground">
              <p data-testid="profile-location">Greater Noida</p>
              <p data-testid="profile-region">Uttar Pradesh, India</p>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4 pt-4">
              <a 
                href="https://github.com/AjiteshSinha17" 
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/ajitesh-sinha-501124295/" 
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            
            {/* CTA Button */}
            <Button 
              onClick={handleHireClick}
              className="w-full mt-6 bg-gradient-to-r from-primary to-accent text-white py-3 px-6 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 animate-pulse-glow"
              data-testid="button-hire"
            >
              <i className="fas fa-envelope mr-2"></i>HIRE ME!
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-3xl ml-16">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-bounce-subtle">
              <i className="fas fa-star mr-2"></i>INTRODUCE
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slide-up">
            Hi, I'm <span className="text-primary">Ajitesh</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Mobile App Developer
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            I design and code beautifully complex things simply and I love what I do. Just simple like that! 
            Passionate about building powerful, user-friendly Android and iOS applications with cutting-edge technology.
          </p>
          
          {/* Experience Counter */}
          <div className="flex items-center space-x-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" data-testid="experience-years">
                2+
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Years of<br />Experience
              </div>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection('portfolio')}
              title="View Projects"
              aria-label="View Projects"
              className="w-20 h-20 relative cursor-pointer group"
            >
              <div className="absolute inset-0 border-4 border-primary rounded-full animate-rotate opacity-30"></div>
              <div className="absolute inset-2 border-2 border-accent rounded-full animate-rotate" style={{ animationDirection: 'reverse' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-drift group-hover:animate-pulse"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
