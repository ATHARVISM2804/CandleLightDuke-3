import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../store/cartStore';
import { NavLink } from '../types';
import SearchBar from './SearchBar';

const navLinks: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/shop', label: 'Shop' },
  { path: '/about', label: 'About' },
  { path: '/fragrance-guide', label: 'Fragrance Guide' },
  { path: '/custom-order', label: 'Custom Order' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const items = useCartStore((state) => state.items);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#C9A66B]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-2xl font-serif text-[#5A4232] hover:text-[#C9A66B] transition-colors duration-300"
          >
            CandleLightDuke
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-[#5A4232] hover:text-[#C9A66B] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#C9A66B] after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
              >
                {link.label}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSearchOpen(true)}
              className="relative p-2 hover:bg-[#F5E9DA] rounded-full transition-colors duration-300"
            >
              <Search className="w-6 h-6 text-[#5A4232]" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleCart}
              className="relative p-2 hover:bg-[#F5E9DA] rounded-full transition-colors duration-300"
            >
              <ShoppingBag className="w-6 h-6 text-[#5A4232]" />
              {items.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-[#C9A66B] text-white text-xs rounded-full flex items-center justify-center"
                >
                  {items.length}
                </motion.span>
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSearchOpen(true)}
              className="relative p-2 hover:bg-[#F5E9DA] rounded-full transition-colors duration-300"
            >
              <Search className="w-6 h-6 text-[#5A4232]" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleCart}
              className="relative p-2 hover:bg-[#F5E9DA] rounded-full transition-colors duration-300"
            >
              <ShoppingBag className="w-6 h-6 text-[#5A4232]" />
              {items.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-[#C9A66B] text-white text-xs rounded-full flex items-center justify-center"
                >
                  {items.length}
                </motion.span>
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-[#F5E9DA] rounded-full transition-colors duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-[#5A4232]" />
              ) : (
                <Menu className="w-6 h-6 text-[#5A4232]" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                >
                  <Link
                    to={link.path}
                    className="block px-3 py-2 text-[#5A4232] hover:text-[#C9A66B] hover:bg-[#F5E9DA] rounded-md transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;