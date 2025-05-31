
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface Client {
  id: number;
  name: string;
  nameAr: string;
  logo: string;
  industry: string;
  industryAr: string;
  description: string;
  descriptionAr: string;
  website?: string;
}

const clients: Client[] = [
  // Medical
  {
    id: 1,
    name: "HealthCare Plus",
    nameAr: "هيلث كير بلس",
    logo: "https://via.placeholder.com/200x100?text=HealthCare+Plus",
    industry: "Medical",
    industryAr: "طبي",
    description: "Leading healthcare provider with multiple clinics",
    descriptionAr: "مقدم رعاية صحية رائد مع عدة عيادات",
    website: "#"
  },
  {
    id: 2,
    name: "MedTech Solutions",
    nameAr: "حلول التقنية الطبية",
    logo: "https://via.placeholder.com/200x100?text=MedTech+Solutions",
    industry: "Medical",
    industryAr: "طبي",
    description: "Medical technology and equipment supplier",
    descriptionAr: "مورد التكنولوجيا والمعدات الطبية",
    website: "#"
  },
  // Educational
  {
    id: 3,
    name: "Future Academy",
    nameAr: "أكاديمية المستقبل",
    logo: "https://via.placeholder.com/200x100?text=Future+Academy",
    industry: "Educational",
    industryAr: "تعليمي",
    description: "Modern educational institution for all ages",
    descriptionAr: "مؤسسة تعليمية حديثة لجميع الأعمار",
    website: "#"
  },
  {
    id: 4,
    name: "Smart Learning Hub",
    nameAr: "مركز التعلم الذكي",
    logo: "https://via.placeholder.com/200x100?text=Smart+Learning",
    industry: "Educational",
    industryAr: "تعليمي",
    description: "Online learning platform and courses",
    descriptionAr: "منصة التعلم عبر الإنترنت والدورات",
    website: "#"
  },
  // Restaurants & Cafes
  {
    id: 5,
    name: "Gourmet Delights",
    nameAr: "لذائذ الذواقة",
    logo: "https://via.placeholder.com/200x100?text=Gourmet+Delights",
    industry: "Restaurants & Cafes",
    industryAr: "مطاعم ومقاهي",
    description: "Fine dining restaurant chain",
    descriptionAr: "سلسلة مطاعم فاخرة",
    website: "#"
  },
  {
    id: 6,
    name: "Coffee Corner",
    nameAr: "ركن القهوة",
    logo: "https://via.placeholder.com/200x100?text=Coffee+Corner",
    industry: "Restaurants & Cafes",
    industryAr: "مطاعم ومقاهي",
    description: "Specialty coffee shop with multiple locations",
    descriptionAr: "محل قهوة متخصص مع مواقع متعددة",
    website: "#"
  },
  // Fashion & Apparel
  {
    id: 7,
    name: "Style Boutique",
    nameAr: "بوتيك الأناقة",
    logo: "https://via.placeholder.com/200x100?text=Style+Boutique",
    industry: "Fashion & Apparel",
    industryAr: "أزياء وملابس",
    description: "Premium fashion and clothing brand",
    descriptionAr: "علامة تجارية أزياء وملابس راقية",
    website: "#"
  },
  {
    id: 8,
    name: "Urban Threads",
    nameAr: "خيوط حضرية",
    logo: "https://via.placeholder.com/200x100?text=Urban+Threads",
    industry: "Fashion & Apparel",
    industryAr: "أزياء وملابس",
    description: "Trendy streetwear and casual fashion",
    descriptionAr: "أزياء الشارع العصرية والأزياء الكاجوال",
    website: "#"
  },
  // Perfume & Cosmetics
  {
    id: 9,
    name: "Luxury Scents",
    nameAr: "العطور الفاخرة",
    logo: "https://via.placeholder.com/200x100?text=Luxury+Scents",
    industry: "Perfume & Cosmetics",
    industryAr: "عطور ومستحضرات تجميل",
    description: "High-end perfumes and fragrances",
    descriptionAr: "عطور وروائح راقية",
    website: "#"
  },
  {
    id: 10,
    name: "Beauty Elements",
    nameAr: "عناصر الجمال",
    logo: "https://via.placeholder.com/200x100?text=Beauty+Elements",
    industry: "Perfume & Cosmetics",
    industryAr: "عطور ومستحضرات تجميل",
    description: "Professional cosmetics and beauty products",
    descriptionAr: "مستحضرات التجميل المهنية ومنتجات الجمال",
    website: "#"
  },
  // Electronics & Appliances
  {
    id: 11,
    name: "TechMart",
    nameAr: "تك مارت",
    logo: "https://via.placeholder.com/200x100?text=TechMart",
    industry: "Electronics & Appliances",
    industryAr: "إلكترونيات وأجهزة",
    description: "Electronics retailer and technology solutions",
    descriptionAr: "بائع تجزئة الإلكترونيات وحلول التكنولوجيا",
    website: "#"
  },
  {
    id: 12,
    name: "Smart Home Solutions",
    nameAr: "حلول المنزل الذكي",
    logo: "https://via.placeholder.com/200x100?text=Smart+Home",
    industry: "Electronics & Appliances",
    industryAr: "إلكترونيات وأجهزة",
    description: "Home automation and smart appliances",
    descriptionAr: "أتمتة المنزل والأجهزة الذكية",
    website: "#"
  }
];

