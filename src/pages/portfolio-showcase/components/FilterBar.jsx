import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FilterBar = ({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  viewMode, 
  onViewModeChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const sortOptions = [
    { value: 'recent', label: 'Most Recent', icon: 'Clock' },
    { value: 'featured', label: 'Featured First', icon: 'Star' },
    { value: 'alphabetical', label: 'A-Z', icon: 'ArrowUpDown' },
    { value: 'client', label: 'By Client', icon: 'Building' }
  ];

  const viewModes = [
    { value: 'grid', icon: 'Grid3X3', label: 'Grid View' },
    { value: 'list', icon: 'List', label: 'List View' },
    { value: 'masonry', icon: 'LayoutGrid', label: 'Masonry View' }
  ];

  return (
    <div className="bg-card/80 backdrop-blur-brand border border-border rounded-2xl p-6 shadow-brand sticky top-24 z-40">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          iconName={isFilterOpen ? 'X' : 'Filter'}
          iconPosition="left"
          fullWidth
        >
          {isFilterOpen ? 'Close Filters' : 'Show Filters'}
        </Button>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isFilterOpen || window.innerWidth >= 1024 ? 'auto' : 0, 
            opacity: isFilterOpen || window.innerWidth >= 1024 ? 1 : 0 
          }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search projects by industry, challenge, or solution..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e?.target?.value)}
                className="pl-10"
              />
              <Icon 
                name="Search" 
                size={18} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-text-primary mb-3">Project Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories?.map((category) => (
                <motion.button
                  key={category?.id}
                  onClick={() => onCategoryChange(category?.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === category?.id
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'bg-surface text-text-secondary hover:bg-accent/10 hover:text-accent'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-2">
                    <Icon name={category?.icon} size={16} />
                    <span>{category?.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activeCategory === category?.id
                        ? 'bg-accent-foreground/20 text-accent-foreground'
                        : 'bg-text-secondary/20 text-text-secondary'
                    }`}>
                      {category?.count}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* View Mode & Sort Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-text-primary">View:</span>
              <div className="flex bg-surface rounded-lg p-1">
                {viewModes?.map((mode) => (
                  <button
                    key={mode?.value}
                    onClick={() => onViewModeChange(mode?.value)}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === mode?.value
                        ? 'bg-accent text-accent-foreground shadow-sm'
                        : 'text-text-secondary hover:text-accent hover:bg-accent/10'
                    }`}
                    title={mode?.label}
                  >
                    <Icon name={mode?.icon} size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-text-primary">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => onSortChange(e?.target?.value)}
                  className="appearance-none bg-surface border border-border rounded-lg px-4 py-2 pr-8 text-sm font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  {sortOptions?.map((option) => (
                    <option key={option?.value} value={option?.value}>
                      {option?.label}
                    </option>
                  ))}
                </select>
                <Icon 
                  name="ChevronDown" 
                  size={16} 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none" 
                />
              </div>
            </div>
          </div>

          {/* Active Filters Summary */}
          {(activeCategory !== 'all' || searchQuery) && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-text-secondary">Active filters:</span>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory !== 'all' && (
                      <span className="bg-accent/10 text-accent px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1">
                        <span>{categories?.find(c => c?.id === activeCategory)?.name}</span>
                        <button
                          onClick={() => onCategoryChange('all')}
                          className="hover:text-accent/70"
                        >
                          <Icon name="X" size={12} />
                        </button>
                      </span>
                    )}
                    {searchQuery && (
                      <span className="bg-accent/10 text-accent px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1">
                        <span>"{searchQuery}"</span>
                        <button
                          onClick={() => onSearchChange('')}
                          className="hover:text-accent/70"
                        >
                          <Icon name="X" size={12} />
                        </button>
                      </span>
                    )}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    onCategoryChange('all');
                    onSearchChange('');
                  }}
                  iconName="RotateCcw"
                  iconPosition="left"
                >
                  Clear All
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FilterBar;