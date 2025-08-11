"use client";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";
import Image from "next/image";
import { NavCategory, SearchableItem } from "@/types";

const getNavLinks = (t: (key: string) => string): NavCategory[] => [
  {
    label: t('loans'),
    href: "/Loan",
    submenu: [
      { name: t('auto.loans'), href: "/Loan/autoLoan" },
      { name: t('auto.loan.refinancing'), href: "/Loan/autoLoanRefinance" },
      { name: t('business.loans'), href: "/Loan/businessLoan" },
      { name: t('personal.lines.of.credit'), href: "/Loan/personalLinesOfCredit" },
      { name: t('personal.loans'), href: "/Loan/personalLoan" },
      { name: t('private.student.loans'), href: "/Loan/privateStudentLoan" },
      { name: t('student.loan.refinancing'), href: "/Loan/StudentLoanRefinance" },
    ],
  },
  {
    label: t('credit.card'),
    href: "/CreditCard",
    submenu: [
      { name: t('business.credit.cards'), href: "/CreditCard/businessesCreditCard" },
      { name: t('personal.credit.cards'), href: "/CreditCard/personalCreditCard" },
      { name: t('prepaid.cards'), href: "/CreditCard/prepaidCard" },
    ],
  },
  {
    label: t('mortgage'),
    href: "Mortgage",
    submenu: [
      { name: t('home.equity.loans'), href: "/Mortgage/homeEquityLoan" },
      { name: t('home.purchase.mortgages'), href: "/Mortgage/homePurchaseMortgages" },
      { name: t('mortgage.refinance'), href: "/Mortgage/mortgageRefinance" },
      { name: t('shared.equity.agreements'), href: "/Mortgage/sharedEquityAgreements" },
    ],
  },
  {
    label: t('banking'),
    href: "Banking",
    submenu: [
      { name: t('cd.accounts'), href: "/Banking/cdAccounts" },
      { name: t('checking.accounts'), href: "/Banking/checkingAccounts" },
      { name: t('money.market.accounts'), href: "/Banking/moneyMarketAccounts" },
      { name: t('money.transfer.services'), href: "/Banking/moneyTransferServices" },
      { name: t('savings.accounts'), href: "/Banking/savingAcc" },
    ],
  },
];

const getSearchableItems = (navLinks: NavCategory[]): SearchableItem[] =>
  navLinks.flatMap((category) => [
    { name: category.label, href: category.href, category: category.label },
    ...category.submenu.map((item) => ({
      name: item.name,
      href: item.href,
      category: category.label,
    })),
  ]);

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchableItem[]>([]);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();
  const { t } = useLanguage();

  const navLinks = getNavLinks(t);
  const searchableItems = getSearchableItems(navLinks);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const filtered = searchableItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
    setShowResults(filtered.length > 0);
  }, [searchQuery, searchableItems]);

  const handleSearchClick = (href: string) => {
    router.push(href);
    setSearchQuery("");
    setShowResults(false);
  };

  const handleInputFocus = () => {
    if (searchQuery.trim() !== "" && searchResults.length > 0) {
      setShowResults(true);
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowResults(false), 200);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="w-full flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Northwell Health"
            width={72}
            height={72}
            className="h-18 w-auto"
          />
        </div>
        <LanguageToggle />
      </header>

      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('super.power.money')}
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            {t('smart.decisions')}
          </p>
          <div className="w-full max-w-lg mx-auto mb-6">
            <div className="relative">
              <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-sm px-4 py-3">
                <Search className="text-orange-500 h-5 w-5" />
                <input
                  type="text"
                  placeholder={t('search.placeholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className="flex-1 ml-3 outline-none bg-transparent text-gray-700 placeholder-gray-400"
                />
              </div>
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                  {searchResults.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearchClick(item.href)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.category}
                          </div>
                        </div>
                        <div className="text-xs text-gray-400">
                          {item.category === item.name ? t('category') : t('product')}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-gray-700 font-medium">{t('compare')}</span>
            {navLinks.map((link) => (
              <HoverCard key={link.label}>
                <HoverCardTrigger asChild>
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm p-0 h-auto"
                  >
                    {link.label}
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80" side="bottom" align="start">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">
                      {link.label}
                    </h4>
                    <div className="space-y-1">
                      {link.submenu.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.href}
                          className="block text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
