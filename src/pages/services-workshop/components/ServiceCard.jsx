import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onLearnMore }) => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-brand hover:shadow-brand-lg transition-all duration-300 group border border-border">
      <div className="flex items-start justify-between mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-brand-gold rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon name={service?.icon} size={28} className="text-white" />
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-primary">{service?.priceRange}</span>
          <p className="text-sm text-text-secondary">{service?.timeline}</p>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-gradient transition-colors duration-300">
        {service?.title}
      </h3>
      <p className="text-text-secondary mb-6 leading-relaxed">
        {service?.description}
      </p>
      <div className="space-y-4 mb-8">
        <h4 className="font-semibold text-primary">Key Deliverables:</h4>
        <ul className="space-y-2">
          {service?.deliverables?.map((deliverable, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm text-text-secondary">{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <div className="flex items-center space-x-2">
          <Icon name="Users" size={16} className="text-accent" />
          <span className="text-sm text-text-secondary">{service?.clientType}</span>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          iconName="ArrowRight" 
          iconPosition="right"
          onClick={() => onLearnMore(service)}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;