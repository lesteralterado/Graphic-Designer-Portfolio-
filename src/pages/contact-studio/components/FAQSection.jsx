import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      title: 'Project Process',
      faqs: [
        {
          question: 'What is your typical project timeline?',
          answer: `Project timelines vary based on scope and complexity:\n\n• Logo & Brand Identity: 2-4 weeks\n• Website Design: 4-8 weeks\n• Complete Brand System: 6-12 weeks\n• Digital Marketing Materials: 1-3 weeks\n\nWe provide detailed timelines during our initial consultation and keep you updated throughout the process.`
        },
        {
          question: 'How do you handle project revisions?',
          answer: `We include revision rounds in all our packages:\n\n• Initial concepts: 3 rounds included\n• Design refinements: 2 rounds included\n• Final adjustments: 1 round included\n\nAdditional revisions are available at our hourly rate. We encourage detailed feedback to minimize revision cycles.`
        },
        {
          question: 'What information do you need to get started?',
          answer: `To begin your project, we'll need:\n\n• Project brief and objectives\n• Target audience information\n• Brand preferences and inspiration\n• Content and assets (if available)\n• Budget and timeline requirements\n\nWe'll guide you through gathering this information during our consultation.`
        }
      ]
    },
    {
      title: 'Pricing & Payment',
      faqs: [
        {
          question: 'How do you structure your pricing?',
          answer: `We offer both project-based and hourly pricing:\n\n• Project-based: Fixed price for defined scope\n• Hourly rate: $150-250/hour based on complexity\n• Retainer options: Available for ongoing work\n\nAll pricing includes initial consultation, concepts, revisions, and final files.`
        },
        {
          question: 'What payment methods do you accept?',
          answer: `We accept multiple payment methods:\n\n• Bank transfer (preferred)\n• Credit/debit cards\n• PayPal\n• Check (for established clients)\n\nPayment is typically split: 50% upfront, 50% on completion. Custom payment plans available for larger projects.`
        },
        {
          question: 'Do you offer payment plans?',
          answer: `Yes, we offer flexible payment options:\n\n• Standard: 50% upfront, 50% on completion\n• Extended: 3-4 installments for projects over $10k\n• Retainer: Monthly payments for ongoing work\n\nWe'll work with you to find a payment structure that fits your budget.`
        }
      ]
    },
    {
      title: 'Working Together',
      faqs: [
        {
          question: 'How do you communicate during projects?',
          answer: `We maintain clear communication throughout:\n\n• Weekly progress updates via email\n• Scheduled check-in calls\n• Shared project dashboard\n• Slack/Teams for quick questions\n• In-person meetings when needed\n\nYou'll always know the current status and next steps.`
        },
        {
          question: 'Can I visit your studio?',
          answer: `Absolutely! We welcome studio visits:\n\n• Schedule appointments in advance\n• Free parking available\n• Coffee and comfortable meeting spaces\n• Portfolio and process demonstrations\n• Team introductions\n\nMany clients prefer in-person collaboration for major projects.`
        },
        {
          question: 'Do you work with international clients?',
          answer: `Yes, we work with clients worldwide:\n\n• Video conferencing for meetings\n• Flexible scheduling across time zones\n• Digital file delivery\n• International payment processing\n• Cultural considerations for global brands\n\nWe've successfully completed projects for clients in 15+ countries.`
        }
      ]
    },
    {
      title: 'Deliverables & Rights',
      faqs: [
        {
          question: 'What files will I receive?',answer: `You'll receive comprehensive file packages:\n\n• Vector files (AI, EPS, SVG)\n• High-resolution images (PNG, JPG)\n• Print-ready files (PDF)\n• Web-optimized formats\n• Brand guidelines document\n• Source files when applicable\n\nAll files are organized and clearly labeled for easy use.`
        },
        {
          question: 'Who owns the rights to the final design?',
          answer: `Upon final payment, you own full rights to:\n\n• Final approved designs\n• All deliverable files\n• Commercial usage rights\n• Modification rights\n\nWe retain rights to showcase work in our portfolio and case studies unless otherwise agreed.`
        },
        {
          question: 'Do you provide ongoing support?',
          answer: `Yes, we offer post-project support:\n\n• 30 days of minor adjustments included\n• Technical support for file usage\n• Brand implementation guidance\n• Ongoing design services available\n• Annual brand reviews\n\nWe're here to ensure your design investment continues to deliver results.`
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-primary mb-2">Frequently Asked Questions</h3>
        <p className="text-text-secondary">
          Find answers to common questions about our process, pricing, and collaboration.
        </p>
      </div>
      <div className="space-y-8">
        {faqCategories?.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h4 className="text-lg font-semibold text-primary mb-4 flex items-center space-x-2">
              <Icon name="HelpCircle" size={20} className="text-accent" />
              <span>{category?.title}</span>
            </h4>
            
            <div className="space-y-3">
              {category?.faqs?.map((faq, faqIndex) => {
                const isOpen = openFAQ === `${categoryIndex}-${faqIndex}`;
                
                return (
                  <div key={faqIndex} className="border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                      className="w-full px-6 py-4 text-left bg-surface hover:bg-accent/5 transition-colors duration-200 flex items-center justify-between"
                    >
                      <span className="font-medium text-primary pr-4">{faq?.question}</span>
                      <Icon 
                        name={isOpen ? "ChevronUp" : "ChevronDown"} 
                        size={20} 
                        className="text-text-secondary flex-shrink-0 transition-transform duration-200" 
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 py-4 bg-background border-t border-border">
                        <div className="text-text-secondary whitespace-pre-line">
                          {faq?.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {/* Still Have Questions */}
      <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-lg">
        <div className="text-center">
          <Icon name="MessageCircle" size={32} className="text-accent mx-auto mb-3" />
          <h5 className="text-lg font-semibold text-primary mb-2">Still Have Questions?</h5>
          <p className="text-text-secondary mb-4">
            Can't find what you're looking for? We're here to help with any specific questions about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:hello@designvaultpro.com"
              className="inline-flex items-center justify-center px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors duration-200"
            >
              <Icon name="Mail" size={16} className="mr-2" />
              Email Us
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent/5 transition-colors duration-200"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;