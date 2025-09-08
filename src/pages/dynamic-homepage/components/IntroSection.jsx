import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IntroSection = () => {
  const achievements = [
    {
      icon: "Award",
      number: "50+",
      label: "Projects Delivered",
      color: "text-accent"
    },
    {
      icon: "Users",
      number: "25+",
      label: "Happy Clients",
      color: "text-emerald-500"
    },
    {
      icon: "TrendingUp",
      number: "340%",
      label: "Avg. Growth",
      color: "text-brand-gold"
    },
    {
      icon: "Star",
      number: "4.9",
      label: "Client Rating",
      color: "text-yellow-500"
    }
  ];

  const services = [
    {
      icon: "Palette",
      title: "Brand Identity",
      description: "Complete visual identity systems that capture your brand essence"
    },
    {
      icon: "Smartphone",
      title: "UI/UX Design",
      description: "User-centered design that converts visitors into customers"
    },
    {
      icon: "Globe",
      title: "Web Development",
      description: "High-performance websites built with modern technologies"
    },
    {
      icon: "BarChart3",
      title: "Strategy & Analytics",
      description: "Data-driven design decisions that maximize business impact"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Meet Your{' '}
                <span className="text-gradient bg-gradient-to-r from-accent via-brand-gold to-accent bg-clip-text text-transparent">
                  Visionary Craftsperson
                </span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                I'm a strategic design professional who bridges the gap between artistic vision and 
                business results. With over 8 years of experience, I specialize in creating digital 
                experiences that don't just look stunning—they perform, convert, and drive measurable growth.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Every pixel has purpose. Every design decision tells a story. Every project is an 
                opportunity to transform how people interact with your brand and achieve your business objectives.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="bg-surface p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Why Choose DesignVault Pro?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Strategic approach that aligns design with business goals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Proven track record of driving measurable results</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">End-to-end service from concept to implementation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Collaborative process with transparent communication</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about-story">
                <Button variant="outline" iconName="User" iconPosition="left">
                  Learn My Story
                </Button>
              </Link>
              <Link to="/services-workshop">
                <Button className="btn-accent" iconName="ArrowRight" iconPosition="right">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-brand-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                    alt="Design Professional Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-brand-lg"
                >
                  <Icon name="Palette" size={32} className="text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-gold rounded-xl flex items-center justify-center shadow-brand-lg"
                >
                  <Icon name="Zap" size={24} className="text-white" />
                </motion.div>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements?.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-card p-4 rounded-xl shadow-brand text-center"
                >
                  <Icon name={achievement?.icon} size={24} className={`${achievement?.color} mx-auto mb-2`} />
                  <div className={`text-2xl font-bold ${achievement?.color} mb-1`}>
                    {achievement?.number}
                  </div>
                  <div className="text-xs text-text-secondary font-medium">
                    {achievement?.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Services Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              Core Services & Expertise
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Comprehensive design solutions that cover every aspect of your digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services?.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Icon name={service?.icon} size={24} className="text-accent group-hover:text-white" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">
                  {service?.title}
                </h4>
                <p className="text-text-secondary text-sm">
                  {service?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;