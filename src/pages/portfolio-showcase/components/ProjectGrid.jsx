import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects, viewMode, loading }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)]?.map((_, index) => (
          <div
            key={index}
            className="bg-surface rounded-2xl animate-pulse"
            style={{ height: '320px' }}
          >
            <div className="h-48 bg-border rounded-t-2xl mb-4"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-border rounded w-3/4"></div>
              <div className="h-3 bg-border rounded w-1/2"></div>
              <div className="h-3 bg-border rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (projects?.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            className="text-text-secondary"
          >
            <path
              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="3.27,6.96 12,12.01 20.73,6.96"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="12"
              y1="22.08"
              x2="12"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">No Projects Found</h3>
        <p className="text-text-secondary max-w-md mx-auto">
          We couldn't find any projects matching your current filters. Try adjusting your search criteria or browse all projects.
        </p>
      </div>
    );
  }

  const getGridClasses = () => {
    switch (viewMode) {
      case 'list':
        return 'space-y-6';
      case 'masonry':
        return 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6';
      default: // grid
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={getGridClasses()}
    >
      {projects?.map((project, index) => (
        <div
          key={project?.id}
          className={viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''}
        >
          <ProjectCard
            project={project}
            viewMode={viewMode}
            index={index}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;