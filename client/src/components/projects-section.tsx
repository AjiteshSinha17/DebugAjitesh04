import React from 'react';

interface Project {
  name: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
  image: string;
  githubUrl: string;
  tools?: string[];
  languages?: string[];
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      name: 'Lucid AI',
      description: 'The AI Roadmap Chatbot: your all-in-one, conversational mentor that maps personalized learning paths across AI, ML, and modern software topics. Covers curated resources, milestone tracking, and hands-on project suggestions to accelerate your journey.',
      icon: 'fas fa-robot',
      color: 'from-cyan-600 to-emerald-600',
      tags: ['AI', 'Chatbot', 'Roadmaps'],
      image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400&h=600&fit=crop&crop=center',
      githubUrl: 'https://github.com/AjiteshSinha17/Lucid-Ai',
      tools: ['LangChain', 'Vector DB', 'Node.js'],
      languages: ['TypeScript', 'Python']
    },
    {
      name: 'Shopping App',
      description: 'End-to-end shopping experience with product listings, cart, and secure checkout. Optimized state management and smooth animations for modern UX.',
      icon: 'fas fa-shopping-cart',
      color: 'from-blue-600 to-purple-600',
      tags: ['Flutter', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=600&fit=crop&crop=center',
      githubUrl: 'https://github.com/AjiteshSinha17/shopping-app',
      tools: ['Firebase Auth', 'Firestore', 'Provider'],
      languages: ['Dart']
    },
    {
      name: 'Recipe App',
      description: 'Discover, search, and save recipes with step-by-step guides, favorites, and offline-ready viewing.',
      icon: 'fas fa-utensils',
      color: 'from-orange-600 to-red-600',
      tags: ['Flutter', 'API'],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop&crop=center',
      githubUrl: 'https://github.com/AjiteshSinha17/recipe-app',
      tools: ['REST API', 'Caching'],
      languages: ['Dart']
    },
    {
      name: 'Expense Tracker',
      description: 'Track expenses, set budgets, and visualize spending with charts and insights.',
      icon: 'fas fa-chart-line',
      color: 'from-green-600 to-emerald-600',
      tags: ['Flutter', 'SQLite'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=600&fit=crop&crop=center',
      githubUrl: 'https://github.com/AjiteshSinha17/expense-tracker',
      tools: ['SQLite', 'Charts'],
      languages: ['Dart']
    },
    {
      name: 'Face Recognition',
      description: 'Real-time face detection and recognition with preprocessing, model inference, and evaluation.',
      icon: 'fas fa-user-check',
      color: 'from-purple-600 to-pink-600',
      tags: ['Python', 'OpenCV'],
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=600&fit=crop&crop=center',
      githubUrl: 'https://github.com/AjiteshSinha17/face-recognition',
      tools: ['OpenCV', 'NumPy'],
      languages: ['Python']
    },
    {
      name: 'Quiz App',
      description: 'Interactive quiz with categories, timers, instant feedback, and progress tracking.',
      icon: 'fas fa-question-circle',
      color: 'from-indigo-600 to-blue-600',
      tags: ['Flutter', 'Dart'],
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=600&fit=crop&crop=center',
      githubUrl: 'https://github.com/AjiteshSinha17/quiz-app',
      tools: ['State Management'],
      languages: ['Dart']
    },
    {
      name: 'Bagify App',
      description: 'E-commerce experience for bags and accessories with modern UI and smooth navigation.',
      icon: 'fas fa-shopping-bag',
      color: 'from-yellow-600 to-orange-600',
      tags: ['Flutter', 'UI/UX'],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop&crop=center',
      githubUrl: 'https://github.com/AjiteshSinha17/bagify-app',
      tools: ['Animations'],
      languages: ['Dart']
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcase of my mobile applications built with Flutter, featuring real-world solutions 
            and innovative user experiences.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-2xl p-6 hover:scale-105 transition-transform duration-300 phone-mockup group"
              data-testid={`project-${project.name.toLowerCase().replace(' ', '-')}`}
            >
              {/* Phone Mockup */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-4 mb-6 phone-screen">
                {/* Phone Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                
                {/* Phone Screen */}
                <div className="bg-black rounded-2xl p-2 h-64 relative overflow-hidden mt-4">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to gradient if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    {/* Fallback gradient */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-b ${project.color} rounded-xl items-center justify-center hidden`}
                    >
                      <div className="text-center text-white">
                        <i className={`${project.icon} text-4xl mb-2`}></i>
                        <p className="text-sm font-semibold">{project.name}</p>
                      </div>
                    </div>
                    
                    {/* App UI Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-1">
                          <i className={`${project.icon} text-sm`}></i>
                          <span className="text-xs font-medium">{project.name}</span>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                          <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phone Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-600 rounded-full"></div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-${project.name.toLowerCase().replace(' ', '-')}`}
                  >
                    <i className="fab fa-github text-lg"></i>
                  </a>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {(project.tools?.length || project.languages?.length) && (
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {project.languages?.length ? (
                      <span className="px-2 py-1 rounded bg-muted/50">Lang: {project.languages.join(', ')}</span>
                    ) : null}
                    {project.tools?.length ? (
                      <span className="px-2 py-1 rounded bg-muted/50">Tools: {project.tools.join(', ')}</span>
                    ) : null}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tagIndex === 0 ? 'bg-primary/20 text-primary' : 
                        tagIndex === 1 ? 'bg-secondary/20 text-secondary' : 
                        'bg-accent/20 text-accent'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;