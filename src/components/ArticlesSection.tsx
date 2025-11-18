import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticlesSection() {
  const { language, t } = useLanguage();
  
  // Show latest 3 articles
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background to-primary/5" id="articles">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold bg-primary/10 text-primary rounded-full">
            {language === 'ar' ? 'المدونة' : 'Blog'}
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent ${
            language === 'ar' ? 'font-arabic' : ''
          }`}>
            {t('articles.sectionTitle')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('articles.sectionSubtitle')}
          </p>
        </div>

        {/* Articles Grid - Enhanced Premium Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestArticles.map((article, index) => (
            <article
              key={article.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/50 flex flex-col h-full animate-fade-in"
              style={{ 
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Image with Lazy Loading */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/95 backdrop-blur-md text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-3 border-b border-border/50">
                  <span className="flex items-center gap-1.5 hover:text-primary transition-colors">
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

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}>
                  {article.title[language]}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-5 line-clamp-3 leading-relaxed flex-grow">
                  {article.description[language]}
                </p>

                {/* Read More Button */}
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

        {/* View All Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
          <Link to="/articles">
            <Button 
              size="lg" 
              className={`bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-primary-foreground ${
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
