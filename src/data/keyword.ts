/**
 * Titanium Financial Consultancy Co. Ltd
 * Programmatic SEO (pSEO), GEO & AEO Keyword Intelligence Matrix
 * Location Focus: Greater Kampala, Wakiso District & Nationwide Uganda
 */

export type KeywordIntent = "commercial" | "transactional" | "informational" | "navigational";
export type SearchVolumeTier = "high" | "medium" | "low" | "long-tail";
export type DifficultyTier = "low" | "medium" | "competitive";

export type GlobalRegion =
  | "uganda"
  | "usa"
  | "canada"
  | "europe"
  | "philippines"
  | "africa"
  | "global";

export type TopicCluster =
  | "accounting-bookkeeping"
  | "taxation-ura-efris"
  | "business-registration-ursb"
  | "lending-short-loans"
  | "investment-wealth"
  | "land-property-management"
  | "statutory-guides"
  | "local-geo-kampala"
  | "diaspora-international"
  | "foreign-direct-investment"
  | "cross-border-tax-trade";

export interface KeywordEntry {
  term: string;
  slug?: string;
  cluster: TopicCluster;
  intent: KeywordIntent;
  volumeTier: SearchVolumeTier;
  difficulty: DifficultyTier;
  region?: GlobalRegion;
  targetPage: string;
  secondaryKeywords: string[];
  semanticEntities: string[];
  searchQuestions: string[];
}

export interface PseoMatrixConfig {
  service: string;
  category: "accounting" | "tax" | "registration" | "loans" | "investment" | "property" | "diaspora" | "cross-border";
  region: GlobalRegion;
  modifierPrefixes: string[];
  modifierSuffixes: string[];
  targetLocations: string[];
  targetAudiences: string[];
}

