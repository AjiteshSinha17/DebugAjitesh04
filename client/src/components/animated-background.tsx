import React, { useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      const symbols = ['<', '>', '{', '}', '(', ')', ';', '/', '□', '△', '◦', '♦', '◎', '⬢', '◆'];
      const icons = ['fab fa-android', 'fab fa-apple', 'fab fa-flutter-dash', 'fab fa-react', 'fab fa-js-square', 'fab fa-python', 'fab fa-github', 'fab fa-firebase'];
      const colors = ['text-primary', 'text-accent', 'text-secondary', 'text-blue-400', 'text-purple-400', 'text-cyan-400'];
      
      const useIcon = Math.random() > 0.6; // 40% chance for icons
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const animationType = ['animate-float', 'animate-float-delayed', 'animate-bounce-subtle', 'animate-pulse'][Math.floor(Math.random() * 4)];
      
      particle.className = `floating-element text-xs md:text-sm ${randomColor} opacity-15 ${animationType}`;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      if (useIcon) {
        particle.innerHTML = `<i class="${icons[Math.floor(Math.random() * icons.length)]}"></i>`;
      } else {
        particle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
      }
      
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.fontSize = (Math.random() * 10 + 10) + 'px';
      
      const container = document.querySelector('.animated-background-container');
      if (container) {
        container.appendChild(particle);
        
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 15000);
      }
    };

    const interval = setInterval(createParticle, 2000);
    
    // Create initial particles
    for (let i = 0; i < 15; i++) {
      setTimeout(createParticle, i * 300);
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
      {/* Main Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-pulse" style={{ animationDuration: '8s' }}></div>
      
      {/* Static floating elements */}
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
      
      {/* Mobile Development Icons */}
      <div className="floating-element text-2xl text-blue-400 animate-float" style={{ top: '25%', left: '85%' }}>
        <i className="fab fa-flutter-dash"></i>
      </div>
      <div className="floating-element text-2xl text-yellow-400 animate-bounce-subtle" style={{ top: '65%', left: '85%' }}>
        <i className="fab fa-js-square"></i>
      </div>
      <div className="floating-element text-2xl text-green-400 animate-float-delayed" style={{ top: '45%', left: '90%' }}>
        <i className="fab fa-python"></i>
      </div>
      <div className="floating-element text-2xl text-orange-400 animate-rotate" style={{ top: '15%', left: '80%' }}>
        <i className="fab fa-firebase"></i>
      </div>
      
      {/* Enhanced Gradient Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary via-blue-500 to-accent rounded-full blur-xl opacity-20 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-secondary via-purple-500 to-primary rounded-full blur-xl opacity-20 animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-accent via-cyan-500 to-secondary rounded-full blur-xl opacity-15 animate-float"></div>
      <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full blur-xl opacity-10 animate-float-delayed"></div>
      <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-full blur-xl opacity-15 animate-pulse" style={{ animationDuration: '8s' }}></div>
      
      {/* Moving Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-20 animate-pulse" style={{ animationDuration: '5s' }}></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent opacity-20 animate-pulse" style={{ animationDuration: '7s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
