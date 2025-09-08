import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ResultsSection = ({ results }) => {
  const [animatedMetrics, setAnimatedMetrics] = useState({});

  useEffect(() => {
    const animateMetrics = () => {
      results?.metrics?.forEach((metric, index) => {
        let start = 0;
        const end = parseInt(metric?.value?.replace(/[^0-9]/g, ''));
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          
          setAnimatedMetrics(prev => ({
            ...prev,
            [index]: Math.floor(start)
          }));
        }, 16);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateMetrics();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('results-metrics');
    if (element) observer?.observe(element);

    return () => observer?.disconnect();
  }, [results?.metrics]);

  const formatMetricValue = (originalValue, animatedValue) => {
    if (originalValue?.includes('%')) {
      return `${animatedValue}%`;
    } else if (originalValue?.includes('x')) {
      return `${(animatedValue / 10)?.toFixed(1)}x`;
    } else if (originalValue?.includes('K')) {
      return `${(animatedValue / 1000)?.toFixed(1)}K`;
    }
    return animatedValue?.toString();
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-success/5 via-background to-brand-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
              <Icon name="TrendingUp" size={24} className="text-success" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Measurable Results
            </h2>
          </div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {results?.overview}
          </p>
        </div>

        {/* Key Metrics */}
        <div id="results-metrics" className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results?.metrics?.map((metric, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-brand text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-success to-brand-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={metric?.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {formatMetricValue(metric?.value, animatedMetrics?.[index] || 0)}
                </div>
                <div className="text-text-secondary font-medium mb-2">
                  {metric?.label}
                </div>
                <div className="text-sm text-success">
                  {metric?.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Business Impact Areas
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {results?.impactAreas?.map((area, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-brand">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name={area?.icon} size={20} className="text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary">
                    {area?.title}
                  </h4>
                </div>
                
                <p className="text-text-secondary mb-4">
                  {area?.description}
                </p>
                
                <div className="space-y-2">
                  {area?.achievements?.map((achievement, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-success" />
                      <span className="text-sm text-text-primary">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Quote" size={48} className="text-brand-gold mx-auto mb-6" />
            
            <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8">
              "{results?.testimonial?.quote}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center">
                <Icon name="User" size={24} className="text-brand-gold" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg">
                  {results?.testimonial?.author}
                </div>
                <div className="text-white/70">
                  {results?.testimonial?.position}
                </div>
                <div className="text-brand-gold text-sm">
                  {results?.testimonial?.company}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Success Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20"></div>
            
            <div className="space-y-8">
              {results?.timeline?.map((milestone, index) => (
                <div key={index} className={`flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className={`w-full max-w-md ${
                    index % 2 === 0 ? 'pr-8' : 'pl-8'
                  }`}>
                    <div className="bg-background rounded-xl p-6 shadow-brand relative">
                      {/* Timeline Dot */}
                      <div className={`absolute top-6 w-4 h-4 bg-accent rounded-full ${
                        index % 2 === 0 ? '-right-10' : '-left-10'
                      }`}></div>
                      
                      <div className="text-sm text-accent font-medium mb-2">
                        {milestone?.period}
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {milestone?.title}
                      </h4>
                      <p className="text-text-secondary">
                        {milestone?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;