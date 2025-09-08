import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CaseStudyHero = ({ project }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-white/15 rounded-full"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  Case Study
                </span>
                <span className="px-3 py-1 bg-brand-gold/20 text-brand-gold rounded-full text-sm font-medium">
                  {project?.category}
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {project?.title}
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed">
                {project?.subtitle}
              </p>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Client
                </h3>
                <p className="text-lg font-medium">{project?.client}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Timeline
                </h3>
                <p className="text-lg font-medium">{project?.timeline}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Role
                </h3>
                <p className="text-lg font-medium">{project?.role}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Team Size
                </h3>
                <p className="text-lg font-medium">{project?.teamSize}</p>
              </div>
            </div>

            {/* Key Metrics Preview */}
            <div className="flex flex-wrap gap-6">
              {project?.keyMetrics?.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-brand-gold">
                    {metric?.value}
                  </div>
                  <div className="text-sm text-white/70">
                    {metric?.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center space-x-2 text-white/60">
              <span className="text-sm">Scroll to explore</span>
              <Icon name="ChevronDown" size={20} className="animate-bounce" />
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
              <Image
                src={project?.heroImage}
                alt={`${project?.title} hero image`}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-gold/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;