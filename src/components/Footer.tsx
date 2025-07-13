import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ${language === 'ar' ? 'text-right' : ''}`}>
          <div>
            <h3 className={`text-xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              E-Business Gate
            </h3>
            <p className={`mb-4 text-gray-400 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/E.business.gate.companyfym/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/e_business_gate/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@ebgebusinessgate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M232 80.6a55.9 55.9 0 01-40-16.6V40a8 8 0 00-8-8h-32a8 8 0 00-8 8v120a32 32 0 11-32-32 8 8 0 000-16 48 48 0 1048 48V136a71.8 71.8 0 0040 12c4.4 0 8-3.6 8-8v-32a8 8 0 00-8-8zm-8 32a56.1 56.1 0 01-40-16.6V48h16v24a8 8 0 008 8h24z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="https://x.com/EbgGate27786"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                aria-label="X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.5 3h3l5 6.5L17.5 3h3l-6.5 8.5L21 21h-3l-5-6.5L6.5 21h-3l6.5-9L4.5 3z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/ebgebusinessgate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>
              {/* Behance */}
              <a
                href="https://www.behance.net/ebgebusinessgate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                aria-label="Behance"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h7.5a3.5 3.5 0 012.45 5.95A3.5 3.5 0 0112 17H4V4zm2 2v3h3.5a1.5 1.5 0 100-3H6zm0 5v4h4a2 2 0 100-4H6zm12-3h-5v1.5h5V8zm0 2c2 0 4 1 4 4s-2 4-4 4-4-1-4-4h2c0 1 0 2 2 2s2-1 2-2-1-2-2-2-2 .5-2 1h-2c0-2 2-3 4-3z" />
                </svg>
              </a>
              <div className="flex gap-4">
                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/201050206655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-green-500 hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M12 2.1A9.9 9.9 0 002.1 12c0 1.75.46 3.46 1.33 4.97L2 22l5.13-1.41A9.9 9.9 0 1012 2.1zm0 18.1c-1.61 0-3.18-.43-4.54-1.25l-.32-.19-3.11.85.83-3.06-.2-.33A7.9 7.9 0 1112 20.2zm4.36-5.6c-.24-.12-1.41-.7-1.62-.78-.22-.08-.38-.12-.54.13-.16.24-.62.78-.76.94-.14.16-.28.18-.52.08a6.13 6.13 0 01-2.01-1.25 7.6 7.6 0 01-1.36-1.68c-.15-.25-.02-.38.11-.5.12-.12.27-.31.4-.47.13-.16.17-.28.25-.47.08-.19.04-.34-.02-.48-.07-.14-.56-1.36-.77-1.87-.2-.48-.41-.41-.56-.42-.15-.01-.32-.01-.5-.01-.18 0-.43.06-.66.31-.23.25-.87.82-.87 2s.9 2.31 1.03 2.47c.13.16 1.78 2.72 4.32 3.71.6.23 1.07.37 1.44.48.6.19 1.14.17 1.56.1.47-.08 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.07-.11-.23-.17-.48-.29z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className={`text-xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('footer.services')}
            </h3>
            <ul className={`space-y-2 text-gray-400 ${language === 'ar' ? 'font-arabic' : ''}`}>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  {t('services.digitalMarketing.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  {t('services.seo.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  {t('services.webDevelopment.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  {t('services.mobileApp.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  {t('services.branding.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  {t('services.erp.title')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('footer.quickLinks')}
            </h3>
            <ul className={`space-y-2 text-gray-400 ${language === 'ar' ? 'font-arabic' : ''}`}>
              <li>
                <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">{t('nav.portfolio')}</Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-white transition-colors">{t('nav.clients')}</Link>
              </li>
              <li>
                <a href="/#testimonials" className="hover:text-white transition-colors">{t('nav.testimonials')}</a>
              </li>
              <li>
                <Link to="/ContactUs" className="hover:text-white transition-colors">{t('nav.contact')}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('footer.contact')}
            </h3>
            <ul className={`space-y-4 text-gray-400 ${language === 'ar' ? 'font-arabic' : ''}`}>

              {/* Location - Egypt */}
              <li className={`flex items-center gap-2 ${language === 'ar' ? 'justify-end text-right' : 'text-left'}`}>
                {language === 'ar' ? (
                  <>
                    <p>مصر (القاهرة / ١٥ شارع مصدق، الجيزة)</p>
                    <svg className="w-5 h-5 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <p>Egypt (Cairo / 15 Mosaddak Street, Giza)</p>
                  </>
                )}
              </li>

              {/* Location - Saudi */}
              <li className={`flex items-center gap-2 ${language === 'ar' ? 'justify-end text-right' : 'text-left'}`}>
                {language === 'ar' ? (
                  <>
                    <p>السعودية (الرياض)</p>
                    <svg className="w-5 h-5 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <p>Saudi Arabia (Riyadh)</p>
                  </>
                )}
              </li>

              {/* Location - UAE */}
              <li className={`flex items-center gap-2 ${language === 'ar' ? 'justify-end text-right' : 'text-left'}`}>
                {language === 'ar' ? (
                  <>
                    <p>الإمارات (دبي)</p>
                    <svg className="w-5 h-5 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <p>UAE (Dubai)</p>
                  </>
                )}
              </li>

              {/* Email */}
              <li className={`flex items-center gap-2 ${language === 'ar' ? 'justify-end text-right' : 'text-left'}`}>
                {language === 'ar' ? (
                  <>
                    <a href="mailto:info@e-businessgate.net" className="hover:text-white transition-colors">
                      info@e-businessgate.net
                    </a>
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@e-businessgate.net" className="hover:text-white transition-colors">
                      info@e-businessgate.net
                    </a>
                  </>
                )}
              </li>

              {/* Phone */}
              <li className={`flex items-center gap-2 ${language === 'ar' ? 'justify-end text-right' : 'text-left'}`}>
                {language === 'ar' ? (
                  <>
                    <a href="tel:+201050206655" className="hover:text-white transition-colors">
                      +201050206655
                    </a>
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+201050206655" className="hover:text-white transition-colors">
                      +201050206655
                    </a>
                  </>
                )}
              </li>

            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center items-center">
            <p className={`text-gray-500 text-sm ${language === 'ar' ? 'font-arabic' : ''}`}>
              &copy; {new Date().getFullYear()} E-Business Gate. {t('footer.allRightsReserved')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}