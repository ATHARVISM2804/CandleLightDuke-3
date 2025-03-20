import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#5A4232] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">CandleLightDuke</h3>
            <p className="text-gray-300 mb-4">
              Illuminating spaces with handcrafted elegance since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#C9A66B] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#C9A66B] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#C9A66B] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="hover:text-[#C9A66B] transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C9A66B] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#C9A66B] transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C9A66B] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="hover:text-[#C9A66B] transition-colors">Shipping Info</Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-[#C9A66B] transition-colors">Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#C9A66B] transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/care-guide" className="hover:text-[#C9A66B] transition-colors">Candle Care Guide</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C9A66B]" />
                <span>123 Candle Street, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#C9A66B]" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#C9A66B]" />
                <span>hello@candlelightduke.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} CandleLightDuke. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;