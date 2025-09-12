import React, { useEffect, lazy, Suspense } from 'react';
import logo from '/assets/images/logo.png';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';

const Header = lazy(() => import('../../components/ui/Header'));
const HeroSection = lazy(() => import('./components/HeroSection'));
const About = lazy(() => import('./components/About'));
const PortfolioHighlights = lazy(() => import('./components/PortfolioHighlights'));
const PhilosophySection = lazy(() => import('./components/PhilosophySection'));
const PersonalSection = lazy(() => import('./components/PersonalSection'));

const AboutStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Icon name="Loader2" size={48} className="animate-spin text-primary" />
      </div>
    }>
      <Helmet>
        <title>Alenton - The Visionary Craftsperson </title>
        <meta
          name="description"
          content="Meet Don Migy, a design strategist who transforms businesses through strategic visual communication. 10+ years of experience, 50+ successful projects, and a passion for creating meaningful design solutions."
        />
        <meta name="keywords" content="design strategist, brand designer, UX designer, visual identity, Don Migy, Alenton Perfect Touch" />
        <meta property="og:title" content="About Don Migy - The Visionary Craftsperson | Alenton Perfect Touch" />
        <meta property="og:description" content="Discover the story behind Alenton Perfect Touch and meet Don Migy, the design strategist who believes in the transformative power of strategic visual communication." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="#about" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16 lg:pt-20">

          <HeroSection />
          <About />
          <section id='portfolio' className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/10">
            <PortfolioHighlights />
          </section>
          {/* <StorySection /> */}
          <PhilosophySection />
          {/* <ExpertiseSection /> */}
          {/* <TestimonialsSection /> */}
          <PersonalSection />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                {/* <div className="w-10 h-10 bg-gradient-to-br from-accent to-brand-gold rounded-xl flex items-center justify-center">
                  <Icon name="Layers" size={24} className="text-white" />
                </div> */}
                <img src={logo} alt="Logo" className="w-10 h-10 rounded-xl shadow-brand" />
                <div>
                  <h3 className="text-xl font-bold">Alenton Perfect Touch</h3>
                  <p className="text-white/70 text-sm">Strategic Design Solutions</p>
                </div>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                Transforming visions into visual reality through strategic design solutions
                that drive measurable business outcomes.
              </p>
              <div className="flex items-center mb-4 space-x-4">
                <Icon name="Mail" size={20} className="text-white/60" />
                <span className="text-white/80">brhiajean81@email.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Phone" size={20} className="text-white/60" />
                <span className="text-white/80">+63 998-190-6895</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="#" className="hover:text-white transition-colors">Brand Identity</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Digital Experience</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Marketing Campaigns</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Design Systems</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/60 text-sm">
              © {new Date()?.getFullYear()} Alenton Perfect Touch. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-white/60 hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </Link>
              <Link to="#" className="text-white/60 hover:text-white transition-colors">
                <Icon name="Linkedin" size={20} />
              </Link>
              <Link to="#" className="text-white/60 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </Suspense>
  );
};

export default AboutStory;