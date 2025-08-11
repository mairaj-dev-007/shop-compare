"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface MortgageComponent {
  (): JSX.Element;
}

export default function MortgagePage() {
  const params = useParams();
  const [mortgageType, setMortgageType] = useState<string>("");
  const [Component, setComponent] = useState<MortgageComponent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.type) {
      const exportName = decodeURIComponent(params.type as string);
      setMortgageType(exportName);

      // Dynamically import the appropriate component based on mortgage type
      const loadComponent = async () => {
        setLoading(true);
        try {
          switch (exportName) {
            case "homeEquityLoan":
              const { default: HomeEquityLoan } = await import(
                "@/components/mortgage/HomeEquityLoan"
              );
              setComponent(() => HomeEquityLoan);
              break;
            case "homePurchaseMortgages":
              const { default: HomePurchaseMortgages } = await import(
                "@/components/mortgage/HomePurchaseMortgages"
              );
              setComponent(() => HomePurchaseMortgages);
              break;
            case "mortgageRefinance":
              const { default: MortgageRefinance } = await import(
                "@/components/mortgage/MortgageRefinance"
              );
              setComponent(() => MortgageRefinance);
              break;
            case "sharedEquityAgreements":
              const { default: SharedEquityAgreements } = await import(
                "@/components/mortgage/SharedEquityAgreements"
              );
              setComponent(() => SharedEquityAgreements);
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
            No component found for: {mortgageType}
          </p>
        </div>
      </div>
    );
  }

  return <Component />;
}
