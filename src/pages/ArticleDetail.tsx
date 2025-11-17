import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { articles } from "@/data/articles";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticleDetail() {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t('articles.notFound')}</h1>
          <Link to="/articles">
            <Button>{t('articles.backToArticles')}</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Back Button */}
        <div className="container mx-auto px-4 mb-8">
          <Link to="/articles">
            <Button 
              variant="ghost" 
              className={`${language === 'ar' ? 'flex-row-reverse' : ''}`}
            >
              <ArrowLeft className={`w-4 h-4 ${language === 'ar' ? 'ml-2 rotate-180' : 'mr-2'}`} />
              {t('articles.backToArticles')}
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-in">
            {/* Category Badge */}
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              {article.category}
            </span>

            {/* Title */}
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              language === 'ar' ? 'font-arabic' : ''
            }`}>
              {article.title[language]}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {article.author[language]}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(article.date).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {article.readTime[language]}
              </span>
            </div>

            {/* Cover Image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Article Content */}
            <div 
              className={`prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6 dark:prose-invert ${
                language === 'ar' ? 'text-right font-arabic' : ''
              }`}
              dangerouslySetInnerHTML={{ __html: article.content[language] }}
            />
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-16 border-t border-border">
              <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${
                language === 'ar' ? 'font-arabic text-right' : ''
              }`}>
                {t('articles.relatedPosts')}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related, index) => (
                  <Link
                    key={related.id}
                    to={`/articles/${related.slug}`}
                    className="group block"
                  >
                    <div 
                      className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/50 animate-scale-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative h-40 bg-gradient-to-br from-primary/20 to-accent/20">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                      <div className="p-4">
                        <h3 className={`font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2 ${
                          language === 'ar' ? 'font-arabic' : ''
                        }`}>
                          {related.title[language]}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {related.description[language]}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
