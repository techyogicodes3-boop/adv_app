'use client';
import { useState } from 'react';

interface ServiceDetail {
  id: number;
  title: string;
  summary: string;
  icon: React.ReactNode;
  details: { intro: string; keyAreas: string[]; scenario: string };
}

const services: ServiceDetail[] = [
  {
    id: 1,
    title: 'Real Estate & Property Law',
    summary: 'Strategic representation in Mumbai\'s complex real estate ecosystem covering redevelopment, title disputes, and builder defaults.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
    details: {
      intro: 'The real estate market in Mumbai presents highly complex legal challenges involving redevelopment projects, title disputes, delayed possession, builder defaults, society conflicts, unauthorized transfers, and defective ownership records.',
      keyAreas: ['High-value residential and commercial property disputes', 'Property acquisition and transfer advisory', 'Title verification and due diligence', 'Redevelopment and society disputes', 'Builder–buyer disputes', 'Injunctions and stay proceedings', 'Specific performance suits', 'Property recovery litigation', 'Sale deed and conveyancing disputes', 'Joint venture and redevelopment advisory'],
      scenario: 'A purchaser invests substantial funds into a luxury apartment project. Subsequently, the seller attempts to transfer the property to another buyer at a higher valuation. Immediate legal intervention becomes critical to restrain unauthorized transfers through injunctions and specific performance proceedings.',
    },
  },
  {
    id: 2,
    title: 'Wills, Probate & Family Settlements',
    summary: 'Protecting family wealth across generations through succession planning and inheritance dispute resolution.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    details: {
      intro: 'Inheritance disputes frequently involve emotional, financial, and legal complexities, particularly in matters involving ancestral properties, redevelopment compensation, business assets, and family-owned commercial properties.',
      keyAreas: ['Family property disputes', 'Wills drafting and succession planning', 'Probate and testamentary proceedings', 'Partition and inheritance disputes', 'Family settlement agreements', 'Senior citizen property protection', 'Inter-generational wealth planning', 'Succession advisory for family businesses'],
      scenario: 'Following the demise of parents owning ancestral property, one family member assumes exclusive possession and refuses to distribute lawful shares to other legal heirs. Legal proceedings may involve partition suits, mesne profit claims, and court-supervised division of assets.',
    },
  },
  {
    id: 3,
    title: 'Commercial & Strategic Civil Litigation',
    summary: 'High-stakes litigation with commercial perspective for businesses, investors, and service providers.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    details: {
      intro: 'Commercial disputes require strong recovery strategy, procedural efficiency, and decisive legal action. We represent businesses, investors, lenders, professionals, contractors, and service providers in commercial and civil litigation matters.',
      keyAreas: ['Commercial recovery suits', 'Summary suits under Order XXXVII CPC', 'Contractual disputes', 'Interim injunctions and asset protection', 'Recovery and execution proceedings', 'Financial recovery litigation', 'High-value civil disputes', 'Legal notices and enforcement strategy'],
      scenario: 'Recovery of unpaid commercial dues, contractor payment disputes, business loan recovery proceedings, property and title litigation, and corporate land acquisition disputes requiring strategic legal enforcement.',
    },
  },
  {
    id: 4,
    title: 'Land Acquisition Services',
    summary: 'End-to-end legal guidance for acquiring, developing, and protecting valuable land assets.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
    details: {
      intro: 'Land acquisition transactions involve intricate legal, regulatory, and commercial considerations. We advise individuals, HNIs, NRIs, developers, and businesses on acquisition, development, due diligence, documentation, and protection of land assets.',
      keyAreas: ['Acquisition of large land parcels for residential, commercial, industrial, and infrastructure projects', 'Private acquisitions and government land acquisition proceedings', 'Title verification and due diligence of agricultural and non-agricultural properties', 'Review of ownership documents, revenue records, and encumbrances', 'Notices, objections, compensation claims, and rehabilitation matters', 'Land use conversion and regulatory approvals', 'Acquisition agreements and related documentation', 'Boundary disputes, easement rights, and access-related issues', 'Joint development and collaboration agreements', 'Representation before courts, tribunals, and statutory authorities'],
      scenario: 'We provide practical and commercially prudent legal advice so client interests are safeguarded throughout the acquisition process, supported where required by advocates, architects, engineers, and other subject matter professionals.',
    },
  },
  {
    id: 5,
    title: 'Banking & Financial Litigation',
    summary: 'Strategic representation in financial recovery proceedings for borrowers, lenders, and financial institutions.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    details: {
      intro: 'We represent borrowers, lenders, guarantors, businesses, and financial institutions in banking and financial litigation matters covering the full spectrum of financial dispute resolution.',
      keyAreas: ['SARFAESI proceedings', 'Debt Recovery Tribunal (DRT) matters', 'Banking recovery litigation', 'Financial enforcement proceedings', 'Asset attachment proceedings', 'Cheque dishonour litigation', 'Recovery strategy and settlement advisory'],
      scenario: 'Banks initiate recovery proceedings against borrowers involving attachment and possession of secured assets under the SARFAESI Act. Strategic legal intervention becomes essential to protect procedural rights and challenge unlawful recovery actions.',
    },
  },
  {
    id: 6,
    title: 'High-Value Redevelopment',
    summary: 'Strategic advisory for cooperative housing societies, developers, HNIs, NRIs, and stakeholders in premium redevelopment projects.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8m-4-4v4m-7-4h14a2 2 0 002-2V7a2 2 0 00-2-2h-3.5L12 2 8.5 5H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    details: {
      intro: 'Redevelopment of high-value properties and cooperative housing societies requires a careful balance of legal, commercial, and regulatory considerations. We advise societies, developers, HNIs, NRIs, and stakeholders with an emphasis on safeguarding rights, preserving value, and ensuring smooth execution.',
      keyAreas: ['Redevelopment and self-redevelopment of high-value cooperative housing societies', 'Title, conveyance, and property record due diligence', 'Development Agreements, PAAA, and related transaction documents', 'Selection and appointment of developers, PMC, architects, and other professionals', 'Society governance and statutory obligations for managing committees and members', 'Disputes involving societies, members, developers, tenants, and occupants', 'Deemed conveyance, corpus fund, additional area entitlement, and redevelopment benefits', 'Regulatory approvals and compliance with applicable laws and policies', 'Representation before Cooperative Authorities, RERA, courts, and other forums', 'Negotiations, settlements, and dispute resolution for timely outcomes'],
      scenario: 'Our trusted network of advocates, chartered accountants, project management consultants, architects, engineers, and other professionals helps provide integrated solutions across the redevelopment lifecycle.',
    },
  },
  {
    id: 7,
    title: 'Corporate Advisory & Contracts',
    summary: 'Legal structuring for businesses and investors with strong documentation and strategic advisory.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    details: {
      intro: 'Strong legal documentation and strategic advisory play a crucial role in preventing future disputes and protecting business interests. We advise companies, startups, investors, developers, and businesses in contractual and corporate legal matters.',
      keyAreas: ['Contract drafting and review', 'Commercial agreements', 'Shareholder and partnership disputes', 'Corporate risk advisory', 'Insolvency and bankruptcy matters', 'Regulatory and compliance support', 'Business structuring advisory'],
      scenario: 'Disputes arise between business partners regarding operational control, ownership rights, or profit-sharing arrangements, requiring strategic legal action and tribunal proceedings to protect business interests.',
    },
  },
  {
    id: 8,
    title: 'Criminal & Economic Offence Matters',
    summary: 'Strategic criminal representation in financial and property matters involving fraud and economic offences.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    details: {
      intro: 'Certain commercial and property disputes escalate into criminal allegations involving fraud, breach of trust, cheating, or cheque dishonour proceedings. We handle selected criminal matters connected with financial and property disputes.',
      keyAreas: ['Economic offence matters', 'Property-related criminal complaints', 'Anticipatory bail proceedings', 'FIR defence and criminal advisory', 'Quashing proceedings', 'Cheque bounce litigation', 'Strategic criminal litigation support'],
      scenario: 'A property transaction dispute escalates into allegations of cheating, fraudulent transfer, or breach of trust involving substantial financial stakes and reputational concerns. Strategic representation becomes critical to protect financial and legal interests.',
    },
  },
];

