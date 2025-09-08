import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ContactStudio from './pages/contact-studio';
import AboutStory from './pages/about-story';
import ServicesWorkshop from './pages/services-workshop';
import DynamicHomepage from './pages/dynamic-homepage';
import PortfolioShowcase from './pages/portfolio-showcase';
import ProjectCaseStudy from './pages/project-case-study';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutStory />} />
        <Route path="/contact-studio" element={<ContactStudio />} />
        <Route path="/about-story" element={<AboutStory />} />
        <Route path="/services-workshop" element={<ServicesWorkshop />} />
        <Route path="/dynamic-homepage" element={<DynamicHomepage />} />
        <Route path="/portfolio-showcase" element={<PortfolioShowcase />} />
        <Route path="/project-case-study" element={<ProjectCaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
