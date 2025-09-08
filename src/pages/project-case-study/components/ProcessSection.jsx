import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProcessSection = ({ process }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <Icon name="Cog" size={24} className="text-accent" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Design Process
            </h2>
          </div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A systematic approach to solving complex design challenges through research, ideation, and iteration.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {process.steps?.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-accent text-white shadow-brand'
                    : 'bg-background text-text-secondary hover:bg-accent/10 hover:text-accent'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm">{index + 1}</span>
                  <span>{step?.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="bg-background rounded-2xl p-8 shadow-brand">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {process.steps?.[activeStep]?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {process.steps?.[activeStep]?.description}
                  </p>
                </div>

                {/* Activities */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-4">
                    Key Activities
                  </h4>
                  <div className="space-y-3">
                    {process.steps?.[activeStep]?.activities?.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="text-text-primary">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-4">
                    Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {process.steps?.[activeStep]?.deliverables?.map((deliverable, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-brand">
                  <Image
                    src={process.steps?.[activeStep]?.image}
                    alt={`${process.steps?.[activeStep]?.title} process`}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary">
                  {process.steps?.[activeStep]?.duration}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Insights */}
        <div className="grid md:grid-cols-3 gap-8">
          {process.insights?.map((insight, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-brand">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name={insight?.icon} size={24} className="text-brand-gold" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                {insight?.title}
              </h3>
              <p className="text-text-secondary">
                {insight?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;