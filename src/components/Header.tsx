import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoLight from "../assets/EBG logos-01.png";
import logoDark from "../assets/EBG logos-01.png";

interface NavItem {
  label: string;
  href: string;
  key: string;
  isExternal?: boolean;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

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

  // ✅ Scroll to section after navigating to home
  useEffect(() => {
    const scrollToId = sessionStorage.getItem("scrollToId");
    if (scrollToId && location.pathname === "/") {
      const interval = setInterval(() => {
        const element = document.getElementById(scrollToId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          sessionStorage.removeItem("scrollToId");
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [location]);

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
    const isHashLink = isExternal && href.startsWith("/#");
    const isSamePage = location.pathname === "/";
    const targetId = href.replace("/#", "");

    if (isHashLink) {
      if (isSamePage) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        sessionStorage.setItem("scrollToId", targetId);
        navigate("/");
      }
    }
  };

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
        style={{ direction: "ltr" }}
      >
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={isDarkMode ? logoDark : logoLight}
              alt="Logo"
              className="w-14 h-14 object-contain"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex flex-grow justify-center items-center">
          <ul className={`flex ${language === "ar" ? "flex-row-reverse" : ""} gap-1`}>
            {navItems.map((item, index) => (
              <li key={item.key} className="relative group">
                {item.isExternal ? (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, true);
                    }}
                    className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 relative group ${
                      location.pathname === item.href ||
                      (item.isExternal && location.hash === item.href.substring(1))
                        ? "text-primary font-bold underline bg-primary/10"
                        : "text-primary"
                    } hover:text-primary hover:bg-primary/10`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 relative group ${
                      location.pathname === item.href
                        ? "text-primary font-bold underline bg-primary/10"
                        : "text-primary"
                    } hover:text-primary hover:bg-primary/10`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
          <a
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("/#contact", true);
            }}
            className={`${
              !scrolled ? "bg-primary hover:bg-primary/90" : "bg-gradient-to-r from-primary to-accent"
            } text-white px-6 py-2 rounded-full font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 whitespace-nowrap`}
          >
            {t("Start Project")}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <LanguageToggle />
          <button
            className="p-2 text-primary transition-all duration-300 hover:scale-110 hover:bg-primary/10 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white shadow-xl border-t border-gray-200`}
      >
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
                  className={`block px-4 py-3 rounded-lg font-bold transition-all duration-300 ${
                    location.pathname === item.href ||
                    (item.isExternal && location.hash === item.href.substring(1))
                      ? "text-primary font-bold underline bg-primary/10"
                      : "text-primary"
                  } hover:bg-primary/10 hover:text-primary`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    transform: mobileMenuOpen
                      ? "translateX(0)"
                      : `translateX(${language === "ar" ? "20px" : "-20px"})`,
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-bold transition-all duration-300 ${
                    location.pathname === item.href
                      ? "text-primary font-bold underline bg-primary/10"
                      : "text-primary"
                  } hover:bg-primary/10 hover:text-primary`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    transform: mobileMenuOpen
                      ? "translateX(0)"
                      : `translateX(${language === "ar" ? "20px" : "-20px"})`,
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}

          <li className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center gap-4 mb-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/#contact", true);
              }}
              className={`inline-block w-full text-center ${
                !scrolled ? "bg-primary hover:bg-primary/90" : "bg-gradient-to-r from-primary to-accent"
              } text-white px-6 py-3 rounded-full font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 whitespace-nowrap`}
            >
              {t("Start Project")}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
