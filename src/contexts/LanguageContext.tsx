"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "skill.assignment": "Skill Assignment",
    "super.power.money": "Super power your money.",
    "smart.decisions": "Smart financial decisions start here.",
    "search.placeholder": "Try 'personal loan' or 'refinance'",
    compare: "Compare:",

    // Navigation
    loans: "Loans",
    "credit.card": "CreditCard",
    mortgage: "Mortgage",
    banking: "Banking",

    // Loan submenu
    "auto.loans": "Auto Loans",
    "auto.loan.refinancing": "Auto Loan Refinancing",
    "business.loans": "Business Loans",
    "personal.lines.of.credit": "Personal Lines of Credit",
    "personal.loans": "Personal Loans",
    "private.student.loans": "Private Student Loans",
    "student.loan.refinancing": "Student Loan Refinancing",

    // Credit Card submenu
    "business.credit.cards": "Business Credit Cards",
    "personal.credit.cards": "Personal Credit Cards",
    "prepaid.cards": "Prepaid Cards",

    // Mortgage submenu
    "home.equity.loans": "Home Equity Loans",
    "home.purchase.mortgages": "Home Purchase Mortgages",
    "mortgage.refinance": "Mortgage Refinance",
    "shared.equity.agreements": "Shared Equity Agreements",

    // Banking submenu
    "cd.accounts": "CD Accounts",
    "checking.accounts": "Checking Accounts",
    "money.market.accounts": "Money Market Accounts",
    "money.transfer.services": "Money Transfer Services",
    "savings.accounts": "Savings Accounts",

    // Categories
    category: "Category",
    product: "Product",

    // Loan Components - Common
    loading: "Loading...",
    "no.data.found": "No Data Found",
    "no.data.found.for": "No data found for",
    "component.not.found": "Component Not Found",
    clear: "Clear",
    filter: "Filter",
    fees: "FEES",
    availability: "Availability",
    "rates.terms": "Rates & Terms",
    "no.origination.fee": "No Origination Fee",
    "no.prepayment.fee": "No Prepayment Fee",
    "origination.fee": "Origination Fee",
    "no.additional.features": "No additional features",
    any: "Any",
    "credit.score": "Credit Score",
    "loan.amount": "Loan Amount",
    apr: "APR",
    "loan.term": "Loan Term",
    "additional.features": "Additional Features",
    reviews: "Reviews",
    "mostly.recommended": "Mostly recommended",
    "strongly.recommended": "Strongly recommended",
    "reviews.count": "reviews",
    min: "Min",
    max: "Max",
    months: "months",
    years: "years",
    "no.late.fees": "No Late Fees",
    "apply.now": "Apply Now",
    "learn.more": "Learn More",
    "view.details": "View Details",
    "compare.loans": "Compare Loans",
    "sort.by": "Sort by",
    "best.match": "Best Match",
    "lowest.apr": "Lowest APR",
    "highest.apr": "Highest APR",
    "lowest.loan.amount": "Lowest Loan Amount",
    "highest.loan.amount": "Highest Loan Amount",
    "lowest.credit.score": "Lowest Credit Score",
    "highest.credit.score": "Highest Credit Score",
    "results.found": "results found",
    showing: "Showing",
    of: "of",
    results: "results",

    // Additional loan component strings
    "no.loans.match.filters": "No loans match your current filters",
    "try.adjusting.filters":
      "Try adjusting your APR, loan amount, or fee preferences",
    "credit.score.range": "CREDIT SCORE RANGE",
    "loan.term.months": "LOAN TERM (MONTHS)",
    "additional.details": "ADDITIONAL DETAILS",
    "desired.loan.amount": "Desired Loan Amount",
    "auto.loan": "Auto Loan",
    recommended: "Recommended",
    "view.reviews": "View Reviews",
    "n.a": "N/A",

    // Page titles and descriptions
    "private.student.loans.title":
      "Private Student Loans: Reviews & Comparisons",
    "private.student.loans.description":
      "Looking for a private student loan? You've come to the right place. But what should you look for in a private student loan?",
    "personal.loans.title": "Personal Loans: Reviews & Comparisons",
    "personal.loans.description":
      "Looking for a personal loan? You've come to the right place. But what should you look for in a personal loan?",
    "business.loans.title": "Business Loans: Reviews & Comparisons",
    "business.loans.description":
      "Looking for a business loan? You've come to the right place. But what should you look for in a business loan?",
    "auto.loans.title": "Auto Loans: Reviews & Comparisons",
    "auto.loans.description":
      "Looking for an auto loan? You've come to the right place. But what should you look for in an auto loan?",
    "auto.title.loans.title": "Auto Title Loans: Reviews & Comparisons",
    "auto.title.loans.description":
      "Looking for an auto title loan? You've come to the right place. But what should you look for in an auto title loan?",
    "pay.day.loans.title": "Pay Day Loans: Reviews & Comparisons",
    "pay.day.loans.description":
      "Looking for a pay day loan? You've come to the right place. But what should you look for in a pay day loan?",
    "personal.lines.of.credit.title":
      "Personal Lines of Credit: Reviews & Comparisons",
    "personal.lines.of.credit.description":
      "Looking for a personal line of credit? You've come to the right place. But what should you look for in a personal line of credit?",
    "student.loan.refinancing.title":
      "Student Loan Refinancing: Reviews & Comparisons",
    "student.loan.refinancing.description":
      "Refinancing student loans can help you lower your payments by consolidating your private or federal student loans into a single, more manageable loan.",
    "auto.loan.refinancing.title":
      "Auto Loan Refinancing: Reviews & Comparisons",
    "auto.loan.refinancing.description":
      "Looking for an auto loan refinance? You've come to the right place. But what should you look for in an auto loan refinance?",
    "home.equity.loans.title": "Home Equity Loans: Reviews & Comparisons",
    "home.equity.loans.description":
      "Looking for a home equity loan? You've come to the right place. But what should you look for in a home equity loan?",
    home: "Home",
    loan: "Loan",
    "rating.not.yet.determined": "Rating not yet determined",
    "fixed.apr": "FIXED APR",
    "variable.apr": "VARIABLE APR",

    // Credit Card Components - Common
    "credit.limit": "Credit Limit",
    "annual.fee": "Annual Fee",
    "intro.apr": "Intro APR",
    "regular.apr": "Regular APR",
    "balance.transfer": "Balance Transfer",
    "cash.back": "Cash Back",
    "rewards.program": "Rewards Program",
    "travel.rewards": "Travel Rewards",
    "signup.bonus": "Sign-up Bonus",
    "foreign.transaction.fee": "Foreign Transaction Fee",
    "late.payment.fee": "Late Payment Fee",
    "over.limit.fee": "Over Limit Fee",
    "credit.score.required": "Credit Score Required",
    "card.type": "Card Type",
    "rewards.rate": "Rewards Rate",
    "intro.period": "Intro Period",
    "balance.transfer.fee": "Balance Transfer Fee",
    "cash.advance.fee": "Cash Advance Fee",
    "annual.percentage.rate": "Annual Percentage Rate",
    "credit.limit.range": "CREDIT LIMIT RANGE",
    "annual.fee.range": "ANNUAL FEE RANGE",
    "intro.apr.range": "INTRO APR RANGE",
    "regular.apr.range": "REGULAR APR RANGE",

    // Credit Card Page titles and descriptions
    "personal.credit.cards.title":
      "Personal Credit Cards: Reviews & Comparisons",
    "personal.credit.cards.description":
      "Looking for a personal credit card? You've come to the right place. But what should you look for in a personal credit card?",
    "business.credit.cards.title":
      "Business Credit Cards: Reviews & Comparisons",
    "business.credit.cards.description":
      "Looking for a business credit card? You've come to the right place. But what should you look for in a business credit card?",
    "prepaid.cards.title": "Prepaid Cards: Reviews & Comparisons",
    "prepaid.cards.description":
      "Looking for a prepaid card? You've come to the right place. But what should you look for in a prepaid card?",
    "personal.credit.card": "Personal Credit Card",
    "business.credit.card": "Business Credit Card",
    "prepaid.card": "Prepaid Card",
    "signature.purchase.transaction.fee": "Signature Purchase Transaction Fee",
    "pin.purchase.transaction.fee": "PIN Purchase Transaction Fee",
    "monthly.fee": "Monthly Fee",
    "card.reload.fee": "Card Reload Fee",

    // Banking Components - Common
    "account.type": "Account Type",
    "minimum.deposit": "Minimum Deposit",
    "minimum.balance": "Minimum Balance",
    "interest.rate": "Interest Rate",
    "annual.percentage.yield": "Annual Percentage Yield",
    "monthly.maintenance.fee": "Monthly Maintenance Fee",
    "overdraft.fee": "Overdraft Fee",
    "atm.fee": "ATM Fee",
    "wire.transfer.fee": "Wire Transfer Fee",
    "online.banking": "Online Banking",
    "mobile.banking": "Mobile Banking",
    "bill.pay": "Bill Pay",
    "direct.deposit": "Direct Deposit",
    "debit.card": "Debit Card",
    "check.writing": "Check Writing",
    "account.features": "Account Features",
    "transfer.limit": "Transfer Limit",
    "daily.limit": "Daily Limit",
    "monthly.limit": "Monthly Limit",
    "transaction.limit": "Transaction Limit",
    "fee.structure": "Fee Structure",
    "account.benefits": "Account Benefits",
    "cd.term": "CD Term",
    "early.withdrawal.penalty": "Early Withdrawal Penalty",
    "compounding.frequency": "Compounding Frequency",
    "savings.goal": "Savings Goal",
    "emergency.fund": "Emergency Fund",
    "investment.options": "Investment Options",
    "money.market.rate": "Money Market Rate",
    "checking.features": "Checking Features",
    "savings.features": "Savings Features",
    "business.features": "Business Features",

    // Banking Page titles and descriptions
    "checking.accounts.title": "Checking Accounts: Reviews & Comparisons",
    "checking.accounts.description":
      "Looking for a checking account? You've come to the right place. But what should you look for in a checking account?",
    "savings.accounts.title": "Savings Accounts: Reviews & Comparisons",
    "savings.accounts.description":
      "Looking for a savings account? You've come to the right place. But what should you look for in a savings account?",
    "cd.accounts.title": "CD Accounts: Reviews & Comparisons",
    "cd.accounts.description":
      "Looking for a CD account? You've come to the right place. But what should you look for in a CD account?",
    "money.market.accounts.title":
      "Money Market Accounts: Reviews & Comparisons",
    "money.market.accounts.description":
      "Looking for a money market account? You've come to the right place. But what should you look for in a money market account?",
    "business.checking.accounts.title":
      "Business Checking Accounts: Reviews & Comparisons",
    "business.checking.accounts.description":
      "Looking for a business checking account? You've come to the right place. But what should you look for in a business checking account?",
    "money.transfer.services.title":
      "Money Transfer Services: Reviews & Comparisons",
    "money.transfer.services.description":
      "Looking for money transfer services? You've come to the right place. But what should you look for in money transfer services?",
    "checking.account": "Checking Account",
    "savings.account": "Savings Account",
    "cd.account": "CD Account",
    "money.market.account": "Money Market Account",
    "business.checking.account": "Business Checking Account",
    "money.transfer.service": "Money Transfer Service",

    // Mortgage Components - Common
    "loan.term.years": "Loan Term (Years)",
    "maximum.ltv": "Maximum LTV",
    "mortgage.type": "Mortgage Type",
    "down.payment": "Down Payment",
    "closing.costs": "Closing Costs",
    "mortgage.insurance": "Mortgage Insurance",
    "property.type": "Property Type",
    "debt.to.income.ratio": "Debt-to-Income Ratio",
    "mortgage.rate": "Mortgage Rate",
    "fixed.rate": "Fixed Rate",
    "adjustable.rate": "Adjustable Rate",
    "conventional.mortgage": "Conventional Mortgage",
    "fha.mortgage": "FHA Mortgage",
    "va.mortgage": "VA Mortgage",
    "usda.mortgage": "USDA Mortgage",
    "jumbo.mortgage": "Jumbo Mortgage",
    "conforming.loan": "Conforming Loan",
    "non.conforming.loan": "Non-Conforming Loan",
    "primary.residence": "Primary Residence",
    "secondary.residence": "Secondary Residence",
    "investment.property": "Investment Property",
    "mortgage.broker": "Mortgage Broker",
    "reverse.mortgage": "Reverse Mortgage",
    "shared.equity.agreement": "Shared Equity Agreement",

    // Mortgage Page titles and descriptions
    "home.purchase.mortgages.title":
      "Home Purchase Mortgages: Reviews & Comparisons",
    "home.purchase.mortgages.description":
      "Looking for a home purchase mortgage? You've come to the right place. But what should you look for in a home purchase mortgage?",
    "mortgage.refinance.title": "Mortgage Refinance: Reviews & Comparisons",
    "mortgage.refinance.description":
      "Looking for mortgage refinance? You've come to the right place. But what should you look for in mortgage refinance?",
    "shared.equity.agreements.title":
      "Shared Equity Agreements: Reviews & Comparisons",
    "shared.equity.agreements.description":
      "Looking for shared equity agreements? You've come to the right place. But what should you look for in shared equity agreements?",
    "mortgage.broker.title": "Mortgage Brokers: Reviews & Comparisons",
    "mortgage.broker.description":
      "Looking for a mortgage broker? You've come to the right place. But what should you look for in a mortgage broker?",
    "reverse.mortgages.title": "Reverse Mortgages: Reviews & Comparisons",
    "reverse.mortgages.description":
      "Looking for a reverse mortgage? You've come to the right place. But what should you look for in a reverse mortgage?",
    "home.purchase.mortgage": "Home Purchase Mortgage",
    "mortgage.refinance.product": "Mortgage Refinance",
    "shared.equity.agreement.product": "Shared Equity Agreement",
    "mortgage.broker.service": "Mortgage Broker",
    "reverse.mortgage.product": "Reverse Mortgage",

    // Mortgage specific translations
    "shared.equity.use.case": "Shared Equity Use Case",
    "investment.range.dollars": "Investment Range $",
    "investment.range.percentage": "Investment Range %",
    "product.website": "Product Website",
  },
  es: {
    // Header
    "skill.assignment": "Asignación de Habilidades",
    "super.power.money": "Potencia tu dinero.",
    "smart.decisions":
      "Las decisiones financieras inteligentes comienzan aquí.",
    "search.placeholder": "Prueba 'préstamo personal' o 'refinanciamiento'",
    compare: "Comparar:",

    // Navigation
    loans: "Préstamos",
    "credit.card": "Tarjetas de Crédito",
    mortgage: "Hipotecas",
    banking: "Banca",

    // Loan submenu
    "auto.loans": "Préstamos de Auto",
    "auto.loan.refinancing": "Refinanciamiento de Préstamos de Auto",
    "business.loans": "Préstamos Comerciales",
    "personal.lines.of.credit": "Líneas de Crédito Personales",
    "personal.loans": "Préstamos Personales",
    "private.student.loans": "Préstamos Estudiantiles Privados",
    "student.loan.refinancing": "Refinanciamiento de Préstamos Estudiantiles",

    // Credit Card submenu
    "business.credit.cards": "Tarjetas de Crédito Comerciales",
    "personal.credit.cards": "Tarjetas de Crédito Personales",
    "prepaid.cards": "Tarjetas Prepagadas",

    // Mortgage submenu
    "home.equity.loans": "Préstamos de Capital de Vivienda",
    "home.purchase.mortgages": "Hipotecas de Compra de Vivienda",
    "mortgage.refinance": "Refinanciamiento de Hipoteca",
    "shared.equity.agreements": "Acuerdos de Capital Compartido",

    // Banking submenu
    "cd.accounts": "Cuentas de CD",
    "checking.accounts": "Cuentas Corrientes",
    "money.market.accounts": "Cuentas del Mercado Monetario",
    "money.transfer.services": "Servicios de Transferencia de Dinero",
    "savings.accounts": "Cuentas de Ahorro",

    // Categories
    category: "Categoría",
    product: "Producto",

    // Loan Components - Common
    loading: "Cargando...",
    "no.data.found": "No se encontraron datos",
    "no.data.found.for": "No se encontraron datos para",
    "component.not.found": "Componente no encontrado",
    clear: "Limpiar",
    filter: "Filtrar",
    fees: "TARIFAS",
    availability: "Disponibilidad",
    "rates.terms": "Tasas y Términos",
    "no.origination.fee": "Sin tarifa de originación",
    "no.prepayment.fee": "Sin tarifa de prepago",
    "origination.fee": "Tarifa de Originación",
    "no.additional.features": "Sin características adicionales",
    any: "Cualquiera",
    "credit.score": "Puntuación de crédito",
    "loan.amount": "Cantidad del préstamo",
    apr: "TEA",
    "loan.term": "Plazo del préstamo",
    "additional.features": "Características adicionales",
    reviews: "Reseñas",
    "mostly.recommended": "Mayormente recomendado",
    "strongly.recommended": "Fuertemente recomendado",
    "reviews.count": "reseñas",
    min: "Mín",
    max: "Máx",
    months: "meses",
    years: "años",
    "no.late.fees": "Sin tarifas por retraso",
    "apply.now": "Aplicar ahora",
    "learn.more": "Aprender más",
    "view.details": "Ver detalles",
    "compare.loans": "Comparar préstamos",
    "sort.by": "Ordenar por",
    "best.match": "Mejor coincidencia",
    "lowest.apr": "TEA más baja",
    "highest.apr": "TEA más alta",
    "lowest.loan.amount": "Cantidad de préstamo más baja",
    "highest.loan.amount": "Cantidad de préstamo más alta",
    "lowest.credit.score": "Puntuación de crédito más baja",
    "highest.credit.score": "Puntuación de crédito más alta",
    "results.found": "resultados encontrados",
    showing: "Mostrando",
    of: "de",
    results: "resultados",

    // Additional loan component strings
    "no.loans.match.filters":
      "Ningún préstamo coincide con tus filtros actuales",
    "try.adjusting.filters":
      "Intenta ajustar tu TEA, cantidad del préstamo o preferencias de tarifas",
    "credit.score.range": "RANGO DE PUNTUACIÓN DE CRÉDITO",
    "loan.term.months": "PLAZO DEL PRÉSTAMO (MESES)",
    "additional.details": "DETALLES ADICIONALES",
    "desired.loan.amount": "Cantidad del préstamo deseada",
    "auto.loan": "Préstamo de Auto",
    recommended: "Recomendado",
    "view.reviews": "Ver Reseñas",
    "n.a": "N/A",

    // Page titles and descriptions
    "private.student.loans.title":
      "Préstamos Estudiantiles Privados: Reseñas y Comparaciones",
    "private.student.loans.description":
      "¿Buscas un préstamo estudiantil privado? Has llegado al lugar correcto. Pero ¿qué debes buscar en un préstamo estudiantil privado?",
    "personal.loans.title": "Préstamos Personales: Reseñas y Comparaciones",
    "personal.loans.description":
      "¿Buscas un préstamo personal? Has llegado al lugar correcto. Pero ¿qué debes buscar en un préstamo personal?",
    "business.loans.title": "Préstamos Comerciales: Reseñas y Comparaciones",
    "business.loans.description":
      "¿Buscas un préstamo comercial? Has llegado al lugar correcto. Pero ¿qué debes buscar en un préstamo comercial?",
    "auto.loans.title": "Préstamos de Auto: Reseñas y Comparaciones",
    "auto.loans.description":
      "¿Buscas un préstamo de auto? Has llegado al lugar correcto. Pero ¿qué debes buscar en un préstamo de auto?",
    "auto.title.loans.title":
      "Préstamos de Título de Auto: Reseñas y Comparaciones",
    "auto.title.loans.description":
      "¿Buscas un préstamo de título de auto? Has llegado al lugar correcto. Pero ¿qué debes buscar en un préstamo de título de auto?",
    "pay.day.loans.title": "Préstamos de Día de Pago: Reseñas y Comparaciones",
    "pay.day.loans.description":
      "¿Buscas un préstamo de día de pago? Has llegado al lugar correcto. Pero ¿qué debes buscar en un préstamo de día de pago?",
    "personal.lines.of.credit.title":
      "Líneas de Crédito Personales: Reseñas y Comparaciones",
    "personal.lines.of.credit.description":
      "¿Buscas una línea de crédito personal? Has llegado al lugar correcto. Pero ¿qué debes buscar en una línea de crédito personal?",
    "student.loan.refinancing.title":
      "Refinanciamiento de Préstamos Estudiantiles: Reseñas y Comparaciones",
    "student.loan.refinancing.description":
      "Refinanciar préstamos estudiantiles puede ayudarte a reducir tus pagos consolidando tus préstamos estudiantiles privados o federales en un solo préstamo más manejable.",
    "auto.loan.refinancing.title":
      "Refinanciamiento de Préstamos de Auto: Reseñas y Comparaciones",
    "auto.loan.refinancing.description":
      "¿Buscas un refinanciamiento de préstamo de auto? Has llegado al lugar correcto. Pero ¿qué debes buscar en un refinanciamiento de préstamo de auto?",
    "home.equity.loans.title":
      "Préstamos de Capital de Vivienda: Reseñas y Comparaciones",
    "home.equity.loans.description":
      "¿Buscas un préstamo de capital de vivienda? Has llegado al lugar correcto. Pero ¿qué debes buscar en un préstamo de capital de vivienda?",
    home: "Inicio",
    loan: "Préstamo",
    "rating.not.yet.determined": "Calificación aún no determinada",
    "fixed.apr": "TEA FIJA",
    "variable.apr": "TEA VARIABLE",

    // Credit Card Components - Common
    "credit.limit": "Límite de Crédito",
    "annual.fee": "Tarifa Anual",
    "intro.apr": "TEA Introductoria",
    "regular.apr": "TEA Regular",
    "balance.transfer": "Transferencia de Saldo",
    "cash.back": "Devolución de Efectivo",
    "rewards.program": "Programa de Recompensas",
    "travel.rewards": "Recompensas de Viaje",
    "signup.bonus": "Bono de Registro",
    "foreign.transaction.fee": "Tarifa de Transacción Extranjera",
    "late.payment.fee": "Tarifa de Pago Tardío",
    "over.limit.fee": "Tarifa por Exceder Límite",
    "credit.score.required": "Puntuación de Crédito Requerida",
    "card.type": "Tipo de Tarjeta",
    "rewards.rate": "Tasa de Recompensas",
    "intro.period": "Período Introductorio",
    "balance.transfer.fee": "Tarifa de Transferencia de Saldo",
    "cash.advance.fee": "Tarifa de Adelanto de Efectivo",
    "annual.percentage.rate": "Tasa de Porcentaje Anual",
    "credit.limit.range": "RANGO DE LÍMITE DE CRÉDITO",
    "annual.fee.range": "RANGO DE TARIFA ANUAL",
    "intro.apr.range": "RANGO DE TEA INTRODUCTORIA",
    "regular.apr.range": "RANGO DE TEA REGULAR",

    // Credit Card Page titles and descriptions
    "personal.credit.cards.title":
      "Tarjetas de Crédito Personales: Reseñas y Comparaciones",
    "personal.credit.cards.description":
      "¿Buscas una tarjeta de crédito personal? Has llegado al lugar correcto. Pero ¿qué debes buscar en una tarjeta de crédito personal?",
    "business.credit.cards.title":
      "Tarjetas de Crédito Comerciales: Reseñas y Comparaciones",
    "business.credit.cards.description":
      "¿Buscas una tarjeta de crédito comercial? Has llegado al lugar correcto. Pero ¿qué debes buscar en una tarjeta de crédito comercial?",
    "prepaid.cards.title": "Tarjetas Prepagadas: Reseñas y Comparaciones",
    "prepaid.cards.description":
      "¿Buscas una tarjeta prepagada? Has llegado al lugar correcto. Pero ¿qué debes buscar en una tarjeta prepagada?",
    "personal.credit.card": "Tarjeta de Crédito Personal",
    "business.credit.card": "Tarjeta de Crédito Comercial",
    "prepaid.card": "Tarjeta Prepagada",
    "signature.purchase.transaction.fee":
      "Tarifa de Transacción de Compra con Firma",
    "pin.purchase.transaction.fee": "Tarifa de Transacción de Compra con PIN",
    "monthly.fee": "Tarifa Mensual",
    "card.reload.fee": "Tarifa de Recarga de Tarjeta",

    // Banking Components - Common
    "account.type": "Tipo de Cuenta",
    "minimum.deposit": "Depósito Mínimo",
    "minimum.balance": "Saldo Mínimo",
    "interest.rate": "Tasa de Interés",
    "annual.percentage.yield": "Rendimiento Porcentual Anual",
    "monthly.maintenance.fee": "Tarifa de Mantenimiento Mensual",
    "overdraft.fee": "Tarifa de Sobregiro",
    "atm.fee": "Tarifa de ATM",
    "wire.transfer.fee": "Tarifa de Transferencia Bancaria",
    "online.banking": "Banca en Línea",
    "mobile.banking": "Banca Móvil",
    "bill.pay": "Pago de Facturas",
    "direct.deposit": "Depósito Directo",
    "debit.card": "Tarjeta de Débito",
    "check.writing": "Escritura de Cheques",
    "account.features": "Características de la Cuenta",
    "transfer.limit": "Límite de Transferencia",
    "daily.limit": "Límite Diario",
    "monthly.limit": "Límite Mensual",
    "transaction.limit": "Límite de Transacción",
    "fee.structure": "Estructura de Tarifas",
    "account.benefits": "Beneficios de la Cuenta",
    "cd.term": "Plazo de CD",
    "early.withdrawal.penalty": "Penalización por Retiro Anticipado",
    "compounding.frequency": "Frecuencia de Capitalización",
    "savings.goal": "Meta de Ahorro",
    "emergency.fund": "Fondo de Emergencia",
    "investment.options": "Opciones de Inversión",
    "money.market.rate": "Tasa del Mercado Monetario",
    "checking.features": "Características de Cuenta Corriente",
    "savings.features": "Características de Cuenta de Ahorro",
    "business.features": "Características Comerciales",

    // Banking Page titles and descriptions
    "checking.accounts.title": "Cuentas Corrientes: Reseñas y Comparaciones",
    "checking.accounts.description":
      "¿Buscas una cuenta corriente? Has llegado al lugar correcto. Pero ¿qué debes buscar en una cuenta corriente?",
    "savings.accounts.title": "Cuentas de Ahorro: Reseñas y Comparaciones",
    "savings.accounts.description":
      "¿Buscas una cuenta de ahorro? Has llegado al lugar correcto. Pero ¿qué debes buscar en una cuenta de ahorro?",
    "cd.accounts.title": "Cuentas de CD: Reseñas y Comparaciones",
    "cd.accounts.description":
      "¿Buscas una cuenta de CD? Has llegado al lugar correcto. Pero ¿qué debes buscar en una cuenta de CD?",
    "money.market.accounts.title":
      "Cuentas del Mercado Monetario: Reseñas y Comparaciones",
    "money.market.accounts.description":
      "¿Buscas una cuenta del mercado monetario? Has llegado al lugar correcto. Pero ¿qué debes buscar en una cuenta del mercado monetario?",
    "business.checking.accounts.title":
      "Cuentas Corrientes Comerciales: Reseñas y Comparaciones",
    "business.checking.accounts.description":
      "¿Buscas una cuenta corriente comercial? Has llegado al lugar correcto. Pero ¿qué debes buscar en una cuenta corriente comercial?",
    "money.transfer.services.title":
      "Servicios de Transferencia de Dinero: Reseñas y Comparaciones",
    "money.transfer.services.description":
      "¿Buscas servicios de transferencia de dinero? Has llegado al lugar correcto. Pero ¿qué debes buscar en servicios de transferencia de dinero?",
    "checking.account": "Cuenta Corriente",
    "savings.account": "Cuenta de Ahorro",
    "cd.account": "Cuenta de CD",
    "money.market.account": "Cuenta del Mercado Monetario",
    "business.checking.account": "Cuenta Corriente Comercial",
    "money.transfer.service": "Servicio de Transferencia de Dinero",

    // Mortgage Components - Common
    "loan.term.years": "Plazo del Préstamo (Años)",
    "maximum.ltv": "LTV Máximo",
    "mortgage.type": "Tipo de Hipoteca",
    "down.payment": "Pago Inicial",
    "closing.costs": "Costos de Cierre",
    "mortgage.insurance": "Seguro Hipotecario",
    "property.type": "Tipo de Propiedad",
    "debt.to.income.ratio": "Relación Deuda-Ingresos",
    "mortgage.rate": "Tasa Hipotecaria",
    "fixed.rate": "Tasa Fija",
    "adjustable.rate": "Tasa Ajustable",
    "conventional.mortgage": "Hipoteca Convencional",
    "fha.mortgage": "Hipoteca FHA",
    "va.mortgage": "Hipoteca VA",
    "usda.mortgage": "Hipoteca USDA",
    "jumbo.mortgage": "Hipoteca Jumbo",
    "conforming.loan": "Préstamo Conforme",
    "non.conforming.loan": "Préstamo No Conforme",
    "primary.residence": "Residencia Principal",
    "secondary.residence": "Residencia Secundaria",
    "investment.property": "Propiedad de Inversión",
    "mortgage.broker": "Corredor Hipotecario",
    "reverse.mortgage": "Hipoteca Inversa",
    "shared.equity.agreement": "Acuerdo de Capital Compartido",

    // Mortgage Page titles and descriptions
    "home.purchase.mortgages.title":
      "Hipotecas de Compra de Vivienda: Reseñas y Comparaciones",
    "home.purchase.mortgages.description":
      "¿Buscas una hipoteca de compra de vivienda? Has llegado al lugar correcto. Pero ¿qué debes buscar en una hipoteca de compra de vivienda?",
    "mortgage.refinance.title":
      "Refinanciamiento Hipotecario: Reseñas y Comparaciones",
    "mortgage.refinance.description":
      "¿Buscas refinanciamiento hipotecario? Has llegado al lugar correcto. Pero ¿qué debes buscar en refinanciamiento hipotecario?",
    "shared.equity.agreements.title":
      "Acuerdos de Capital Compartido: Reseñas y Comparaciones",
    "shared.equity.agreements.description":
      "¿Buscas acuerdos de capital compartido? Has llegado al lugar correcto. Pero ¿qué debes buscar en acuerdos de capital compartido?",
    "mortgage.broker.title": "Corredores Hipotecarios: Reseñas y Comparaciones",
    "mortgage.broker.description":
      "¿Buscas un corredor hipotecario? Has llegado al lugar correcto. Pero ¿qué debes buscar en un corredor hipotecario?",
    "reverse.mortgages.title": "Hipotecas Inversas: Reseñas y Comparaciones",
    "reverse.mortgages.description":
      "¿Buscas una hipoteca inversa? Has llegado al lugar correcto. Pero ¿qué debes buscar en una hipoteca inversa?",
    "home.purchase.mortgage": "Hipoteca de Compra de Vivienda",
    "mortgage.refinance.product": "Refinanciamiento Hipotecario",
    "shared.equity.agreement.product": "Acuerdo de Capital Compartido",
    "mortgage.broker.service": "Corredor Hipotecario",
    "reverse.mortgage.product": "Hipoteca Inversa",

    // Mortgage specific translations
    "shared.equity.use.case": "Caso de Uso de Capital Compartido",
    "investment.range.dollars": "Rango de Inversión $",
    "investment.range.percentage": "Rango de Inversión %",
    "product.website": "Sitio Web del Producto",
  },
  pt: {
    // Header
    "skill.assignment": "Atribuição de Habilidades",
    "super.power.money": "Potencialize seu dinheiro.",
    "smart.decisions": "Decisões financeiras inteligentes começam aqui.",
    "search.placeholder": "Tente 'empréstimo pessoal' ou 'refinanciamento'",
    compare: "Comparar:",

    // Navigation
    loans: "Empréstimos",
    "credit.card": "Cartões de Crédito",
    mortgage: "Hipotecas",
    banking: "Banco",

    // Loan submenu
    "auto.loans": "Empréstimos de Carro",
    "auto.loan.refinancing": "Refinanciamento de Empréstimos de Carro",
    "business.loans": "Empréstimos Empresariais",
    "personal.lines.of.credit": "Linhas de Crédito Pessoal",
    "personal.loans": "Empréstimos Pessoais",
    "private.student.loans": "Empréstimos Estudantis Privados",
    "student.loan.refinancing": "Refinanciamento de Empréstimos Estudantis",

    // Credit Card submenu
    "business.credit.cards": "Cartões de Crédito Empresariais",
    "personal.credit.cards": "Cartões de Crédito Pessoais",
    "prepaid.cards": "Cartões Pré-pagos",

    // Mortgage submenu
    "home.equity.loans": "Empréstimos de Capital Próprio",
    "home.purchase.mortgages": "Hipotecas de Compra de Casa",
    "mortgage.refinance": "Refinanciamento de Hipoteca",
    "shared.equity.agreements": "Acordos de Capital Compartilhado",

    // Banking submenu
    "cd.accounts": "Contas CD",
    "checking.accounts": "Contas Correntes",
    "money.market.accounts": "Contas do Mercado Monetário",
    "money.transfer.services": "Serviços de Transferência de Dinheiro",
    "savings.accounts": "Contas de Poupança",

    // Categories
    category: "Categoria",
    product: "Produto",

    // Loan Components - Common
    loading: "Carregando...",
    "no.data.found": "Nenhum Dado Encontrado",
    "no.data.found.for": "Nenhum dado encontrado para",
    "component.not.found": "Componente Não Encontrado",
    clear: "Limpar",
    filter: "Filtrar",
    fees: "TAXAS",
    availability: "Disponibilidade",
    "rates.terms": "Taxas e Termos",
    "no.origination.fee": "Sem Taxa de Originação",
    "no.prepayment.fee": "Sem Taxa de Pré-pagamento",
    "origination.fee": "Taxa de Originação",
    "no.additional.features": "Sem recursos adicionais",
    any: "Qualquer",
    "credit.score": "Pontuação de Crédito",
    "loan.amount": "Valor do Empréstimo",
    apr: "APR",
    "loan.term": "Prazo do Empréstimo",
    "additional.features": "Recursos Adicionais",
    reviews: "Avaliações",
    "mostly.recommended": "Maiormente recomendado",
    "strongly.recommended": "Fortemente recomendado",
    "reviews.count": "avaliações",
    min: "Mín",
    max: "Máx",
    months: "meses",
    years: "anos",
    "no.late.fees": "Sem Taxas de Atraso",
    "apply.now": "Aplicar Agora",
    "learn.more": "Saiba Mais",
    "view.details": "Ver Detalhes",
    "compare.loans": "Comparar Empréstimos",
    "sort.by": "Ordenar por",
    "best.match": "Melhor Correspondência",
    "lowest.apr": "APR Mais Baixa",
    "highest.apr": "APR Mais Alta",
    "lowest.loan.amount": "Valor de Empréstimo Mais Baixo",
    "highest.loan.amount": "Valor de Empréstimo Mais Alto",
    "lowest.credit.score": "Pontuação de Crédito Mais Baixa",
    "highest.credit.score": "Pontuação de Crédito Mais Alta",
    "results.found": "resultados encontrados",
    showing: "Mostrando",
    of: "de",
    results: "resultados",

    // Additional loan component strings
    "no.loans.match.filters":
      "Nenhum empréstimo corresponde aos seus filtros atuais",
    "try.adjusting.filters":
      "Tente ajustar suas preferências de APR, valor do empréstimo ou taxas",
    "credit.score.range": "FAIXA DE PONTUAÇÃO DE CRÉDITO",
    "loan.term.months": "PRAZO DO EMPRÉSTIMO (MESES)",
    "additional.details": "DETALHES ADICIONAIS",
    "desired.loan.amount": "Valor Desejado do Empréstimo",
    "auto.loan": "Empréstimo de Carro",
    recommended: "Recomendado",
    "view.reviews": "Ver Avaliações",
    "n.a": "N/A",

    // Page titles and descriptions
    "private.student.loans.title":
      "Empréstimos Estudantis Privados: Avaliações e Comparações",
    "private.student.loans.description":
      "Procurando um empréstimo estudantil privado? Você veio ao lugar certo. Mas o que você deve procurar em um empréstimo estudantil privado?",
    "personal.loans.title": "Empréstimos Pessoais: Avaliações e Comparações",
    "personal.loans.description":
      "Procurando um empréstimo pessoal? Você veio ao lugar certo. Mas o que você deve procurar em um empréstimo pessoal?",
    "business.loans.title":
      "Empréstimos Empresariais: Avaliações e Comparações",
    "business.loans.description":
      "Procurando um empréstimo empresarial? Você veio ao lugar certo. Mas o que você deve procurar em um empréstimo empresarial?",
    "auto.loans.title": "Empréstimos de Carro: Avaliações e Comparações",
    "auto.loans.description":
      "Procurando um empréstimo de carro? Você veio ao lugar certo. Mas o que você deve procurar em um empréstimo de carro?",
    "auto.title.loans.title":
      "Empréstimos de Título de Carro: Avaliações e Comparações",
    "auto.title.loans.description":
      "Procurando um empréstimo de título de carro? Você veio ao lugar certo. Mas o que você deve procurar em um empréstimo de título de carro?",
    "pay.day.loans.title":
      "Empréstimos de Dia de Pagamento: Avaliações e Comparações",
    "pay.day.loans.description":
      "Procurando um empréstimo de dia de pagamento? Você veio ao lugar certo. Mas o que você deve procurar em um empréstimo de dia de pagamento?",
    "personal.lines.of.credit.title":
      "Linhas de Crédito Pessoal: Avaliações e Comparações",
    "personal.lines.of.credit.description":
      "Procurando uma linha de crédito pessoal? Você veio ao lugar certo. Mas o que você deve procurar em uma linha de crédito pessoal?",
    "student.loan.refinancing.title":
      "Refinanciamento de Empréstimos Estudantis: Avaliações e Comparações",
    "student.loan.refinancing.description":
      "Refinanciar empréstimos estudantis pode ajudá-lo a reduzir seus pagamentos consolidando seus empréstimos estudantis privados ou federais em um único empréstimo mais gerenciável.",
    "auto.loan.refinancing.title":
      "Refinanciamento de Empréstimos de Carro: Avaliações e Comparações",
    "auto.loan.refinancing.description":
      "Procurando um refinanciamento de empréstimo de carro? Você veio ao lugar certo. Mas o que você deve procurar em um refinanciamento de empréstimo de carro?",
    "home.equity.loans.title":
      "Empréstimos de Capital Próprio: Avaliações e Comparações",
    "home.equity.loans.description":
      "Procurando um empréstimo de capital próprio? Você veio ao lugar certo. Mas o que você deve procurar em um empréstimo de capital próprio?",
    home: "Início",
    loan: "Empréstimo",
    "rating.not.yet.determined": "Avaliação ainda não determinada",
    "fixed.apr": "APR FIXA",
    "variable.apr": "APR VARIÁVEL",

    // Credit Card Components - Common
    "credit.limit": "Limite de Crédito",
    "annual.fee": "Taxa Anual",
    "intro.apr": "APR Introdutória",
    "regular.apr": "APR Regular",
    "balance.transfer": "Transferência de Saldo",
    "cash.back": "Cashback",
    "rewards.program": "Programa de Recompensas",
    "travel.rewards": "Recompensas de Viagem",
    "signup.bonus": "Bônus de Cadastro",
    "foreign.transaction.fee": "Taxa de Transação Estrangeira",
    "late.payment.fee": "Taxa de Pagamento Tardio",
    "over.limit.fee": "Taxa por Exceder Limite",
    "credit.score.required": "Pontuação de Crédito Necessária",
    "card.type": "Tipo de Cartão",
    "rewards.rate": "Taxa de Recompensas",
    "intro.period": "Período Introdutório",
    "balance.transfer.fee": "Taxa de Transferência de Saldo",
    "cash.advance.fee": "Taxa de Adiantamento em Dinheiro",
    "annual.percentage.rate": "Taxa de Percentual Anual",
    "credit.limit.range": "FAIXA DE LIMITE DE CRÉDITO",
    "annual.fee.range": "FAIXA DE TAXA ANUAL",
    "intro.apr.range": "FAIXA DE APR INTRODUTÓRIA",
    "regular.apr.range": "FAIXA DE APR REGULAR",

    // Credit Card Page titles and descriptions
    "personal.credit.cards.title":
      "Cartões de Crédito Pessoais: Avaliações e Comparações",
    "personal.credit.cards.description":
      "Procurando um cartão de crédito pessoal? Você veio ao lugar certo. Mas o que você deve procurar em um cartão de crédito pessoal?",
    "business.credit.cards.title":
      "Cartões de Crédito Empresariais: Avaliações e Comparações",
    "business.credit.cards.description":
      "Procurando um cartão de crédito empresarial? Você veio ao lugar certo. Mas o que você deve procurar em um cartão de crédito empresarial?",
    "prepaid.cards.title": "Cartões Pré-pagos: Avaliações e Comparações",
    "prepaid.cards.description":
      "Procurando um cartão pré-pago? Você veio ao lugar certo. Mas o que você deve procurar em um cartão pré-pago?",
    "personal.credit.card": "Cartão de Crédito Pessoal",
    "business.credit.card": "Cartão de Crédito Empresarial",
    "prepaid.card": "Cartão Pré-pago",
    "signature.purchase.transaction.fee":
      "Taxa de Transação de Compra com Assinatura",
    "pin.purchase.transaction.fee": "Taxa de Transação de Compra com PIN",
    "monthly.fee": "Taxa Mensal",
    "card.reload.fee": "Taxa de Recarga do Cartão",

    // Banking Components - Common
    "account.type": "Tipo de Conta",
    "minimum.deposit": "Depósito Mínimo",
    "minimum.balance": "Saldo Mínimo",
    "interest.rate": "Taxa de Juros",
    "annual.percentage.yield": "Rendimento Percentual Anual",
    "monthly.maintenance.fee": "Taxa de Manutenção Mensal",
    "overdraft.fee": "Taxa de Cheque Especial",
    "atm.fee": "Taxa de ATM",
    "wire.transfer.fee": "Taxa de Transferência Bancária",
    "online.banking": "Banco Online",
    "mobile.banking": "Banco Móvel",
    "bill.pay": "Pagamento de Contas",
    "direct.deposit": "Depósito Direto",
    "debit.card": "Cartão de Débito",
    "check.writing": "Escrita de Cheques",
    "account.features": "Recursos da Conta",
    "transfer.limit": "Limite de Transferência",
    "daily.limit": "Limite Diário",
    "monthly.limit": "Limite Mensal",
    "transaction.limit": "Limite de Transação",
    "fee.structure": "Estrutura de Taxas",
    "account.benefits": "Benefícios da Conta",
    "cd.term": "Prazo do CD",
    "early.withdrawal.penalty": "Penalidade por Saque Antecipado",
    "compounding.frequency": "Frequência de Composição",
    "savings.goal": "Meta de Poupança",
    "emergency.fund": "Fundo de Emergência",
    "investment.options": "Opções de Investimento",
    "money.market.rate": "Taxa do Mercado Monetário",
    "checking.features": "Recursos de Conta Corrente",
    "savings.features": "Recursos de Conta de Poupança",
    "business.features": "Recursos Empresariais",

    // Banking Page titles and descriptions
    "checking.accounts.title": "Contas Correntes: Avaliações e Comparações",
    "checking.accounts.description":
      "Procurando uma conta corrente? Você veio ao lugar certo. Mas o que você deve procurar em uma conta corrente?",
    "savings.accounts.title": "Contas de Poupança: Avaliações e Comparações",
    "savings.accounts.description":
      "Procurando uma conta de poupança? Você veio ao lugar certo. Mas o que você deve procurar em uma conta de poupança?",
    "cd.accounts.title": "Contas CD: Avaliações e Comparações",
    "cd.accounts.description":
      "Procurando uma conta CD? Você veio ao lugar certo. Mas o que você deve procurar em uma conta CD?",
    "money.market.accounts.title":
      "Contas do Mercado Monetário: Avaliações e Comparações",
    "money.market.accounts.description":
      "Procurando uma conta do mercado monetário? Você veio ao lugar certo. Mas o que você deve procurar em uma conta do mercado monetário?",
    "business.checking.accounts.title":
      "Contas Correntes Empresariais: Avaliações e Comparações",
    "business.checking.accounts.description":
      "Procurando uma conta corrente empresarial? Você veio ao lugar certo. Mas o que você deve procurar em uma conta corrente empresarial?",
    "money.transfer.services.title":
      "Serviços de Transferência de Dinheiro: Avaliações e Comparações",
    "money.transfer.services.description":
      "Procurando serviços de transferência de dinheiro? Você veio ao lugar certo. Mas o que você deve procurar em serviços de transferência de dinheiro?",
    "checking.account": "Conta Corrente",
    "savings.account": "Conta de Poupança",
    "cd.account": "Conta CD",
    "money.market.account": "Conta do Mercado Monetário",
    "business.checking.account": "Conta Corrente Empresarial",
    "money.transfer.service": "Serviço de Transferência de Dinheiro",

    // Mortgage Components - Common
    "loan.term.years": "Prazo do Empréstimo (Anos)",
    "maximum.ltv": "LTV Máximo",
    "mortgage.type": "Tipo de Hipoteca",
    "down.payment": "Entrada",
    "closing.costs": "Custos de Fechamento",
    "mortgage.insurance": "Seguro Hipotecário",
    "property.type": "Tipo de Propriedade",
    "debt.to.income.ratio": "Relação Dívida-Renda",
    "mortgage.rate": "Taxa Hipotecária",
    "fixed.rate": "Taxa Fixa",
    "adjustable.rate": "Taxa Ajustável",
    "conventional.mortgage": "Hipoteca Convencional",
    "fha.mortgage": "Hipoteca FHA",
    "va.mortgage": "Hipoteca VA",
    "usda.mortgage": "Hipoteca USDA",
    "jumbo.mortgage": "Hipoteca Jumbo",
    "conforming.loan": "Empréstimo Conforme",
    "non.conforming.loan": "Empréstimo Não Conforme",
    "primary.residence": "Residência Principal",
    "secondary.residence": "Residência Secundária",
    "investment.property": "Propriedade de Investimento",
    "mortgage.broker": "Corretor Hipotecário",
    "reverse.mortgage": "Hipoteca Reversa",
    "shared.equity.agreement": "Acordo de Capital Compartilhado",

    // Mortgage Page titles and descriptions
    "home.purchase.mortgages.title":
      "Hipotecas de Compra de Casa: Avaliações e Comparações",
    "home.purchase.mortgages.description":
      "Procurando uma hipoteca de compra de casa? Você veio ao lugar certo. Mas o que você deve procurar em uma hipoteca de compra de casa?",
    "mortgage.refinance.title":
      "Refinanciamento de Hipoteca: Avaliações e Comparações",
    "mortgage.refinance.description":
      "Procurando refinanciamento de hipoteca? Você veio ao lugar certo. Mas o que você deve procurar em refinanciamento de hipoteca?",
    "shared.equity.agreements.title":
      "Acordos de Capital Compartilhado: Avaliações e Comparações",
    "shared.equity.agreements.description":
      "Procurando acordos de capital compartilhado? Você veio ao lugar certo. Mas o que você deve procurar em acordos de capital compartilhado?",
    "mortgage.broker.title":
      "Corretores Hipotecários: Avaliações e Comparações",
    "mortgage.broker.description":
      "Procurando um corretor hipotecário? Você veio ao lugar certo. Mas o que você deve procurar em um corretor hipotecário?",
    "reverse.mortgages.title": "Hipotecas Reversas: Avaliações e Comparações",
    "reverse.mortgages.description":
      "Procurando uma hipoteca reversa? Você veio ao lugar certo. Mas o que você deve procurar em uma hipoteca reversa?",
    "home.purchase.mortgage": "Hipoteca de Compra de Casa",
    "mortgage.refinance.product": "Refinanciamento de Hipoteca",
    "shared.equity.agreement.product": "Acordo de Capital Compartilhado",
    "mortgage.broker.service": "Corretor Hipotecário",
    "reverse.mortgage.product": "Hipoteca Reversa",

    // Mortgage specific translations
    "shared.equity.use.case": "Caso de Uso de Capital Compartilhado",
    "investment.range.dollars": "Faixa de Investimento $",
    "investment.range.percentage": "Faixa de Investimento %",
    "product.website": "Site do Produto",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
