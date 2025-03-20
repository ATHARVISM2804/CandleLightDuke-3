import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import ContactSlider from './components/ContactSlider';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Collections from './components/Collections';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import About from './pages/About';
import FragranceGuide from './pages/FragranceGuide';
import CustomOrder from './pages/CustomOrder';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFF8F2]">
        <Navbar />
        <Cart />
        <ContactSlider />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/fragrance-guide" element={<FragranceGuide />} />
          <Route path="/custom-order" element={<CustomOrder />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Collections />
      <WhyChooseUs />
      <Testimonials />
      <Instagram />
    </main>
  );
};

export default App;