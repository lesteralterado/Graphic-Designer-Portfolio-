import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-accent/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Icon */}
          <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto">
            <Icon name="Rocket" size={32} className="text-brand-gold" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            Ready to Transform Your
            <span className="block text-brand-gold">Digital Presence?</span>
          </h2>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Let's collaborate to create exceptional design solutions that drive real business results. 
            Every great project starts with a conversation.
          </p>

          {/* Value Propositions */}
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Zap" size={24} className="text-brand-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-white/70 text-sm">
                Efficient process with clear timelines and regular updates
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Target" size={24} className="text-brand-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Results-Driven</h3>
              <p className="text-white/70 text-sm">
                Strategic design focused on achieving your business goals
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={24} className="text-brand-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaborative</h3>
              <p className="text-white/70 text-sm">
                Close partnership throughout the entire design process
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact-studio">
              <Button
                className="btn-cta"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Start Your Project
              </Button>
            </Link>
            
            <Link to="/services-workshop">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                iconName="Info"
                iconPosition="left"
              >
                View Services
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/60 mb-4">
              Prefer to discuss your project directly?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-brand-gold" />
                <span>hello@designvaultpro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-brand-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} className="text-brand-gold" />
                <span>Book a 30-min consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;