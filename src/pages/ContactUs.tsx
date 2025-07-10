import { useState, FormEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactUs() {
  const { language, t } = useLanguage();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    address: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const isRTL = language === "ar";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (formErrors[name]) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const validateForm = () => {
    let errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = t("contactForm.fullNameRequired");
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = t("contactForm.phoneNumberRequired");
    }
    if (!formData.message.trim()) {
      errors.message = t("contactForm.messageRequired");
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(false);

    if (validateForm()) {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsLoading(false);
      setIsSubmitted(true);

      toast({
        title: language === "ar" ? "تم الإرسال بنجاح" : "Success",
        description: t("contactForm.submissionSuccess"),
      });

      setFormData({
        fullName: "",
        companyName: "",
        phoneNumber: "",
        email: "",
        address: "",
        message: "",
      });

      console.log("Form submitted:", formData);
    } else {
      toast({
        title: language === "ar" ? "خطأ في النموذج" : "Form Error",
        description:
          language === "ar"
            ? "يرجى ملء جميع الحقول المطلوبة"
            : "Please fill in all required fields",
        variant: "destructive",
      });
    }
  };

  const getFieldClasses = (fieldName: string, hasError: boolean) => {
    const baseClasses = `mt-2 block w-full rounded-xl border-2 px-4 py-3 transition-all duration-300 ease-in-out ${
      language === "ar" ? "font-medium text-right" : ""
    }`;

    if (hasError) {
      return `${baseClasses} border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20 focus:ring-4`;
    }

    if (focusedField === fieldName) {
      return `${baseClasses} border-primary bg-blue-50 dark:bg-blue-900/20 dark:border-primary focus:border-primary focus:ring-primary/20 focus:ring-4 shadow-lg transform scale-[1.02]`;
    }

    return `${baseClasses} border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 focus:border-primary focus:ring-primary/20 focus:ring-4 hover:shadow-md`;
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className={`pt-32 pb-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden ${
          isRTL ? "text-right" : "text-left"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in">
            <h1
              className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent leading-tight mb-2 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("contactPage.title")}
            </h1>
            <p
              className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("contactPage.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 relative">
        <div className="container mx-auto px-4 max-w-3xl">
          <div
            className={`bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl shadow-gray-200/50 dark:shadow-gray-900/50 animate-fade-in border border-gray-100 dark:border-gray-700 ${
              isRTL ? "text-right" : "text-left"
            }`}
            dir={isRTL ? "rtl" : "ltr"}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-center mb-8">
              <h2
                className={`text-3xl font-bold text-gray-900 dark:text-white mb-4 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {language === "ar" ? "أرسل لنا رسالة" : "Send us a message"}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {t("contactForm.fullName")} <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={() => handleFocus("fullName")}
                  onBlur={handleBlur}
                  className={getFieldClasses("fullName", !!formErrors.fullName)}
                  placeholder={t("contactForm.fullName")}
                />
                {formErrors.fullName && (
                  <p className="text-red-500 text-sm mt-2">{formErrors.fullName}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <Label htmlFor="companyName" className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {t("contactForm.companyName")}
                </Label>
                <Input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  onFocus={() => handleFocus("companyName")}
                  onBlur={handleBlur}
                  className={getFieldClasses("companyName", !!formErrors.companyName)}
                  placeholder={t("contactForm.companyName")}
                />
              </div>

              {/* Phone Number */}
              <div>
                <Label htmlFor="phoneNumber" className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {t("contactForm.phoneNumber")} <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  onFocus={() => handleFocus("phoneNumber")}
                  onBlur={handleBlur}
                  className={getFieldClasses("phoneNumber", !!formErrors.phoneNumber)}
                  placeholder={t("contactForm.phoneNumber")}
                />
                {formErrors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-2">{formErrors.phoneNumber}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {t("contactForm.email")}
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  className={getFieldClasses("email", !!formErrors.email)}
                  placeholder={t("contactForm.email")}
                />
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address" className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {t("contactForm.address")}
                </Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  onFocus={() => handleFocus("address")}
                  onBlur={handleBlur}
                  className={getFieldClasses("address", !!formErrors.address)}
                  placeholder={t("contactForm.address")}
                />
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {t("contactForm.message")} <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  rows={6}
                  className={getFieldClasses("message", !!formErrors.message)}
                  placeholder={t("contactForm.message")}
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-2">{formErrors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <Button
                  type="submit"
                  className={`w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg ${
                    language === "ar" ? "font-arabic text-lg" : "text-lg"
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>{language === "ar" ? "جاري الإرسال..." : "Sending..."}</span>
                    </div>
                  ) : (
                    <span>{t("contactForm.submitRequest")}</span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
