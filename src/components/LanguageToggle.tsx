
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage}
      className="rounded-full transition-all duration-300 hover:scale-105"
    >
      {language === 'en' ? '🇬🇧 EN' : '🇸🇦 AR'}
    </Button>
  );
}
