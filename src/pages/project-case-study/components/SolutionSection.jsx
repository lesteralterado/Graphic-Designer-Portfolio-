import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const SolutionSection = ({ solution }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
              <Icon name="Lightbulb" size={24} className="text-success" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              The Solution
            </h2>
          </div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {solution?.overview}
          </p>
        </div>

        {/* Solution Overview */}
        <div className="mb-16">
          <div className="bg-success/5 rounded-2xl p-8 border border-success/20">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Strategic Approach
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {solution?.strategies?.map((strategy, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={strategy?.icon} size={24} className="text-success" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    {strategy?.title}
                  </h4>
                  <p className="text-text-secondary">
                    {strategy?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Key Features & Innovations
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Feature Navigation */}
            <div className="space-y-4">
              {solution?.features?.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-accent text-white shadow-brand'
                      : 'bg-surface hover:bg-accent/10'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activeFeature === index ? 'bg-white/20' : 'bg-accent/10'
                    }`}>
                      <Icon 
                        name={feature?.icon} 
                        size={20} 
                        className={activeFeature === index ? 'text-white' : 'text-accent'} 
                      />
                    </div>
                    <div>
                      <h4 className={`text-lg font-semibold mb-2 ${
                        activeFeature === index ? 'text-white' : 'text-primary'
                      }`}>
                        {feature?.title}
                      </h4>
                      <p className={`text-sm ${
                        activeFeature === index ? 'text-white/80' : 'text-text-secondary'
                      }`}>
                        {feature?.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Feature Visual */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-brand-lg">
                <Image
                  src={solution?.features?.[activeFeature]?.image}
                  alt={`${solution?.features?.[activeFeature]?.title} feature`}
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {/* Feature Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary">
                Feature {activeFeature + 1} of {solution?.features?.length}
              </div>
            </div>
          </div>
        </div>

        {/* Before & After Comparison */}
        <div className="bg-surface rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Transformation Showcase
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="X" size={20} className="text-destructive" />
                <h4 className="text-lg font-semibold text-primary">Before</h4>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-brand">
                <Image
                  src={solution?.comparison?.before?.image}
                  alt="Before transformation"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="space-y-2">
                {solution?.comparison?.before?.issues?.map((issue, index) => (
                  <div key={index} className="flex items-center space-x-2 text-destructive">
                    <Icon name="Minus" size={16} />
                    <span className="text-sm">{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Check" size={20} className="text-success" />
                <h4 className="text-lg font-semibold text-primary">After</h4>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-brand">
                <Image
                  src={solution?.comparison?.after?.image}
                  alt="After transformation"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="space-y-2">
                {solution?.comparison?.after?.improvements?.map((improvement, index) => (
                  <div key={index} className="flex items-center space-x-2 text-success">
                    <Icon name="Plus" size={16} />
                    <span className="text-sm">{improvement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;