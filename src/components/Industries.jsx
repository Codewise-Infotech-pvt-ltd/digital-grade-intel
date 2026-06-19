import { motion } from 'framer-motion'

const industries = [
  {
    name: 'Banking & Financial Services',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Rigorous compliance and risk screening for regulated environments',
  },
  {
    name: 'Staffing & Recruitment',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Rapid, scalable verification for high-volume hiring operations',
  },
  {
    name: 'Healthcare & Pharma',
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'License verification, OIG exclusions, and credential validation',
  },
  {
    name: 'Manufacturing',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Safety-critical background screening for plant-floor personnel',
  },
  {
    name: 'IT / ITeS',
    image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Technical credential verification and security clearance checks',
  },
  {
    name: 'Insurance',
    image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Agent licensing, sanctions screening, and fraud prevention',
  },
  {
    name: 'Telecommunications',
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Field technician screening and regulatory compliance checks',
  },
  {
    name: 'Education',
    image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Child safety compliance and faculty credential verification',
  },
  {
    name: 'E-commerce',
    image: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Logistics, warehouse, and customer-facing staff screening at scale',
  },
  {
    name: 'Travel & Hospitality',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Guest-facing role screening with fast turnaround for seasonal hiring',
  },
  {
    name: 'FMCG / FMCD',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Distribution network and supply chain workforce verification',
  },
]

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative py-24 lg:py-32"
      style={{ backgroundColor: '#071B3B' }}
    >
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#0D8A66' }}>
            Sectors We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: '#F8FAFC' }}>
            Industry-Specific<br />Verification Programs
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
            Purpose-built screening protocols aligned to the compliance demands and risk profiles of every major sector.
          </p>
        </motion.div>

        {/* Industry grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              className="relative group overflow-hidden rounded-lg cursor-default"
              style={{ height: '220px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              {/* Background image */}
              <motion.img
                src={industry.image}
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />

              {/* Dark overlay - base */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to top, rgba(7,27,59,0.95) 0%, rgba(7,27,59,0.5) 50%, rgba(7,27,59,0.2) 100%)'
                }}
              />

              {/* Hover teal accent overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(13,138,102,0.12)' }}
              />

              {/* Top-left dot indicator */}
              <div
                className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full opacity-60"
                style={{ backgroundColor: '#14B86A' }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-sm font-semibold leading-snug mb-1" style={{ color: '#F8FAFC' }}>
                  {industry.name}
                </h3>
                <p
                  className="text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: '#94A3B8' }}
                >
                  {industry.desc}
                </p>
              </div>

              {/* Bottom border accent on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: '#0D8A66' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
