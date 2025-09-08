import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const AvailabilityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Mock availability data
  const availableSlots = {
    '2025-01-08': ['10:00 AM', '2:00 PM', '4:00 PM'],
    '2025-01-09': ['9:00 AM', '11:00 AM', '3:00 PM'],
    '2025-01-10': ['10:00 AM', '1:00 PM'],
    '2025-01-13': ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'],
    '2025-01-14': ['10:00 AM', '3:00 PM'],
    '2025-01-15': ['9:00 AM', '1:00 PM', '4:00 PM'],
    '2025-01-16': ['11:00 AM', '2:00 PM'],
    '2025-01-17': ['9:00 AM', '10:00 AM', '3:00 PM']
  };

  const getDaysInMonth = (date) => {
    const year = date?.getFullYear();
    const month = date?.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay?.getDate();
    const startingDayOfWeek = firstDay?.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days?.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days?.push(new Date(year, month, day));
    }
    
    return days;
  };

  const formatDate = (date) => {
    return date?.toISOString()?.split('T')?.[0];
  };

  const isDateAvailable = (date) => {
    if (!date) return false;
    const dateStr = formatDate(date);
    return availableSlots?.[dateStr] && availableSlots?.[dateStr]?.length > 0;
  };

  const isPastDate = (date) => {
    if (!date) return false;
    const today = new Date();
    today?.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleDateSelect = (date) => {
    if (isPastDate(date) || !isDateAvailable(date)) return;
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBookConsultation = () => {
    if (selectedDate && selectedTime) {
      const dateStr = selectedDate?.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      alert(`Consultation booked for ${dateStr} at ${selectedTime}. You'll receive a confirmation email shortly.`);
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth?.setMonth(prev?.getMonth() + direction);
      return newMonth;
    });
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const days = getDaysInMonth(currentMonth);

  return (
    <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-primary mb-2">Book a Consultation</h3>
        <p className="text-text-secondary">Schedule a free 30-minute discovery call to discuss your project.</p>
      </div>
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg font-semibold text-primary">
          {monthNames?.[currentMonth?.getMonth()]} {currentMonth?.getFullYear()}
        </h4>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateMonth(-1)}
            iconName="ChevronLeft"
            className="w-10 h-10 p-0"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateMonth(1)}
            iconName="ChevronRight"
            className="w-10 h-10 p-0"
          />
        </div>
      </div>
      {/* Calendar Grid */}
      <div className="mb-6">
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames?.map(day => (
            <div key={day} className="text-center text-sm font-medium text-text-secondary py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {days?.map((date, index) => {
            if (!date) {
              return <div key={index} className="h-10"></div>;
            }

            const isAvailable = isDateAvailable(date);
            const isPast = isPastDate(date);
            const isSelected = selectedDate && formatDate(date) === formatDate(selectedDate);

            return (
              <button
                key={index}
                onClick={() => handleDateSelect(date)}
                disabled={isPast || !isAvailable}
                className={`h-10 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isSelected
                    ? 'bg-accent text-accent-foreground shadow-md'
                    : isAvailable
                    ? 'bg-surface hover:bg-accent/10 text-primary hover:text-accent'
                    : isPast
                    ? 'text-text-secondary/40 cursor-not-allowed' :'text-text-secondary/60 cursor-not-allowed'
                }`}
              >
                {date?.getDate()}
              </button>
            );
          })}
        </div>
      </div>
      {/* Available Times */}
      {selectedDate && (
        <div className="mb-6">
          <h5 className="text-lg font-semibold text-primary mb-3">
            Available Times - {selectedDate?.toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h5>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {availableSlots?.[formatDate(selectedDate)]?.map(time => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`p-3 text-sm font-medium rounded-lg border transition-all duration-200 ${
                  selectedTime === time
                    ? 'bg-accent text-accent-foreground border-accent shadow-md'
                    : 'bg-surface border-border hover:border-accent hover:bg-accent/5 text-primary'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Booking Confirmation */}
      {selectedDate && selectedTime && (
        <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <Icon name="Calendar" size={20} className="text-accent mt-0.5" />
            <div>
              <h6 className="font-semibold text-primary">Selected Appointment</h6>
              <p className="text-sm text-text-secondary">
                {selectedDate?.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })} at {selectedTime}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Book Button */}
      <Button
        onClick={handleBookConsultation}
        disabled={!selectedDate || !selectedTime}
        className="btn-accent w-full"
        size="lg"
        iconName="Calendar"
        iconPosition="left"
      >
        Book Free Consultation
      </Button>
      {/* Consultation Info */}
      <div className="mt-6 p-4 bg-surface rounded-lg">
        <h6 className="font-semibold text-primary mb-2">What to Expect</h6>
        <ul className="text-sm text-text-secondary space-y-1">
          <li>• 30-minute discovery call via video conference</li>
          <li>• Discussion of your project goals and requirements</li>
          <li>• Initial recommendations and approach overview</li>
          <li>• Timeline and investment range discussion</li>
          <li>• Next steps and proposal timeline</li>
        </ul>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;