import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from './public/assets/images/logo.png';
import logos from '/assets/images/untitled_design.png';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'portfolio', 'about', 'gallery'];
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);
  
  const navigationItems = [
    { name: 'Home', path: '#hero', icon: 'Home' },
    { name: 'About', path: '#about', icon: 'User' },
    { name: 'Portfolio', path: '#portfolio', icon: 'Briefcase' },
    { name: 'Gallery', path: '#gallery', icon: 'Image' },
  ];

  const isActivePath = (path) => `#${activeSection}` === path;

  const Logo = () => (
    <button onClick={() => handleScroll('hero')} className="flex items-center space-x-3 group">
      <div className="relative">
        <img src={`${logo}`} alt="Logo" className="w-10 h-10 rounded-xl shadow-brand group-hover:shadow-brand-lg transition-all duration-300" />
        <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-brand-gold/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="hidden sm:block">
        <h1 className="text-xl font-bold text-primary group-hover:text-gradient transition-colors duration-300">
          <img src={`${logos}`} alt="Logo Footer" className="w-32 h-auto" />
        </h1>
      </div>
    </button>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-brand shadow-brand border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => ( 
              <button
                key={item?.path}
                onClick={() => handleScroll(item?.path?.slice(1))}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item?.path)
                    ? 'text-accent bg-accent/10' :'text-text-primary hover:text-accent hover:bg-accent/5'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon name={item?.icon} size={16} />
                  <span>{item?.name}</span>
                </div>
                {isActivePath(item?.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => handleScroll('footer')}
            >
              Contact
            </Button>
            <Button
              className="btn-cta"
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={() => handleScroll('footer')}
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:text-accent hover:bg-accent/5 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-brand border-t border-border shadow-brand-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => {
                    handleScroll(item?.path?.slice(1));
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActivePath(item?.path)
                      ? 'text-accent bg-accent/10 border-l-2 border-accent' :'text-text-primary hover:text-accent hover:bg-accent/5'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                  {isActivePath(item?.path) && (
                    <div className="ml-auto w-2 h-2 bg-accent rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>
            
            <div className="mt-6 pt-4 border-t border-border space-y-3">
              <Button
                variant="outline"
                fullWidth
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => {
                  handleScroll('contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact Studio
              </Button>
              <Button
                className="btn-cta"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => {
                  handleScroll('contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;