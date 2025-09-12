import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'brhiajean81@email.com',
      description: 'Primary contact for project inquiries',
      action: 'mailto:brhiajean81@email.com',
      responseTime: 'Within 24 hours'
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+63 998-190-6895',
      description: 'Direct line for urgent matters',
      action: 'tel:+15551234567',
      responseTime: 'Business hours only'
    },
    {
      icon: 'MessageCircle',
      label: 'WhatsApp',
      value: '+63 998-190-6895',
      description: 'Quick questions and updates',
      action: 'https://wa.me/15551234567',
      responseTime: 'Same day response'
    }
  ];

  const socialLinks = [
    {
      icon: 'Instagram',
      label: 'Instagram',
      handle: 'alenton_perfect_touch',
      url: 'https://instagram.com/designvaultpro',
      description: 'Behind-the-scenes and latest work'
    },
    {
      icon: 'Linkedin',
      label: 'LinkedIn',
      handle: 'Alenton Perfect Touch',
      url: 'https://linkedin.com/company/designvaultpro',
      description: 'Professional updates and insights'
    },
    {
      icon: 'Twitter',
      label: 'Twitter',
      handle: '@alenton_perfect_touch',
      url: 'https://twitter.com/designvaultpro',
      description: 'Design tips and industry thoughts'
    },
    {
      icon: 'Dribbble',
      label: 'Dribbble',
      handle: 'alenton_perfect_touch',
      url: 'https://dribbble.com/designvaultpro',
      description: 'Creative explorations and shots'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="space-y-12">
      {/* Primary Contact Methods */}
      <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl shadow-brand-lg p-8 lg:p-10 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-gold/10 to-transparent rounded-full blur-2xl"></div>

        <div className="relative">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-brand-gold rounded-2xl flex items-center justify-center shadow-brand">
              <Icon name="MessageSquare" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary-foreground">Get in Touch</h3>
              <p className="text-text-secondary mt-1">Choose your preferred way to connect</p>
            </div>
          </div>

          <div className="grid gap-6">
            {contactMethods?.map((method, index) => (
              <div key={index} className="group relative bg-transparent from-surface to-surface/80 rounded-2xl p-6 hover:border-accent/30 transition-all duration-500 hover:shadow-brand-lg hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent/20 to-brand-gold/20 rounded-2xl flex items-center justify-center group-hover:from-accent/30 group-hover:to-brand-gold/30 transition-all duration-300 shadow-brand">
                      <Icon name={method?.icon} size={24} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">{method?.label}</h4>
                      <p className="text-primary font-semibold text-lg mt-1 group-hover:text-primary/90 transition-colors duration-300">{method?.value}</p>
                      <p className="text-text-secondary mt-2 leading-relaxed">{method?.description}</p>
                      <div className="flex items-center space-x-2 mt-3">
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                        <p className="text-sm text-accent font-medium">
                          {method?.responseTime}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(method?.action, '_blank')}
                    iconName="ArrowRight"
                    className="flex-shrink-0 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 shadow-brand hover:shadow-brand-lg"
                  />
                </div>
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-brand-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Office Hours */}
      {/* <div className="relative bg-gradient-to-br from-card via-card to-surface/50 rounded-3xl shadow-brand-lg p-8 lg:p-10 overflow-hidden">
        // Background decoration
        <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-brand-gold/10 to-transparent rounded-full blur-2xl"></div>

        <div className="relative">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-brand-gold rounded-2xl flex items-center justify-center shadow-brand">
              <Icon name="Clock" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">Office Hours</h3>
              <p className="text-text-secondary mt-1">When you can reach us</p>
            </div>
          </div>

          <div className="grid gap-4 mb-8">
            {officeHours?.map((schedule, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-surface to-surface/60 rounded-2xl border border-border/30 hover:border-accent/20 transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${schedule?.hours === 'Closed' ? 'bg-error' : 'bg-success'} group-hover:scale-125 transition-transform duration-300`}></div>
                  <span className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">{schedule?.day}</span>
                </div>
                <span className={`font-medium ${schedule?.hours === 'Closed' ? 'text-error' : 'text-text-secondary'} group-hover:text-primary transition-colors duration-300`}>
                  {schedule?.hours}
                </span>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-r from-accent/10 via-brand-gold/10 to-accent/10 border border-accent/20 rounded-2xl p-6 overflow-hidden">
            // Subtle background pattern
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, currentColor 1px, transparent 1px),
                                radial-gradient(circle at 80% 20%, currentColor 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}></div>
            </div>

            <div className="relative flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                <Icon name="Info" size={20} className="text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-primary font-semibold mb-2">Current Status</p>
                <p className="text-text-secondary leading-relaxed">
                  Currently accepting new projects for Q2 2025. Book a consultation to discuss your timeline and project requirements.
                </p>
                <div className="flex items-center space-x-2 mt-3">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm text-accent font-medium">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Call to Action */}
      <div className="relative bg-gradient-to-br from-primary via-primary to-accent/20 rounded-3xl shadow-brand-lg p-8 lg:p-10 text-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-brand-gold/5"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>

        <div className="relative">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-brand">
            <Icon name="Sparkles" size={32} className="text-white" />
          </div>

          <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your vision and bring your ideas to life. Every great project starts with a conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
              iconName="MessageCircle"
              iconPosition="left"
              onClick='#'
            >
              Send Message
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4"
              iconName="Calendar"
              iconPosition="left"
              onClick='#'
            >
              Schedule Call
            </Button>
          </div>

          <p className="text-white/60 text-sm mt-6">
            Response within 24 hours • Free initial consultation
          </p>
        </div>
      </div>

      {/* Social Media */}
      {/* <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8">
        <h3 className="text-2xl font-bold text-primary mb-6">Follow Our Work</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks?.map((social, index) => (
            <a
              key={index}
              href={social?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 bg-surface rounded-lg hover:bg-accent/5 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <Icon name={social?.icon} size={18} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                  {social?.label}
                </h4>
                <p className="text-sm text-text-secondary">{social?.handle}</p>
                <p className="text-xs text-text-secondary mt-1">{social?.description}</p>
              </div>
              <Icon name="ExternalLink" size={16} className="text-text-secondary group-hover:text-accent transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div> */}
      {/* Emergency Contact */}
      {/* <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8">
        <div className="flex items-center space-x-3 mb-4">
          <Icon name="AlertCircle" size={24} className="text-warning" />
          <h3 className="text-2xl font-bold text-primary">Urgent Projects</h3>
        </div>
        
        <p className="text-text-secondary mb-4">
          Need to discuss a rush project or have an urgent design emergency? 
          We offer expedited consultation services for time-sensitive projects.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            iconName="Phone"
            iconPosition="left"
            onClick={() => window.open('', '_blank')}
          >
            Call Now tel:+15551234567
          </Button>
          <Button
            className="btn-warning"
            iconName="Zap"
            iconPosition="left"
            onClick={() => window.open('mailto:urgent@designvaultpro.com', '_blank')}
          >
            Emergency Email
          </Button>
        </div>
        
        <p className="text-xs text-text-secondary mt-3">
          Rush project fees may apply. Response within 2 hours during business hours.
        </p>
      </div> */}
    </div>
  );
};

export default ContactInfo;