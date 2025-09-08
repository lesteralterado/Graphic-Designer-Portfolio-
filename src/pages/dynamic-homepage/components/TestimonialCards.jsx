import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialCards = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "CEO",
      company: "TechFlow Inc.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop",
      content: `Working with DesignVault Pro transformed our entire digital presence. The strategic approach didn't just make us look better—it increased our conversion rate by 340% and generated $2.4M in additional revenue within 6 months.`,
      metrics: {
        conversion: "+340%",
        revenue: "$2.4M",
        timeline: "6 months"
      },
      rating: 5,
      project: "SaaS Platform Redesign"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "Founder",
      company: "HealthCare Connect",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=40&fit=crop",
      content: `The attention to detail and user-centered approach was exceptional. Our patient engagement increased by 280%, and we've seen a dramatic reduction in support tickets. The design truly speaks to our users' needs.`,
      metrics: {
        conversion: "+280%",
        revenue: "$1.8M",
        timeline: "4 months"
      },
      rating: 5,
      project: "Healthcare Platform"
    },
    {
      id: 3,
      name: "Emily Watson",
      position: "Product Director",
      company: "FinanceFlow Ltd.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=40&fit=crop",
      content: `Outstanding work on our mobile banking app. The user experience is now seamless, and we've achieved a 420% increase in user engagement. The design perfectly balances security with usability.`,
      metrics: {
        conversion: "+420%",
        revenue: "$3.2M",
        timeline: "5 months"
      },
      rating: 5,
      project: "Mobile Banking App"
    },
    {
      id: 4,
      name: "David Park",
      position: "CTO",
      company: "DataViz Solutions",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&h=40&fit=crop",
      content: `The dashboard redesign exceeded all expectations. Our team productivity increased by 400%, and client satisfaction scores are at an all-time high. The data visualization is both beautiful and functional.`,
      metrics: {
        conversion: "+400%",
        revenue: "$1.9M",
        timeline: "3 months"
      },
      rating: 5,
      project: "Analytics Dashboard"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real results from real clients. Discover how strategic design transforms 
            businesses and drives measurable growth.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-3xl shadow-brand-lg p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Client Info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-4">
                    <Image
                      src={currentTestimonial?.avatar}
                      alt={currentTestimonial?.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto lg:mx-0"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Quote" size={16} className="text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {currentTestimonial?.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-2">
                    {currentTestimonial?.position}
                  </p>
                  <div className="mb-4">
                    <Image
                      src={currentTestimonial?.logo}
                      alt={currentTestimonial?.company}
                      className="h-8 w-auto mx-auto lg:mx-0 opacity-70"
                    />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                    {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="text-xs text-accent font-semibold">
                    {currentTestimonial?.project}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed mb-6 italic">
                    "{currentTestimonial?.content}"
                  </blockquote>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-surface rounded-xl">
                      <div className="text-2xl font-bold text-accent mb-1">
                        {currentTestimonial?.metrics?.conversion}
                      </div>
                      <div className="text-xs text-text-secondary font-medium">
                        Growth
                      </div>
                    </div>
                    <div className="text-center p-4 bg-surface rounded-xl">
                      <div className="text-2xl font-bold text-emerald-500 mb-1">
                        {currentTestimonial?.metrics?.revenue}
                      </div>
                      <div className="text-xs text-text-secondary font-medium">
                        Revenue Impact
                      </div>
                    </div>
                    <div className="text-center p-4 bg-surface rounded-xl">
                      <div className="text-2xl font-bold text-brand-gold mb-1">
                        {currentTestimonial?.metrics?.timeline}
                      </div>
                      <div className="text-xs text-text-secondary font-medium">
                        Timeline
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-2 mb-8">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial
                  ? 'bg-accent scale-125' :'bg-border hover:bg-accent/50'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Floating Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials?.map((testimonial, index) => (
            <motion.div
              key={testimonial?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-card p-6 rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 cursor-pointer ${
                index === activeTestimonial ? 'ring-2 ring-accent' : ''
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-primary text-sm">
                    {testimonial?.name}
                  </h4>
                  <p className="text-text-secondary text-xs">
                    {testimonial?.company}
                  </p>
                </div>
              </div>
              
              <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                "{testimonial?.content?.substring(0, 120)}..."
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={12} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-accent font-bold text-sm">
                  {testimonial?.metrics?.conversion}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-accent" />
              <span className="text-sm font-medium text-text-secondary">100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} className="text-emerald-500" />
              <span className="text-sm font-medium text-text-secondary">On-Time Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} className="text-brand-gold" />
              <span className="text-sm font-medium text-text-secondary">Industry Recognition</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCards;