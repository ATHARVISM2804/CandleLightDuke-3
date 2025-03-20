import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CustomOrder = () => {
  const [formData, setFormData] = useState({
    fragrance: '',
    size: '8oz',
    container: 'glass',
    label: '',
    quantity: 1,
    specialInstructions: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pt-20 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-[#5A4232] mb-4">Custom Order</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create your perfect candle by customizing every detail, from fragrance to packaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#5A4232] font-serif mb-2">
                    Fragrance
                  </label>
                  <input
                    type="text"
                    name="fragrance"
                    value={formData.fragrance}
                    onChange={handleChange}
                    placeholder="Enter your desired fragrance"
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#5A4232] font-serif mb-2">
                    Size
                  </label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                  >
                    <option value="4oz">4 oz</option>
                    <option value="8oz">8 oz</option>
                    <option value="12oz">12 oz</option>
                    <option value="16oz">16 oz</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#5A4232] font-serif mb-2">
                    Container
                  </label>
                  <select
                    name="container"
                    value={formData.container}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                  >
                    <option value="glass">Glass</option>
                    <option value="ceramic">Ceramic</option>
                    <option value="metal">Metal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#5A4232] font-serif mb-2">
                    Custom Label Text
                  </label>
                  <input
                    type="text"
                    name="label"
                    value={formData.label}
                    onChange={handleChange}
                    placeholder="Enter text for your custom label"
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#5A4232] font-serif mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#5A4232] font-serif mb-2">
                    Special Instructions
                  </label>
                  <textarea
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any special requests or instructions?"
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C9A66B] text-white py-3 rounded-full hover:bg-[#5A4232] transition-colors"
                >
                  Submit Custom Order
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-serif text-[#5A4232] mb-4">Why Choose Custom?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#C9A66B]" />
                    <p className="text-gray-600">Create a unique fragrance blend tailored to your preferences</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#C9A66B]" />
                    <p className="text-gray-600">Choose from various container styles and sizes</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#C9A66B]" />
                    <p className="text-gray-600">Add personal touches with custom labels and packaging</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#C9A66B]" />
                    <p className="text-gray-600">Perfect for special events and gifting</p>
                  </li>
                </ul>
              </div>

              <div className="bg-[#5A4232] text-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-serif mb-4">Need Help?</h2>
                <p className="mb-4">
                  Our fragrance experts are here to help you create the perfect custom candle. Contact us for guidance and suggestions.
                </p>
                <button className="bg-white text-[#5A4232] px-6 py-2 rounded-full hover:bg-[#F5E9DA] transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomOrder;