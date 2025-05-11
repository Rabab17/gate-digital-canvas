
interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceItem({ icon, title, description }: ServiceItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover">
      <div className="w-16 h-16 mb-4 text-primary flex items-center justify-center bg-primary/10 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
