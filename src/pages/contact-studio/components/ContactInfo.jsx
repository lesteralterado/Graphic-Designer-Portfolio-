import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'hello@designvaultpro.com',
      description: 'Primary contact for project inquiries',
      action: 'mailto:hello@designvaultpro.com',
      responseTime: 'Within 24 hours'
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Direct line for urgent matters',
      action: 'tel:+15551234567',
      responseTime: 'Business hours only'
    },
    {
      icon: 'MessageCircle',
      label: 'WhatsApp',
      value: '+1 (555) 123-4567',
      description: 'Quick questions and updates',
      action: 'https://wa.me/15551234567',
      responseTime: 'Same day response'
    }
  ];

  const socialLinks = [
    {
      icon: 'Instagram',
      label: 'Instagram',
      handle: '@designvaultpro',
      url: 'https://instagram.com/designvaultpro',
      description: 'Behind-the-scenes and latest work'
    },
    {
      icon: 'Linkedin',
      label: 'LinkedIn',
      handle: 'DesignVault Pro',
      url: 'https://linkedin.com/company/designvaultpro',
      description: 'Professional updates and insights'
    },
    {
      icon: 'Twitter',
      label: 'Twitter',
      handle: '@designvaultpro',
      url: 'https://twitter.com/designvaultpro',
      description: 'Design tips and industry thoughts'
    },
    {
      icon: 'Dribbble',
      label: 'Dribbble',
      handle: 'designvaultpro',
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
    <div className="space-y-8">
      {/* Primary Contact Methods */}
      <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8">
        <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
        
        <div className="space-y-6">
          {contactMethods?.map((method, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-surface rounded-lg hover:bg-accent/5 transition-colors duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name={method?.icon} size={20} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-primary">{method?.label}</h4>
                <p className="text-primary font-medium">{method?.value}</p>
                <p className="text-sm text-text-secondary mt-1">{method?.description}</p>
                <p className="text-xs text-accent font-medium mt-2">
                  Response time: {method?.responseTime}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(method?.action, '_blank')}
                iconName="ExternalLink"
                className="flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Office Hours */}
      <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Clock" size={24} className="text-accent" />
          <h3 className="text-2xl font-bold text-primary">Office Hours</h3>
        </div>
        
        <div className="space-y-3">
          {officeHours?.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
              <span className="font-medium text-primary">{schedule?.day}</span>
              <span className="text-text-secondary">{schedule?.hours}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={16} className="text-accent mt-0.5" />
            <div>
              <p className="text-sm text-primary font-medium">Current Status</p>
              <p className="text-sm text-text-secondary">
                Currently accepting new projects for Q2 2025. Book a consultation to discuss your timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Social Media */}
      <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8">
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
      </div>
      {/* Emergency Contact */}
      <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8">
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
            onClick={() => window.open('tel:+15551234567', '_blank')}
          >
            Call Now
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
      </div>
    </div>
  );
};

export default ContactInfo;