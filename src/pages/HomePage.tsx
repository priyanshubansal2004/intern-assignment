import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import TraderMindsetSection from '../components/TraderMindsetSection';
import WhatITradeSection from '../components/WhatITradeSection';
import ResourcesSection from '../components/ResourcesSection';
import TradingRecapSection from '../components/TradingRecapSection';
import BlogSection from '../components/BlogSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <TraderMindsetSection />
      <WhatITradeSection />
      <ResourcesSection />
      <TradingRecapSection />
      <BlogSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;