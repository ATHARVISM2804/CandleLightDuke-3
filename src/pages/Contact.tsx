import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <h1 className="text-4xl font-serif text-[#5A4232] mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#5A4232] font-serif mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#5A4232] font-serif mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#5A4232] font-serif mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#5A4232] font-serif mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C9A66B] text-white py-3 rounded-full hover:bg-[#5A4232] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-serif text-[#5A4232] mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#C9A66B]" />
                    <div>
                      <h3 className="font-serif text-[#5A4232] mb-1">Visit Us</h3>
                      <p className="text-gray-600">123 Candle Street, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#C9A66B]" />
                    <div>
                      <h3 className="font-serif text-[#5A4232] mb-1">Call Us</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#C9A66B]" />
                    <div>
                      <h3 className="font-serif text-[#5A4232] mb-1">Email Us</h3>
                      <p className="text-gray-600">hello@candlelightduke.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#C9A66B]" />
                    <div>
                      <h3 className="font-serif text-[#5A4232] mb-1">Opening Hours</h3>
                      <p className="text-gray-600">Mon - Fri: 9am - 6pm</p>
                      <p className="text-gray-600">Sat - Sun: 10am - 4pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#5A4232] text-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-serif mb-4">FAQ</h2>
                <p className="mb-4">
                  Find quick answers to frequently asked questions about our products and services.
                </p>
                <button className="bg-white text-[#5A4232] px-6 py-2 rounded-full hover:bg-[#F5E9DA] transition-colors">
                  View FAQ
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;