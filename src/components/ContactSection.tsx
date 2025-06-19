import React from "react";
import ContactForm from "./ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <h2 className="section-title mb-12">{t('contact.title')}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">{t('contact.getInTouch')}</h3>
            <p className="mb-8">
              {t('contact.description')}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">{t('contact.locations')}</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">{t('contact.egypt')}</p>
                    <p>{t('contact.fayoumCairo')}</p>
                  </div>
                  <div>
                    <p className="font-medium">{t('contact.saudi')}</p>
                    <p>{t('contact.riyadh')}</p>
                  </div>
                  <div>
                    <p className="font-medium">{t('contact.uae')}</p>
                    <p>{t('contact.dubai')}</p>
                  </div>
                  
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">{t('contact.info')}</h4>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">{t('contact.email')}:</span>{" "}
                    info@e-businessgate.net
                  </p>
                  <p>
                    <span className="font-medium">{t('contact.phone')}:</span> +201050206655 
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/E.business.gate.companyfym/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
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
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
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
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
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
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
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
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
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
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
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
    className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
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
          </div>

          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-12 h-80 rounded-lg overflow-hidden">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3455.683841430101!2d30.85899!3d29.309047!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb5f916e5fc939b9!2z2YXYs9in2YUg2KfZhNin2YTZiNmE2YrYqSDYp9mE2KrZiNmF2KzZitip!5e0!3m2!1sar!2seg!4v1716989231809!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}