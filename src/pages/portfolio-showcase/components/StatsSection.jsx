import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const StatsSection = ({ totalProjects, categories, activeCategory }) => {
  const stats = [
    {
      icon: 'Briefcase',
      label: 'Total Projects',
      value: totalProjects,
      color: 'text-accent'
    },
    {
      icon: 'Users',
      label: 'Happy Clients',
      value: '150+',
      color: 'text-success'
    },
    {
      icon: 'Award',
      label: 'Awards Won',
      value: '25+',
      color: 'text-brand-gold'
    },
    {
      icon: 'TrendingUp',
      label: 'Avg. ROI Increase',
      value: '240%',
      color: 'text-cta'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const activeCount = activeCategory === 'all' 
    ? totalProjects 
    : categories?.find(c => c?.id === activeCategory)?.count || 0;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-r from-primary via-primary/95 to-accent/10 rounded-3xl p-8 mb-12 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-gold rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent rounded-full translate-x-12 translate-y-12"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-success rounded-full -translate-x-8 -translate-y-8"></div>
      </div>
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Portfolio Impact
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-white/80 text-lg max-w-2xl mx-auto"
          >
            Transforming businesses through strategic design solutions that deliver measurable results and lasting impact.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${stat?.color} bg-white/20`}>
                  <Icon name={stat?.icon} size={24} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {stat?.value}
                </div>
                <div className="text-white/70 text-sm font-medium">
                  {stat?.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Filter Info */}
        {activeCategory !== 'all' && (
          <motion.div
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Icon name="Filter" size={18} className="text-brand-gold" />
              <span className="text-white font-medium">
                Showing {activeCount} projects in {categories?.find(c => c?.id === activeCategory)?.name}
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default StatsSection;