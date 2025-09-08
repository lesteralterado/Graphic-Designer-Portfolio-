import React from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      client: "Sarah Chen",
      position: "CEO, TechFlow Solutions",
      company: "Growth-Stage SaaS",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `The collaborative process was exceptional. Every milestone was clearly defined, and the team kept us informed throughout. The final brand identity increased our conversion rate by 45% within the first quarter.`,
      metrics: "45% conversion increase",
      service: "Brand Identity Development",
      rating: 5
    },
    {
      id: 2,
      client: "Marcus Rodriguez",
      position: "Creative Director, Bloom Agency",
      company: "Creative Agency Partnership",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `Working with DesignVault Pro has transformed our capacity. Their white-label services are seamless, and clients never know the difference. Quality is consistently outstanding, and turnaround times are impressive.`,
      metrics: "300% capacity increase",
      service: "Agency Partnership",
      rating: 5
    },
    {
      id: 3,
      client: "Emily Watson",
      position: "Founder, GreenTech Innovations",
      company: "Tech Startup",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `The design system they created became the foundation of our entire product ecosystem. Investors were impressed with the professional presentation, and we secured Series A funding partly due to the strong brand presence.`,
      metrics: "$2.5M Series A raised",
      service: "Design System Architecture",
      rating: 5
    }
  ];

  return (
    <div className="bg-surface rounded-2xl p-8 lg:p-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-primary mb-4">Client Success Stories</h3>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Real results from real partnerships. See how our collaborative approach drives measurable business outcomes.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonials?.map((testimonial) => (
          <div key={testimonial?.id} className="bg-card rounded-xl p-6 shadow-brand border border-border">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(testimonial?.rating)]?.map((_, index) => (
                <Icon key={index} name="Star" size={16} className="text-brand-gold fill-current" />
              ))}
            </div>
            
            <blockquote className="text-text-secondary mb-6 leading-relaxed italic">
              "{testimonial?.content}"
            </blockquote>
            
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={testimonial?.avatar}
                alt={testimonial?.client}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-primary">{testimonial?.client}</h4>
                <p className="text-sm text-text-secondary">{testimonial?.position}</p>
                <p className="text-xs text-text-secondary">{testimonial?.company}</p>
              </div>
            </div>
            
            <div className="space-y-2 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">Service:</span>
                <span className="text-sm font-medium text-primary">{testimonial?.service}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">Result:</span>
                <span className="text-sm font-medium text-accent">{testimonial?.metrics}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;