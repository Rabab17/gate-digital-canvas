import React from "react";
import ContactForm from "./ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <section id="contact" className="section-padding" dir={isArabic ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12 text-center">{t("contact.title")}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* العمود الأول */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{t("contact.getInTouch")}</h3>
            <p className="mb-8">{t("contact.description")}</p>

            <div className="space-y-6">
              {/* المواقع */}
<div>
  <h4 className="font-bold text-lg mb-2">{t("contact.locations")}</h4>
  <div className="space-y-4">
    {[
      { title: t("contact.egypt"), desc: t("contact.fayoumCairo") },
      { title: t("contact.saudi"), desc: t("contact.riyadh") },
      { title: t("contact.uae"), desc: t("contact.dubai") },
    ].map((loc, i) => (
      <div
        key={i}
        className={`flex items-start gap-2 ${
          isArabic ? "flex-row-reverse justify-end text-right" : "flex-row justify-start text-left"
        }`}
      >
        {/* أيقونة الموقع */}
        {!isArabic && (
          <svg
            className="w-5 h-5 text-primary mt-1 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}

        {/* النص */}
        <div>
          <p className="font-medium">{loc.title}</p>
          <p>{loc.desc}</p>
        </div>

        {/* أيقونة الموقع عند اللغة العربية */}
        {isArabic && (
          <svg
            className="w-5 h-5 text-primary mt-1 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </div>
    ))}
  </div>
</div>




              {/* معلومات الاتصال */}
             <div>
  <h4 className="font-bold text-lg mb-2">{t("contact.info")}</h4>
  <div className="space-y-2">
    {/* البريد الإلكتروني */}
    <div className={`flex items-center gap-2 ${isArabic ? "flex-row-reverse justify-end text-right" : "flex-row justify-start text-left"}`}>
      {!isArabic && (
        <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      )}

      <p>
        <span className="font-medium">{t("contact.email")}:</span> info@e-businessgate.net
      </p>

      {isArabic && (
        <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      )}
    </div>

    {/* رقم الهاتف */}
    <div className={`flex items-center gap-2 ${isArabic ? "flex-row-reverse justify-end text-right" : "flex-row justify-start text-left"}`}>
      {!isArabic && (
        <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      )}

      <p>
        <span className="font-medium">{t("contact.phone")}:</span> +201050206655
      </p>

      {isArabic && (
        <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      )}
    </div>
  </div>
</div>

            </div>
          </div>

          {/* العمود الثاني: نموذج الاتصال */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8" dir={isArabic ? "rtl" : "ltr"}>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* الخريطة */}
        <div className="mt-12 h-80 rounded-lg overflow-hidden">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.683841430101!2d31.2074709!3d30.0401836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb5f916e5fc939b9!2z2YXYs9in2YUg2KfZhNin2YTZiNmE2YrYqSDYp9mE2KrZiNmF2KzZitip!5e0!3m2!1sar!2seg!4v1716989231809!5m2!1sar!2seg"
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
