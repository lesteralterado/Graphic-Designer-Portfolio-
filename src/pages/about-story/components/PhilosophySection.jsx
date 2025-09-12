import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const principles = [
    {
      icon: "Target",
      title: "Purpose-Driven Design",
      description: "Every design decision serves a strategic purpose. I don't create art for art's sake—I craft solutions that drive measurable business outcomes and create meaningful user experiences.",
      color: "accent"
    },
    {
      icon: "Users",
      title: "Human-Centered Approach",
      description: "Great design starts with deep empathy. I spend time understanding your users, their pain points, and their aspirations to create designs that truly resonate and convert.",
      color: "brand-gold"
    },
    {
      icon: "Zap",
      title: "Innovation Through Simplicity",
      description: "Complexity is easy; simplicity is hard. I believe in stripping away the unnecessary to reveal the essential, creating designs that are both beautiful and brilliantly functional.",
      color: "success"
    },
    {
      icon: "TrendingUp",
      title: "Data-Informed Creativity",
      description: "Intuition guides the vision, but data validates the execution. I combine creative instincts with analytical insights to ensure designs perform as beautifully as they look.",
      color: "warning"
    }
  ];

  const values = [
    {
      title: "Authenticity",
      description: "Your brand's true voice deserves to be heard, not hidden behind generic templates."
    },
    {
      title: "Excellence",
      description: "Good enough isn't good enough. Every pixel, every interaction, every moment matters."
    },
    {
      title: "Collaboration",
      description: "The best solutions emerge from genuine partnership between designer and client."
    },
    {
      title: "Impact",
      description: "Design should move the needle—whether that's conversions, engagement, or brand perception."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-surface via-muted to-surface">
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
              Design Philosophy
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-brand-gold to-accent rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            The Principles That
            <span className="block text-gradient">Guide My Work</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Design philosophy isn't just theory—it's the foundation that ensures every project 
            delivers both aesthetic excellence and strategic value. These principles have guided 
            me through 50+ successful projects across diverse industries.
          </p>
        </motion.div>

        {/* Design Principles */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {principles?.map((principle, index) => (
            <motion.div
              key={principle?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 shadow-brand hover:shadow-brand-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-14 h-14 bg-gradient-to-br from-${principle?.color} to-${principle?.color}/80 rounded-xl flex items-center justify-center shadow-brand group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={principle?.icon} size={24} className="text-white" />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold text-primary-foreground group-hover:text-gradient transition-colors duration-300">
                    {principle?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {principle?.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-background rounded-3xl p-8 sm:p-12 shadow-brand-lg relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-brand-gold/5 to-transparent rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
                Core Values That Drive Excellence
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                These values aren't just words on a wall—they're the compass that guides 
                every decision, every interaction, and every creative solution.
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
                  className="text-center space-y-3 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-brand-gold rounded-2xl flex items-center justify-center mx-auto shadow-brand group-hover:shadow-brand-lg transition-all duration-300">
                    <span className="text-2xl font-bold text-white">
                      {value?.title?.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-primary-foreground group-hover:text-gradient transition-colors duration-300">
                    {value?.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {value?.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process Philosophy */}
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
              <Icon name="Lightbulb" size={48} className="text-brand-gold mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                "Design is a conversation between
                <span className="text-brand-gold"> problem and solution</span>"
              </h3>
              <p className="text-lg opacity-90 leading-relaxed mb-8">
                My process isn't linear—it's iterative, collaborative, and always focused on 
                uncovering the real challenge behind the brief. Because the best solutions 
                often come from asking better questions, not just providing prettier answers.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span>Discovery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span>Strategy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span>Execution</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span>Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;