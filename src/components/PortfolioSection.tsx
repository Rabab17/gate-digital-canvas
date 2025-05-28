
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

export default function PortfolioSection() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(t('portfolio.categories.all'));

  const categories = [
    t('portfolio.categories.all'),
    t('portfolio.categories.ecommerce'),
    t('portfolio.categories.corporate'),
    t('portfolio.categories.mobileApps')
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: t('portfolio.projects.ecommercePlatform'),
      category: t('portfolio.categories.ecommerce'),
      image: "https://via.placeholder.com/600x400?text=E-commerce+Project",
      link: "#",
    },
    {
      id: 2,
      title: t('portfolio.projects.corporateWebsite'),
      category: t('portfolio.categories.corporate'),
      image: "https://via.placeholder.com/600x400?text=Corporate+Website",
      link: "#",
    },
    {
      id: 3,
      title: t('portfolio.projects.foodDelivery'),
      category: t('portfolio.categories.mobileApps'),
      image: "https://via.placeholder.com/600x400?text=Mobile+App",
      link: "#",
    },
    {
      id: 4,
      title: t('portfolio.projects.fashionStore'),
      category: t('portfolio.categories.ecommerce'),
      image: "https://via.placeholder.com/600x400?text=Fashion+Store",
      link: "#",
    },
    {
      id: 5,
      title: t('portfolio.projects.financialDashboard'),
      category: t('portfolio.categories.corporate'),
      image: "https://via.placeholder.com/600x400?text=Financial+Dashboard",
      link: "#",
    },
    {
      id: 6,
      title: t('portfolio.projects.fitnessApp'),
      category: t('portfolio.categories.mobileApps'),
      image: "https://via.placeholder.com/600x400?text=Fitness+App",
      link: "#",
    },
  ];

  const filteredProjects =
    activeCategory === t('portfolio.categories.all')
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className={`section-title mb-12 ${language === 'ar' ? 'font-arabic' : ''}`}>
          {t('portfolio.title')}
        </h2>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-2 mb-8 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              } ${language === 'ar' ? 'font-arabic' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className={`text-white text-xl font-bold ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {project.title}
                </h3>
                <p className={`text-gray-200 text-sm mb-4 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {project.category}
                </p>
                <a
                  href={project.link}
                  className={`inline-block px-4 py-2 bg-accent text-gray-800 rounded-md font-medium text-sm ${language === 'ar' ? 'font-arabic' : ''}`}
                >
                  {t('portfolio.viewProject')}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className={`btn-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('portfolio.seeFullPortfolio')}
          </Button>
        </div>
      </div>
    </section>
  );
}
