import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      category: "Strategic Design",
      skills: [
        { name: "Brand Strategy", level: 95, icon: "Target" },
        { name: "Visual Identity", level: 98, icon: "Palette" },
        { name: "Design Systems", level: 92, icon: "Grid3x3" },
        { name: "User Experience", level: 90, icon: "Users" }
      ],
      color: "accent"
    },
    {
      category: "Digital Expertise",
      skills: [
        { name: "Web Design", level: 96, icon: "Monitor" },
        { name: "Mobile Design", level: 88, icon: "Smartphone" },
        { name: "Prototyping", level: 85, icon: "Zap" },
        { name: "Animation", level: 82, icon: "Play" }
      ],
      color: "brand-gold"
    },
    {
      category: "Business Impact",
      skills: [
        { name: "Conversion Optimization", level: 89, icon: "TrendingUp" },
        { name: "A/B Testing", level: 86, icon: "BarChart3" },
        { name: "Analytics", level: 83, icon: "PieChart" },
        { name: "ROI Measurement", level: 87, icon: "DollarSign" }
      ],
      color: "success"
    }
  ];

  const achievements = [
    {
      number: "50+",
      label: "Projects Completed",
      description: "Across diverse industries and company sizes",
      icon: "Briefcase"
    },
    {
      number: "340%",
      label: "Average ROI Increase",
      description: "Measurable business impact through design",
      icon: "TrendingUp"
    },
    {
      number: "12",
      label: "Industry Awards",
      description: "Recognition for design excellence",
      icon: "Award"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Based on post-project surveys",
      icon: "Heart"
    }
  ];

  const certifications = [
    {
      title: "Google UX Design Certificate",
      issuer: "Google",
      year: "2023",
      icon: "CheckCircle"
    },
    {
      title: "Adobe Certified Expert",
      issuer: "Adobe",
      year: "2022",
      icon: "CheckCircle"
    },
    {
      title: "Design Thinking Certification",
      issuer: "IDEO",
      year: "2021",
      icon: "CheckCircle"
    },
    {
      title: "Conversion Rate Optimization",
      issuer: "CXL Institute",
      year: "2023",
      icon: "CheckCircle"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-accent to-brand-gold rounded-full"></div>
            <span className="text-sm font-medium text-text-secondary uppercase tracking-wider">
              Expertise & Skills
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-brand-gold to-accent rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Mastery Across
            <span className="block text-gradient">Multiple Disciplines</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Eight years of focused practice has built deep expertise across the full spectrum 
            of design disciplines—from strategic brand thinking to technical implementation 
            and measurable business outcomes.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas?.map((area, areaIndex) => (
            <motion.div
              key={area?.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: areaIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface rounded-2xl p-8 shadow-brand hover:shadow-brand-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br from-${area?.color} to-${area?.color}/80 rounded-xl flex items-center justify-center shadow-brand`}>
                  <Icon name="Star" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary">{area?.category}</h3>
              </div>

              <div className="space-y-4">
                {area?.skills?.map((skill, skillIndex) => (
                  <div key={skill?.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name={skill?.icon} size={16} className={`text-${area?.color}`} />
                        <span className="text-sm font-medium text-text-primary">{skill?.name}</span>
                      </div>
                      <span className="text-sm font-bold text-text-secondary">{skill?.level}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill?.level}%` }}
                        transition={{ duration: 1, delay: areaIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`bg-gradient-to-r from-${area?.color} to-${area?.color}/80 h-2 rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-surface to-muted rounded-3xl p-8 sm:p-12 shadow-brand-lg mb-16 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-brand-gold/5 to-transparent rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Proven Track Record of Success
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Numbers tell the story of impact. Here's how strategic design has delivered 
                measurable results for clients across industries.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements?.map((achievement, index) => (
                <motion.div
                  key={achievement?.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-brand-gold rounded-2xl flex items-center justify-center mx-auto shadow-brand group-hover:shadow-brand-lg transition-all duration-300">
                    <Icon name={achievement?.icon} size={24} className="text-white" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl font-bold text-gradient">
                      {achievement?.number}
                    </div>
                    <div className="text-lg font-semibold text-primary">
                      {achievement?.label}
                    </div>
                    <p className="text-sm text-text-secondary">
                      {achievement?.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-background rounded-2xl p-8 shadow-brand"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Professional Certifications
            </h3>
            <p className="text-text-secondary">
              Continuous learning and industry-recognized credentials that validate expertise
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <motion.div
                key={cert?.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 p-4 bg-surface rounded-xl hover:bg-muted transition-colors duration-300"
              >
                <Icon name={cert?.icon} size={20} className="text-success mt-1" />
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-primary leading-tight">
                    {cert?.title}
                  </h4>
                  <p className="text-xs text-text-secondary">{cert?.issuer}</p>
                  <p className="text-xs text-accent font-medium">{cert?.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;