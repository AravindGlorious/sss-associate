export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  badge: string;
  icon: string;
  category: 'Legal' | 'Finance' | 'Banking' | 'Assets';
  metaTitle: string;
  metaDescription: string;
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
    id: 'legal-opinion',
    slug: 'legal-opinion',
    title: 'Legal Opinion & Advisory Services',
    metaTitle: 'Legal Opinion & Advisory Services in Tamil Nadu | SSS Associate',
    metaDescription:
      'Legal opinion, property document review, title verification, contract drafting and compliance advisory services for individuals, businesses and MSMEs across Tamil Nadu.',
    shortDesc:
      'Legal opinion, property document review, contract drafting, compliance support, and dispute-related advisory.',
    badge: 'Legal & Compliance',
    icon: '⚖️',
    category: 'Legal',
    detailedOverview:
      'SSS Associate provides legal opinion and advisory support for individuals, property owners, businesses, and MSMEs across Tamil Nadu. We assist with property document review, title and revenue record scrutiny, commercial agreements, legal notices, business documentation, and compliance-related matters. Our approach focuses on helping clients understand relevant documents, potential legal considerations, and practical next steps before making important property or business decisions.',
    problemSolved:
      'Property transactions, business agreements, and commercial activities can involve complex documentation and legal considerations. Our advisory support helps clients review relevant records, identify potential issues, understand their position, and proceed with better clarity.',
    scopeOfWork: [
      'Property Title and Parent Document Review',
      'Property Legal Due Diligence and Document Verification',
      'Commercial Contract and Partnership Deed Drafting',
      'Legal Notice Drafting, Rejoinders and Formal Communication',
      'Corporate and MSME Compliance Review',
      'Pre-litigation Mediation, Dispute Resolution and Legal Advisory'
    ],
    keyBenefits: [
      'Structured review of relevant legal and property documents',
      'Clear identification of documents or issues that may require further verification',
      'Practical legal guidance before important agreements or transactions',
      'Support for individuals, businesses and MSMEs across Tamil Nadu'
    ],
    documentsRequired: [
      'Identity Proof such as Aadhaar Card or PAN Card',
      'Business Registration or MSME Udyam Certificate, if applicable',
      'Relevant draft agreements, deeds, or previous contracts',
      'Property title documents and revenue records, where applicable',
      'Legal notices, correspondence, or other dispute-related documents, if applicable'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Initial Consultation',
        desc: 'We understand the legal requirement, relevant facts, and purpose of the requested advisory.'
      },
      {
        step: '02',
        title: 'Document Review',
        desc: 'Available agreements, title documents, notices, and supporting records are reviewed based on the scope of work.'
      },
      {
        step: '03',
        title: 'Legal Assessment',
        desc: 'Relevant observations, potential issues, and practical considerations are explained based on the available information.'
      },
      {
        step: '04',
        title: 'Drafting & Follow-up',
        desc: 'Where required, we assist with legal drafting, documentation, communication, and further advisory support.'
      }
    ],
    faqs: [
      {
        question: 'What does a legal opinion service include?',
        answer:
          'A legal opinion may include review of relevant documents, identification of legal considerations, explanation of potential risks, and practical guidance based on the specific matter. The exact scope depends on the nature and complexity of the requirement.'
      },
      {
        question: 'Can you review property documents before I purchase land or a building?',
        answer:
          'Yes. Property title documents, parent documents, available revenue records, encumbrance-related records, and other relevant papers can be reviewed to identify matters that may require further verification before a transaction.'
      },
      {
        question: 'Can SSS Associate help with commercial agreements?',
        answer:
          'Yes. We provide drafting and review support for business agreements such as vendor agreements, partnership documents, service agreements, and other commercial documentation, subject to the specific requirement.'
      },
      {
        question: 'Do you provide legal advisory services across Tamil Nadu?',
        answer:
          'Yes. SSS Associate provides legal and documentation advisory support across Tamil Nadu, subject to the nature of the matter, required professional involvement, and location-specific requirements.'
      },
      {
        question: 'Can you help with legal notices and replies?',
        answer:
          'Yes. We can assist with reviewing the relevant facts and documents and with preparing or coordinating legal notices, replies, and related formal communications based on the matter.'
      }
    ]
  },

  {
    id: 'land-survey',
    slug: 'land-survey',
    title: 'Land Survey & Boundary Verification',
    metaTitle:
      'Land Survey & Boundary Verification Services in Tamil Nadu | SSS Associate',
    metaDescription:
      'Professional land measurement, FMB sketch verification, boundary demarcation, survey record review and subdivision support for properties across Tamil Nadu.',
    shortDesc:
      'Professional land measurement, FMB sketch verification, boundary demarcation, and survey record review across Tamil Nadu.',
    badge: 'Survey & Revenue',
    icon: '📐',
    category: 'Assets',
    detailedOverview:
      'SSS Associate provides professional land survey and boundary verification support for property owners, buyers, sellers, developers, and businesses across Tamil Nadu. We assist with land measurement, boundary identification, FMB sketch and survey record verification, revenue document review, property demarcation, and subdivision-related advisory. Our support helps clients understand the physical extent of a property and compare available survey and revenue records before purchase, development, construction, or sale.',
    problemSolved:
      'Property boundaries and measurements may differ between physical conditions, survey records, and available property documents. Our support helps identify such discrepancies, compare relevant records, and provide clearer documentation for informed property-related decisions.',
    scopeOfWork: [
      'Land Measurement and Site-level Survey Coordination',
      'Boundary Identification and Demarcation Support',
      'Field Measurement Book (FMB) Sketch and Survey Record Verification',
      'Patta, Chitta and Town Survey Land Record (TSLR) Review',
      'Comparison of Survey Records with Property Documents',
      'Subdivision-related Documentation and Revenue Process Guidance'
    ],
    keyBenefits: [
      'Better understanding of the physical extent and boundaries of a property',
      'Identification of possible differences between records and on-ground measurements',
      'Structured review of available FMB and revenue records',
      'Clearer documentation for property-related discussions and decisions',
      'Useful support before property purchase, development, construction, or sale'
    ],
    documentsRequired: [
      'Registered Sale Deed or Title Deed',
      'Patta or other available revenue records',
      'FMB Sketch, if available',
      'Encumbrance Certificate (EC), if relevant',
      'Previous survey or subdivision documents, if available',
      'Property tax or related records, where applicable'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Document Review',
        desc: 'We review the available property, survey, and revenue documents to understand the recorded extent and relevant details.'
      },
      {
        step: '02',
        title: 'On-Ground Survey',
        desc: 'The property is assessed based on the required measurement and boundary verification scope.'
      },
      {
        step: '03',
        title: 'Record Comparison',
        desc: 'Available survey records, FMB details, revenue records, and property documents are compared to identify possible discrepancies.'
      },
      {
        step: '04',
        title: 'Survey Documentation',
        desc: 'Relevant observations and supporting documentation are organized to help the client understand the property measurements and boundary position.'
      }
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
    slug: 'accounts-management',
    title: 'Accounts Management & Bookkeeping',
    metaTitle:
      'Accounts Management & Bookkeeping Services in Tamil Nadu | SSS Associate',
    metaDescription:
      'Professional bookkeeping, GST and TDS compliance support, financial statement preparation and account reconciliation for businesses and MSMEs across Tamil Nadu.',
    shortDesc:
      'Bookkeeping, account reconciliation, financial statements, GST and TDS compliance support for businesses.',
    badge: 'Accounting & Tax',
    icon: '📊',
    category: 'Finance',
    detailedOverview:
      'SSS Associate provides structured accounting and bookkeeping support for businesses and MSMEs across Tamil Nadu. Our services cover day-to-day bookkeeping, ledger maintenance, bank reconciliation, GST and TDS compliance support, financial statement preparation, receivables and payables tracking, and accounting documentation. The objective is to help businesses maintain organized financial records and improve visibility into their financial position.',
    problemSolved:
      'Incomplete records, unreconciled transactions, delayed entries, and disorganized financial documents can make business reporting and statutory compliance more difficult. Our accounting support helps organize financial information and maintain records in a structured manner.',
    scopeOfWork: [
      'Daily or Monthly Daybook, Cashbook and General Ledger Maintenance',
      'GST Return Preparation and Filing Support',
      'TDS Calculation, Challan and Return Filing Support',
      'Bank Reconciliation Statements and Receivables/Payables Tracking',
      'Balance Sheet, Profit & Loss Statement and Trial Balance Preparation',
      'Payroll Records, Salary Registers and Related Accounting Support'
    ],
    keyBenefits: [
      'Organized and regularly maintained accounting records',
      'Better visibility into receivables, payables and cash movements',
      'Structured GST and TDS compliance support',
      'Financial statements prepared from maintained accounting records',
      'Useful accounting support for business reviews and funding discussions'
    ],
    documentsRequired: [
      'Business PAN, GSTIN and Udyam Registration, if applicable',
      'Sales and Purchase Invoices or Bills',
      'Bank Account Statements',
      'Expense Receipts and Payment Vouchers',
      'Payroll and Salary Records, if applicable',
      'Previous Accounting Records, if available'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Data Collection',
        desc: 'Relevant invoices, bank statements, vouchers, payroll records, and other accounting documents are collected.'
      },
      {
        step: '02',
        title: 'Bookkeeping',
        desc: 'Transactions are classified and recorded in the applicable accounting system.'
      },
      {
        step: '03',
        title: 'Reconciliation & Compliance',
        desc: 'Bank records and available tax-related information are reviewed and reconciled as required.'
      },
      {
        step: '04',
        title: 'Financial Reporting',
        desc: 'Required financial statements and management-level accounting information are prepared from the maintained records.'
      }
    ],
    faqs: [
      {
        question: 'What does bookkeeping service include?',
        answer:
          'Bookkeeping generally includes recording sales and purchase transactions, maintaining ledgers, reconciling bank accounts, tracking receivables and payables, and organizing financial records. The exact scope depends on the business and accounting requirements.'
      },
      {
        question: 'Can you manage accounts for small businesses and MSMEs?',
        answer:
          'Yes. SSS Associate provides accounting and bookkeeping support for eligible small businesses, professionals, traders, service providers, and MSMEs across Tamil Nadu.'
      },
      {
        question: 'Can you help with old or incomplete accounting records?',
        answer:
          'Yes. Existing records can be reviewed and organized to identify missing entries, unreconciled transactions, and documentation gaps. The work required will depend on the volume and condition of the available records.'
      },
      {
        question: 'Do you provide GST and TDS compliance support?',
        answer:
          'Yes. We provide GST and TDS accounting and filing support based on the information and documents supplied by the business, subject to the applicable requirements and professional scope.'
      },
      {
        question: 'How should I share financial documents for accounting work?',
        answer:
          'Businesses can provide relevant invoices, bank statements, expense records, tax documents, and previous accounting data in the required format. The exact document list can be confirmed after understanding the accounting scope.'
      }
    ]
  },

  {
    id: 'auditing-services',
    slug: 'auditing-services',
    title: 'Auditing Services & Assurance',
    metaTitle:
      'Auditing Services & Financial Assurance in Tamil Nadu | SSS Associate',
    metaDescription:
      'Internal audit, financial review, stock verification and compliance audit support for businesses and MSMEs across Tamil Nadu.',
    shortDesc:
      'Internal audit, financial review, stock verification, and compliance-focused audit support.',
    badge: 'Audit & Compliance',
    icon: '🔍',
    category: 'Finance',
    detailedOverview:
      'SSS Associate provides audit and financial review support for businesses and MSMEs across Tamil Nadu. Our work may include internal audit, transaction verification, stock and asset verification, financial control review, compliance checks, and discrepancy analysis. The scope is structured according to the business requirements and the nature of the audit or review being undertaken.',
    problemSolved:
      'Weak internal controls, unreconciled transactions, documentation gaps, and inventory differences can affect business reporting and decision-making. Audit and review support helps identify areas that require clarification, correction, or stronger internal controls.',
    scopeOfWork: [
      'Statutory and Tax Audit Preparation and Verification Support',
      'Internal Operational Audit and Internal Control Review',
      'Stock, Inventory and Fixed Asset Verification',
      'Business Compliance and Documentation Review',
      'Bank-related Stock and Financial Review Support',
      'Financial Discrepancy Analysis and Reconciliation'
    ],
    keyBenefits: [
      'Structured review of financial and operational records',
      'Identification of documentation and reconciliation gaps',
      'Better visibility into internal control and process weaknesses',
      'Actionable observations for management review',
      'Support for businesses preparing for external, banking, or compliance reviews'
    ],
    documentsRequired: [
      'Previous Year Audited Financial Statements, if available',
      'Current Year Trial Balance and General Ledgers',
      'Daybooks and supporting transaction records',
      'GST, TDS and other relevant statutory records',
      'Inventory and Fixed Asset Registers',
      'Bank Statements and Reconciliation Records'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Audit Scoping',
        desc: 'We understand the business operations and define the records, transactions, and control areas to be reviewed.'
      },
      {
        step: '02',
        title: 'Verification',
        desc: 'Relevant transactions, documents, ledgers, inventory, and supporting records are examined according to the agreed scope.'
      },
      {
        step: '03',
        title: 'Findings & Clarification',
        desc: 'Potential discrepancies, control gaps, or documentation issues are discussed with the management for clarification.'
      },
      {
        step: '04',
        title: 'Report & Recommendations',
        desc: 'Relevant observations and recommendations are organized into a report or review summary based on the engagement scope.'
      }
    ],
    faqs: [
      {
        question: 'What is the difference between an internal audit and a statutory audit?',
        answer:
          'An internal audit generally focuses on internal controls, processes, financial practices, and operational risks. A statutory audit is a legally prescribed audit for entities that meet the applicable requirements and is performed according to the relevant professional and legal framework.'
      },
      {
        question: 'Can you help prepare a business for an external or bank audit?',
        answer:
          'Yes. We can review accounting records, supporting documents, reconciliations, inventory information, and other relevant records to identify areas that may require clarification or correction before an external or bank-related review.'
      },
      {
        question: 'What documents are normally required for an audit review?',
        answer:
          'Depending on the audit scope, documents may include financial statements, ledgers, bank statements, invoices, statutory records, stock registers, asset registers, and previous audit reports.'
      },
      {
        question: 'Does every business need a statutory tax audit?',
        answer:
          'Whether a statutory tax audit applies depends on the applicable law, business structure, turnover, nature of activities, and other relevant conditions for the financial year. The current requirements should be assessed based on the specific business and applicable rules.'
      },
      {
        question: 'Do you provide auditing and financial review support across Tamil Nadu?',
        answer:
          'Yes. SSS Associate provides audit preparation, internal review, financial verification, and related support for businesses and MSMEs across Tamil Nadu, subject to the engagement scope and professional requirements.'
      }
    ]
  },

  {
    id: 'loan-facilitation',
    slug: 'loan-facilitation',
    title: 'Loan Facilitation & Bank Loans',
    metaTitle:
      'Bank Loan Facilitation & MSME Funding in Tamil Nadu | SSS Associate',
    metaDescription:
      'Business loans, working capital, loan documentation, CMA data and funding support for eligible businesses and MSMEs across Tamil Nadu.',
    shortDesc:
      'Business loans, MSME funding, working capital, mortgage loans, and loan documentation support.',
    badge: 'Funding & Banking',
    icon: '💳',
    category: 'Banking',
    detailedOverview:
      'SSS Associate provides loan facilitation and documentation support for eligible businesses and MSMEs across Tamil Nadu. We assist with financial assessment, project reports, CMA data, working capital requirements, term loans, loan-against-property requirements, and coordination with applicable lending institutions. Loan approval, pricing, collateral requirements, and disbursement remain subject to the respective lender’s policies and credit assessment.',
    problemSolved:
      'Businesses may face difficulty preparing financial information, project reports, loan documentation, and lender submissions. Our support helps organize the application and present the available financial information in a structured manner.',
    scopeOfWork: [
      'MSME Business Loan and Funding Application Support',
      'Loan Against Property (LAP) Documentation Support',
      'Cash Credit (CC) and Overdraft (OD) Working Capital Assistance',
      'Detailed Project Report (DPR) and CMA Data Preparation',
      'Machinery Loans and Term Loan Documentation Support',
      'Credit Profile Review and Loan Application Guidance'
    ],
    keyBenefits: [
      'Structured preparation of loan-related financial information',
      'Support with CMA data and project documentation',
      'Better organization of lender application documents',
      'Guidance on suitable funding requirements based on the available information',
      'Support with lender communication and documentation follow-up'
    ],
    documentsRequired: [
      'Promoter KYC such as PAN Card and Aadhaar Card',
      'Business Registration, GST and MSME/Udyam documents, if applicable',
      'Income Tax Returns and Financial Statements',
      'Recent Bank Statements',
      'Property and collateral documents for secured facilities, if applicable',
      'Project or business-related supporting documents'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Financial Assessment',
        desc: 'We review the business profile, financial records, existing liabilities, and proposed funding requirement.'
      },
      {
        step: '02',
        title: 'CMA & Project Documentation',
        desc: 'Required financial projections, CMA data, or project documentation are prepared based on the available information.'
      },
      {
        step: '03',
        title: 'Lender Submission',
        desc: 'The application and supporting documents are organized for submission to suitable lending institutions.'
      },
      {
        step: '04',
        title: 'Follow-up & Coordination',
        desc: 'We assist with documentation follow-up and communication during the lender’s assessment process.'
      }
    ],
    faqs: [
      {
        question: 'Can SSS Associate help new MSMEs with loan applications?',
        answer:
          'Yes. We can assist eligible new and existing MSMEs with financial documentation, project reports, CMA data, and loan application support. Final eligibility and approval are determined by the respective lender.'
      },
      {
        question: 'Can you help with working capital loans such as CC or OD?',
        answer:
          'Yes. We provide documentation and application support for working capital facilities such as Cash Credit and Overdraft, subject to the lender’s eligibility and credit assessment.'
      },
      {
        question: 'What is CMA data and why is it required for some business loans?',
        answer:
          'CMA data presents historical and projected financial information used by lenders to assess business performance, working capital requirements, and repayment capacity. The exact format and requirements may vary between lenders.'
      },
      {
        question: 'How long does loan processing take?',
        answer:
          'Processing time varies depending on the lender, loan type, documentation, valuation, credit assessment, and other factors. No fixed approval or disbursement timeline can be guaranteed.'
      },
      {
        question: 'Can you guarantee loan approval?',
        answer:
          'No. Loan approval is decided by the respective bank, NBFC, or financial institution based on its credit policy and assessment. SSS Associate provides documentation, application, and coordination support but cannot guarantee approval.'
      }
    ]
  },

  {
    id: 'takeover-solutions',
    slug: 'takeover-solutions',
    title: 'Loan Takeover & Debt Restructuring',
    metaTitle:
      'Loan Takeover & Debt Restructuring in Tamil Nadu | SSS Associate',
    metaDescription:
      'Loan balance transfer, debt review, repayment restructuring and lender coordination support for eligible borrowers across Tamil Nadu.',
    shortDesc:
      'Loan balance transfer, debt review, repayment restructuring, and lender coordination support.',
    badge: 'Restructuring',
    icon: '🏢',
    category: 'Banking',
    detailedOverview:
      'SSS Associate provides loan takeover and debt restructuring support for eligible borrowers across Tamil Nadu. We assist with reviewing existing loan obligations, comparing available refinancing or balance-transfer options, organizing financial documents, coordinating foreclosure documentation, and supporting lender communication. Any change in interest rate, tenure, EMI, collateral, or loan terms remains subject to the new lender’s assessment and approval.',
    problemSolved:
      'Existing borrowers may face high financing costs, unsuitable repayment structures, or difficulty managing multiple liabilities. Our support helps review the existing position and explore available restructuring or balance-transfer options based on eligibility.',
    scopeOfWork: [
      'Existing Loan and Debt Position Review',
      'Balance Transfer and Loan Takeover Application Support',
      'Top-up Loan Documentation Assistance, Where Eligible',
      'Repayment Tenure and EMI Restructuring Guidance',
      'Foreclosure Statement and NOC Documentation Coordination',
      'Multi-loan Liability Review and Consolidation Guidance'
    ],
    keyBenefits: [
      'Clearer understanding of existing loan obligations',
      'Comparison of available balance-transfer or restructuring options',
      'Structured documentation for lender evaluation',
      'Support with foreclosure and NOC-related documentation',
      'Guidance on repayment options based on the borrower’s financial position'
    ],
    documentsRequired: [
      'Current Loan Sanction Letter',
      'Latest Outstanding or Foreclosure Statement',
      'Loan Repayment Schedule',
      'Recent Loan Repayment History',
      'Latest ITR and Financial Statements, if applicable',
      'Collateral and Property Documents for secured loans'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Existing Loan Review',
        desc: 'We review the current loan amount, repayment structure, outstanding balance, and available documentation.'
      },
      {
        step: '02',
        title: 'Option Assessment',
        desc: 'Potential balance-transfer or restructuring options are reviewed based on the borrower profile and available lender requirements.'
      },
      {
        step: '03',
        title: 'Application & Documentation',
        desc: 'Required financial and loan documents are organized for the proposed lender or restructuring process.'
      },
      {
        step: '04',
        title: 'Lender Coordination',
        desc: 'We assist with documentation follow-up, foreclosure requirements, NOC coordination, and related lender communication.'
      }
    ],
    faqs: [
      {
        question: 'What is a loan takeover or balance transfer?',
        answer:
          'A loan takeover or balance transfer generally involves moving an existing loan from one lender to another, subject to the new lender’s eligibility and approval. The new loan terms may differ from the existing facility.'
      },
      {
        question: 'Can a borrower with delayed EMI payments apply for a loan takeover?',
        answer:
          'Eligibility depends on the borrower’s repayment history, credit profile, current loan status, income, collateral, and the proposed lender’s policy. The existing account position should be reviewed before considering available options.'
      },
      {
        question: 'Can loan restructuring reduce my EMI?',
        answer:
          'Restructuring may change the repayment period, EMI, interest rate, or other terms depending on the lender and approved structure. A lower EMI is not guaranteed because the final terms depend on the lender’s assessment.'
      },
      {
        question: 'What documents are required for a loan takeover?',
        answer:
          'Common documents include the existing sanction letter, outstanding or foreclosure statement, repayment schedule, recent financial records, bank statements, KYC documents, and collateral documents for secured loans.'
      },
      {
        question: 'Do you provide loan takeover support across Tamil Nadu?',
        answer:
          'Yes. SSS Associate provides loan takeover and debt restructuring support across Tamil Nadu, subject to the borrower profile, lender requirements, and nature of the existing facility.'
      }
    ]
  },

  {
    id: 'real-estate-builders',
    slug: 'real-estate-builders',
    title: 'Real Estate, Builders & Asset Sales',
    metaTitle:
      'Real Estate, Builder & Asset Advisory Services in Tamil Nadu | SSS Associate',
    metaDescription:
      'Property due diligence, transaction documentation, builder advisory and asset sale support for property owners and businesses across Tamil Nadu.',
    shortDesc:
      'Property due diligence, builder advisory, transaction documentation, and asset sale support.',
    badge: 'Real Estate & Builders',
    icon: '🏢',
    category: 'Assets',
    detailedOverview:
      'SSS Associate provides real estate, builder, and asset transaction advisory support across Tamil Nadu. We assist property owners, buyers, sellers, businesses, and developers with document review, transaction coordination, property due diligence, builder-related documentation, layout-related document review, and asset sale support. The objective is to help clients organize relevant information and make better-informed property transaction decisions.',
    problemSolved:
      'Property transactions can involve title documents, revenue records, approvals, valuation considerations, and multiple parties. Our support helps organize these aspects and identify documents or issues that may require further verification before a transaction.',
    scopeOfWork: [
      'Residential, Commercial and Industrial Property Advisory',
      'Builder and Joint Venture Documentation Support',
      'Layout and Property Approval Document Review',
      'Property Legal and Document Due Diligence Coordination',
      'Sale Agreement and Transaction Documentation Support',
      'Registration and Sub-Registrar Process Coordination'
    ],
    keyBenefits: [
      'Structured property document review before transactions',
      'Better understanding of available title and revenue records',
      'Support in organizing transaction and builder-related documentation',
      'Assistance with property sale and purchase coordination',
      'Tamil Nadu-wide property advisory support based on service requirements'
    ],
    documentsRequired: [
      'Sale Deed and Available Parent Title Documents',
      'Encumbrance Certificate (EC), where applicable',
      'Patta, Chitta, TSLR or Other Revenue Records',
      'Property Tax and Utility Records, where applicable',
      'Approved Building or Layout Documents, if applicable',
      'Previous Agreements or Transaction Documents, if available'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Property Information Review',
        desc: 'Available property documents, transaction requirements, and relevant background information are reviewed.'
      },
      {
        step: '02',
        title: 'Due Diligence Coordination',
        desc: 'Relevant title, revenue, approval, and transaction records are checked or coordinated for further verification.'
      },
      {
        step: '03',
        title: 'Transaction Planning',
        desc: 'Key documentation, transaction terms, and required follow-up actions are organized based on the property requirement.'
      },
      {
        step: '04',
        title: 'Execution Support',
        desc: 'We assist with documentation coordination and the applicable registration or transaction process.'
      }
    ],
    faqs: [
      {
        question: 'Can you help verify property documents before purchase?',
        answer:
          'Yes. Available title deeds, parent documents, revenue records, encumbrance-related records, and other relevant property documents can be reviewed to identify matters that may require additional verification before purchase.'
      },
      {
        question: 'Do you support builder and joint venture documentation?',
        answer:
          'Yes. We provide documentation review and coordination support for builder arrangements, joint venture discussions, development-related transactions, and other property agreements, subject to the specific requirement.'
      },
      {
        question: 'Do you provide real estate services across Tamil Nadu?',
        answer:
          'Yes. SSS Associate provides property and asset advisory support across Tamil Nadu, subject to the location, property type, documentation, and scope of the requirement.'
      },
      {
        question: 'Can you help review layout or property approval documents?',
        answer:
          'Yes. Available layout, planning, local authority, and property-related approval documents can be reviewed as part of the agreed due diligence scope. Official approval status should be confirmed with the relevant authority where required.'
      },
      {
        question: 'Can you help with property sale documentation and registration coordination?',
        answer:
          'Yes. We can assist with organizing transaction documents, sale-related documentation, and coordination for the applicable registration process. Government registration requirements, fees, and final acceptance remain subject to the concerned authority.'
      }
    ]
  },

  {
    id: 'private-finance',
    slug: 'private-finance',
    title: 'Private Finance & Structured Funding',
    metaTitle:
      'Private Finance & Structured Funding Advisory in Tamil Nadu | SSS Associate',
    metaDescription:
      'Structured funding, bridge finance evaluation and documentation support for eligible business funding requirements across Tamil Nadu.',
    shortDesc:
      'Structured funding, bridge finance evaluation, and private funding documentation support.',
    badge: 'Private Finance',
    icon: '💵',
    category: 'Banking',
    detailedOverview:
      'SSS Associate provides structured funding and private finance advisory support for eligible business requirements across Tamil Nadu. Depending on the requirement, support may include evaluating short-term funding needs, reviewing available security or collateral documents, organizing financial information, and coordinating appropriate documentation. Funding availability, terms, interest rates, and legal or regulatory requirements depend on the parties and applicable laws.',
    problemSolved:
      'Businesses may sometimes require short-term funding while waiting for a conventional facility or resolving a temporary cash-flow gap. Our support helps assess the requirement, organize documentation, and evaluate available funding structures subject to eligibility and applicable requirements.',
    scopeOfWork: [
      'Short-term Working Capital and Bridge Funding Evaluation',
      'Secured Asset-backed Funding Documentation Support',
      'Private Loan Agreement and Related Documentation Coordination',
      'Funding Requirement and Repayment Plan Review',
      'Transition Planning Toward Suitable Institutional Funding',
      'Business Financial and Security Document Review'
    ],
    keyBenefits: [
      'Structured assessment of short-term funding requirements',
      'Clearer documentation of funding terms and repayment expectations',
      'Review of available financial and security information',
      'Support in evaluating possible funding structures',
      'Assistance with documentation and transition planning where applicable'
    ],
    documentsRequired: [
      'Promoter KYC such as PAN Card and Aadhaar Card',
      'Business Registration Documents, if applicable',
      'Recent Bank Statements',
      'Security or Collateral Property Documents, if applicable',
      'Cash Flow Projection and Repayment Plan',
      'Existing Loan or Funding Documents, if applicable'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Funding Requirement Review',
        desc: 'We understand the purpose, amount, proposed tenure, and repayment plan for the funding requirement.'
      },
      {
        step: '02',
        title: 'Financial & Security Review',
        desc: 'Available financial records and security-related documents are reviewed based on the proposed funding structure.'
      },
      {
        step: '03',
        title: 'Documentation',
        desc: 'Relevant funding terms and documentation requirements are organized subject to applicable legal and regulatory requirements.'
      },
      {
        step: '04',
        title: 'Funding Coordination',
        desc: 'Where an eligible funding arrangement is available, we assist with coordination and the agreed documentation process.'
      }
    ],
    faqs: [
      {
        question: 'What is structured funding or bridge finance?',
        answer:
          'Structured funding is a financing arrangement designed around a specific business requirement, repayment plan, security position, or transaction. Bridge finance generally refers to short-term funding intended to cover a temporary funding gap until another expected source becomes available.'
      },
      {
        question: 'Who may require private or structured funding?',
        answer:
          'Eligible businesses may consider structured funding for temporary working capital needs, transaction-related requirements, or other defined funding gaps. Suitability depends on the financial position, repayment capacity, documentation, and applicable requirements.'
      },
      {
        question: 'What documents are generally required for private finance evaluation?',
        answer:
          'Documents may include KYC records, business registration documents, bank statements, financial information, repayment projections, and security or collateral documents where applicable.'
      },
      {
        question: 'Are private finance terms guaranteed?',
        answer:
          'No. Funding availability, interest rate, tenure, security requirements, and other terms depend on the proposed funding arrangement and the parties involved. All applicable legal and regulatory requirements should be considered before entering into an agreement.'
      },
      {
        question: 'Can short-term private funding later be replaced by a bank loan?',
        answer:
          'In some situations, an eligible borrower may later refinance or replace short-term funding with a suitable institutional loan. This depends on the borrower’s financial position, lender eligibility, documentation, and approval.'
      }
    ]
  },

  {
    id: 'debt-settlement',
    slug: 'debt-settlement',
    title: 'Debt Settlement & OTS Advisory',
    metaTitle:
      'Debt Settlement & OTS Advisory in Tamil Nadu | SSS Associate',
    metaDescription:
      'Debt review, One-Time Settlement proposal support and lender negotiation assistance for eligible borrowers across Tamil Nadu.',
    shortDesc:
      'One-Time Settlement support, debt review, lender negotiation, and repayment resolution assistance.',
    badge: 'Settlement & OTS',
    icon: '📑',
    category: 'Banking',
    detailedOverview:
      'SSS Associate provides debt settlement and One-Time Settlement (OTS) advisory support for eligible borrowers across Tamil Nadu. We assist with reviewing outstanding loan information, preparing settlement proposals, organizing supporting documents, and coordinating communication with lenders or relevant institutions. Settlement terms and approval remain entirely subject to the concerned lender, applicable policies, and the specific account position.',
    problemSolved:
      'Borrowers facing financial stress may have difficulty understanding outstanding dues, settlement options, notices, and lender requirements. Our support helps organize the available information and prepare a structured approach for discussing possible resolution options with the concerned institution.',
    scopeOfWork: [
      'Loan Account and Outstanding Dues Review',
      'One-Time Settlement (OTS) Proposal Preparation Support',
      'Bank and Financial Institution Communication Coordination',
      'Review of Interest, Charges and Outstanding Components',
      'Settlement Payment Planning and Documentation Support',
      'Post-settlement Document and NOC Follow-up Guidance'
    ],
    keyBenefits: [
      'Structured review of the current loan and outstanding position',
      'Clear documentation for settlement discussions',
      'Support in preparing practical settlement proposals',
      'Assistance with lender communication and follow-up',
      'Guidance on documentation required after an approved settlement'
    ],
    documentsRequired: [
      'Loan Sanction Letter and Account Statements',
      'Outstanding or Recall Statements',
      'Bank Demand or Recovery Notices, if applicable',
      'Financial Distress Supporting Documents, where relevant',
      'Borrower and Guarantor KYC Documents',
      'Available Collateral and Property Documents'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Account Review',
        desc: 'We review the available loan statements, notices, outstanding amounts, and relevant financial information.'
      },
      {
        step: '02',
        title: 'Settlement Assessment',
        desc: 'The borrower’s financial position and available repayment capacity are reviewed for preparing a practical proposal.'
      },
      {
        step: '03',
        title: 'Proposal & Negotiation Support',
        desc: 'Relevant documents and settlement proposals are prepared for discussion with the concerned lender or institution.'
      },
      {
        step: '04',
        title: 'Closure Documentation',
        desc: 'After an approved settlement is completed, we assist with follow-up for relevant closure documents and lender records.'
      }
    ],
    faqs: [
      {
        question: 'What is a One-Time Settlement (OTS)?',
        answer:
          'A One-Time Settlement is an arrangement under which a lender and borrower agree on terms for resolving an outstanding loan account, subject to the lender’s approval and applicable policy. The settlement amount and conditions vary from case to case.'
      },
      {
        question: 'Can you help prepare an OTS proposal?',
        answer:
          'Yes. We can review the available loan records and financial information and assist with organizing a structured settlement proposal for discussion with the concerned lender.'
      },
      {
        question: 'Can an OTS be requested after receiving a recovery notice?',
        answer:
          'A borrower may discuss available resolution options with the concerned lender even after receiving a recovery or demand notice, but the appropriate approach depends on the stage of the account and applicable legal process. Timely professional advice is important in such cases.'
      },
      {
        question: 'Does an OTS guarantee waiver of all interest or charges?',
        answer:
          'No. Waiver of interest, penal charges, or other amounts depends on the settlement proposal and the lender’s approval. No particular waiver or settlement amount can be guaranteed in advance.'
      },
      {
        question: 'Will the bank issue closure documents after an approved OTS?',
        answer:
          'The documents issued after settlement depend on the lender and the terms of the approved settlement. Borrowers should obtain the applicable closure, no-dues, release, or related documents specified by the lender after completing the agreed obligations.'
      }
    ]
  },

  {
    id: 'bank-auction',
    slug: 'bank-auction',
    title: 'SARFAESI Bank Auction Support',
    metaTitle:
      'SARFAESI Bank Auction Support in Tamil Nadu | SSS Associate',
    metaDescription:
      'Pre-bid property document review, auction notice assessment, due diligence and bidding process guidance for bank auction properties in Tamil Nadu.',
    shortDesc:
      'Pre-bid due diligence, auction notice review, bidding guidance, and post-auction documentation support.',
    badge: 'Auction & SARFAESI',
    icon: '🏛️',
    category: 'Assets',
    detailedOverview:
      'SSS Associate provides SARFAESI bank auction support for prospective buyers and investors across Tamil Nadu. We assist with reviewing auction notices, available property documents, encumbrance-related information, possession details, and other relevant pre-bid considerations. Auction properties involve specific legal, financial, possession, and documentation risks, so buyers should review the official auction notice and conduct appropriate due diligence before bidding.',
    problemSolved:
      'Bank auction properties can involve issues relating to title records, possession, pending proceedings, dues, auction conditions, and payment timelines. Our support helps buyers organize and review available information before deciding whether to participate in an auction.',
    scopeOfWork: [
      'Identification and Review of Bank Auction Property Notices',
      'Pre-bid Property Document and Encumbrance Review',
      'Auction Notice, Terms and Conditions Assessment',
      'Physical and Symbolic Possession Status Review',
      'E-auction Registration, EMD and Bidding Process Guidance',
      'Post-auction Sale Certificate and Registration Process Coordination'
    ],
    keyBenefits: [
      'Structured pre-bid review of available auction information',
      'Better understanding of auction terms and property documentation',
      'Identification of issues requiring further legal or official verification',
      'Guidance through the auction registration and bidding process',
      'Support with post-auction documentation and registration coordination'
    ],
    documentsRequired: [
      'Bidder KYC Documents',
      'Copy of the Official Bank Auction Sale Notice',
      'Auction Terms and Conditions',
      'Property Documents Available from the Auctioning Institution',
      'Bank Account and EMD-related Details',
      'Digital Signature or Portal Requirements, if specified by the auction platform'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Auction Notice Review',
        desc: 'The official auction notice, property details, reserve price, payment schedule, and stated conditions are reviewed.'
      },
      {
        step: '02',
        title: 'Pre-bid Due Diligence',
        desc: 'Available property documents, encumbrance information, possession details, and relevant records are assessed for further verification.'
      },
      {
        step: '03',
        title: 'Auction Process Guidance',
        desc: 'We assist with understanding registration, EMD submission, portal requirements, and the bidding process specified by the auctioning institution.'
      },
      {
        step: '04',
        title: 'Post-auction Coordination',
        desc: 'Where applicable, we assist with payment-related documentation, sale certificate follow-up, and registration coordination.'
      }
    ],
    faqs: [
      {
        question: 'Are SARFAESI bank auction properties completely risk-free?',
        answer:
          'No property auction should be treated as completely risk-free. Buyers should review the official auction notice, available property records, possession status, dues, pending proceedings, and applicable terms before bidding.'
      },
      {
        question: 'What does pre-bid due diligence involve?',
        answer:
          'Pre-bid due diligence may include reviewing the auction notice, available title and property documents, encumbrance information, possession status, court or tribunal-related information where available, and other material conditions stated by the auctioning institution.'
      },
      {
        question: 'Can you help review a bank auction notice before bidding?',
        answer:
          'Yes. We can assist in reviewing the auction notice, payment schedule, reserve price, property description, possession details, and other stated terms so that the buyer can understand the available information before deciding whether to bid.'
      },
      {
        question: 'What is required to participate in a bank e-auction?',
        answer:
          'Requirements vary by the auctioning bank and e-auction platform. Common requirements may include KYC documents, registration on the specified portal, EMD payment, and other documents or digital requirements stated in the official auction notice.'
      },
      {
        question: 'What happens after winning a bank auction?',
        answer:
          'The successful bidder must follow the payment schedule and other conditions specified in the official auction notice. Depending on the transaction, the process may then involve obtaining the applicable sale certificate, completing statutory requirements, and coordinating registration or possession-related steps.'
      }
    ]
  }
];

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

