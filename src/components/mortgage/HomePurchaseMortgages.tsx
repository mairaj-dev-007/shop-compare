"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Header from "@/components/ui/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function HomePurchaseMortgages() {
  const { t } = useLanguage();
  const [mortgageDataArray, setMortgageDataArray] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically import homePurchaseMortgages data from data.js
    import(`../../data.js`)
      .then((dataModule) => {
        const homePurchaseMortgagesData = (dataModule as any)
          .homePurchaseMortgages;
        if (Array.isArray(homePurchaseMortgagesData)) {
          setMortgageDataArray(homePurchaseMortgagesData);
        } else {
          setMortgageDataArray([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading homePurchaseMortgages data:", error);
        setMortgageDataArray([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {t("loading")}
          </h1>
        </div>
      </div>
    );
  }

  if (!mortgageDataArray || mortgageDataArray.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {t("no.data.found")}
          </h1>
          <p className="text-gray-600">
            {t("no.data.found.for")} home purchase mortgages
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="w-full px-6 py-8">
        {/* Language Toggle */}
        <div className="flex justify-end mb-4">
          <LanguageToggle />
        </div>

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6">
          <a
            href="/"
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-xs font-medium hover:bg-blue-200 transition-colors cursor-pointer"
          >
            {t("home")}
          </a>
          <ChevronRight className="h-4 w-4 text-blue-400" />
          <a
            href="/"
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-xs font-medium hover:bg-blue-200 transition-colors cursor-pointer"
          >
            {t("mortgage")}
          </a>
          <ChevronRight className="h-4 w-4 text-blue-400" />
          <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">
            {t("home.purchase.mortgages").toUpperCase()}
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t("home.purchase.mortgages.title")}
          </h1>
          <p className="text-gray-700">
            {t("home.purchase.mortgages.description")}
          </p>
          <div className="mt-4 text-sm text-gray-600">
            {t("showing")} {mortgageDataArray.length} {t("of")}{" "}
            {mortgageDataArray.length} {t("home.purchase.mortgage")}
          </div>
        </div>

        {/* Table Structure */}
        <div className="w-full overflow-x-auto">
          {/* Table Headers */}
          <div className="min-w-[1200px]">
            <div className="grid grid-cols-6 gap-0 bg-gray-50 border-b border-gray-200">
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("product")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("reviews")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("loan.amount")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("loan.term.years")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("credit.score")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("additional.details")}
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[1200px] divide-y divide-gray-100">
              {mortgageDataArray.map((mortgage, index) => (
                <div
                  key={mortgage.id || index}
                  className="grid grid-cols-6 gap-0 items-start bg-white hover:bg-gray-50 transition py-6"
                >
                  {/* Product */}
                  <div className="flex items-start gap-4 py-4 px-6">
                    <img
                      src={mortgage.image}
                      alt={
                        mortgage.reviews?.head || t("home.purchase.mortgage")
                      }
                      className="h-12 w-12 object-contain bg-gray-100 rounded flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="font-semibold text-blue-600 text-base truncate">
                        {mortgage.reviews?.head || "Unknown"}
                      </div>
                    </div>
                  </div>

                  {/* Reviews */}
                  <div className="py-4 px-6">
                    <div className="text-green-600 font-medium text-sm mb-3">
                      {mortgage.reviews?.head2 || t("recommended")}
                    </div>
                    {mortgage.reviews &&
                      (mortgage.reviews.green || mortgage.reviews.pink) && (
                        <div>
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex-1">
                              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex">
                                {mortgage.reviews.green && (
                                  <div
                                    className="h-full bg-green-500"
                                    style={{
                                      width: `${
                                        (mortgage.reviews.green /
                                          (mortgage.reviews.green +
                                            (mortgage.reviews.pink || 0))) *
                                        100
                                      }%`,
                                    }}
                                  />
                                )}
                                {mortgage.reviews.pink && (
                                  <div
                                    className="h-full bg-pink-500"
                                    style={{
                                      width: `${
                                        (mortgage.reviews.pink /
                                          (mortgage.reviews.green +
                                            mortgage.reviews.pink)) *
                                        100
                                      }%`,
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                            <div className="flex gap-3 text-sm">
                              {mortgage.reviews.green && (
                                <span className="text-green-600 font-medium">
                                  {mortgage.reviews.green}
                                </span>
                              )}
                              {mortgage.reviews.pink && (
                                <span className="text-pink-600 font-medium">
                                  {mortgage.reviews.pink}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-blue-600 text-sm cursor-pointer hover:underline">
                            {t("view.reviews")} {mortgage.reviews.review || 6}{" "}
                            {t("reviews.count")}
                          </div>
                        </div>
                      )}
                  </div>

                  {/* Loan Amount */}
                  <div className="py-4 px-6">
                    <div className="font-bold text-gray-800 text-lg mb-3">
                      {mortgage.loanAmount?.minValue &&
                      mortgage.loanAmount?.maxValue
                        ? `$${mortgage.loanAmount.minValue.toLocaleString()}k - $${mortgage.loanAmount.maxValue.toLocaleString()}k`
                        : t("n.a")}
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{
                            width: `${Math.min(
                              ((mortgage.loanAmount?.maxValue || 0) /
                                (mortgage.loanAmount?.max || 100000)) *
                                100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>${mortgage.loanAmount?.min || "3"}k</span>
                        <span>${mortgage.loanAmount?.max || "2000"}k</span>
                      </div>
                    </div>
                  </div>

                  {/* Loan Term */}
                  <div className="py-4 px-6">
                    <div className="font-bold text-gray-800 text-lg mb-3">
                      {mortgage.loanTerm?.minValue &&
                      mortgage.loanTerm?.maxValue
                        ? `${mortgage.loanTerm.minValue} - ${mortgage.loanTerm.maxValue}`
                        : t("n.a")}
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{
                            width: `${Math.min(
                              ((mortgage.loanTerm?.maxValue || 0) /
                                (mortgage.loanTerm?.max || 60)) *
                                100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>{mortgage.loanTerm?.min || "1"}</span>
                        <span>{mortgage.loanTerm?.max || "60"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Credit Score */}
                  <div className="py-4 px-6">
                    <div className="font-bold text-gray-800 text-lg mb-3">
                      {mortgage.creditScore?.minValue &&
                      mortgage.creditScore?.maxValue
                        ? `${mortgage.creditScore.minValue} - ${mortgage.creditScore.maxValue}`
                        : t("n.a")}
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{
                            width: `${Math.min(
                              ((mortgage.creditScore?.maxValue || 0) /
                                (mortgage.creditScore?.max || 800)) *
                                100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>{mortgage.creditScore?.min || "600"}</span>
                        <span>{mortgage.creditScore?.max || "800"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="py-4 px-6">
                    <div className="space-y-2">
                      {mortgage.additional && mortgage.additional.length > 0 ? (
                        mortgage.additional.map((feature: any, idx: number) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-blue-500 text-sm">✔</span>
                            <span className="text-gray-700 text-sm">
                              {feature.item}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="text-gray-400 text-sm">
                          {t("no.additional.features")}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
