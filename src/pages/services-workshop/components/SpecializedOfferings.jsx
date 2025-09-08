import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SpecializedOfferings = () => {
  const specializations = [
    {
      title: "Creative Agency Partnerships",
      icon: "Users",
      description: "White-label design services and collaborative partnerships for creative agencies looking to expand their capabilities.",
      features: [
        "White-label project execution",
        "Rapid turnaround capabilities",
        "Scalable team integration",
        "Confidential collaboration"
      ],
      caseStudy: {
        client: "Digital Marketing Agency",
        result: "300% capacity increase without hiring",
        metric: "15 successful projects delivered"
      },
      cta: "Partner With Us"
    },
    {
      title: "Tech Startup Accelerator",
      icon: "Zap",
      description: "Fast-moving design solutions for tech startups needing rapid iteration and full brand ecosystem development.",
      features: [
        "MVP design sprints",
        "Investor pitch materials",
        "Product UI/UX design",
        "Brand system creation"
      ],
      caseStudy: {
        client: "FinTech Startup",
        result: "Series A funding secured",
        metric: "$2.5M raised with new brand"
      },
      cta: "Accelerate Growth"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {specializations?.map((spec, index) => (
        <div key={index} className="bg-surface rounded-2xl p-8 border border-border">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-primary via-accent to-brand-gold rounded-xl flex items-center justify-center">
              <Icon name={spec?.icon} size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary">{spec?.title}</h3>
          </div>
          
          <p className="text-text-secondary mb-6 leading-relaxed">
            {spec?.description}
          </p>
          
          <div className="space-y-4 mb-8">
            <h4 className="font-semibold text-primary">Specialized Features:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {spec?.features?.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-text-secondary">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 mb-6 border border-border">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name="Award" size={16} className="text-brand-gold" />
              <span className="text-sm font-medium text-primary">Success Story</span>
            </div>
            <h5 className="font-semibold text-primary mb-2">{spec?.caseStudy?.client}</h5>
            <p className="text-sm text-text-secondary mb-2">{spec?.caseStudy?.result}</p>
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={14} className="text-accent" />
              <span className="text-sm font-medium text-accent">{spec?.caseStudy?.metric}</span>
            </div>
          </div>
          
          <Button className="btn-accent" fullWidth iconName="ArrowRight" iconPosition="right">
            {spec?.cta}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default SpecializedOfferings;