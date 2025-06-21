import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import EngagementRing from './pages/EngagementRing';
import WeddingBend from './pages/WeddingBend';
import Location from './pages/Location';
import ContactUs from './pages/ContactUs';




function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [sidebarOpen]);

  return (

    <div className="flex flex-col min-h-screen">
      <Header isOpen={sidebarOpen} onMenuClick={() => setSidebarOpen(o => !o)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/evlilik-yuzugu" element={<EngagementRing />} />
          <Route path="/alyans" element={<WeddingBend />} />
          <Route path="/konum" element={<Location />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </div>

  );
}

export default App;
