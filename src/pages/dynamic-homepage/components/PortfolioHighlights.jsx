import React from 'react'
import A2_1 from '/assets/images/A2_1.jpg'
import A2_2 from '/assets/images/A2_2.jpg'
import A5_1 from '/assets/images/A5_1.jpg'
import A5 from '/assets/images/A5.jpg'
import { motion } from 'framer-motion';

const PortfolioHighlights = () => {
  return (
    <section id='portfolio-highlights' className="py-20 bg-gradient-to-br from-background via-surface to-muted">
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
                <i class="fas fa-caret-right text-indigo-400 mt-1 mr-2"></i>
                <span>Corrected white balance and color temperature</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-caret-right text-indigo-400 mt-1 mr-2"></i>
                <span>Balanced window exposure with interior lighting</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-caret-right text-indigo-400 mt-1 mr-2"></i>
                <span>Removed clutter and distracting elements</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-caret-right text-indigo-400 mt-1 mr-2"></i>
                <span>Enhanced architectural features and furniture</span>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2">
            <div class="image-compare h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div class="before w-full h-full">
                <img src={A2_1} class="w-full h-full object-cover" alt="After: Enhanced Living Room" ></img>
                <span class="image-caption before-caption right-4">AFTER</span>
              </div>
              <div class="after">
                <img src={A2_2} class="w-full h-full object-cover" alt="Before: Original Living Room"></img>
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
                <i class="fas fa-caret-right text-indigo-400 mt-1 mr-2"></i>
                <span>Replaced overcast sky with vibrant blue sky</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-caret-right text-indigo-400 mt-1 mr-2"></i>
                <span>Enhanced architecture and exterior features</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-caret-right text-indigo-400 mt-1 mr-2"></i>
                <span>Improved lawn and landscaping appearance</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-caret-right text-indigo-400 mt-1 mr-2"></i>
                <span>Corrected perspective and composition issues</span>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2">
            <div class="image-compare h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div class="before w-full h-full">
                <img src={A5_1} class="w-full h-full object-cover" alt="After: Enhanced Living Room"></img>
                <span class="image-caption before-caption right-4">AFTER</span>
              </div>
              <div class="after">
                <img src={A5} class="w-full h-full object-cover" alt="After: Enhanced Living Room"></img>
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
                <i class="fas fa-caret-right text-indigo-400 mt-1 mr-2"></i>
                <span>Converted daytime photo to dramatic dusk scene</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-caret-right text-indigo-400 mt-1 mr-2"></i>
                <span>Added interior and exterior lighting effects</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-caret-right text-indigo-400 mt-1 mr-2"></i>
                <span>Enhanced architectural features with lighting</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-caret-right text-indigo-400 mt-1 mr-2"></i>
                <span>Created inviting, atmospheric property appearance</span>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2">
            <div class="image-compare h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div class="before w-full h-full">
                {/* <img src={} ></img> */}
                <span class="image-caption before-caption right-4">AFTER</span>
              </div>
              <div class="after">
                {/* <img src={} ></img> */}
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
              <i class="fas fa-clock text-white text-xl"></i>
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-2 text-primary">Fast Turnaround Time</h4>
              <p class="text-gray-300">Get your edited photos back in just 12-24 hours, ensuring you never miss a listing deadline.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <i class="fas fa-star text-white text-xl"></i>
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-2 text-primary">High-Quality, Realistic Results</h4>
              <p class="text-gray-300">Professional editing that looks natural and enhances your property's true potential.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <i class="fas fa-eye text-white text-xl"></i>
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-2 text-primary">Attention to Detail</h4>
              <p class="text-gray-300">Deep understanding of real estate marketing with meticulous attention to every pixel.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <i class="fas fa-dollar-sign text-white text-xl"></i>
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-2 text-primary">Flexible Pricing</h4>
              <p class="text-gray-300">Competitive rates based on project size, from single photos to entire property portfolios.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Services Offered Section --> */}
      <div class="mt-20">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold mb-4 text-gradient">Services Offered</h3>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive real estate photo editing services to make your properties shine
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Image Enhancement & Retouching */}
          <div class="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-magic text-white text-xl"></i>
              </div>
              <h4 class="text-xl font-semibold text-primary">Image Enhancement & Retouching</h4>
            </div>
            <ul class="text-gray-300 space-y-2 text-sm">
              <li class="flex items-start">
                <i class="fas fa-check text-accent mt-1 mr-2 text-xs"></i>
                <span>Adjust brightness, contrast, and sharpness</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-accent mt-1 mr-2 text-xs"></i>
                <span>Correct colors and white balance</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-accent mt-1 mr-2 text-xs"></i>
                <span>Remove camera dark spots and lens flare</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-accent mt-1 mr-2 text-xs"></i>
                <span>Remove noise and unwanted colors</span>
              </li>
            </ul>
          </div>

          {/* Service 2: Object Removal */}
          <div class="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-eraser text-white text-xl"></i>
              </div>
              <h4 class="text-xl font-semibold text-primary">Object Removal</h4>
            </div>
            <p class="text-gray-300 text-sm">
              Seamlessly remove unwanted objects, clutter, or distractions from your property photos to create clean, professional images that highlight the best features.
            </p>
          </div>

          {/* Service 3: Sky Replacement & Window View Enhancement */}
          <div class="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-cloud text-white text-xl"></i>
              </div>
              <h4 class="text-xl font-semibold text-primary">Sky Replacement & Window View Enhancement</h4>
            </div>
            <ul class="text-gray-300 space-y-2 text-sm">
              <li class="flex items-start">
                <i class="fas fa-check text-accent mt-1 mr-2 text-xs"></i>
                <span>Replace dull skies with bright, appealing ones</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-accent mt-1 mr-2 text-xs"></i>
                <span>Enhance window views for better property presentation</span>
              </li>
            </ul>
          </div>

          {/* Service 4: HDR Blending */}
          <div class="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-sun text-white text-xl"></i>
              </div>
              <h4 class="text-xl font-semibold text-primary">HDR Blending</h4>
            </div>
            <p class="text-gray-300 text-sm">
              Combine multiple exposures for well-lit, balanced images that capture every detail of your property in perfect lighting conditions.
            </p>
          </div>

          {/* Service 5: Day-to-Dusk Conversion */}
          <div class="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-moon text-white text-xl"></i>
              </div>
              <h4 class="text-xl font-semibold text-primary">Day-to-Dusk Conversion</h4>
            </div>
            <p class="text-gray-300 text-sm">
              Transform daylight property shots into stunning twilight views that create emotional connections and showcase properties in their most appealing light.
            </p>
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
