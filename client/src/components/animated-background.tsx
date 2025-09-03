import React, { useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      const symbols = ['<', '>', '{', '}', '(', ')', ';', '/', '□', '△', '◦'];
      const colors = ['text-primary', 'text-accent', 'text-secondary'];
      
      particle.className = `floating-element text-xs ${colors[Math.floor(Math.random() * colors.length)]} opacity-20 animate-float`;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
      particle.style.animationDelay = Math.random() * 5 + 's';
      
      const container = document.querySelector('.animated-background-container');
      if (container) {
        container.appendChild(particle);
        
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 10000);
      }
    };

    const interval = setInterval(createParticle, 3000);
    
    // Create initial particles
    for (let i = 0; i < 10; i++) {
      setTimeout(createParticle, i * 500);
    }

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.floating-element');
      
      parallaxElements.forEach((element, index) => {
        const speed = (index % 3 + 1) * 0.5;
        (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 animated-background-container">
      <div className="floating-element text-6xl text-primary animate-float" style={{ top: '10%', left: '5%' }}>
        {'{'}
      </div>
      <div className="floating-element text-4xl text-accent animate-float-delayed" style={{ top: '20%', right: '10%' }}>
        {'}'}
      </div>
      <div className="floating-element text-3xl text-secondary animate-rotate" style={{ top: '60%', left: '15%' }}>
        <i className="fab fa-android"></i>
      </div>
      <div className="floating-element text-3xl text-primary animate-bounce-subtle" style={{ top: '30%', right: '20%' }}>
        <i className="fab fa-apple"></i>
      </div>
      <div className="floating-element text-2xl text-accent animate-float" style={{ top: '70%', right: '5%' }}>
        <i className="fab fa-react"></i>
      </div>
      <div className="floating-element text-4xl text-secondary animate-rotate" style={{ top: '80%', left: '8%' }}>
        ◦
      </div>
      <div className="floating-element text-3xl text-primary animate-float-delayed" style={{ top: '40%', left: '3%' }}>
        △
      </div>
      <div className="floating-element text-2xl text-accent animate-bounce-subtle" style={{ top: '50%', right: '15%' }}>
        □
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-secondary to-primary rounded-full blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-accent to-secondary rounded-full blur-xl opacity-15 animate-float"></div>
    </div>
  );
};

export default AnimatedBackground;
