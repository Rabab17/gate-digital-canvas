// src/components/Header.tsx
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle"; // تأكد من المسار الصحيح
import { useLanguage } from "@/contexts/LanguageContext"; // تأكد من المسار الصحيح
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logoLight from '../assets/EBG logos-01.png'; // لوجو الوضع الفاتح
import logoDark from '../assets/EBG logos-01.png'; // لوجو الوضع الداكن

interface NavItem {
  label: string;
  href: string;
  key: string;
  isExternal?: boolean;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage(); // استخدام t و language من useLanguage
  const location = useLocation();

  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Keep HTML lang attribute for accessibility, but DO NOT set dir="rtl"
    document.documentElement.lang = language;

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [language]);

  const navItems: NavItem[] = [
    { label: t("nav.home"), href: "/", key: "nav.home" },
    { label: t("nav.about"), href: "/about", key: "nav.about" },
    { label: t("nav.services"), href: "/services", key: "nav.services" },
    { label: t("nav.portfolio"), href: "/projects", key: "nav.portfolio" },
    { label: t("nav.clients"), href: "/clients", key: "nav.clients" },
    { label: t("nav.testimonials"), href: "/#testimonials", key: "nav.testimonials", isExternal: true },
    { label: t("nav.contact"), href: "/ContactUs", key: "nav.contact" },
  ];

  const handleNavClick = (href: string, isExternal = false) => {
    setMobileMenuOpen(false);
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
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white backdrop-blur-md shadow-xl border-b border-gray-200/20"
          : "py-5 bg-white backdrop-blur-sm"
      }`}
    >
      <div
        className={`container mx-auto px-4 flex justify-between items-center ${
          language === "ar" ? "flex-row-reverse" : "flex-row"
        }`}
        style={{ direction: "ltr" }} // حافظ على هذا لضمان اتجاه العناصر في الهيدر
      >
        {/* اللوجو */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={isDarkMode ? logoDark : logoLight}
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <span
              className={`text-3xl font-bold ${!scrolled ? "text-[#D4AF37]" : "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"} transition-all duration-300 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {/* يمكن إضافة نص اللوجو هنا */}
            </span>
          </Link>
        </div>

        {/* قائمة التنقل لسطح المكتب */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className={`flex ${language === "ar" ? "flex-row-reverse" : ""} gap-1`}>
            {navItems.map((item, index) => {
              const isActive = (!item.isExternal && location.pathname === item.href) ||
                (item.isExternal && item.href.startsWith('/#') && location.hash === item.href.replace('/',''));
              return (
                <li key={item.key} className="relative group">
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href, true);
                      }}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group
                        ${isActive ? 'text-primary font-bold bg-primary/10' : (!scrolled ? 'text-[#D4AF37]' : 'text-gray-700 dark:text-gray-300')}
                        hover:text-primary hover:bg-primary/10`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group
                        ${isActive ? 'text-primary font-bold bg-primary/10' : (!scrolled ? 'text-[#D4AF37]' : 'text-gray-700 dark:text-gray-300')}
                        hover:text-primary hover:bg-primary/10`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* العناصر المساعدة */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageToggle />
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/#contact", true);
              }}
              className={`${!scrolled ? "bg-[#D4AF37] hover:bg-[#C5A028]" : "bg-gradient-to-r from-primary to-accent"} text-white px-6 py-2 rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 whitespace-nowrap`}
            >
              {t("Start Project")} 
            </a>
          </div>
        </nav>

        {/* قائمة الجوال - تظهر على الجانب الأيمن دائما */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <LanguageToggle /> {/* تم استخدام LanguageToggle هنا أيضًا */}
          <button
            className={`p-2 ${!scrolled ? "text-[#D4AF37]" : "text-gray-600 dark:text-gray-300"} transition-all duration-300 hover:scale-110 hover:bg-primary/10 rounded-lg`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* قائمة الجوال */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white shadow-xl border-t border-gray-200`}
      >
        <ul className="px-4 py-6 space-y-2">
          {navItems.map((item, index) => {
            const isActive = (!item.isExternal && location.pathname === item.href) ||
              (item.isExternal && item.href.startsWith('/#') && location.hash === item.href.replace('/',''));
            return (
              <li key={item.key}>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, true);
                    }}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300
                      ${isActive ? 'text-primary font-bold bg-primary/10' : (!scrolled ? 'text-[#D4AF37]' : 'text-gray-700 dark:text-gray-300')}
                      hover:bg-primary/10 hover:text-primary`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      transform: mobileMenuOpen
                        ? 'translateX(0)'
                        : `translateX(${language === 'ar' ? '20px' : '-20px'})`,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300
                      ${isActive ? 'text-primary font-bold bg-primary/10' : (!scrolled ? 'text-[#D4AF37]' : 'text-gray-700 dark:text-gray-300')}
                      hover:bg-primary/10 hover:text-primary`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      transform: mobileMenuOpen
                        ? 'translateX(0)'
                        : `translateX(${language === 'ar' ? '20px' : '-20px'})`,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}

          <li className={`pt-4 border-t border-gray-200 dark:border-gray-700`}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <ThemeToggle />
              <LanguageToggle /> {/* تم استخدام LanguageToggle هنا أيضًا */}
            </div>
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/#contact", true);
              }}
              className={`inline-block w-full text-center ${!scrolled ? "bg-[#D4AF37] hover:bg-[#C5A028]" : "bg-gradient-to-r from-primary to-accent"} text-white px-6 py-3 rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 whitespace-nowrap`}
            >
              {t("Start Project")} {/* استخدام دالة الترجمة t */}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
