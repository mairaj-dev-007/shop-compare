"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Header from "@/components/ui/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function SavingsAccounts() {
  const [bankingDataArray, setBankingDataArray] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Dynamically import savingAcc data from data.js
    import(`../../data.js`)
      .then((dataModule) => {
        const savingsAccountsData = (dataModule as any).savingAcc;
        if (Array.isArray(savingsAccountsData)) {
          setBankingDataArray(savingsAccountsData);
        } else {
          setBankingDataArray([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading savingAcc data:", error);
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
            {t("no.data.found.for")} {t("savings.account")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
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
            {t("savings.accounts").toUpperCase()}
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t("savings.accounts.title")}
          </h1>
          <p className="text-gray-700">{t("savings.accounts.description")}</p>
          <div className="mt-4 text-sm text-gray-600">
            {t("showing")} {bankingDataArray.length} {t("of")}{" "}
            {bankingDataArray.length} {t("savings.accounts")}
          </div>
        </div>

        {/* Table Headers - For Savings Accounts */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1200px] grid grid-cols-6 gap-0 border-b border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wide mb-4">
            <div className="py-3 px-6">{t("product")}</div>
            <div className="py-3 px-6">{t("reviews")}</div>
            <div className="py-3 px-6">{t("monthly.maintenance.fee")}</div>
            <div className="py-3 px-6">{t("annual.percentage.yield")}</div>
            <div className="py-3 px-6">{t("minimum.balance")}</div>
            <div className="py-3 px-6">{t("additional.details")}</div>
          </div>
        </div>

        {/* Table Rows */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1200px] divide-y divide-gray-100">
            {bankingDataArray.map((item, idx) => (
              <div
                key={item.id || idx}
                className="grid grid-cols-6 gap-0 items-start bg-white hover:bg-gray-50 transition py-6"
              >
                {/* PRODUCT */}
                <div className="flex items-start gap-4 py-4 px-6">
                  <img
                    src={item.image}
                    alt={item.reviews?.head || t("savings.account")}
                    className="h-12 w-12 object-contain bg-gray-100 rounded flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="font-semibold text-blue-600 text-base truncate">
                      {item.reviews?.head || t("n.a")}
                    </div>
                    {item.reviews?.fdic && (
                      <div className="text-xs text-gray-500 mt-1">
                        {item.reviews.fdic}
                      </div>
                    )}
                  </div>
                </div>

                {/* REVIEWS */}
                <div className="py-4 px-6">
                  <div className="text-green-600 font-medium text-sm mb-3">
                    {item.reviews?.head2 || t("rating.not.yet.determined")}
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-1">
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex">
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
                    <div className="flex gap-3 text-sm">
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
                  <div className="text-blue-600 text-sm cursor-pointer hover:underline">
                    View Reviews
                  </div>
                </div>

                {/* MONTHLY FEE */}
                <div className="py-4 px-6">
                  {item.monthlyFee ? (
                    <div>
                      <div className="font-bold text-gray-800 text-lg mb-3">
                        {item.monthlyFee.monthlyFee === "0" ||
                        item.monthlyFee.monthlyFee === 0
                          ? "$0"
                          : item.monthlyFee.monthlyFee
                          ? `$${item.monthlyFee.monthlyFee}`
                          : "N/A"}
                      </div>
                      <div className="text-xs text-gray-500">Monthly Fee</div>
                    </div>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </div>

                {/* APY (ANNUAL PERCENTAGE YIELD) */}
                <div className="py-4 px-6">
                  {item.apy ? (
                    <div>
                      <div className="font-bold text-gray-800 text-lg mb-3">
                        {item.apy.apy !== null && item.apy.apy !== undefined
                          ? `${item.apy.apy}%`
                          : item.apy.minValue && item.apy.maxValue
                          ? `${item.apy.minValue}% - ${item.apy.maxValue}%`
                          : "N/A"}
                      </div>
                      <div className="text-xs text-gray-500">
                        APY (Annual Percentage Yield)
                      </div>
                    </div>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </div>

                {/* APY MINIMUM BALANCE */}
                <div className="py-4 px-6">
                  {item.apyMin ? (
                    <div>
                      <div className="font-bold text-gray-800 text-lg mb-3">
                        {item.apyMin.apyMin !== null &&
                        item.apyMin.apyMin !== undefined
                          ? item.apyMin.apyMin === "N/A"
                            ? "$0"
                            : item.apyMin.apyMin === "0"
                            ? "$0"
                            : `${item.apyMin.apyMin}%`
                          : item.apyMin.minValue && item.apyMin.maxValue
                          ? `${item.apyMin.minValue}% - ${item.apyMin.maxValue}%`
                          : "$0"}
                      </div>
                      <div className="text-xs text-gray-500">
                        APY Minimum Balance
                      </div>
                    </div>
                  ) : (
                    <span className="text-gray-400">$0</span>
                  )}
                </div>

                {/* ADDITIONAL DETAILS */}
                <div className="py-4 px-6">
                  {item.additional &&
                  Array.isArray(item.additional) &&
                  item.additional.length > 0 ? (
                    <div className="space-y-2">
                      {item.additional.map((detail: any, detailIdx: number) => (
                        <div
                          key={detailIdx}
                          className="flex items-center gap-3"
                        >
                          <span className="text-blue-500 text-sm">✓</span>
                          <span className="text-gray-700 text-sm">
                            {detail.item}
                          </span>
                        </div>
                      ))}
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
