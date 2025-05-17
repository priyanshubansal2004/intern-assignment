import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ResourceCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 min-h-[60px]">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-[#1e5245] font-medium hover:text-[#2e8b57] transition-colors"
        >
          Read More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const ResourcesSection = () => {
  const resources = [
    {
      image: "https://images.pexels.com/photos/6801654/pexels-photo-6801654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "The IDEAL Trading Mindset",
      description: "Discover the psychological framework that separates consistent winners from the rest.",
      link: "/resources/trading-mindset"
    },
    {
      image: "https://images.pexels.com/photos/6801576/pexels-photo-6801576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Emotional Intelligence in Trading",
      description: "Learn how to recognize and manage emotions that impact your trading decisions.",
      link: "/resources/emotional-intelligence"
    },
    {
      image: "https://images.pexels.com/photos/6801873/pexels-photo-6801873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Engineering Approach to Market Analysis",
      description: "Apply systematic engineering principles to develop robust trading strategies.",
      link: "/resources/engineering-approach"
    },
    {
      image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Weekly Market Recap - May 2025",
      description: "Analysis of recent market movements and preparation for the week ahead.",
      link: "/resources/weekly-recap"
    },
    {
      image: "https://images.pexels.com/photos/3618950/pexels-photo-3618950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Risk Management Masterclass",
      description: "Essential techniques to protect your capital and maximize returns.",
      link: "/resources/risk-management"
    },
    {
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "From Engineer to Trader: My Journey",
      description: "Personal insights on transitioning from engineering to full-time trading.",
      link: "/resources/engineer-to-trader"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
          Resources
        </h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Access insights, strategies, and analysis to help you develop a consistent trading approach and
          navigate market challenges.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              image={resource.image}
              title={resource.title}
              description={resource.description}
              link={resource.link}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/" 
            className="bg-[#1e5245] text-white px-6 py-3 rounded-md inline-block font-medium hover:bg-[#164137] transition-colors"
          >
            More Resources
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
