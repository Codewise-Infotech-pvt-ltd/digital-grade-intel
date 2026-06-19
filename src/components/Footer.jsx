import { motion } from 'framer-motion'

const footerLinks = {
  Solutions: [
    'Criminal Background Check',
    'Education Verification',
    'Employment Verification',
    'Drug Testing',
    'Motor Vehicle Records',
    'Federal Criminal Search',
  ],
  Industries: [
    'Banking & Finance',
    'Healthcare',
    'Staffing & Recruitment',
    'IT / ITeS',
    'Insurance',
    'Manufacturing',
  ],
  Company: [
    'About Us',
    'Careers',
    'Contact Us',
    'Privacy Policy',
    'Terms of Service',
    'FCRA Summary',
  ],
}

function DGILogoFooter() {
  return (
    <img
      src="/LOGO_1.png"
      alt="Digital Grade Intelligence"
      className="h-10 w-auto object-contain rounded"
    />
  )
}

export default function Footer() {
  const scrollTo = (href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative border-t"
      style={{
        backgroundColor: '#071B3B',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <DGILogoFooter />
            <p className="mt-4 text-sm leading-relaxed max-w-xs" style={{ color: '#475569' }}>
              Enterprise-grade background verification built on source-level evidence. Trusted by 300+ organizations across 11 industries.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded border"
                style={{
                  color: '#0D8A66',
                  borderColor: 'rgba(13,138,102,0.25)',
                  backgroundColor: 'rgba(13,138,102,0.06)',
                }}
              >
                <span className="w-1 h-1 rounded-full bg-current" />
                FCRA Compliant
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded border"
                style={{
                  color: '#64748B',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
              >
                SOC 2 Aligned
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#94A3B8' }}>
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo('#contact')}
                      className="text-xs text-left transition-colors duration-200 hover:text-white"
                      style={{ color: '#475569' }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs" style={{ color: '#334155' }}>
            © {new Date().getFullYear()} Digital Grade Intelligence. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs" style={{ color: '#334155' }}>Privacy Policy</span>
            <span className="text-xs" style={{ color: '#334155' }}>Terms of Service</span>
            <span className="text-xs" style={{ color: '#334155' }}>FCRA Disclosure</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
