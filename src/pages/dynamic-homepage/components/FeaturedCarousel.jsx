import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import droneShot6 from '/assets/images/Web_06_DroneShot.jpg';
import droneShot9 from '/assets/images/Web_09_DroneShot.jpg';
import a11exterior from '/assets/images/A11_Exterior.jpg';
import a10droneShot from '/assets/images/A10_DroneShot.jpg';
import a5 from '/assets/images/A5.jpg';
import a51 from '/assets/images/A5_1.jpg';

const FeaturedCarousel = () => {
  const imageSamples = [
    {
      id: 1,
      src: {droneShot6},
      alt: "TechFlow SaaS Platform",
      title: "TechFlow SaaS Platform"
    },
    {
      id: 2,
      src: {droneShot9},
      alt: "HealthCare Connect",
      title: "HealthCare Connect"
    },
    {
      id: 3,
      src: {a11exterior},
      alt: "FinanceFlow Mobile",
      title: "FinanceFlow Mobile"
    },
    {
      id: 4,
      src: {a10droneShot},
      alt: "E-commerce Platform",
      title: "E-commerce Platform"
    },
    {
      id: 5,
      src: {a5},
      alt: "Mobile Application",
      title: "Mobile Application"
    },
    {
      id: 6,
      src: {a51},
      alt: "Dashboard Design",
      title: "Dashboard Design"
    }
  ];

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
            Portfolio <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore our diverse collection of design projects and creative solutions
            that showcase our expertise across different industries.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageSamples.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-brand hover:shadow-brand-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    Click to view details
                  </p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="btn-accent px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;