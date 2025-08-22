"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreditCardTypePage() {
  const params = useParams();
  const [creditCardType, setCreditCardType] = useState("");
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.type) {
      const exportName = decodeURIComponent(params.type as string);
      setCreditCardType(exportName);

      // Dynamically import the appropriate component based on credit card type
      const loadComponent = async () => {
        setLoading(true);
        try {
          switch (exportName) {
            case "businessesCreditCard":
              const { default: BusinessesCreditCard } = await import(
                "@/components/creditcard/BusinessesCreditCard"
              );
              setComponent(() => BusinessesCreditCard);
              break;
            case "selfCreditCard":
              const { default: PersonalCreditCard } = await import(
                "@/components/creditcard/PersonalCreditCard"
              );
              setComponent(() => PersonalCreditCard);
              break;
            case "prepaidCard":
              const { default: PrepaidCard } = await import(
                "@/components/creditcard/PrepaidCard"
              );
              setComponent(() => PrepaidCard);
              break;
            default:
              setComponent(null);
              break;
          }
        } catch (error) {
          console.error("Error loading component:", error);
          setComponent(null);
        } finally {
          setLoading(false);
        }
      };

      loadComponent();
    }
  }, [params.type]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!Component) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Component Not Found
          </h1>
          <p className="text-gray-600">
            No component found for: {creditCardType}
          </p>
        </div>
      </div>
    );
  }

  return <Component />;
}
