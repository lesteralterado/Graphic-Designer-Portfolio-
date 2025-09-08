import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ProjectBriefForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    description: '',
    goals: '',
    challenges: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    { value: 'brand-identity', label: 'Brand Identity Development' },
    { value: 'digital-experience', label: 'Digital Experience Design' },
    { value: 'marketing-campaign', label: 'Marketing Campaign Creation' },
    { value: 'design-system', label: 'Design System Architecture' },
    { value: 'agency-partnership', label: 'Creative Agency Partnership' },
    { value: 'startup-accelerator', label: 'Tech Startup Package' }
  ];

  const budgetOptions = [
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-30k', label: '$15,000 - $30,000' },
    { value: '30k-50k', label: '$30,000 - $50,000' },
    { value: '50k+', label: '$50,000+' }
  ];

  const timelineOptions = [
    { value: '4-6-weeks', label: '4-6 weeks (Expedited)' },
    { value: '8-12-weeks', label: '8-12 weeks (Standard)' },
    { value: '12+-weeks', label: '12+ weeks (Extended)' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 text-center shadow-brand border border-border">
        <div className="w-16 h-16 bg-gradient-to-br from-success via-accent to-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4">Project Brief Received!</h3>
        <p className="text-text-secondary mb-6 max-w-md mx-auto">
          Thank you for your detailed project brief. We'll review your requirements and get back to you within 24 hours with next steps.
        </p>
        <div className="bg-surface rounded-xl p-4 mb-6">
          <p className="text-sm text-text-secondary">
            <strong>What happens next:</strong><br />
            1. Project brief review (24 hours)<br />
            2. Discovery call scheduling<br />
            3. Detailed proposal delivery
          </p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '', email: '', company: '', service: '', budget: '', 
              timeline: '', description: '', goals: '', challenges: ''
            });
          }}
        >
          Submit Another Brief
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 shadow-brand border border-border">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-brand-gold rounded-xl flex items-center justify-center mx-auto mb-4">
          <Icon name="FileText" size={24} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Start Your Project</h3>
        <p className="text-text-secondary">
          Tell us about your vision, and we'll craft a strategic approach to bring it to life.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your name"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            placeholder="your@email.com"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            required
          />
        </div>

        <Input
          label="Company Name"
          type="text"
          placeholder="Your company or organization"
          value={formData?.company}
          onChange={(e) => handleInputChange('company', e?.target?.value)}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Select
            label="Primary Service"
            placeholder="Select service"
            options={serviceOptions}
            value={formData?.service}
            onChange={(value) => handleInputChange('service', value)}
            required
          />
          
          <Select
            label="Budget Range"
            placeholder="Select budget"
            options={budgetOptions}
            value={formData?.budget}
            onChange={(value) => handleInputChange('budget', value)}
            required
          />
          
          <Select
            label="Timeline"
            placeholder="Select timeline"
            options={timelineOptions}
            value={formData?.timeline}
            onChange={(value) => handleInputChange('timeline', value)}
            required
          />
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Project Description *
            </label>
            <textarea
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
              rows="4"
              placeholder="Describe your project, current challenges, and what you're looking to achieve..."
              value={formData?.description}
              onChange={(e) => handleInputChange('description', e?.target?.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Business Goals
            </label>
            <textarea
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
              rows="3"
              placeholder="What specific business outcomes are you hoping to achieve with this project?"
              value={formData?.goals}
              onChange={(e) => handleInputChange('goals', e?.target?.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Current Challenges
            </label>
            <textarea
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
              rows="3"
              placeholder="What obstacles or pain points are you currently facing that this project should address?"
              value={formData?.challenges}
              onChange={(e) => handleInputChange('challenges', e?.target?.value)}
            />
          </div>
        </div>

        <div className="bg-surface rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={20} className="text-accent mt-0.5" />
            <div>
              <h4 className="font-medium text-primary mb-2">What happens after submission?</h4>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Project brief review within 24 hours</li>
                <li>• Discovery call to discuss your vision in detail</li>
                <li>• Custom proposal with timeline and investment details</li>
                <li>• Strategic recommendations based on your goals</li>
              </ul>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="btn-cta"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
        >
          {isSubmitting ? 'Submitting Brief...' : 'Submit Project Brief'}
        </Button>
      </form>
    </div>
  );
};

export default ProjectBriefForm;