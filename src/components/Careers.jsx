import { motion } from 'framer-motion'

const openings = [
  { title: 'Senior Verification Analyst', dept: 'Operations', location: 'Remote / India' },
  { title: 'Enterprise Account Executive', dept: 'Sales', location: 'Remote / US' },
  { title: 'Compliance & Legal Specialist', dept: 'Legal', location: 'Remote' },
  { title: 'Technology Integration Engineer', dept: 'Engineering', location: 'Remote' },
]

export default function Careers() {
  return (
    <section
      id="careers"
      className="relative py-20 lg:py-24"
      style={{ backgroundColor: '#071B3B' }}
    >
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#0D8A66' }}>
              Join DGI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: '#F8FAFC' }}>
              Build the Future of<br />Verification Intelligence
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#64748B' }}>
              We are a lean, mission-driven team building enterprise-grade verification technology. If you are driven by accuracy, compliance, and excellence — we want to hear from you.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Remote-first', 'Competitive compensation', 'Mission-driven', 'Growth-stage'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded border"
                  style={{
                    color: '#94A3B8',
                    borderColor: 'rgba(255,255,255,0.1)',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded border transition-all duration-200 hover:bg-white/05"
              style={{ color: '#0D8A66', borderColor: 'rgba(13,138,102,0.4)' }}
            >
              View Opportunities
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Right: Open roles */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {openings.map((role, i) => (
              <motion.div
                key={role.title}
                className="flex items-center justify-between p-5 rounded-lg border transition-all duration-200 group cursor-default"
                style={{
                  backgroundColor: 'rgba(10,35,72,0.6)',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                whileHover={{
                  borderColor: 'rgba(13,138,102,0.3)',
                  backgroundColor: 'rgba(13,138,102,0.04)',
                  transition: { duration: 0.15 }
                }}
              >
                <div>
                  <div className="text-sm font-semibold mb-1" style={{ color: '#F8FAFC' }}>
                    {role.title}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs" style={{ color: '#475569' }}>{role.dept}</span>
                    <span className="text-xs" style={{ color: '#334155' }}>•</span>
                    <span className="text-xs" style={{ color: '#475569' }}>{role.location}</span>
                  </div>
                </div>
                <div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: '#0D8A66' }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
