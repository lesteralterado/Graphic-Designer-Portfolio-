import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Marcus Rodriguez",
      role: "CEO",
      company: "TechFlow Solutions",
      industry: "SaaS",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: `Sarah didn't just redesign our brand—she transformed how we think about our business. The new visual identity increased our conversion rate by 280% and helped us close our Series A funding. Her strategic approach goes far beyond aesthetics.`,
      project: "Complete Brand Transformation",
      result: "280% conversion increase",
      timeline: "3 months",
      rating: 5
    },
    {
      id: 2,
      name: "Elena Vasquez",
      role: "Marketing Director",
      company: "GreenEarth Organics",
      industry: "E-commerce",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: `Working with Sarah was like having a strategic partner who truly understood our vision. She took our scattered brand elements and created a cohesive system that speaks directly to our eco-conscious customers. Sales increased 150% in the first quarter.`,
      project: "E-commerce Brand System",
      result: "150% sales growth",
      timeline: "2 months",
      rating: 5
    },
    {
      id: 3,
      name: "David Chen",
      role: "Founder",
      company: "MindfulTech",
      industry: "HealthTech",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: `Sarah's ability to translate complex healthcare concepts into clear, trustworthy design is remarkable. She helped us build credibility in a highly regulated industry while maintaining approachability. Our user engagement doubled within weeks.`,
      project: "HealthTech Platform Design",
      result: "100% engagement increase",
      timeline: "4 months",
      rating: 5
    },
    {
      id: 4,
      name: "Rachel Thompson",
      role: "Creative Director",
      company: "Spark Agency",
      industry: "Creative Services",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: `As a fellow creative, I have high standards. Sarah exceeded them all. Her collaborative approach and attention to detail made our partnership seamless. The final deliverables were beyond what we imagined possible.`,
      project: "Agency Rebrand",
      result: "Premium positioning achieved",
      timeline: "6 weeks",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-surface via-muted to-surface">
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
              Client Stories
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-brand-gold to-accent rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            What Clients Say About
            <span className="block text-gradient">Working Together</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            The best measure of success isn't awards or recognition—it's the transformation 
            our clients experience and the lasting relationships we build through exceptional work.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-3xl p-8 sm:p-12 shadow-brand-lg relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-brand-gold/5 to-transparent rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Client Info */}
                  <div className="lg:col-span-1 text-center lg:text-left">
                    <div className="relative inline-block mb-6">
                      <Image
                        src={currentTestimonial?.avatar}
                        alt={currentTestimonial?.name}
                        className="w-24 h-24 rounded-2xl object-cover shadow-brand"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-accent to-brand-gold rounded-lg flex items-center justify-center shadow-brand">
                        <Icon name="Quote" size={16} className="text-white" />
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <h3 className="text-xl font-bold text-primary">
                        {currentTestimonial?.name}
                      </h3>
                      <p className="text-text-secondary">
                        {currentTestimonial?.role} at {currentTestimonial?.company}
                      </p>
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {currentTestimonial?.industry}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start space-x-1 mb-6">
                      {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                      ))}
                    </div>

                    {/* Project Details */}
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <Icon name="Briefcase" size={16} className="text-accent" />
                        <span className="text-text-secondary">{currentTestimonial?.project}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <Icon name="TrendingUp" size={16} className="text-success" />
                        <span className="text-text-secondary">{currentTestimonial?.result}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <Icon name="Clock" size={16} className="text-brand-gold" />
                        <span className="text-text-secondary">{currentTestimonial?.timeline}</span>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="lg:col-span-2">
                    <blockquote className="text-xl sm:text-2xl font-medium text-primary leading-relaxed mb-8">
                      "{currentTestimonial?.quote}"
                    </blockquote>

                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {testimonials?.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === activeTestimonial
                                ? 'bg-gradient-to-r from-accent to-brand-gold' :'bg-border hover:bg-text-secondary'
                            }`}
                          />
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={prevTestimonial}
                          iconName="ChevronLeft"
                          className="w-10 h-10"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={nextTestimonial}
                          iconName="ChevronRight"
                          className="w-10 h-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-8">
            Trusted by innovative companies across industries
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center opacity-60">
            {testimonials?.map((testimonial, index) => (
              <div
                key={testimonial?.id}
                className="flex items-center justify-center p-4 bg-background rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:opacity-100"
              >
                <span className="text-lg font-bold text-primary">
                  {testimonial?.company}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                                 radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
                backgroundSize: '50px 50px, 30px 30px'
              }}></div>
            </div>

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Create Your Success Story?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Join these industry leaders who transformed their businesses through strategic design. 
                Let's discuss how we can achieve similar results for your project.
              </p>
              <Button
                className="bg-brand-gold text-primary hover:bg-brand-gold/90"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;