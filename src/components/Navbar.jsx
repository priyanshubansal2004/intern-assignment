import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <TrendingUp className="h-8 w-8 text-[#1e5245]" />
            <span className="ml-2 text-xl font-bold text-[#1e5245]">ANSHUL</span>
          </Link>

          {/* Centered Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-800 hover:text-[#2e8b57] font-medium transition-colors">
                Home
              </Link>
              <Link to="/resources" className="text-gray-800 hover:text-[#2e8b57] font-medium transition-colors">
                Resources
              </Link>
              <Link to="/trading-recap" className="text-gray-800 hover:text-[#2e8b57] font-medium transition-colors">
                Trading Recap
              </Link>
              <Link to="/blog" className="text-gray-800 hover:text-[#2e8b57] font-medium transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-[#2e8b57] font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Book a Consultation Button */}
          <div className="hidden md:flex flex-shrink-0">
            <Link 
              to="/"
              className="bg-[#1e5245] text-white px-4 py-2 rounded-md hover:bg-[#164137] transition-colors font-medium"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open mobile menu"
          >
            {/* Hamburger Icon */}
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg py-4 px-6">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-800 hover:text-[#2e8b57] font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/resources" className="text-gray-800 hover:text-[#2e8b57] font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Resources
              </Link>
              <Link to="/trading-recap" className="text-gray-800 hover:text-[#2e8b57] font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Trading Recap
              </Link>
              <Link to="/blog" className="text-gray-800 hover:text-[#2e8b57] font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-[#2e8b57] font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link 
                to="/"
                className="bg-[#1e5245] text-white px-4 py-2 rounded-md hover:bg-[#164137] transition-colors font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
