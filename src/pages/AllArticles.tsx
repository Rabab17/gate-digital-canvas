import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { articles } from "@/data/articles";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AllArticles() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(article => {
    const title = article.title[language].toLowerCase();
    const description = article.description[language].toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || description.includes(query);
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${
                language === 'ar' ? 'font-arabic' : ''
              }`}>
                {t('articles.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {t('articles.subtitle')}
              </p>
              
              {/* Search Bar */}
              <div className="max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder={t('articles.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-full border-2 border-border focus:border-primary focus:outline-none transition-all duration-300 bg-background/50 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <article
                  key={article.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in border border-border/50 hover:border-primary/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime[language]}
                      </span>
                    </div>

                    <h2 className={`text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}>
                      {article.title[language]}
                    </h2>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.description[language]}
                    </p>

                    <Link to={`/articles/${article.slug}`}>
                      <Button 
                        variant="ghost" 
                        className={`w-full group-hover:bg-primary/10 transition-all duration-300 ${
                          language === 'ar' ? 'flex-row-reverse' : ''
                        }`}
                      >
                        {t('articles.readMore')}
                        <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform duration-300`} />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-16 animate-fade-in">
                <p className="text-xl text-muted-foreground">
                  {t('articles.noResults')}
                </p>
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
