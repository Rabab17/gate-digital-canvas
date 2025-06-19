import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

// استيراد الزر (تأكدي من المسار الصحيح حسب مشروعك)
import { Button } from "@/components/ui/button";

import logo1 from "../assets/الامراء-للسجاد.png";
import logo2 from "../assets/لوجو الحرمين.png";
import logo3 from "../assets/لوجو روزي كاربت.jpg";
import logo4 from "../assets/Hardees-Logo-2006.png";
import logo5 from "../assets/Americana.png";
import logo6 from "../assets/dc.png";
import logo7 from "../assets/masar logo - 2 (2).png";
import logo8 from "../assets/لوجو ميرميد.png";

import { useLanguage } from "@/contexts/LanguageContext";

export default function ClientsSection() {
  const { t, language } = useLanguage();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, [language]);

  const clients = [
    { name: "Microsoft", logo: logo1 },
    { name: "Google", logo: logo2 },
    { name: "Apple", logo: logo3 },
    { name: "Amazon", logo: logo4 },
    { name: "Tesla", logo: logo5 },
    { name: "Netflix", logo: logo6 },
    { name: "IBM", logo: logo7 },
    { name: "Oracle", logo: logo8 },
  ];

  return (
    <section id="clients" className="section-padding bg-white-50 dark:bg-gray-900">
      <div
        className="container mx-auto px-4"
        style={{ direction: language === "ar" ? "rtl" : "ltr" }}
      >
        <h2 className="section-title mb-12">{t("clients.title")}</h2>
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <p>{t("clients.subtitle")}</p>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          dir={language === "ar" ? "rtl" : "ltr"}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: language === "ar",
          }}
          speed={3000}
          allowTouchMove={false}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          style={{ pointerEvents: "none" }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
           <div className="flex-shrink-0 w-40 h-24 rounded-lg bg-white shadow-md flex items-center justify-center p-4 transition-all duration-300">
  <img
    src={client.logo} 
    alt={client.name}
    className="max-w-full max-h-full"
  />
</div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8">
          <Link to="/clients">
            <Button className={`btn-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'عرض جميع العملاء' : 'View All Clients'}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
