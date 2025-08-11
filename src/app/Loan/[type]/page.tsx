"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LoanTypePage() {
  const params = useParams();
  const [loanType, setLoanType] = useState("");
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    if (params.type) {
      const exportName = decodeURIComponent(params.type as string);
      setLoanType(exportName);

      const loadComponent = async () => {
        setLoading(true);
        try {
          switch (exportName) {
            case "autoLoan":
              const { default: AutoLoan } = await import(
                "@/components/loan/AutoLoan"
              );
              setComponent(() => AutoLoan);
              break;
            case "personalLoan":
              const { default: PersonalLoan } = await import(
                "@/components/loan/PersonalLoan"
              );
              setComponent(() => PersonalLoan);
              break;
            case "businessLoan":
              const { default: BusinessLoan } = await import(
                "@/components/loan/BusinessLoan"
              );
              setComponent(() => BusinessLoan);
              break;
            case "autoTitleLoan":
              const { default: AutoTitleLoan } = await import(
                "@/components/loan/AutoTitleLoan"
              );
              setComponent(() => AutoTitleLoan);
              break;
            case "payDayLoan":
              const { default: PayDayLoan } = await import(
                "@/components/loan/PayDayLoan"
              );
              setComponent(() => PayDayLoan);
              break;
            case "personalLinesOfCredit":
              const { default: PersonalLinesOfCredit } = await import(
                "@/components/loan/PersonalLinesOfCredit"
              );
              setComponent(() => PersonalLinesOfCredit);
              break;
            case "privateStudentLoan":
              const { default: PrivateStudentLoan } = await import(
                "@/components/loan/PrivateStudentLoan"
              );
              setComponent(() => PrivateStudentLoan);
              break;
            case "autoLoanRefinance":
              const { default: AutoLoanRefinance } = await import(
                "@/components/loan/AutoLoanRefinance"
              );
              setComponent(() => AutoLoanRefinance);
              break;
            case "StudentLoanRefinance":
              const { default: StudentLoanRefinance } = await import(
                "@/components/loan/StudentLoanRefinance"
              );
              setComponent(() => StudentLoanRefinance);
              break;
            case "homeEquityLoan":
              const { default: HomeEquityLoan } = await import(
                "@/components/loan/HomeEquityLoan"
              );
              setComponent(() => HomeEquityLoan);
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
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{t('loading')}</h1>
        </div>
      </div>
    );
  }

  if (!Component) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {t('component.not.found')}
          </h1>
          <p className="text-gray-600">{t('no.data.found.for')}: {loanType}</p>
        </div>
      </div>
    );
  }

  return <Component />;
}
