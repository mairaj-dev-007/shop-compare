"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Filter, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function PayDayLoan() {
  const [loanDataArray, setLoanDataArray] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  // Filter state
  const [filters, setFilters] = useState({
    apr: 0,
    loanAmount: 0,
    noOriginationFee: false,
    noPrepaymentFee: false,
  });

  useEffect(() => {
    // Dynamically import payDayLoan data from data.js
    import(`../../data.js`)
      .then((dataModule) => {
        const payDayLoanData = (dataModule as any).payDayLoan;
        if (Array.isArray(payDayLoanData)) {
          setLoanDataArray(payDayLoanData);
        } else {
          setLoanDataArray([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading payDayLoan data:", error);
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

  if (loanDataArray.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {t("no.data.found")}
          </h1>
          <p className="text-gray-600">No data found for Pay Day Loan</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <a href="/" className="hover:text-blue-600 transition-colors">
                {t("home")}
              </a>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <a href="/loan" className="hover:text-blue-600 transition-colors">
                {t("loan")}
              </a>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-800 font-medium">PAY DAY LOAN</span>
            </div>

            {/* Filter Button and Language Toggle */}
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    {t("filter")}
                  </Button>
                </SheetTrigger>

                {/* Language Toggle */}
                <LanguageToggle />

                <SheetContent side="left" className="w-80 p-0">
                  <SheetHeader className="px-6 pt-6">
                    <SheetTitle className="flex items-center justify-between">
                      <span>{t("filter")}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setFilters({
                            apr: 0,
                            loanAmount: 0,
                            noOriginationFee: false,
                            noPrepaymentFee: false,
                          })
                        }
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {t("clear")}
                      </Button>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="px-6 py-4 space-y-6">
                    {/* APR Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("apr")} (Max: {filters.apr}%)
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="250"
                        value={filters.apr}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            apr: Number(e.target.value),
                          })
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>250%</span>
                      </div>
                    </div>

                    {/* Loan Amount Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Desired Loan Amount (Max: $
                        {filters.loanAmount.toLocaleString()})
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100000"
                        step="1000"
                        value={filters.loanAmount}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            loanAmount: Number(e.target.value),
                          })
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>$0</span>
                        <span>$100k</span>
                      </div>
                    </div>

                    {/* Fee Filters */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-gray-700">
                        {t("fees")}
                      </h3>

                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={filters.noOriginationFee}
                          onChange={(e) =>
                            setFilters({
                              ...filters,
                              noOriginationFee: e.target.checked,
                            })
                          }
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm">
                          {t("no.origination.fee")}
                        </span>
                        <span className="text-xs text-gray-500">1</span>
                      </label>

                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={filters.noPrepaymentFee}
                          onChange={(e) =>
                            setFilters({
                              ...filters,
                              noPrepaymentFee: e.target.checked,
                            })
                          }
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm">
                          {t("no.prepayment.fee")}
                        </span>
                        <span className="text-xs text-gray-500">3</span>
                      </label>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Pay Day Loans: Reviews & Comparisons
          </h1>
          <p className="text-gray-600 text-lg">
            Looking for a pay day loan? You've come to the right place. But what
            should you look for in a pay day loan?
          </p>
          <div className="mt-4 text-sm text-gray-600">
            {t("showing")} {loanDataArray.length} {t("of")}{" "}
            {loanDataArray.length} {t("results")}
          </div>
        </div>

        {/* Loan Cards */}
        <div className="space-y-6">
          {(() => {
            const filteredLoans = loanDataArray.filter((loan) => {
              // Filter by APR slider - show loans with max APR less than slider value
              const aprFilter =
                !filters.apr || loan.apr?.maxValue <= filters.apr;

              // Filter by Loan Amount slider - show loans with max amount less than slider value
              const loanAmountFilter =
                !filters.loanAmount ||
                loan.loanAmount?.maxValue <= filters.loanAmount;

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

            if (filteredLoans.length === 0) {
              return (
                <div className="text-center py-12">
                  <div className="text-gray-500 text-lg mb-2">
                    {t("no.loans.match.filters")}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {t("try.adjusting.filters")}
                  </div>
                </div>
              );
            }

            return filteredLoans.map((loan, index) => (
              <Card key={loan.id || index} className="shadow-sm">
                <CardContent className="p-6">
                  {/* Column Headers */}
                  <div className="flex items-center gap-8 mb-4 pb-2 border-b border-gray-200">
                    <div className="flex items-start gap-4 flex-shrink-0 w-80">
                      <div className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                        Product Reviews
                      </div>
                    </div>
                    <div className="flex gap-8 flex-1">
                      <div className="flex-1">
                        <div className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                          Loan Amount
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                          APR
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-48">
                      <div className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                        Additional Details
                      </div>
                    </div>
                  </div>

                  {/* Content Rows */}
                  <div className="flex items-start gap-8">
                    {/* Left Section - Company/Product Details */}
                    <div className="flex items-start gap-4 flex-shrink-0 w-80">
                      <div className="flex-shrink-0">
                        <img
                          src={loan.image}
                          alt={loan.reviews?.head || "Loan"}
                          className="h-12 w-12 object-contain bg-gray-50 rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-blue-600 text-lg">
                          {loan.reviews?.head || t("n.a")}
                        </div>
                        <div className="text-green-600 font-medium text-sm mt-1">
                          {loan.reviews?.head2 || t("recommended")}
                        </div>
                        {loan.reviews &&
                          (loan.reviews.green || loan.reviews.pink) && (
                            <div className="mt-3">
                              <div className="flex items-center gap-3">
                                <div className="flex-1">
                                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex">
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
                                        className="h-full bg-pink-500"
                                        style={{
                                          width: `${
                                            (Number(loan.reviews.pink) /
                                              (Number(loan.reviews.green) +
                                                Number(loan.reviews.pink))) *
                                            100
                                          }%`,
                                        }}
                                      />
                                    )}
                                  </div>
                                </div>
                                <div className="flex gap-2 text-xs">
                                  {loan.reviews.green && (
                                    <span className="text-green-600 font-medium">
                                      {loan.reviews.green}
                                    </span>
                                  )}
                                  {loan.reviews.pink && (
                                    <span className="text-pink-600 font-medium">
                                      {loan.reviews.pink}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                      </div>
                    </div>

                    {/* Middle Section - Key Metrics (Horizontal) */}
                    <div className="flex gap-8 flex-1">
                      {/* Loan Amount */}
                      <div className="flex-1">
                        <div className="font-bold text-gray-800 text-sm mb-2">
                          {loan.loanAmount
                            ? `$${
                                loan.loanAmount.minValue?.toLocaleString() ||
                                t("n.a")
                              } - $${
                                loan.loanAmount.maxValue?.toLocaleString() ||
                                t("n.a")
                              }`
                            : t("n.a")}
                        </div>
                        <div className="relative">
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-500 rounded-full"
                              style={{
                                width: `${Math.min(
                                  ((loan.loanAmount?.maxValue || 0) /
                                    (loan.loanAmount?.max || 100000)) *
                                    100,
                                  100
                                )}%`,
                              }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>${loan.loanAmount?.min || "0"}</span>
                            <span>${loan.loanAmount?.max || "100k"}</span>
                          </div>
                        </div>
                      </div>

                      {/* APR */}
                      <div className="flex-1">
                        <div className="font-bold text-gray-800 text-sm mb-2">
                          {loan.apr
                            ? `${loan.apr.minValue}% - ${loan.apr.maxValue}%`
                            : t("n.a")}
                        </div>
                        <div className="relative">
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-500 rounded-full"
                              style={{
                                width: `${Math.min(
                                  ((loan.apr?.maxValue || 0) /
                                    (loan.apr?.max || 250)) *
                                    100,
                                  100
                                )}%`,
                              }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>{loan.apr?.min || "2"}%</span>
                            <span>{loan.apr?.max || "250"}%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Provided Features */}
                    <div className="flex-shrink-0 w-48">
                      <div className="space-y-2">
                        {loan.additional ? (
                          loan.additional.map((feature: any, idx: number) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="text-blue-500 text-sm">✔</span>
                              <span className="text-gray-700 text-sm">
                                {feature.item}
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="text-gray-400 text-sm">
                            No additional features
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ));
          })()}
        </div>
      </main>
    </div>
  );
}
