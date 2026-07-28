import Image from 'next/image';
import Link from 'next/link';

const commitments = [
  {
    title: 'Practical Legal Strategy',
    desc: 'We focus on clear, commercially sound advice that protects rights, assets, and long-term interests.',
  },
  {
    title: 'Multidisciplinary Support',
    desc: 'Our work is strengthened by trusted advocates, chartered accountants, PMCs, architects, engineers, and other experts.',
  },
  {
    title: 'Professional Integrity',
    desc: 'Every matter is handled with discretion, preparation, and a commitment to ethical, client-focused representation.',
  },
];

const experience = [
  'Guidance and experience in matters concerning the Department of Legal Affairs, Mumbai, under Shri Anil Singh, Additional Solicitor General of India.',
  'Exposure at Solicis Lex under Mr. Ameet Mehta, whose contributions formed part of the drafting process of RERA.',
  'Association with S. Ashwini Kumar & Co. LLP, Advocates & Solicitors, a distinguished firm with a rich professional legacy.',
  'Completion of the Advocacy Training Course conducted by the Bombay Bar Association.',
];

const serviceFocus = [
  'Real estate and property disputes',
  'Redevelopment and housing society matters',
  'Land acquisition and title due diligence',
  'Commercial litigation and strategic civil disputes',
  'Wealth, succession, and NRI property advisory',
  'Negotiation, settlements, and dispute resolution',
];

const missionPoints = [
  'Protect property rights, investments, and business interests.',
  'Deliver commercially practical legal solutions.',
  'Provide strong representation in high-value disputes.',
  'Offer preventive legal advisory to minimise future disputes.',
];

const educationDetails = [
  { label: 'Graduate', value: 'Meet Rajesh Shah' },
  { label: 'Degree', value: 'Bachelor of Laws (LL.B.)' },
  { label: 'Batch', value: '2020-2023' },
  { label: 'College', value: 'Jitendra Chauhan College of Law' },
  { label: 'University', value: 'University of Mumbai' },
];

const awardPhotos = [
  {
    src: '/award/WhatsApp Image 2026-07-22 at 11.19.29 PM.jpeg',
    title: 'Professional Recognition',
  },
  {
    src: '/award/WhatsApp Image 2026-07-22 at 11.19.28 PM.jpeg',
    title: 'Award Moment',
  },
  {
    src: '/award/WhatsApp Image 2026-07-22 at 11.19.28 PM (1).jpeg',
    title: 'Certificate Highlight',
  },
  {
    src: '/award/WhatsApp Image 2026-07-22 at 11.19.29 PM (1).jpeg',
    title: 'Recognition Gallery',
  },
];

const awardDocuments = [
  {
    href: '/award/Meet Rajesh Shah.pdf',
    title: 'Meet Rajesh Shah',
    desc: 'Graduation document',
  },
  {
    href: '/award/MEET SHAH BOMBAY BAR ASSOCIATION.pdf',
    title: 'Bombay Bar Association',
    desc: 'Advocacy training document',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0D1B2A] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Your Concerns, Our Commitment
          </h1>
          <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
            Guided by excellence and driven by solutions, Adv. Meet Shah & Associates provides thoughtful, practical, and reliable legal advisory and representation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Our Commitment</p>
              <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Strategic Legal Support With a Practical Lens
              </h2>
              <div className="space-y-4 text-[#4B5563] leading-relaxed text-sm">
                <p>
                  Every legal issue carries unique challenges and deserves a solution shaped by facts, strategy, and the client&apos;s larger objectives. Our practice is built on integrity, professionalism, and client satisfaction.
                </p>
                <p>
                  We provide legal and advisory services through a multidisciplinary approach, combining litigation experience with commercial understanding and the collective expertise of seasoned professionals.
                </p>
                <p className="font-semibold text-[#0D1B2A]">
                  Trusted Counsel. Practical Solutions. Enduring Relationships.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-[#EDE8DF] bg-[#F8F4EE] p-8">
              <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>What Defines Our Work</h3>
              <div className="space-y-5">
                {commitments.map((item) => (
                  <div key={item.title}>
                    <div className="mb-2 h-0.5 w-8 bg-[#B8952A]" />
                    <h4 className="text-base font-semibold text-[#0D1B2A]">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-[#6B7280]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F4EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <div className="relative profile-photo-reveal">
              <div className="absolute -inset-3 rounded-xl border border-[#B8952A]/30" />
              <div className="relative overflow-hidden rounded-xl border border-[#EDE8DF] bg-white shadow-xl">
                <Image
                  src="/meet.jpeg"
                  alt="Adv. Meet Rajesh Shah"
                  width={402}
                  height={520}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
            <div>
              <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Advocate Profile</p>
              <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
                Meet Rajesh Shah
              </h2>
              <div className="mb-7 rounded-xl border border-[#EDE8DF] bg-white p-6 shadow-sm profile-detail-reveal">
                <p className="text-sm uppercase tracking-widest text-[#B8952A]">Jitendra Chauhan College of Law</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                  Celebrates the Graduation of <span className="font-semibold text-[#0D1B2A]">Meet Rajesh Shah</span>, Bachelor of Laws (LL.B.), Batch 2020-2023, graduating from University of Mumbai.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {educationDetails.map((item, index) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-[#EDE8DF] bg-white p-4 profile-detail-reveal"
                    style={{ animationDelay: `${120 + index * 90}ms` }}
                  >
                    <p className="text-[11px] font-medium uppercase tracking-widest text-[#B8952A]">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold leading-relaxed text-[#0D1B2A]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F4EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Professional Foundation</p>
              <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
                Experience Shaped by Strong Legal Institutions
              </h2>
              <p className="text-sm leading-relaxed text-[#4B5563]">
                Adv. Meet Shah&apos;s professional journey has included exposure to litigation, real estate regulation, established legal chambers, and focused advocacy training. This foundation informs the firm&apos;s practical and result-oriented approach.
              </p>
            </div>
            <div className="space-y-3">
              {experience.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-[#EDE8DF] bg-white p-4">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#B8952A]" />
                  <p className="text-sm leading-relaxed text-[#4B5563]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Awards Gallery</p>
            <h2 className="text-3xl font-semibold text-[#0D1B2A]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Recognition, Training, and Milestones
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {awardPhotos.map((photo, index) => (
              <figure
                key={photo.src}
                className="award-gallery-reveal overflow-hidden rounded-lg border border-[#EDE8DF] bg-[#F8F4EE] shadow-sm"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 text-sm font-semibold text-[#0D1B2A]">{photo.title}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {awardDocuments.map((doc, index) => (
              <Link
                key={doc.href}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="award-gallery-reveal flex items-center justify-between gap-4 rounded-lg border border-[#EDE8DF] bg-[#F8F4EE] p-5 transition-colors hover:border-[#B8952A]"
                style={{ animationDelay: `${360 + index * 90}ms` }}
              >
                <span>
                  <span className="block text-sm font-semibold text-[#0D1B2A]">{doc.title}</span>
                  <span className="mt-1 block text-xs uppercase tracking-widest text-[#B8952A]">{doc.desc}</span>
                </span>
                <span className="shrink-0 rounded-full border border-[#B8952A]/40 px-3 py-1 text-xs font-semibold text-[#B8952A]">
                  PDF
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Practice Focus</p>
            <h2 className="text-3xl font-semibold text-[#0D1B2A]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Strategic, Practical, Result-Oriented Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceFocus.map((item) => (
              <div key={item} className="rounded-lg border border-[#EDE8DF] bg-[#F8F4EE] p-4">
                <div className="mb-3 h-0.5 w-8 bg-[#B8952A]" />
                <p className="text-sm font-medium leading-relaxed text-[#0D1B2A]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F4EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Vision & Mission</p>
            <h2 className="text-3xl font-semibold text-[#0D1B2A]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Clear Purpose. Practical Execution.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex h-full flex-col rounded-xl border border-[#EDE8DF] bg-white p-8 shadow-sm">
              <div className="mb-5 h-0.5 w-10 bg-[#B8952A]" />
              <h3 className="mb-4 text-2xl font-semibold text-[#0D1B2A]" style={{ fontFamily: 'Playfair Display, serif' }}>Our Vision</h3>
              <p className="text-sm leading-relaxed text-[#4B5563]">
                To build a modern, trusted, and strategically driven legal practice recognised for excellence in real estate, property, and commercial dispute resolution, where clients receive transparent, commercially intelligent, and long-term legal support.
              </p>
            </div>
            <div className="flex h-full flex-col rounded-xl border border-[#243B55] bg-[#0D1B2A] p-8 shadow-sm">
              <div className="mb-5 h-0.5 w-10 bg-[#B8952A]" />
              <h3 className="mb-4 text-2xl font-semibold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Our Mission</h3>
              <ul className="space-y-3">
                {missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8952A]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Beyond The Brief</p>
          <h2 className="text-3xl font-semibold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Professional Excellence With Social Responsibility
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Believing that professional excellence goes hand in hand with social responsibility, Adv. Meet Shah actively participates in community service through his association with the Leo Club of Kandivali Lokhandwala Township and the Lions Club of Bombay Lokhandwala Township. His engagement with academic and professional forums also reflects a continuing commitment to advocacy, dispute resolution, and professional development.
          </p>
        </div>
      </section>
    </>
  );
}
