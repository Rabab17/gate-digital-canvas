import { useState, FormEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext"; // Reverted to alias path
import Header from "@/components/Header"; // Reverted to alias path
import Footer from "@/components/Footer"; // Reverted to alias path
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactUs() {
  const { language, t } = useLanguage();
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

  // Derive isRTL from language
  const isRTL = language === "ar";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error for the field as user types
    if (formErrors[name]) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
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
    setIsSubmitted(false); // Reset submission status
    if (validateForm()) {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ // Optionally clear the form after successful submission
        fullName: "",
        companyName: "",
        phoneNumber: "",
        email: "",
        address: "",
        message: "",
      });
      // You could also add logic to actually send the form data here,
      // e.g., using fetch or axios to your backend.
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Header />

      <section
        className={`pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 ${
          isRTL ? "text-right" : "text-left"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("contactPage.title")}
            </h1>
            <p
              className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("contactPage.description")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          {isSubmitted && (
            <div
              className={`p-4 mb-8 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-lg shadow-md ${
                isRTL ? "text-right" : "text-left"
              }`}
              role="alert"
            >
              {t("contactForm.submissionSuccess")}
            </div>
          )}

          <div
            className={`bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl animate-slide-down ${
              isRTL ? "text-right" : "text-left"
            }`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="fullName"
                  className={`${language === "ar" ? "font-arabic" : ""}`}
                >
                  {t("contactForm.fullName")} <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm focus:ring-primary focus:border-primary ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}
                  placeholder={t("contactForm.fullName")}
                />
                {formErrors.fullName && (
                  <p
                    className={`text-red-500 text-sm mt-1 ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {formErrors.fullName}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="companyName"
                  className={`${language === "ar" ? "font-arabic" : ""}`}
                >
                  {t("contactForm.companyName")}
                </Label>
                <Input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm focus:ring-primary focus:border-primary ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}
                  placeholder={t("contactForm.companyName")}
                />
              </div>

              <div>
                <Label
                  htmlFor="phoneNumber"
                  className={`${language === "ar" ? "font-arabic" : ""}`}
                >
                  {t("contactForm.phoneNumber")} <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="tel" // Use type="tel" for phone numbers
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm focus:ring-primary focus:border-primary ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}
                  placeholder={t("contactForm.phoneNumber")}
                />
                {formErrors.phoneNumber && (
                  <p
                    className={`text-red-500 text-sm mt-1 ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {formErrors.phoneNumber}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className={`${language === "ar" ? "font-arabic" : ""}`}
                >
                  {t("contactForm.email")}
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm focus:ring-primary focus:border-primary ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}
                  placeholder={t("contactForm.email")}
                />
              </div>

              <div>
                <Label
                  htmlFor="address"
                  className={`${language === "ar" ? "font-arabic" : ""}`}
                >
                  {t("contactForm.address")}
                </Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm focus:ring-primary focus:border-primary ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}
                  placeholder={t("contactForm.address")}
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className={`${language === "ar" ? "font-arabic" : ""}`}
                >
                  {t("contactForm.message")} <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm focus:ring-primary focus:border-primary ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}
                  placeholder={t("contactForm.message")}
                ></Textarea>
                {formErrors.message && (
                  <p
                    className={`text-red-500 text-sm mt-1 ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {formErrors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className={`w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium py-3 rounded-md transition-all duration-300 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white mr-3"
                    viewBox="0 0 24 24"
                  >
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
                ) : (
                  t("contactForm.submitRequest")
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