// ----------------------------------------------------------------------
export const keywordRepository: KeywordEntry[] = [
  // --- GLOBAL FINANCIAL CONSULTANCY & CROSS-BORDER PRACTICE ---
  {
    term: "global financial consultancy firm",
    cluster: "foreign-direct-investment",
    intent: "commercial",
    volumeTier: "high",
    difficulty: "competitive",
    region: "global",
    targetPage: "/resources",
    secondaryKeywords: [
      "international financial advisory services",
      "worldwide corporate accounting consultants",
      "cross border business consulting firm",
      "global corporate financial management",
    ],
    semanticEntities: [
      "Global Financial Advisory",
      "International Accounting",
      "Cross-Border Corporate Services",
      "Multinational Enterprises",
    ],
    searchQuestions: [
      "What services does a global financial consultancy firm provide?",
      "How do international businesses manage multi-jurisdiction financial compliance?",
      "Which firm offers worldwide corporate accounting, tax structuring, and investment management?",
    ],
  },
  {
    term: "international tax planning and compliance consultants",
    slug: "foreign-company-incorporation-tax-uganda",
    cluster: "cross-border-tax-trade",
    intent: "transactional",
    volumeTier: "high",
    difficulty: "medium",
    region: "global",
    targetPage: "/sectors/foreign-company-incorporation-tax-uganda",
    secondaryKeywords: [
      "cross border tax advisory services",
      "double taxation agreement consultants",
      "global corporate tax structuring",
      "international transfer pricing advisory",
    ],
    semanticEntities: [
      "International Tax Law",
      "Double Taxation Agreements",
      "OECD Guidelines",
      "Transfer Pricing",
      "Cross-Border Withholding",
    ],
    searchQuestions: [
      "How do multinational companies minimize double taxation across jurisdictions?",
      "What are the statutory requirements for cross-border tax compliance between North America, Europe, and Africa?",
    ],
  },
  {
    term: "global company incorporation and corporate structuring",
    slug: "foreign-company-incorporation-tax-uganda",
    cluster: "foreign-direct-investment",
    intent: "transactional",
    volumeTier: "high",
    difficulty: "medium",
    region: "global",
    targetPage: "/sectors/foreign-company-incorporation-tax-uganda",
    secondaryKeywords: [
      "multijurisdictional business formation",
      "incorporating international subsidiary companies",
      "cross border company registration usa uk africa",
      "foreign direct investment corporate setup",
    ],
    semanticEntities: [
      "Corporate Secretarial Services",
      "Subsidiary Formation",
      "FDI Advisory",
      "International Business Law",
    ],
    searchQuestions: [
      "How do global enterprises incorporate subsidiaries across multiple continents?",
      "What is required to set up a foreign company branch internationally?",
    ],
  },
  {
    term: "global high yield wealth and investment management",
    slug: "free-agent-investment-yield-guide",
    cluster: "investment-wealth",
    intent: "commercial",
    volumeTier: "high",
    difficulty: "medium",
    region: "global",
    targetPage: "/guides/free-agent-investment-yield-guide",
    secondaryKeywords: [
      "international 20 to 30 percent return investment",
      "global savings and commercial credit fund",
      "worldwide high yield investor agreements",
      "alternative investment opportunities in emerging markets",
    ],
    semanticEntities: [
      "Global Wealth Management",
      "High-Yield Investments",
      "Commercial Credit Deployment",
      "Fixed Yield Contracts",
    ],
    searchQuestions: [
      "Can international investors participate in high-yield commercial financing funds?",
      "What are the contractual return tiers for global Free-Agent investment agreements?",
    ],
  },

  // --- ACCOUNTING & BOOKKEEPING ---
  {
    term: "accounting firm in kampala",
    slug: "kampala-financial-consultancy",
    cluster: "accounting-bookkeeping",
    intent: "commercial",
    volumeTier: "high",
    difficulty: "medium",
    targetPage: "/locations/kampala-financial-consultancy",
    secondaryKeywords: [
      "best accounting firms in uganda",
      "certified accountants kampala",
      "sme bookkeeping services uganda",
      "financial statement preparation kampala",
    ],
    semanticEntities: ["Uganda", "Kampala Central", "ICPAU", "GAAP", "Balance Sheet", "Profit and Loss"],
    searchQuestions: [
      "Which is the best accounting firm for SMEs in Kampala?",
      "How much do accounting services cost per month in Uganda?",
      "Where can I find reliable bookkeepers near Najjera?",
    ],
  },
  {
    term: "bookkeeping services for small businesses uganda",
    slug: "sme-retail-wholesale-uganda",
    cluster: "accounting-bookkeeping",
    intent: "commercial",
    volumeTier: "high",
    difficulty: "low",
    targetPage: "/sectors/sme-retail-wholesale-uganda",
    secondaryKeywords: [
      "outsourced bookkeeping kampala",
      "small business ledger management uganda",
      "bank reconciliation services kampala",
      "retail shop accounting uganda",
    ],
    semanticEntities: ["SMEs", "Cash Flow", "General Ledger", "Bank Reconciliation"],
    searchQuestions: [
      "How do small shops keep accurate accounts in Uganda?",
      "Can I outsource bookkeeping for my retail business in Kampala?",
    ],
  },
  {
    term: "financial audit services kampala",
    cluster: "accounting-bookkeeping",
    intent: "commercial",
    volumeTier: "medium",
    difficulty: "medium",
    targetPage: "/services",
    secondaryKeywords: [
      "internal audit consultants uganda",
      "pre-audit financial examination kampala",
      "statutory financial review uganda",
    ],
    semanticEntities: ["Internal Controls", "Audit Readiness", "Financial Audit", "Risk Remediation"],
    searchQuestions: [
      "How does a business prepare for an external audit in Uganda?",
      "What is the difference between accounting and audit services?",
    ],
  },

  // --- TAXATION, URA & EFRIS ---
  {
    term: "ura tax consultancy kampala",
    slug: "ura-efris-tax-compliance-guide",
    cluster: "taxation-ura-efris",
    intent: "transactional",
    volumeTier: "high",
    difficulty: "medium",
    targetPage: "/guides/ura-efris-tax-compliance-guide",
    secondaryKeywords: [
      "ura tax agents in kampala",
      "tax compliance consultant uganda",
      "ura income tax return filing help",
      "prn generation assistance uganda",
    ],
    semanticEntities: ["Uganda Revenue Authority", "URA", "TIN", "PRN", "Tax Procedures Code Act"],
    searchQuestions: [
      "How do I file monthly URA tax returns in Uganda?",
      "What is the deadline for filing VAT and PAYE in Uganda?",
      "Where can I get help generating a URA PRN in Kampala?",
    ],
  },
  {
    term: "efris electronic invoicing support uganda",
    slug: "ura-efris-tax-compliance-guide",
    cluster: "taxation-ura-efris",
    intent: "transactional",
    volumeTier: "high",
    difficulty: "low",
    targetPage: "/guides/ura-efris-tax-compliance-guide",
    secondaryKeywords: [
      "efris setup for retailers kampala",
      "ura e-receipts and e-invoices assistance",
      "efris penalty for non compliance uganda",
      "how to issue efris invoice uganda",
    ],
    semanticEntities: ["EFRIS", "Electronic Fiscal Receipting and Invoicing Solution", "VAT", "Fiscal Device"],
    searchQuestions: [
      "Who is required to use EFRIS in Uganda?",
      "What is the penalty for not issuing an EFRIS receipt in Uganda?",
      "How do I claim input VAT through EFRIS in Uganda?",
    ],
  },
  {
    term: "tax consultant in najjera buwate",
    slug: "najjera-buwate-accounting-tax",
    cluster: "local-geo-kampala",
    intent: "transactional",
    volumeTier: "medium",
    difficulty: "low",
    targetPage: "/locations/najjera-buwate-accounting-tax",
    secondaryKeywords: [
      "tax consultants rowan village mall",
      "najjera business accounting services",
      "buwate tax filing and prn payment",
    ],
    semanticEntities: ["Najjera", "Buwate", "Rowan Village Mall", "Kira Municipality"],
    searchQuestions: [
      "Where can I get tax filing help near Najjera or Buwate?",
      "Are there tax consultants at Rowan Village Mall along Najjera-Buwate road?",
    ],
  },

  // --- BUSINESS REGISTRATION & URSB ---
  {
    term: "company registration uganda ursb",
    slug: "ursb-company-registration-uganda-guide",
    cluster: "business-registration-ursb",
    intent: "informational",
    volumeTier: "high",
    difficulty: "medium",
    targetPage: "/guides/ursb-company-registration-uganda-guide",
    secondaryKeywords: [
      "how to register a company with ursb online",
      "cost of registering a private limited company uganda",
      "ursb name reservation process",
      "single member company registration uganda",
    ],
    semanticEntities: ["URSB", "Uganda Registration Services Bureau", "Companies Act 2012", "Memorandum of Association"],
    searchQuestions: [
      "How long does it take to register a company with URSB in Uganda?",
      "Can one person register a limited company in Uganda?",
      "What documents are required to incorporate a company in Uganda?",
    ],
  },
  {
    term: "business formalisation kira municipality",
    slug: "kira-municipality-business-registration",
    cluster: "local-geo-kampala",
    intent: "commercial",
    volumeTier: "medium",
    difficulty: "low",
    targetPage: "/locations/kira-municipality-business-registration",
    secondaryKeywords: [
      "kira municipal trading license requirements",
      "register business name in kira uganda",
      "kcca vs kira municipal licensing",
    ],
    semanticEntities: ["Kira Municipality", "Wakiso", "Trading License", "Trade Licensing Act"],
    searchQuestions: [
      "How do I get a trading license in Kira Municipality?",
      "What is the difference between a business name and a limited company in Uganda?",
    ],
  },
  {
    term: "startup business registration and financial structuring uganda",
    slug: "startups-tech-enterprises-uganda",
    cluster: "business-registration-ursb",
    intent: "commercial",
    volumeTier: "medium",
    difficulty: "low",
    targetPage: "/sectors/startups-tech-enterprises-uganda",
    secondaryKeywords: [
      "startup cap table structuring uganda",
      "investor ready financial models kampala",
      "founders agreement legal assistance uganda",
    ],
    semanticEntities: ["Startups", "Cap Table", "Founders Agreement", "Venture Capital Due Diligence"],
    searchQuestions: [
      "When should a Ugandan tech startup incorporate with URSB?",
      "How do startups structure financial models for angel investors in Uganda?",
    ],
  },

  // --- SHORT-TERM LENDING & COLLATERAL ---
  {
    term: "short term loans in kampala with collateral",
    slug: "short-term-loans-collateral-guide",
    cluster: "lending-short-loans",
    intent: "transactional",
    volumeTier: "high",
    difficulty: "medium",
    targetPage: "/guides/short-term-loans-collateral-guide",
    secondaryKeywords: [
      "one month loan facility uganda",
      "land title collateral loans kampala",
      "quick business working capital loans uganda",
      "emergency bridge loans kampala",
    ],
    semanticEntities: ["Short-Term Loans", "Collateral", "Land Titles", "Credit Agreement", "Bridge Financing"],
    searchQuestions: [
      "What collateral is accepted for 1-month loans in Uganda?",
      "How fast can I get a business loan against a land title in Kampala?",
      "What are the interest terms for emergency business loans in Uganda?",
    ],
  },
  {
    term: "debt restructuring consultants uganda",
    cluster: "lending-short-loans",
    intent: "commercial",
    volumeTier: "medium",
    difficulty: "low",
    targetPage: "/services",
    secondaryKeywords: [
      "manageable loan repayment planning kampala",
      "commercial bank loan renegotiation uganda",
      "preventing business insolvency due to debt uganda",
    ],
    semanticEntities: ["Debt Restructuring", "Loan Repayment Plan", "Insolvency Avoidance"],
    searchQuestions: [
      "How can a business restructure bank loans in Uganda?",
      "What steps stop commercial banks from auctioning loan collateral?",
    ],
  },

  // --- FREE-AGENT HIGH-YIELD INVESTMENT ---
  {
    term: "high yield investment programs uganda",
    slug: "free-agent-investment-yield-guide",
    cluster: "investment-wealth",
    intent: "commercial",
    volumeTier: "high",
    difficulty: "medium",
    targetPage: "/guides/free-agent-investment-yield-guide",
    secondaryKeywords: [
      "free agent investment agreement titanium",
      "30 percent annual return investment uganda",
      "monthly savings plan 200000 ugx uganda",
      "safe high return investments in kampala",
    ],
    semanticEntities: ["Free-Agent Investment", "Annual Return Tiers", "Maturity Period", "Savings Agreement"],
    searchQuestions: [
      "What is the minimum investment for Titanium Financial's Free-Agent program?",
      "What are the annual return tiers for Free-Agent savings in Uganda?",
      "Can I withdraw my investment before the 12-month maturity period?",
    ],
  },

  // --- LAND & PROPERTY MANAGEMENT ---
  {
    term: "land title search in wakiso ministry zonal office",
    slug: "wakiso-land-property-management",
    cluster: "land-property-management",
    intent: "transactional",
    volumeTier: "high",
    difficulty: "medium",
    targetPage: "/locations/wakiso-land-property-management",
    secondaryKeywords: [
      "how to verify a land title in wakiso uganda",
      "wakiso mzo search report cost",
      "avoiding land fraud in wakiso and kampala",
      "property valuation services wakiso",
    ],
    semanticEntities: ["Ministry of Lands", "Wakiso MZO", "Mailo Land", "Freehold", "Caveat", "Search Report"],
  },

  // --- DIASPORA & INTERNATIONAL: USA & NORTH AMERICA ---
  {
    term: "invest in uganda from usa high yield",
    slug: "free-agent-investment-yield-guide",
    cluster: "diaspora-international",
    intent: "commercial",
    volumeTier: "high",
    difficulty: "low",
    region: "usa",
    targetPage: "/guides/free-agent-investment-yield-guide",
    secondaryKeywords: [
      "ugandan diaspora investment in usa",
      "uganda high return investment 20 to 30 percent",
      "how to invest in uganda while living in america",
      "diaspora savings agreement titanium uganda",
    ],
    semanticEntities: ["United States", "USA", "North America", "Ugandan Diaspora", "Free-Agent Investment", "High-Yield Returns"],
    searchQuestions: [
      "How can Ugandans living in the USA invest safely back home?",
      "What are the return tiers for diaspora investors with Titanium Financial Consultancy?",
      "Can I send monthly investment deposits to Uganda from a US bank account?",
    ],
  },
  {
    term: "uganda land property management for diaspora in usa",
    slug: "wakiso-land-property-management",
    cluster: "diaspora-international",
    intent: "transactional",
    volumeTier: "high",
    difficulty: "low",
    region: "usa",
    targetPage: "/locations/wakiso-land-property-management",
    secondaryKeywords: [
      "diaspora land title search wakiso kampala",
      "remote property management uganda for us residents",
      "avoiding land fraud in uganda from america",
      "uganda land valuation consultants for diaspora",
    ],
    semanticEntities: ["USA Diaspora", "Ministry of Lands Uganda", "Wakiso MZO", "Land Title Search", "Property Tenancy Management"],
    searchQuestions: [
      "How can I verify a land title in Uganda while living in the United States?",
      "Who can manage my rental properties in Kampala while I am based in the USA?",
    ],
  },
  {
    term: "register company in uganda from usa",
    slug: "ursb-company-registration-uganda-guide",
    cluster: "foreign-direct-investment",
    intent: "transactional",
    volumeTier: "medium",
    difficulty: "medium",
    region: "usa",
    targetPage: "/guides/ursb-company-registration-uganda-guide",
    secondaryKeywords: [
      "ursb foreign director registration from america",
      "starting a business in uganda as an american citizen",
      "us company opening branch in uganda requirements",
      "incorporate limited company in uganda from diaspora",
    ],
    semanticEntities: ["URSB", "Companies Act 2012", "Foreign Direct Investment", "American Investors", "TIN Setup"],
    searchQuestions: [
      "Can an American citizen register a company in Uganda without traveling?",
      "What documents does a US resident need to incorporate a business with URSB?",
    ],
  },

  // --- DIASPORA & INTERNATIONAL: CANADA ---
  {
    term: "uganda diaspora property management and investment canada",
    slug: "wakiso-land-property-management",
    cluster: "diaspora-international",
    intent: "commercial",
    volumeTier: "medium",
    difficulty: "low",
    region: "canada",
    targetPage: "/locations/wakiso-land-property-management",
    secondaryKeywords: [
      "ugandans in toronto investing in uganda",
      "canadian diaspora land registry verification kampala",
      "remote tenant management uganda from canada",
      "free agent investment program canada uganda",
    ],
    semanticEntities: ["Canada", "Toronto", "Ontario", "Vancouver", "Ugandan Diaspora", "Wakiso Land Office"],
    searchQuestions: [
      "How do Ugandans living in Canada manage real estate in Kampala?",
      "Is there a verified high-yield investment fund in Uganda for Canadian diaspora?",
    ],
  },
  {
    term: "register a business in uganda from canada",
    slug: "ursb-company-registration-uganda-guide",
    cluster: "foreign-direct-investment",
    intent: "transactional",
    volumeTier: "medium",
    difficulty: "low",
    region: "canada",
    targetPage: "/guides/ursb-company-registration-uganda-guide",
    secondaryKeywords: [
      "ursb online incorporation canada residents",
      "canadian company establishing subsidiary in uganda",
      "corporate tax and efris setup uganda for canadian investors",
    ],
    semanticEntities: ["Canada", "URSB", "Subsidiary Company", "URA Tax Clearance"],
    searchQuestions: [
      "How can Canadian businesses incorporate an affiliate company in Uganda?",
      "What are the URA tax implications for Canadian investments in Uganda?",
    ],
  },

  // --- DIASPORA & INTERNATIONAL: EUROPE & UNITED KINGDOM ---
  {
    term: "ugandan diaspora investment in uk london",
    slug: "free-agent-investment-yield-guide",
    cluster: "diaspora-international",
    intent: "commercial",
    volumeTier: "high",
    difficulty: "low",
    region: "europe",
    targetPage: "/guides/free-agent-investment-yield-guide",
    secondaryKeywords: [
      "invest in uganda from london uk",
      "ugandan diaspora investment clubs uk europe",
      "uk pound remittance high yield investment uganda",
      "reliable financial consultancy in uganda for uk residents",
    ],
    semanticEntities: ["United Kingdom", "London", "Europe", "Ugandan Diaspora UK", "Free-Agent Investment Tiers"],
    searchQuestions: [
      "How can Ugandans living in the UK invest securely in commercial financing back home?",
      "What is the return on investment for the Free-Agent savings program for UK investors?",
    ],
  },
  {
    term: "how to register a company in uganda from uk and europe",
    slug: "ursb-company-registration-uganda-guide",
    cluster: "foreign-direct-investment",
    intent: "transactional",
    volumeTier: "medium",
    difficulty: "medium",
    region: "europe",
    targetPage: "/guides/ursb-company-registration-uganda-guide",
    secondaryKeywords: [
      "ursb company registration for uk citizens",
      "european company setting up business in uganda",
      "double taxation agreement uk uganda tax advisory",
      "foreign investor business license uganda kcca",
    ],
    semanticEntities: ["United Kingdom", "European Union", "Germany", "Netherlands", "URSB", "Double Taxation Agreement"],
    searchQuestions: [
      "How do European and UK investors incorporate a business with URSB Uganda?",
      "Are UK companies subject to double taxation when operating in Uganda?",
    ],
  },
  {
    term: "uk diaspora property management and title verification uganda",
    slug: "wakiso-land-property-management",
    cluster: "land-property-management",
    intent: "transactional",
    volumeTier: "high",
    difficulty: "low",
    region: "europe",
    targetPage: "/locations/wakiso-land-property-management",
    secondaryKeywords: [
      "land title due diligence uganda for uk buyers",
      "wakiso land registry searches for european diaspora",
      "independent property valuation kampala for diaspora",
    ],
    semanticEntities: ["UK Diaspora", "Ministry of Lands", "Wakiso Zonal Office", "Due Diligence"],
    searchQuestions: [
      "How can a UK buyer verify that a land title in Wakiso or Kampala is genuine?",
      "Can Titanium Financial Consultancy oversee my rental building in Kampala while I live in Europe?",
    ],
  },

  // --- INTERNATIONAL: PHILIPPINES & EXPATRIATES ---
  {
    term: "filipino expats tax and business consulting uganda",
    slug: "ura-efris-tax-compliance-guide",
    cluster: "diaspora-international",
    intent: "commercial",
    volumeTier: "medium",
    difficulty: "low",
    region: "philippines",
    targetPage: "/guides/ura-efris-tax-compliance-guide",
    secondaryKeywords: [
      "philippines overseas workers tax compliance uganda",
      "filipino contractors tin and paye filing kampala",
      "expatriate income tax registration uganda",
      "philippine citizens starting business in uganda",
    ],
    semanticEntities: ["Philippines", "Manila", "Filipino Expatriates", "Overseas Foreign Workers", "URA PAYE", "TIN"],
    searchQuestions: [
      "How do Filipino expatriates and contractors file taxes with URA in Uganda?",
      "Can Philippine nationals register a commercial business or trading enterprise in Uganda?",
    ],
  },
  {
    term: "expatriate income tax paye and tin registration uganda",
    slug: "ura-efris-tax-compliance-guide",
    cluster: "taxation-ura-efris",
    intent: "transactional",
    volumeTier: "medium",
    difficulty: "low",
    region: "global",
    targetPage: "/guides/ura-efris-tax-compliance-guide",
    secondaryKeywords: [
      "work permit tax clearance uganda",
      "foreign employee paye withholding rates uganda",
      "tin application for non residents uganda",
    ],
    semanticEntities: ["URA", "PAYE", "Non-Resident Tax", "Expatriate Payroll", "Tax Clearance Certificate"],
    searchQuestions: [
      "What are the income tax rates for expatriates and non-residents working in Uganda?",
      "How does a foreign national get a URA Tax Clearance Certificate for work permit renewal?",
    ],
  },

  // --- REGIONAL & CONTINENTAL AFRICA ---
  {
    term: "cross border trade tax consultancy kenya uganda",
    slug: "ura-efris-tax-compliance-guide",
    cluster: "cross-border-tax-trade",
    intent: "transactional",
    volumeTier: "high",
    difficulty: "medium",
    region: "africa",
    targetPage: "/guides/ura-efris-tax-compliance-guide",
    secondaryKeywords: [
      "eac common market vat and customs advisory",
      "kenya companies setting up operations in kampala",
      "efris compliance for kenyan exporters to uganda",
      "kra to ura cross border business accounting",
    ],
    semanticEntities: ["Kenya", "Nairobi", "EAC", "East African Community", "URA", "KRA", "EFRIS"],
    searchQuestions: [
      "How do Kenyan companies handle URA EFRIS compliance when exporting into Uganda?",
      "What taxes apply to cross-border services between Nairobi and Kampala?",
    ],
  },
  {
    term: "rwanda business expansion and company incorporation uganda",
    slug: "ursb-company-registration-uganda-guide",
    cluster: "cross-border-tax-trade",
    intent: "commercial",
    volumeTier: "medium",
    difficulty: "low",
    region: "africa",
    targetPage: "/guides/ursb-company-registration-uganda-guide",
    secondaryKeywords: [
      "registering a rwandan branch in uganda ursb",
      "kigali to kampala business formalisation",
      "eac company cross listing and tax registration uganda",
    ],
    semanticEntities: ["Rwanda", "Kigali", "RDB", "URSB", "EAC Trade Protocol"],
    searchQuestions: [
      "Can a company registered in Rwanda open a branch in Uganda under URSB rules?",
      "What are the statutory requirements for Rwandan entrepreneurs expanding to Uganda?",
    ],
  },
  {
    term: "south sudan businesses banking and accounting in uganda",
    slug: "kampala-financial-consultancy",
    cluster: "cross-border-tax-trade",
    intent: "commercial",
    volumeTier: "high",
    difficulty: "low",
    region: "africa",
    targetPage: "/locations/kampala-financial-consultancy",
    secondaryKeywords: [
      "juba companies opening bank accounts in uganda",
      "south sudan traders accounting and tax filing kampala",
      "financial consultancy for south sudanese businesses uganda",
    ],
    semanticEntities: ["South Sudan", "Juba", "Kampala Central", "Cross-Border Trade", "Commercial Banking Setup"],
    searchQuestions: [
      "How can South Sudanese traders establish compliant corporate accounts in Uganda?",
      "What financial and tax consultancy is available in Kampala for South Sudan companies?",
    ],
  },
  {
    term: "register branch company in uganda from south africa or nigeria",
    slug: "ursb-company-registration-uganda-guide",
    cluster: "foreign-direct-investment",
    intent: "transactional",
    volumeTier: "medium",
    difficulty: "medium",
    region: "africa",
    targetPage: "/guides/ursb-company-registration-uganda-guide",
    secondaryKeywords: [
      "nigerian businesses expanding to east africa kampala",
      "south african corporate subsidiary registration uganda",
      "foreign company certificate of registration uganda form 24",
    ],
    semanticEntities: ["South Africa", "Nigeria", "Lagos", "Johannesburg", "URSB Foreign Companies", "AfCFTA"],
    searchQuestions: [
      "How can a South African or Nigerian enterprise register a foreign company in Uganda?",
      "What are the URSB requirements for an external company establishing a place of business in Uganda?",
    ],
  },
];

// ----------------------------------------------------------------------
// 2. Programmatic Expansion Combinatorial Matrix
// ----------------------------------------------------------------------
export const pseoCombinatorialMatrix: PseoMatrixConfig[] = [
  // --- DOMESTIC UGANDA ---
  {
    service: "Accounting & Bookkeeping Services",
    category: "accounting",
    region: "uganda",
    modifierPrefixes: ["Best", "Reliable", "Affordable", "Licensed", "Certified"],
    modifierSuffixes: ["Firms", "Consultants", "Services", "Support", "Solutions"],
    targetLocations: [
      "Kampala",
      "Najjera",
      "Buwate",
      "Kira",
      "Ntinda",
      "Nakawa",
      "Kyanja",
      "Kololo",
      "Entebbe",
      "Wakiso",
      "Mukono",
      "Jinja",
    ],
    targetAudiences: ["SMEs", "Retail Stores", "Startups", "Wholesalers", "Medical Clinics", "Contractors"],
  },
  {
    service: "URA Tax Compliance & EFRIS Invoicing",
    category: "tax",
    region: "uganda",
    modifierPrefixes: ["Expert", "Reliable", "Affordable", "Professional"],
    modifierSuffixes: ["Consultants", "Filing Services", "Assistance", "Support", "Agents"],
    targetLocations: [
      "Kampala Central",
      "Najjera-Buwate",
      "Kira Municipality",
      "Ntinda",
      "Kikuubo Trade Area",
      "Wakiso",
      "Mukono",
    ],
    targetAudiences: ["Retail Merchants", "Wholesale Distributors", "Importers", "Service Companies"],
  },
  {
    service: "URSB Company Registration & Business Licensing",
    category: "registration",
    region: "uganda",
    modifierPrefixes: ["Fast", "Official", "Complete", "Guided"],
    modifierSuffixes: ["Services", "Consultants", "Process", "Assistance", "Agency"],
    targetLocations: ["Kampala", "Kira", "Wakiso", "Entebbe", "Mukono", "Uganda Nationwide"],
    targetAudiences: ["Entrepreneurs", "Tech Startups", "Sole Proprietors", "Foreign Investors"],
  },
  {
    service: "1-Month Short-Term Collateral Loans",
    category: "loans",
    region: "uganda",
    modifierPrefixes: ["Quick", "Emergency", "Fast Approval", "Reliable", "Confidential"],
    modifierSuffixes: ["Facilities", "Lenders", "Financing", "Bridge Credit"],
    targetLocations: ["Kampala", "Najjera", "Buwate", "Kira", "Wakiso District"],
    targetAudiences: ["Business Borrowers", "Property Owners", "Importers", "Contractors"],
  },
  {
    service: "Land Registry Due Diligence & Property Management",
    category: "property",
    region: "uganda",
    modifierPrefixes: ["Official", "Trusted", "Professional", "Independent"],
    modifierSuffixes: ["Searches", "Valuation Support", "Management", "Advisory"],
    targetLocations: ["Wakiso District", "Kampala", "Kira", "Najjera", "Entebbe"],
    targetAudiences: ["Land Buyers", "Property Owners", "Diaspora Landlords", "Borrowers Pledging Collateral"],
  },

  // --- NORTH AMERICA: USA & CANADA ---
  {
    service: "Diaspora High-Yield Savings & Free-Agent Investments",
    category: "diaspora",
    region: "usa",
    modifierPrefixes: ["High Return", "Secure", "Verified 20-30%", "Trusted"],
    modifierSuffixes: ["Programs", "Advisory", "Contracts", "Investment Plans"],
    targetLocations: [
      "United States (USA)",
      "Texas (Dallas, Houston)",
      "California (Los Angeles, Bay Area)",
      "Minnesota (Minneapolis)",
      "Georgia (Atlanta)",
      "New York",
      "Massachusetts (Boston)",
      "North America",
    ],
    targetAudiences: ["Ugandan Diaspora in USA", "US Commercial Investors", "Diaspora Investment Clubs", "Overseas Saccos"],
  },
  {
    service: "Diaspora Remote Land Title Verification & Property Management",
    category: "property",
    region: "usa",
    modifierPrefixes: ["Official", "Fraud-Proof", "Licensed", "Comprehensive"],
    modifierSuffixes: ["Searches", "Due Diligence", "Tenancy Management", "Appraisals"],
    targetLocations: [
      "USA (Texas, Minnesota, California, Atlanta, Washington DC)",
      "Canada (Toronto, Ontario, Vancouver, Alberta)",
    ],
    targetAudiences: ["Diaspora Property Buyers", "Diaspora Landlords", "Estate Trustees", "Overseas Homebuilders"],
  },
  {
    service: "Canadian Diaspora Investment & Business Incorporation",
    category: "diaspora",
    region: "canada",
    modifierPrefixes: ["Official", "High Yield", "Streamlined", "Trusted"],
    modifierSuffixes: ["Programs", "Services", "Corporate Solutions"],
    targetLocations: [
      "Canada Nationwide",
      "Toronto (Ontario)",
      "Vancouver (British Columbia)",
      "Calgary (Alberta)",
      "Montreal (Quebec)",
    ],
    targetAudiences: ["Ugandan Canadians", "Canadian Business Investors", "Diaspora Investment Groups"],
  },

  // --- EUROPE & UNITED KINGDOM ---
  {
    service: "European & UK Diaspora Investment & Property Solutions",
    category: "diaspora",
    region: "europe",
    modifierPrefixes: ["Regulated", "Verified", "High Yield (20-30%)", "Confidential"],
    modifierSuffixes: ["Agreements", "Advisory", "Asset Management"],
    targetLocations: [
      "United Kingdom (UK)",
      "London",
      "Birmingham",
      "Manchester",
      "Germany (Berlin, Frankfurt)",
      "Netherlands (Amsterdam)",
      "Sweden (Stockholm)",
      "European Union",
    ],
    targetAudiences: ["Ugandan Diaspora UK & Europe", "European Angel Investors", "UK Family Offices"],
  },
  {
    service: "Foreign Direct Investment (FDI) & URSB Incorporation from Europe & USA",
    category: "registration",
    region: "europe",
    modifierPrefixes: ["Complete", "Fast-Track", "Compliant", "Executive"],
    modifierSuffixes: ["Setup", "Incorporation", "Advisory", "Representation"],
    targetLocations: [
      "United Kingdom",
      "Germany",
      "Netherlands",
      "United States",
      "Canada",
      "European Union",
    ],
    targetAudiences: ["Foreign Corporations", "Multinational Subsidiaries", "Renewable Energy & Agribusiness Investors"],
  },

  // --- PHILIPPINES & ASIA-PACIFIC ---
  {
    service: "Expatriate Tax Advisory, TIN & Work Permit Compliance",
    category: "tax",
    region: "philippines",
    modifierPrefixes: ["Compliant", "Fast", "Professional", "Accredited"],
    modifierSuffixes: ["Support", "Filing Services", "Tax Clearance", "Consultants"],
    targetLocations: [
      "Philippines (Manila, Cebu)",
      "Expatriate Community Uganda",
      "UAE (Dubai, Abu Dhabi)",
      "Qatar (Doha)",
      "Asia-Pacific Region",
    ],
    targetAudiences: ["Filipino Expatriates", "Overseas Foreign Workers (OFWs)", "Foreign Healthcare & Engineering Contractors"],
  },

  // --- CONTINENTAL AFRICA & REGIONAL EAC ---
  {
    service: "Cross-Border Business Structuring & EAC Tax Compliance",
    category: "cross-border",
    region: "africa",
    modifierPrefixes: ["Cross-Border", "Regional", "EAC-Compliant", "Strategic"],
    modifierSuffixes: ["Consultancy", "Tax Advisory", "Corporate Structuring", "Representation"],
    targetLocations: [
      "Kenya (Nairobi, Mombasa)",
      "Rwanda (Kigali)",
      "South Sudan (Juba)",
      "Tanzania (Dar es Salaam, Arusha)",
      "Democratic Republic of Congo (DRC / Goma)",
      "South Africa (Johannesburg, Cape Town)",
      "Nigeria (Lagos, Abuja)",
      "East African Community (EAC)",
    ],
    targetAudiences: [
      "Kenyan Exporters to Uganda",
      "Rwandan Businesses Expanding to Kampala",
      "South Sudanese Commercial Traders",
      "South African & Nigerian Subsidiaries",
      "Regional Logistics & Freight Operators",
    ],
  },
];

// ----------------------------------------------------------------------
// 3. Helper Utility Functions for Technical & Programmatic SEO
// ----------------------------------------------------------------------

/**
 * Returns all keywords matching a specific topical cluster.
 */
export function getKeywordsByCluster(cluster: TopicCluster): KeywordEntry[] {
  return keywordRepository.filter((k) => k.cluster === cluster);
}

/**
 * Returns all keywords filtered by user search intent.
 */
export function getKeywordsByIntent(intent: KeywordIntent): KeywordEntry[] {
  return keywordRepository.filter((k) => k.intent === intent);
}

/**
 * Finds keyword configuration matching a specific target slug.
 */
export function findKeywordBySlug(slug: string): KeywordEntry | undefined {
  return keywordRepository.find((k) => k.slug === slug);
}

/**
 * Generates an exhaustive list of all conversational question queries (AEO targets).
 */
export function getAllAeoQuestions(): string[] {
  const questions: string[] = [];
  keywordRepository.forEach((entry) => {
    questions.push(...entry.searchQuestions);
  });
  return Array.from(new Set(questions));
}

/**
 * Generates all semantic entity terms across all keyword records (GEO targets).
 */
export function getAllSemanticEntities(): string[] {
  const entities: string[] = [];
  keywordRepository.forEach((entry) => {
    entities.push(...entry.semanticEntities);
  });
  return Array.from(new Set(entities));
}

/**
 * Programmatically generates long-tail search query combinations for pSEO testing and expansion.
 */
export function generateProgrammaticSearchCombos(): { query: string; category: string; location: string }[] {
  const results: { query: string; category: string; location: string }[] = [];

  pseoCombinatorialMatrix.forEach((config) => {
    config.targetLocations.forEach((location) => {
      // Pattern 1: Service in Location (e.g., "Accounting & Bookkeeping Services in Kampala")
      results.push({
        query: `${config.service} in ${location}`,
        category: config.category,
        location,
      });

      // Pattern 2: Modifier + Suffix + Location (e.g., "Best Accounting Consultants Najjera")
      const prefix = config.modifierPrefixes[0] || "";
      const suffix = config.modifierSuffixes[0] || "Services";
      results.push({
        query: `${prefix} ${config.service} ${suffix} ${location}`,
        category: config.category,
        location,
      });
    });
  });

  return results;
}

// ----------------------------------------------------------------------
// 4. Global Target Regions & International Geographies
// ----------------------------------------------------------------------
export const globalTargetRegions = {
  northAmerica: {
    regionKey: "usa" as GlobalRegion,
    regionName: "North America (USA & Canada)",
    countries: ["United States of America", "Canada"],
    targetStatesAndProvinces: [
      "Texas (Dallas, Houston, Austin)",
      "California (Los Angeles, San Francisco, San Diego)",
      "Minnesota (Minneapolis, St. Paul)",
      "Georgia (Atlanta)",
      "New York (NYC)",
      "Massachusetts (Boston)",
      "Ontario (Toronto, Ottawa)",
      "British Columbia (Vancouver)",
      "Alberta (Calgary, Edmonton)",
    ],
    primaryServices: [
      "Free-Agent High-Yield Savings (20%–30% Returns)",
      "Remote Land Title Verification & Fraud Prevention (Wakiso/Kampala)",
      "URSB Company Incorporation from Abroad",
      "Diaspora Wealth & Estate Advisory",
    ],
  },
  europe: {
    regionKey: "europe" as GlobalRegion,
    regionName: "Europe & United Kingdom",
    countries: ["United Kingdom", "Germany", "Netherlands", "Sweden", "France", "Switzerland"],
    targetStatesAndProvinces: [
      "Greater London (UK)",
      "West Midlands (Birmingham)",
      "Greater Manchester (UK)",
      "Berlin & Frankfurt (Germany)",
      "Amsterdam & Rotterdam (Netherlands)",
      "Stockholm (Sweden)",
    ],
    primaryServices: [
      "Diaspora Commercial Investment Agreements",
      "UK & European Corporate Subsidiary Setup in Uganda",
      "Double Taxation Agreements & Cross-Border Tax Filing",
      "Independent Property Management & Rent Remittance",
    ],
  },
  philippines: {
    regionKey: "philippines" as GlobalRegion,
    regionName: "Philippines & Expatriates",
    countries: ["Philippines", "Asia-Pacific Regional Corridor"],
    targetStatesAndProvinces: [
      "Metro Manila (National Capital Region)",
      "Cebu Metropolitan Area",
      "Davao City",
      "Filipino Expatriate Communities in East Africa",
    ],
    primaryServices: [
      "Expatriate Income Tax (PAYE) & TIN Registration",
      "Work Permit Tax Clearance Certificate Filings",
      "Commercial Business Registration for Foreign Nationals",
      "Cross-Border Remittance & High-Yield Fund Allocation",
    ],
  },
  africa: {
    regionKey: "africa" as GlobalRegion,
    regionName: "Continental Africa & Regional EAC",
    countries: [
      "Kenya",
      "Rwanda",
      "South Sudan",
      "Tanzania",
      "Democratic Republic of Congo (DRC)",
      "South Africa",
      "Nigeria",
      "Ghana",
    ],
    targetStatesAndProvinces: [
      "Nairobi & Mombasa (Kenya)",
      "Kigali (Rwanda)",
      "Juba (South Sudan)",
      "Dar es Salaam & Arusha (Tanzania)",
      "Goma & Kinshasa (DRC)",
      "Johannesburg & Cape Town (South Africa)",
      "Lagos & Abuja (Nigeria)",
    ],
    primaryServices: [
      "Cross-Border Trade Accounting & EFRIS Invoicing Alignment",
      "Branch Company Registration with URSB (Form 24)",
      "EAC & COMESA Customs Tax & Withholding Exemptions",
      "Commercial Banking & Subsidiary Secretarial Services",
    ],
  },
};

/**
 * Returns all keywords filtered by global region (e.g. USA, Canada, Europe, Philippines, Africa).
 */
export function getKeywordsByRegion(region: GlobalRegion): KeywordEntry[] {
  return keywordRepository.filter((k) => k.region === region);
}

/**
 * Returns an array of all distinct international location names across target regions.
 */
export function getGlobalLocations(): string[] {
  const locations: string[] = [];
  Object.values(globalTargetRegions).forEach((reg) => {
    locations.push(...reg.countries, ...reg.targetStatesAndProvinces);
  });
  return Array.from(new Set(locations));
}

/**
 * Returns all queries targeted at diaspora investors and property overseas.
 */
export function getDiasporaSearchQueries(): KeywordEntry[] {
  return keywordRepository.filter(
    (k) =>
      k.cluster === "diaspora-international" ||
      k.cluster === "foreign-direct-investment" ||
      k.cluster === "cross-border-tax-trade"
  );
}

// ----------------------------------------------------------------------
// 5. Dynamic Sitemap Generation Engine (Directly from Keywords Matrix)
// ----------------------------------------------------------------------

export interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
  category?: string;
  slug?: string;
}

export const coreSitemapRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" as const },
  { path: "/services", priority: "0.9", changefreq: "weekly" as const },
  { path: "/resources", priority: "0.85", changefreq: "weekly" as const },
  { path: "/locations", priority: "0.85", changefreq: "weekly" as const },
  { path: "/guides", priority: "0.85", changefreq: "weekly" as const },
  { path: "/sectors", priority: "0.85", changefreq: "weekly" as const },
  { path: "/documents", priority: "0.8", changefreq: "monthly" as const },
  { path: "/about", priority: "0.8", changefreq: "monthly" as const },
  { path: "/faq", priority: "0.8", changefreq: "weekly" as const },
  { path: "/contact", priority: "0.8", changefreq: "monthly" as const },
  { path: "/team", priority: "0.7", changefreq: "monthly" as const },
];

export const curatedFlagshipHubs = [
  // Global Flagship Practice
  { slug: "global-financial-consultancy-firm", category: "sectors", priority: "0.95" },
  // Flagship High-Yield Investment Guide
  { slug: "free-agent-investment-yield-guide", category: "guides", priority: "0.90" },
  // High-Priority Regional Hubs & Guides
  { slug: "kampala-financial-consultancy", category: "locations", priority: "0.88" },
  { slug: "najjera-buwate-accounting-tax", category: "locations", priority: "0.88" },
  { slug: "diaspora-investment-property-management-usa-uk-canada", category: "locations", priority: "0.88" },
  { slug: "cross-border-financial-advisory-east-africa", category: "locations", priority: "0.88" },
  { slug: "ursb-company-registration-uganda-guide", category: "guides", priority: "0.88" },
  { slug: "ura-efris-tax-compliance-guide", category: "guides", priority: "0.88" },
  { slug: "foreign-company-incorporation-tax-uganda", category: "sectors", priority: "0.88" },
  // Secondary Regional Hubs & Sector Pages
  { slug: "kira-municipality-business-registration", category: "locations", priority: "0.85" },
  { slug: "wakiso-land-property-management", category: "locations", priority: "0.85" },
  { slug: "short-term-loans-collateral-guide", category: "guides", priority: "0.85" },
  { slug: "sme-retail-wholesale-uganda", category: "sectors", priority: "0.85" },
  { slug: "startups-tech-enterprises-uganda", category: "sectors", priority: "0.85" },
  { slug: "expatriate-tax-advisory-philippines-global", category: "sectors", priority: "0.85" },
];

export const BASE_SITE_URL = "https://titaniumfinancialconsultancy.com";

/**
 * Dynamically computes all 2,156 programmatic and core sitemap entries directly from keyword intelligence.
 */
export function generateDynamicSitemapEntries(dateOverride?: string): SitemapEntry[] {
  const dateStr = dateOverride || new Date().toISOString().split("T")[0];
  const seenUrls = new Set<string>();
  const entries: SitemapEntry[] = [];

  function registerUrl(
    loc: string,
    priority: string,
    changefreq: SitemapEntry["changefreq"] = "weekly",
    category?: string,
    slug?: string
  ) {
    if (seenUrls.has(loc)) return;
    seenUrls.add(loc);
    entries.push({ loc, lastmod: dateStr, changefreq, priority, category, slug });
  }

  // 1. Core Pages
  coreSitemapRoutes.forEach((r) => {
    registerUrl(`${BASE_SITE_URL}${r.path}`, r.priority, r.changefreq, "core");
  });

  // 2. Curated Flagship Pages
  curatedFlagshipHubs.forEach((c) => {
    registerUrl(`${BASE_SITE_URL}/${c.category}/${c.slug}`, c.priority, "weekly", c.category, c.slug);
  });

  // 3. Keyword Repository Target Pages (direct keyword integration)
  keywordRepository.forEach((k) => {
    if (k.targetPage) {
      const url = k.targetPage.startsWith("http")
        ? k.targetPage
        : `${BASE_SITE_URL}${k.targetPage.startsWith("/") ? "" : "/"}${k.targetPage}`;
      const prio = k.volumeTier === "high" ? "0.88" : "0.85";
      registerUrl(url, prio, "weekly", k.cluster, k.slug || k.term);
    }
  });

  // 3. Location Slugs (50 USA + 20 Canada + 35 Europe + 20 Philippines + 40 Africa/Uganda = 165 locations)
  const locationSlugs = [
    // USA (50)
    "usa", "texas", "california", "minnesota", "georgia", "new-york-state", "massachusetts",
    "washington-state", "illinois", "florida", "maryland", "virginia", "pennsylvania", "ohio",
    "michigan", "north-carolina", "colorado", "arizona", "new-jersey", "washington-dc",
    "dallas", "houston", "austin", "san-antonio", "los-angeles", "san-francisco", "san-jose",
    "san-diego", "minneapolis", "st-paul", "atlanta", "new-york-city", "brooklyn", "boston",
    "seattle", "chicago", "miami", "orlando", "tampa", "baltimore", "philadelphia", "pittsburgh",
    "detroit", "charlotte", "raleigh", "denver", "phoenix", "columbus", "cleveland", "indianapolis",
    // Canada (20)
    "canada", "ontario", "british-columbia", "alberta", "quebec", "manitoba", "saskatchewan",
    "nova-scotia", "toronto", "vancouver", "montreal", "calgary", "edmonton", "ottawa",
    "mississauga", "brampton", "winnipeg", "hamilton", "quebec-city", "surrey",
    // Europe & UK (35)
    "europe", "united-kingdom", "germany", "netherlands", "france", "switzerland", "sweden",
    "ireland", "belgium", "norway", "denmark", "austria", "italy", "spain", "finland",
    "london", "birmingham", "manchester", "leeds", "glasgow", "edinburgh", "bristol",
    "berlin", "frankfurt", "munich", "hamburg", "amsterdam", "rotterdam", "the-hague",
    "paris", "lyon", "zurich", "geneva", "stockholm", "dublin",
    // Philippines & Asia-Pacific (20)
    "philippines", "asia-pacific", "manila", "quezon-city", "makati", "taguig-bgc", "pasig",
    "cebu-city", "davao-city", "angeles-city", "iloilo-city", "uae", "dubai", "abu-dhabi",
    "qatar", "doha", "saudi-arabia", "riyadh", "singapore", "hong-kong",
    // Africa & Uganda (40)
    "africa", "east-africa", "kenya", "rwanda", "south-sudan", "tanzania", "drc", "south-africa",
    "nigeria", "ghana", "ethiopia", "zambia", "nairobi", "mombasa", "kigali", "juba",
    "dar-es-salaam", "kinshasa", "goma", "johannesburg", "cape-town", "lagos", "abuja", "accra",
    "uganda", "kampala", "najjera", "buwate", "kira", "ntinda", "nakawa", "kyanja", "kololo",
    "nakasero", "entebbe", "wakiso", "mukono", "jinja", "mbarara", "gulu"
  ];

  // 4. Core Services (10)
  const serviceSlugs = [
    "accounting-bookkeeping",
    "tax-compliance-efris",
    "company-registration-ursb",
    "cross-border-tax-advisory",
    "high-yield-investment-wealth",
    "land-title-property-management",
    "short-term-loans-collateral",
    "debt-restructuring-advisory",
    "foreign-direct-investment-fdi",
    "statutory-audit-compliance"
  ];

  // Programmatic Location Hubs (1,650 combinations)
  serviceSlugs.forEach((s) => {
    locationSlugs.forEach((l) => {
      const isPriorityRegion =
        l === "uganda" || l === "kampala" || l === "najjera" || l === "usa" || l === "united-kingdom" || l === "london";
      registerUrl(
        `${BASE_SITE_URL}/locations/${s}-${l}`,
        isPriorityRegion ? "0.82" : "0.80",
        "weekly",
        "location",
        `${s}-${l}`
      );
    });
  });

  // 5. Industry Sectors (20 sectors x 15 markets = 300 combinations)
  const sectorSlugs = [
    "tech-startups-software",
    "retail-wholesale-commerce",
    "import-export-trading",
    "real-estate-property-development",
    "healthcare-pharmaceuticals-clinics",
    "agribusiness-farming-agroprocessing",
    "logistics-freight-warehousing",
    "hospitality-tourism-hotels",
    "renewable-energy-solar-cleantech",
    "education-schools-vocational",
    "manufacturing-industrial-plants",
    "ngos-foundations-nonprofits",
    "fintech-digital-payments-remittance",
    "diaspora-investment-saccos",
    "construction-civil-engineering",
    "mining-extractives-minerals",
    "oil-gas-energy-services",
    "legal-professional-consulting-firms",
    "e-commerce-digital-retailers",
    "cross-border-multinational-subsidiaries"
  ];

  const marketSlugs = [
    "usa", "canada", "uk", "germany", "netherlands", "france", "switzerland",
    "philippines", "uae", "kenya", "rwanda", "south-sudan", "south-africa", "nigeria", "uganda"
  ];

  sectorSlugs.forEach((sec) => {
    marketSlugs.forEach((m) => {
      registerUrl(
        `${BASE_SITE_URL}/sectors/${sec}-${m}`,
        "0.80",
        "weekly",
        "sector",
        `${sec}-${m}`
      );
    });
  });

  // 6. Statutory & Financial Guides (12 topics x 15 markets = 180 combinations)
  const guideTopicSlugs = [
    "ursb-company-registration-process-guide",
    "ura-efris-electronic-tax-invoicing-manual",
    "free-agent-high-yield-investment-contract-guide",
    "land-title-search-zonal-office-due-diligence",
    "short-term-commercial-loans-collateral-appraisal",
    "cross-border-withholding-tax-double-taxation-relief",
    "expatriate-work-permit-tax-clearance-filing",
    "diaspora-property-tenancy-remote-governance",
    "foreign-subsidiary-incorporation-banking-setup",
    "corporate-debt-renegotiation-insolvency-avoidance",
    "internal-control-statutory-audit-readiness-checklist",
    "multi-currency-treasury-management-remittance-protocol"
  ];

  guideTopicSlugs.forEach((g) => {
    marketSlugs.forEach((m) => {
      registerUrl(
        `${BASE_SITE_URL}/guides/${g}-${m}`,
        "0.82",
        "weekly",
        "guide",
        `${g}-${m}`
      );
    });
  });

  return entries;
}

/**
 * Generates the complete, W3C standard dynamic XML string based directly on keywords.
 */
export function generateDynamicSitemapXml(dateOverride?: string): string {
  const entries = generateDynamicSitemapEntries(dateOverride);
  const xmlUrls = entries
    .map(
      (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join("\n");

  const dateStr = dateOverride || new Date().toISOString().split("T")[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- ========================================================================================= -->
<!-- DYNAMIC SITEMAP: Programmatically generated directly from src/data/keywords.ts            -->
<!-- Single Source of Truth: Keyword Intelligence Matrix, Target Geographies & Programmatic SEO -->
<!-- Total Indexed URLs: ${entries.length}                                                               -->
<!-- Generated for Search Engines & AI Answer Engines (ChatGPT, Perplexity, Copilot, Gemini)   -->
<!-- Runtime Serverless Handler: /api/sitemap                                                  -->
<!-- Development Server: vite.config.ts dynamic sitemap middleware                             -->
<!-- Last Updated: ${dateStr}                                                                  -->
<!-- ========================================================================================= -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>
`;
}

// Re-export alias for backward compatibility
export const generateSitemapXml = generateDynamicSitemapXml;

export default keywordRepository;