// Aliases map for legacy, alternative, or messy URL slugs
export const SLUG_ALIASES: Record<string, string> = {
  'legal-opinion-advisory': 'legal-opinion',
  'legal-advisory': 'legal-opinion',
  'legal-opinion-advisory-services': 'legal-opinion',
  'legal': 'legal-opinion',
  'land-survey-boundary-verification': 'land-survey',
  'survey': 'land-survey',
  'land': 'land-survey',
  'accounts': 'accounts-management',
  'accounts-management-bookkeeping': 'accounts-management',
  'bookkeeping': 'accounts-management',
  'auditing': 'auditing-services',
  'auditing-services-assurance': 'auditing-services',
  'audits': 'auditing-services',
  'bank-loans': 'loan-facilitation',
  'loans': 'loan-facilitation',
  'loan-facilitation-bank-loans': 'loan-facilitation',
  'takeovers': 'takeover-solutions',
  'loan-takeover': 'takeover-solutions',
  'loan-takeover-debt-restructuring': 'takeover-solutions',
  'debt-restructuring': 'takeover-solutions',
  'real-estate': 'real-estate-builders',
  'builders': 'real-estate-builders',
  'real-estate-builders-asset-sales': 'real-estate-builders',
  'private-finance-structured-funding': 'private-finance',
  'private-funding': 'private-finance',
  'settlements': 'debt-settlement',
  'ots': 'debt-settlement',
  'debt-settlement-ots-advisory': 'debt-settlement',
  'one-time-settlement': 'debt-settlement',
  'bank-auctions': 'bank-auction',
  'sarfaesi-bank-auction-support': 'bank-auction',
  'sarfaesi-auction': 'bank-auction',
  'auction': 'bank-auction',
  'auctions': 'bank-auction',
};

