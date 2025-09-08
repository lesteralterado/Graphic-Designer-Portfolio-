import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-muted">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--color-accent) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, var(--color-brand-gold) 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 40px 40px'
        }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-3"
              >
                <div className="w-12 h-1 bg-gradient-to-r from-accent to-brand-gold rounded-full"></div>
                <span className="text-sm font-medium text-text-secondary uppercase tracking-wider">
                  The Story Behind
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight"
              >
                Where Vision Meets
                <span className="block text-gradient">Craftsmanship</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-text-secondary leading-relaxed max-w-xl"
              >
                Every pixel tells a story. Every design solves a problem. I'm Sarah Chen, 
                a design strategist who believes that exceptional design isn't just about 
                making things beautiful—it's about creating transformative experiences 
                that drive real business results.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="MapPin" size={18} className="text-accent" />
                <span className="text-sm font-medium">San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="Calendar" size={18} className="text-accent" />
                <span className="text-sm font-medium">8+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="Award" size={18} className="text-accent" />
                <span className="text-sm font-medium">50+ Projects Delivered</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-brand-lg">
              <Image
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=800&fit=crop&crop=face"
                alt="Sarah Chen - Design Strategist"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-brand"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-text-primary">Available for projects</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-brand"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-brand-gold rounded-lg flex items-center justify-center">
                    <Icon name="Palette" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Design Philosophy</p>
                    <p className="text-xs text-text-secondary">Form follows function</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-brand-gold/10 rounded-3xl -z-10 blur-xl"></div>
          </motion.div>
        </div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-text-secondary">
          <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;