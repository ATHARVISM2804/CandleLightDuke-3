import React from 'react';
import { motion } from 'framer-motion';
import { fragrances } from '../data/fragrances';

const FragranceGuide = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-[#5A4232] mb-4">Fragrance Guide</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the art of fragrance layering and learn about the complex notes that make up our signature scents.
            </p>
          </div>

          <div className="grid gap-8">
            {fragrances.map((fragrance) => (
              <motion.div
                key={fragrance.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={fragrance.image}
                      alt={fragrance.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-serif text-[#5A4232] mb-2">{fragrance.name}</h2>
                    <p className="text-gray-600 mb-4">{fragrance.description}</p>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-[#F5E9DA] text-[#5A4232] rounded-full text-sm">
                        {fragrance.mood}
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-serif text-[#5A4232] mb-2">Top Notes</h3>
                        <div className="flex flex-wrap gap-2">
                          {fragrance.topNotes.map((note, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[#C9A66B]/10 text-[#C9A66B] rounded-full text-sm"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-serif text-[#5A4232] mb-2">Middle Notes</h3>
                        <div className="flex flex-wrap gap-2">
                          {fragrance.middleNotes.map((note, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[#5A4232]/10 text-[#5A4232] rounded-full text-sm"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-serif text-[#5A4232] mb-2">Base Notes</h3>
                        <div className="flex flex-wrap gap-2">
                          {fragrance.baseNotes.map((note, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[#A8B5A2]/10 text-[#A8B5A2] rounded-full text-sm"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FragranceGuide;