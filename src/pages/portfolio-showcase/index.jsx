import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FilterBar from './components/FilterBar';
import StatsSection from './components/StatsSection';
import ProjectGrid from './components/ProjectGrid';

const PortfolioShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [loading, setLoading] = useState(false);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "TechFlow Brand Identity",
      client: "TechFlow Solutions",
      category: "Brand Identity",
      description: "Complete brand transformation for a B2B SaaS platform, including logo design, visual identity system, and brand guidelines that increased brand recognition by 180%.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      tags: ["Logo Design", "Brand Guidelines", "Visual Identity", "B2B SaaS"],
      year: "2024",
      metrics: "180% brand recognition increase",
      featured: true
    },
    {
      id: 2,
      title: "EcoMarket E-commerce Platform",
      client: "EcoMarket Inc",
      category: "Digital Experiences",
      description: "User-centered e-commerce platform design focusing on sustainable products, featuring intuitive navigation and conversion-optimized checkout flow.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800&h=600&fit=crop",
      tags: ["UX/UI Design", "E-commerce", "Sustainability", "Mobile-First"],
      year: "2024",
      metrics: "150% conversion increase"
    },
    {
      id: 3,
      title: "FinanceForward Campaign",
      client: "FinanceForward",
      category: "Marketing Campaigns",
      description: "Multi-channel marketing campaign design for financial services, including digital ads, social media assets, and landing page optimization.",
      image: "https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=800&h=600&fit=crop",
      tags: ["Campaign Design", "Digital Marketing", "Financial Services", "Landing Pages"],
      year: "2024",
      metrics: "300% engagement boost"
    },
    {
      id: 4,
      title: "MindfulApp Product Design",
      client: "MindfulApp",
      category: "Product Design",
      description: "Mobile app design for mental wellness platform with focus on accessibility, user engagement, and therapeutic user experience patterns.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tags: ["Mobile App", "Mental Health", "Accessibility", "User Research"],
      year: "2024",
      metrics: "95% user satisfaction",
      featured: true
    },
    {
      id: 5,
      title: "GreenEnergy Visual Identity",
      client: "GreenEnergy Corp",
      category: "Brand Identity",
      description: "Sustainable energy company rebrand focusing on environmental responsibility and corporate trust, including comprehensive brand system.",
      image: "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?w=800&h=600&fit=crop",
      tags: ["Sustainability", "Corporate Identity", "Environmental", "Rebrand"],
      year: "2023",
      metrics: "220% trust score improvement"
    },
    {
      id: 6,
      title: "FoodieHub Website Redesign",
      client: "FoodieHub",
      category: "Digital Experiences",
      description: "Restaurant discovery platform redesign with improved search functionality, visual hierarchy, and mobile-responsive design.",
      image: "https://images.pixabay.com/photo/2017-01-26/02/06/platter-2009590_1280.jpg?w=800&h=600&fit=crop",
      tags: ["Website Redesign", "Food & Beverage", "Search UX", "Mobile Design"],
      year: "2023",
      metrics: "185% user engagement"
    },
    {
      id: 7,
      title: "StartupLaunch Campaign Suite",
      client: "StartupLaunch",
      category: "Marketing Campaigns",
      description: "Complete campaign package for startup accelerator including pitch deck templates, marketing materials, and digital presence.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      tags: ["Startup", "Pitch Decks", "Marketing Materials", "Digital Presence"],
      year: "2023",
      metrics: "400% funding success rate"
    },
    {
      id: 8,
      title: "HealthTech Dashboard",
      client: "HealthTech Solutions",
      category: "Product Design",
      description: "Medical professional dashboard design with complex data visualization, workflow optimization, and compliance considerations.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?w=800&h=600&fit=crop",
      tags: ["Healthcare", "Data Visualization", "Dashboard Design", "Compliance"],
      year: "2023",
      metrics: "60% workflow efficiency gain"
    },
    {
      id: 9,
      title: "RetailMax Brand Evolution",
      client: "RetailMax",
      category: "Brand Identity",
      description: "Retail chain brand evolution project including store design guidelines, packaging system, and omnichannel brand experience.",
      image: "https://images.pixabay.com/photo/2017/08/07/14/02/people-2604149_1280.jpg?w=800&h=600&fit=crop",
      tags: ["Retail", "Store Design", "Packaging", "Omnichannel"],
      year: "2023",
      metrics: "125% customer loyalty increase"
    },
    {
      id: 10,
      title: "EduPlatform Learning Experience",
      client: "EduPlatform",
      category: "Digital Experiences",
      description: "Educational platform UX/UI design focusing on student engagement, learning pathways, and instructor tools for online education.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      tags: ["Education", "Learning Management", "Student Experience", "Online Learning"],
      year: "2023",
      metrics: "210% course completion rate",
      featured: true
    }
  ];

  // Categories with counts
  const categories = [
    { id: 'all', name: 'All Projects', icon: 'Grid3X3', count: projects?.length },
    { id: 'Brand Identity', name: 'Brand Identity', icon: 'Palette', count: projects?.filter(p => p?.category === 'Brand Identity')?.length },
    { id: 'Digital Experiences', name: 'Digital Experiences', icon: 'Monitor', count: projects?.filter(p => p?.category === 'Digital Experiences')?.length },
    { id: 'Marketing Campaigns', name: 'Marketing Campaigns', icon: 'Megaphone', count: projects?.filter(p => p?.category === 'Marketing Campaigns')?.length },
    { id: 'Product Design', name: 'Product Design', icon: 'Smartphone', count: projects?.filter(p => p?.category === 'Product Design')?.length }
  ];

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered?.filter(project => project?.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery?.toLowerCase();
      filtered = filtered?.filter(project =>
        project?.title?.toLowerCase()?.includes(query) ||
        project?.client?.toLowerCase()?.includes(query) ||
        project?.description?.toLowerCase()?.includes(query) ||
        project?.tags?.some(tag => tag?.toLowerCase()?.includes(query))
      );
    }

    // Sort projects
    switch (sortBy) {
      case 'featured':
        filtered?.sort((a, b) => (b?.featured ? 1 : 0) - (a?.featured ? 1 : 0));
        break;
      case 'alphabetical':
        filtered?.sort((a, b) => a?.title?.localeCompare(b?.title));
        break;
      case 'client':
        filtered?.sort((a, b) => a?.client?.localeCompare(b?.client));
        break;
      case 'recent':
      default:
        filtered?.sort((a, b) => b?.year?.localeCompare(a?.year));
        break;
    }

    return filtered;
  }, [activeCategory, searchQuery, sortBy]);

  // Simulate loading when filters change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <HeroSection />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <StatsSection 
          totalProjects={projects?.length}
          categories={categories}
          activeCategory={activeCategory}
        />

        {/* Filter Bar */}
        <FilterBar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-text-secondary">
            <span className="font-medium text-text-primary">
              {filteredAndSortedProjects?.length}
            </span>
            {' '}
            {filteredAndSortedProjects?.length === 1 ? 'project' : 'projects'}
            {activeCategory !== 'all' && (
              <span> in {categories?.find(c => c?.id === activeCategory)?.name}</span>
            )}
            {searchQuery && (
              <span> matching "{searchQuery}"</span>
            )}
          </div>
        </div>

        {/* Project Grid */}
        <div id="portfolio-grid">
          <ProjectGrid
            projects={filteredAndSortedProjects}
            viewMode={viewMode}
            loading={loading}
          />
        </div>

        {/* Load More Section (for future implementation) */}
        {filteredAndSortedProjects?.length > 0 && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-16"
          >
            <div className="bg-surface rounded-2xl p-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-text-secondary mb-6 max-w-md mx-auto">
                Let's discuss how we can transform your vision into impactful design solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact-studio">
                  <button className="btn-cta px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2">
                    <span>Start Your Project</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </a>
                <a href="/services-workshop">
                  <button className="bg-transparent border border-border text-text-primary hover:bg-surface px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                    View Services
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default PortfolioShowcase;