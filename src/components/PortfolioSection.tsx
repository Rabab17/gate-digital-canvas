import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

export default function PortfolioSection() {
  const { t, language } = useLanguage();

  // عدلنا الفئات هنا
  const categories = [
    t('portfolio.categories.all'),
    "Digital Marketing",
    "Web Development",
    "Branding",
    "Graphic Design",
  ];

  // عدلنا المشاريع بحيث تصنف تحت الفئات الجديدة
  const projects: Project[] = [
    {
      id: 1,
      title: "Zoom Optics - Social Media Designs",
      category: "Digital Marketing",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/85a804226492613.682f30950fc36.jpg",
      link: "https://www.behance.net/gallery/226492613/Zoom-Social-Media-Glasses",
    },
    {
      id: 2,
      title: "Abu Aya Grills - Social Media",
      category: "Branding",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/fd0db0226481611.682f10c120687.jpg",
      link: "https://www.behance.net/gallery/226481611/Abu-Aya-Grills-Social-Media",
    },
    {
      id: 3,
      title: "Bab Rizq Restaurant - Social Media",
      category: "Graphic Design",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/58abbf226485675.682f1cb83c268.jpg",
      link: "https://www.behance.net/gallery/226485675/Bab-Rizq-Restaurant-Social-Media",
    },
    {
      id: 4,
      title: "Elie Clinic - Social Media",
      category: "Digital Marketing",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/bc189c226486471.682f1edd786ec.jpg",
      link: "https://www.behance.net/gallery/226486471/Elie-Clinic-Social-Media",
    },
    {
      id: 5,
      title: "Intense Perfume House - Social Media",
      category: "Branding",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/64ef35225762787.682328dd627be.jpg",
      link: "https://www.behance.net/gallery/225762787/Social-media-intense",
    },
    {
      id: 6,
      title: "Al Tazaj Restaurant - Social Media",
      category: "Graphic Design",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/a986a8226487763.682f22ad5e735.jpg",
      link: "https://www.behance.net/gallery/226487763/Al-Tazaj-Restaurant-Social-Media",
    },
  ];

  const [activeCategory, setActiveCategory] = useState(t('portfolio.categories.all'));

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

        {/* فلتر التصنيفات */}
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

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex ${language === 'ar' ? '!flex-col !items-start' : 'flex-col'} justify-end p-6`}>
                <h3 className={`text-white text-xl font-bold ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {project.title}
                </h3>
                <p className={`text-gray-200 text-sm mb-4 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {project.category}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block w-full px-4 py-2 mt-2 bg-accent text-gray-800 rounded-md font-medium text-sm text-center ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {t('portfolio.viewProject')}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects">
            <Button className={`btn-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('portfolio.seeFullPortfolio')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
