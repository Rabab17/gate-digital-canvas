
import { useLanguage } from "@/contexts/LanguageContext";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceItem({ icon, title, description }: ServiceItemProps) {
  const { language } = useLanguage();

  return (
    <div className="shimmer-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover hover-glow hover-lift gpu-accelerated">
      <div className="w-16 h-16 mb-4 text-primary flex items-center justify-center bg-primary/10 rounded-lg pulse-icon">
        {icon}
      </div>
      <h3 className={`text-xl font-bold mb-2 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
        {title}
      </h3>
      <p className={`text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic text-right leading-relaxed' : ''}`}>
        {description}
      </p>
    </div>
  );
}
