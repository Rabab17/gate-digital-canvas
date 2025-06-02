import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { t } = useLanguage();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success(t("contact.successMessage"));
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          name="name"
          placeholder={t("contact.form.name")}
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full focus-effect border-2 focus:border-primary"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder={t("contact.form.email")}
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full focus-effect border-2 focus:border-primary"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder={t("contact.form.message")}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full min-h-[150px] focus-effect border-2 focus:border-primary"
        />
      </div>
      <Button
        type="submit"
        className="w-full shimmer-button bg-primary hover:bg-blue-600 gpu-accelerated"
        disabled={isSubmitting}
      >
        {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
      </Button>
    </form>
  );
}
