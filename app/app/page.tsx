import Link from 'next/link';

const HERO_IMAGE_URL = 'https://www.uc.edu/content/uc/news/articles/2023/02/n21145648/_jcr_content/image.img.cq5dam.thumbnail.500.500.jpg/1675787733388.jpg';

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Real Estate & Property Law',
    desc: 'High-value residential, commercial, and redevelopment property disputes with strategic injunctive relief.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Wills, Probate & Succession',
    desc: 'Comprehensive succession planning, probate proceedings, and inheritance dispute resolution for HNI families.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Commercial Litigation',
    desc: 'Recovery suits, contractual disputes, financial litigation, and high-stakes commercial matters.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Land Acquisition Services',
    desc: 'Acquisition strategy, title due diligence, documentation, approvals, and representation in land ownership disputes.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Banking & Financial',
    desc: 'SARFAESI proceedings, DRT matters, financial enforcement, and banking recovery strategy.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8m-4-4v4m-7-4h14a2 2 0 002-2V7a2 2 0 00-2-2h-3.5L12 2 8.5 5H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Housing Society Redevelopment',
    desc: 'Strategic advisory for societies, developers, HNIs, and stakeholders in premium redevelopment projects.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Corporate Advisory',
    desc: 'Contract drafting, shareholder disputes, business structuring, and regulatory compliance advisory.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Criminal & Economic Offence Matters',
    desc: 'Selected criminal matters connected with financial, commercial, fraud, and property-related disputes.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0D1B2A] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#0D1B2A]/62" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/78 via-[#0D1B2A]/48 to-[#0D1B2A]/90" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/82 via-[#0D1B2A]/26 to-[#0D1B2A]/82" aria-hidden />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#B8952A] blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#B8952A] blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <div className="inline-flex items-center gap-2 bg-[#0D1B2A]/70 border border-[#B8952A]/50 rounded-full px-4 py-1.5 mb-8 shadow-lg shadow-black/20 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#B8952A]" />
            <span className="text-[#B8952A] text-xs font-medium tracking-wider uppercase">Bombay High Court — Mumbai</span>
          </div>
          <h1 className="hero-text-shadow text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Strategic Legal Representation
            <br />
            <span className="text-[#B8952A]">for Real Estate, Land Acquisition & Wealth</span>
            <br />
            & Commercial Disputes
          </h1>
          <p className="hero-text-shadow text-white/90 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            In a city like Mumbai, property is more than ownership — it represents legacy, investment, business growth,
            financial security, and generational wealth. We provide specialised, strategic, and result-oriented legal
            representation for HNIs, NRIs, investors, developers, and corporate entities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="px-8 py-3.5 bg-[#B8952A] text-white rounded-lg font-medium text-sm hover:bg-[#8B6914] transition-colors shadow-lg">
              Explore Our Services
            </Link>
            <Link href="/contact" className="px-8 py-3.5 border border-white/55 bg-[#0D1B2A]/45 text-white rounded-lg font-medium text-sm backdrop-blur-sm hover:border-[#B8952A] hover:text-[#B8952A] transition-colors">
              Schedule Consultation
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <span className="text-gray-400 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Our Practice</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0D1B2A]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Protecting Property. Preserving Wealth. Resolving Disputes.
            </h2>
          </div>
          <div className="space-y-5 text-[#4B5563] leading-relaxed">
            <p>Disputed ownership rights. Delayed redevelopment projects. Defective titles. Builder disputes. Unauthorized property transfers. Commercial recovery proceedings. Family inheritance conflicts. Banking litigation. Corporate disagreements.</p>
            <p>For High Net Worth Individuals (HNIs), NRIs, investors, developers, business families, and corporate entities, these matters are not merely legal disputes — they involve substantial financial exposure, reputational concerns, and long-term strategic consequences.</p>
            <p>At Advocate Meet Shah, our practice focuses on delivering specialised, strategic, and result-oriented legal representation in real estate and property disputes, commercial litigation, family settlements, banking matters, corporate advisory, and dispute resolution.</p>
            <p>We combine courtroom advocacy with practical commercial understanding to provide legal solutions that are effective, commercially viable, and focused on long-term protection of client interests.</p>
          </div>
          <div className="text-center mt-10">
            <Link href="/about" className="inline-flex items-center gap-2 text-[#B8952A] font-medium text-sm hover:gap-3 transition-all">
              Learn About Our Practice
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#F8F4EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0D1B2A]" style={{ fontFamily: 'Playfair Display, serif' }}>Practice Areas</h2>
            <p className="text-[#6B7280] mt-3 max-w-xl mx-auto text-sm">Comprehensive legal services tailored for high-value disputes across real estate, commercial, and financial sectors.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href="/services"
                className="bg-white rounded-xl p-6 border border-[#EDE8DF] hover:border-[#B8952A]/40 hover:shadow-lg transition-all group block"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0D1B2A] text-[#B8952A] flex items-center justify-center mb-4 group-hover:bg-[#B8952A] group-hover:text-white transition-colors">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0D1B2A] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{svc.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{svc.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 bg-[#0D1B2A] text-white rounded-lg text-sm font-medium hover:bg-[#1A2E42] transition-colors">
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1B2A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B8952A] blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Facing a Property or Commercial Dispute?
          </h2>
          <p className="text-gray-400 text-base mb-8 leading-relaxed">
            Our practice focuses on proactive legal protection. Strong legal defence begins long before litigation starts.
            Reach out for a confidential consultation.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-3.5 bg-[#B8952A] text-white rounded-lg font-medium text-sm hover:bg-[#8B6914] transition-colors shadow-lg">
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
