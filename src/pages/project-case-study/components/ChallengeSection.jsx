import React from 'react';
import Icon from '../../../components/AppIcon';

const ChallengeSection = ({ challenge }) => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                  <Icon name="AlertTriangle" size={24} className="text-destructive" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                  The Challenge
                </h2>
              </div>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                {challenge?.overview}
              </p>
            </div>

            {/* Challenge Points */}
            <div className="space-y-6">
              {challenge?.points?.map((point, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {point?.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {point?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Impact Statement */}
            <div className="p-6 bg-destructive/5 rounded-xl border-l-4 border-destructive">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Business Impact
              </h3>
              <p className="text-text-secondary">
                {challenge?.businessImpact}
              </p>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="space-y-6">
            {/* Problem Visualization */}
            <div className="bg-surface rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-primary mb-6">
                Key Problems Identified
              </h3>
              
              <div className="space-y-4">
                {challenge?.problems?.map((problem, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="X" size={16} className="text-destructive" />
                      <span className="text-text-primary">{problem?.issue}</span>
                    </div>
                    <div className="text-sm text-destructive font-medium">
                      -{problem?.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Constraints */}
            <div className="bg-warning/5 rounded-2xl p-8 border border-warning/20">
              <h3 className="text-lg font-semibold text-primary mb-6 flex items-center space-x-2">
                <Icon name="Clock" size={20} className="text-warning" />
                <span>Project Constraints</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {challenge?.constraints?.map((constraint, index) => (
                  <div key={index} className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-warning mb-1">
                      {constraint?.value}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {constraint?.label}
                    </div>
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

export default ChallengeSection;