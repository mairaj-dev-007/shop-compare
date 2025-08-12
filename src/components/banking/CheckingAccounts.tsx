"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/ui/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { BankingData, DataModule } from "@/types";

export default function CheckingAccounts() {
  const [bankingDataArray, setBankingDataArray] = useState<BankingData[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    import(`../../data.js`)
      .then((dataModule) => {
        const checkingAccountsData = (dataModule as DataModule)
          .checkingAccounts;
        if (Array.isArray(checkingAccountsData)) {
          setBankingDataArray(checkingAccountsData);
        } else {
          setBankingDataArray([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading checkingAccounts data:", error);
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
            {t("no.data.found.for")} {t("checking.account")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="absolute top-4 right-4 z-50">
        <LanguageToggle />
      </div>

      <main className="w-full px-6 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Link
            href="/"
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-xs font-medium hover:bg-blue-200 transition-colors cursor-pointer"
          >
            {t("home")}
          </Link>
          <ChevronRight className="h-4 w-4 text-blue-400" />
          <Link
            href="/"
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-xs font-medium hover:bg-blue-200 transition-colors cursor-pointer"
          >
            {t("banking")}
          </Link>
          <ChevronRight className="h-4 w-4 text-blue-400" />
          <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">
            {t("checking.accounts").toUpperCase()}
          </span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t("checking.accounts.title")}
          </h1>
          <p className="text-gray-700">{t("checking.accounts.description")}</p>
          <div className="mt-4 text-sm text-gray-600">
            {t("showing")} {bankingDataArray.length} {t("of")}{" "}
            {bankingDataArray.length} {t("checking.account")}
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="min-w-[1200px]">
            <div className="grid grid-cols-7 gap-0 bg-gray-50 border-b border-gray-200">
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("product")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("reviews")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("annual.percentage.yield")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("monthly.maintenance.fee")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("minimum.balance")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("minimum.deposit")}
              </div>
              <div className="py-3 px-6 font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("additional.details")}
              </div>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="min-w-[1200px] divide-y divide-gray-100">
              {bankingDataArray.map((banking, index) => (
                <div
                  key={banking.id || index}
                  className="grid grid-cols-7 gap-0 items-start bg-white hover:bg-gray-50 transition py-6"
                >
                  <div className="flex items-start gap-4 py-4 px-6">
                    <Image
                      src={banking.image}
                      alt={banking.reviews?.head || t("checking.account")}
                      width={48}
                      height={48}
                      className="object-contain bg-gray-100 rounded flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="font-semibold text-blue-600 text-base truncate">
                        {banking.reviews?.head || t("n.a")}
                      </div>
                    </div>
                  </div>

                  <div className="py-4 px-6">
                    <div className="text-green-600 font-medium text-sm mb-3">
                      {banking.reviews?.head2 || t("recommended")}
                    </div>
                    {banking.reviews &&
                      (banking.reviews.green || banking.reviews.pink) && (
                        <div>
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex-1">
                              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex">
                                {banking.reviews.green && (
                                  <div
                                    className="h-full bg-green-500"
                                    style={{
                                      width: `${
                                        (Number(banking.reviews.green) /
                                          (Number(banking.reviews.green) +
                                            (Number(banking.reviews.pink) ||
                                              0))) *
                                        100
                                      }%`,
                                    }}
                                  />
                                )}
                                {banking.reviews.pink && (
                                  <div
                                    className="h-full bg-pink-500"
                                    style={{
                                      width: `${
                                        (Number(banking.reviews.pink) /
                                          (Number(banking.reviews.green) +
                                            Number(banking.reviews.pink))) *
                                        100
                                      }%`,
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                            <div className="flex gap-3 text-sm">
                              {banking.reviews.green && (
                                <span className="text-green-600 font-medium">
                                  {banking.reviews.green}
                                </span>
                              )}
                              {banking.reviews.pink && (
                                <span className="text-pink-600 font-medium">
                                  {banking.reviews.pink}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-blue-600 text-sm cursor-pointer hover:underline">
                            {t("view.reviews")} {banking.reviews.review || 6}{" "}
                            {t("reviews.count")}
                          </div>
                        </div>
                      )}
                  </div>

                  {/* APY */}
                  <div className="py-4 px-6">
                    <div className="font-bold text-gray-800 text-lg mb-3">
                      {banking.apy?.minValue && banking.apy?.maxValue
                        ? `${banking.apy.minValue}% - ${banking.apy.maxValue}%`
                        : t("n.a")}
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{
                            width: `${Math.min(
                              (parseFloat(banking.apy?.maxValue || "0") /
                                parseFloat(banking.apy?.max || "5")) *
                                100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>{banking.apy?.min || "0"}%</span>
                        <span>{banking.apy?.max || "5"}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Monthly Fee */}
                  <div className="py-4 px-6">
                    <div className="font-bold text-gray-800 text-lg mb-3">
                      {banking.monthlyFee?.minValue &&
                      banking.monthlyFee?.maxValue
                        ? `$${banking.monthlyFee.minValue} - $${banking.monthlyFee.maxValue}`
                        : t("n.a")}
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{
                            width: `${Math.min(
                              (parseFloat(banking.monthlyFee?.maxValue || "0") /
                                parseFloat(banking.monthlyFee?.max || "25")) *
                                100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>${banking.monthlyFee?.min || "0"}</span>
                        <span>${banking.monthlyFee?.max || "25"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Minimum Balance */}
                  <div className="py-4 px-6">
                    <div className="font-bold text-gray-800 text-lg mb-3">
                      {banking.minimumBalance?.minValue &&
                      banking.minimumBalance?.maxValue
                        ? `$${parseInt(
                            banking.minimumBalance.minValue
                          ).toLocaleString()} - $${parseInt(
                            banking.minimumBalance.maxValue
                          ).toLocaleString()}`
                        : t("n.a")}
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{
                            width: `${Math.min(
                              (parseFloat(
                                banking.minimumBalance?.maxValue || "0"
                              ) /
                                parseFloat(
                                  banking.minimumBalance?.max || "5000"
                                )) *
                                100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>${banking.minimumBalance?.min || "0"}</span>
                        <span>${banking.minimumBalance?.max || "5000"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Minimum Deposit */}
                  <div className="py-4 px-6">
                    <div className="font-bold text-gray-800 text-lg mb-3">
                      {banking.minimumDeposit?.minValue &&
                      banking.minimumDeposit?.maxValue
                        ? `$${parseInt(
                            banking.minimumDeposit.minValue
                          ).toLocaleString()} - $${parseInt(
                            banking.minimumDeposit.maxValue
                          ).toLocaleString()}`
                        : t("n.a")}
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{
                            width: `${Math.min(
                              (parseFloat(
                                banking.minimumDeposit?.maxValue || "0"
                              ) /
                                parseFloat(
                                  banking.minimumDeposit?.max || "10000"
                                )) *
                                100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>${banking.minimumDeposit?.min || "0"}</span>
                        <span>${banking.minimumDeposit?.max || "10000"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="py-4 px-6">
                    <div className="space-y-2">
                      {banking.additional && banking.additional.length > 0 ? (
                        banking.additional.map((feature, idx: number) => (
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
