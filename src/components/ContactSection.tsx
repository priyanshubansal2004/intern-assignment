import React, { useState } from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your server
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Show success message
    alert('Message sent successfully!');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
          Get in Touch
        </h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Ready to transform your trading approach? Reach out to discuss how we can work together to
          develop your trading mindset and strategy.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e5245] focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e5245] focus:border-transparent"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e5245] focus:border-transparent"
                  placeholder="What is this regarding?"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e5245] focus:border-transparent h-32"
                  placeholder="Tell me more about your trading goals and challenges"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#1e5245] text-white px-4 py-3 rounded-md hover:bg-[#164137] transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information & Consultation */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="text-[#1e5245] mr-3 mt-1" size={20} />
                  <span className="text-gray-700">anshul@tradingmindset.com</span>
                </li>
                
                <li className="flex items-start">
                  <Phone className="text-[#1e5245] mr-3 mt-1" size={20} />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </li>
                
                <li className="flex items-start">
                  <MapPin className="text-[#1e5245] mr-3 mt-1" size={20} />
                  <span className="text-gray-700">New York, NY</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="text-gray-700 font-medium mb-3">Connect</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#1e5245] hover:text-[#2e8b57] transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-[#1e5245] hover:text-[#2e8b57] transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-[#1e5245] hover:text-[#2e8b57] transition-colors">
                    <Youtube size={20} />
                  </a>
                  <a href="#" className="text-[#1e5245] hover:text-[#2e8b57] transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Schedule a Consultation</h3>
              
              <p className="text-gray-600 mb-6">
                Book a 30-minute discovery call to discuss your trading goals and how I can help you develop a more consistent approach.
              </p>
              
              <a
                href="/"
                className="block w-full bg-[#1e5245] text-white px-4 py-3 rounded-md hover:bg-[#164137] transition-colors font-medium text-center"
              >
                Book Your Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;