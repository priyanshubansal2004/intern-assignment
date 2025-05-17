import React from 'react';
import { Link } from 'react-router-dom';

const PatternCard = ({ image, title, description, successRate, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm h-16">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Success Rate: <span className="font-semibold">{successRate}</span></span>
          <Link 
            to={link} 
            className="text-[#1e5245] font-medium hover:text-[#2e8b57] transition-colors text-sm"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
};

const TradingRecapSection = () => {
  const patterns = [
    {
      image: "https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "1-2-3 Chopstick Pattern",
      description: "A reliable reversal pattern consisting of three consecutive candlesticks, indicating a potential trend change.",
      successRate: "78%",
      link: "/trading-recap/chopstick-pattern"
    },
    {
      image: "https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Double Bottom Bull Flag",
      description: "A powerful continuation pattern that forms during an uptrend, suggesting further bullish momentum.",
      successRate: "82%",
      link: "/trading-recap/double-bottom"
    },
    {
      image: "https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Channel and Triangle Pattern",
      description: "A combination pattern showing price movement within parallel lines before breaking out through a triangle formation.",
      successRate: "75%",
      link: "/trading-recap/channel-triangle"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
          Trading Recap
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {patterns.map((pattern, index) => (
            <PatternCard
              key={index}
              image={pattern.image}
              title={pattern.title}
              description={pattern.description}
              successRate={pattern.successRate}
              link={pattern.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingRecapSection;
