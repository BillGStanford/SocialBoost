// app/page.js
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}
