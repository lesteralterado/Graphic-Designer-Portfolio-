import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ContactForm from './components/ContactForm';
import AvailabilityCalendar from './components/AvailabilityCalendar';
import ContactInfo from './components/ContactInfo';
import StudioShowcase from './components/StudioShowcase';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';

const ContactStudio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 lg:pt-28 pb-16 bg-gradient-to-br from-background via-surface to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="MapPin" size={16} />
              <span>New York Design Studio</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
              Let's Create Something
              <span className="text-gradient block">Extraordinary Together</span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Ready to transform your vision into compelling visual experiences? 
              Our collaborative studio approach ensures your project receives the strategic thinking 
              and creative excellence it deserves.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 bg-cta text-cta-foreground rounded-lg hover:bg-cta/90 transition-colors duration-300 font-semibold">
                <Icon name="Send" size={20} className="mr-2" />
                Start Your Project
              </a>
              <a href="#calendar" className="inline-flex items-center justify-center px-8 py-4 border border-accent text-accent rounded-lg hover:bg-accent/5 transition-colors duration-300 font-semibold">
                <Icon name="Calendar" size={20} className="mr-2" />
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Current Status Banner */}
      <section className="py-4 bg-accent/5 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-center">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Currently Available</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <span className="text-sm text-text-secondary">Accepting new projects for Q2 2025</span>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <span className="text-sm text-text-secondary">Response within 24 hours</span>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Forms */}
            <div className="space-y-12">
              <div id="contact-form">
                <ContactForm />
              </div>
              
              <div id="calendar">
                <AvailabilityCalendar />
              </div>
            </div>
            
            {/* Right Column - Information */}
            <div className="space-y-12">
              <ContactInfo />
              <TestimonialsSection />
            </div>
          </div>
        </div>
      </section>
      {/* Studio Showcase Section */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Welcome to Our
              <span className="text-gradient block">Creative Studio</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Step inside our design sanctuary where ideas come to life. 
              Our studio environment is crafted to inspire creativity and foster meaningful collaboration.
            </p>
          </div>
          
          <StudioShowcase />
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Questions &
              <span className="text-gradient">Answers</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Everything you need to know about working with our studio, 
              from initial consultation to final delivery.
            </p>
          </div>
          
          <FAQSection />
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Icon name="Sparkles" size={48} className="mx-auto mb-6 text-brand-gold" />
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Begin Your
            <span className="text-brand-gold block">Design Journey?</span>
          </h2>
          
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Every great project starts with a conversation. Let's discuss your vision, 
            explore possibilities, and create something that truly represents your brand's potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact-form" 
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-primary rounded-lg hover:bg-brand-gold/90 transition-colors duration-300 font-semibold"
            >
              <Icon name="ArrowRight" size={20} className="mr-2" />
              Get Started Today
            </a>
            <a 
              href="tel:+15551234567" 
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors duration-300 font-semibold"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Call Now
            </a>
          </div>
          
          <p className="text-sm opacity-75 mt-6">
            Free consultation • No obligation • Response within 24 hours
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-brand-gold rounded-xl flex items-center justify-center">
                  <Icon name="Layers" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Alenton Perfect Touch</h3>
                  <p className="text-sm opacity-75">Strategic Design Solutions</p>
                </div>
              </div>
              <p className="text-sm opacity-75 mb-4 max-w-md">
                Transforming visions into compelling visual experiences through strategic design thinking and creative excellence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                  <Icon name="Instagram" size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                  <Icon name="Linkedin" size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                  <Icon name="Twitter" size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                  <Icon name="Dribbble" size={16} />
                </a>
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm opacity-75">
                <p>brhiajean81@email.com</p>
                <p>+63 998-190-6895</p>
                <p>123 Creative District<br />New York, NY 10001</p>
              </div>
            </div>
            
            {/* Hours */}
            <div>
              <h4 className="font-semibold mb-4">Studio Hours</h4>
              <div className="space-y-1 text-sm opacity-75">
                <p>Mon-Fri: 9AM-6PM EST</p>
                <p>Saturday: 10AM-2PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; {new Date()?.getFullYear()} Alenton Perfect Touch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactStudio;