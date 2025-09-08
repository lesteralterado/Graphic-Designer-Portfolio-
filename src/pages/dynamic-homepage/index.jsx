import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProjectTeasers from './components/ProjectTeasers';
import FeaturedCarousel from './components/FeaturedCarousel';
import IntroSection from './components/IntroSection';
import TestimonialCards from './components/TestimonialCards';
import CTASection from './components/CTASection';

const DynamicHomepage = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Set page title
    document.title = 'DesignVault Pro - Strategic Design Solutions That Drive Results';
    
    // Meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Transform your digital presence with strategic design solutions. Proven track record of driving 340% conversion increases and measurable business growth.');
    }

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background"
    >
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        {/* Hero Section with Parallax */}
        <HeroSection />

        {/* Project Teasers Grid */}
        <ProjectTeasers />

        {/* Featured Projects Carousel */}
        <FeaturedCarousel />

        {/* Introduction & About */}
        <IntroSection />

        {/* Social Proof Testimonials */}
        <TestimonialCards />

        {/* Call to Action */}
        <CTASection />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent via-brand-gold to-accent rounded-xl flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">DesignVault Pro</h3>
                  <p className="text-gray-400 text-sm">Strategic Design Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Transforming visions into visual reality through cutting-edge design 
                that drives measurable business results.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  <span className="sr-only">Dribbble</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 7.375c.77 1.423 1.216 3.06 1.216 4.625 0 .414-.025.823-.075 1.224a15.994 15.994 0 00-4.649-.543c-.081-.198-.17-.395-.264-.591L12 7.375c2.568-.543 5.203-.543 9.568 0zM12 2.25c1.995 0 3.823.69 5.273 1.846-1.177.75-2.91 1.846-4.398 2.904L12 2.25zm-7.273 1.846C6.177 2.94 8.005 2.25 10 2.25l-.875 4.75c-1.488-1.058-3.221-2.154-4.398-2.904zM2.432 7.375c4.365-.543 7-.543 9.568 0l-5.796 4.625c-.094.196-.183.393-.264.591a15.994 15.994 0 00-4.649.543c-.05-.401-.075-.81-.075-1.224 0-1.565.446-3.202 1.216-4.625z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/portfolio-showcase" className="text-gray-400 hover:text-white transition-colors duration-300">Portfolio</a></li>
                <li><a href="/services-workshop" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
                <li><a href="/about-story" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="/contact-studio" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@designvaultpro.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date()?.getFullYear()} DesignVault Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default DynamicHomepage;