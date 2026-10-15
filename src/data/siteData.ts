import { IconName } from "../components/Icon";
import managingDirectorImg from "../assets/managing-director.png";
import odongoStephenImg from "../assets/odongo-stephen.jpg";

export interface ServiceItem {
  icon: IconName;
  number: string;
  title: string;
  description: string;
  points: string[];
  about: string;
  deliverables: string[];
}

export const services: ServiceItem[] = [
  {
    icon: "calculator",
    number: "01",
    title: "Accounting & Financial Management",
    description: "Reliable records, reporting, and financial support for stronger day-to-day decisions.",
    points: ["Bookkeeping & reconciliations", "Financial reporting"],
    about:
      "We help businesses maintain accurate financial records and turn their financial activity into clear, decision-ready information that supports performance, planning, and sustainable growth.",
    deliverables: [
      "Accounting services and financial record preparation",
      "Bookkeeping and financial reconciliations",
      "Financial reporting and management support",
      "Business performance and decision support",
    ],
  },
  {
    icon: "shield",
    number: "02",
    title: "Audit Services",
    description: "Thorough financial reviews that improve record-keeping and strengthen internal controls.",
    points: ["Financial record reviews", "Internal control support"],
    about:
      "Our audit-related services examine financial information and supporting documentation to identify gaps, improve record-keeping practices, and strengthen internal financial controls.",
    deliverables: [
      "Financial information and document examination",
      "Financial record and process reviews",
      "Internal financial control assessment",
      "Practical record-keeping recommendations",
    ],
  },
  {
    icon: "document",
    number: "03",
    title: "Taxation & Statutory Compliance",
    description: "Practical tax guidance and filing support that keeps statutory obligations manageable.",
    points: ["Tax returns & EFRIS", "TIN & PRN support"],
    about:
      "We simplify tax and statutory compliance by preparing filings, supporting registrations, and guiding clients through electronic invoicing and payment processes.",
    deliverables: [
      "Tax consultancy and compliance support",
      "Preparation and filing of tax returns",
      "EFRIS e-invoicing and e-receipts assistance",
      "TIN applications, PRN generation, and payment guidance",
    ],
  },
  {
    icon: "building",
    number: "04",
    title: "Business & Company Registration",
    description: "End-to-end formalisation and documentation guidance for businesses and companies.",
    points: ["URSB requirements", "KCCA licensing"],
    about:
      "We support entrepreneurs and businesses through registration, formalisation, documentation, and relevant regulatory or licensing processes.",
    deliverables: [
      "Business and company registration support",
      "Formalisation and documentation assistance",
      "URSB registration process guidance",
      "KCCA and other licensing requirement support",
    ],
  },
  {
    icon: "ledger",
    number: "05",
    title: "Loan Application & Debt Restructuring",
    description: "Structured support for borrowers preparing applications or managing existing debt.",
    points: ["Loan documentation", "Repayment planning"],
    about:
      "We help prospective and existing borrowers prepare financial information, understand lending requirements, and create practical repayment or debt restructuring plans.",
    deliverables: [
      "Loan application and documentation assistance",
      "Financial guidance for prospective borrowers",
      "Debt restructuring and repayment planning",
      "Collateral documentation guidance",
    ],
  },
  {
    icon: "target",
    number: "06",
    title: "Financial & Investment Consultancy",
    description: "Objective guidance to align financial and investment decisions with your goals.",
    points: ["Financial planning", "Investment consultations"],
    about:
      "We provide practical financial planning and investment consultations to help clients evaluate options, make informed decisions, and align opportunities with their objectives.",
    deliverables: [
      "Personal and business financial planning",
      "Decision-support guidance",
      "Investment option consultations",
      "Goal and opportunity alignment",
    ],
  },
  {
    icon: "calculator",
    number: "07",
    title: "Money Lending",
    description: "Structured short-term lending with clear documentation and repayment arrangements.",
    points: ["One-month facilities", "Documented repayment terms"],
    about:
      "We provide money-lending services subject to applicable laws, licensing, assessment, and internal procedures, with clear loan documentation and repayment arrangements.",
    deliverables: [
      "Short-term loan assessment",
      "Loan documentation support",
      "Collateral and eligibility review",
      "Repayment arrangement guidance",
    ],
  },
  {
    icon: "building",
    number: "08",
    title: "Land & Property Management",
    description: "Practical support for property management, land valuation, and documentation processes.",
    points: ["Property management", "Land valuation"],
    about:
      "We support property owners with management needs, valuation services, and guidance through relevant land documentation and administrative processes.",
    deliverables: [
      "Property management support",
      "Land valuation services",
      "Land-related documentation guidance",
      "Process and administrative support",
    ],
  },
];

export interface TrustPoint {
  icon: IconName;
  title: string;
  description: string;
}

export const trustPoints: TrustPoint[] = [
  {
    icon: "shield",
    title: "Our Vision",
    description:
      "To become a trusted and leading provider of financial consultancy and integrated business solutions in Uganda and beyond.",
  },
  {
    icon: "target",
    title: "Our Mission",
    description:
      "To empower individuals and businesses through accessible, professional, and reliable financial consultancy and business support.",
  },
  {
    icon: "headset",
    title: "Our Core Values",
    description: "Professionalism, integrity, reliability, confidentiality, accountability, and client focus.",
  },
];

export interface TeamMember {
  id: string;
  icon: IconName;
  name: string;
  role: string;
  specialty: string;
  image?: string;
}

export const team: TeamMember[] = [
  {
    id: "managing-director",
    icon: "target",
    name: "Namakoola Vivian Ritah",
    role: "Managing Director",
    specialty: "Leadership · Strategic direction · Operations · Service delivery · Growth",
    image: managingDirectorImg,
  },
  {
    id: "director-accounting-finance-taxation",
    icon: "calculator",
    name: "Odongo Stephen",
    role: "Director Finance Accounting & Taxation",
    specialty: "Accounting · Financial management · Taxation services",
    image: odongoStephenImg,
  },
  {
    id: "director-lending-land-property",
    icon: "building",
    name: "Money Lending, Land & Property",
    role: "Director",
    specialty: "Money lending · Land services · Property management",
  },
];

export interface FaqItem {
  category: string;
  question: string;
  answer: string;
  points?: string[];
}

export const faqs: FaqItem[] = [
  {
    category: "Loans",
    question: "What are the loan interest rates and available amounts?",
    answer:
      "When you reach out with your requested amount, our lending team will guide you on current facility availability, applicable terms, and customized repayment schedules based on your specific requirements.",
  },
  {
    category: "Loans",
    question: "Which forms of identification are accepted?",
    answer:
      "We accept national IDs and passports. In some cases, an LC letter may also be accepted.",
  },
  {
    category: "Loans",
    question: "What collateral and supporting documents are accepted?",
    answer:
      "We accept land titles and other valuable items equal to the loan amount. Depending on the facility, an employment letter, certificate of incorporation, or trading license may also be required.",
  },
  {
    category: "Loans",
    question: "What is the loan duration?",
    answer:
      "Loans are issued strictly on a one-month basis, subject to assessment, documentation, and the agreed repayment arrangement.",
  },
  {
    category: "Loans",
    question: "How long does loan processing take?",
    answer:
      "Loan processing typically takes 3 to 7 working days after the required information and documents have been submitted.",
  },
  {
    category: "Free-Agent Investment",
    question: "What is the minimum investment and when is it due?",
    answer:
      "The minimum investment is UGX 200,000 per month. It may be paid as a lump sum or through payments completed within the first 5 days of the month.",
  },
  {
    category: "Free-Agent Investment",
    question: "What is the investment period and late-payment policy?",
    answer:
      "The minimum investment period to maturity is one year. A penalty is incurred when an investment is not made on time.",
  },
  {
    category: "Free-Agent Investment",
    question: "What are the annual investment return tiers?",
    answer: "Annual returns are determined by the total qualifying investment amount.",
    points: [
      "Tier 1 — UGX 4,800,000 and above: 30% returns per year",
      "Tier 2 — UGX 3,600,000 to 4,799,999: 25% returns per year",
      "Tier 3 — UGX 2,400,000 to 3,599,999: 20% returns per year",
    ],
  },
  {
    category: "Free-Agent Investment",
    question: "What is required to become an investor?",
    answer: "A valid form of identification is required to complete investor onboarding.",
  },
];

export interface ClientDocument {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  tierHighlight: string;
  pages: string;
  fileSize: string;
  filePath: string;
  downloadName: string;
  icon: IconName;
}

export const clientDocuments: ClientDocument[] = [
  {
    id: "free-agent-agreement",
    title: "Free-Agent Savings and Investment Agreement",
    subtitle: "Official 12-Month High-Yield Investor Contract",
    tag: "Savings & Investment",
    tierHighlight: "20% – 30% Annual Returns",
    pages: "7 Pages",
    fileSize: "133 KB",
    filePath: "/documents/revised-free-agent-agreement.pdf",
    downloadName: "Revised Free Agent Agreement.pdf",
    icon: "target",
  },
  {
    id: "short-loan-agreement",
    title: "Short Loan Agreement",
    subtitle: "Direct Credit Agreement for Continuing Clients",
    tag: "Loan Facility",
    tierHighlight: "Rapid Cash / Mobile Disbursement",
    pages: "1 Page",
    fileSize: "185 KB",
    filePath: "/documents/continuing-clients-loan-agreement.pdf",
    downloadName: "Continuing Clients Loan Document Free.pdf",
    icon: "calculator",
  },
  {
    id: "credit-application-and-guarantee",
    title: "Client Registration & Credit Application Form",
    subtitle: "Full Onboarding Dossier & Guarantee Agreement",
    tag: "Credit Application & Guarantee",
    tierHighlight: "Includes Guarantee & Indemnity Agreement",
    pages: "7 Pages",
    fileSize: "174 KB",
    filePath: "/documents/client-registration-credit-application-form.pdf",
    downloadName: "Loan Application Form Titanium.pdf",
    icon: "shield",
  },
];
