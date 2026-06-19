import { motion } from 'framer-motion'

function SourceIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
      <path d="M16 5V11M16 21V27M5 16H11M21 16H27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SpeedIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path d="M5 20C5 13.373 10.373 8 17 8C23.627 8 29 13.373 29 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 20L22 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="17" cy="20" r="2.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 22L7 24M25 22L27 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ComplianceIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path d="M16 4L27 8.5V17C27 22.5 22 27 16 29C10 27 5 22.5 5 17V8.5L16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11.5 17L14.5 20L21 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SecurityIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <rect x="8" y="14" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 14V10C11 7.239 13.239 5 16 5C18.761 5 21 7.239 21 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="20.5" r="2" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.4 7.4L11.2 11.2M20.8 20.8L24.6 24.6M24.6 7.4L20.8 11.2M11.2 20.8L7.4 24.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const pillars = [
  {
    Icon: SourceIcon,
    title: 'Source-Level Verification',
    desc: 'We go directly to primary sources — courts, institutions, and official records — ensuring data accuracy that aggregated databases cannot match.',
  },
  {
    Icon: SpeedIcon,
    title: 'Fast Turnaround Time',
    desc: 'Most verifications completed within 24-48 hours through our optimized workflow automation and direct source integrations.',
  },
  {
    Icon: ComplianceIcon,
    title: 'Compliance-First Approach',
    desc: 'Fully FCRA-compliant processes with built-in adverse action workflows, consent management, and audit-ready documentation.',
  },
  {
    Icon: SecurityIcon,
    title: 'Enterprise Security',
    desc: 'Bank-grade encryption, SOC 2 aligned infrastructure, role-based access control, and complete data sovereignty for enterprise clients.',
  },
  {
    Icon: SupportIcon,
    title: 'Dedicated Support',
    desc: 'Named account managers and expert verification specialists available throughout your engagement — not a ticket queue.',
  },
]

export default function WhyDGI() {
  return (
    <section
      className="relative py-24 lg:py-32"
      style={{ backgroundColor: '#0A2348' }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#0D8A66' }}>
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: '#F8FAFC' }}>
            The Intelligence Advantage
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
            Five foundational pillars that separate Digital Grade Intelligence from every other verification provider.
          </p>
        </motion.div>

        {/* Horizontal pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="flex flex-col items-start p-6 rounded-lg border transition-all duration-300 group cursor-default"
              style={{
                backgroundColor: 'rgba(7,27,59,0.5)',
                borderColor: 'rgba(255,255,255,0.06)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{
                borderColor: 'rgba(13,138,102,0.4)',
                backgroundColor: 'rgba(13,138,102,0.05)',
                transition: { duration: 0.2 }
              }}
            >
              {/* Step number */}
              <div
                className="text-xs font-bold tracking-widest mb-4 font-mono"
                style={{ color: 'rgba(13,138,102,0.4)' }}
              >
                0{i + 1}
              </div>

              {/* Icon */}
              <div
                className="p-2.5 rounded-lg mb-4 transition-colors duration-200"
                style={{ backgroundColor: 'rgba(13,138,102,0.1)', color: '#0D8A66' }}
              >
                <pillar.Icon />
              </div>

              {/* Content */}
              <h3 className="text-sm font-semibold mb-2 leading-snug" style={{ color: '#F8FAFC' }}>
                {pillar.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
