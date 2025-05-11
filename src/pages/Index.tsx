
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimationEffect from "@/components/AnimationEffect";

const Index = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Header />
      <HeroSection />
      
      <AnimationEffect>
        <AboutSection />
      </AnimationEffect>
      
      <AnimationEffect>
        <ServicesSection />
      </AnimationEffect>
      
      <AnimationEffect>
        <ClientsSection />
      </AnimationEffect>
      
      <AnimationEffect>
        <PortfolioSection />
      </AnimationEffect>
      
      <AnimationEffect>
        <TestimonialsSection />
      </AnimationEffect>
      
      <AnimationEffect>
        <ContactSection />
      </AnimationEffect>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
