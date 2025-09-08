import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface/50 to-accent/5">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-40 right-20 w-32 h-32 bg-brand-gold/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-success/10 rounded-full blur-xl"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-primary">Work</span>{' '}
              <span className="text-gradient">Universe</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore a multi-dimensional showcase of strategic design solutions that transform businesses and create lasting impact.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-text-secondary font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-success mb-1">240%</div>
                <div className="text-sm text-text-secondary font-medium">Avg ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-1">25+</div>
                <div className="text-sm text-text-secondary font-medium">Awards Won</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                iconName="ArrowDown"
                iconPosition="right"
                onClick={() => {
                  document.getElementById('portfolio-grid')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Explore Portfolio
              </Button>
              <Link to="/contact-studio">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Start Your Project
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex flex-col items-center text-text-secondary cursor-pointer"
              onClick={() => {
                document.getElementById('portfolio-grid')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              <span className="text-sm font-medium mb-2">Scroll to explore</span>
              <Icon name="ChevronDown" size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
};

export default HeroSection;