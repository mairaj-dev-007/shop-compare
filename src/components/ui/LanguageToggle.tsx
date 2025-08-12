"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('es');
    } else if (language === 'es') {
      setLanguage('pt');
    } else {
      setLanguage('en');
    }
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className="flex items-center gap-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 transition-colors border border-gray-200"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'PT'}
      </span>
    </Button>
  );
}
