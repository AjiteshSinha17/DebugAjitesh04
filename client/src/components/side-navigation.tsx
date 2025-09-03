import React, { useState, useEffect } from 'react';
import { useScrollToSection } from '@/hooks/use-scroll-to-section';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const SideNavigation: React.FC = () => {
  const { scrollToSection } = useScrollToSection();
  const [activeSection, setActiveSection] = useState('hero');

  const navigationItems = [
    { id: 'hero', icon: 'fas fa-home', title: 'Home' },
    { id: 'about', icon: 'fas fa-user', title: 'About' },
    { id: 'skills', icon: 'fas fa-code', title: 'Skills' },
    { id: 'portfolio', icon: 'fas fa-briefcase', title: 'Projects' },
    { id: 'blog', icon: 'fas fa-blog', title: 'Blog' },
    { id: 'contact', icon: 'fas fa-envelope', title: 'Contact' },
  ];

  // Active section detection based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-4">
      {navigationItems.map((item) => (
        <div key={item.id} className="glassmorphism rounded-full p-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                data-testid={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  activeSection === item.id
                    ? 'bg-primary text-white'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
                variant="ghost"
              >
                <i className={item.icon}></i>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{item.title}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      ))}
    </nav>
  );
};

export default SideNavigation;
