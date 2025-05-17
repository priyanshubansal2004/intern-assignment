import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#232f3e] text-gray-200 text-sm">
      <div className="container mx-auto px-4 pt-10 pb-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* About/Brand */}
          <div className="md:w-1/4 flex flex-col">
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Anshul Trader Logo"
                className="h-10 w-10 bg-white rounded-md object-contain mr-2"
              />
              <span className="text-2xl font-bold text-white">Trader</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming engineers and analytical minds into consistent, profitable traders.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/5">
            <h3 className="text-base font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="hover:text-white text-gray-300">Home</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white text-gray-300">Resources</Link>
              </li>
              <li>
                <Link to="/trading-recap" className="hover:text-white text-gray-300">Trading Recap</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white text-gray-300">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white text-gray-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:w-1/5">
            <h3 className="text-base font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/pricing" className="hover:text-white text-gray-300">Pricing</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white text-gray-300">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white text-gray-300">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Social/Stay Connected */}
          <div className="md:w-1/4">
            <h3 className="text-base font-semibold text-white mb-3">
              Stay connected and keep learning!
            </h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="YouTube" className="bg-[#2d3848] p-2 rounded-full hover:bg-[#c4302b] transition-colors">
                <Youtube size={22} className="text-white" />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-[#2d3848] p-2 rounded-full hover:bg-[#0077b5] transition-colors">
                <Linkedin size={22} className="text-white" />
              </a>
              <a href="#" aria-label="Facebook" className="bg-[#2d3848] p-2 rounded-full hover:bg-[#4267B2] transition-colors">
                <Facebook size={22} className="text-white" />
              </a>
              <a href="#" aria-label="Instagram" className="bg-[#2d3848] p-2 rounded-full hover:bg-[#E1306C] transition-colors">
                <Instagram size={22} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-xs">
          Copyright©2025 Spanish Learning Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
