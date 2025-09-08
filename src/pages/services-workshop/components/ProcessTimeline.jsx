import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = () => {
  const processSteps = [
    {
      phase: "Discovery & Strategy",
      duration: "Week 1-2",
      icon: "Search",
      description: "Deep dive into your business goals, target audience, and competitive landscape",
      activities: [
        "Stakeholder interviews and brand audit",
        "Market research and competitor analysis", 
        "User persona development",
        "Strategic positioning workshop"
      ]
    },
    {
      phase: "Concept Development",
      duration: "Week 3-4", 
      icon: "Lightbulb",
      description: "Creative exploration and concept refinement based on strategic insights",
      activities: [
        "Mood board and visual direction",
        "Initial concept presentations",
        "Iterative design refinement",
        "Stakeholder feedback integration"
      ]
    },
    {
      phase: "Design Execution",
      duration: "Week 5-8",
      icon: "Palette",
      description: "Detailed design development and asset creation across all touchpoints",
      activities: [
        "Final design system creation",
        "Asset production and optimization",
        "Application across all materials",
        "Quality assurance and testing"
      ]
    },
    {
      phase: "Launch & Optimization",
      duration: "Week 9-10",
      icon: "Rocket",
      description: "Implementation support and performance monitoring for continuous improvement",
      activities: [
        "Implementation guidelines delivery",
        "Team training and handoff",
        "Performance metrics setup",
        "30-day optimization review"
      ]
    }
  ];

  return (
    <div className="bg-surface rounded-2xl p-8 lg:p-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-primary mb-4">Our Collaborative Process</h3>
        <p className="text-text-secondary max-w-2xl mx-auto">
          A proven methodology that ensures strategic alignment, creative excellence, and measurable results through transparent collaboration.
        </p>
      </div>
      <div className="space-y-8">
        {processSteps?.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-brand-gold rounded-xl flex items-center justify-center shadow-brand">
                  <Icon name={step?.icon} size={24} className="text-white" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-primary">{step?.phase}</h4>
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {step?.duration}
                  </span>
                </div>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {step?.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {step?.activities?.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-text-secondary">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {index < processSteps?.length - 1 && (
              <div className="absolute left-8 top-20 w-0.5 h-8 bg-border"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;