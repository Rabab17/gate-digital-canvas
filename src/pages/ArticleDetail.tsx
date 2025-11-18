import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { articles } from "@/data/articles";
import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticleDetail() {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  
  const article = articles.find(a => a.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Helmet>
          <title>{t('articles.notFound')} | E-Business Gate</title>
        </Helmet>
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

  // SEO Metadata
  const pageTitle = `${article.title[language]} | E-Business Gate`;
  const pageDescription = article.description[language];
  const publishedTime = new Date(article.date).toISOString();
  const articleUrl = `https://e-businessgate.com/articles/${article.slug}`;

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title[language],
    "description": article.description[language],
    "author": {
      "@type": "Person",
      "name": article.author[language]
    },
    "publisher": {
      "@type": "Organization",
      "name": "E-Business Gate",
      "logo": {
        "@type": "ImageObject",
        "url": "https://e-businessgate.com/logo.png"
      }
    },
    "datePublished": publishedTime,
    "dateModified": publishedTime,
    "articleSection": article.category,
    "inLanguage": language === 'ar' ? 'ar-EG' : 'en-US',
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="author" content={article.author[language]} />
        <meta name="keywords" content={`${article.category}, ${language === 'ar' ? 'تسويق رقمي, مصر' : 'digital marketing, Egypt, MENA'}`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleUrl} />
        <meta property="article:published_time" content={publishedTime} />
        <meta property="article:author" content={article.author[language]} />
        <meta property="article:section" content={article.category} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* GEO Targeting */}
        <meta name="geo.region" content={language === 'ar' ? 'EG' : 'AE;SA'} />
        <meta name="geo.placename" content={language === 'ar' ? 'Egypt' : 'Dubai;Riyadh'} />
        <meta name="language" content={language === 'ar' ? 'Arabic' : 'English'} />
        
        {/* Canonical */}
        <link rel="canonical" href={articleUrl} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />
      
      <main className="pt-24 pb-16">
        {/* Back Button */}
        <div className="container mx-auto px-4 mb-8 animate-fade-in">
          <Link to="/articles">
            <Button 
              variant="ghost" 
              className={`hover:bg-muted ${language === 'ar' ? 'flex-row-reverse' : ''}`}
            >
              <ArrowLeft className={`w-4 h-4 ${language === 'ar' ? 'ml-2 rotate-180' : 'mr-2'}`} />
              {t('articles.backToArticles')}
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            {/* Category Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
              <Tag className="w-3.5 h-3.5" />
              {article.category}
            </span>

            {/* Title - H1 for SEO */}
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
              language === 'ar' ? 'font-arabic' : ''
            }`}>
              {article.title[language]}
            </h1>

            {/* Meta Information - Enhanced Design */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border/50">
              <span className="flex items-center gap-2 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">{article.author[language]}</span>
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {article.readTime[language]}
              </span>
              
              {/* Share Button */}
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: article.title[language],
                      text: article.description[language],
                      url: window.location.href
                    });
                  }
                }}
                className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-medium">{language === 'ar' ? 'شارك' : 'Share'}</span>
              </button>
            </div>

            {/* Cover Image - Lazy Loading */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="h-1 w-20 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Article Content - Enhanced Typography */}
            <div 
              className={`
                prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:scroll-mt-24
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-foreground
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-foreground
                prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-foreground
                prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-bold
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                prose-li:my-2 prose-li:text-foreground
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-8
                prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                prose-pre:bg-muted prose-pre:p-6 prose-pre:rounded-lg prose-pre:my-8
                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                dark:prose-invert
                ${language === 'ar' ? 'text-right font-arabic' : ''}
              `}
              dangerouslySetInnerHTML={{ __html: article.content[language] }}
            />

            {/* Article Footer - Tags/Share */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{language === 'ar' ? 'التصنيف:' : 'Category:'}</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles - Enhanced Design */}
          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-16 border-t border-border">
              <div className="mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${
                  language === 'ar' ? 'font-arabic text-right' : ''
                }`}>
                  {t('articles.relatedPosts')}
                </h2>
                <p className="text-muted-foreground">
                  {language === 'ar' ? 'مقالات ذات صلة قد تهمك' : 'Related articles you might be interested in'}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related, index) => (
                  <Link
                    key={related.id}
                    to={`/articles/${related.slug}`}
                    className="group block animate-fade-in"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/50 h-full flex flex-col">
                      <div className="relative h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/95 backdrop-blur-sm text-primary-foreground text-xs font-semibold rounded-full">
                            <Tag className="w-3 h-3" />
                            {related.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className={`text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2 ${
                          language === 'ar' ? 'font-arabic' : ''
                        }`}>
                          {related.title[language]}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                          {related.description[language]}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground pt-3 border-t border-border/50">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {related.readTime[language]}
                          </span>
                        </div>
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
