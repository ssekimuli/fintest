import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target file
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

// Core routes
const coreRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/documents', priority: '0.8', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/team', priority: '0.7', changefreq: 'monthly' },
  { path: '/faq', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources', priority: '0.85', changefreq: 'weekly' },
  { path: '/locations', priority: '0.85', changefreq: 'weekly' },
  { path: '/guides', priority: '0.85', changefreq: 'weekly' },
  { path: '/sectors', priority: '0.85', changefreq: 'weekly' },
];

// Curated flagship hubs (15)
const curatedSlugs = [
  { slug: 'kampala-financial-consultancy', category: 'locations', priority: '0.88' },
  { slug: 'najjera-buwate-accounting-tax', category: 'locations', priority: '0.88' },
  { slug: 'kira-municipality-business-registration', category: 'locations', priority: '0.85' },
  { slug: 'wakiso-land-property-management', category: 'locations', priority: '0.85' },
  { slug: 'diaspora-investment-property-management-usa-uk-canada', category: 'locations', priority: '0.88' },
  { slug: 'cross-border-financial-advisory-east-africa', category: 'locations', priority: '0.88' },
  { slug: 'ursb-company-registration-uganda-guide', category: 'guides', priority: '0.88' },
  { slug: 'ura-efris-tax-compliance-guide', category: 'guides', priority: '0.88' },
  { slug: 'short-term-loans-collateral-guide', category: 'guides', priority: '0.85' },
  { slug: 'free-agent-investment-yield-guide', category: 'guides', priority: '0.90' },
  { slug: 'sme-retail-wholesale-uganda', category: 'sectors', priority: '0.85' },
  { slug: 'startups-tech-enterprises-uganda', category: 'sectors', priority: '0.85' },
  { slug: 'foreign-company-incorporation-tax-uganda', category: 'sectors', priority: '0.88' },
  { slug: 'expatriate-tax-advisory-philippines-global', category: 'sectors', priority: '0.85' },
  { slug: 'global-financial-consultancy-firm', category: 'sectors', priority: '0.95' },
];

// 165 Locations
const locationSlugs = [
  // USA (50)
  'usa', 'texas', 'california', 'minnesota', 'georgia', 'new-york-state', 'massachusetts',
  'washington-state', 'illinois', 'florida', 'maryland', 'virginia', 'pennsylvania', 'ohio',
  'michigan', 'north-carolina', 'colorado', 'arizona', 'new-jersey', 'washington-dc',
  'dallas', 'houston', 'austin', 'san-antonio', 'los-angeles', 'san-francisco', 'san-jose',
  'san-diego', 'minneapolis', 'st-paul', 'atlanta', 'new-york-city', 'brooklyn', 'boston',
  'seattle', 'chicago', 'miami', 'orlando', 'tampa', 'baltimore', 'philadelphia', 'pittsburgh',
  'detroit', 'charlotte', 'raleigh', 'denver', 'phoenix', 'columbus', 'cleveland', 'indianapolis',
  // Canada (20)
  'canada', 'ontario', 'british-columbia', 'alberta', 'quebec', 'manitoba', 'saskatchewan',
  'nova-scotia', 'toronto', 'vancouver', 'montreal', 'calgary', 'edmonton', 'ottawa',
  'mississauga', 'brampton', 'winnipeg', 'hamilton', 'quebec-city', 'surrey',
  // Europe (35)
  'europe', 'united-kingdom', 'germany', 'netherlands', 'france', 'switzerland', 'sweden',
  'ireland', 'belgium', 'norway', 'denmark', 'austria', 'italy', 'spain', 'finland',
  'london', 'birmingham', 'manchester', 'leeds', 'glasgow', 'edinburgh', 'bristol',
  'berlin', 'frankfurt', 'munich', 'hamburg', 'amsterdam', 'rotterdam', 'the-hague',
  'paris', 'lyon', 'zurich', 'geneva', 'stockholm', 'dublin',
  // Philippines & Asia-Pacific (20)
  'philippines', 'asia-pacific', 'manila', 'quezon-city', 'makati', 'taguig-bgc', 'pasig',
  'cebu-city', 'davao-city', 'angeles-city', 'iloilo-city', 'uae', 'dubai', 'abu-dhabi',
  'qatar', 'doha', 'saudi-arabia', 'riyadh', 'singapore', 'hong-kong',
  // Africa & Uganda (40)
  'africa', 'east-africa', 'kenya', 'rwanda', 'south-sudan', 'tanzania', 'drc', 'south-africa',
  'nigeria', 'ghana', 'ethiopia', 'zambia', 'nairobi', 'mombasa', 'kigali', 'juba',
  'dar-es-salaam', 'kinshasa', 'goma', 'johannesburg', 'cape-town', 'lagos', 'abuja', 'accra',
  'uganda', 'kampala', 'najjera', 'buwate', 'kira', 'ntinda', 'nakawa', 'kyanja', 'kololo',
  'nakasero', 'entebbe', 'wakiso', 'mukono', 'jinja', 'mbarara', 'gulu'
];

// 10 Services
const serviceSlugs = [
  'accounting-bookkeeping',
  'tax-compliance-efris',
  'company-registration-ursb',
  'cross-border-tax-advisory',
  'high-yield-investment-wealth',
  'land-title-property-management',
  'short-term-loans-collateral',
  'debt-restructuring-advisory',
  'foreign-direct-investment-fdi',
  'statutory-audit-compliance'
];

// 20 Sectors
const sectorSlugs = [
  'tech-startups-software',
  'retail-wholesale-commerce',
  'import-export-trading',
  'real-estate-property-development',
  'healthcare-pharmaceuticals-clinics',
  'agribusiness-farming-agroprocessing',
  'logistics-freight-warehousing',
  'hospitality-tourism-hotels',
  'renewable-energy-solar-cleantech',
  'education-schools-vocational',
  'manufacturing-industrial-plants',
  'ngos-foundations-nonprofits',
  'fintech-digital-payments-remittance',
  'diaspora-investment-saccos',
  'construction-civil-engineering',
  'mining-extractives-minerals',
  'oil-gas-energy-services',
  'legal-professional-consulting-firms',
  'e-commerce-digital-retailers',
  'cross-border-multinational-subsidiaries'
];

// 15 Markets
const marketSlugs = [
  'usa', 'canada', 'uk', 'germany', 'netherlands', 'france', 'switzerland',
  'philippines', 'uae', 'kenya', 'rwanda', 'south-sudan', 'south-africa', 'nigeria', 'uganda'
];

// 12 Guide Topics
const guideTopicSlugs = [
  'ursb-company-registration-process-guide',
  'ura-efris-electronic-tax-invoicing-manual',
  'free-agent-high-yield-investment-contract-guide',
  'land-title-search-zonal-office-due-diligence',
  'short-term-commercial-loans-collateral-appraisal',
  'cross-border-withholding-tax-double-taxation-relief',
  'expatriate-work-permit-tax-clearance-filing',
  'diaspora-property-tenancy-remote-governance',
  'foreign-subsidiary-incorporation-banking-setup',
  'corporate-debt-renegotiation-insolvency-avoidance',
  'internal-control-statutory-audit-readiness-checklist',
  'multi-currency-treasury-management-remittance-protocol'
];

const today = new Date().toISOString().split('T')[0];
const baseUrl = 'https://titaniumfinancialconsultancy.com';

const seenUrls = new Set();
const xmlEntries = [];

function addUrl(loc, priority = '0.8', changefreq = 'weekly') {
  if (seenUrls.has(loc)) return;
  seenUrls.add(loc);
  xmlEntries.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`);
}

// 1. Add Core Routes
coreRoutes.forEach(r => addUrl(`${baseUrl}${r.path}`, r.priority, r.changefreq));

// 2. Add Curated Flagship Pages
curatedSlugs.forEach(c => addUrl(`${baseUrl}/${c.category}/${c.slug}`, c.priority, 'weekly'));

// 3. Add Programmatic Location Hubs (1,650 combinations)
serviceSlugs.forEach(s => {
  locationSlugs.forEach(l => {
    addUrl(`${baseUrl}/locations/${s}-${l}`, '0.8', 'weekly');
  });
});

// 4. Add Programmatic Sector Solutions (300 combinations)
sectorSlugs.forEach(sec => {
  marketSlugs.forEach(m => {
    addUrl(`${baseUrl}/sectors/${sec}-${m}`, '0.8', 'weekly');
  });
});

// 5. Add Programmatic Guides (180 combinations)
guideTopicSlugs.forEach(g => {
  marketSlugs.forEach(m => {
    addUrl(`${baseUrl}/guides/${g}-${m}`, '0.8', 'weekly');
  });
});

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries.join('\n')}
</urlset>
`;

fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
console.log(`Successfully generated dynamic sitemap.xml with ${seenUrls.size} URLs at ${sitemapPath}`);
