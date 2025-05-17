import React, { useState } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Michael's analytical approach to market psychology was exactly what I needed. I've reduced my emotional trading and increased my win rate by 30% in just three months.",
      author: "David Lee",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      position: "Full-time Trader"
    },
    {
      id: 2,
      text: "The risk management masterclass transformed how I approach trading. Instead of chasing wins, I now focus on protecting capital and finding high-probability setups.",
      author: "Jennifer Wong",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      position: "Options Trader"
    },
    {
      id: 3,
      text: "As an engineer myself, Anshul's systematic approach to breaking down trading resonated with me. His framework helped me build a profitable strategy within 6 months.",
      author: "Robert Chen",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      position: "Former Engineer, Now Trader"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-[#1e5245]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Trader Success Stories
        </h2>
        
        <p className="text-center text-white/80 max-w-3xl mx-auto mb-12">
          Hear from traders who have transformed their approach and results through our coaching and resources.
        </p>
        
        <div className="max-w-4xl mx-auto bg-[#2a6354]/70 rounded-lg p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].author} 
                className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
              />
            </div>
            
            <div className="md:w-3/4 md:pl-8">
              <p className="text-white italic mb-6 text-lg leading-relaxed">"{testimonials[activeIndex].text}"</p>
              
              <div className="flex flex-col">
                <span className="text-white font-bold">{testimonials[activeIndex].author}</span>
                {testimonials[activeIndex].position && (
                  <span className="text-white/70 text-sm">{testimonials[activeIndex].position}</span>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
