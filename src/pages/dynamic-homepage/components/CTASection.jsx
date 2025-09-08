import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const benefits = [
    {
      icon: "Zap",
      title: "Fast Turnaround",
      description: "Get your project delivered on time, every time"
    },
    {
      icon: "Target",
      title: "Results-Driven",
      description: "Design that converts and drives business growth"
    },
    {
      icon: "Users",
      title: "Collaborative Process",
      description: "Work closely with you throughout the entire journey"
    }
  ];

  const stats = [
    { number: "340%", label: "Average Conversion Increase" },
    { number: "48hrs", label: "Initial Concept Delivery" },
    { number: "100%", label: "Client Satisfaction Rate" },
    { number: "$5M+", label: "Revenue Generated for Clients" }
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your{' '}
            <span className="text-gradient bg-gradient-to-r from-accent via-brand-gold to-accent bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join 25+ successful businesses who've already experienced the power of strategic design. Let's create something extraordinary together and drive measurable results for your brand.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/contact-studio">
              <Button 
                className="btn-cta text-lg px-8 py-4" 
                iconName="ArrowRight" 
                iconPosition="right"
              >
                Start Your Project
              </Button>
            </Link>
            <Link to="/portfolio-showcase">
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4"
                iconName="Eye" 
                iconPosition="left"
              >
                View Portfolio
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span>100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span>48hr Response Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} />
              <span>Industry Certified</span>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {benefits?.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit?.icon} size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {benefit?.title}
              </h3>
              <p className="text-gray-300">
                {benefit?.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Proven Track Record
            </h3>
            <p className="text-gray-300">
              Numbers that speak louder than words
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats?.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                  {stat?.number}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat?.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Ready to join our success stories?
          </p>
          <Link to="/contact-studio">
            <Button 
              className="btn-cta text-lg px-10 py-4" 
              iconName="MessageCircle" 
              iconPosition="left"
            >
              Let's Talk About Your Project
            </Button>
          </Link>
          
          <div className="mt-6 text-gray-400 text-sm">
            <p>Free consultation • No commitment required • Response within 24 hours</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;