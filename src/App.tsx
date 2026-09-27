import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Features from "./components/Features";
import ProductShowcase from "./components/ProductShowcase";
import Integrations from "./components/Integrations";
import Analytics from "./components/Analytics";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <Features />
        <ProductShowcase />
        <Integrations />
        <Analytics />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
