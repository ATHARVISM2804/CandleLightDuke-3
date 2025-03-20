import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-[#5A4232] mb-4">Our Story</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Founded in 2020, CandleLightDuke was born from a passion for creating beautiful, handcrafted candles that bring warmth and elegance to every home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602521879205-9e37c77c3077?q=80&w=2940&auto=format&fit=crop"
                alt="Candle making process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-serif text-[#5A4232] mb-4">Crafted with Love</h2>
              <p className="text-gray-600 mb-6">
                Every candle is carefully handcrafted in our studio using the finest natural ingredients and premium fragrances. Our commitment to quality ensures that each product meets our high standards of excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Heart, label: 'Handcrafted', value: '100%' },
                  { icon: Award, label: 'Premium Quality', value: 'Guaranteed' },
                  { icon: Users, label: 'Happy Customers', value: '10,000+' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <stat.icon className="w-8 h-8 text-[#C9A66B] mx-auto mb-2" />
                    <div className="font-serif text-[#5A4232] text-lg">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-serif text-[#5A4232] mb-8 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Selection',
                  description: 'We carefully select the finest natural ingredients and premium fragrances.',
                  image: 'https://images.unsplash.com/photo-1602521879205-9e37c77c3077?q=80&w=2940&auto=format&fit=crop',
                },
                {
                  title: 'Crafting',
                  description: 'Each candle is hand-poured with attention to detail and quality.',
                  image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=2940&auto=format&fit=crop',
                },
                {
                  title: 'Testing',
                  description: 'Rigorous quality control ensures the perfect burn and fragrance.',
                  image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=2940&auto=format&fit=crop',
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-[#5A4232] text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;