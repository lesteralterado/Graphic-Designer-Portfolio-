import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/dynamic-homepage', icon: 'Home' },
    { name: 'Portfolio', path: '/portfolio-showcase', icon: 'Briefcase' },
    { name: 'Case Study', path: '/project-case-study', icon: 'FileText' },
    { name: 'About', path: '/about-story', icon: 'User' },
    { name: 'Services', path: '/services-workshop', icon: 'Settings' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const Logo = () => (
    <Link to="/dynamic-homepage" className="flex items-center space-x-3 group">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-brand-gold rounded-xl flex items-center justify-center shadow-brand group-hover:shadow-brand-lg transition-all duration-300">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-pulse"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-80"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-60"
            />
          </svg>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-brand-gold/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="hidden sm:block">
        <h1 className="text-xl font-bold text-primary group-hover:text-gradient transition-colors duration-300">
          DesignVault Pro
        </h1>
        <p className="text-xs text-text-secondary font-medium">Strategic Design Solutions</p>
      </div>
    </Link>
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
              <Link
                key={item?.path}
                to={item?.path}
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
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact-studio">
              <Button variant="outline" size="sm" iconName="MessageCircle" iconPosition="left">
                Contact
              </Button>
            </Link>
            <Link to="/contact-studio">
              <Button className="btn-cta" size="sm" iconName="ArrowRight" iconPosition="right">
                Start Project
              </Button>
            </Link>
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
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
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
                </Link>
              ))}
            </nav>
            
            <div className="mt-6 pt-4 border-t border-border space-y-3">
              <Link to="/contact-studio" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" fullWidth iconName="MessageCircle" iconPosition="left">
                  Contact Studio
                </Button>
              </Link>
              <Link to="/contact-studio" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="btn-cta" fullWidth iconName="ArrowRight" iconPosition="right">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;