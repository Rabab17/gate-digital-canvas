
import { useLanguage } from "@/contexts/LanguageContext";
import React from 'react'; 

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

 
  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  
  const currentFlagSrc = language === "ar" ? "https://flagcdn.com/sa.svg" : "https://flagcdn.com/gb.svg";
  const currentLangText = language === "ar" ? "AR" : "EN";
  const currentFlagAlt = language === "ar" ? "العربية" : "English";
  const nextLangText = language === "ar" ? "English" : "العربية"; // للنص في aria-label

  return (
    <button
      onClick={toggleLanguage}
    
      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label={`Switch language to ${nextLangText}`} // تحسين إمكانية الوصول
    >
      <img
        src={currentFlagSrc}
        alt={currentFlagAlt}

        className="w-6 h-6 rounded-full border ring-2 ring-primary object-cover"
      />
      <span className="font-medium text-gray-700 dark:text-gray-300">{currentLangText}</span>
    </button>
  );
}
