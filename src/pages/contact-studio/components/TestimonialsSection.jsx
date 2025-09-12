import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow Solutions',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      content: `Working with Alenton Perfect Touch was an absolute game-changer for our brand. Their communication throughout the project was exceptional - always responsive, professional, and genuinely invested in our success.\n\nThe collaborative process felt seamless, and they took the time to truly understand our vision before translating it into stunning visual identity. The final brand system exceeded our expectations and has significantly improved our market presence.`,
      projectType: 'Complete Brand Identity',
      timeline: '6 weeks',
      highlight: 'Exceptional communication and collaboration'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Founder & CEO',
      company: 'GreenSpace Ventures',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 5,
      content: `The team's ability to balance creative vision with strategic thinking is remarkable. They didn't just design beautiful materials - they helped us understand how design could drive our business goals.\n\nEvery interaction was professional yet personal. They made us feel like their only client, despite knowing they work with many others. The project timeline was met perfectly, and the quality of work speaks for itself.`,
      projectType: 'Website & Marketing Materials',
      timeline: '8 weeks',
      highlight: 'Strategic thinking meets creative excellence'
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Creative Director',
      company: 'Artisan Collective',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      rating: 5,
      content: `As a fellow creative professional, I have high standards for design partnerships. Alenton Perfect Touch not only met but exceeded those expectations. Their process is thorough, their feedback incorporation is seamless, and their final deliverables are always pixel-perfect.\n\nWhat impressed me most was their willingness to iterate and refine until we achieved exactly what we envisioned. True collaborative partners.`,
      projectType: 'Brand Refresh & Packaging',
      timeline: '10 weeks',
      highlight: 'Meticulous attention to detail and iteration'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Operations Manager',
      company: 'Urban Fitness Co.',
      avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
      rating: 5,
      content: `From our first consultation to final delivery, the experience was outstanding. They took complex ideas and made them visually compelling and easy to understand. The communication was clear, timelines were realistic, and they delivered exactly what was promised.\n\nOur new brand identity has helped us stand out in a crowded market. The investment in professional design has already paid for itself through increased customer engagement.`,
      projectType: 'Brand Identity & Digital Assets',
      timeline: '5 weeks',
      highlight: 'Clear communication and realistic timelines'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentClient = testimonials?.[currentTestimonial];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-brand-gold fill-current" : "text-border"}
      />
    ));
  };

  return (
    <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-primary mb-2">Client Experiences</h3>
        <p className="text-text-secondary">
          Hear from clients about our collaborative process and communication quality.
        </p>
      </div>
      {/* Main Testimonial */}
      <div className="relative">
        <div className="bg-surface rounded-xl p-6 lg:p-8">
          {/* Client Info Header */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="flex-shrink-0">
              <Image
                src={currentClient?.avatar}
                alt={`${currentClient?.name} profile`}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-semibold text-primary">{currentClient?.name}</h4>
              <p className="text-text-secondary">{currentClient?.role}</p>
              <p className="text-accent font-medium">{currentClient?.company}</p>
              <div className="flex items-center space-x-1 mt-2">
                {renderStars(currentClient?.rating)}
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <blockquote className="text-text-primary leading-relaxed mb-6 whitespace-pre-line">
            "{currentClient?.content}"
          </blockquote>

          {/* Project Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
            <div>
              <p className="text-xs text-text-secondary uppercase tracking-wide font-medium mb-1">
                Project Type
              </p>
              <p className="text-sm text-primary font-medium">{currentClient?.projectType}</p>
            </div>
            <div>
              <p className="text-xs text-text-secondary uppercase tracking-wide font-medium mb-1">
                Timeline
              </p>
              <p className="text-sm text-primary font-medium">{currentClient?.timeline}</p>
            </div>
            <div>
              <p className="text-xs text-text-secondary uppercase tracking-wide font-medium mb-1">
                Key Highlight
              </p>
              <p className="text-sm text-accent font-medium">{currentClient?.highlight}</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prevTestimonial}
            className="flex items-center justify-center w-10 h-10 bg-surface hover:bg-accent/10 rounded-lg transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} className="text-text-secondary hover:text-accent" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-accent' : 'bg-border hover:bg-accent/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="flex items-center justify-center w-10 h-10 bg-surface hover:bg-accent/10 rounded-lg transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} className="text-text-secondary hover:text-accent" />
          </button>
        </div>
      </div>
      {/* Trust Indicators */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-accent mb-1">98%</div>
            <p className="text-sm text-text-secondary">Client Satisfaction</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent mb-1">24hr</div>
            <p className="text-sm text-text-secondary">Average Response Time</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent mb-1">150+</div>
            <p className="text-sm text-text-secondary">Successful Projects</p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="mt-8 p-4 bg-accent/5 border border-accent/20 rounded-lg">
        <div className="text-center">
          <p className="text-sm text-primary font-medium mb-2">
            Ready to experience our collaborative approach?
          </p>
          <p className="text-xs text-text-secondary">
            Join our satisfied clients and let's create something amazing together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;