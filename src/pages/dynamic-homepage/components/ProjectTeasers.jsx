import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProjectTeasers = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Revolution",
      category: "Brand Identity & UX",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      metrics: "+340% Conversion",
      color: "from-accent to-blue-700",
      description: "Complete brand transformation for a tech startup, resulting in 340% increase in user conversion rates."
    },
    {
      id: 2,
      title: "FinTech Mobile App",
      category: "UI/UX Design",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?w=600&h=400&fit=crop",
      metrics: "+250% Engagement",
      color: "from-brand-gold to-orange-600",
      description: "Intuitive mobile banking interface that increased user engagement by 250% within 3 months."
    },
    {
      id: 3,
      title: "Healthcare Platform",
      category: "Web Application",
      image: "https://images.pixabay.com/photo/2017/10/24/00/39/startup-2883304_1280.jpg?w=600&h=400&fit=crop",
      metrics: "+180% User Retention",
      color: "from-emerald-500 to-teal-600",
      description: "Patient management system redesign that improved user retention by 180% and reduced support tickets."
    },
    {
      id: 4,
      title: "SaaS Dashboard",
      category: "Data Visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      metrics: "+400% Productivity",
      color: "from-purple-500 to-indigo-600",
      description: "Analytics dashboard that boosted team productivity by 400% through intelligent data visualization."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Services <span className="text-gradient">Offered</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover how strategic design transforms businesses and drives measurable results 
            across industries and platforms.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects?.map((project) => (
            <motion.div
              key={project?.id}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project?.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Link to="/project-case-study" className="block">
                <div className="relative overflow-hidden rounded-2xl bg-card shadow-brand hover:shadow-brand-lg transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <Image
                      src={project?.image}
                      alt={project?.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project?.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}></div>
                    
                    {/* Hover Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredProject === project?.id ? 1 : 0,
                        y: hoveredProject === project?.id ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center p-6"
                    >
                      <div className="text-center text-white">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                          <Icon name="ArrowUpRight" size={24} />
                        </div>
                        <p className="text-sm font-medium opacity-90">
                          {project?.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                          {project?.title}
                        </h3>
                        <p className="text-text-secondary text-sm font-medium">
                          {project?.category}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                          {project?.metrics}
                        </div>
                      </div>
                    </div>

                    {/* View Project Link */}
                    <div className="flex items-center text-accent font-medium text-sm group-hover:text-primary transition-colors duration-300">
                      <span>View Case Study</span>
                      <Icon name="ArrowRight" size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/portfolio-showcase">
            <button className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors duration-300 shadow-brand hover:shadow-brand-lg">
              <span>View All Projects</span>
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectTeasers;