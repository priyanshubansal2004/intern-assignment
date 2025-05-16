import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  title: string;
  subtitle: string;
  quote: string;
  author: string;
  imageUrl?: string;
}

const HeroCarousel: React.FC = () => {
  const carouselItems: CarouselItem[] = [
    {
      title: 'TRADE LESS,',
      subtitle: 'TRADE SIMPLE',
      quote: 'We could post our trading rules on the front page of the Wall Street Journal, and still people would not be able to make money from them.',
      author: 'Richard Dennis',
    },
    {
      title: 'DISCIPLINE OVER',
      subtitle: 'EMOTIONS',
      quote: 'The market doesn\'t care how you feel. It\'s going to keep doing what it\'s doing regardless of your emotional state.',
      author: 'Mark Douglas',
    },
    {
      title: 'CONSISTENT',
      subtitle: 'STRATEGY',
      quote: 'Successful trading is about developing a consistent approach with an edge, and then executing it with discipline.',
      author: 'Michael Huddleston',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden pt-16 md:pt-24 bg-gradient-to-br from-[#f0f9f5] to-[#e6f2ed]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Carousel content */}
        <div className="w-full md:w-1/2 p-8 relative z-10">
          <div className="transition-all duration-500 ease-in-out">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1e5245] leading-tight">
              {carouselItems[currentIndex].title}<br />
              <span className="text-[#2e8b57]">{carouselItems[currentIndex].subtitle}</span>
            </h1>
            <div className="mt-8 mb-6 border-l-4 border-[#2e8b57] pl-4">
              <p className="text-gray-700 italic text-lg">"{carouselItems[currentIndex].quote}"</p>
              <p className="text-gray-600 mt-2 text-right">-{carouselItems[currentIndex].author}</p>
            </div>
            <div className="mt-8">
              <a href="#expertise" className="bg-[#1e5245] text-white px-6 py-3 rounded-md inline-block font-medium hover:bg-[#164137] transition-colors">
                Explore My Approach
              </a>
            </div>
          </div>
        </div>
        
        {/* Image section */}
        <div className="w-full md:w-1/2 p-8">
          <div className="relative rounded-lg shadow-xl overflow-hidden bg-white">
            <img 
              src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Expert Trading Guidance" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e5245] p-6 text-white">
              <h3 className="text-xl font-bold mb-1">Expert Trading Guidance</h3>
              <p className="text-white/90">Simplify your trading journey with our proven strategies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <button 
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-[#1e5245]" size={24} />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="text-[#1e5245]" size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-[#1e5245]' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;