import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "What makes your trading approach different?",
      answer: "My approach combines engineering principles with market psychology. I focus on simplicity, clear rules, and risk management rather than complex indicators or 'secret formulas.' I believe in sustainable, consistent results over flashy short-term gains. My background in engineering enables me to build and test systematic approaches to trading that remove much of the emotional bias."
    },
    {
      question: "How long does it take to become profitable?",
      answer: "The journey to profitability varies for each trader, but typically takes 1-2 years of dedicated practice and learning. The biggest factor isn't market knowledge but developing emotional discipline and proper risk management. Many traders have the technical skills but fail because they can't manage the psychological aspects of trading. My coaching accelerates this process by helping you avoid common pitfalls."
    },
    {
      question: "What markets do you trade?",
      answer: "I primarily focus on US equity markets, including large-cap stocks and ETFs. For day trading, I work with highly liquid instruments with tight spreads. I occasionally trade options for defined-risk strategies, but my core approach centers on cash equities where the risk is more transparent and manageable for most traders."
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : null);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Find answers to common questions about my trading approach, coaching services, and how I
          can help you develop as a trader.
        </p>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <Plus 
                  className={`transition-transform duration-200 text-[#1e5245] ${
                    openIndex === index ? 'transform rotate-45' : ''
                  }`} 
                  size={20}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;