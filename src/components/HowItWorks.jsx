import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Submit Candidate Details',
    desc: 'Securely submit candidate information through our enterprise portal or direct API integration. Consent management and data encryption handled automatically.',
    detail: 'API & Portal Access',
  },
  {
    number: '02',
    title: 'Verification Initiated',
    desc: 'Our system assigns the verification package based on your configured screening program and routes checks to the appropriate source-level partners.',
    detail: 'Automated Routing',
  },
  {
    number: '03',
    title: 'Source-Level Checks',
    desc: 'Direct access to courts, institutions, employers, and official registries. No third-party databases. Every check goes to the primary source.',
    detail: 'Primary Source Access',
  },
  {
    number: '04',
    title: 'Quality Review',
    desc: 'Trained verification specialists review all findings for accuracy, completeness, and compliance before any report is released.',
    detail: 'Expert Analyst Review',
  },
  {
    number: '05',
    title: 'Final Report Delivery',
    desc: 'Clean, structured verification reports delivered to your portal within agreed turnaround windows. Audit trail and raw evidence preserved.',
    detail: 'Structured Intelligence',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="relative py-24 lg:py-32"
      style={{ backgroundColor: '#0A2348' }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#0D8A66' }}>
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: '#F8FAFC' }}>
            How Verification Works
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
            A structured, five-stage verification workflow engineered for accuracy, speed, and full auditability.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{ backgroundColor: 'rgba(13,138,102,0.2)' }}
          />

          {/* Animated progress line */}
          <motion.div
            className="hidden lg:block absolute top-12 left-0 h-px origin-left"
            style={{ backgroundColor: '#0D8A66' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
          />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative flex flex-col items-start lg:items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                {/* Mobile left border */}
                <div
                  className="lg:hidden absolute left-4 top-10 bottom-0 w-px"
                  style={{ backgroundColor: 'rgba(13,138,102,0.15)' }}
                />

                {/* Step node */}
                <div className="relative z-10 flex items-center justify-center mb-6 ml-2 lg:ml-0">
                  <motion.div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors duration-300"
                    style={{
                      backgroundColor: '#071B3B',
                      borderColor: '#0D8A66',
                      color: '#0D8A66',
                    }}
                    whileInView={{
                      backgroundColor: ['#071B3B', 'rgba(13,138,102,0.2)', '#071B3B'],
                    }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.8 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="pl-6 lg:pl-0 lg:text-center">
                  <div
                    className="text-xs font-semibold tracking-widest uppercase mb-2"
                    style={{ color: 'rgba(13,138,102,0.7)' }}
                  >
                    {step.detail}
                  </div>
                  <h3 className="text-sm font-semibold mb-2 leading-snug" style={{ color: '#F8FAFC' }}>
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
