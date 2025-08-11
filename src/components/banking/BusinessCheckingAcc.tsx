"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Header from "@/components/ui/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function BusinessCheckingAcc() {
  const [bankingDataArray, setBankingDataArray] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Dynamically import businessCheckingAcc data from data.js
    import(`../../data.js`)
      .then((dataModule) => {
        const businessCheckingAccData = (dataModule as any).businessCheckingAcc;
        if (Array.isArray(businessCheckingAccData)) {
          setBankingDataArray(businessCheckingAccData);
        } else {
          setBankingDataArray([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading businessCheckingAcc data:", error);
        setBankingDataArray([]);
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

  if (!bankingDataArray || bankingDataArray.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {t("no.data.found")}
          </h1>
          <p className="text-gray-600">
            {t("no.data.found.for")} {t("business.checking.account")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageToggle />
      </div>

      {/* Main Content */}
      <main className="w-full px-6 py-8">
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
            {t("banking")}
          </a>
          <ChevronRight className="h-4 w-4 text-blue-400" />
          <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">
            {t("business.checking.accounts").toUpperCase()}
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t("business.checking.accounts.title")}
          </h1>
          <p className="text-gray-700">
            {t("business.checking.accounts.description")}
          </p>
          <div className="mt-4 text-sm text-gray-600">
            {t("showing")} {bankingDataArray.length} {t("of")}{" "}
            {bankingDataArray.length} {t("business.checking.accounts")}
          </div>
        </div>

        {/* Table Headers */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1200px] grid grid-cols-6 gap-0 border-b border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
            <div className="py-2 px-4">{t("product")}</div>
            <div className="py-2 px-4">{t("reviews")}</div>
            <div className="py-2 px-4">{t("annual.percentage.yield")}</div>
            <div className="py-2 px-4">{t("monthly.maintenance.fee")}</div>
            <div className="py-2 px-4">{t("minimum.balance")}</div>
            <div className="py-2 px-4">{t("additional.details")}</div>
          </div>
        </div>

        {/* Table Rows */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1200px] divide-y divide-gray-100">
            {bankingDataArray.map((item, idx) => (
              <div
                key={item.id || idx}
                className="grid grid-cols-6 gap-0 items-center bg-white hover:bg-gray-50 transition"
              >
                {/* PRODUCT */}
                <div className="flex items-center gap-3 py-4 px-4">
                  <img
                    src={item.image}
                    alt={item.reviews?.head || t("business.checking.account")}
                    className="h-10 w-10 object-contain bg-gray-100 rounded"
                  />
                  <div>
                    <div className="font-semibold text-blue-600 text-sm truncate">
                      {item.reviews?.head || t("n.a")}
                    </div>
                  </div>
                </div>

                {/* REVIEWS */}
                <div className="py-4 px-4">
                  <div className="text-green-600 font-medium text-sm mb-2">
                    {item.reviews?.head2 || t("recommended")}
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-1">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex">
                        {item.reviews?.green && (
                          <div
                            className="h-full bg-green-500"
                            style={{
                              width: `${
                                (Number(item.reviews.green) /
                                  (Number(item.reviews.green) +
                                    (Number(item.reviews.pink) || 0))) *
                                100
                              }%`,
                            }}
                          />
                        )}
                        {item.reviews?.pink && (
                          <div
                            className="h-full bg-pink-500"
                            style={{
                              width: `${
                                (Number(item.reviews.pink) /
                                  (Number(item.reviews.green) + Number(item.reviews.pink))) *
                                100
                              }%`,
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 text-xs">
                      {item.reviews?.green && (
                        <span className="text-green-600 font-medium">
                          {item.reviews.green}
                        </span>
                      )}
                      {item.reviews?.pink && (
                        <span className="text-pink-600 font-medium">
                          {item.reviews.pink}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-blue-600 text-xs cursor-pointer">
                    View Reviews
                  </div>
                </div>

                {/* APY */}
                <div className="py-4 px-4">
                  {item.apy ? (
                    <div>
                      <div className="font-bold text-gray-800 text-sm mb-2">
                        {item.apy.apy !== null && item.apy.apy !== undefined
                          ? `${item.apy.apy}%`
                          : item.apy.minValue && item.apy.maxValue
                          ? `${item.apy.minValue}% - ${item.apy.maxValue}%`
                          : "N/A"}
                      </div>
                      {item.apy.minValue && item.apy.maxValue && (
                        <div className="relative">
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-500 rounded-full"
                              style={{
                                width: `${Math.min(
                                  ((item.apy.maxValue || 0) /
                                    (item.apy.max || 5)) *
                                    100,
                                  100
                                )}%`,
                              }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>{item.apy.min || "0"}%</span>
                            <span>{item.apy.max || "5"}%</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </div>

                {/* MONTHLY FEE */}
                <div className="py-4 px-4">
                  {item.monthlyFee ? (
                    <div>
                      <div className="font-bold text-gray-800 text-sm mb-2">
                        {item.monthlyFee.monthlyFee === "0" ||
                        item.monthlyFee.monthlyFee === 0
                          ? "No Fee"
                          : item.monthlyFee.monthlyFee
                          ? `$${item.monthlyFee.monthlyFee}`
                          : "N/A"}
                      </div>
                    </div>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </div>

                {/* MINIMUM BALANCE */}
                <div className="py-4 px-4">
                  {item.minBal ? (
                    <div>
                      <div className="font-bold text-gray-800 text-sm mb-2">
                        {item.minBal.minBal === "0" || item.minBal.minBal === 0
                          ? "No Minimum"
                          : item.minBal.minBal
                          ? `$${item.minBal.minBal}`
                          : "N/A"}
                      </div>
                    </div>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </div>

                {/* ADDITIONAL DETAILS */}
                <div className="py-4 px-4">
                  {item.additionalDetal &&
                  Array.isArray(item.additionalDetal) &&
                  item.additionalDetal.length > 0 ? (
                    <div className="space-y-1">
                      {item.additionalDetal.map(
                        (detail: any, detailIdx: number) => (
                          <div
                            key={detailIdx}
                            className="flex items-center gap-2"
                          >
                            <span className="text-blue-500 text-sm">✓</span>
                            <span className="text-gray-700 text-sm">
                              {detail.item}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
