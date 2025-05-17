import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhatITradeSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
          What I Trade
        </h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          My trading approach focuses on two main areas: Stock/Equity trading and Day Trading. Each
          requires different strategies and mindsets.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Stock/Equity Trading */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md mb-6">
              <img 
                src="https://images.pexels.com/photos/6801574/pexels-photo-6801574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Stock/Equity Trading Setup" 
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Stock/Equity Trading</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-[#1e5245] mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Focus on large-cap stocks with high liquidity</p>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="text-[#1e5245] mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Technical analysis combined with fundamental catalysts</p>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="text-[#1e5245] mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Risk management through position sizing and stop-losses</p>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="text-[#1e5245] mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Swing trading opportunities for longer-term positions</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Day Trading */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md mb-6">
              <img 
                src="https://images.pexels.com/photos/6801645/pexels-photo-6801645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Day Trading Setup" 
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Day Trading</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-[#1e5245] mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Short-term opportunities in volatile markets</p>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="text-[#1e5245] mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Price action and volume analysis</p>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="text-[#1e5245] mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Scalping and momentum trading strategies</p>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="text-[#1e5245] mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Real-time market analysis and quick decision making</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatITradeSection;
