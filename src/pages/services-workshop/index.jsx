import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import ServiceCard from './components/ServiceCard';
import ProcessTimeline from './components/ProcessTimeline';
import PricingCalculator from './components/PricingCalculator';
import SpecializedOfferings from './components/SpecializedOfferings';
import TestimonialSection from './components/TestimonialSection';
import ProjectBriefForm from './components/ProjectBriefForm';

const ServicesWorkshop = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id]');
    sections?.forEach((section) => observer?.observe(section));

    return () => observer?.disconnect();
  }, []);

  const services = [
    {
      id: 'brand-identity',
      title: 'Brand Identity Development',
      icon: 'Palette',
      description: 'Comprehensive brand strategy and visual identity creation that establishes authentic connections with your target audience and differentiates you in the marketplace.',
      priceRange: '$15K-25K',
      timeline: '8-12 weeks',
      clientType: 'Growth-stage businesses',
      deliverables: [
        'Brand strategy and positioning framework',
        'Logo design and brand mark variations',
        'Complete visual identity system',
        'Brand guidelines and usage documentation',
        'Business card and stationery design',
        'Digital brand asset library'
      ]
    },
    {
      id: 'digital-experience',
      title: 'Digital Experience Design',
      icon: 'Monitor',
      description: 'User-centered digital experiences that convert visitors into customers through strategic UX/UI design, prototyping, and conversion optimization.',
      priceRange: '$25K-40K',
      timeline: '10-16 weeks',
      clientType: 'Tech companies & SaaS',
      deliverables: [
        'User research and persona development',
        'Information architecture and wireframes',
        'High-fidelity UI design and prototypes',
        'Responsive design for all devices',
        'Usability testing and optimization',
        'Development-ready design specifications'
      ]
    },
    {
      id: 'marketing-campaign',
      title: 'Marketing Campaign Creation',
      icon: 'Megaphone',
      description: 'Integrated marketing campaigns that drive engagement and conversions across multiple touchpoints with cohesive messaging and compelling visuals.',
      priceRange: '$12K-20K',
      timeline: '6-10 weeks',
      clientType: 'Marketing teams',
      deliverables: [
        'Campaign strategy and creative brief',
        'Multi-channel creative asset development',
        'Social media templates and graphics',
        'Email marketing design templates',
        'Print and digital advertising materials',
        'Campaign performance tracking setup'
      ]
    },
    {
      id: 'design-system',
      title: 'Design System Architecture',
      icon: 'Grid3x3',
      description: 'Scalable design systems that ensure consistency across all brand touchpoints while enabling efficient design and development workflows.',
      priceRange: '$30K-50K',
      timeline: '12-20 weeks',
      clientType: 'Enterprise & agencies',
      deliverables: [
        'Component library and design tokens',
        'Style guide and usage documentation',
        'Figma/Sketch design system files',
        'Code component library integration',
        'Team training and implementation support',
        'Ongoing maintenance guidelines'
      ]
    }
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
    document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-surface to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Sparkles" size={16} />
                <span>Strategic Design Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                Design Workshop
                <span className="block text-gradient">That Drives Results</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Transform your vision into visual reality through our collaborative design process. 
                From brand identity to digital experiences, we create design solutions that deliver measurable business outcomes.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="btn-cta" size="lg" iconName="ArrowRight" iconPosition="right">
                Start Your Project
              </Button>
              <Link to="/portfolio-showcase">
                <Button variant="outline" size="lg" iconName="Eye" iconPosition="left">
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isVisible?.services ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Service Workshop
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                Comprehensive design solutions tailored for growth-stage businesses, 
                creative agencies, and tech startups ready to make their mark.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services?.map((service, index) => (
                <motion.div key={service?.id} variants={itemVariants}>
                  <ServiceCard service={service} onLearnMore={handleLearnMore} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Service Details Modal/Section */}
      {selectedService && (
        <section id="service-details" className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-2xl p-8 shadow-brand-lg border border-border">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-brand-gold rounded-xl flex items-center justify-center">
                    <Icon name={selectedService?.icon} size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{selectedService?.title}</h3>
                    <p className="text-text-secondary">{selectedService?.priceRange} • {selectedService?.timeline}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="X"
                  onClick={() => setSelectedService(null)}
                />
              </div>
              
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                {selectedService?.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-primary mb-4">Complete Deliverables:</h4>
                  <ul className="space-y-3">
                    {selectedService?.deliverables?.map((deliverable, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-text-secondary">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-surface rounded-xl p-6">
                    <h5 className="font-semibold text-primary mb-3">Perfect For:</h5>
                    <p className="text-text-secondary">{selectedService?.clientType}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="btn-cta" fullWidth iconName="MessageCircle" iconPosition="left">
                      Discuss This Service
                    </Button>
                    <Button variant="outline" fullWidth iconName="Calculator" iconPosition="left">
                      Calculate Investment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Process Timeline */}
      <section id="process" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isVisible?.process ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <ProcessTimeline />
          </motion.div>
        </div>
      </section>
      {/* Pricing Calculator */}
      <section id="calculator" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isVisible?.calculator ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <PricingCalculator />
          </motion.div>
        </div>
      </section>
      {/* Specialized Offerings */}
      <section id="specialized" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isVisible?.specialized ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Specialized Partnerships
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                Tailored solutions for creative agencies and tech startups with unique needs and accelerated timelines.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <SpecializedOfferings />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Testimonials */}
      {/* <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isVisible?.testimonials ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <TestimonialSection />
          </motion.div>
        </div>
      </section> */}
      {/* Project Brief Form */}
      <section id="project-brief" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isVisible?.['project-brief'] ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <ProjectBriefForm />
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-accent to-brand-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Vision?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate on creating design solutions that not only look exceptional 
                but drive real business results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/contact-studio">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    iconName="Calendar" 
                    iconPosition="left"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/portfolio-showcase">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    iconName="ArrowRight" 
                    iconPosition="right"
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-brand-gold rounded-xl flex items-center justify-center">
                  <Icon name="Layers" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Alenton Perfect Touch</h3>
                  <p className="text-white/70 text-sm">Strategic Design Solutions</p>
                </div>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                Transforming visions into visual reality through strategic design solutions 
                that drive measurable business outcomes.
              </p>
              <div className="flex items-center space-x-4">
                <Icon name="Mail" size={20} className="text-white/60" />
                <span className="text-white/80">brhiajean81@email.com</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/services-workshop" className="hover:text-white transition-colors">Brand Identity</Link></li>
                <li><Link to="/services-workshop" className="hover:text-white transition-colors">Digital Experience</Link></li>
                <li><Link to="/services-workshop" className="hover:text-white transition-colors">Marketing Campaigns</Link></li>
                <li><Link to="/services-workshop" className="hover:text-white transition-colors">Design Systems</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/about-story" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/portfolio-showcase" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link to="/project-case-study" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/contact-studio" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/60 text-sm">
              © {new Date()?.getFullYear()} Alenton Perfect Touch. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-white/60 hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </Link>
              <Link to="#" className="text-white/60 hover:text-white transition-colors">
                <Icon name="Linkedin" size={20} />
              </Link>
              <Link to="#" className="text-white/60 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesWorkshop;