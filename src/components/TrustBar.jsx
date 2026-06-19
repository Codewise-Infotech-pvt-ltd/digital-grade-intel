import { motion } from 'framer-motion'

const industries = [
  'Banking & Finance',
  'Healthcare',
  'Information Technology',
  'Insurance',
  'Retail',
  'Telecom',
  'Manufacturing',
  'Staffing & Recruitment',
]

export default function TrustBar() {
  return (
    <section
      className="relative py-12 border-y"
      style={{
        backgroundColor: '#0A2348',
        borderColor: 'rgba(255,255,255,0.06)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#64748B' }}>
              Trusted Across
            </p>
          </div>

          <div
            className="w-px h-8 hidden md:block"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
          />

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-3">
            {industries.map((industry, i) => (
              <motion.span
                key={industry}
                className="text-sm font-medium tracking-wide"
                style={{ color: '#94A3B8' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                {industry}
                {i < industries.length - 1 && (
                  <span className="ml-8 opacity-0 md:opacity-100 text-white/10 select-none">|</span>
                )}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
