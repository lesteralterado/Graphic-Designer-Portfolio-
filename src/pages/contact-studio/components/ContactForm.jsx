import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    hasExistingBrand: false,
    needsStrategy: false,
    hasReferral: false,
    referralSource: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypeOptions = [
    { value: 'brand-identity', label: 'Brand Identity & Logo Design' },
    { value: 'web-design', label: 'Website Design & Development' },
    { value: 'digital-marketing', label: 'Digital Marketing Materials' },
    { value: 'packaging', label: 'Packaging & Product Design' },
    { value: 'print-design', label: 'Print & Editorial Design' },
    { value: 'ui-ux', label: 'UI/UX & App Design' },
    { value: 'consultation', label: 'Design Consultation' },
    { value: 'other', label: 'Other (Please specify)' }
  ];

  const budgetOptions = [
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k+', label: '$100,000+' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush project)' },
    { value: '1-month', label: '1 Month' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: '6-months+', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    if (!formData?.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData?.budget) newErrors.budget = 'Please select a budget range';
    if (!formData?.description?.trim()) newErrors.description = 'Project description is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData?.email && !emailRegex?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        hasExistingBrand: false,
        needsStrategy: false,
        hasReferral: false,
        referralSource: ''
      });
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-primary mb-2">Start Your Project</h3>
        <p className="text-text-secondary">Tell us about your vision and we'll craft a tailored proposal for you.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            name="name"
            value={formData?.name}
            onChange={handleInputChange}
            placeholder="John Doe"
            required
            error={errors?.name}
          />
          
          <Input
            label="Email Address"
            type="email"
            name="email"
            value={formData?.email}
            onChange={handleInputChange}
            placeholder="john@company.com"
            required
            error={errors?.email}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Company Name"
            type="text"
            name="company"
            value={formData?.company}
            onChange={handleInputChange}
            placeholder="Your Company"
            description="Optional"
          />
          
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData?.phone}
            onChange={handleInputChange}
            placeholder="+1 (555) 123-4567"
            description="Optional"
          />
        </div>

        {/* Project Details */}
        <div className="pt-4 border-t border-border">
          <h4 className="text-lg font-semibold text-primary mb-4">Project Details</h4>
          
          <div className="space-y-6">
            <Select
              label="Project Type"
              options={projectTypeOptions}
              value={formData?.projectType}
              onChange={(value) => handleSelectChange('projectType', value)}
              placeholder="Select project type"
              required
              error={errors?.projectType}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Budget Range"
                options={budgetOptions}
                value={formData?.budget}
                onChange={(value) => handleSelectChange('budget', value)}
                placeholder="Select budget range"
                required
                error={errors?.budget}
              />
              
              <Select
                label="Timeline"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) => handleSelectChange('timeline', value)}
                placeholder="Select timeline"
                description="When do you need this completed?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Project Description *
              </label>
              <textarea
                name="description"
                value={formData?.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                placeholder="Describe your project, goals, and any specific requirements..."
                required
              />
              {errors?.description && (
                <p className="mt-1 text-sm text-destructive">{errors?.description}</p>
              )}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="pt-4 border-t border-border">
          <h4 className="text-lg font-semibold text-primary mb-4">Additional Information</h4>
          
          <div className="space-y-4">
            <Checkbox
              label="We have an existing brand identity"
              name="hasExistingBrand"
              checked={formData?.hasExistingBrand}
              onChange={handleInputChange}
              description="Check if you already have logos, brand guidelines, etc."
            />
            
            <Checkbox
              label="We need strategic consultation"
              name="needsStrategy"
              checked={formData?.needsStrategy}
              onChange={handleInputChange}
              description="Include brand strategy and positioning in the project"
            />
            
            <Checkbox
              label="I was referred by someone"
              name="hasReferral"
              checked={formData?.hasReferral}
              onChange={handleInputChange}
            />

            {formData?.hasReferral && (
              <Input
                label="Referral Source"
                type="text"
                name="referralSource"
                value={formData?.referralSource}
                onChange={handleInputChange}
                placeholder="Who referred you to us?"
                className="ml-6"
              />
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <Button
            type="submit"
            className="btn-cta w-full"
            size="lg"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Your Inquiry...' : 'Send Project Inquiry'}
          </Button>
          
          <p className="text-xs text-text-secondary text-center mt-3">
            We'll respond within 24 hours with a detailed proposal and next steps.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;