const industries = [
  { en: "All", ar: "الكل" },
  { en: "Medical", ar: "طبي" },
  { en: "Educational", ar: "تعليمي" },
  { en: "Restaurants & Cafes", ar: "مطاعم ومقاهي" },
  { en: "Fashion & Apparel", ar: "أزياء وملابس" },
  { en: "Perfume & Cosmetics", ar: "عطور ومستحضرات تجميل" },
  { en: "Electronics & Appliances", ar: "إلكترونيات وأجهزة" }
];

export default function AllClients() {
  const { t, language } = useLanguage();
  const [activeIndustry, setActiveIndustry] = useState("All");

  const filteredClients = activeIndustry === "All" 
    ? clients 
    : clients.filter(client => client.industry === activeIndustry);

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-4xl mx-auto ${language === 'ar' ? 'text-right' : ''}`}>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'عملاؤنا' : 'Our Clients'}
            </h1>
            <p className={`text-xl mb-8 text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
              {language === 'ar'
                ? 'نفخر بشراكتنا مع شركات رائدة في مختلف الصناعات'
                : 'We are proud of our partnerships with leading companies across various industries'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-white dark:bg-gray-900 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className={`flex flex-wrap justify-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            {industries.map((industry) => (
              <button
                key={industry.en}
                onClick={() => setActiveIndustry(industry.en)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIndustry === industry.en
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                } ${language === 'ar' ? 'font-arabic' : ''}`}
              >
                {language === 'ar' ? industry.ar : industry.en}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredClients.map((client) => (
              <div key={client.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-32 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-4">
                  <img
                    src={client.logo}
                    alt={language === 'ar' ? client.nameAr : client.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className={`p-6 ${language === 'ar' ? 'text-right' : ''}`}>
                  <h3 className={`text-lg font-bold mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' ? client.nameAr : client.name}
                  </h3>
                  <p className={`text-primary text-sm font-medium mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' ? client.industryAr : client.industry}
                  </p>
                  <p className={`text-gray-600 dark:text-gray-300 text-sm mb-4 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
                    {language === 'ar' ? client.descriptionAr : client.description}
                  </p>
                  {client.website && (
                    <a
                      href={client.website}
                      className={`inline-block text-primary hover:text-primary/80 text-sm font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {language === 'ar' ? 'زيارة الموقع' : 'Visit Website'} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredClients.length === 0 && (
            <div className={`text-center py-12 ${language === 'ar' ? 'text-right' : ''}`}>
              <p className={`text-gray-500 text-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'لا توجد عملاء في هذه الفئة' : 'No clients found in this category'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-3xl mx-auto ${language === 'ar' ? 'text-right' : ''}`}>
            <h2 className={`text-3xl font-bold mb-6 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'انضم إلى عملائنا الناجحين' : 'Join Our Successful Clients'}
            </h2>
            <p className={`text-xl mb-8 text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
              {language === 'ar'
                ? 'دعنا نساعدك في تحقيق أهدافك الرقمية وبناء حضور قوي عبر الإنترنت'
                : 'Let us help you achieve your digital goals and build a strong online presence'
              }
            </p>
            <Button className={`btn-primary text-lg px-8 py-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'ابدأ مشروعك معنا' : 'Start Your Project With Us'}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
