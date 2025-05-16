import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const TraderMindsetSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
          The Evolution of a Trader
        </h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Understanding the fundamental differences between novice and profitable traders is the
          first step toward consistent success in the markets.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Novice Trader Column */}
          <div className="w-full md:w-1/2 bg-red-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-6">
              <AlertCircle className="text-red-500 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-gray-800">Novice Trader Mindset</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <p className="text-gray-700">
                  A novice trader believes he knows the outcome before even placing the trade.
                </p>
              </li>
              
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <p className="text-gray-700">
                  He sees a chart pattern and assumes it will behave a certain way.
                </p>
              </li>
              
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <p className="text-gray-700">
                  His focus is entirely on the potential reward, with little or no attention to the risk involved.
                </p>
              </li>
              
              <li className="flex flex-col items-start">
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <p className="text-gray-700 font-medium">
                    Scenario A (Winning Trade):
                  </p>
                </div>
                <p className="text-gray-700 ml-6 mt-1">
                  If the trade goes in his favor, he thinks, "I knew this would happen."
                  <br />
                  This creates a false sense of certainty, reinforcing the dangerous belief that outcomes can be predicted.
                </p>
              </li>
            </ul>
          </div>
          
          {/* Profitable Trader Column */}
          <div className="w-full md:w-1/2 bg-green-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-6">
              <CheckCircle2 className="text-green-600 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-gray-800">Profitable Trader Mindset</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <p className="text-gray-700">
                  A profitable trader starts with the awareness that every trade has an uncertain outcome.
                </p>
              </li>
              
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <p className="text-gray-700">
                  He accepts that the market is unpredictable in the short term and focuses instead on preparation.
                </p>
              </li>
              
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <p className="text-gray-700">
                  His first priority is not the potential gain, but managing risk in light of that uncertain outcome.
                </p>
              </li>
              
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <p className="text-gray-700">
                  His position sizing stays consistent, his focus remains on long-term performance, and his edge is built around accepting the uncertainty of every single trade.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraderMindsetSection;