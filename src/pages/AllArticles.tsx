import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { articles } from "@/data/articles";
import { Calendar, Clock, ArrowRight, Search, Tag, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AllArticles() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(articles.map(a => a.category)));

  const filteredArticles = articles.filter(article => {
    const title = article.title[language].toLowerCase();
    const description = article.description[language].toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch = title.includes(query) || description.includes(query);
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // SEO metadata
  const pageTitle = language === 'ar' 
    ? 'مقالات التسويق الرقمي وتطوير الويب | E-Business Gate'
    : 'Digital Marketing & Web Development Articles | E-Business Gate';
  const pageDescription = language === 'ar'
    ? 'اكتشف أحدث المقالات والنصائح في التسويق الرقمي، تطوير المواقع، تحسين محركات البحث، والذكاء الاصطناعي من خبراء E-Business Gate في مصر'
    : 'Discover latest articles and insights on digital marketing, web development, SEO, and AI from E-Business Gate experts in Egypt and MENA region';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={language === 'ar' 
          ? 'مقالات تسويق رقمي, تطوير مواقع, SEO, مصر, الذكاء الاصطناعي, هوية بصرية'
          : 'digital marketing articles, web development, SEO, Egypt, MENA, AI, brand identity'
        } />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://e-businessgate.com/articles" />
        
        {/* GEO Targeting */}
        <meta name="geo.region" content={language === 'ar' ? 'EG' : 'AE;SA'} />
        <meta name="geo.placename" content={language === 'ar' ? 'Egypt' : 'Dubai;Riyadh'} />
        <meta name="language" content={language === 'ar' ? 'Arabic' : 'English'} />
        
        {/* Canonical */}
        <link rel="canonical" href="https://e-businessgate.com/articles" />
      </Helmet>

      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section - Enhanced */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJzLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyIDUuMzczLTEyIDEyLTEyem0wIDIuNWM1LjI0NyAwIDkuNSA0LjI1MyA5LjUgOS41cy00LjI1MyA5LjUtOS41IDkuNS05LjUtNC4yNTMtOS41LTkuNSA0LjI1My05LjUgOS41LTkuNXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-in">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold bg-primary/10 text-primary rounded-full">
                {language === 'ar' ? 'مدونتنا' : 'Our Blog'}
              </span>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent ${
                language === 'ar' ? 'font-arabic' : ''
              }`}>
                {t('articles.title')}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                {t('articles.subtitle')}
              </p>
              
              {/* Enhanced Search & Filter */}
              <div className="max-w-2xl mx-auto space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <Search className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground ${
                    language === 'ar' ? 'right-5' : 'left-5'
                  }`} />
                  <input
                    type="text"
                    placeholder={t('articles.search')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full ${language === 'ar' ? 'pr-14 pl-12' : 'pl-14 pr-12'} py-4 rounded-2xl border-2 border-border focus:border-primary focus:outline-none transition-all duration-300 bg-card backdrop-blur-sm shadow-lg text-base`}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className={`absolute top-1/2 -translate-y-1/2 ${language === 'ar' ? 'left-4' : 'right-4'} p-1 hover:bg-muted rounded-full transition-colors`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      !selectedCategory 
                        ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                        : 'bg-card hover:bg-muted border border-border'
                    }`}
                  >
                    {language === 'ar' ? 'الكل' : 'All'}
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 ${
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                          : 'bg-card hover:bg-muted border border-border'
                      }`}
                    >
                      <Tag className="w-3.5 h-3.5" />
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Count */}
        {(searchQuery || selectedCategory) && (
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-muted-foreground">
              {language === 'ar' 
                ? `تم العثور على ${filteredArticles.length} ${filteredArticles.length === 1 ? 'مقال' : 'مقالات'}`
                : `Found ${filteredArticles.length} ${filteredArticles.length === 1 ? 'article' : 'articles'}`
              }
            </p>
          </div>
        )}

        {/* Articles Grid - Enhanced */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <article
                  key={article.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/50 flex flex-col opacity-0 animate-fade-in h-full"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {/* Image with Lazy Loading */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 right-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/95 backdrop-blur-md text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                        <Tag className="w-3 h-3" />
                        {article.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-3 border-b border-border/50">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime[language]}
                      </span>
                    </div>

                    <h2 className={`text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}>
                      {article.title[language]}
                    </h2>

                    <p className="text-muted-foreground mb-5 line-clamp-3 leading-relaxed flex-grow">
                      {article.description[language]}
                    </p>

                    <Link to={`/articles/${article.slug}`} className="mt-auto">
                      <Button 
                        variant="ghost" 
                        className={`w-full group/btn hover:bg-primary/10 transition-all duration-300 ${
                          language === 'ar' ? 'flex-row-reverse' : ''
                        }`}
                      >
                        <span className="font-semibold">{t('articles.readMore')}</span>
                        <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} group-hover/btn:translate-x-1 transition-transform duration-300`} />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* No Results */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-20 opacity-0 animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
                  <Search className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{language === 'ar' ? 'لا توجد نتائج' : 'No Results Found'}</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {t('articles.noResults')}
                </p>
                <Button 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(null);
                  }}
                  variant="outline"
                >
                  {language === 'ar' ? 'إعادة تعيين الفلاتر' : 'Reset Filters'}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
