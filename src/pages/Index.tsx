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
import LoadingScreen from "@/components/LoadingScreen";
import MouseTracker from "@/components/MouseTracker";
import WhatsApp from "@/components/whatSap";

const Index = () => {
  const myWhatsappNumber = "201050206655";

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');

      parallaxElements.forEach((element) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <LoadingScreen />
      <MouseTracker />
      <div className="bg-white dark:bg-gray-950 min-h-screen transition-all duration-300 ">
        <Header />
        <HeroSection />

        <AnimationEffect animationType="slideUp" delay={100}>
          <AboutSection />
        </AnimationEffect>

        <AnimationEffect animationType="stagger" delay={200}>
          <ServicesSection />
        </AnimationEffect>

        <AnimationEffect animationType="slideLeft" delay={100}>
          <ClientsSection />
        </AnimationEffect>

        <AnimationEffect animationType="scale" delay={150}>
          <PortfolioSection />
        </AnimationEffect>

        <AnimationEffect animationType="slideRight" delay={100}>
          <TestimonialsSection />
        </AnimationEffect>

        <AnimationEffect animationType="slideUp" delay={200}>
          <ContactSection />
        </AnimationEffect>

        <Footer />

    {/* ************ هذا هو الجزء الأهم للتحكم في الموضع والترتيب ************ */}
        <div className="fixed bottom-4 right-4 flex flex-row items-center space-x-2 z-50">
          {/* تأكد من تمرير phoneNumber هنا */}
          {/* ScrollToTop */}
          {/* <ScrollToTop /> */}
          <WhatsApp  />
       
        </div>
      </div>
    </>
  );
};

export default Index;