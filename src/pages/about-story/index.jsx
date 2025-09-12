import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import PhilosophySection from './components/PhilosophySection';
import ExpertiseSection from './components/ExpertiseSection';
import TestimonialsSection from './components/TestimonialsSection';
import PersonalSection from './components/PersonalSection';

const AboutStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Sarah Chen - The Visionary Craftsperson | Alenton</title>
        <meta 
          name="description" 
          content="Meet Sarah Chen, a design strategist who transforms businesses through strategic visual communication. 10+ years of experience, 50+ successful projects, and a passion for creating meaningful design solutions." 
        />
        <meta name="keywords" content="design strategist, brand designer, UX designer, visual identity, Sarah Chen, Alenton Perfect Touch" />
        <meta property="og:title" content="About Sarah Chen - The Visionary Craftsperson | Alenton Perfect Touch" />
        <meta property="og:description" content="Discover the story behind Alenton Perfect Touch and meet Sarah Chen, the design strategist who believes in the transformative power of strategic visual communication." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-story" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <StorySection />
          <PhilosophySection />
          <ExpertiseSection />
          <TestimonialsSection />
          <PersonalSection />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent via-brand-gold to-accent rounded-xl flex items-center justify-center shadow-brand">
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
                      className="opacity-80"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-60"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Alenton Perfect Touch</h3>
              </div>
              
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Transforming visions into visual reality through strategic design solutions 
                that drive measurable business results.
              </p>
              
              <div className="border-t border-white/20 pt-8">
                <p className="text-white/60 text-sm">
                  © {new Date()?.getFullYear()} Alenton Perfect Touch. All rights reserved. 
                  Crafted with passion by Sarah Chen.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutStory;