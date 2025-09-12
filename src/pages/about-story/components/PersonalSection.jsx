import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PersonalSection = () => {
  const personalInterests = [
    {
      icon: "Camera",
      title: "Image Enhancement & Retouching",
      description: "Adjust brightness, contrast, and sharpness Correct colors and white balance Remove camera dark spots and lens flare Remove noise and unwanted colors",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
    },
    {
      icon: "BookOpen",
      title: "Object Removal",
      description: "Seamlessly remove unwanted objects, clutter, or distractions from your property photos to create clean, professional images that highlight the best features.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop"
    },
    {
      icon: "Mic",
      title: "HDR Blending",
      description: "Combine multiple exposures for well-lit, balanced images that capture every detail of your property in perfect lighting conditions.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=300&h=200&fit=crop"
    },
    {
      icon: "Palette",
      title: "Day-to-Dusk Conversion",
      description: "Transform daylight property shots into stunning twilight views that create emotional connections and showcase properties in their most appealing light.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
    }
  ];

  const workspaceImages = [
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      alt: "Design workspace with multiple monitors"
    },
    {
      src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      alt: "Creative process sketches and mood boards"
    },
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      alt: "Team collaboration session"
    }
  ];

  const values = [
    {
      title: "Sustainability",
      description: "Committed to eco-friendly design practices and working with environmentally conscious brands.",
      icon: "Leaf"
    },
    {
      title: "Diversity & Inclusion",
      description: "Actively promoting diverse voices in design and creating inclusive experiences for all users.",
      icon: "Users"
    },
    {
      title: "Community",
      description: "Regular volunteer work with local nonprofits, providing pro-bono design services to meaningful causes.",
      icon: "Heart"
    },
    {
      title: "Innovation",
      description: "Always exploring emerging technologies and their potential to enhance human experiences.",
      icon: "Zap"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-accent to-brand-gold rounded-full"></div>
            <span className="text-sm font-medium text-text-secondary uppercase tracking-wider">
              Beyond Design
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-brand-gold to-accent rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Services Offered
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Great design comes from authentic human experiences. Here's what shapes my perspective, 
            fuels my creativity, and drives my commitment to creating meaningful work that makes a difference.
          </p>
        </motion.div>

        {/* Personal Interests */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {personalInterests?.map((interest, index) => (
            <motion.div
              key={interest?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface rounded-2xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={interest?.image}
                  alt={interest?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-brand">
                    <Icon name={interest?.icon} size={20} className="text-accent" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-primary group-hover:text-gradient transition-colors duration-300">
                  {interest?.title}
                </h3>
                <p className="text-secondary-foreground text-sm leading-relaxed">
                  {interest?.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workspace Gallery */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              Where the Magic Happens
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A glimpse into my creative workspace and collaborative process. 
              Every great design starts with the right environment and mindset.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {workspaceImages?.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 group"
              >
                <Image
                  src={image?.src}
                  alt={image?.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Values & Beliefs */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-surface to-muted rounded-3xl p-8 sm:p-12 shadow-brand-lg relative overflow-hidden"
        >
          // Background decoration
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-brand-gold/5 to-transparent rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Values That Guide My Work
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Design is never neutral. These core values shape every decision I make 
                and every project I choose to take on.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values?.map((value, index) => (
                <motion.div
                  key={value?.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-brand-gold rounded-2xl flex items-center justify-center mx-auto shadow-brand group-hover:shadow-brand-lg transition-all duration-300">
                    <Icon name={value?.icon} size={24} className="text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-primary group-hover:text-gradient transition-colors duration-300">
                      {value?.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {value?.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div> */}

        {/* Personal Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                                 radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
                backgroundSize: '50px 50px, 30px 30px'
              }}></div>
            </div>

            <div className="relative">
              <Icon name="Heart" size={48} className="text-brand-gold mx-auto mb-6" />
              <blockquote className="text-2xl sm:text-3xl font-bold leading-relaxed mb-6">
                "Design is my way of making the world a little more
                <span className="text-brand-gold"> beautiful, functional, and meaningful</span> 
                — one pixel at a time."
              </blockquote>
              <cite className="text-lg opacity-90">
                — Don Migy
              </cite>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalSection;