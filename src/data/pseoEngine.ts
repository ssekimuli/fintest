/**
 * Titanium Financial Consultancy Co. Ltd
 * Enterprise Programmatic SEO (pSEO) & Dynamic Sitemap Engine
 * Supports 2,000+ targeted programmatic URLs across Global Jurisdictions:
 * Europe, North America (USA & Canada), Philippines, and Continental Africa & Uganda.
 */

import { pseoItems as curatedItems, type PseoItem } from "./pseoData";

// --- TAXONOMY TYPES ---
export interface PseoLocation {
  slug: string;
  name: string;
  region: "usa" | "canada" | "europe" | "philippines" | "africa" | "uganda" | "global";
  country: string;
  areaType: string;
  currency: string;
  marketNote: string;
}

export interface PseoService {
  slug: string;
  name: string;
  short: string;
  category: "accounting" | "tax" | "registration" | "cross-border" | "investment" | "property" | "loans" | "audit";
  focus: string;
  benefit: string;
  regulatoryAnchor: string;
}

export interface PseoSector {
  slug: string;
  name: string;
  short: string;
  complianceChallenge: string;
  solution: string;
}

export interface PseoMarket {
  slug: string;
  name: string;
  region: string;
  economicContext: string;
}

export interface PseoGuideTopic {
  slug: string;
  titlePattern: string;
  shortTopic: string;
  authorityBody: string;
  overviewSummary: string;
}

export interface PseoSlugEntry {
  slug: string;
  path: string;
  category: "location" | "sector" | "guide";
  categoryLabel: string;
  priority: number;
  changefreq: string;
  lastmod: string;
}

export interface PseoDirectorySummary {
  slug: string;
  category: "location" | "sector" | "guide";
  categoryLabel: string;
  title: string;
  subtitle: string;
  targetEntityOrArea: string;
  region: string;
  path: string;
}

// ----------------------------------------------------------------------
// 1. LOCATIONS TAXONOMY (165 Locations Across All Target Continents)
// ----------------------------------------------------------------------
export const pseoLocations: PseoLocation[] = [
  // --- UNITED STATES (50) ---
  { slug: "usa", name: "United States", region: "usa", country: "United States", areaType: "Country", currency: "USD", marketNote: "US corporate entity structuring, cross-border remittance, and IRS compliance coordination" },
  { slug: "texas", name: "Texas", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Texas commercial trade, LLC compliance, and energy-commercial investments" },
  { slug: "california", name: "California", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Tech corridor advisory, venture syndicates, and diaspora asset management" },
  { slug: "minnesota", name: "Minnesota", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Twin Cities diaspora investor community and high-yield commercial savings" },
  { slug: "georgia", name: "Georgia", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Atlanta commercial enterprise expansion and international logistics financing" },
  { slug: "new-york-state", name: "New York State", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Global financial capital connection, institutional compliance, and fund structures" },
  { slug: "massachusetts", name: "Massachusetts", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Boston institutional wealth and educational-commercial endowments" },
  { slug: "washington-state", name: "Washington State", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Pacific Northwest cross-border commerce and enterprise consulting" },
  { slug: "illinois", name: "Illinois", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Midwest industrial and commodities trade structuring" },
  { slug: "florida", name: "Florida", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Cross-border real estate holdings, family offices, and trade financing" },
  { slug: "maryland", name: "Maryland", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Mid-Atlantic diaspora investor hubs and corporate governance" },
  { slug: "virginia", name: "Virginia", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Corporate technology contractors and international consultancy setup" },
  { slug: "pennsylvania", name: "Pennsylvania", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Mid-Atlantic corporate manufacturing and healthcare practice accounting" },
  { slug: "ohio", name: "Ohio", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Commercial supply chain financing and corporate subsidiary administration" },
  { slug: "michigan", name: "Michigan", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Automotive and industrial trade finance coordination" },
  { slug: "north-carolina", name: "North Carolina", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Research Triangle technology capital and banking advisory" },
  { slug: "colorado", name: "Colorado", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Renewable energy finance and commercial real estate syndication" },
  { slug: "arizona", name: "Arizona", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Southwest commercial trade and private wealth structuring" },
  { slug: "new-jersey", name: "New Jersey", region: "usa", country: "United States", areaType: "State", currency: "USD", marketNote: "Pharmaceutical trade corridors and multinational corporate accounting" },
  { slug: "washington-dc", name: "Washington DC", region: "usa", country: "United States", areaType: "Federal District", currency: "USD", marketNote: "International development finance, diplomatic tax compliance, and multilateral affairs" },
  { slug: "dallas", name: "Dallas", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "North Texas corporate headquarters and diaspora commercial syndicates" },
  { slug: "houston", name: "Houston", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Energy corridor cross-border investments and port logistics accounting" },
  { slug: "austin", name: "Austin", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Fast-growing venture hubs and angel investor wealth management" },
  { slug: "san-antonio", name: "San Antonio", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Healthcare and cross-border commercial logistics" },
  { slug: "los-angeles", name: "Los Angeles", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Entertainment, import-export trade, and high-net-worth diaspora accounts" },
  { slug: "san-francisco", name: "San Francisco", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Venture capital fund allocation and cross-border corporate governance" },
  { slug: "san-jose", name: "San Jose", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Silicon Valley high-technology enterprise financial structuring" },
  { slug: "san-diego", name: "San Diego", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Biotech trade corridors and international cross-border agreements" },
  { slug: "minneapolis", name: "Minneapolis", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Premier Ugandan-American diaspora hub and high-yield savings plans" },
  { slug: "st-paul", name: "St. Paul", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Twin Cities civic and commercial diaspora business ventures" },
  { slug: "atlanta", name: "Atlanta", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Southeast logistics hub, fintech ventures, and international corporate expansion" },
  { slug: "new-york-city", name: "New York City", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Global commercial banking, institutional fiduciary services, and investment funds" },
  { slug: "brooklyn", name: "Brooklyn", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Commercial SMEs, digital commerce, and diaspora investment groups" },
  { slug: "boston", name: "Boston", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Biomedical, venture capital, and institutional asset management" },
  { slug: "seattle", name: "Seattle", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Cloud software, global e-commerce, and logistics accounting" },
  { slug: "chicago", name: "Chicago", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Financial futures, global logistics, and corporate audit coordination" },
  { slug: "miami", name: "Miami", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "International gateway trade, cross-border real estate, and private wealth" },
  { slug: "orlando", name: "Orlando", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Hospitality enterprise accounting and commercial real estate syndication" },
  { slug: "tampa", name: "Tampa", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Gulf coast logistics, healthcare practice bookkeeping, and loan advisory" },
  { slug: "baltimore", name: "Baltimore", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Mid-Atlantic shipping, healthcare, and diaspora asset verification" },
  { slug: "philadelphia", name: "Philadelphia", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Life sciences corporate setup and commercial debt restructuring" },
  { slug: "pittsburgh", name: "Pittsburgh", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Advanced manufacturing and technology incubator finance" },
  { slug: "detroit", name: "Detroit", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Industrial cross-border supply chains and commercial equipment financing" },
  { slug: "charlotte", name: "Charlotte", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Banking capital of the Southeast and treasury advisory" },
  { slug: "raleigh", name: "Raleigh", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Technology research commercialization and corporate structuring" },
  { slug: "denver", name: "Denver", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Telecommunications and energy investments across emerging corridors" },
  { slug: "phoenix", name: "Phoenix", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Southwest commercial expansion and real estate portfolio management" },
  { slug: "columbus", name: "Columbus", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Logistics corridor management and regional corporate accounting" },
  { slug: "cleveland", name: "Cleveland", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Healthcare institutions and commercial equipment loan workouts" },
  { slug: "indianapolis", name: "Indianapolis", region: "usa", country: "United States", areaType: "City", currency: "USD", marketNote: "Transportation, manufacturing, and international trade accounting" },

  // --- CANADA (20) ---
  { slug: "canada", name: "Canada", region: "canada", country: "Canada", areaType: "Country", currency: "CAD", marketNote: "Canadian federal corporate structuring, CRA compliance, and diaspora wealth" },
  { slug: "ontario", name: "Ontario", region: "canada", country: "Canada", areaType: "Province", currency: "CAD", marketNote: "Premier economic province, Toronto financial district, and diaspora groups" },
  { slug: "british-columbia", name: "British Columbia", region: "canada", country: "Canada", areaType: "Province", currency: "CAD", marketNote: "Pacific Rim trade gateway and cross-border commercial ventures" },
  { slug: "alberta", name: "Alberta", region: "canada", country: "Canada", areaType: "Province", currency: "CAD", marketNote: "Energy, commercial agriculture, and corporate investment funds" },
  { slug: "quebec", name: "Quebec", region: "canada", country: "Canada", areaType: "Province", currency: "CAD", marketNote: "Bilingual commerce, multinational research, and aerospace logistics" },
  { slug: "manitoba", name: "Manitoba", region: "canada", country: "Canada", areaType: "Province", currency: "CAD", marketNote: "Central Canadian agricultural commodities and trade financing" },
  { slug: "saskatchewan", name: "Saskatchewan", region: "canada", country: "Canada", areaType: "Province", currency: "CAD", marketNote: "Agribusiness exports and mineral extraction financial advisory" },
  { slug: "nova-scotia", name: "Nova Scotia", region: "canada", country: "Canada", areaType: "Province", currency: "CAD", marketNote: "Atlantic maritime shipping and corporate subsidiary setup" },
  { slug: "toronto", name: "Toronto", region: "canada", country: "Canada", areaType: "City", currency: "CAD", marketNote: "Major financial capital, Ugandan-Canadian diaspora hub, and Free-Agent funds" },
  { slug: "vancouver", name: "Vancouver", region: "canada", country: "Canada", areaType: "City", currency: "CAD", marketNote: "Pacific trade hub, real estate investment, and green tech advisory" },
  { slug: "montreal", name: "Montreal", region: "canada", country: "Canada", areaType: "City", currency: "CAD", marketNote: "International logistics, AI technology, and corporate taxation" },
  { slug: "calgary", name: "Calgary", region: "canada", country: "Canada", areaType: "City", currency: "CAD", marketNote: "Corporate energy headquarters and commercial asset deployment" },
  { slug: "edmonton", name: "Edmonton", region: "canada", country: "Canada", areaType: "City", currency: "CAD", marketNote: "Northern supply chains and industrial business formalisation" },
  { slug: "ottawa", name: "Ottawa", region: "canada", country: "Canada", areaType: "City", currency: "CAD", marketNote: "Federal regulatory affairs, diplomatic accounts, and tech startups" },
  { slug: "mississauga", name: "Mississauga", region: "canada", country: "Canada", areaType: "City", currency: "CAD", marketNote: "Key logistics corridor and corporate headquarters accounting" },
  { slug: "brampton", name: "Brampton", region: "canada", country: "Canada", areaType: "City", currency: "CAD", marketNote: "Vibrant diaspora business community and real estate verification" },
  { slug: "winnipeg", name: "Winnipeg", region: "canada", country: "Canada", areaType: "City", currency: "CAD", marketNote: "Central transportation hub and commercial manufacturing finance" },
  { slug: "hamilton", name: "Hamilton", region: "canada", country: "Canada", areaType: "City", currency: "CAD", marketNote: "Industrial manufacturing and healthcare sector bookkeeping" },
  { slug: "quebec-city", name: "Quebec City", region: "canada", country: "Canada", areaType: "City", currency: "CAD", marketNote: "Provincial governance, tourism commerce, and corporate setup" },
  { slug: "surrey", name: "Surrey", region: "canada", country: "Canada", areaType: "City", currency: "CAD", marketNote: "Commercial growth corridor and international remittance management" },

  // --- EUROPE & UNITED KINGDOM (35) ---
  { slug: "europe", name: "Europe", region: "europe", country: "European Union", areaType: "Continent", currency: "EUR", marketNote: "Pan-European corporate structuring, GDPR/AML compliance, and DTA treaties" },
  { slug: "united-kingdom", name: "United Kingdom", region: "europe", country: "United Kingdom", areaType: "Country", currency: "GBP", marketNote: "London financial markets, HMRC double-tax treaties, and UK diaspora wealth" },
  { slug: "germany", name: "Germany", region: "europe", country: "Germany", areaType: "Country", currency: "EUR", marketNote: "Industrial engineering exports, Frankfurt banking, and corporate FDI" },
  { slug: "netherlands", name: "Netherlands", region: "europe", country: "Netherlands", areaType: "Country", currency: "EUR", marketNote: "Rotterdam logistics gateway, holding company structures, and agribusiness trade" },
  { slug: "france", name: "France", region: "europe", country: "France", areaType: "Country", currency: "EUR", marketNote: "Paris corporate finance, infrastructure syndication, and Francophone trade" },
  { slug: "switzerland", name: "Switzerland", region: "europe", country: "Switzerland", areaType: "Country", currency: "CHF", marketNote: "Private banking capital, Geneva commodity trade, and fiduciary trusts" },
  { slug: "sweden", name: "Sweden", region: "europe", country: "Sweden", areaType: "Country", currency: "SEK", marketNote: "Nordic technology investment, sustainability ventures, and corporate audit" },
  { slug: "ireland", name: "Ireland", region: "europe", country: "Ireland", areaType: "Country", currency: "EUR", marketNote: "European tech headquarters, international tax treaties, and fund administration" },
  { slug: "belgium", name: "Belgium", region: "europe", country: "Belgium", areaType: "Country", currency: "EUR", marketNote: "Brussels diplomatic center, EU regulatory compliance, and diamond trade" },
  { slug: "norway", name: "Norway", region: "europe", country: "Norway", areaType: "Country", currency: "NOK", marketNote: "Sovereign wealth standards, energy services, and maritime trade" },
  { slug: "denmark", name: "Denmark", region: "europe", country: "Denmark", areaType: "Country", currency: "DKK", marketNote: "Renewable energy finance and international shipping logistics" },
  { slug: "austria", name: "Austria", region: "europe", country: "Austria", areaType: "Country", currency: "EUR", marketNote: "Central European commercial banking and multilateral organization affairs" },
  { slug: "italy", name: "Italy", region: "europe", country: "Italy", areaType: "Country", currency: "EUR", marketNote: "Milan financial center, manufacturing machinery exports, and trade contracts" },
  { slug: "spain", name: "Spain", region: "europe", country: "Spain", areaType: "Country", currency: "EUR", marketNote: "Iberian commerce, renewable energy assets, and Latin-African trade ties" },
  { slug: "finland", name: "Finland", region: "europe", country: "Finland", areaType: "Country", currency: "EUR", marketNote: "Nordic high-tech innovation, forestry trade, and corporate governance" },
  { slug: "london", name: "London", region: "europe", country: "United Kingdom", areaType: "City", currency: "GBP", marketNote: "City of London financial capital, UK diaspora syndicates, and corporate debt" },
  { slug: "birmingham", name: "Birmingham", region: "europe", country: "United Kingdom", areaType: "City", currency: "GBP", marketNote: "West Midlands industrial center and active diaspora business networks" },
  { slug: "manchester", name: "Manchester", region: "europe", country: "United Kingdom", areaType: "City", currency: "GBP", marketNote: "Northern powerhouse commerce, real estate investments, and sports business" },
  { slug: "leeds", name: "Leeds", region: "europe", country: "United Kingdom", areaType: "City", currency: "GBP", marketNote: "Major legal and financial services center outside London" },
  { slug: "glasgow", name: "Glasgow", region: "europe", country: "United Kingdom", areaType: "City", currency: "GBP", marketNote: "Scottish industrial enterprise, maritime engineering, and corporate setup" },
  { slug: "edinburgh", name: "Edinburgh", region: "europe", country: "United Kingdom", areaType: "City", currency: "GBP", marketNote: "Scottish asset management, fund administration, and institutional trusts" },
  { slug: "bristol", name: "Bristol", region: "europe", country: "United Kingdom", areaType: "City", currency: "GBP", marketNote: "Southwest technology, aerospace engineering, and green commerce" },
  { slug: "berlin", name: "Berlin", region: "europe", country: "Germany", areaType: "City", currency: "EUR", marketNote: "German startup ecosystem, venture capital, and digital finance" },
  { slug: "frankfurt", name: "Frankfurt", region: "europe", country: "Germany", areaType: "City", currency: "EUR", marketNote: "European Central Bank base, commercial banking, and treasury hedging" },
  { slug: "munich", name: "Munich", region: "europe", country: "Germany", areaType: "City", currency: "EUR", marketNote: "Bavarian industrial conglomerates and cross-border FDI advisory" },
  { slug: "hamburg", name: "Hamburg", region: "europe", country: "Germany", areaType: "City", currency: "EUR", marketNote: "Major European maritime logistics hub and international commodities trade" },
  { slug: "amsterdam", name: "Amsterdam", region: "europe", country: "Netherlands", areaType: "City", currency: "EUR", marketNote: "International holding entities, fintech, and cross-border commercial law" },
  { slug: "rotterdam", name: "Rotterdam", region: "europe", country: "Netherlands", areaType: "City", currency: "EUR", marketNote: "Europe's largest seaport logistics and trade supply chain accounting" },
  { slug: "the-hague", name: "The Hague", region: "europe", country: "Netherlands", areaType: "City", currency: "EUR", marketNote: "International justice, diplomatic treaties, and NGO fiduciary oversight" },
  { slug: "paris", name: "Paris", region: "europe", country: "France", areaType: "City", currency: "EUR", marketNote: "French corporate headquarters, infrastructure funds, and Pan-African trade" },
  { slug: "lyon", name: "Lyon", region: "europe", country: "France", areaType: "City", currency: "EUR", marketNote: "Biotech, pharmaceuticals, and French regional corporate advisory" },
  { slug: "zurich", name: "Zurich", region: "europe", country: "Switzerland", areaType: "City", currency: "CHF", marketNote: "Swiss private banking, wealth governance, and multi-currency treasury" },
  { slug: "geneva", name: "Geneva", region: "europe", country: "Switzerland", areaType: "City", currency: "CHF", marketNote: "Global commodity trading, UN institutions, and international foundation trusts" },
  { slug: "stockholm", name: "Stockholm", region: "europe", country: "Sweden", areaType: "City", currency: "SEK", marketNote: "Nordic venture capital, sustainable finance, and tech enterprise accounting" },
  { slug: "dublin", name: "Dublin", region: "europe", country: "Ireland", areaType: "City", currency: "EUR", marketNote: "European technology headquarters, corporate tax planning, and fund administration" },

  // --- PHILIPPINES & ASIA-PACIFIC (20) ---
  { slug: "philippines", name: "Philippines", region: "philippines", country: "Philippines", areaType: "Country", currency: "PHP", marketNote: "Filipino expatriate taxation, OFW cross-border remittances, and commercial ventures" },
  { slug: "asia-pacific", name: "Asia-Pacific", region: "philippines", country: "Asia-Pacific", areaType: "Region", currency: "USD", marketNote: "Regional trade corridors, multinational corporate expansion, and capital flows" },
  { slug: "manila", name: "Metro Manila", region: "philippines", country: "Philippines", areaType: "City", currency: "PHP", marketNote: "National capital commercial hub, BPO enterprises, and overseas contractor taxes" },
  { slug: "quezon-city", name: "Quezon City", region: "philippines", country: "Philippines", areaType: "City", currency: "PHP", marketNote: "Commercial retail, media enterprises, and professional contractor advisory" },
  { slug: "makati", name: "Makati", region: "philippines", country: "Philippines", areaType: "City", currency: "PHP", marketNote: "Premier central business district, banking headquarters, and multinational branches" },
  { slug: "taguig-bgc", name: "Taguig (BGC)", region: "philippines", country: "Philippines", areaType: "City", currency: "PHP", marketNote: "Bonifacio Global City modern corporate center and tech startup financing" },
  { slug: "pasig", name: "Pasig", region: "philippines", country: "Philippines", areaType: "City", currency: "PHP", marketNote: "Ortigas Center commercial corridor and financial holding management" },
  { slug: "cebu-city", name: "Cebu City", region: "philippines", country: "Philippines", areaType: "City", currency: "PHP", marketNote: "Central Visayas economic engine, maritime logistics, and BPO operations" },
  { slug: "davao-city", name: "Davao City", region: "philippines", country: "Philippines", areaType: "City", currency: "PHP", marketNote: "Mindanao commercial center, agribusiness trade, and infrastructure investments" },
  { slug: "angeles-city", name: "Angeles City", region: "philippines", country: "Philippines", areaType: "City", currency: "PHP", marketNote: "Clark Freeport economic zone and international trade formalisation" },
  { slug: "iloilo-city", name: "Iloilo City", region: "philippines", country: "Philippines", areaType: "City", currency: "PHP", marketNote: "Western Visayas education, healthcare services, and contractor accounts" },
  { slug: "uae", name: "United Arab Emirates", region: "philippines", country: "UAE", areaType: "Country", currency: "AED", marketNote: "Gulf diaspora wealth corridor, tax-free trade zones, and Free-Agent investments" },
  { slug: "dubai", name: "Dubai", region: "philippines", country: "UAE", areaType: "City", currency: "AED", marketNote: "Global trade hub, expatriate wealth management, and commodity financing" },
  { slug: "abu-dhabi", name: "Abu Dhabi", region: "philippines", country: "UAE", areaType: "City", currency: "AED", marketNote: "Sovereign capital deployment, energy sector services, and enterprise setup" },
  { slug: "qatar", name: "Qatar", region: "philippines", country: "Qatar", areaType: "Country", currency: "QAR", marketNote: "Infrastructure contractors, expatriate payroll, and bilateral trade compliance" },
  { slug: "doha", name: "Doha", region: "philippines", country: "Qatar", areaType: "City", currency: "QAR", marketNote: "Commercial engineering services, foreign remittance, and corporate audit" },
  { slug: "saudi-arabia", name: "Saudi Arabia", region: "philippines", country: "Saudi Arabia", areaType: "Country", currency: "SAR", marketNote: "Vision 2030 commercial expansion, engineering contractors, and tax compliance" },
  { slug: "riyadh", name: "Riyadh", region: "philippines", country: "Saudi Arabia", areaType: "City", currency: "SAR", marketNote: "Kingdom corporate headquarters, construction consortia, and payroll taxes" },
  { slug: "singapore", name: "Singapore", region: "philippines", country: "Singapore", areaType: "Country", currency: "SGD", marketNote: "Asian financial center, cross-border holding companies, and commodity hedging" },
  { slug: "hong-kong", name: "Hong Kong", region: "philippines", country: "Hong Kong", areaType: "Territory", currency: "HKD", marketNote: "International trade finance, offshore banking, and multi-currency treasury" },

  // --- CONTINENTAL AFRICA & UGANDA (40) ---
  { slug: "africa", name: "Continental Africa", region: "africa", country: "Africa", areaType: "Continent", currency: "USD", marketNote: "AfCFTA pan-African trade, cross-border corporate integration, and FDI consulting" },
  { slug: "east-africa", name: "East African Community", region: "africa", country: "East Africa", areaType: "Trade Bloc", currency: "USD", marketNote: "EAC Common Market customs, harmonized VAT, and cross-border transport" },
  { slug: "kenya", name: "Kenya", region: "africa", country: "Kenya", areaType: "Country", currency: "KES", marketNote: "Nairobi financial hub, KRA-URA trade reconciliations, and EAC corporate setup" },
  { slug: "rwanda", name: "Rwanda", region: "africa", country: "Rwanda", areaType: "Country", currency: "RWF", marketNote: "Kigali tech hub, RDB corporate incorporation, and regional trade corridors" },
  { slug: "south-sudan", name: "South Sudan", region: "africa", country: "South Sudan", areaType: "Country", currency: "USD", marketNote: "Cross-border commercial banking, trading firm accounting, and currency flows" },
  { slug: "tanzania", name: "Tanzania", region: "africa", country: "Tanzania", areaType: "Country", currency: "TZS", marketNote: "Dar es Salaam port logistics, mining contracts, and EAC tax compliance" },
  { slug: "drc", name: "Democratic Republic of Congo", region: "africa", country: "DRC", areaType: "Country", currency: "USD", marketNote: "Cross-border trade corridors from Kampala to Goma/Kinshasa, mining services" },
  { slug: "south-africa", name: "South Africa", region: "africa", country: "South Africa", areaType: "Country", currency: "ZAR", marketNote: "Johannesburg corporate capital, multinational subsidiaries, and mining finance" },
  { slug: "nigeria", name: "Nigeria", region: "africa", country: "Nigeria", areaType: "Country", currency: "NGN", marketNote: "Lagos commercial hub, corporate subsidiary setup in East Africa, and trade" },
  { slug: "ghana", name: "Ghana", region: "africa", country: "Ghana", areaType: "Country", currency: "GHS", marketNote: "West African trade corridor, AfCFTA secretariat liaison, and gold trade" },
  { slug: "ethiopia", name: "Ethiopia", region: "africa", country: "Ethiopia", areaType: "Country", currency: "ETB", marketNote: "Addis Ababa regional diplomatic center, manufacturing FDI, and airline cargo" },
  { slug: "zambia", name: "Zambia", region: "africa", country: "Zambia", areaType: "Country", currency: "ZMW", marketNote: "COMESA common trade protocols, copper mining logistics, and agribusiness" },
  { slug: "nairobi", name: "Nairobi", region: "africa", country: "Kenya", areaType: "City", currency: "KES", marketNote: "Regional corporate headquarters, multinational tech hubs, and cross-border trade" },
  { slug: "mombasa", name: "Mombasa", region: "africa", country: "Kenya", areaType: "City", currency: "KES", marketNote: "Northern corridor shipping port, freight logistics, and customs tax clearing" },
  { slug: "kigali", name: "Kigali", region: "africa", country: "Rwanda", areaType: "City", currency: "RWF", marketNote: "Kigali Innovation City, financial sector reform, and cross-border companies" },
  { slug: "juba", name: "Juba", region: "africa", country: "South Sudan", areaType: "City", currency: "USD", marketNote: "Trade finance, commercial supply contracts, and corporate banking in Uganda" },
  { slug: "dar-es-salaam", name: "Dar es Salaam", region: "africa", country: "Tanzania", areaType: "City", currency: "TZS", marketNote: "Central corridor port logistics, manufacturing, and EAC trade compliance" },
  { slug: "kinshasa", name: "Kinshasa", region: "africa", country: "DRC", areaType: "City", currency: "USD", marketNote: "Central African commercial center, telecommunications, and corporate banking" },
  { slug: "goma", name: "Goma", region: "africa", country: "DRC", areaType: "City", currency: "USD", marketNote: "Cross-border trading hub with Uganda, import-export customs, and currency" },
  { slug: "johannesburg", name: "Johannesburg", region: "africa", country: "South Africa", areaType: "City", currency: "ZAR", marketNote: "Pan-African headquarters, JSE capital markets, and corporate subsidiaries" },
  { slug: "cape-town", name: "Cape Town", region: "africa", country: "South Africa", areaType: "City", currency: "ZAR", marketNote: "Tech hub, asset management, renewable energy, and international trade" },
  { slug: "lagos", name: "Lagos", region: "africa", country: "Nigeria", areaType: "City", currency: "NGN", marketNote: "Commercial megacity, fintech ventures, and multinational company expansion" },
  { slug: "abuja", name: "Abuja", region: "africa", country: "Nigeria", areaType: "City", currency: "NGN", marketNote: "Federal regulatory center, public-private partnerships, and corporate contracts" },
  { slug: "accra", name: "Accra", region: "africa", country: "Ghana", areaType: "City", currency: "GHS", marketNote: "AfCFTA headquarters, gold-cocoa commerce, and corporate governance" },
  { slug: "uganda", name: "Uganda Nationwide", region: "uganda", country: "Uganda", areaType: "Country", currency: "UGX", marketNote: "Full statutory compliance across URA, URSB, KCCA, Ministry of Lands, and commercial banks" },
  { slug: "kampala", name: "Kampala", region: "uganda", country: "Uganda", areaType: "City", currency: "UGX", marketNote: "National capital economic center, commercial banking, URA headquarters, and URSB registry" },
  { slug: "najjera", name: "Najjera", region: "uganda", country: "Uganda", areaType: "Sub-County", currency: "UGX", marketNote: "Titanium Financial Consultancy headquarters at Rowan Village Mall along Najjera-Buwate road" },
  { slug: "buwate", name: "Buwate", region: "uganda", country: "Uganda", areaType: "Sub-County", currency: "UGX", marketNote: "Thriving residential-commercial growth corridor, local retail, and loan advisory" },
  { slug: "kira", name: "Kira Municipality", region: "uganda", country: "Uganda", areaType: "Municipality", currency: "UGX", marketNote: "Fastest-growing municipality in Uganda, municipal trading licenses, and SME formalisation" },
  { slug: "ntinda", name: "Ntinda", region: "uganda", country: "Uganda", areaType: "Division", currency: "UGX", marketNote: "Vibrant SME commercial zone, medical clinics, and professional firm bookkeeping" },
  { slug: "nakawa", name: "Nakawa", region: "uganda", country: "Uganda", areaType: "Division", currency: "UGX", marketNote: "URA Headquarters corridor, industrial park manufacturing, and customs clearing" },
  { slug: "kyanja", name: "Kyanja", region: "uganda", country: "Uganda", areaType: "Division", currency: "UGX", marketNote: "High-growth residential-commercial district, real estate development, and tax filing" },
  { slug: "kololo", name: "Kololo", region: "uganda", country: "Uganda", areaType: "Division", currency: "UGX", marketNote: "Diplomatic missions, international NGOs, venture firms, and executive wealth advisory" },
  { slug: "nakasero", name: "Nakasero", region: "uganda", country: "Uganda", areaType: "Division", currency: "UGX", marketNote: "Central business district, corporate law firms, commercial banks, and statutory audits" },
  { slug: "entebbe", name: "Entebbe", region: "uganda", country: "Uganda", areaType: "Municipality", currency: "UGX", marketNote: "International airport gateway, cargo freight logistics, customs tax, and tourism" },
  { slug: "wakiso", name: "Wakiso District", region: "uganda", country: "Uganda", areaType: "District", currency: "UGX", marketNote: "Wakiso Ministry Zonal Office (MZO) land title verification, caveats, and real estate" },
  { slug: "mukono", name: "Mukono", region: "uganda", country: "Uganda", areaType: "District", currency: "UGX", marketNote: "Industrial park manufacturing, logistics, and trading business registration" },
  { slug: "jinja", name: "Jinja", region: "uganda", country: "Uganda", areaType: "City", currency: "UGX", marketNote: "Eastern industrial city, agro-processing factories, and commercial loan workouts" },
  { slug: "mbarara", name: "Mbarara", region: "uganda", country: "Uganda", areaType: "City", currency: "UGX", marketNote: "Western commercial capital, dairy agro-processing, and corporate bank financing" },
  { slug: "gulu", name: "Gulu", region: "uganda", country: "Uganda", areaType: "City", currency: "UGX", marketNote: "Northern commercial hub, NGO projects, agribusiness trade, and business registration" },
];

// ----------------------------------------------------------------------
// 2. SERVICES TAXONOMY (10 Core Practice Capabilities)
// ----------------------------------------------------------------------
export const pseoServices: PseoService[] = [
  {
    slug: "accounting-bookkeeping",
    name: "Corporate Accounting & Bookkeeping Services",
    short: "Accounting & Bookkeeping",
    category: "accounting",
    focus: "full-cycle bookkeeping, monthly management accounts, general ledger maintenance, and GAAP/IFRS financial statement preparation",
    benefit: "ensures transparent financial records, prevents revenue leakage, and delivers audit-ready statements for board reviews and bank financing",
    regulatoryAnchor: "aligned with International Financial Reporting Standards (IFRS), GAAP, and national statutory accountancy standards",
  },
  {
    slug: "tax-compliance-efris",
    name: "Tax Compliance, EFRIS Invoicing & URA Advisory",
    short: "Tax Compliance & EFRIS",
    category: "tax",
    focus: "monthly VAT, PAYE, withholding tax filing, electronic invoicing (EFRIS) portal integration, and Tax Clearance Certificates (TCC)",
    benefit: "prevents crippling tax penalties, ensures flawless e-invoicing compliance, and streamlines business operations with tax authorities",
    regulatoryAnchor: "governed by the Tax Procedures Code Act, VAT Act, Income Tax regulations, and electronic fiscal receipting standards",
  },
  {
    slug: "company-registration-ursb",
    name: "Company Registration, URSB Formalisation & Licensing",
    short: "Company Registration",
    category: "registration",
    focus: "online company incorporation, business name reservation, articles of association, director filings, and municipal trading licenses",
    benefit: "establishes legally protected corporate entities, unlocks corporate banking privileges, and prepares businesses for investment capital",
    regulatoryAnchor: "executed under the Companies Act 2012, Uganda Registration Services Bureau (URSB) regulations, and trade licensing acts",
  },
  {
    slug: "cross-border-tax-advisory",
    name: "Cross-Border Tax Advisory & Double Taxation Relief",
    short: "Cross-Border Tax",
    category: "cross-border",
    focus: "international corporate tax planning, bilateral Double Taxation Agreements (DTAs), transfer pricing documentation, and withholding tax optimization",
    benefit: "eliminates double taxation between host and home countries, optimizes profit repatriation, and protects multinational parent entities",
    regulatoryAnchor: "structured under OECD transfer pricing guidelines, bilateral DTA treaties, and multi-jurisdictional revenue authority codes",
  },
  {
    slug: "high-yield-investment-wealth",
    name: "High-Yield Wealth & Free-Agent Investment Advisory",
    short: "High-Yield Investments",
    category: "investment",
    focus: "fixed-yield commercial savings contracts delivering 20% to 30% annual returns, capital protection mechanisms, and structured credit deployment",
    benefit: "generates superior passive returns backed by vetted commercial credit portfolios, formal contracts, and strict risk-mitigated covenants",
    regulatoryAnchor: "administered under legally enforceable commercial investment agreements, clear tenure terms, and institutional fiduciary governance",
  },
  {
    slug: "land-title-property-management",
    name: "Land Title Verification & Remote Property Management",
    short: "Land Title & Property",
    category: "property",
    focus: "Ministry of Lands zonal registry search reports, caveat due diligence, deed plan verification, and remote tenancy rent collection",
    benefit: "protects property acquisitions from fraud, verifies genuine title ownership, and delivers seamless rent remittance for overseas landlords",
    regulatoryAnchor: "coordinated directly through Ministry of Lands Zonal Offices (MZOs), Land Act statutory provisions, and tenancy management agreements",
  },
  {
    slug: "short-term-loans-collateral",
    name: "Short-Term Working Capital & Collateral Loan Advisory",
    short: "Collateral Loans",
    category: "loans",
    focus: "1-month emergency commercial bridge financing, asset-backed loans, collateral title verification, and structured liquidity deployment",
    benefit: "delivers immediate cash liquidity within 24 to 48 hours against verified collateral, bypassing lengthy institutional bank delays",
    regulatoryAnchor: "structured through formal loan agreements, clear interest schedules, legal mortgage caveats, and transparent repayment covenants",
  },
  {
    slug: "debt-restructuring-advisory",
    name: "Commercial Debt Restructuring & Loan Workout Advisory",
    short: "Debt Restructuring",
    category: "loans",
    focus: "commercial bank loan renegotiation, interest rate workout plans, debt-to-equity advisory, and insolvency avoidance frameworks",
    benefit: "halts asset foreclosure proceedings, reduces monthly debt-service strain, and restores viable cash flow for ongoing business growth",
    regulatoryAnchor: "conducted under commercial banking regulations, insolvency acts, and structured creditor workout protocols",
  },
  {
    slug: "foreign-direct-investment-fdi",
    name: "Foreign Direct Investment (FDI) & Market Entry Advisory",
    short: "FDI & Market Entry",
    category: "registration",
    focus: "market entry feasibility, investment license acquisition, registered office representation, and foreign subsidiary establishment",
    benefit: "accelerates foreign capital deployment, secures statutory investment incentives, and navigates local regulatory hurdles with ease",
    regulatoryAnchor: "administered in accordance with Investment Code Acts, Free Zone regulations, and national company formation guidelines",
  },
  {
    slug: "statutory-audit-compliance",
    name: "Statutory Financial Audits & Internal Controls Review",
    short: "Statutory Audits",
    category: "audit",
    focus: "pre-audit financial diagnostic examinations, internal control fortification, revenue leakage detection, and external audit readiness",
    benefit: "protects executive leadership against compliance liabilities, satisfies institutional lenders, and guarantees smooth external audits",
    regulatoryAnchor: "aligned with International Standards on Auditing (ISA), ICPAU guidelines, and statutory corporate filing obligations",
  },
];

// ----------------------------------------------------------------------
// 3. SECTORS TAXONOMY (20 Specialized Industries)
// ----------------------------------------------------------------------
export const pseoSectors: PseoSector[] = [
  { slug: "tech-startups-software", name: "Technology Startups & Software Enterprises", short: "Tech Startups", complianceChallenge: "SaaS revenue recognition, cross-border intellectual property taxation, and investor cap-table financial models", solution: "Structured cap-table modeling, investor-ready IFRS financials, and cross-border digital service tax planning" },
  { slug: "retail-wholesale-commerce", name: "Retail Stores & Wholesale Distribution", short: "Retail & Wholesale", complianceChallenge: "High-volume point-of-sale EFRIS electronic invoicing, inventory margin shrinkage, and supplier withholding taxes", solution: "Point-of-sale EFRIS automation, rigorous stock valuation, and working capital credit facilities" },
  { slug: "import-export-trading", name: "Import-Export & International Trade", short: "Import-Export", complianceChallenge: "Customs tariff classification, bonded warehouse accounting, and foreign exchange currency exposure", solution: "Customs tax clearance coordination, multi-currency trade financing, and trade credit lines" },
  { slug: "real-estate-property-development", name: "Real Estate & Commercial Property Development", short: "Real Estate Development", complianceChallenge: "Title deed fraud verification, construction contractor withholding, and rental income tax compliance", solution: "Ministry of Lands registry searches, construction project financial tracking, and tenancy administration" },
  { slug: "healthcare-pharmaceuticals-clinics", name: "Healthcare, Medical Clinics & Pharmaceuticals", short: "Healthcare & Pharma", complianceChallenge: "Medical supply procurement VAT exemptions, clinical payroll compliance, and institutional auditing", solution: "Specialized medical practice accounting, statutory PAYE compliance, and supplier payment controls" },
  { slug: "agribusiness-farming-agroprocessing", name: "Agribusiness, Commercial Farming & Agro-Processing", short: "Agribusiness", complianceChallenge: "Biological asset valuation (IAS 41), seasonal working capital volatility, and export tax incentives", solution: "Agricultural ledger accounting, seasonal bridge loan facilities, and export incentive documentation" },
  { slug: "logistics-freight-warehousing", name: "Logistics, Freight Forwarding & Warehousing", short: "Logistics & Freight", complianceChallenge: "Fleet maintenance capitalization, cross-border transit customs, and fuel tax credit reconciliations", solution: "Fleet operating financial modeling, customs transit bond accounting, and asset-backed credit" },
  { slug: "hospitality-tourism-hotels", name: "Hospitality, Tourism, Hotels & Travel", short: "Hospitality & Tourism", complianceChallenge: "Local hotel tax levies, service charge payroll distribution, and seasonal foreign guest revenue", solution: "Hospitality management accounts, statutory hotel levy filings, and multi-currency guest billing" },
  { slug: "renewable-energy-solar-cleantech", name: "Renewable Energy, Solar & Clean Technology", short: "Renewable Energy", complianceChallenge: "Clean energy tax exemptions, long-term capital equipment depreciation, and foreign grant reporting", solution: "Green energy tax incentive capture, capital expenditure accounting, and donor audit readiness" },
  { slug: "education-schools-vocational", name: "Education, Private Schools & Academic Institutions", short: "Education & Schools", complianceChallenge: "Tuition fee cash flow cycles, academic staff statutory payroll, and institutional property titles", solution: "Termly tuition cash flow planning, automated PAYE/NSSF filing, and institutional property auditing" },
  { slug: "manufacturing-industrial-plants", name: "Manufacturing & Industrial Processing", short: "Manufacturing", complianceChallenge: "Cost of Goods Sold (COGS) variance tracking, factory equipment leasing, and industrial tax credits", solution: "Precise manufacturing cost accounting, industrial depreciation schedules, and tax incentive filing" },
  { slug: "ngos-foundations-nonprofits", name: "NGOs, Foundations & Non-Profit Organizations", short: "NGOs & Non-Profits", complianceChallenge: "Donor grant fund segregation, statutory NGO bureau licensing, and non-profit tax exemption certificates", solution: "Restricted grant accounting, donor financial reporting, and URA tax-exempt status renewal" },
  { slug: "fintech-digital-payments-remittance", name: "Fintech, Payment Gateways & Digital Remittance", short: "Fintech & Payments", complianceChallenge: "National payment systems licensing, customer trust fund reconciliations, and AML/KYC audit trails", solution: "Regulatory capital compliance reporting, escrow ledger reconciliation, and statutory audit readiness" },
  { slug: "diaspora-investment-saccos", name: "Diaspora Saccos & Investment Syndicates", short: "Diaspora Saccos", complianceChallenge: "Cross-border member contribution pooling, fiduciary loan tracking, and commercial dividend distribution", solution: "Sacco core banking ledger management, member dividend calculations, and high-yield asset deployment" },
  { slug: "construction-civil-engineering", name: "Building Construction & Civil Engineering", short: "Construction & Engineering", complianceChallenge: "Percentage-of-completion revenue recognition (IFRS 15), subcontractor retention funds, and bid bonds", solution: "Milestone contract accounting, retention money tracking, and short-term performance bond lines" },
  { slug: "mining-extractives-minerals", name: "Mining, Mineral Trading & Extractives", short: "Mining & Extractives", complianceChallenge: "Mineral royalty statutory payments, environmental restoration reserves, and export permit clearance", solution: "Extractives cost accounting, statutory royalty reconciliation, and cross-border mineral export filing" },
  { slug: "oil-gas-energy-services", name: "Oil, Gas & Energy Service Providers", short: "Oil & Gas Services", complianceChallenge: "National supplier database (NSD) compliance, joint venture withholding, and strict HSE financial audits", solution: "Petroleum authority compliance filing, joint venture accounting, and pre-qualification financial models" },
  { slug: "legal-professional-consulting-firms", name: "Professional Practices & Legal Consultancies", short: "Professional Practices", complianceChallenge: "Client trust account management, partnership profit allocation, and professional indemnity accounting", solution: "Client trust account separation, partner draw management, and statutory tax compliance" },
  { slug: "e-commerce-digital-retailers", name: "E-Commerce & Digital Marketplace Operators", short: "E-Commerce", complianceChallenge: "Automated digital tax filing, merchant payout reconciliations, and payment gateway transaction fees", solution: "Automated EFRIS integration for online checkouts, merchant ledger clearing, and profit analysis" },
  { slug: "cross-border-multinational-subsidiaries", name: "Multinational Corporations & Regional Subsidiaries", short: "Multinational Subsidiaries", complianceChallenge: "Parent-subsidiary consolidated reporting, transfer pricing documentation, and expatriate executive payroll", solution: "Group consolidated accounts, transfer pricing compliance dossiers, and expatriate tax planning" },
];

// ----------------------------------------------------------------------
// 4. MARKETS TAXONOMY (15 Strategic Regional Markets)
// ----------------------------------------------------------------------
export const pseoMarkets: PseoMarket[] = [
  { slug: "usa", name: "United States", region: "North America", economicContext: "Major source of international diaspora capital, venture syndicates, and US-African trade agreements" },
  { slug: "canada", name: "Canada", region: "North America", economicContext: "Expanding bilateral commercial trade, prominent Ugandan-Canadian community, and institutional mining investments" },
  { slug: "uk", name: "United Kingdom", region: "Europe", economicContext: "Historic bilateral trade, City of London financial markets, and active UK-African commercial chambers" },
  { slug: "germany", name: "Germany", region: "Europe", economicContext: "Europe's leading industrial exporter, renewable energy financing, and bilateral investment treaties" },
  { slug: "netherlands", name: "Netherlands", region: "Europe", economicContext: "Primary European logistics trade gateway, flower-horticultural trade corridors, and tax treaties" },
  { slug: "france", name: "France", region: "Europe", economicContext: "Leading foreign direct investor in East African infrastructure, energy, and Pan-African banking" },
  { slug: "switzerland", name: "Switzerland", region: "Europe", economicContext: "Global commodity trading headquarters, private banking fiduciary governance, and international trusts" },
  { slug: "philippines", name: "Philippines", region: "Asia-Pacific", economicContext: "Growing expatriate contractor workforce in engineering, healthcare, and bilateral trade initiatives" },
  { slug: "uae", name: "United Arab Emirates", region: "Middle East", economicContext: "Premier trading corridor for gold, agricultural exports, re-exports, and international remittances" },
  { slug: "kenya", name: "Kenya", region: "East Africa", economicContext: "East African economic anchor, major transit port at Mombasa, and high cross-border corporate integration" },
  { slug: "rwanda", name: "Rwanda", region: "East Africa", economicContext: "Rapidly growing regional tech and financial hub, seamless EAC common market border trade" },
  { slug: "south-sudan", name: "South Sudan", region: "East Africa", economicContext: "Vital cross-border commercial trading corridor heavily reliant on Ugandan banking and consumer supply" },
  { slug: "south-africa", name: "South Africa", region: "Southern Africa", economicContext: "Continental financial powerhouse with substantial telecommunications, banking, and retail subsidiaries" },
  { slug: "nigeria", name: "Nigeria", region: "West Africa", economicContext: "Africa's largest economy, expanding banking multinationals, and commercial fintech trade links" },
  { slug: "uganda", name: "Uganda Nationwide", region: "Domestic", economicContext: "Strategic gateway to the Great Lakes region with fertile investment potential and favorable tax treaties" },
];

// ----------------------------------------------------------------------
// 5. STATUTORY & FINANCIAL GUIDES TAXONOMY (12 Core Guide Topics)
// ----------------------------------------------------------------------
export const pseoGuideTopics: PseoGuideTopic[] = [
  {
    slug: "ursb-company-registration-process-guide",
    titlePattern: "URSB Company Registration & Business Formalisation Guide for {MARKET}",
    shortTopic: "URSB Company Registration",
    authorityBody: "Uganda Registration Services Bureau (URSB)",
    overviewSummary: "A definitive statutory roadmap detailing step-by-step company incorporation, name reservation, memorandum documentation, and director compliance for investors and businesses engaging from {MARKET}.",
  },
  {
    slug: "ura-efris-electronic-tax-invoicing-manual",
    titlePattern: "URA EFRIS Electronic Tax Invoicing & VAT Compliance Guide for {MARKET}",
    shortTopic: "URA EFRIS & VAT Compliance",
    authorityBody: "Uganda Revenue Authority (URA)",
    overviewSummary: "Practical operational guidance on Electronic Fiscal Receipting and Invoicing Solution (EFRIS) compliance, monthly VAT filing, system-to-system integration, and penalty mitigation for commercial operators in {MARKET}.",
  },
  {
    slug: "free-agent-high-yield-investment-contract-guide",
    titlePattern: "Free-Agent High-Yield Investment Agreement Guide (20%–30% Returns) for {MARKET}",
    shortTopic: "Free-Agent High-Yield Investments",
    authorityBody: "Titanium Institutional Fiduciary Division",
    overviewSummary: "Comprehensive terms, return tiers, security protocols, and contract legal frameworks for private and institutional investors from {MARKET} allocating capital into verified 12-month commercial credit funds.",
  },
  {
    slug: "land-title-search-zonal-office-due-diligence",
    titlePattern: "Land Title Search & Zonal Registry Due Diligence Guide for {MARKET} Investors",
    shortTopic: "Land Title Due Diligence",
    authorityBody: "Ministry of Lands, Housing and Urban Development (MLHUD)",
    overviewSummary: "Official procedure for conducting authentic land registry searches, verifying Mailo/Freehold/Leasehold titles, identifying encumbrances, and avoiding property fraud from {MARKET}.",
  },
  {
    slug: "short-term-commercial-loans-collateral-appraisal",
    titlePattern: "1-Month Short-Term Working Capital Loans & Collateral Guide for {MARKET}",
    shortTopic: "Short-Term Collateral Loans",
    authorityBody: "Commercial Lending & Collateral Review Board",
    overviewSummary: "Fast-track financing guidelines for securing 1-month commercial bridge capital against verified land titles, vehicles, or business assets, designed for borrowers operating in {MARKET}.",
  },
  {
    slug: "cross-border-withholding-tax-double-taxation-relief",
    titlePattern: "Cross-Border Tax Treaties & Double Taxation Relief Guide for {MARKET}",
    shortTopic: "Double Taxation Relief",
    authorityBody: "International Tax & Transfer Pricing Directorate",
    overviewSummary: "Technical advisory on bilateral Double Taxation Agreements (DTAs), foreign tax credits, and withholding tax exemptions on dividends, management fees, and royalties between Uganda and {MARKET}.",
  },
  {
    slug: "expatriate-work-permit-tax-clearance-filing",
    titlePattern: "Expatriate Tax Filing, PAYE & Tax Clearance Certificate Guide for {MARKET}",
    shortTopic: "Expatriate Tax & Work Permits",
    authorityBody: "URA Non-Resident Taxation & Directorate of Citizenship",
    overviewSummary: "Statutory roadmap for non-resident executives, contractors, and foreign professionals from {MARKET} seeking Tax Clearance Certificates (TCC), TIN registration, and work permit renewals.",
  },
  {
    slug: "diaspora-property-tenancy-remote-governance",
    titlePattern: "Remote Property Management & Rent Remittance Governance for {MARKET}",
    shortTopic: "Remote Property Governance",
    authorityBody: "Estate Administration & Fiduciary Property Desk",
    overviewSummary: "A secure, transparent protocol for overseas diaspora property owners residing in {MARKET} to oversee rental buildings, tenant vetting, maintenance audits, and international banking remittances.",
  },
  {
    slug: "foreign-subsidiary-incorporation-banking-setup",
    titlePattern: "Foreign Subsidiary Incorporation & Commercial Banking Setup Guide for {MARKET}",
    shortTopic: "Foreign Subsidiary & Banking",
    authorityBody: "URSB Foreign Companies Registry & Commercial Banks",
    overviewSummary: "End-to-end procedural guide for corporations in {MARKET} establishing registered branch offices, subsidiary companies, and multi-currency commercial bank accounts in East Africa.",
  },
  {
    slug: "corporate-debt-renegotiation-insolvency-avoidance",
    titlePattern: "Commercial Debt Restructuring & Bank Loan Renegotiation Guide for {MARKET}",
    shortTopic: "Corporate Debt Restructuring",
    authorityBody: "Commercial Court Insolvency & Banking Oversight",
    overviewSummary: "Strategic legal and financial steps for businesses facing severe loan pressure in {MARKET} to restructure debt facilities, extend tenures, stop auction threats, and rebalance balance sheets.",
  },
  {
    slug: "internal-control-statutory-audit-readiness-checklist",
    titlePattern: "Statutory Audit Readiness & Internal Control Checklist for {MARKET} Enterprises",
    shortTopic: "Audit Readiness & Controls",
    authorityBody: "Institute of Certified Public Accountants & Regulators",
    overviewSummary: "Exhaustive pre-audit checklist designed for CFOs and managing directors in {MARKET} to eliminate accounting variances, prevent fraud, and secure unqualified independent audit opinions.",
  },
  {
    slug: "multi-currency-treasury-management-remittance-protocol",
    titlePattern: "Multi-Currency Treasury Management & Forex Remittance Guide for {MARKET}",
    shortTopic: "Treasury & Forex Remittance",
    authorityBody: "Central Bank Exchange Control & Treasury Markets",
    overviewSummary: "Institutional guide on managing foreign exchange risk, executing cross-border wire transfers, and maintaining multi-currency treasury accounts between {MARKET} and East Africa.",
  },
];

// ----------------------------------------------------------------------
// 6. TOTAL PROGRAMMATIC URL GENERATOR & REGISTRY
// ----------------------------------------------------------------------

/**
 * Returns all 2,156 programmatic and core slugs with full sitemap metadata.
 */
export function getAllPseoSlugs(): PseoSlugEntry[] {
  const entries: PseoSlugEntry[] = [];
  const today = "2026-10-23";

  // 1. Curated Flagship Items (15)
  curatedItems.forEach((item) => {
    const categoryPath =
      item.category === "guide" ? "/guides" : item.category === "sector" ? "/sectors" : "/locations";
    entries.push({
      slug: item.slug,
      path: `${categoryPath}/${item.slug}`,
      category: item.category,
      categoryLabel: item.categoryLabel,
      priority: item.slug === "global-financial-consultancy-firm" ? 0.95 : 0.88,
      changefreq: "weekly",
      lastmod: today,
    });
  });

  const curatedSlugSet = new Set(curatedItems.map((c) => c.slug));

  // 2. Programmatic Location Hubs: 165 locations x 10 services = 1,650 combinations
  pseoServices.forEach((service) => {
    pseoLocations.forEach((loc) => {
      const slug = `${service.slug}-${loc.slug}`;
      if (!curatedSlugSet.has(slug)) {
        entries.push({
          slug,
          path: `/locations/${slug}`,
          category: "location",
          categoryLabel: "Regional Hub",
          priority: loc.region === "uganda" || loc.region === "usa" ? 0.82 : 0.78,
          changefreq: "weekly",
          lastmod: today,
        });
      }
    });
  });

  // 3. Programmatic Industry Sectors: 20 sectors x 15 markets = 300 combinations
  pseoSectors.forEach((sec) => {
    pseoMarkets.forEach((mkt) => {
      const slug = `${sec.slug}-${mkt.slug}`;
      if (!curatedSlugSet.has(slug)) {
        entries.push({
          slug,
          path: `/sectors/${slug}`,
          category: "sector",
          categoryLabel: "Sector Solution",
          priority: 0.8,
          changefreq: "weekly",
          lastmod: today,
        });
      }
    });
  });

  // 4. Programmatic Statutory & Financial Guides: 12 topics x 15 markets = 180 combinations
  pseoGuideTopics.forEach((topic) => {
    pseoMarkets.forEach((mkt) => {
      const slug = `${topic.slug}-${mkt.slug}`;
      if (!curatedSlugSet.has(slug)) {
        entries.push({
          slug,
          path: `/guides/${slug}`,
          category: "guide",
          categoryLabel: "Statutory Guide",
          priority: 0.82,
          changefreq: "weekly",
          lastmod: today,
        });
      }
    });
  });

  return entries;
}

/**
 * Returns lightweight summary records for all programmatic items for directory browsing & search.
 */
export function getAllPseoDirectorySummaries(): PseoDirectorySummary[] {
  const summaries: PseoDirectorySummary[] = [];

  // Curated items first
  curatedItems.forEach((item) => {
    const categoryPath =
      item.category === "guide" ? "/guides" : item.category === "sector" ? "/sectors" : "/locations";
    summaries.push({
      slug: item.slug,
      category: item.category,
      categoryLabel: item.categoryLabel,
      title: item.title,
      subtitle: item.subtitle,
      targetEntityOrArea: item.targetEntityOrArea,
      region: "Global & Regional",
      path: `${categoryPath}/${item.slug}`,
    });
  });

  const curatedSlugSet = new Set(curatedItems.map((c) => c.slug));

  // Location Hubs
  pseoServices.forEach((service) => {
    pseoLocations.forEach((loc) => {
      const slug = `${service.slug}-${loc.slug}`;
      if (!curatedSlugSet.has(slug)) {
        summaries.push({
          slug,
          category: "location",
          categoryLabel: "Regional Hub",
          title: `${service.name} in ${loc.name}, ${loc.country}`,
          subtitle: `Specialized ${service.short} tailored for corporations, private investors, and diaspora clients across ${loc.name}, ${loc.country}.`,
          targetEntityOrArea: `${loc.name}, ${loc.country}`,
          region: loc.region,
          path: `/locations/${slug}`,
        });
      }
    });
  });

  // Industry Sectors
  pseoSectors.forEach((sec) => {
    pseoMarkets.forEach((mkt) => {
      const slug = `${sec.slug}-${mkt.slug}`;
      if (!curatedSlugSet.has(slug)) {
        summaries.push({
          slug,
          category: "sector",
          categoryLabel: "Sector Solution",
          title: `${sec.name} Financial Advisory & Tax Compliance in ${mkt.name}`,
          subtitle: `Specialized financial solutions addressing ${sec.complianceChallenge} for businesses operating in ${mkt.name}.`,
          targetEntityOrArea: `${sec.short} · ${mkt.name}`,
          region: mkt.region,
          path: `/sectors/${slug}`,
        });
      }
    });
  });

  // Statutory Guides
  pseoGuideTopics.forEach((topic) => {
    pseoMarkets.forEach((mkt) => {
      const slug = `${topic.slug}-${mkt.slug}`;
      if (!curatedSlugSet.has(slug)) {
        const title = topic.titlePattern.replace("{MARKET}", mkt.name);
        summaries.push({
          slug,
          category: "guide",
          categoryLabel: "Statutory Guide",
          title,
          subtitle: topic.overviewSummary.replace("{MARKET}", mkt.name),
          targetEntityOrArea: `${topic.shortTopic} · ${mkt.name}`,
          region: mkt.region,
          path: `/guides/${slug}`,
        });
      }
    });
  });

  return summaries;
}

// ----------------------------------------------------------------------
// 7. HIGH-PERFORMANCE DYNAMIC SYNTHESIS ENGINE
// Resolves ANY of the 2,156 slugs into a complete PseoItem in < 1 millisecond!
// ----------------------------------------------------------------------
export function getPseoItem(slug: string | undefined): PseoItem | undefined {
  if (!slug) return undefined;

  // 1. Return manual curated flagship override if present
  const manual = curatedItems.find((p) => p.slug === slug);
  if (manual) return manual;

  // 2. Resolve Location Hub: ${serviceSlug}-${locationSlug}
  for (const s of pseoServices) {
    if (slug.startsWith(`${s.slug}-`)) {
      const locSlug = slug.slice(s.slug.length + 1);
      const loc = pseoLocations.find((l) => l.slug === locSlug);
      if (loc) {
        return synthesizeLocationItem(slug, s, loc);
      }
    }
  }

  // 3. Resolve Sector Hub: ${sectorSlug}-${marketSlug}
  for (const sec of pseoSectors) {
    if (slug.startsWith(`${sec.slug}-`)) {
      const mktSlug = slug.slice(sec.slug.length + 1);
      const mkt = pseoMarkets.find((m) => m.slug === mktSlug);
      if (mkt) {
        return synthesizeSectorItem(slug, sec, mkt);
      }
    }
  }

  // 4. Resolve Statutory Guide: ${guideTopicSlug}-${marketSlug}
  for (const topic of pseoGuideTopics) {
    if (slug.startsWith(`${topic.slug}-`)) {
      const mktSlug = slug.slice(topic.slug.length + 1);
      const mkt = pseoMarkets.find((m) => m.slug === mktSlug);
      if (mkt) {
        return synthesizeGuideItem(slug, topic, mkt);
      }
    }
  }

  return undefined;
}

// Helper: Synthesize Location Item
function synthesizeLocationItem(slug: string, service: PseoService, loc: PseoLocation): PseoItem {
  const isUganda = loc.region === "uganda";
  const currencyNotice = `Advisory fees and transactional settlements supported in ${loc.currency} and USD.`;

  return {
    slug,
    category: "location",
    categoryLabel: "Regional Hub",
    title: `${service.name} in ${loc.name}, ${loc.country} | Titanium Financial`,
    metaDescription: `Looking for premier ${service.short} in ${loc.name}, ${loc.country}? Titanium Financial Consultancy delivers certified advisory, compliance, and wealth solutions.`,
    eyebrow: `${loc.name} · ${loc.country} Practice`,
    h1: `${service.name} in ${loc.name}`,
    subtitle: `Specialized ${service.focus} tailored for corporations, private investors, and diaspora clients across ${loc.name}, ${loc.country}.`,
    badge: `${loc.name} · ${loc.country} (${loc.region.toUpperCase()})`,
    targetEntityOrArea: `${loc.name}, ${loc.country}`,
    overview: `Titanium Financial Consultancy provides premier institutional-grade ${service.short.toLowerCase()} for commercial enterprises, institutional lenders, and international investors operating in or partnering with ${loc.name}, ${loc.country}. In today's complex regulatory environment, managing statutory accounting, tax governance, and cross-border capital requires seasoned fiduciary leadership. Our senior partners ensure your corporate affairs in ${loc.name} are fully safeguarded, fully compliant, and structured for maximum financial efficiency. ${loc.marketNote}.`,
    keyPoints: [
      {
        title: `Localized Regulatory Execution in ${loc.name}`,
        description: `Advisory aligned specifically with the statutory codes, corporate filing timelines, and commercial realities of ${loc.name}, ${loc.country}.`,
      },
      {
        title: "Bilateral Cross-Border Integration",
        description: `Ensuring frictionless financial connectivity between ${loc.country} operations, regional trade bodies, and international financial standards.`,
      },
      {
        title: "Rigorous Fiduciary Governance",
        description: `Complete transparency, verified audit trails, and dedicated senior accountant oversight across all ledgers and financial disclosures.`,
      },
      {
        title: "Direct Access to Senior Partners",
        description: `Immediate executive counsel from certified chartered accountants and international tax specialists without bureaucratic friction.`,
      },
    ],
    deliverables: [
      `Tailored ${service.short} strategic execution plan for ${loc.name} operations`,
      "Statutory documentation, compliance filing dossiers, and regulatory approvals",
      "Multi-currency financial statements and management accounts",
      "Comprehensive risk assessment reports and internal control evaluations",
      "Direct senior partner consultation via video conference or at our executive offices",
    ],
    regulatoryNotes: `${service.regulatoryAnchor}. All cross-border transactions and corporate filings for ${loc.name} strictly adhere to anti-money laundering (AML/CFT) laws, international accounting standards (IFRS / GAAP), and relevant bilateral treaties. ${currencyNotice}`,
    faqs: [
      {
        question: `How does Titanium Financial deliver ${service.short} in ${loc.name}?`,
        answer: `We provide both remote digital consultation and localized operational representation for clients in ${loc.name}, managing full-cycle documentation, statutory filings, and regulatory representation.`,
      },
      {
        question: `Can corporate clients or diaspora investors in ${loc.name} open accounts with Titanium?`,
        answer: `Yes. Titanium operates on an international scale, onboarding clients from North America, Europe, Asia-Pacific, and Continental Africa with full KYC verification.`,
      },
      {
        question: `What are the turnaround times for ${service.short} engagements in ${loc.name}?`,
        answer: `Initial advisory blueprints and document audits are delivered within 48 to 72 hours of receiving your initial corporate documentation.`,
      },
    ],
    relatedSlugs: [
      "global-financial-consultancy-firm",
      isUganda ? "kampala-financial-consultancy" : `${service.slug}-kampala`,
      isUganda ? "najjera-buwate-accounting-tax" : `${service.slug}-london`,
    ],
  };
}

// Helper: Synthesize Sector Item
function synthesizeSectorItem(slug: string, sec: PseoSector, mkt: PseoMarket): PseoItem {
  return {
    slug,
    category: "sector",
    categoryLabel: "Sector Solution",
    title: `${sec.name} Financial Advisory in ${mkt.name} | Titanium Financial`,
    metaDescription: `Industry-specific financial advisory, accounting, and tax compliance for ${sec.short} in ${mkt.name}. Resolve ${sec.complianceChallenge}.`,
    eyebrow: `${sec.short} · ${mkt.name}`,
    h1: `${sec.name} Financial & Tax Advisory in ${mkt.name}`,
    subtitle: `Customized financial engineering, statutory compliance, and growth advisory engineered specifically for the ${sec.short} sector in ${mkt.name}.`,
    badge: `${sec.short} · ${mkt.name}`,
    targetEntityOrArea: `${sec.short} Industry in ${mkt.name}`,
    overview: `Enterprises operating in the ${sec.name} industry in ${mkt.name} face demanding regulatory, operational, and financial pressures. Addressing ${sec.complianceChallenge} requires specialized sector-aware accounting and fiduciary governance. Titanium Financial Consultancy delivers bespoke financial modeling, statutory filing, and cash flow structuring designed specifically for ${sec.short} operators in ${mkt.name}. ${mkt.economicContext}.`,
    keyPoints: [
      {
        title: "Sector-Specific Ledger Architecture",
        description: `Chart of accounts and financial reporting frameworks mapped precisely to the operating economics of ${sec.short}.`,
      },
      {
        title: "Targeted Regulatory Problem Solving",
        description: sec.solution,
      },
      {
        title: "Cash Flow & Margin Protection",
        description: `Proactive working capital management, revenue leakage elimination, and structured supplier credit alignment.`,
      },
      {
        title: "Institutional Audit Readiness",
        description: `Comprehensive pre-audit examinations ensuring your books pass scrutiny by statutory authorities, investors, and lenders.`,
      },
    ],
    deliverables: [
      `Customized financial management reporting dashboard for ${sec.short} operators`,
      "Statutory tax computation, return filing, and electronic invoicing reconciliation",
      "Sector-specific cost of goods / service delivery margin analysis",
      "Internal control policy manual and risk remediation plan",
      "Quarterly senior executive financial review and growth advisory",
    ],
    regulatoryNotes: `All advisory engagements for ${sec.name} in ${mkt.name} are structured in accordance with relevant sectoral regulatory authorities, national tax legislation, and international financial reporting benchmarks.`,
    faqs: [
      {
        question: `Why do ${sec.short} companies in ${mkt.name} require specialized accounting?`,
        answer: `Generic bookkeeping often overlooks sector-specific compliance nuances such as ${sec.complianceChallenge}, creating severe tax exposure and misstated margins.`,
      },
      {
        question: `Can Titanium assist ${sec.short} businesses with capital raising and loans?`,
        answer: `Yes. We prepare bank-ready financial projections, audited financial statements, and structured loan documentation for commercial lenders and private equity syndicates.`,
      },
      {
        question: `How quickly can we transition our accounts to Titanium?`,
        answer: `Our onboarding process takes 3 to 5 business days, including historical ledger migration, opening balance reconciliations, and tax portal access.`,
      },
    ],
    relatedSlugs: [
      "global-financial-consultancy-firm",
      "sme-retail-wholesale-uganda",
      "startups-tech-enterprises-uganda",
    ],
  };
}

// Helper: Synthesize Guide Item
function synthesizeGuideItem(slug: string, topic: PseoGuideTopic, mkt: PseoMarket): PseoItem {
  const title = topic.titlePattern.replace("{MARKET}", mkt.name);
  const overview = topic.overviewSummary.replace("{MARKET}", mkt.name);

  return {
    slug,
    category: "guide",
    categoryLabel: "Statutory Guide",
    title: `${title} | Titanium Financial`,
    metaDescription: `Authoritative statutory guide on ${topic.shortTopic} for businesses and investors in ${mkt.name}. Official requirements, procedures, and timelines.`,
    eyebrow: `Statutory & Commercial Guide · ${mkt.name}`,
    h1: title,
    subtitle: `An authoritative, step-by-step practical manual for corporate executives, investors, and diaspora clients engaging from ${mkt.name}.`,
    badge: `${topic.shortTopic} · ${mkt.name}`,
    targetEntityOrArea: `${topic.shortTopic} (${mkt.name})`,
    overview: `${overview} As cross-border commercial transactions and regulatory scrutiny intensify between ${mkt.name} and international jurisdictions, having verified statutory guidance is essential to avoid costly errors, statutory penalties, and procedural delays. Titanium Financial Consultancy provides direct execution and advisory to ensure your entity meets all legal criteria established by the ${topic.authorityBody}.`,
    keyPoints: [
      {
        title: "Official Authority Procedures",
        description: `Direct adherence to the statutory guidelines and submission workflows established by the ${topic.authorityBody}.`,
      },
      {
        title: "Document Preparation Checklist",
        description: `Exhaustive verification of statutory resolutions, identification records, tax identifiers, and legal declarations.`,
      },
      {
        title: "Penalty Avoidance & Due Diligence",
        description: `Eliminating risks associated with non-compliance, incomplete submissions, or miscalculated tax declarations.`,
      },
      {
        title: "Fast-Track Professional Representation",
        description: `Designated senior consultants handling filing, follow-ups, and official correspondence with statutory bodies on your behalf.`,
      },
    ],
    deliverables: [
      `Complete documentation checklist and dossier preparation for ${topic.shortTopic}`,
      "Direct filing with statutory authorities and receipt of official acknowledgments",
      "Verification of registration certificates, tax clearances, or contract instruments",
      "Dedicated advisory consultation to address complex cross-border scenarios",
    ],
    regulatoryNotes: `This guide is aligned with current legislation and statutory guidelines issued by the ${topic.authorityBody}. Readers from ${mkt.name} should verify documentation validity prior to commercial transactions.`,
    faqs: [
      {
        question: `How long does the ${topic.shortTopic} process take for entities in ${mkt.name}?`,
        answer: `Standard processing times typically range from 2 to 5 business days once all certified documentation is properly prepared and submitted.`,
      },
      {
        question: `Can individuals or companies in ${mkt.name} complete this process remotely?`,
        answer: `Yes. Titanium Financial Consultancy acts as your official local representative, managing all in-person submissions, registry searches, and authority liaisons.`,
      },
      {
        question: `What fees and statutory duties apply to this procedure?`,
        answer: `Statutory fees vary based on transaction size, share capital, or asset valuation. Contact our advisory team for a detailed, transparent fee schedule.`,
      },
    ],
    relatedSlugs: [
      "global-financial-consultancy-firm",
      "ursb-company-registration-uganda-guide",
      "ura-efris-tax-compliance-guide",
    ],
  };
}

export default {
  pseoLocations,
  pseoServices,
  pseoSectors,
  pseoMarkets,
  pseoGuideTopics,
  getAllPseoSlugs,
  getAllPseoDirectorySummaries,
  getPseoItem,
};
