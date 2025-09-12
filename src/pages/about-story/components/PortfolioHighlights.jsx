import React from 'react'
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PortfolioHighlights = () => {
  return (
    <section id='portfolio' className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/10">
        <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight"
        >
          <span className="block text-gradient">Portfolio Highlights</span> 
        </motion.h1>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          See the dramatic difference professional editing makes with these before and after examples
        </p>
      </div>

      <div class="space-y-16">
        {/* <!-- Portfolio Item 1 --> */}
        <div class="flex flex-col lg:flex-row gap-8 items-center" data-aos="fade-up">
          <div class="lg:w-1/2">
            <h3 class="text-2xl font-bold mb-4">Living Room Enhancement</h3>
            <p class="text-gray-300 mb-6">
              This living room transformation demonstrates color correction, exposure balancing, and removing distracting elements to create an inviting space that highlights the room's best features.
            </p>
            <ul class="text-gray-300 mb-6 space-y-2">
              <li class="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Corrected white balance and color temperature</span>
              </li>
              <li class="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Balanced window exposure with interior lighting</span>
              </li>
              <li class="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Removed clutter and distracting elements</span>
              </li>
              <li class="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Enhanced architectural features and furniture</span>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2">
            <div class="image-compare h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div class="before w-full h-full">
                <img src="/assets/images/A13.jpg" class="w-full h-full object-cover" alt="After: Enhanced Living Room" ></img>
                <span class="image-caption before-caption right-4">AFTER</span>
              </div>
              <div class="after">
                <img src="/assets/images/A18.jpg" class="w-full h-full object-cover" alt="Before: Original Living Room"></img>
                <span class="image-caption after-caption left-4">BEFORE</span>
              </div>
            </div>
            <div class="text-center text-sm text-gray-400 mt-3">Hover over image to see before/after comparison</div>
          </div>
        </div>

        {/* <!-- Portfolio Item 2 --> */}
        <div class="flex flex-col lg:flex-row-reverse gap-8 items-center" data-aos="fade-up">
          <div class="lg:w-1/2">
            <h3 class="text-2xl font-bold mb-4">Exterior Sky Replacement</h3>
            <p class="text-gray-300 mb-6">
              This exterior transformation showcases the dramatic impact of sky replacement, color enhancement, and landscaping improvements to create a compelling first impression.
            </p>
            <ul class="text-gray-300 mb-6 space-y-2">
              <li class="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Replaced overcast sky with vibrant blue sky</span>
              </li>
              <li class="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Enhanced architecture and exterior features</span>
              </li>
              <li class="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Improved lawn and landscaping appearance</span>
              </li>
              <li class="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Corrected perspective and composition issues</span>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2">
            <div class="image-compare h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div class="before w-full h-full">
                <img src="/assets/images/A11_Exterior.jpg" class="w-full h-full object-cover" alt="After: Enhanced Living Room"></img>
                <span class="image-caption before-caption right-4">AFTER</span>
              </div>
              <div class="after">
                <img src="/assets/images/A11_Exterior.jpg" class="w-full h-full object-cover" alt="After: Enhanced Living Room"></img>
                <span class="image-caption after-caption left-4">BEFORE</span>
              </div>
            </div>
            <div class="text-center text-sm text-gray-400 mt-3">Hover over image to see before/after comparison</div>
          </div>
        </div>

        {/* <!-- Portfolio Item 3 --> */}
        <div class="flex flex-col lg:flex-row gap-8 items-center" data-aos="fade-up">
          <div class="lg:w-1/2">
            <h3 class="text-2xl font-bold mb-4">Day to Dusk Conversion</h3>
            <p class="text-gray-300 mb-6">
              This twilight transformation creates a warm, inviting ambiance that highlights architectural features and creates an emotional connection with potential buyers.
            </p>
            <ul class="text-gray-300 mb-6 space-y-2">
              <li class="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Converted daytime photo to dramatic dusk scene</span>
              </li>
              <li class="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Added interior and exterior lighting effects</span>
              </li>
              <li class="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Enhanced architectural features with lighting</span>
              </li>
              <li class="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Created inviting, atmospheric property appearance</span>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2">
            <div class="image-compare h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div class="before w-full h-full">
                <img src="/assets/images/A2_1.jpg" class="w-full h-full object-cover" alt="After: Converted daytime photo to dramatic dusk scene"></img>
                <span class="image-caption before-caption right-4">AFTER</span>
              </div>
              <div class="after">
                <img src="/assets/images/A2_2.jpg" class="w-full h-full object-cover" alt="After: Converted daytime photo to dramatic dusk scene"></img>
                <span class="image-caption after-caption left-4">BEFORE</span>
              </div>
            </div>
            <div class="text-center text-sm text-gray-400 mt-3">Hover over image to see before/after comparison</div>
          </div>
        </div>
      </div>

      {/* <!-- Why Choose Me Section --> */}
      <div class="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
        <div class="text-center mb-8">
          <h3 class="text-3xl font-bold mb-4 text-gradient">Why Choose Me?</h3>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional real estate photo editing with proven results and exceptional service
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Icon name="Clock" size={20} className="text-white" />
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-2 text-primary-foreground">Fast Turnaround Time</h4>
              <p class="text-gray-300">Get your edited photos back in just 12-24 hours, ensuring you never miss a listing deadline.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Icon name="Star" size={20} className="text-white" />
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-2 text-primary-foreground">High-Quality, Realistic Results</h4>
              <p class="text-gray-300">Professional editing that looks natural and enhances your property's true potential.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Icon name="Eye" size={20} className="text-white" />
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-2 text-primary-foreground">Attention to Detail</h4>
              <p class="text-gray-300">Deep understanding of real estate marketing with meticulous attention to every pixel.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Icon name="DollarSign" size={20} className="text-white" />
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-2 text-primary-foreground">Flexible Pricing</h4>
              <p class="text-gray-300">Competitive rates based on project size, from single photos to entire property portfolios.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="text-center mt-16">
        <a href="#contact" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
          Request More Examples
        </a>
      </div> */}
    </div>
    </section>
  )
}

export default PortfolioHighlights
