"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Header from "@/components/ui/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function MoneyMarketAccounts() {
  const [bankingDataArray, setBankingDataArray] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Dynamically import moneyMarketAccounts data from data.js
    import(`../../data.js`)
      .then((dataModule) => {
        const moneyMarketAccountsData = (dataModule as any).moneyMarketAccounts;
        if (Array.isArray(moneyMarketAccountsData)) {
          setBankingDataArray(moneyMarketAccountsData);
        } else {
          setBankingDataArray([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading moneyMarketAccounts data:", error);
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
            {t("no.data.found.for")} {t("money.market.account")}
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
            {t("money.market.accounts").toUpperCase()}
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t("money.market.accounts.title")}
          </h1>
          <p className="text-gray-700">
            {t("money.market.accounts.description")}
          </p>
          <div className="mt-4 text-sm text-gray-600">
            {t("showing")} {bankingDataArray.length} {t("of")}{" "}
            {bankingDataArray.length} {t("money.market.accounts")}
          </div>
        </div>

        {/* Table Headers - For Money Market Accounts */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1200px] grid grid-cols-5 gap-0 border-b border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wide mb-4">
            <div className="py-3 px-6">{t("product")}</div>
            <div className="py-3 px-6">{t("reviews")}</div>
            <div className="py-3 px-6">{t("annual.percentage.yield")}</div>
            <div className="py-3 px-6">{t("minimum.balance")}</div>
            <div className="py-3 px-6">{t("minimum.deposit")}</div>
          </div>
        </div>

        {/* Table Rows */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1200px] divide-y divide-gray-100">
            {bankingDataArray.map((item, idx) => (
              <div
                key={item.id || idx}
                className="grid grid-cols-5 gap-0 items-start bg-white hover:bg-gray-50 transition py-6"
              >
                {/* PRODUCT */}
                <div className="flex items-start gap-4 py-4 px-6">
                  <img
                    src={item.image}
                    alt={item.reviews?.head || t("money.market.account")}
                    className="h-12 w-12 object-contain bg-gray-100 rounded flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="font-semibold text-blue-600 text-base truncate">
                      {item.reviews?.head || t("n.a")}
                    </div>
                  </div>
                </div>

                {/* REVIEWS */}
                <div className="py-4 px-6">
                  <div className="text-green-600 font-medium text-sm mb-3">
                    {item.reviews?.head2 || t("strongly.recommended")}
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-1">
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex">
                        {item.reviews?.green && (
                          <div
                            className="h-full bg-green-500"
                            style={{
                              width: `${
                                (item.reviews.green /
                                  (item.reviews.green +
                                    (item.reviews.pink || 0))) *
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
                                (item.reviews.pink /
                                  (item.reviews.green + item.reviews.pink)) *
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

                {/* APY (ANNUAL PERCENTAGE YIELD) */}
                <div className="py-4 px-6">
                  {item.apy ? (
                    <div>
                      <div className="font-bold text-gray-800 text-lg mb-3">
                        {item.apy.apy !== null && item.apy.apy !== undefined
                          ? `${item.apy.apy}`
                          : item.apy.minValue && item.apy.maxValue
                          ? `${item.apy.minValue} - ${item.apy.maxValue}`
                          : "N/A"}
                      </div>
                      <div className="text-gray-600 text-sm">APY</div>
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
                        {item.apyMin.apyMin === "0" || item.apyMin.apyMin === 0
                          ? "0"
                          : item.apyMin.apyMin
                          ? `${item.apyMin.apyMin}`
                          : "N/A"}
                      </div>
                      <div className="text-gray-600 text-sm">APY Minimum</div>
                    </div>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </div>

                {/* MINIMUM OPENING DEPOSIT */}
                <div className="py-4 px-6">
                  {item.minOpen ? (
                    <div>
                      <div className="font-bold text-gray-800 text-lg mb-3">
                        {item.minOpen.minOpen !== null &&
                        item.minOpen.minOpen !== undefined
                          ? `${item.minOpen.minOpen}`
                          : item.minOpen.minValue && item.minOpen.maxValue
                          ? `${item.minOpen.minValue} - ${item.minOpen.maxValue}`
                          : "N/A"}
                      </div>
                      <div className="text-gray-600 text-sm">
                        Minimum Opening Deposit
                      </div>
                    </div>
                  ) : (
                    <span className="text-gray-400">N/A</span>
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
