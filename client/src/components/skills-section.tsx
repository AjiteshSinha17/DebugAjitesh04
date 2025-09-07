import React from 'react';
import CircularProgress from './circular-progress';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
  color: string;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Flutter', percentage: 89, icon: 'fab fa-flutter-dash', color: 'rgb(59, 130, 246)' },
    { name: 'Dart', percentage: 90, icon: '', color: 'rgb(168, 85, 247)' },
    { name: 'Python', percentage: 85, icon: 'fab fa-python', color: 'rgb(6, 182, 212)' },
    { name: 'Firebase', percentage: 88, icon: '🔥', color: 'rgb(251, 191, 36)' },
    { name: 'C++', percentage: 82, icon: '', color: 'rgb(59, 130, 246)' },
    { name: 'Git', percentage: 89, icon: 'fab fa-git-alt', color: 'rgb(239, 68, 68)' },
    { name: 'Android', percentage: 88, icon: 'fab fa-android', color: 'rgb(16, 185, 129)' },
    { name: 'iOS', percentage: 82, icon: 'fab fa-apple', color: 'rgb(156, 163, 175)' },
    { name: 'CI/CD', percentage: 80, icon: '', color: 'rgb(59, 130, 246)' },
    { name: 'Docker', percentage: 78, icon: 'fab fa-docker', color: 'rgb(99, 102, 241)' },
    { name: 'MySQL', percentage: 76, icon: '', color: 'rgb(34, 197, 94)' },
    { name: 'REST API', percentage: 88, icon: '', color: 'rgb(234, 179, 8)' },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise with proficiency levels across various technologies and frameworks.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="glassmorphism rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              data-testid={`skill-${skill.name.toLowerCase()}`}
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <CircularProgress percentage={skill.percentage} color={skill.color}>
                  {skill.icon.startsWith('fab') || skill.icon.startsWith('fas') ? (
                    <i className={`${skill.icon} text-2xl`} style={{ color: skill.color }}></i>
                  ) : skill.icon ? (
                    <span className="text-2xl">{skill.icon}</span>
                  ) : (
                    <span className="text-lg font-bold" style={{ color: skill.color }}>
                      {skill.name === 'Dart' ? 'D' : skill.name === 'C++' ? 'C++' : skill.name.slice(0, 2)}
                    </span>
                  )}
                </CircularProgress>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
              <p className="text-2xl font-bold mb-1" style={{ color: skill.color }}>
                {skill.percentage}%
              </p>
              <p className="text-xs text-muted-foreground">
                Proficiency: {skill.percentage}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
