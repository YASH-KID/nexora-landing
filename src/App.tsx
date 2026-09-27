import { useState } from "react";
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
import CommandPalette from "./components/CommandPalette";
import LoginModal from "./components/LoginModal";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <Header onOpenSearch={() => setPaletteOpen(true)} onOpenLogin={() => setLoginOpen(true)} theme={theme} toggleTheme={toggleTheme} />
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
      <CommandPalette
        open={paletteOpen}
        setOpen={setPaletteOpen}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenLogin={() => setLoginOpen(true)}
      />
      <LoginModal open={loginOpen} setOpen={setLoginOpen} />
    </>
  );
}

export default App;
