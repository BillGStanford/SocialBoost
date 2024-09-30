import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Founders from '../components/Founders';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <Founders />
      <Footer />
    </div>
  );
}