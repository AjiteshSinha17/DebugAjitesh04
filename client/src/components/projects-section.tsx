import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchGitHubRepositories } from '@/lib/github-api';

interface Project {
  name: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
}

const ProjectsSection: React.FC = () => {
  const { data: repositories, isLoading, error } = useQuery({
    queryKey: ['github-repositories', 'AjiteshSinha17'],
    queryFn: () => fetchGitHubRepositories('AjiteshSinha17'),
  });

  const projectMeta: Record<string, Project> = {
    'shopping-app': {
      name: 'Shopping App',
      description: 'Full-featured grocery shopping app with cart functionality and secure checkout.',
      icon: 'fas fa-shopping-cart',
      color: 'from-blue-600 to-purple-600',
      tags: ['Flutter', 'Firebase']
    },
    'recipe-app': {
      name: 'Recipe App',
      description: 'Discover and cook delicious recipes with step-by-step instructions and ingredients.',
      icon: 'fas fa-utensils',
      color: 'from-orange-600 to-red-600',
      tags: ['Flutter', 'API']
    },
    'expense-tracker': {
      name: 'Expense Tracker',
      description: 'Track your expenses, set budgets, and analyze spending patterns with beautiful charts.',
      icon: 'fas fa-chart-line',
      color: 'from-green-600 to-emerald-600',
      tags: ['Flutter', 'SQLite']
    },
    'face-recognition': {
      name: 'Face Recognition',
      description: 'AI-powered face detection and recognition system with real-time processing.',
      icon: 'fas fa-user-check',
      color: 'from-purple-600 to-pink-600',
      tags: ['Python', 'OpenCV']
    },
    'quiz-app': {
      name: 'Quiz App',
      description: 'Interactive quiz application with scoring, categories, and progress tracking.',
      icon: 'fas fa-question-circle',
      color: 'from-indigo-600 to-blue-600',
      tags: ['Flutter', 'Dart']
    },
    'bagify-app': {
      name: 'Bagify App',
      description: 'E-commerce solution for bag and accessories shopping with modern UI.',
      icon: 'fas fa-shopping-bag',
      color: 'from-yellow-600 to-orange-600',
      tags: ['Flutter', 'UI/UX']
    }
  };

  if (isLoading) {
    return (
      <section id="portfolio" className="py-20 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Showcase of my mobile applications built with Flutter, featuring real-world solutions 
              and innovative user experiences.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="glassmorphism rounded-2xl p-6 animate-pulse">
                <div className="bg-muted rounded-3xl p-4 mb-6 h-64"></div>
                <div className="h-6 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded mb-4"></div>
                <div className="flex space-x-2">
                  <div className="h-6 w-16 bg-muted rounded-full"></div>
                  <div className="h-6 w-16 bg-muted rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="portfolio" className="py-20 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-lg text-red-500">
              Unable to load projects at this time. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const featuredProjects = repositories?.filter(repo => 
    Object.keys(projectMeta).includes(repo.name)
  ).slice(0, 6) || [];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcase of my mobile applications built with Flutter, featuring real-world solutions 
            and innovative user experiences.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((repo) => {
            const meta = projectMeta[repo.name];
            return (
              <div 
                key={repo.id}
                className="glassmorphism rounded-2xl p-6 hover:scale-105 transition-transform duration-300 phone-mockup"
                data-testid={`project-${repo.name}`}
              >
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-4 mb-6 phone-screen">
                  <div className="bg-black rounded-2xl p-2 h-64 relative overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-b ${meta.color} rounded-xl flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <i className={`${meta.icon} text-4xl mb-2`}></i>
                        <p className="text-sm">{meta.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{meta.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {repo.description || meta.description}
                </p>
                <div className="flex space-x-2">
                  {meta.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs ${
                        index === 0 ? 'bg-primary/20 text-primary' : 
                        index === 1 ? 'bg-secondary/20 text-secondary' : 
                        'bg-accent/20 text-accent'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Projects Repository Section */}
      <div className="container mx-auto px-6 max-w-6xl mt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            GitHub <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my open-source contributions and project repositories on GitHub.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {repositories?.slice(0, 4).map((repo) => (
            <div 
              key={repo.id}
              className="glassmorphism rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              data-testid={`repository-${repo.name}`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground">{repo.name}</h3>
                <div className="flex items-center text-yellow-500">
                  <i className="fas fa-star text-sm mr-1"></i>
                  <span className="text-sm">{repo.stargazers_count}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {repo.description || "No description available"}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${
                    repo.language === 'JavaScript' ? 'bg-yellow-500' :
                    repo.language === 'Python' ? 'bg-green-500' :
                    repo.language === 'C++' ? 'bg-blue-500' :
                    'bg-gray-500'
                  }`}></div>
                  <span className="text-xs text-muted-foreground">{repo.language || 'Unknown'}</span>
                </div>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors"
                  data-testid={`link-repository-${repo.name}`}
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
