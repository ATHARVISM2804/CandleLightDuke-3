import React from 'react';
import { motion } from 'framer-motion';
import { Instagram as InstagramIcon } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1596433809252-901acb9ae0b7?q=80&w=2940&auto=format&fit=crop',
  },
];

const Instagram = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-12">
            <InstagramIcon className="w-8 h-8 text-[#C9A66B]" />
            <h2 className="text-4xl font-serif text-center text-[#5A4232]">Follow Us on Instagram</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <div key={post.id} className="relative aspect-square group overflow-hidden">
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <InstagramIcon className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#5A4232] hover:text-[#C9A66B] transition-colors"
            >
              <span>@candlelightduke</span>
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;