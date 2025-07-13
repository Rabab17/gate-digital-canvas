import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { Download, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

 const downloadPortfolio = () => {
  let fileId = "";

  if (language === "ar") {
    fileId = "1xO_DZ9RsEt4gcC0puF2tCdIUDrriz5za"; // رابط العربي
  } else {
    fileId = "1KDOeslKKn-Gl77GYk-9GTQS--1V5U4nf"; // رابط الإنجليزي
  }

  const link = document.createElement("a");
  link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
  link.download = "E-Business-Gate-Portfolio.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  console.log("Portfolio download initiated for language:", language);
};

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-black/80 to-blue-800/90 z-10"></div>

        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="floating-circle"
              style={{
                width: `${30 + Math.random() * 80}px`,
                height: `${30 + Math.random() * 80}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-accent/30 rounded-full animate-float"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + i * 6}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${4 + i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-20 text-center text-white">
        <div className=" mb-8"></div>

        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block bg-gradient-to-r from-accent to-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold tracking-wide">
            {language === "ar"
              ? "شركة رائدة في الابتكار الرقمي"
              : "Leading Digital Innovation Company"}
          </span>
        </div>

        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up text-glow ${
            language === "ar" ? "font-arabic leading-tight" : ""
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          {language === "ar" ? (
            <>
              <span className="block text-accent mb-2">بوابة الأعمال الإلكترونية</span>
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                تمكين الشركات من خلال الابتكار الرقمي
              </span>
            </>
          ) : (
            <>
              <span className="block text-accent mb-2">E-Business Gate</span>
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Empowering Businesses through Digital Innovation
              </span>
            </>
          )}
        </h1>

        <h2
          className={`text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto animate-fade-in-up opacity-90 font-light ${
            language === "ar" ? "font-arabic leading-relaxed" : ""
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          {t("hero.subtitle")}
        </h2>

        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 cta-buttons-row ${
            language === "ar" ? "sm:flex-row-reverse" : ""
          }`}
        >
          <Button
            onClick={scrollToServices}
            className="group shimmer-button bg-accent hover:bg-yellow-400 text-gray-900 font-bold px-8 py-6 text-lg rounded-full animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-2xl transform-gpu min-w-[200px]"
            style={{ animationDelay: "0.7s" }}
          >
            {language === "ar" ? "اطلب خدمة الآن" : t("hero.cta")}
            <ArrowRight
              className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                language === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""
              }`}
            />
          </Button>

          <Button
            onClick={downloadPortfolio}
            variant="outline"
            className="group bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-6 text-lg rounded-full animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px]"
            style={{ animationDelay: "0.9s" }}
          >
            <Download
              className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                language === "ar" ? "ml-2" : "mr-2"
              }`}
            />
            {language === "ar" ? "تحميل معرض أعمالنا" : "Download Our Portfolio"}
          </Button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up pb-12"
          style={{ animationDelay: "1.1s" }}
        >
          {[
            {
              icon: "🚀",
              title: language === "ar" ? "نمو متسارع" : "Fast Growth",
              desc: language === "ar" ? "زيادة في الأداء بنسبة 300%" : "300% Performance Boost",
            },
            {
              icon: "🎯",
              title: language === "ar" ? "دقة متناهية" : "Precision",
              desc: language === "ar" ? "حلول مصممة خصيصًا لكل عميل" : "Tailored Solutions",
            },
            {
              icon: "🏆",
              title: language === "ar" ? "جودة متميزة" : "Excellence",
              desc: language === "ar" ? "أكثر من 500 مشروع ناجح" : "500+ Successful Projects",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${1.3 + index * 0.2}s` }}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className={`font-bold text-lg mb-2 ${language === "ar" ? "font-arabic" : ""}`}>
                {feature.title}
              </h3>
              <p className={`text-sm opacity-80 ${language === "ar" ? "font-arabic" : ""}`}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
