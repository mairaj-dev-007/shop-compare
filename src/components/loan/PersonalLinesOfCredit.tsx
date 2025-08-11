"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Menu, X, ChevronUp, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function PersonalLinesOfCredit() {
  const [loanDataArray, setLoanDataArray] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  const [filters, setFilters] = useState({
    noOriginationFee: false,
    noPrepaymentFee: false,
    apr: 0,
    loanAmount: 0,
  });
  const [expandedSections, setExpandedSections] = useState({
    fees: true,
    availability: false,
    ratesTerms: true,
  });

  useEffect(() => {
    // Dynamically import personalLinesOfCredit data from data.js
    import(`../../data.js`)
      .then((dataModule) => {
        const personalLinesOfCreditData = (dataModule as any)
          .personalLinesOfCredit;
        if (Array.isArray(personalLinesOfCreditData)) {
          setLoanDataArray(personalLinesOfCreditData);
        } else {
          setLoanDataArray([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading personalLinesOfCredit data:", error);
        setLoanDataArray([]);
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

  if (!loanDataArray || loanDataArray.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {t("no.data.found")}
          </h1>
          <p className="text-gray-600">
            {t("no.data.found.for")} Personal Lines of Credit
          </p>
        </div>
      </div>
    );
  }

  const filteredLoans = loanDataArray.filter((loan) => {
    // Filter by APR slider - show loans with max APR less than slider value
    const aprFilter = !filters.apr || loan.apr?.maxValue <= filters.apr;

    // Filter by Loan Amount slider - show loans with max amount less than slider value
    const loanAmountFilter =
      !filters.loanAmount || loan.loanAmount?.maxValue <= filters.loanAmount;

    // Filter by checkboxes
    const noOriginationFeeFilter =
      !filters.noOriginationFee ||
      loan.additional?.some((feature: any) =>
        feature.item.toLowerCase().includes("origination fee")
      );

    const noPrepaymentFeeFilter =
      !filters.noPrepaymentFee ||
      loan.additional?.some((feature: any) =>
        feature.item.toLowerCase().includes("prepayment fee")
      );

    return (
      aprFilter &&
      loanAmountFilter &&
      noOriginationFeeFilter &&
      noPrepaymentFeeFilter
    );
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-blue-600 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white hover:bg-blue-700 p-1 rounded">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>

            {/* Language Toggle */}
            <LanguageToggle />

            <SheetContent side="left" className="w-80 p-0">
              <SheetHeader className="px-6 pt-6">
                <SheetTitle className="text-left">▼ {t("filter")}</SheetTitle>
              </SheetHeader>

              <div className="px-6 mt-6">
                <button
                  onClick={() => {
                    setFilters({
                      noOriginationFee: false,
                      noPrepaymentFee: false,
                      apr: 250,
                      loanAmount: 50000,
                    });
                  }}
                  className="text-blue-600 text-sm mb-6 block hover:text-blue-800"
                >
                  {t("clear")}
                </button>

                {/* FEES Section */}
                <div className="mb-6">
                  <button
                    onClick={() =>
                      setExpandedSections((prev) => ({
                        ...prev,
                        fees: !prev.fees,
                      }))
                    }
                    className="flex items-center justify-between w-full text-left font-semibold text-gray-800 mb-3 hover:text-gray-600"
                  >
                    {t("fees")}
                    {expandedSections.fees ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {expandedSections.fees && (
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.noOriginationFee}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              noOriginationFee: e.target.checked,
                            }))
                          }
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm">
                          {t("no.origination.fee")}
                        </span>
                        <span className="text-xs text-gray-500">1</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.noPrepaymentFee}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              noPrepaymentFee: e.target.checked,
                            }))
                          }
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm">
                          {t("no.prepayment.fee")}
                        </span>
                        <span className="text-xs text-gray-500">3</span>
                      </label>
                    </div>
                  )}
                </div>

                {/* Availability Section */}
                <div className="mb-6">
                  <button
                    onClick={() =>
                      setExpandedSections((prev) => ({
                        ...prev,
                        availability: !prev.availability,
                      }))
                    }
                    className="flex items-center justify-between w-full text-left font-semibold text-gray-800 mb-3 hover:text-gray-600"
                  >
                    {t("availability")}
                    {expandedSections.availability ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {expandedSections.availability && (
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm">{t("any")}</span>
                      </label>
                    </div>
                  )}
                </div>

                {/* Rates & Terms Section */}
                <div className="mb-6">
                  <button
                    onClick={() =>
                      setExpandedSections((prev) => ({
                        ...prev,
                        ratesTerms: !prev.ratesTerms,
                      }))
                    }
                    className="flex items-center justify-between w-full text-left font-semibold text-gray-800 mb-3 hover:text-gray-600"
                  >
                    {t("rates.terms")}
                    {expandedSections.ratesTerms ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {expandedSections.ratesTerms && (
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm">{t("any")}</span>
                      </label>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t("apr")}
                        </label>
                        <div className="relative">
                          <input
                            type="range"
                            min="0"
                            max="500"
                            value={filters.apr}
                            onChange={(e) =>
                              setFilters((prev) => ({
                                ...prev,
                                apr: parseInt(e.target.value),
                              }))
                            }
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                          <div
                            className="absolute top-0 left-0 h-2 bg-blue-500 rounded-lg pointer-events-none"
                            style={{ width: `${(filters.apr / 500) * 100}%` }}
                          />
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {filters.apr}%
                        </div>
                      </div>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm">{t("any")}</span>
                      </label>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t("desired.loan.amount")}
                        </label>
                        <div className="relative">
                          <input
                            type="range"
                            min="0"
                            max="100000"
                            value={filters.loanAmount}
                            onChange={(e) =>
                              setFilters((prev) => ({
                                ...prev,
                                loanAmount: parseInt(e.target.value),
                              }))
                            }
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                          <div
                            className="absolute top-0 left-0 h-2 bg-blue-500 rounded-lg pointer-events-none"
                            style={{
                              width: `${(filters.loanAmount / 100000) * 100}%`,
                            }}
                          />
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          ${filters.loanAmount.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

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
            {t("loan")}
          </a>
          <ChevronRight className="h-4 w-4 text-blue-400" />
          <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">
            {t("personal.lines.of.credit")}
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t("personal.lines.of.credit.title")}
          </h1>
          <p className="text-gray-700">
            {t("personal.lines.of.credit.description")}
          </p>
          <div className="mt-4 text-sm text-gray-600">
            {t("showing")} {filteredLoans.length} {t("of")}{" "}
            {loanDataArray.length} {t("results")}
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <div className="min-w-[1200px]">
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-6 py-4 border-b-2 border-gray-200 bg-gray-50">
              <div className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("product")}
              </div>
              <div className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("reviews")}
              </div>
              <div className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("loan.amount")}
              </div>
              <div className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("apr")}
              </div>
              <div className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                {t("additional.details")}
              </div>
            </div>

            {/* All Data Rows */}
            {filteredLoans.map((loan, index) => (
              <div
                key={loan.id || index}
                className="grid grid-cols-5 gap-6 py-4 border-b border-gray-100"
              >
                {/* PRODUCT */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <img
                      src={loan.image}
                      alt={loan.reviews?.head || "Loan"}
                      className="h-20 w-20 object-contain bg-gray-50 rounded"
                    />
                  </div>
                </div>

                {/* REVIEWS */}
                <div>
                  <div className="font-semibold text-blue-600 text-sm mb-2">
                    {loan.reviews?.head || t("n.a")}
                  </div>
                  <div
                    className={`text-sm font-medium mb-2 ${
                      loan.reviews && (loan.reviews.green || loan.reviews.pink)
                        ? "text-gray-800"
                        : "text-green-600"
                    }`}
                  >
                    {loan.reviews && (loan.reviews.green || loan.reviews.pink)
                      ? loan.reviews?.recommendation || t("recommended")
                      : t("rating.not.yet.determined")}
                  </div>
                  {loan.reviews && (loan.reviews.green || loan.reviews.pink) ? (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden flex">
                        {loan.reviews.green && (
                          <div
                            className="h-full bg-green-500"
                            style={{
                              width: `${
                                (Number(loan.reviews.green) /
                                  (Number(loan.reviews.green) +
                                    (Number(loan.reviews.pink) || 0))) *
                                100
                              }%`,
                            }}
                          />
                        )}
                        {loan.reviews.pink && (
                          <div
                            className="h-full bg-red-500"
                            style={{
                              width: `${
                                (Number(loan.reviews.pink) /
                                  (Number(loan.reviews.green) + Number(loan.reviews.pink))) *
                                100
                              }%`,
                            }}
                          />
                        )}
                      </div>
                      <div className="flex gap-2 text-xs">
                        {loan.reviews.green && (
                          <span className="text-green-600 font-medium">
                            {loan.reviews.green}
                          </span>
                        )}
                        {loan.reviews.pink && (
                          <span className="text-red-600 font-medium">
                            {loan.reviews.pink}
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                        <div className="w-3 h-3 bg-pink-500 rounded-sm"></div>
                      </div>
                      <span className="text-red-600 font-medium text-xs">
                        00
                      </span>
                    </div>
                  )}
                  <button className="text-blue-600 text-xs hover:text-blue-800">
                    {t("view.reviews")}
                  </button>
                </div>

                {/* LOAN AMOUNT */}
                <div>
                  <div className="text-sm font-medium text-gray-800 mb-2">
                    ${loan.loanAmount?.minValue?.toLocaleString() || t("n.a")} -
                    ${loan.loanAmount?.maxValue?.toLocaleString() || t("n.a")}
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{
                          width: `${
                            (((loan.loanAmount?.maxValue || 100000) -
                              (loan.loanAmount?.minValue || 0)) /
                              (100000 - 0)) *
                            100
                          }%`,
                          marginLeft: `${
                            (((loan.loanAmount?.minValue || 0) - 0) /
                              (100000 - 0)) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$0</span>
                      <span>$100k</span>
                    </div>
                  </div>
                </div>

                {/* APR */}
                <div className="min-w-0">
                  <div className="text-sm font-medium text-gray-800 mb-2">
                    {loan.apr?.minValue || t("n.a")}% -{" "}
                    {loan.apr?.maxValue || t("n.a")}%
                  </div>
                  <div className="relative w-full">
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{
                          width: `${
                            (((loan.apr?.maxValue || 250) -
                              (loan.apr?.minValue || 2)) /
                              (250 - 2)) *
                            100
                          }%`,
                          marginLeft: `${
                            (((loan.apr?.minValue || 2) - 2) / (250 - 2)) * 100
                          }%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>2%</span>
                      <span>250%</span>
                    </div>
                  </div>
                </div>

                {/* ADDITIONAL DETAILS */}
                <div className="min-w-0">
                  {loan.additional && loan.additional.length > 0 ? (
                    <div className="space-y-1">
                      {loan.additional
                        .slice(0, 4)
                        .map((feature: any, idx: number) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            </div>
                            <span className="text-xs text-gray-700 truncate">
                              {feature.item}
                            </span>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="text-xs text-gray-400">
                      No additional details
                    </div>
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
