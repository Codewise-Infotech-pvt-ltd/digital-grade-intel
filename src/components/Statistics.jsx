import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const stats = [
  {
    value: 50000,
    suffix: '+',
    label: 'Verifications Completed',
    sublabel: 'Across all check types',
    decimals: 0,
    separator: ',',
  },
  {
    value: 300,
    suffix: '+',
    label: 'Enterprise Clients',
    sublabel: 'Across 11 industries',
    decimals: 0,
    separator: '',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Accuracy Rate',
    sublabel: 'Source-verified results',
    decimals: 0,
    separator: '',
  },
  {
    value: 24,
    suffix: ' hrs',
    label: 'Average Turnaround',
    sublabel: 'For standard checks',
    decimals: 0,
    separator: '',
  },
]

function StatCard({ stat, inView }) {
  return (
    <div className="flex flex-col items-center text-center p-8">
      {/* Value */}
      <div className="flex items-baseline gap-0.5 mb-2">
        <span
          className="text-5xl lg:text-6xl font-bold tabular-nums"
          style={{ color: '#F8FAFC' }}
        >
          {inView ? (
            <CountUp
              end={stat.value}
              duration={2.5}
              separator={stat.separator}
              decimals={stat.decimals}
              useEasing
            />
          ) : '0'}
        </span>
        <span className="text-3xl font-bold" style={{ color: '#0D8A66' }}>
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <div className="text-sm font-semibold mb-1" style={{ color: '#CBD5E1' }}>
        {stat.label}
      </div>
      <div className="text-xs" style={{ color: '#475569' }}>
        {stat.sublabel}
      </div>
    </div>
  )
}

export default function Statistics() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section
      className="relative py-20 border-y"
      style={{
        backgroundColor: '#071B3B',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      {/* Subtle background accent */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(13,138,102,0.04) 0%, transparent 100%)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#0D8A66' }}>
            By the Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#F8FAFC' }}>
            Proven at Enterprise Scale
          </h2>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.06]"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <StatCard stat={stat} inView={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
