import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate mobile app developer with expertise in creating beautiful, functional applications 
            that deliver exceptional user experiences across Android and iOS platforms.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6" data-testid="about-mobile-development">
              <h3 className="text-xl font-semibold text-primary mb-3">
                <i className="fas fa-mobile-alt mr-3"></i>Mobile Development Expert
              </h3>
              <p className="text-muted-foreground">
                Specialized in Flutter development with strong foundations in Dart, creating cross-platform 
                applications that perform seamlessly on both Android and iOS devices.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6" data-testid="about-ethical-hacking">
              <h3 className="text-xl font-semibold text-secondary mb-3">
                <i className="fas fa-shield-alt mr-3"></i>Ethical Hacker
              </h3>
              <p className="text-muted-foreground">
                Passionate about cybersecurity with expertise in ethical hacking, vulnerability assessment, 
                and system fortification in Linux environments.
              </p>
            </div>
            
            {/* Education */}
            <div className="glassmorphism rounded-2xl p-6" data-testid="about-education">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                <i className="fas fa-graduation-cap mr-3 text-primary"></i>Education
              </h3>
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">B.Tech (AKTU)</div>
                  <div className="text-base font-medium">Bachelor of Technology</div>
                </div>
                <div className="text-sm text-muted-foreground">2023 – 2027</div>
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-6" data-testid="about-fullstack">
              <h3 className="text-xl font-semibold text-accent mb-3">
                <i className="fas fa-code mr-3"></i>Full Stack Capabilities
              </h3>
              <p className="text-muted-foreground">
                Expanding skills in backend development, cloud computing, and web technologies while 
                maintaining strong expertise in DSA and multiple programming languages.
              </p>
            </div>
          </div>
          
          {/* Stats + Skills */}
          <div className="grid grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6 text-center" data-testid="stat-projects">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="glassmorphism rounded-2xl p-6 text-center" data-testid="stat-repositories">
              <div className="text-3xl font-bold text-secondary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">GitHub Repositories</div>
            </div>
            <div className="glassmorphism rounded-2xl p-6 text-center" data-testid="stat-flutter">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Flutter Proficiency</div>
            </div>
            <div className="glassmorphism rounded-2xl p-6 text-center" data-testid="stat-experience">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>

            {/* Skills Grid */}
            <div className="col-span-2 grid md:grid-cols-2 gap-6">
              <div className="glassmorphism rounded-2xl p-6">
                <h4 className="text-sm font-semibold text-primary mb-4">Frontend</h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Framer Motion'].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full bg-primary/10 text-primary">{s}</span>
                  ))}
                </div>
              </div>
              <div className="glassmorphism rounded-2xl p-6">
                <h4 className="text-sm font-semibold text-secondary mb-4">Backend</h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['REST API', 'Node.js', 'Zod', 'Auth'].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full bg-secondary/10 text-secondary">{s}</span>
                  ))}
                </div>
              </div>
              <div className="glassmorphism rounded-2xl p-6">
                <h4 className="text-sm font-semibold text-accent mb-4">Databases</h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['MySQL', 'PostgreSQL', 'SQLite'].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full bg-accent/10 text-accent">{s}</span>
                  ))}
                </div>
              </div>
              <div className="glassmorphism rounded-2xl p-6">
                <h4 className="text-sm font-semibold text-foreground mb-4">Tools & Methods</h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['CI/CD', 'Docker', 'Git', 'GitHub', 'Vercel'].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full bg-muted/50 text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
