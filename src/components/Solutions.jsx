import { motion } from 'framer-motion'

function CriminalIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect x="8" y="6" width="24" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 13H27M13 18H27M13 23H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="29" cy="28" r="5" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M27 28L28.5 29.5L31.5 26.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function NationwideIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 20H32M20 8C20 8 16 14 16 20C16 26 20 32 20 32M20 8C20 8 24 14 24 20C24 26 20 32 20 32" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" />
    </svg>
  )
}

function CountyIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M20 6L32 12V22C32 28 26 33 20 35C14 33 8 28 8 22V12L20 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M15 20L18.5 23.5L25 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StatewideIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect x="6" y="8" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 30H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 30V34M26 30V34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 18L19.5 19.5L22.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FederalIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M8 16H32M8 20H32M8 24H32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 6L32 12H8L20 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 28V32M16 28V32M24 28V32M30 28V32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 32H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function PacerIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect x="8" y="6" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12H22M12 16H22M12 20H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="28" cy="28" r="7" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
      <path d="M25.5 28H30.5M28 25.5V30.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function EducationIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M20 8L34 15L20 22L6 15L20 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 17.5V26C10 26 14 30 20 30C26 30 30 26 30 26V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34 15V23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="34" cy="24.5" r="1.5" fill="currentColor" />
    </svg>
  )
}

function EmploymentIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect x="6" y="14" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 14V11C14 9 15.5 8 17 8H23C24.5 8 26 9 26 11V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 22H34" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="22" r="3" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function MVRIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect x="4" y="14" width="32" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 21H36" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="11" cy="32" r="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="29" cy="32" r="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 14L11 8H29L32 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function DrugIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect x="14" y="6" width="12" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="10" width="18" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 20H29" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 24V28M18 26H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const solutions = [
  { icon: CriminalIcon, title: 'National Criminal Records', desc: 'Comprehensive nationwide criminal history search across all 50 states with real-time court access.' },
  { icon: NationwideIcon, title: 'Nationwide Search & Watchlists', desc: 'Instant screening against federal, state, and international watchlists, sanctions, and exclusion lists.' },
  { icon: CountyIcon, title: 'County Criminal Searches', desc: 'Direct courthouse source-level research for most accurate county-level criminal records.' },
  { icon: StatewideIcon, title: 'Statewide Criminal Records', desc: 'State repository searches for complete criminal history within jurisdiction boundaries.' },
  { icon: FederalIcon, title: 'Federal Criminal Search', desc: 'Federal court district searches including PACER integration for federal offense history.' },
  { icon: PacerIcon, title: 'PACER Court Searches', desc: 'Direct electronic access to federal court case information through the PACER system.' },
  { icon: EducationIcon, title: 'Education Verification', desc: 'Primary source verification of degrees, diplomas, certifications, and academic credentials.' },
  { icon: EmploymentIcon, title: 'Employment Verification', desc: 'Confirmation of employment history, titles, dates, and eligibility for rehire status.' },
  { icon: MVRIcon, title: 'Motor Vehicle Records', desc: 'Driving history, license status, violations, and suspensions from state DMV sources.' },
  { icon: DrugIcon, title: 'Drug Testing', desc: 'Comprehensive drug screening programs including pre-employment, random, and post-incident testing.' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } }
}

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative py-24 lg:py-32"
      style={{ backgroundColor: '#071B3B' }}
    >
      <div className="absolute inset-0 bg-grid opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#0D8A66' }}>
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: '#F8FAFC' }}>
            Comprehensive Background<br />Verification Solutions
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
            Every check is performed at the source. No aggregated databases. No stale data. Only verified, court-level intelligence.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              variants={cardVariants}
              className="group relative p-6 rounded-lg border cursor-default transition-all duration-300"
              style={{
                backgroundColor: '#F8FAFC',
                borderColor: 'rgba(15, 23, 42, 0.08)',
              }}
              whileHover={{
                y: -4,
                boxShadow: '0 20px 40px rgba(7,27,59,0.15)',
                transition: { duration: 0.2 }
              }}
            >
              {/* Icon */}
              <div
                className="inline-flex p-2.5 rounded-lg mb-4 transition-colors duration-200"
                style={{ backgroundColor: 'rgba(13,138,102,0.08)', color: '#0D8A66' }}
              >
                <solution.icon />
              </div>

              {/* Title */}
              <h3
                className="text-sm font-semibold leading-snug mb-2 transition-colors duration-200 group-hover:text-teal-700"
                style={{ color: '#0F172A' }}
              >
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>
                {solution.desc}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: '#0D8A66' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
