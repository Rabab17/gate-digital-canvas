
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavItem {
  label: string;
  href: string;
  key: string;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const navItems: NavItem[] = [
    { label: t('nav.home'), href: "#home", key: 'nav.home' },
    { label: t('nav.about'), href: "#about", key: 'nav.about' },
    { label: t('nav.services'), href: "#services", key: 'nav.services' },
    { label: t('nav.portfolio'), href: "#portfolio", key: 'nav.portfolio' },
    { label: t('nav.clients'), href: "#clients", key: 'nav.clients' },
    { label: t('nav.testimonials'), href: "#testimonials", key: 'nav.testimonials' },
    { label: t('nav.contact'), href: "#contact", key: 'nav.contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center group">
          <span className={`text-2xl font-bold text-primary transition-all duration-300 group-hover:scale-105 ${
            language === 'ar' ? 'font-arabic' : ''
          }`}>
            E-Business Gate
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className={`flex ${language === 'ar' ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
            {navItems.map((item, index) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="font-medium hover:text-primary transition-all duration-300 relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <div className={`flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className={`flex items-center md:hidden gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <ThemeToggle />
          <LanguageToggle />
          <button
            className="p-2 text-gray-600 dark:text-gray-300 transition-transform duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        mobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0'
      } bg-white dark:bg-gray-900 shadow-lg`}>
        <ul className="px-4 py-2">
          {navItems.map((item, index) => (
            <li key={item.key} className="py-2">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block font-medium hover:text-primary transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  transform: mobileMenuOpen ? 'translateX(0)' : `translateX(${language === 'ar' ? '20px' : '-20px'})`,
                  transition: 'all 0.3s ease'
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
