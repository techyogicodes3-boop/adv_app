import {
  CONTACT_EMAIL,
  GOOGLE_BUSINESS_URL,
  MAP_EMBED_URL,
  OFFICE_ADDRESS,
  SOCIAL_LINKS,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '@/lib/constants';

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0D1B2A] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Us</h1>
          <p className="text-gray-400 text-base max-w-xl mx-auto">For confidential legal consultation, reach out through any of the channels below. All initial enquiries are treated with strict confidentiality.</p>
        </div>
      </section>

      <section className="py-20 bg-[#F8F4EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Contact Details</p>
              <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Reach Out Directly</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0D1B2A] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#B8952A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1B2A] text-sm mb-1">Office Address</p>
                    <p className="text-[#6B7280] text-sm leading-relaxed text-justify">
                      Adv. Meet Shah & Associates<br />
                      {OFFICE_ADDRESS}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0D1B2A] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#B8952A]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1B2A] text-sm mb-1">WhatsApp</p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#B8952A] text-sm hover:underline">
                      {WHATSAPP_DISPLAY}
                    </a>
                    <p className="text-[#6B7280] text-xs mt-0.5">Mon–Sat, 10am–6pm IST</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0D1B2A] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#B8952A]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1B2A] text-sm mb-1">Google Business</p>
                    <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="text-[#B8952A] text-sm hover:underline">
                      View on Google
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0D1B2A] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#B8952A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1B2A] text-sm mb-1">Email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#B8952A] text-sm hover:underline break-all">{CONTACT_EMAIL}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0D1B2A] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#B8952A]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1B2A] text-sm mb-1">Social Media</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#B8952A] hover:underline">LinkedIn</a>
                      <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-[#B8952A] hover:underline">Facebook</a>
                      <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-[#B8952A] hover:underline">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-white rounded-lg p-5 border border-[#EDE8DF] border-l-4 border-l-[#B8952A]">
                <p className="text-xs text-[#6B7280] leading-relaxed">All communications are strictly confidential. Reaching out does not create an advocate-client relationship. This website is for informational purposes only as per Bar Council of India guidelines.</p>
              </div>
            </div>

            <div>
              <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Location</p>
              <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Find Us</h2>
              <div className="rounded-xl overflow-hidden shadow-lg border border-[#EDE8DF] h-72 sm:h-96">
                <iframe
                  title="Adv. Meet Shah & Associates Location"
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-xs text-[#6B7280] mt-3 text-center leading-relaxed px-2">
                {OFFICE_ADDRESS}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
