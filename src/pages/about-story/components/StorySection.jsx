import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StorySection = () => {
  const storyMilestones = [
    {
      year: "2016",
      title: "The Beginning",
      description: "Started as a freelance graphic designer while studying Computer Science at Stanford. First client was a local coffee shop that needed a complete rebrand.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      icon: "Rocket"
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Joined a fast-growing startup as Lead Designer, where I learned the power of user-centered design and data-driven decisions. Helped increase user engagement by 340%.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      icon: "TrendingUp"
    },
    {
      year: "2020",
      title: "Strategic Evolution",
      description: "Launched Alenton Perfect Touch to bridge the gap between beautiful design and business strategy. Focused on helping companies tell their stories through visual communication.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      icon: "Target"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Won \'Designer of the Year\' at the Digital Design Awards. Featured in Design Weekly and spoke at 12 international conferences about design strategy.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      icon: "Award"
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
              My Journey
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-brand-gold to-accent rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            From Passion to
            <span className="block text-gradient">Purpose</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Every great design story starts with a problem worth solving. Mine began with 
            the belief that design isn't just decoration—it's a strategic tool that can 
            transform businesses and create meaningful connections between brands and people.
          </p>
        </motion.div>

        {/* Story Timeline */}
        <div className="space-y-16">
          {storyMilestones?.map((milestone, index) => (
            <motion.div
              key={milestone?.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-brand-gold rounded-xl flex items-center justify-center shadow-brand">
                    <Icon name={milestone?.icon} size={24} className="text-white" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-gradient">{milestone?.year}</span>
                    <div className="w-16 h-1 bg-gradient-to-r from-accent to-brand-gold rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                    {milestone?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {milestone?.description}
                  </p>
                </div>

                {/* Achievement badges */}
                <div className="flex flex-wrap gap-3">
                  {index === 0 && (
                    <>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        First Client
                      </span>
                      <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-sm font-medium rounded-full">
                        Stanford Graduate
                      </span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="px-3 py-1 bg-success/10 text-success text-sm font-medium rounded-full">
                        340% Growth
                      </span>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        Lead Designer
                      </span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-sm font-medium rounded-full">
                        Company Launch
                      </span>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        Strategic Focus
                      </span>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <span className="px-3 py-1 bg-warning/10 text-warning text-sm font-medium rounded-full">
                        Award Winner
                      </span>
                      <span className="px-3 py-1 bg-success/10 text-success text-sm font-medium rounded-full">
                        12 Conferences
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-brand-lg group">
                  <Image
                    src={milestone?.image}
                    alt={`${milestone?.title} - ${milestone?.year}`}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
                  
                  {/* Year overlay */}
                  <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-brand">
                    <span className="text-lg font-bold text-gradient">{milestone?.year}</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -inset-2 bg-gradient-to-br from-accent/5 to-brand-gold/5 rounded-3xl -z-10"></div>
                {index % 2 === 0 && (
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-brand-gold/20 rounded-full blur-xl"></div>
                )}
                {index % 2 === 1 && (
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-brand-gold/20 to-accent/20 rounded-full blur-xl"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-surface to-muted rounded-3xl p-8 sm:p-12 shadow-brand-lg relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, var(--color-accent) 2px, transparent 2px),
                                 radial-gradient(circle at 80% 20%, var(--color-brand-gold) 1px, transparent 1px)`,
                backgroundSize: '40px 40px, 30px 30px'
              }}></div>
            </div>

            <div className="relative">
              <Icon name="Quote" size={48} className="text-accent/20 mx-auto mb-6" />
              <blockquote className="text-2xl sm:text-3xl font-bold text-primary leading-relaxed mb-6">
                "Design is not just what it looks like and feels like. 
                <span className="text-gradient"> Design is how it works</span> 
                — and more importantly, how it transforms."
              </blockquote>
              <cite className="text-text-secondary font-medium">
                — Don Migy, Founder of Alenton Perfect Touch
              </cite>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;