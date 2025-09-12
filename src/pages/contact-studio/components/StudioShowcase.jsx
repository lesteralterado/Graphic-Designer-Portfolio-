import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StudioShowcase = () => {
  const studioImages = [
    {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      alt: 'Modern design studio workspace with multiple monitors',
      title: 'Creative Workspace'
    },
    {
      src: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?w=800&h=600&fit=crop',
      alt: 'Design team collaboration session with sketches and prototypes',
      title: 'Collaboration Space'
    },
    {
      src: 'https://images.pixabay.com/photo/2016/11/19/15/32/laptop-1840018_1280.jpg?w=800&h=600&fit=crop',
      alt: 'Designer working on brand identity concepts',
      title: 'Design Process'
    }
  ];

  const studioFeatures = [
    {
      icon: 'Monitor',
      title: 'State-of-the-Art Equipment',
      description: 'Professional-grade monitors, tablets, and design tools for precision work'
    },
    {
      icon: 'Users',
      title: 'Collaborative Environment',
      description: 'Dedicated spaces for client meetings and team brainstorming sessions'
    },
    {
      icon: 'Lightbulb',
      title: 'Creative Inspiration',
      description: 'Curated design library and inspiration walls to fuel creativity'
    },
    {
      icon: 'Coffee',
      title: 'Comfortable Atmosphere',
      description: 'Relaxed setting with premium coffee and comfortable seating areas'
    }
  ];

  const certifications = [
    {
      name: 'Adobe Certified Expert',
      icon: 'Award',
      year: '2024'
    },
    {
      name: 'Google UX Design Certificate',
      icon: 'Award',
      year: '2023'
    },
    {
      name: 'Webflow Expert',
      icon: 'Award',
      year: '2024'
    },
    {
      name: 'Brand Strategy Certified',
      icon: 'Award',
      year: '2023'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Studio Gallery */}
      <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8">
        <h3 className="text-2xl font-bold text-primary mb-6">Inside Our Studio</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {studioImages?.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-surface">
                <Image
                  src={image?.src}
                  alt={image?.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold">{image?.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-text-secondary text-center">
          Our studio is designed to inspire creativity and foster collaboration. 
          Visit us for in-person consultations and project reviews.
        </p>
      </div>
      {/* Studio Features */}
      <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8">
        <h3 className="text-2xl font-bold text-primary mb-6">Studio Features</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studioFeatures?.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-surface rounded-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name={feature?.icon} size={20} className="text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">{feature?.title}</h4>
                <p className="text-sm text-text-secondary">{feature?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Location & Directions */}
      <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="MapPin" size={24} className="text-accent" />
          <h3 className="text-2xl font-bold text-primary">Visit Our Studio</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Address</h4>
                <p className="text-text-secondary">
                  123 Creative District<br />
                  Design Quarter, Suite 456<br />
                  New York, NY 10001
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Parking</h4>
                <p className="text-text-secondary">
                  Complimentary parking available in the building garage. 
                  Visitor passes provided at reception.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Public Transport</h4>
                <p className="text-text-secondary">
                  2 blocks from Union Square Station<br />
                  Multiple bus lines nearby
                </p>
              </div>
            </div>
          </div>
          
          <div className="h-64 bg-surface rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Alenton Perfect Touch Studio Location"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=40.7589,-73.9851&z=15&output=embed"
              className="border-0"
            />
          </div>
        </div>
      </div>
      {/* Certifications & Awards */}
      <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8">
        <h3 className="text-2xl font-bold text-primary mb-6">Certifications & Recognition</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications?.map((cert, index) => (
            <div key={index} className="text-center p-4 bg-surface rounded-lg">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={cert?.icon} size={20} className="text-brand-gold" />
              </div>
              <h4 className="font-semibold text-primary text-sm mb-1">{cert?.name}</h4>
              <p className="text-xs text-text-secondary">{cert?.year}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-brand-gold/5 border border-brand-gold/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Trophy" size={16} className="text-brand-gold mt-0.5" />
            <div>
              <p className="text-sm text-primary font-medium">Recent Achievement</p>
              <p className="text-sm text-text-secondary">
                Winner of the 2024 Design Excellence Award for Brand Identity Innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioShowcase;