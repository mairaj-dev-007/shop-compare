"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BankingTypePage() {
  const params = useParams();
  const [bankingType, setBankingType] = useState("");
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.type) {
      const exportName = decodeURIComponent(params.type as string);
      setBankingType(exportName);

      // Dynamically import the appropriate component based on banking type
      const loadComponent = async () => {
        setLoading(true);
        try {
          switch (exportName) {
            case "cdAccounts":
              const { default: CdAccounts } = await import(
                "@/components/banking/CdAccounts"
              );
              setComponent(() => CdAccounts);
              break;
            case "checkingAccounts":
              const { default: CheckingAccounts } = await import(
                "@/components/banking/CheckingAccounts"
              );
              setComponent(() => CheckingAccounts);
              break;
            case "moneyMarketAccounts":
              const { default: MoneyMarketAccounts } = await import(
                "@/components/banking/MoneyMarketAccounts"
              );
              setComponent(() => MoneyMarketAccounts);
              break;
            case "moneyTransferServices":
              const { default: MoneyTransferServices } = await import(
                "@/components/banking/MoneyTransferServices"
              );
              setComponent(() => MoneyTransferServices);
              break;
            case "businessCheckingAcc":
              const { default: BusinessCheckingAcc } = await import(
                "@/components/banking/BusinessCheckingAcc"
              );
              setComponent(() => BusinessCheckingAcc);
              break;
            case "savingAcc":
              const { default: SavingsAccounts } = await import(
                "@/components/banking/SavingsAccounts"
              );
              setComponent(() => SavingsAccounts);
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
          <p className="text-gray-600">No component found for: {bankingType}</p>
        </div>
      </div>
    );
  }

  return <Component />;
}
