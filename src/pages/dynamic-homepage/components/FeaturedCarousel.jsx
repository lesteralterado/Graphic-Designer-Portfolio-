import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredProjects = [
    {
      id: 1,
      title: "TechFlow SaaS Platform",
      category: "Enterprise Software",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
      client: "TechFlow Inc.",
      year: "2024",
      metrics: {
        conversion: "+340%",
        engagement: "+250%",
        revenue: "$2.4M"
      },
      description: "Complete platform redesign that transformed user experience and drove unprecedented business growth through strategic UX optimization.",
      tags: ["UI/UX", "Frontend", "Strategy"],
      color: "from-accent to-blue-700"
    },
    {
      id: 2,
      title: "HealthCare Connect",
      category: "Healthcare Technology",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=800&h=500&fit=crop",
      client: "MedTech Solutions",
      year: "2024",
      metrics: {
        conversion: "+280%",
        engagement: "+190%",
        revenue: "$1.8M"
      },
      description: "Patient management system that revolutionized healthcare delivery with intuitive design and seamless user workflows.",
      tags: ["Healthcare", "Mobile", "Web App"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 3,
      title: "FinanceFlow Mobile",
      category: "Financial Technology",
      image: "https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=800&h=500&fit=crop",
      client: "FinanceFlow Ltd.",
      year: "2024",
      metrics: {
        conversion: "+420%",
        engagement: "+310%",
        revenue: "$3.2M"
      },
      description: "Mobile banking application that redefined financial interactions with cutting-edge security and user-centric design.",
      tags: ["FinTech", "Mobile", "Security"],
      color: "from-brand-gold to-orange-600"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProjects?.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects?.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects?.length) % featuredProjects?.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentProject = featuredProjects?.[currentSlide];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Standout <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Dive deep into our most impactful projects and discover how strategic design 
            drives measurable business transformation.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-card shadow-brand-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={currentProject?.image}
                      alt={currentProject?.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${currentProject?.color} opacity-20`}></div>
                    
                    {/* Project Tags */}
                    <div className="absolute top-6 left-6">
                      <div className="flex flex-wrap gap-2">
                        {currentProject?.tags?.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <p className="text-accent font-semibold text-sm mb-2">
                        {currentProject?.category} • {currentProject?.year}
                      </p>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
                        {currentProject?.title}
                      </h3>
                      <p className="text-text-secondary text-lg leading-relaxed mb-6">
                        {currentProject?.description}
                      </p>
                      <p className="text-sm text-text-secondary font-medium">
                        Client: {currentProject?.client}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-4 bg-surface rounded-xl">
                        <div className="text-2xl font-bold text-accent mb-1">
                          {currentProject?.metrics?.conversion}
                        </div>
                        <div className="text-xs text-text-secondary font-medium">
                          Conversion
                        </div>
                      </div>
                      <div className="text-center p-4 bg-surface rounded-xl">
                        <div className="text-2xl font-bold text-emerald-500 mb-1">
                          {currentProject?.metrics?.engagement}
                        </div>
                        <div className="text-xs text-text-secondary font-medium">
                          Engagement
                        </div>
                      </div>
                      <div className="text-center p-4 bg-surface rounded-xl">
                        <div className="text-2xl font-bold text-brand-gold mb-1">
                          {currentProject?.metrics?.revenue}
                        </div>
                        <div className="text-xs text-text-secondary font-medium">
                          Revenue Impact
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link to="/project-case-study">
                      <Button 
                        className="btn-accent" 
                        iconName="ArrowRight" 
                        iconPosition="right"
                      >
                        View Full Case Study
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {featuredProjects?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-accent scale-125' :'bg-border hover:bg-accent/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-card hover:bg-accent hover:text-white border border-border rounded-full flex items-center justify-center transition-all duration-300 shadow-brand hover:shadow-brand-lg"
                aria-label="Previous slide"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-card hover:bg-accent hover:text-white border border-border rounded-full flex items-center justify-center transition-all duration-300 shadow-brand hover:shadow-brand-lg"
                aria-label="Next slide"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>

          {/* Auto-play Indicator */}
          <div className="flex items-center justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors duration-300"
            >
              <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
              <span className="text-sm font-medium">
                {isAutoPlaying ? "Auto-playing" : "Paused"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;