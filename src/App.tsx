import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './lib/context';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SignatureCollections from './components/SignatureCollections';
import PropertySearch from './components/PropertySearch';
import FeaturedProperties from './components/FeaturedProperties';
import LuxuryLifestyle from './components/LuxuryLifestyle';
import WhyAurevia from './components/WhyAurevia';
import NeighborhoodExplorer from './components/NeighborhoodExplorer';
import EliteAdvisors from './components/EliteAdvisors';
import InvestmentHub from './components/InvestmentHub';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import PremiumCTA from './components/PremiumCTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import StickyContact from './components/StickyContact';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-black-luxury">
          <Navbar />
          <main>
            <HeroSection />
            <SignatureCollections />
            <PropertySearch />
            <FeaturedProperties />
            <LuxuryLifestyle />
            <WhyAurevia />
            <NeighborhoodExplorer />
            <EliteAdvisors />
            <InvestmentHub />
            <Testimonials />
            <BlogSection />
            <PremiumCTA />
            <ContactSection />
          </main>
          <Footer />
          <BackToTop />
          <StickyContact />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
