import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const PricingCalculator = () => {
  const [selectedService, setSelectedService] = useState('');
  const [projectScope, setProjectScope] = useState('');
  const [timeline, setTimeline] = useState('');
  const [additionalServices, setAdditionalServices] = useState([]);

  const serviceOptions = [
    { value: 'brand-identity', label: 'Brand Identity Development', basePrice: 15000 },
    { value: 'digital-experience', label: 'Digital Experience Design', basePrice: 25000 },
    { value: 'marketing-campaign', label: 'Marketing Campaign Creation', basePrice: 12000 },
    { value: 'design-system', label: 'Design System Architecture', basePrice: 30000 }
  ];

  const scopeOptions = [
    { value: 'startup', label: 'Startup/Small Business', multiplier: 0.8 },
    { value: 'growth', label: 'Growth-Stage Company', multiplier: 1.0 },
    { value: 'enterprise', label: 'Enterprise/Large Corp', multiplier: 1.5 }
  ];

  const timelineOptions = [
    { value: 'standard', label: 'Standard Timeline (8-12 weeks)', multiplier: 1.0 },
    { value: 'expedited', label: 'Expedited Timeline (4-6 weeks)', multiplier: 1.3 },
    { value: 'extended', label: 'Extended Timeline (12+ weeks)', multiplier: 0.9 }
  ];

  const additionalOptions = [
    { value: 'photography', label: 'Custom Photography', price: 3000 },
    { value: 'copywriting', label: 'Professional Copywriting', price: 2500 },
    { value: 'animation', label: 'Motion Graphics/Animation', price: 4000 },
    { value: 'consultation', label: 'Ongoing Consultation (3 months)', price: 5000 }
  ];

  const calculateEstimate = () => {
    if (!selectedService || !projectScope || !timeline) return null;

    const service = serviceOptions?.find(s => s?.value === selectedService);
    const scope = scopeOptions?.find(s => s?.value === projectScope);
    const time = timelineOptions?.find(t => t?.value === timeline);

    let basePrice = service?.basePrice * scope?.multiplier * time?.multiplier;
    
    const additionalPrice = additionalServices?.reduce((total, serviceValue) => {
      const addon = additionalOptions?.find(a => a?.value === serviceValue);
      return total + (addon ? addon?.price : 0);
    }, 0);

    return basePrice + additionalPrice;
  };

  const estimate = calculateEstimate();

  return (
    <div className="bg-card rounded-2xl p-8 shadow-brand border border-border">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-brand-gold rounded-xl flex items-center justify-center mx-auto mb-4">
          <Icon name="Calculator" size={24} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Project Investment Calculator</h3>
        <p className="text-text-secondary">Get an instant estimate for your design project</p>
      </div>
      <div className="space-y-6">
        <Select
          label="Primary Service"
          placeholder="Select your main service need"
          options={serviceOptions}
          value={selectedService}
          onChange={setSelectedService}
          required
        />

        <Select
          label="Project Scope"
          placeholder="Choose your company size"
          options={scopeOptions}
          value={projectScope}
          onChange={setProjectScope}
          required
        />

        <Select
          label="Timeline Preference"
          placeholder="Select your preferred timeline"
          options={timelineOptions}
          value={timeline}
          onChange={setTimeline}
          required
        />

        <Select
          label="Additional Services (Optional)"
          placeholder="Select additional services"
          options={additionalOptions}
          value={additionalServices}
          onChange={setAdditionalServices}
          multiple
          searchable
        />

        {estimate && (
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-primary">Estimated Investment</h4>
              <Icon name="TrendingUp" size={20} className="text-accent" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">
              ${estimate?.toLocaleString()}
            </div>
            <p className="text-sm text-text-secondary mb-4">
              This is a preliminary estimate. Final pricing depends on specific requirements and project complexity.
            </p>
            <Button className="btn-cta" fullWidth iconName="MessageCircle" iconPosition="left">
              Discuss Your Project
            </Button>
          </div>
        )}

        {!estimate && (
          <div className="text-center py-8 border-2 border-dashed border-border rounded-xl">
            <Icon name="Calculator" size={32} className="text-text-secondary mx-auto mb-3" />
            <p className="text-text-secondary">Complete the form above to see your project estimate</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingCalculator;