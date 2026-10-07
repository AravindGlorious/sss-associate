export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  icon: string;
  category: 'Legal' | 'Finance' | 'Banking' | 'Assets';
  detailedOverview: string;
  problemSolved: string;
  scopeOfWork: string[];
  keyBenefits: string[];
  documentsRequired: string[];
  processSteps: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'legal-advisory',
    title: 'Legal Advisory & Services',
    shortDesc: 'Expert legal counsel, documentation review, corporate compliance, and dispute resolution.',
    badge: 'Legal & Compliance',
    icon: '⚖️',
    category: 'Legal',
    detailedOverview:
      'SSS Associate provides comprehensive legal advisory services tailored for MSMEs, commercial enterprises, and private individuals. We guide you through complex regulatory landscapes, commercial contract drafting, title verifications, legal notices, and compliance checks under Indian civil and corporate laws.',
    problemSolved:
      'Prevents legal vulnerabilities in business contracts, protects commercial assets, ensures regulatory compliance, and provides strategic legal defense during contractual or financial disputes.',
    scopeOfWork: [
      'Comprehensive Commercial Contract & Agreement Drafting',
      'Property Title Scrutiny, Search Reports & Due Diligence',
      'Legal Notice Drafting, Rejoinders & Institutional Communication',
      'Corporate & MSME Statutory Regulatory Compliance Review',
      'Partnership Deeds, MOUs, and Non-Disclosure Agreements (NDAs)',
      'Pre-litigation Mediation, Dispute Settlement & Legal Representation Advisory'
    ],
    keyBenefits: [
      'Experienced legal counsels with deep MSME sector insight',
      '100% confidential and compliant with professional legal standards',
      'Proactive risk mitigation before signing binding agreements',
      'Fast turnaround for time-sensitive commercial deals'
    ],
    documentsRequired: [
      'Identity Proof (Aadhaar Card, PAN Card)',
      'Business Registration / MSME Udyam Certificate (if applicable)',
      'Relevant draft agreements, deeds, or prior contracts',
      'Notices, correspondence, or summon copies (for dispute reviews)'
    ],
    processSteps: [
      { step: '01', title: 'Initial Briefing', desc: 'Detailed discussion of your legal query and fact assessment.' },
      { step: '02', title: 'Document Audit', desc: 'Thorough scrutiny of papers, title deeds, and contractual clauses.' },
      { step: '03', title: 'Legal Strategy & Drafting', desc: 'Formulating legal opinion, drafting clean agreements or notice replies.' },
      { step: '04', title: 'Execution & Follow-up', desc: 'Assisting in signing, stamping, registration, and onward compliance.' }
    ],
    faqs: [
      {
        question: 'Does SSS Associate handle property title verification in Tamil Nadu?',
        answer: 'Yes, we conduct comprehensive 30+ year parent document title verification, encumbrance certificate (EC) scrutiny, patta/chitta check, and revenue record verification across Tamil Nadu.'
      },
      {
        question: 'Can you draft custom vendor and commercial contracts for MSMEs?',
        answer: 'Absolutely. We specialize in drafting risk-shielded vendor contracts, partnership agreements, non-compete clauses, and service level agreements (SLAs).'
      }
    ]
  },
  {
    id: 'accounts-management',
    title: 'Accounts Management & Bookkeeping',
    shortDesc: 'Meticulous bookkeeping, financial statements, taxation filing, and ledger maintenance.',
    badge: 'Accounting & Tax',
    icon: '📊',
    category: 'Finance',
    detailedOverview:
      'Accurate and structured financial bookkeeping is the backbone of every flourishing enterprise. SSS Associate offers end-to-end accounting, GST returns, TDS compliance, profit & loss statement preparation, and balance sheet finalization conforming to Indian accounting standards.',
    problemSolved:
      'Eliminates accounting errors, prevents heavy GST/tax late fees and penalties, provides real-time cash flow visibility, and keeps accounts ready for bank loan sanctioning.',
    scopeOfWork: [
      'Daily/Monthly Daybook, Cashbook & General Ledger Maintenance',
      'Monthly/Quarterly GST Filing (GSTR-1, GSTR-3B, GSTR-9 Annual Return)',
      'TDS Calculation, Challan Generation & Quarterly E-TDS Return Filing',
      'Bank Reconciliation Statements (BRS) & Accounts Receivables/Payables Aging',
      'Preparation of Balance Sheets, Profit & Loss Statements, and Trial Balance',
      'Payroll Management, Salary Register Maintenance & EPF/ESI Advisory'
    ],
    keyBenefits: [
      'Tally / Zoho / Cloud Accounting system compatibility',
      'Zero penalty assurance with timely statutory filing reminders',
      'Ready-to-audit books for bank funding and investor reviews',
      'Dedicated accountant allocation for ongoing MSME operations'
    ],
    documentsRequired: [
      'Company PAN, GSTIN & Udyam Registration',
      'Sales & Purchase Invoices / Bills for the period',
      'Bank Account Statements (CSV / PDF / Net Banking extracts)',
      'Expense receipts, payroll sheets, and vendor payment vouchers'
    ],
    processSteps: [
      { step: '01', title: 'Data Onboarding', desc: 'Collection and systematic sorting of financial vouchers and bank records.' },
      { step: '02', title: 'Ledger Posting', desc: 'Accurate entry into professional accounting software with proper classifications.' },
      { step: '03', title: 'Tax Reconciliation', desc: 'Cross-matching GST 2B/2A input credit and filing statutory returns.' },
      { step: '04', title: 'Monthly MIS Reporting', desc: 'Delivering final balance sheet, profit metrics, and business health reports.' }
    ],
    faqs: [
      {
        question: 'How do you ensure our financial data remains confidential?',
        answer: 'We maintain strict non-disclosure policies. All financial statements and vouchers are processed through secure, encrypted protocols with zero third-party leakage.'
      },
      {
        question: 'Can you bring past unfiled or delayed accounts up to date?',
        answer: 'Yes, our team specializes in backlog accounting, updating pending multi-year ledgers, and regularizing overdue tax filings.'
      }
    ]
  },
  {
    id: 'auditing-services',
    title: 'Auditing Services & Assurance',
    shortDesc: 'Internal & external audits ensuring regulatory compliance and complete transparency.',
    badge: 'Audit & Compliance',
    icon: '🔍',
    category: 'Finance',
    detailedOverview:
      'Our auditing services provide business owners, stakeholders, and lending institutions with thorough assurance regarding financial precision, statutory adherence, and internal control effectiveness. We conduct internal audits, statutory compliance audits, stock audits, and forensic transaction scrutiny.',
    problemSolved:
      'Uncovers revenue leaks, identifies internal control weaknesses, rectifies accounting deviations, and ensures seamless compliance during official inspections.',
    scopeOfWork: [
      'Statutory & Tax Audit Preparation and Verification',
      'Internal Operational Audits & Internal Financial Control (IFC) Testing',
      'Stock, Inventory & Fixed Asset Physical Verification Audits',
      'Compliance Audits for MSME Schemes and Subsidies',
      'Bank Concurrent & Stock Audits for Working Capital Borrowers',
      'Forensic Financial Analysis and Discrepancy Reconciliation'
    ],
    keyBenefits: [
      'Objective, independent, and rigorous review methodology',
      'Unbiased identification of financial risks and leakage areas',
      'Enhanced institutional trust from bankers, partners, and investors',
      'Comprehensive management audit report with actionable remediation'
    ],
    documentsRequired: [
      'Prior Year Audited Financial Statements and Tax Audit Reports',
      'Current Year Trial Balance, General Ledgers, and Day Books',
      'Statutory payment challans (GST, TDS, PF, ESI, Advance Tax)',
      'Inventory stock registers, fixed asset registers, and bank statements'
    ],
    processSteps: [
      { step: '01', title: 'Audit Scoping', desc: 'Understanding business operations and determining risk checkpoints.' },
      { step: '02', title: 'Fieldwork & Verification', desc: 'Vouching, verification of sample transactions, and ledger tallying.' },
      { step: '03', title: 'Draft Observations', desc: 'Discussion of findings with management for clarifications.' },
      { step: '04', title: 'Final Audit Report', desc: 'Issuance of formal audit report with compliance ratings and recommendations.' }
    ],
    faqs: [
      {
        question: 'When is a statutory tax audit mandatory for businesses?',
        answer: 'Under Section 44AB of the Income Tax Act, businesses with turnover exceeding the statutory threshold (₹1 crore to ₹10 crores depending on digital transaction percentage) require mandatory audit.'
      },
      {
        question: 'Can SSS Associate help prepare our company before a bank stock audit?',
        answer: 'Yes, we perform pre-audit stock checks and ledger reconciliations to ensure smooth passing of bank-mandated audits.'
      }
    ]
  },
  {
    id: 'loan-assistance',
    title: 'Loan Assistance & Funding Facilitation',
    shortDesc: 'MSME loans, business funding, mortgage loans, and working capital advisory.',
    badge: 'Funding & Banking',
    icon: '💳',
    category: 'Banking',
    detailedOverview:
      'Securing optimal bank funding requires presenting a spotless credit profile, feasible project reports, and matching collateral documentation. SSS Associate acts as your trusted financial bridge to leading nationalized banks, private banks, and registered NBFCs across Tamil Nadu and India.',
    problemSolved:
      'Overcomes frequent bank loan rejections, lack of proper CMA data/project reports, unfavorable interest rates, and delays in loan sanctioning.',
    scopeOfWork: [
      'MSME Business Loans & CGTMSE Collateral-Free Scheme Facilitation',
      'Secured Mortgage Loans (Loan Against Property - LAP)',
      'Cash Credit (CC) / Overdraft (OD) Working Capital Limits',
      'Detailed Project Report (DPR) & CMA Data Financial Projections',
      'Machinery Loans, Term Loans & Industrial Infrastructure Financing',
      'Credit Score (CIBIL) Rectification Advisory & Profile Optimization'
    ],
    keyBenefits: [
      'Direct liaison with senior bank credit managers and NBFCs',
      'Guidance on government subsidy schemes (PMEGP, MSME Interest Subvention)',
      'Optimized loan amounts with competitive interest rates',
      'Transparent advisory with no hidden false commitments'
    ],
    documentsRequired: [
      'Promoter KYC (PAN Card, Aadhaar, Passport Photos)',
      'Business Registration (MSME Udyam, GST Certificate, Partnership Deed / MOA)',
      '3 Years Income Tax Returns (ITR) with Computation & Balance Sheets',
      'Last 12 Months Bank Statements of all Current and Savings Accounts',
      'Property collateral documents (Parent deeds, Patta, EC) for secured loans'
    ],
    processSteps: [
      { step: '01', title: 'Financial Assessment', desc: 'Evaluation of turnover, bank statements, and borrowing capacity.' },
      { step: '02', title: 'CMA & DPR Preparation', desc: 'Crafting professional CMA data and business project reports.' },
      { step: '03', title: 'Bank File Submission', desc: 'Submitting file to suitable institutional lenders matching your profile.' },
      { step: '04', title: 'Sanction & Disbursement', desc: 'Coordinating legal/technical valuation until final fund credit.' }
    ],
    faqs: [
      {
        question: 'Can new MSME startups apply for funding through SSS Associate?',
        answer: 'Yes, we assist eligible new startups with project reports under government schemes like CGTMSE and PMEGP subject to bank eligibility guidelines.'
      },
      {
        question: 'What is the standard turnaround time for loan processing?',
        answer: 'With complete and verified documentation, initial sanction approvals typically take 7 to 14 business days.'
      }
    ]
  },
  {
    id: 'takeover-solutions',
    title: 'Loan Takeover & Debt Restructuring',
    shortDesc: 'Strategic debt takeover, balance transfer management, and loan restructuring.',
    badge: 'Restructuring',
    icon: '🏢',
    category: 'Banking',
    detailedOverview:
      'High interest rates and rigid EMI schedules can choke enterprise cash flows. SSS Associate assists commercial entities and borrowers in transferring existing high-cost loans to banks offering lower interest rates, extended tenures, and top-up working capital through professional loan takeovers.',
    problemSolved:
      'Reduces exorbitant EMI burdens, releases trapped collateral value, secures lower interest margins, and stops loan accounts from slipping into Non-Performing Asset (NPA) status.',
    scopeOfWork: [
      'Existing Debt Health Check & Interest Rate Comparative Analysis',
      'Balance Transfer (Takeover) Coordination with Competitive Lenders',
      'Top-up Loan Sanctioning on Existing Mortgage Collaterals',
      'Tenure Extension & EMI Optimization Structuring',
      'Foreclosure / Pre-closure Statement Procurement & NOC Handling',
      'Escrow Account Management & Multi-lender Debt Consolidation'
    ],
    keyBenefits: [
      'Immediate reduction in monthly interest outflow',
      'Access to surplus capital without pledging additional properties',
      'Seamless transition from NBFCs to nationalized / private banks',
      'Expert handling of lender NOC and property title transfers'
    ],
    documentsRequired: [
      'Current Loan Sanction Letters & Amortization Repayment Schedules',
      'Foreclosure / Outstanding Principal Balance Statements',
      'Last 12 Months Loan Repayment Track Record',
      'Latest Financial Statements (ITR, Balance Sheet, GST returns)',
      'Copies of pledged property documents with List of Documents (LOD)'
    ],
    processSteps: [
      { step: '01', title: 'Debt Analysis', desc: 'Evaluating existing interest rates, penal charges, and saving margins.' },
      { step: '02', title: 'Lender Matching', desc: 'Identifying takeover-friendly banks offering lower ROI and top-up.' },
      { step: '03', title: 'Approval & Foreclosure', desc: 'Securing in-principle takeover approval and foreclosure letter.' },
      { step: '04', title: 'Payoff & Document Handover', desc: 'Executing balance payoff, obtaining NOC, and releasing original title deeds.' }
    ],
    faqs: [
      {
        question: 'Can a loan with delayed EMIs be taken over by another bank?',
        answer: 'It depends on the severity of the delay. We review your credit history and present restructured financial plans to specialized lenders where feasible.'
      },
      {
        question: 'How much interest can I save through a balance transfer?',
        answer: 'Depending on the current lender (often NBFCs at 14%-18%), moving to institutional banks can lower rates by 2% to 6%, saving lakhs over the loan tenure.'
      }
    ]
  },
  {
    id: 'sales-and-assets',
    title: 'Sales & Commercial Asset Advisory',
    shortDesc: 'Professional transaction advisory, commercial asset disposal, and secure sales.',
    badge: 'Assets & Transactions',
    icon: '🤝',
    category: 'Assets',
    detailedOverview:
      'Monetizing commercial properties, industrial land, factories, or distressed assets requires high market credibility, rigorous title clearance, and transparent negotiation. SSS Associate bridges qualified buyers and sellers, safeguarding transactions against frauds and legal encumbrances.',
    problemSolved:
      'Eliminates fraud risks in property transactions, resolves clouded property titles, connects vetted buyers with genuine sellers, and secures fair market valuation.',
    scopeOfWork: [
      'Commercial, Industrial & Prime Residential Asset Valuation Advisory',
      'Property Legal Due Diligence & 30-year Clear Title Certification',
      'Buyer & Seller Credibility Vetting to Prevent Frivolous Deals',
      'Structured Sale Agreement Drafting with Non-Refundable Advance Protection',
      'Guidance on Capital Gains Tax and TDS on Property Sales (Sec 194-IA)',
      'Registration Support at Sub-Registrar Offices across Tamil Nadu'
    ],
    keyBenefits: [
      'Direct, transparent dealing with zero hidden broker gouging',
      '100% legal title clearance prior to exchange of token advance',
      'Accurate fair market assessment based on ongoing circle rates and market value',
      'Safe escrow and staged payment documentation'
    ],
    documentsRequired: [
      'Original Parent Title Deeds and Sale Deed of the Property',
      'Encumbrance Certificate (EC) for the past 30+ years',
      'Patta, Chitta, Town Survey Extract (TSLR) / Revenue Records',
      'Property Tax, Water Tax, and Electricity Bill Receipts',
      'Approved Building Plan & Completion Certificate (if building)'
    ],
    processSteps: [
      { step: '01', title: 'Asset Verification', desc: 'Physical inspection and title clearance of the asset.' },
      { step: '02', title: 'Valuation & Pricing', desc: 'Determining realistic market price and structuring sale terms.' },
      { step: '03', title: 'Buyer Match & Terms', desc: 'Connecting genuine vetted buyers and finalizing draft agreement.' },
      { step: '04', title: 'Legal Conveyance', desc: 'Drafting sale deed, paying stamp duty, and final sub-registrar execution.' }
    ],
    faqs: [
      {
        question: 'Do you help verify if a property has pending bank mortgages or litigations?',
        answer: 'Yes, we conduct comprehensive litigation search in relevant courts and sub-registrar books to guarantee zero hidden encumbrances.'
      },
      {
        question: 'What regions do you cover for asset sales?',
        answer: 'We cover prime commercial, residential, and industrial corridors throughout Tamil Nadu.'
      }
    ]
  },
  {
    id: 'debt-settlement',
    title: 'Debt Settlement & OTS Advisory',
    shortDesc: 'One-time settlements (OTS), dispute resolution, and negotiation with institutions.',
    badge: 'Settlement & OTS',
    icon: '📑',
    category: 'Banking',
    detailedOverview:
      'When business downturns or unforeseen emergencies push loan accounts into Non-Performing Asset (NPA) classification, banks initiate recovery proceedings. SSS Associate acts as your experienced liaison to structure and negotiate One-Time Settlements (OTS) within RBI guidelines, stopping coercive actions.',
    problemSolved:
      'Prevents attachment of personal assets, halts aggressive recovery harassment, waives compound penal interest, and facilitates full and final closure of bad debts.',
    scopeOfWork: [
      'NPA Account Assessment & Principal vs. Penal Interest Breakdown',
      'Formulating Viable One-Time Settlement (OTS) Proposal Letters',
      'Representation before Bank Recovery Committees & Asset Reconstruction Companies (ARCs)',
      'Negotiation for Maximum Waiver of Penalties, Compound Charges & Interest',
      'Structuring Staged Settlement Installments within Feasible Timelines',
      'Securing Formal In-Principle OTS Sanction Letter and Final No Dues Certificate (NDC)'
    ],
    keyBenefits: [
      'In-depth knowledge of RBI compromise settlement circulars',
      'Shielding borrowers from unlawful harassment and asset seizures',
      'Substantial savings by settling on feasible principal valuations',
      'Legally binding closure preventing future recovery claims'
    ],
    documentsRequired: [
      'Original Loan Sanction Letters and Outstanding Account Statements',
      'Bank Demand Notices (Section 13(2) SARFAESI or recall notices)',
      'Financial distress justification records (medical, business loss, audit)',
      'Borrower KYC (PAN, Aadhaar) and guarantor documentation'
    ],
    processSteps: [
      { step: '01', title: 'NPA Audit', desc: 'Calculating exact dues, interest components, and collateral value.' },
      { step: '02', title: 'Proposal Drafting', desc: 'Preparing an RBI-aligned OTS representation letter with distress evidence.' },
      { step: '03', title: 'Institutional Talks', desc: 'Negotiating with bank credit and recovery committees for maximum waivers.' },
      { step: '04', title: 'Closure & NOC', desc: 'Fulfilling agreed settlement, releasing collaterals, and obtaining NDC.' }
    ],
    faqs: [
      {
        question: 'Can SSS Associate negotiate an OTS if the bank has already issued a Section 13(2) notice?',
        answer: 'Yes. In fact, receiving a SARFAESI Section 13(2) or 13(4) notice is the ideal window to submit a structured OTS representation before the property goes for auction.'
      },
      {
        question: 'Does an OTS guarantee release of our original property deeds?',
        answer: 'Yes. Once the agreed settlement sum is remitted according to the bank’s OTS sanction letter, the bank is legally obligated to return all original mortgaged documents and issue a No Dues Certificate.'
      }
    ]
  },
  {
    id: 'bank-auction',
    title: 'SARFAESI Bank Auction Support',
    shortDesc: 'End-to-end guidance in acquiring SARFAESI bank auction properties securely.',
    badge: 'Auction & SARFAESI',
    icon: '🏛️',
    category: 'Assets',
    detailedOverview:
      'Properties auctioned by banks under the SARFAESI Act, 2002 are sold at 20% to 40% below market value, making them lucrative investments. However, buying auction properties involves legal complexities like physical possession issues, borrower stays, and municipal dues. SSS Associate offers 360° due diligence and bidding guidance.',
    problemSolved:
      'Guards auction buyers against encumbered properties, court stay surprises, possession obstacles, unpaid municipal taxes, and lost earnest money deposits (EMD).',
    scopeOfWork: [
      'Tracking & Identifying High-Yield Bank Auction Property Notices',
      'Comprehensive Pre-bid Title, Encumbrance (EC) & Court Stay Scrutiny',
      'Physical vs. Symbolic Possession Verification with Authorised Officer',
      'E-Auction Registration, Digital Signature (DSC) & EMD Submission Assistance',
      'Live Bidding Strategy & Threshold Value Calculation Advisory',
      'Post-Auction Sale Certificate Procurement, Stamp Duty & Sub-Registrar Registration'
    ],
    keyBenefits: [
      'Access to premium distressed commercial & residential properties below market price',
      'Complete legal shield preventing investments in stay-ordered assets',
      'Assistance in obtaining clean physical vacant possession',
      'End-to-end guidance from initial tender to final registration'
    ],
    documentsRequired: [
      'Bidder KYC (Aadhaar Card, PAN Card, Passport Size Photos)',
      'Bank Account details with sufficient funds for EMD (10%) and 25% same-day payment',
      'Digital Signature Certificate (DSC Class 3) for online e-auction portals',
      'Copy of Bank Auction Sale Notice and Tender Terms'
    ],
    processSteps: [
      { step: '01', title: 'Property Scouting', desc: 'Filtering prime SARFAESI auction assets matching your budget.' },
      { step: '02', title: 'Legal & Physical Due Diligence', desc: 'Verifying DRT/High Court status, encumbrances, and possession status.' },
      { step: '03', title: 'EMD & Portal Bidding', desc: 'Assisting in EMD deposit, mock portal testing, and live auction bidding.' },
      { step: '04', title: 'Sale Certificate & Handover', desc: 'Completing full payment, obtaining Sale Certificate, and Sub-Registrar deed execution.' }
    ],
    faqs: [
      {
        question: 'Are bank auction properties 100% safe to purchase?',
        answer: 'They are exceptionally profitable, but only if thorough due diligence is done prior to bidding. Banks sell properties on an "As is where is and Whatever there is" basis, meaning unverified dues become the buyer’s responsibility. SSS Associate ensures you bid only on clean, risk-free assets.'
      },
      {
        question: 'What happens if the borrower obtains a stay order from DRT after we win the bid?',
        answer: 'We verify pending DRT (Debts Recovery Tribunal) filings before you bid. If an unforeseen dispute arises, we guide you on refund recovery procedures under SARFAESI rules.'
      }
    ]
  }
];
