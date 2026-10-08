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
    title: 'Legal Opinion & Advisory Services',
    shortDesc: 'Expert legal opinion, documentation review, corporate compliance, and dispute resolution.',
    badge: 'Legal & Compliance',
    icon: '⚖️',
    category: 'Legal',
    detailedOverview:
      'SSS Associate provides professional legal opinion and advisory services for MSMEs, businesses, property owners, and individuals across Tamil Nadu. We assist with title scrutiny, parent document verification, property-related legal review, commercial agreements, legal notices, documentation, and compliance matters, helping clients understand legal risks and make informed decisions.',
    problemSolved:
      'Prevents legal vulnerabilities in property transactions and business contracts, protects commercial assets, ensures regulatory compliance, and provides strategic legal defense during contractual or financial disputes.',
    scopeOfWork: [
      'Comprehensive 30+ Year Title Scrutiny & Legal Opinion Reports',
      'Commercial Contract & Partnership Deed Drafting',
      'Property Legal Due Diligence, Search Reports & Patta Verification',
      'Legal Notice Drafting, Rejoinders & Institutional Communication',
      'Corporate & MSME Statutory Regulatory Compliance Review',
      'Pre-litigation Mediation, Dispute Settlement & Legal Representation Advisory'
    ],
    keyBenefits: [
      'Experienced legal counsels with deep Tamil Nadu revenue & civil law insight',
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
        question:
      'Does SSS Associate provide legal opinions for property registration in Tamil Nadu?',
    answer:
      'Yes. SSS Associate provides professional legal opinion and property document review services across Tamil Nadu. The review may include title documents, parent documents, Encumbrance Certificate (EC), Patta and Chitta records, survey records, and other relevant property documentation, depending on the nature of the transaction.'
  },
  {
    question:
      'Can SSS Associate review property documents before a purchase or registration?',
    answer:
      'Yes. We assist property owners, buyers, and businesses with the review of available title and property records to identify documentation discrepancies, potential encumbrances, ownership-related concerns, and other matters that may require further legal attention before proceeding with a transaction.'
  },
  {
    question:
      'Does SSS Associate provide commercial contract drafting services for businesses and MSMEs?',
    answer:
      'Yes. We assist businesses and MSMEs with the preparation and review of commercial documentation, including vendor agreements, service agreements, partnership-related documents, confidentiality provisions, and other business contracts based on the specific requirements of the engagement.'
  },
  {
    question:
      'What documents are generally required for a property legal opinion?',
    answer:
      'Depending on the property and transaction, the review may require the current title deed, parent documents, Encumbrance Certificate, Patta or Chitta records, survey or FMB documents where applicable, and other supporting property records. The specific documentation required will depend on the scope of the legal review.'
  },
  {
    question:
      'Why is legal review important before purchasing or registering a property?',
    answer:
      'A legal review can help assess the available title and property documentation and identify matters relating to ownership history, encumbrances, survey details, revenue records, or documentation inconsistencies. Conducting this review before a transaction enables the parties to make informed decisions and address identified issues where appropriate.'
      }
    ]
  },
  {
    id: 'land-survey',
    title: 'Land Survey & Boundary Verification',
    shortDesc: 'Digital DGPS/Total Station land survey, FMB sketch verification, patta boundary demarcation.',
    badge: 'Survey & Revenue',
    icon: '📐',
    category: 'Assets',
    detailedOverview:
      'SSS Associate provides professional land survey and boundary verification support for property owners, buyers, sellers, developers, and businesses across Tamil Nadu. We assist with land measurement, boundary identification, FMB sketch and survey record verification, revenue document review, property demarcation, and subdivision-related advisory to help clients understand property boundaries and documentation before purchase, development, or sale.',
    problemSolved:
      'Resolves boundary disputes, rectifies discrepancies between on-ground physical measurements and registered deed extents, and validates revenue Patta and FMB records before construction or property registration.',
    scopeOfWork: [
      'Digital Land Survey with Advanced Measuring Instruments',
      'Field Measurement Book (FMB) Sketch Verification & Sub-Division Guidance',
      'Patta, Chitta, Town Survey Land Record (TSLR) Ground Matching',
      'Boundary Demarcation, Corner Stone Plotting & Layout Mapping',
      'Topographical Survey for Real Estate Builders & Layout Developers',
      'Revenue Taluk Office Survey Application Liaising'
    ],
    keyBenefits: [
      'Certified and experienced revenue survey experts',
      'Eliminates boundary encroachment risks before property purchase',
      'Exact area calculation conforming to Sub-Registrar registration guidelines',
      'Detailed digital contour and boundary layout drawing delivery'
    ],
    documentsRequired: [
      'Registered Sale Deed / Title Deed Copy',
      'Latest Encumbrance Certificate (EC)',
      'Patta Passbook / Computer Patta & Chitta Copies',
      'FMB Sketch from Revenue Records (if available)'
    ],
    processSteps: [
      { step: '01', title: 'Record Examination', desc: 'Verifying survey numbers, subdivision marks, and registered deed extents.' },
      { step: '02', title: 'On-Ground Survey', desc: 'Executing digital boundary measurements and boundary demarcation.' },
      { step: '03', title: 'FMB Comparison', desc: 'Cross-verifying measured dimensions against official government FMB drawings.' },
      { step: '04', title: 'Survey Report Delivery', desc: 'Handing over certified measurement drawings and revenue demarcation notes.' }
    ],
    faqs: [
      {
        question:
      'Why is land survey and boundary verification important before buying property?',
    answer:
      'A land survey helps compare the physical property boundaries and measurements with available title documents, FMB sketches, and survey records. This can help identify potential boundary discrepancies before purchasing agricultural, residential, or commercial property.'
  },
  {
    question:
      'Do you provide land survey and boundary verification services across Tamil Nadu?',
    answer:
      'Yes. SSS Associate provides land survey and boundary verification support across Tamil Nadu for property owners, buyers, sellers, businesses, builders, and developers, subject to the availability of the required survey and site-related services.'
  },
  {
    question:
      'What documents are required for land survey and FMB verification?',
    answer:
      'Commonly required documents include the registered sale deed or title deed, Patta or Computer Patta, Chitta, FMB sketch if available, Encumbrance Certificate, and previous survey or property records. The exact documents may vary depending on the property and type of survey.'
  },
  {
    question:
      'Can you help identify boundary discrepancies between the FMB sketch and the actual property?',
    answer:
      'Yes. Available FMB sketches, survey records, and property documents can be compared with on-ground measurements to identify apparent differences in dimensions, boundaries, survey numbers, or subdivision details. Further official confirmation may be required from the concerned revenue or survey authorities.'
  },
  {
    question:
      'Do you assist with patta subdivision and revenue survey-related applications?',
    answer:
      'Yes. SSS Associate can assist with document preparation and guidance for survey-related applications, boundary demarcation, patta subdivision, and related revenue processes in Tamil Nadu. Official measurements, approvals, and revenue decisions remain subject to the concerned government authorities.'
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
        question:
        'What accounting and bookkeeping services does SSS Associate provide?',
      answer:
        'SSS Associate provides bookkeeping and accounts management support including daybook and ledger maintenance, bank reconciliation, accounts receivable and payable tracking, GST and TDS compliance support, trial balance preparation, Profit & Loss statements, balance sheet preparation and periodic financial reporting.'
    },
    {
      question:
        'Can SSS Associate handle pending or incomplete business accounts?',
      answer:
        'Yes. We can review available financial records and assist with bringing incomplete or pending bookkeeping records up to date. The scope and time required depend on the volume of transactions, period involved and availability of supporting documents.'
    },
    {
      question:
        'Do you provide GST and TDS filing support?',
      answer:
        'Yes. We provide GST and TDS compliance support, including preparation and filing assistance for applicable returns and related records. The specific filing requirements depend on the business, registration status and applicable tax rules.'
    },
    {
      question:
        'Can you maintain accounts for MSMEs on a monthly basis?',
      answer:
        'Yes. SSS Associate provides ongoing accounting and bookkeeping support for eligible MSMEs and businesses based on their transaction volume, accounting requirements and agreed service scope.'
    },
    {
      question:
        'Can properly maintained accounts help with business loan applications?',
      answer:
        'Yes. Up-to-date financial records, financial statements, bank records and tax compliance documents can help businesses prepare documentation commonly requested by lenders. Loan eligibility and approval remain subject to the lender’s assessment and applicable requirements.'
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
         question:
      'What types of auditing services does SSS Associate provide?',
    answer:
      'SSS Associate provides audit and assurance support for businesses, MSMEs and organisations, including internal audits, statutory audit preparation and verification, stock and inventory audits, fixed asset verification, compliance reviews, bank-related audit support, and financial discrepancy analysis, depending on the requirements of the engagement.'
  },
  {
    question:
      'When does a business need a statutory or tax audit?',
    answer:
      'The requirement for a statutory or tax audit depends on the applicable law, business structure, turnover or gross receipts, nature of transactions, and other prescribed conditions. SSS Associate can assist businesses in understanding the applicable audit requirements and preparing the relevant financial and accounting records.'
  },
  {
    question:
      'Can SSS Associate help prepare a business for a bank stock audit?',
    answer:
      'Yes. We can assist with pre-audit review of inventory records, stock statements, purchase and sales records, ledger balances, bank statements, and related documentation to help businesses identify discrepancies and improve audit readiness before a bank-conducted stock or concurrent audit.'
  },
  {
    question:
      'What documents are generally required for an audit?',
    answer:
      'Depending on the type and scope of the audit, documents may include financial statements, trial balance, general ledgers, cash and bank records, purchase and sales records, GST and TDS records, inventory registers, fixed asset registers, statutory payment records, and other supporting documents relevant to the engagement.'
  },
  {
    question:
      'How can an internal audit help improve business financial controls?',
    answer:
      'An internal audit can help identify gaps in accounting processes, transaction controls, inventory management, expense approvals, documentation, and financial reporting. The findings can help management strengthen internal controls, reduce operational risks, improve accountability, and support better financial decision-making.'
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
        question:
      'What types of business and MSME loans does SSS Associate assist with?',
    answer:
      'SSS Associate assists eligible businesses and MSMEs with various funding requirements, including business loans, working capital facilities, Cash Credit (CC), Overdraft (OD), Term Loans, Machinery Loans, Loan Against Property (LAP), and other suitable funding options based on the applicant’s financial profile and lender requirements.'
  },
  {
    question:
      'Can SSS Associate help new businesses and startups apply for business funding?',
    answer:
      'Yes. We can assist eligible new businesses and startups with funding documentation, project reports, financial projections, and guidance on applicable government-backed or institutional financing schemes. Final eligibility, sanction and funding decisions are subject to the concerned lender and applicable scheme conditions.'
  },
  {
    question:
      'What documents are generally required for a business or MSME loan?',
    answer:
      'Common documents may include promoter KYC, business registration documents, GST and Udyam registration where applicable, income tax returns, financial statements, bank statements, business or project reports, and property documents for secured funding. The exact requirements vary by lender, loan type and applicant profile.'
  },
  {
    question:
      'Can SSS Associate prepare CMA data and project reports for loan applications?',
    answer:
      'Yes. We assist eligible businesses with the preparation and presentation of CMA data, project reports, financial projections and supporting documentation required for certain business and working capital loan applications. The final format and requirements depend on the concerned lender.'
  },
  {
    question:
      'Can you assist if my previous loan application was rejected by a bank?',
    answer:
      'Yes. We can review the available application information, financial records, credit profile and documentation to identify possible gaps or concerns. Based on the assessment, we can guide you on improving the loan proposal and documentation before approaching a suitable lender. Loan approval remains subject to the lender’s independent credit assessment.'
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
        question:
        'Can an existing loan be transferred to another bank or financial institution?',
      answer:
        'In eligible cases, an existing loan may be considered for balance transfer or takeover by another lender. Eligibility depends on factors such as credit history, repayment track record, income or business performance, collateral, outstanding liability and the prospective lender’s policies.'
    },
    {
      question:
        'Can a borrower with delayed EMI payments apply for a loan takeover?',
      answer:
        'A history of delayed payments can affect eligibility for a takeover or refinancing facility. SSS Associate can review the available loan and financial information and explain potential options, but final eligibility and approval are determined by the prospective lender.'
    },
    {
      question:
        'Can loan restructuring reduce the monthly EMI?',
      answer:
        'Depending on the lender and borrower’s circumstances, restructuring may involve changes to repayment tenure, instalment structure or other applicable terms. Any change in EMI or total repayment cost depends on the revised terms approved by the lender.'
    },
    {
      question:
        'What documents are required for a loan takeover?',
      answer:
        'Common documents include the existing loan sanction letter, outstanding or foreclosure statement, repayment history, bank statements, financial statements, ITR and GST records where applicable, KYC documents and collateral or property documents. The exact requirements vary by lender and loan type.'
    },
    {
      question:
        'Can SSS Associate assist with foreclosure and NOC documentation?',
      answer:
        'Yes. We can assist with coordinating the collection and review of foreclosure statements, repayment requirements, NOC-related documentation and collateral document release procedures. The actual closure and release of documents remain subject to the existing lender’s procedures.'
    }
    ]
  },
  {
    id: 'sales-and-assets',
    title: 'Real Estate, Builders & Asset Sales',
    shortDesc: 'Property transactions, layout promoter liaising, commercial asset disposal, and builder advisory.',
    badge: 'Real Estate & Builders',
    icon: '🏢',
    category: 'Assets',
    detailedOverview:
      'Monetizing residential plots, agricultural lands, commercial properties, or partnering with trusted builders requires deep market understanding and spotless documentation. SSS Associate acts as your trusted partner across Papanasam, Thanjavur, and Tamil Nadu for genuine real estate advisory, DTCP/RERA layout compliance, and secure asset disposition.',
    problemSolved:
      'Eliminates fraud risks in property transactions, resolves clouded property titles, connects vetted buyers with genuine sellers, and secures fair market valuation.',
    scopeOfWork: [
      'Commercial, Industrial & Prime Residential Asset Valuation Advisory',
      'Builder Joint Venture (JV) Structuring & Promoter Agreement Drafting',
      'DTCP / CMDA / Local Body Layout Approval Compliance Verification',
      'Property Legal Due Diligence & 30-year Clear Title Certification',
      'Structured Sale Agreement Drafting with Token Advance Protection',
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
         question:
      'Can SSS Associate help review property documents before a sale or purchase in Tamil Nadu?',
    answer:
      'Yes. SSS Associate provides property documentation and transaction support across Tamil Nadu. Depending on the engagement, the review may include title documents, parent documents, Encumbrance Certificate, Patta and Chitta records, survey documents, approved plans and other relevant property records.'
  },
  {
    question:
      'Can you help identify mortgages, encumbrances or other issues affecting a property?',
    answer:
      'Yes. Available property and registration records can be reviewed to identify disclosed mortgages, encumbrances, documentation discrepancies and other matters that may require further legal verification. The scope of verification depends on the property and records available for review.'
  },
  {
    question:
      'Do you assist with property sales, builder transactions and development-related documentation?',
    answer:
      'Yes. We assist property owners, buyers, businesses, builders and developers with transaction documentation, property due diligence, sale-related agreements, builder coordination and registration-related guidance, depending on the requirements of the engagement.'
  },
  {
    question:
      'What documents are generally required for property due diligence?',
    answer:
      'Common documents include the current sale deed, parent or previous title documents, Encumbrance Certificate, Patta or Chitta records, survey or FMB documents, property tax records, approved plans and other relevant property documents. The exact requirements vary according to the property and transaction.'
  },
  {
    question:
      'Does SSS Associate provide real estate and asset transaction support across Tamil Nadu?',
    answer:
      'Yes. SSS Associate provides real estate, property documentation and asset transaction advisory support across Tamil Nadu, subject to the nature of the property, transaction and professional services required.'
      }
    ]
  },
  {
    id: 'private-finance',
    title: 'Private Finance & Structured Funding',
    shortDesc: 'Short-term business liquidity, bridging finance, and private funding coordination.',
    badge: 'Private Finance',
    icon: '💵',
    category: 'Banking',
    detailedOverview:
      'When conventional banking timelines are too slow for urgent business emergencies, inventory restocking, or auction EMD deposits, private finance can provide vital bridge liquidity. SSS Associate facilitates legitimate, legally documented private funding and structured financial assistance for creditworthy enterprises in Tamil Nadu.',
    problemSolved:
      'Solves critical cash-flow emergencies, helps bridge funding gaps while awaiting long-term bank sanction, and secures immediate capital against sound asset collaterals.',
    scopeOfWork: [
      'Emergency Working Capital & Bridge Financing Facilitation',
      'Secured Asset-Backed Short-Term Private Funding Evaluation',
      'Legal Loan Agreement, Promissory Note & Collateral Deed Execution',
      'Transparent Interest Structure with No Hidden Usurious Charges',
      'Repayment Escrow Planning & Bank Takeover Transition Strategy',
      'Business Financial Feasibility and Security Verification'
    ],
    keyBenefits: [
      'Speedy turnaround for urgent commercial capital needs',
      'Legally sound documentation safeguarding both borrower and lender',
      'Structured exit plan to transition into low-cost bank loans',
      '100% confidential financial discussions'
    ],
    documentsRequired: [
      'Promoter KYC (Aadhaar Card, PAN Card)',
      'Business Registration & Bank Statements (6 to 12 months)',
      'Security / Collateral Property Document Copies',
      'Cash Flow Projections & Repayment Plan Details'
    ],
    processSteps: [
      { step: '01', title: 'Need Evaluation', desc: 'Assessing required capital sum and urgency timeline.' },
      { step: '02', title: 'Collateral Vetting', desc: 'Evaluating security papers and borrower repayment capability.' },
      { step: '03', title: 'Legal Agreement Drafting', desc: 'Executing compliant private loan agreement and receipts.' },
      { step: '04', title: 'Fund Release & Exit Plan', desc: 'Facilitating fund release and establishing bank balance takeover roadmap.' }
    ],
    faqs: [
      {
         question:
      'What is private finance and structured funding for a business?',
    answer:
      'Private finance generally refers to funding arranged outside conventional bank lending, while structured funding involves designing a financing arrangement around the borrower’s requirements, repayment capacity, available security and applicable legal and financial considerations.'
  },
  {
    question:
      'Can SSS Associate assist businesses with private funding requirements?',
    answer:
      'SSS Associate can provide advisory and coordination support for eligible business funding requirements, including assessment of funding needs, financial information, documentation, security-related records and repayment considerations. Any funding arrangement remains subject to the applicable legal, regulatory and commercial requirements.'
  },
  {
    question:
      'What documents are generally required for structured or private funding?',
    answer:
      'Depending on the proposed arrangement, documents may include promoter KYC, business registration records, bank statements, financial statements, cash-flow projections, details of the proposed security or collateral, and other documents required to assess the transaction.'
  },
  {
    question:
      'Can private funding be used as temporary business or bridge finance?',
    answer:
      'Subject to the applicable legal and commercial terms, structured funding may be considered for specific short-term business requirements or temporary funding gaps. The suitability of such funding depends on the business’s cash flow, repayment capacity, security and overall financial position.'
  },
  {
    question:
      'Can structured private funding later be refinanced through a bank or institutional lender?',
    answer:
      'In some circumstances, an existing funding arrangement may be refinanced or replaced through bank or institutional finance, subject to the borrower’s eligibility, credit profile, documentation, security, lender policies and applicable repayment or settlement terms.'
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
        question:
        'Can SSS Associate assist with an OTS after a bank has issued a Section 13(2) notice?',
      answer:
        'Yes. Subject to the circumstances of the loan account, SSS Associate can assist with reviewing the available notices and financial records and preparing an appropriate settlement or OTS representation. Acceptance of any settlement proposal remains at the discretion of the concerned lender and is subject to applicable legal and regulatory requirements.'
    },
    {
      question:
        'Does receiving a SARFAESI notice automatically mean that an OTS will be accepted?',
      answer:
        'No. A SARFAESI notice does not create an automatic right to an OTS. A borrower may submit a settlement proposal where appropriate, but the lender will independently evaluate the proposal, outstanding dues, security, repayment circumstances and applicable policies before deciding.'
    },
    {
      question:
        'Can an OTS reduce the total amount payable on a loan?',
      answer:
        'An approved OTS may provide revised settlement terms compared with the outstanding claim, depending on the lender’s assessment and applicable policy. The actual settlement amount, waiver and payment conditions are determined by the concerned lender and must be documented in the approved settlement terms.'
    },
    {
      question:
        'What documents are required to prepare an OTS proposal?',
      answer:
        'The documents generally include the loan account statement, sanction documents, demand or recovery notices where applicable, borrower KYC, financial statements, bank statements and documents supporting the borrower’s financial circumstances. Additional documents may be requested depending on the lender and account.'
    },
    {
      question:
        'What happens after an OTS proposal is approved?',
      answer:
        'After approval, the borrower must comply with the payment schedule and other conditions specified in the lender’s settlement letter. Once the agreed obligations are completed, the borrower can request the applicable No-Dues Certificate, closure documentation and release of securities or documents, subject to the lender’s procedures and terms.'
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
        question:
        'Are SARFAESI bank auction properties safe to purchase?',
      answer:
        'The suitability and risks of a bank auction property depend on its individual title, possession status, encumbrances, litigation, outstanding dues, auction terms and other circumstances. A detailed review of the available records and auction conditions before bidding can help buyers make a more informed decision.'
    },
    {
      question:
        'What should I check before bidding for a bank auction property?',
      answer:
        'Before bidding, buyers should review the auction notice, reserve price, title and encumbrance information, possession status, available court or tribunal information, outstanding dues, property access, applicable auction terms and the bank’s stated conditions. Physical verification and professional due diligence may also be appropriate depending on the property.'
    },
    {
      question:
        'Does SSS Associate provide SARFAESI bank auction support across Tamil Nadu?',
      answer:
        'Yes. SSS Associate provides bank auction advisory and due diligence support across Tamil Nadu, subject to the availability of the relevant auction documents, property records and required professional services.'
    },
    {
      question:
        'What is the difference between physical possession and symbolic possession in a bank auctio?',
      answer:
        'Physical possession generally means the secured creditor has taken actual possession of the property, while symbolic possession refers to possession being taken through the applicable legal process without the property necessarily being physically vacated. Buyers should carefully review the possession status and applicable auction conditions before bidding.'
    },
    {
      question:
        'Can you assist with EMD, e-auction registration and post-auction registration?',
      answer:
        'Yes. SSS Associate can provide guidance on the documentation and procedural aspects of EMD submission, e-auction registration, bidding requirements, Sale Certificate-related procedures and subsequent property registration. Specific requirements, timelines and statutory payments are determined by the concerned bank, auction platform and applicable authorities.'
      }
    ]
  }
];
