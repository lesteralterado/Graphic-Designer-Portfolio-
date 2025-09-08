import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedProjects = ({ projects }) => {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Related Case Studies
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore more projects that showcase similar challenges and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects?.map((project, index) => (
            <div key={index} className="group bg-background rounded-xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-all duration-300">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/90 text-primary border-white/90 hover:bg-white"
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent/90 text-white rounded-full text-sm font-medium">
                    {project?.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="Building" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-secondary">{project?.client}</span>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {project?.title}
                </h3>
                
                <p className="text-text-secondary mb-4 line-clamp-2">
                  {project?.description}
                </p>

                {/* Key Metrics */}
                <div className="flex items-center justify-between mb-4">
                  {project?.keyMetrics?.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-success">
                        {metric?.value}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {metric?.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project?.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-surface text-text-secondary rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link to="/portfolio-showcase">
            <Button
              className="btn-cta"
              size="lg"
              iconName="Grid"
              iconPosition="left"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;