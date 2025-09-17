import React from 'react'
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import logo from '/assets/images/logo.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-12 h-1 bg-gradient-to-r from-accent to-brand-gold rounded-full"></div>
                      <span className="text-sm font-medium text-text-secondary uppercase tracking-wider">
                        The Story Behind
                      </span>
                    </motion.div>
      
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight"
                    >
                      <span className="block text-gradient">About Me</span>
                    </motion.h1>
      
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="text-lg text-text-secondary leading-relaxed max-w-xl"
                    >
                      I am a professional real estate photo editor with 10 years of experience helping realtors, photographers, and property managers enhance their property images to attract more buyers and close deals faster. I specialize in transforming raw property photos into high-quality, market-ready visuals that grab attention and drive sales.

                    </motion.p>
                  </div>
      
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex flex-wrap gap-6"
                  >
                    <div className="flex items-center space-x-2 text-text-secondary">
                      <Icon name="MapPin" size={18} className="text-accent" />
                      <span className="text-sm font-medium">Cebu, Phil.</span>
                    </div>
                    <div className="flex items-center space-x-2 text-text-secondary">
                      <Icon name="Calendar" size={18} className="text-accent" />
                      <span className="text-sm font-medium">10+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-2 text-text-secondary">
                      <Icon name="Award" size={18} className="text-accent" />
                      <span className="text-sm font-medium">10k+ Projects Delivered</span>
                    </div>
                  </motion.div>
                </motion.div>
      
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-brand-lg">
                    <Image
                      src={logo}
                      alt="Rhia Jean - Graphic Designer"
                      className="w-full h-[600px] object-cover"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                    
                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-brand"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-text-primary">Available for projects</span>
                      </div>
                    </motion.div>
      
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-brand"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent to-brand-gold rounded-lg flex items-center justify-center">
                          <Icon name="Palette" size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-text-primary">Design Philosophy</p>
                          <p className="text-xs text-text-secondary">Form follows function</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
      
                  {/* Background decoration */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-brand-gold/10 rounded-3xl -z-10 blur-xl"></div>
                </motion.div>
              </div>
            </div>
    </section>
  )
}

export default About

