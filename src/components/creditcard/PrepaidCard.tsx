"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Header from "@/components/ui/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function PrepaidCard() {
  const [creditCardDataArray, setCreditCardDataArray] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Dynamically import prepaidCard data from data.js
    import(`../../data.js`)
      .then((dataModule) => {
        const prepaidCardData = (dataModule as any).prepaidCard;
        if (Array.isArray(prepaidCardData)) {
          setCreditCardDataArray(prepaidCardData);
        } else {
          setCreditCardDataArray([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading prepaidCard data:", error);
        setCreditCardDataArray([]);
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

  if (!creditCardDataArray || creditCardDataArray.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {t("no.data.found")}
          </h1>
          <p className="text-gray-600">
            {t("no.data.found.for")} {t("prepaid.card")}
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
            {t("credit.card")}
          </a>
          <ChevronRight className="h-4 w-4 text-blue-400" />
          <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">
            {t("prepaid.cards").toUpperCase()}
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t("prepaid.cards.title")}
          </h1>
          <p className="text-gray-700">{t("prepaid.cards.description")}</p>
          <div className="mt-4 text-sm text-gray-600">
            {t("showing")} {creditCardDataArray.length} {t("of")}{" "}
            {creditCardDataArray.length} {t("prepaid.cards")}
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
                {t("signature.purchase.transaction.fee")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("pin.purchase.transaction.fee")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("monthly.fee")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("card.reload.fee")}
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[1200px] divide-y divide-gray-100">
              {creditCardDataArray.map((creditCard, index) => (
                <div
                  key={creditCard.id || index}
                  className="grid grid-cols-6 gap-0 items-start bg-white hover:bg-gray-50 transition py-6"
                >
                  {/* Product */}
                  <div className="flex items-start gap-4 py-4 px-6">
                    <img
                      src={creditCard.image}
                      alt={creditCard.reviews?.head || t("prepaid.card")}
                      className="h-12 w-12 object-contain bg-gray-100 rounded flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="font-semibold text-blue-600 text-base truncate">
                        {creditCard.reviews?.head || t("n.a")}
                      </div>
                    </div>
                  </div>

                  {/* Reviews */}
                  <div className="py-4 px-6">
                    <div className="text-green-600 font-medium text-sm mb-3">
                      {creditCard.reviews?.head2 || t("strongly.recommended")}
                    </div>
                    {creditCard.reviews &&
                      (creditCard.reviews.green || creditCard.reviews.pink) && (
                        <div>
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex-1">
                              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex">
                                {creditCard.reviews.green && (
                                  <div
                                    className="h-full bg-green-500"
                                    style={{
                                      width: `${
                                        (Number(creditCard.reviews.green) /
                                          (Number(creditCard.reviews.green) +
                                            (Number(creditCard.reviews.pink) || 0))) *
                                        100
                                      }%`,
                                    }}
                                  />
                                )}
                                {creditCard.reviews.pink && (
                                  <div
                                    className="h-full bg-pink-500"
                                    style={{
                                      width: `${
                                        (Number(creditCard.reviews.pink) /
                                          (Number(creditCard.reviews.green) +
                                            Number(creditCard.reviews.pink))) *
                                        100
                                      }%`,
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                            <div className="flex gap-3 text-sm">
                              {creditCard.reviews.green && (
                                <span className="text-green-600 font-medium">
                                  {creditCard.reviews.green}
                                </span>
                              )}
                              {creditCard.reviews.pink && (
                                <span className="text-pink-600 font-medium">
                                  {creditCard.reviews.pink}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-blue-600 text-sm cursor-pointer hover:underline">
                            View Reviews
                          </div>
                        </div>
                      )}
                  </div>

                  {/* Signature Purchase Transaction Fee */}
                  <div className="py-4 px-6">
                    <div className="font-bold text-gray-800 text-lg mb-3">
                      {creditCard.signPurchaseTransFee === "0" ||
                      creditCard.signPurchaseTransFee === 0
                        ? "$0"
                        : creditCard.signPurchaseTransFee
                        ? `$${creditCard.signPurchaseTransFee}`
                        : "N/A"}
                    </div>
                    <div className="text-xs text-gray-500">
                      Signature Purchase Transaction Fee
                    </div>
                  </div>

                  {/* PIN Purchase Transaction Fee */}
                  <div className="py-4 px-6">
                    <div className="font-bold text-gray-800 text-lg mb-3">
                      {creditCard.pinPurchaseTransFee === "0" ||
                      creditCard.pinPurchaseTransFee === 0
                        ? "$0"
                        : creditCard.pinPurchaseTransFee
                        ? `$${creditCard.pinPurchaseTransFee}`
                        : "N/A"}
                    </div>
                    <div className="text-xs text-gray-500">
                      PIN Purchase Transaction Fee
                    </div>
                  </div>

                  {/* Monthly Fee */}
                  <div className="py-4 px-6">
                    <div className="font-bold text-gray-800 text-lg mb-3">
                      {creditCard.monthlyFee
                        ? typeof creditCard.monthlyFee === "object"
                          ? creditCard.monthlyFee.monthlyFee === "0" ||
                            creditCard.monthlyFee.monthlyFee === 0
                            ? "$0"
                            : `$${creditCard.monthlyFee.monthlyFee}`
                          : creditCard.monthlyFee === "0" ||
                            creditCard.monthlyFee === 0
                          ? "$0"
                          : `$${creditCard.monthlyFee}`
                        : "N/A"}
                    </div>
                    <div className="text-xs text-gray-500">Monthly Fee</div>
                  </div>

                  {/* Card Reload Fee */}
                  <div className="py-4 px-6">
                    <div className="font-bold text-gray-800 text-lg mb-3">
                      {creditCard.creditReloadFee
                        ? typeof creditCard.creditReloadFee === "object"
                          ? creditCard.creditReloadFee.creditReloadFee ===
                              null ||
                            creditCard.creditReloadFee.creditReloadFee ===
                              "0" ||
                            creditCard.creditReloadFee.creditReloadFee === 0
                            ? "$0"
                            : creditCard.creditReloadFee.creditReloadFee
                            ? `$${creditCard.creditReloadFee.creditReloadFee}`
                            : `${creditCard.creditReloadFee.minValue} - $${creditCard.creditReloadFee.maxValue}`
                          : typeof creditCard.creditReloadFee === "string"
                          ? `$${creditCard.creditReloadFee}`
                          : `${creditCard.creditReloadFee.minValue} - $${creditCard.creditReloadFee.maxValue}`
                        : "N/A"}
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{
                            width: `${Math.min(
                              ((creditCard.creditReloadFee?.maxValue || 0) /
                                (creditCard.creditReloadFee?.max || 10)) *
                                100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>${creditCard.creditReloadFee?.min || "0"}</span>
                        <span>${creditCard.creditReloadFee?.max || "10"}</span>
                      </div>
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
