"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Header from "@/components/ui/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function SharedEquityAgreements() {
  const { t } = useLanguage();
  const [mortgageDataArray, setMortgageDataArray] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically import sharedEquityAgreements data from data.js
    import(`../../data.js`)
      .then((dataModule) => {
        const sharedEquityAgreementsData = (dataModule as any)
          .sharedEquityAgreements;
        if (Array.isArray(sharedEquityAgreementsData)) {
          setMortgageDataArray(sharedEquityAgreementsData);
        } else {
          setMortgageDataArray([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading sharedEquityAgreements data:", error);
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
            {t("no.data.found.for")} shared equity agreements
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
            {t("shared.equity.agreements").toUpperCase()}
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t("shared.equity.agreements.title")}
          </h1>
          <p className="text-gray-700">
            {t("shared.equity.agreements.description")}
          </p>
          <div className="mt-4 text-sm text-gray-600">
            {t("showing")} {mortgageDataArray.length} {t("of")}{" "}
            {mortgageDataArray.length} {t("shared.equity.agreement")}
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
                {t("shared.equity.use.case")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("investment.range.dollars")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("investment.range.percentage")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("product.website")}
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
                        mortgage.reviews?.head || t("shared.equity.agreement")
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

                  {/* Shared Equity Use Case */}
                  <div className="py-4 px-6">
                    <div className="space-y-2">
                      {mortgage.sharerdEquitCase &&
                      mortgage.sharerdEquitCase.length > 0 ? (
                        mortgage.sharerdEquitCase.map(
                          (useCase: any, index: number) => (
                            <div
                              key={index}
                              className="flex items-center text-sm text-gray-700"
                            >
                              <span className="text-green-500 mr-2">✔</span>
                              {useCase.item}
                            </div>
                          )
                        )
                      ) : (
                        <div className="flex items-center text-sm text-gray-700">
                          <span className="text-green-500 mr-2">✔</span>
                          Equity Cash-Out
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Investment Range $ */}
                  <div className="py-4 px-6">
                    <div className="font-bold text-gray-800 text-lg mb-3">
                      {mortgage.investmentRangeD?.minValue &&
                      mortgage.investmentRangeD?.maxValue
                        ? `$${mortgage.investmentRangeD.minValue.toLocaleString()}k - $${mortgage.investmentRangeD.maxValue.toLocaleString()}k`
                        : t("n.a")}
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{
                            width: `${Math.min(
                              ((mortgage.investmentRangeD?.maxValue || 0) /
                                (mortgage.investmentRangeD?.max || 600000)) *
                                100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>${mortgage.investmentRangeD?.min || "15"}k</span>
                        <span>${mortgage.investmentRangeD?.max || "600"}k</span>
                      </div>
                    </div>
                  </div>

                  {/* Investment Range % */}
                  <div className="py-4 px-6">
                    <div className="font-bold text-gray-800 text-lg mb-3">
                      {mortgage.investmentRangeP?.minValue &&
                      mortgage.investmentRangeP?.maxValue
                        ? `${mortgage.investmentRangeP.minValue}% - ${mortgage.investmentRangeP.maxValue}%`
                        : t("n.a")}
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{
                            width: `${Math.min(
                              ((mortgage.investmentRangeP?.maxValue || 0) /
                                (mortgage.investmentRangeP?.max || 80)) *
                                100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>{mortgage.investmentRangeP?.min || "0"}%</span>
                        <span>{mortgage.investmentRangeP?.max || "80"}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Website */}
                  <div className="py-4 px-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                      {t("apply.now")}
                    </button>
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