export default function ServicesPage() {
  const [selected, setSelected] = useState<ServiceDetail | null>(null);

  return (
    <>
      <section className="bg-[#0D1B2A] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Practice Areas</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>Comprehensive Legal Services</h1>
          <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">Specialised legal services focused on high-value real estate disputes, commercial litigation, inheritance matters, banking disputes, and corporate advisory.</p>
        </div>
      </section>

      <section className="py-20 bg-[#F8F4EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.id} className="bg-white rounded-xl p-6 border border-[#EDE8DF] hover:border-[#B8952A]/40 hover:shadow-lg transition-all flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[#0D1B2A] text-[#B8952A] flex items-center justify-center mb-4">{svc.icon}</div>
                <h3 className="text-lg font-semibold text-[#0D1B2A] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{svc.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed flex-1 mb-5">{svc.summary}</p>
                <button onClick={() => setSelected(svc)} className="self-start inline-flex items-center gap-1.5 text-sm text-[#B8952A] font-medium hover:gap-2.5 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>Commitment to Professional Excellence</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">Our practice is driven by one objective — delivering strategic, effective, and result-oriented legal representation tailored to the realities of modern property, commercial, and financial disputes.</p>
          <p className="text-lg text-[#B8952A] font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>Protecting Property. Preserving Wealth. Resolving Disputes.</p>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-8" onClick={() => setSelected(null)}>
          <div className="bg-white max-w-2xl w-full rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#0D1B2A] px-7 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#B8952A]/20 text-[#B8952A] flex items-center justify-center">{selected.icon}</div>
                <h2 className="text-lg font-semibold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>{selected.title}</h2>
              </div>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="overflow-y-auto p-7 space-y-6">
              <p className="text-[#4B5563] text-sm leading-relaxed">{selected.details.intro}</p>
              <div>
                <h4 className="font-semibold text-[#0D1B2A] text-sm mb-3 flex items-center gap-2"><div className="w-4 h-0.5 bg-[#B8952A]" /> Key Areas of Practice</h4>
                <ul className="space-y-2">
                  {selected.details.keyAreas.map((area) => (
                    <li key={area} className="flex items-start gap-2 text-sm text-[#4B5563]"><div className="w-1.5 h-1.5 rounded-full bg-[#B8952A] mt-1.5 shrink-0" />{area}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#F8F4EE] rounded-lg p-5 border-l-4 border-[#B8952A]">
                <h4 className="font-semibold text-[#0D1B2A] text-sm mb-2">Representative Scenario</h4>
                <p className="text-[#4B5563] text-sm leading-relaxed">{selected.details.scenario}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
