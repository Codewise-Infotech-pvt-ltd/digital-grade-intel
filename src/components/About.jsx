import { motion } from 'framer-motion'

const results = [
  { metric: 'FCRA', label: 'Compliant Process' },
  { metric: 'ISO', label: 'Data Security Standards' },
  { metric: '24hr', label: 'Standard Delivery SLA' },
  { metric: '100%', label: 'Source-Level Evidence' },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32"
      style={{ backgroundColor: '#0A2348' }}
    >
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#0D8A66' }}>
              About DGI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6" style={{ color: '#F8FAFC' }}>
              The Verification<br />Intelligence Standard
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: '#CBD5E1' }}>Who We Are</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                  Digital Grade Intelligence is an enterprise background verification company built on the principle that hiring decisions deserve real intelligence — not aggregated database lookups. Founded by compliance professionals and technology specialists, we bridge the gap between speed and accuracy.
                </p>
              </div>

              <div
                className="h-px"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
              />

              <div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: '#CBD5E1' }}>What We Do</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                  We deliver primary-source background verification across criminal, identity, educational, and employment dimensions. Every report is built from direct court access, institution contact, and official record retrieval — no shortcuts, no databases.
                </p>
              </div>

              <div
                className="h-px"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
              />

              <div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: '#CBD5E1' }}>What Makes Us Different</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                  Source-level evidence. Compliance-first design. Dedicated analyst review. We operate as a true extension of your HR and compliance team — not a background check vendor you submit a form to and wait.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Results grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Core results */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {results.map((result, i) => (
                <motion.div
                  key={result.metric}
                  className="p-6 rounded-lg border"
                  style={{
                    backgroundColor: 'rgba(7,27,59,0.5)',
                    borderColor: 'rgba(255,255,255,0.06)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <div className="text-2xl font-bold mb-1" style={{ color: '#0D8A66' }}>
                    {result.metric}
                  </div>
                  <div className="text-xs font-medium" style={{ color: '#94A3B8' }}>
                    {result.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission statement */}
            <motion.div
              className="p-6 rounded-lg border-l-2"
              style={{
                backgroundColor: 'rgba(13,138,102,0.05)',
                borderLeftColor: '#0D8A66',
                borderTop: '1px solid rgba(13,138,102,0.15)',
                borderRight: '1px solid rgba(13,138,102,0.15)',
                borderBottom: '1px solid rgba(13,138,102,0.15)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <p className="text-sm leading-relaxed italic" style={{ color: '#94A3B8' }}>
                "We believe that every organization deserves to make hiring decisions based on verified truth — not assumptions, not approximations. That is the Digital Grade Intelligence standard."
              </p>
              <div className="mt-4 text-xs font-semibold" style={{ color: '#0D8A66' }}>
                DGI Leadership Team
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