export function getServiceBySlug(
  rawSlug: string | undefined | null
): ServiceItem | undefined {
  if (!rawSlug) return undefined;

  let decoded = rawSlug;
  try {
    decoded = decodeURIComponent(rawSlug);
  } catch {
    decoded = rawSlug;
  }

  // 1. Exact match with id or slug
  const exact = SERVICES_DATA.find(
    (s) =>
      s.id === rawSlug ||
      s.slug === rawSlug ||
      s.id === decoded ||
      s.slug === decoded
  );
  if (exact) return exact;

  // 2. Normalized kebab-case
  const normalized = slugify(decoded);
  const byNormalized = SERVICES_DATA.find(
    (s) => s.id === normalized || s.slug === normalized
  );
  if (byNormalized) return byNormalized;

  // 3. Known aliases map
  if (SLUG_ALIASES[normalized]) {
    const aliasedId = SLUG_ALIASES[normalized];
    const match = SERVICES_DATA.find((s) => s.id === aliasedId);
    if (match) return match;
  }

  // 4. Match against slugified titles
  const byTitle = SERVICES_DATA.find(
    (s) => slugify(s.title) === normalized
  );
  if (byTitle) return byTitle;

  // 5. Partial / substring match
  return SERVICES_DATA.find(
    (s) => normalized.includes(s.id) || s.id.includes(normalized)
  );
}

export function getAllServiceSlugs(): string[] {
  return SERVICES_DATA.map((s) => s.id);
}
