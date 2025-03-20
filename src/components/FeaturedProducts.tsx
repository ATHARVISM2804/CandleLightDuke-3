import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Vanilla Dreams',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?q=80&w=2940&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 2,
    name: 'Lavender Mist',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1596433809252-901acb9ae0b7?q=80&w=2940&auto=format&fit=crop',
    rating: 4,
  },
  {
    id: 3,
    name: 'Ocean Breeze',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1599446794254-16ca3df5a0bb?q=80&w=2940&auto=format&fit=crop',
    rating: 5,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif text-center text-[#5A4232] mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-xl font-serif text-white">{product.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-white font-semibold">${product.price}</p>
                      <div className="flex">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#C9A66B] fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;