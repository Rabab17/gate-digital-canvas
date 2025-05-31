
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Globe, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  key: string;
  isExternal?: boolean;
  subItems?: { label: string; href: string; key: string }[];
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t, language } = useLanguage();
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: t('nav.home'), href: "/", key: 'nav.home' },
    { 
      label: t('nav.about'), 
      href: "/about", 
      key: 'nav.about',
      subItems: [
        { label: language === 'ar' ? 'من نحن' : 'About Us', href: "/about", key: 'about.main' },
        { label: language === 'ar' ? 'فريقنا' : 'Our Team', href: "/about#team", key: 'about.team' }
      ]
    },
    { label: t('nav.services'), href: "/services", key: 'nav.services' },
    { label: t('nav.portfolio'), href: "/projects", key: 'nav.portfolio' },
    { label: t('nav.clients'), href: "/clients", key: 'nav.clients' },
    { label: t('nav.testimonials'), href: "/#testimonials", key: 'nav.testimonials', isExternal: true },
    { label: t('nav.contact'), href: "/#contact", key: 'nav.contact', isExternal: true },
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

  const handleNavClick = (href: string, isExternal: boolean = false) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    
    if (isExternal && href.startsWith("/#")) {
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        const elementId = href.substring(2);
        const element = document.querySelector(`#${elementId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-gray-200/20 dark:border-gray-700/20"
          : "py-5 bg-gradient-to-r from-transparent via-black/10 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="relative">
            <span className={`text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105 ${
              language === 'ar' ? 'font-arabic' : ''
            }`}>
              E-Business Gate
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <ul className={`flex ${language === 'ar' ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
            {navItems.map((item, index) => (
              <li key={item.key} className="relative group">
                {item.subItems ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.key)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 px-4 py-2 rounded-lg font-medium hover:text-primary hover:bg-primary/10 transition-all duration-300 relative group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </button>
                    
                    {activeDropdown === item.key && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.key}
                            to={subItem.href}
                            className="block px-4 py-3 text-sm hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                            onClick={() => handleNavClick(subItem.href)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.isExternal ? (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, true);
                    }}
                    className="px-4 py-2 rounded-lg font-medium hover:text-primary hover:bg-primary/10 transition-all duration-300 relative group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="px-4 py-2 rounded-lg font-medium hover:text-primary hover:bg-primary/10 transition-all duration-300 relative group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          <div className={`flex items-center gap-3 ml-6 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <ThemeToggle />
            <LanguageToggle />
            <Link 
              to="/#contact"
              className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              {language === 'ar' ? 'ابدأ مشروعك' : 'Start Project'}
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className={`flex items-center lg:hidden gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <ThemeToggle />
          <LanguageToggle />
          <button
            className="p-2 text-gray-600 dark:text-gray-300 transition-all duration-300 hover:scale-110 hover:bg-primary/10 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
        mobileMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0'
      } bg-white dark:bg-gray-900 shadow-xl border-t border-gray-200 dark:border-gray-700`}>
        <ul className="px-4 py-6 space-y-2">
          {navItems.map((item, index) => (
            <li key={item.key}>
              {item.isExternal ? (
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, true);
                  }}
                  className="block px-4 py-3 rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    transform: mobileMenuOpen ? 'translateX(0)' : `translateX(${language === 'ar' ? '20px' : '-20px'})`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    transform: mobileMenuOpen ? 'translateX(0)' : `translateX(${language === 'ar' ? '20px' : '-20px'})`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          <li className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <Link 
              to="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-medium text-center hover:scale-105 transition-all duration-300"
            >
              {language === 'ar' ? 'ابدأ مشروعك' : 'Start Project'}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
