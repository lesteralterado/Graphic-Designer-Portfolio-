import React, { useEffect, lazy, Suspense, useState } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    '/assets/images/Gallery/DJI_20241004184746_0443_D.png',
    '/assets/images/Gallery/IMG_9924.png',
    '/assets/images/Gallery/Web_01.jpg',
    '/assets/images/Gallery/Web_001.jpg',
    '/assets/images/Gallery/Web_1g6.jpg',
    '/assets/images/Gallery/Web_002.jpg',
    '/assets/images/Gallery/Web_2j3.jpg',
    '/assets/images/Gallery/Web_04.jpg',
    '/assets/images/Gallery/Web_06.jpg',
    '/assets/images/Gallery/Web_07.jpg',
    '/assets/images/Gallery/Web_08.jpg',
    '/assets/images/Gallery/Web_11.jpg',
    '/assets/images/Gallery/Web_0011.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(galleryImages.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(galleryImages.length / 3)) % Math.ceil(galleryImages.length / 3));
  };

  const openModal = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setModalImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextModalImage = () => {
    const nextIndex = (modalImageIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setModalImageIndex(nextIndex);
  };

  const prevModalImage = () => {
    const prevIndex = (modalImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setModalImageIndex(prevIndex);
  };

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
          content="Meet Rhia Jean, a design strategist who transforms businesses through strategic visual communication. 10+ years of experience, 50+ successful projects, and a passion for creating meaningful design solutions."
        />
        <meta name="keywords" content="design strategist, brand designer, UX designer, visual identity, Rhia Jean, Alenton Perfect Touch" />
        <meta property="og:title" content="About Rhia Jean - The Visionary Craftsperson | Alenton Perfect Touch" />
        <meta property="og:description" content="Discover the story behind Alenton Perfect Touch and meet Rhia Jean, the design strategist who believes in the transformative power of strategic visual communication." />
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

          {/* Gallery Section */}
          <section id="gallery" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
                  <span className="block text-gradient">Sample Gallery</span>
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  A showcase of our creative work and design transformations
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  '/assets/images/Gallery/DJI_20241004184746_0443_D.png',
                  '/assets/images/Gallery/IMG_9924.png',
                  '/assets/images/Gallery/Web_01.jpg',
                  '/assets/images/Gallery/Web_001.jpg',
                  '/assets/images/Gallery/Web_1g6.jpg',
                  '/assets/images/Gallery/Web_002.jpg',
                  '/assets/images/Gallery/Web_2j3.jpg',
                  '/assets/images/Gallery/Web_04.jpg',
                  '/assets/images/Gallery/Web_06.jpg',
                  '/assets/images/Gallery/Web_07.jpg',
                  '/assets/images/Gallery/Web_08.jpg',
                  '/assets/images/Gallery/Web_11.jpg',
                  '/assets/images/Gallery/Web_0011.jpg',
                ].map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 cursor-pointer"
                    onClick={() => openModal(image, index)}
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <Icon name="ZoomIn" size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Image Modal */}
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={closeModal}>
              <div className="relative max-w-4xl max-h-screen p-4">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
                  aria-label="Close modal"
                >
                  <Icon name="X" size={32} />
                </button>

                {/* Main Image */}
                <img
                  src={selectedImage}
                  alt="Gallery image"
                  className="max-w-full max-h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Navigation Buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevModalImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
                  aria-label="Previous image"
                >
                  <Icon name="ChevronLeft" size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextModalImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
                  aria-label="Next image"
                >
                  <Icon name="ChevronRight" size={24} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                  {modalImageIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <section id='footer'>

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
        </section>
      </div>
    </Suspense>
  );
};

export default AboutStory;
