"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Header from "@/components/ui/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function MoneyTransferServices() {
  const [bankingDataArray, setBankingDataArray] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Dynamically import moneyTransferServices data from data.js
    import(`../../data.js`)
      .then((dataModule) => {
        const moneyTransferServicesData = (dataModule as any)
          .moneyTransferServices;
        if (Array.isArray(moneyTransferServicesData)) {
          setBankingDataArray(moneyTransferServicesData);
        } else {
          setBankingDataArray([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading moneyTransferServices data:", error);
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
            {t("no.data.found.for")} {t("money.transfer.service")}
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
            {t("money.transfer.services").toUpperCase()}
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t("money.transfer.services.title")}
          </h1>
          <p className="text-gray-700">
            {t("money.transfer.services.description")}
          </p>
          <div className="mt-4 text-sm text-gray-600">
            {t("showing")} {bankingDataArray.length} {t("of")}{" "}
            {bankingDataArray.length} {t("money.transfer.services")}
          </div>
        </div>

        {/* Table Headers - For Money Transfer Services */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1200px] grid grid-cols-7 gap-0 border-b border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wide mb-4">
            <div className="py-3 px-6">{t("product")}</div>
            <div className="py-3 px-6">{t("reviews")}</div>
            <div className="py-3 px-6">{t("transfer.limit")}</div>
            <div className="py-3 px-6">{t("transaction.limit")}</div>
            <div className="py-3 px-6">{t("fee.structure")}</div>
            <div className="py-3 px-6">{t("account.benefits")}</div>
            <div className="py-3 px-6">{t("additional.details")}</div>
          </div>
        </div>

        {/* Table Rows */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1200px] divide-y divide-gray-100">
            {bankingDataArray.map((item, idx) => (
              <div
                key={item.id || idx}
                className="grid grid-cols-7 gap-0 items-start bg-white hover:bg-gray-50 transition py-6"
              >
                {/* PRODUCT */}
                <div className="flex items-start gap-4 py-4 px-6">
                  <img
                    src={item.image}
                    alt={item.reviews?.head || t("money.transfer.service")}
                    className="h-12 w-12 object-contain bg-gray-100 rounded flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="font-semibold text-blue-600 text-base truncate">
                      {item.reviews?.head || t("n.a")}
                    </div>
                    <div className="text-green-600 font-medium text-sm mt-1">
                      {item.reviews?.head2 || t("strongly.recommended")}
                    </div>
                  </div>
                </div>

                {/* REVIEWS */}
                <div className="py-4 px-6">
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

                {/* MINIMUM TRANSFER */}
                <div className="py-4 px-6">
                  {item.minTransfer ? (
                    <div>
                      <div className="font-bold text-gray-800 text-lg mb-3">
                        {item.minTransfer.minTransfer !== null &&
                        item.minTransfer.minTransfer !== undefined
                          ? `${item.minTransfer.minTransfer}`
                          : item.minTransfer.minValue &&
                            item.minTransfer.maxValue
                          ? `${item.minTransfer.minValue} - ${item.minTransfer.maxValue}`
                          : "N/A"}
                      </div>
                      <div className="text-gray-600 text-sm">
                        Minimum Transfer
                      </div>
                    </div>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </div>

                {/* TRANSFER SPEED (DAYS) */}
                <div className="py-4 px-6">
                  {item.transferSpeed ? (
                    <div>
                      <div className="font-bold text-gray-800 text-lg mb-3">
                        {typeof item.transferSpeed === "object" &&
                        item.transferSpeed.transferSpeed !== undefined
                          ? item.transferSpeed.transferSpeed
                          : typeof item.transferSpeed === "string" ||
                            typeof item.transferSpeed === "number"
                          ? item.transferSpeed
                          : "N/A"}
                      </div>
                      <div className="text-gray-600 text-sm">
                        Transfer Speed (days)
                      </div>
                    </div>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </div>

                {/* PROCESSING FEE RANGE ($) */}
                <div className="py-4 px-6">
                  {item.processingFeeRange ? (
                    <div>
                      <div className="font-bold text-gray-800 text-lg mb-3">
                        {item.processingFeeRange.processingFeeRange !== null &&
                        item.processingFeeRange.processingFeeRange !== undefined
                          ? `${item.processingFeeRange.processingFeeRange}`
                          : item.processingFeeRange.minValue &&
                            item.processingFeeRange.maxValue
                          ? `${item.processingFeeRange.minValue} - ${item.processingFeeRange.maxValue}`
                          : "N/A"}
                      </div>
                      <div className="text-gray-600 text-sm">
                        Starting Processing Fee
                      </div>
                    </div>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </div>

                {/* PROCESSING COMMISSION */}
                <div className="py-4 px-6">
                  {item.processingCommission ? (
                    <div>
                      <div className="font-bold text-gray-800 text-lg mb-3">
                        {item.processingCommission.processingCommission !==
                          null &&
                        item.processingCommission.processingCommission !==
                          undefined
                          ? `${item.processingCommission.processingCommission}`
                          : item.processingCommission.minValue &&
                            item.processingCommission.maxValue
                          ? `${item.processingCommission.minValue} - ${item.processingCommission.maxValue}`
                          : "N/A"}
                      </div>
                      <div className="text-gray-600 text-sm">
                        Processing Commission
                      </div>
                    </div>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </div>

                {/* ADDITIONAL DETA */}
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
