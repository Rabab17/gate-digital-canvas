import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticlesSection() {
  const { language, t } = useLanguage();
  
  // Show latest 3 articles
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5" id="articles">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${
            language === 'ar' ? 'font-arabic' : ''
          }`}>
            {t('articles.sectionTitle')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('articles.sectionSubtitle')}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {latestArticles.map((article, index) => (
            <article
              key={article.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in border border-border/50 hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Placeholder */}
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

                <h3 className={`text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}>
                  {article.title[language]}
                </h3>

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

        {/* View All Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
          <Link to="/articles">
            <Button 
              size="lg" 
              className={`bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
                language === 'ar' ? 'flex-row-reverse' : ''
              }`}
            >
              {t('articles.viewAll')}
              <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
