import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import CaseStudyHero from './components/CaseStudyHero';
import ChallengeSection from './components/ChallengeSection';
import ProcessSection from './components/ProcessSection';
import SolutionSection from './components/SolutionSection';
import ResultsSection from './components/ResultsSection';
import RelatedProjects from './components/RelatedProjects';
import ProjectCTA from './components/ProjectCTA';

const ProjectCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock project data
  const projectData = {
    title: "E-Commerce Platform Redesign",
    subtitle: "Transforming user experience to drive 340% increase in conversion rates",
    category: "UX/UI Design",
    client: "TechFlow Commerce",
    timeline: "12 weeks",
    role: "Lead UX Designer",
    teamSize: "5 members",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
    keyMetrics: [
      { value: "340%", label: "Conversion Increase" },
      { value: "65%", label: "Cart Abandonment Reduction" },
      { value: "4.8/5", label: "User Satisfaction" }
    ]
  };

  const challengeData = {
    overview: `TechFlow Commerce was struggling with a 78% cart abandonment rate and declining user engagement. Their existing platform suffered from poor navigation, confusing checkout process, and mobile responsiveness issues that were directly impacting revenue growth.`,
    points: [
      {
        title: "High Cart Abandonment Rate",
        description: "78% of users were abandoning their carts before completing purchases, primarily due to a complex 7-step checkout process and unexpected shipping costs."
      },
      {
        title: "Poor Mobile Experience",
        description: "Mobile users represented 65% of traffic but only 23% of conversions, indicating severe usability issues on smaller screens."
      },
      {
        title: "Navigation Complexity",
        description: "Users were taking an average of 4.2 minutes to find products, with 45% leaving the site without making a purchase."
      }
    ],
    businessImpact: "The poor user experience was costing TechFlow Commerce approximately $2.3M annually in lost revenue, with customer acquisition costs increasing by 180% year-over-year.",
    problems: [
      { issue: "Complex checkout process", impact: "78% abandonment" },
      { issue: "Poor mobile optimization", impact: "42% bounce rate" },
      { issue: "Slow page load times", impact: "3.8s average" },
      { issue: "Confusing navigation", impact: "4.2min to find products" }
    ],
    constraints: [
      { value: "12", label: "Weeks Timeline" },
      { value: "$150K", label: "Budget Limit" },
      { value: "5", label: "Team Members" },
      { value: "3", label: "Stakeholder Groups" }
    ]
  };

  const processData = {
    steps: [
      {
        title: "Discovery & Research",
        description: "Conducted comprehensive user research including interviews, surveys, and analytics analysis to understand pain points and user behavior patterns.",
        duration: "2 weeks",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        activities: [
          "User interviews with 25 customers",
          "Competitive analysis of 8 platforms",
          "Analytics deep-dive and heatmap analysis",
          "Stakeholder workshops and requirements gathering"
        ],
        deliverables: ["User Personas", "Journey Maps", "Research Report", "Requirements Document"]
      },
      {
        title: "Information Architecture",
        description: "Restructured the site architecture and navigation based on user mental models and task flows to improve findability and reduce cognitive load.",
        duration: "1.5 weeks",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        activities: [
          "Card sorting sessions with users",
          "Site map restructuring",
          "Navigation taxonomy development",
          "User flow optimization"
        ],
        deliverables: ["Site Map", "User Flows", "Navigation Structure", "Content Strategy"]
      },
      {
        title: "Wireframing & Prototyping",
        description: "Created low and high-fidelity wireframes followed by interactive prototypes to test and validate design concepts before visual design.",
        duration: "3 weeks",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        activities: [
          "Low-fidelity wireframe creation",
          "Interactive prototype development",
          "Usability testing with 15 users",
          "Iteration based on feedback"
        ],
        deliverables: ["Wireframes", "Interactive Prototypes", "Usability Test Results", "Design Iterations"]
      },
      {
        title: "Visual Design",
        description: "Developed a cohesive visual design system that aligned with brand guidelines while prioritizing usability and conversion optimization.",
        duration: "3 weeks",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        activities: [
          "Design system creation",
          "High-fidelity mockup development",
          "Responsive design adaptation",
          "Accessibility compliance review"
        ],
        deliverables: ["Design System", "High-fidelity Mockups", "Style Guide", "Asset Library"]
      },
      {
        title: "Testing & Optimization",
        description: "Conducted extensive usability testing and A/B testing to validate design decisions and optimize for conversion before final implementation.",
        duration: "2.5 weeks",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        activities: [
          "A/B testing of key pages",
          "Conversion rate optimization",
          "Cross-device testing",
          "Performance optimization"
        ],
        deliverables: ["Test Results", "Optimization Report", "Final Designs", "Implementation Guide"]
      }
    ],
    insights: [
      {
        icon: "Users",
        title: "User-Centered Approach",
        description: "Every design decision was validated through user testing, ensuring solutions addressed real user needs rather than assumptions."
      },
      {
        icon: "Repeat",
        title: "Iterative Process",
        description: "Continuous testing and refinement throughout the process led to a 23% improvement in usability scores from initial concepts."
      },
      {
        icon: "BarChart",
        title: "Data-Driven Decisions",
        description: "Analytics and user behavior data informed design choices, resulting in measurable improvements in key performance indicators."
      }
    ]
  };

  const solutionData = {
    overview: "The solution focused on simplifying the user journey, optimizing for mobile-first experience, and implementing a streamlined checkout process that reduced friction while maintaining security and trust.",
    strategies: [
      {
        icon: "Smartphone",
        title: "Mobile-First Design",
        description: "Prioritized mobile experience with touch-optimized interfaces and progressive enhancement for larger screens."
      },
      {
        icon: "Zap",
        title: "Simplified Checkout",
        description: "Reduced checkout from 7 steps to 3 with guest checkout option and multiple payment methods integration."
      },
      {
        icon: "Search",
        title: "Enhanced Discovery",
        description: "Implemented intelligent search, filtering, and recommendation systems to improve product findability."
      }
    ],
    features: [
      {
        icon: "ShoppingCart",
        title: "Streamlined Checkout",
        description: "Simplified 3-step checkout process with progress indicators, guest checkout option, and multiple payment methods including digital wallets.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
      },
      {
        icon: "Search",
        title: "Smart Product Discovery",
        description: "AI-powered search with auto-suggestions, advanced filtering, and personalized recommendations based on browsing history.",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
      },
      {
        icon: "Smartphone",
        title: "Mobile-Optimized Interface",
        description: "Touch-friendly design with swipe gestures, thumb-zone optimization, and adaptive layouts for all screen sizes.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
      },
      {
        icon: "Heart",
        title: "Personalized Experience",
        description: "Dynamic content personalization, wishlist functionality, and tailored product recommendations for returning users.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
      }
    ],
    comparison: {
      before: {
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        issues: [
          "7-step checkout process",
          "Poor mobile responsiveness",
          "Confusing navigation structure",
          "Slow loading times (3.8s)",
          "High cart abandonment (78%)"
        ]
      },
      after: {
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        improvements: [
          "Streamlined 3-step checkout",
          "Mobile-first responsive design",
          "Intuitive navigation with search",
          "Fast loading times (1.2s)",
          "Reduced abandonment (23%)"
        ]
      }
    }
  };

  const resultsData = {
    overview: "The redesigned platform delivered exceptional results across all key performance indicators, with significant improvements in user engagement, conversion rates, and overall business metrics.",
    metrics: [
      {
        icon: "TrendingUp",
        value: "340%",
        label: "Conversion Rate Increase",
        improvement: "From 2.3% to 10.1%"
      },
      {
        icon: "ShoppingCart",
        value: "65%",
        label: "Cart Abandonment Reduction",
        improvement: "From 78% to 23%"
      },
      {
        icon: "Clock",
        value: "68%",
        label: "Faster Task Completion",
        improvement: "From 4.2min to 1.3min"
      },
      {
        icon: "Smartphone",
        value: "180%",
        label: "Mobile Conversion Boost",
        improvement: "Mobile now 45% of sales"
      }
    ],
    impactAreas: [
      {
        icon: "DollarSign",
        title: "Revenue Growth",
        description: "Significant increase in monthly recurring revenue and average order value through improved user experience.",
        achievements: [
          "340% increase in conversion rates",
          "28% higher average order value",
          "$2.3M additional annual revenue"
        ]
      },
      {
        icon: "Users",
        title: "User Satisfaction",
        description: "Dramatic improvement in user satisfaction scores and engagement metrics across all touchpoints.",
        achievements: [
          "4.8/5 user satisfaction rating",
          "68% faster task completion",
          "45% increase in return customers"
        ]
      },
      {
        icon: "Zap",
        title: "Performance Optimization",
        description: "Technical improvements that enhanced site performance and reduced operational costs.",
        achievements: [
          "68% faster page load times",
          "35% reduction in bounce rate",
          "50% decrease in support tickets"
        ]
      }
    ],
    testimonial: {
      quote: "The transformation has been incredible. Our conversion rates have more than tripled, and customer feedback has been overwhelmingly positive. The team's strategic approach and attention to detail made all the difference.",
      author: "Sarah Chen",
      position: "VP of Digital Experience",
      company: "TechFlow Commerce"
    },
    timeline: [
      {
        period: "Week 1-2",
        title: "Initial Impact",
        description: "Immediate 15% reduction in bounce rate after launching the new navigation structure."
      },
      {
        period: "Month 1",
        title: "Conversion Boost",
        description: "Conversion rates increased by 120% with the simplified checkout process implementation."
      },
      {
        period: "Month 2",
        title: "Mobile Success",
        description: "Mobile conversions improved by 180%, making mobile the primary revenue channel."
      },
      {
        period: "Month 3",
        title: "Full Optimization",
        description: "Achieved 340% overall conversion improvement with all features fully optimized."
      }
    ]
  };

  const relatedProjectsData = [
    {
      title: "SaaS Dashboard Redesign",
      client: "DataFlow Analytics",
      category: "Dashboard Design",
      description: "Complete redesign of a complex analytics dashboard focusing on data visualization and user workflow optimization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      keyMetrics: [
        { value: "45%", label: "Task Efficiency" },
        { value: "4.7/5", label: "User Rating" }
      ],
      tags: ["UX Research", "Data Viz", "B2B"]
    },
    {
      title: "Mobile Banking App",
      client: "SecureBank Digital",
      category: "Mobile App",
      description: "Design of a secure, user-friendly mobile banking application with focus on accessibility and trust.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      keyMetrics: [
        { value: "89%", label: "Adoption Rate" },
        { value: "4.9/5", label: "App Store Rating" }
      ],
      tags: ["Mobile Design", "Fintech", "Security"]
    },
    {
      title: "Healthcare Platform",
      client: "MedConnect Pro",
      category: "Healthcare",
      description: "Comprehensive telemedicine platform design connecting patients with healthcare providers seamlessly.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      keyMetrics: [
        { value: "67%", label: "Consultation Increase" },
        { value: "92%", label: "Patient Satisfaction" }
      ],
      tags: ["Healthcare", "Telemedicine", "Accessibility"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <CaseStudyHero project={projectData} />
        <ChallengeSection challenge={challengeData} />
        <ProcessSection process={processData} />
        <SolutionSection solution={solutionData} />
        <ResultsSection results={resultsData} />
        <RelatedProjects projects={relatedProjectsData} />
        <ProjectCTA />
      </main>
    </div>
  );
};

export default ProjectCaseStudy;