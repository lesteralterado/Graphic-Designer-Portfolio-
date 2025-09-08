import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProjectCard = ({ project, viewMode = 'grid', index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="bg-card rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden border border-border"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative overflow-hidden">
            <Image
              src={project?.image}
              alt={project?.title}
              className="w-full h-48 md:h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {project?.featured && (
              <div className="absolute top-4 left-4 bg-brand-gold text-brand-gold-foreground px-3 py-1 rounded-full text-xs font-semibold">
                Featured
              </div>
            )}
          </div>
          <div className="md:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                  {project?.category}
                </span>
                <span className="text-xs text-text-secondary">{project?.year}</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                {project?.title}
              </h3>
              <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                {project?.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project?.tags?.slice(0, 3)?.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs text-text-secondary bg-surface px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-sm">
                  <span className="text-text-secondary">Client: </span>
                  <span className="font-medium text-text-primary">{project?.client}</span>
                </div>
                {project?.metrics && (
                  <div className="text-sm font-semibold text-success">
                    {project?.metrics}
                  </div>
                )}
              </div>
              <Link
                to="/project-case-study"
                className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors group"
              >
                <span className="text-sm font-medium">View Case Study</span>
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`group relative bg-card rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-500 overflow-hidden border border-border cursor-pointer ${
        project?.featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            project?.featured ? 'h-80 md:h-96' : 'h-64'
          }`}
        />
        
        {/* Featured Badge */}
        {project?.featured && (
          <div className="absolute top-4 left-4 bg-brand-gold text-brand-gold-foreground px-3 py-1 rounded-full text-xs font-semibold z-10">
            Featured
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
          {project?.category}
        </div>

        {/* Hover Overlay */}
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex flex-col justify-end p-6"
        >
          <div className="text-white">
            <h3 className={`font-bold mb-2 ${project?.featured ? 'text-2xl' : 'text-lg'}`}>
              {project?.title}
            </h3>
            <p className="text-white/90 text-sm mb-3 line-clamp-2">
              {project?.description}
            </p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm">
                <span className="text-white/70">Client: </span>
                <span className="font-medium">{project?.client}</span>
              </div>
              <span className="text-xs text-white/70">{project?.year}</span>
            </div>

            {project?.metrics && (
              <div className="bg-success/20 text-success border border-success/30 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                {project?.metrics}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {project?.tags?.slice(0, 3)?.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded-md backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              to="/project-case-study"
              className="inline-flex items-center space-x-2 bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors group"
            >
              <span>View Case Study</span>
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Bottom Info (visible when not hovered) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        className="p-4"
      >
        <h3 className="font-bold text-text-primary mb-1 group-hover:text-accent transition-colors">
          {project?.title}
        </h3>
        <p className="text-sm text-text-secondary mb-2">{project?.client}</p>
        {project?.metrics && (
          <div className="text-sm font-semibold text-success">
            {project?.metrics}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;