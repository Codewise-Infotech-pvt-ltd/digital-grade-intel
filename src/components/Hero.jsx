import { motion } from 'framer-motion'

function VerificationIntelligenceGraphic() {
  return (
    <svg
      viewBox="0 0 520 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0D8A66" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#071B3B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14B86A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0D8A66" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D8A66" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#14B86A" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow-filter">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="soft-glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="circle-clip">
          <circle cx="260" cy="240" r="90" />
        </clipPath>
      </defs>

      {/* Background ambient glow */}
      <circle cx="260" cy="240" r="200" fill="url(#core-glow)" />

      {/* Outer ring - dashed */}
      <motion.circle
        cx="260" cy="240" r="185"
        stroke="rgba(13,138,102,0.15)"
        strokeWidth="1"
        strokeDasharray="4 8"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '260px 240px' }}
      />

      {/* Second ring */}
      <motion.circle
        cx="260" cy="240" r="150"
        stroke="rgba(13,138,102,0.2)"
        strokeWidth="1"
        strokeDasharray="2 6"
        fill="none"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '260px 240px' }}
      />

      {/* Third ring */}
      <circle cx="260" cy="240" r="115" stroke="rgba(13,138,102,0.12)" strokeWidth="1" fill="none" />

      {/* Connection lines to satellite nodes */}
      {/* Court Records - top */}
      <motion.line x1="260" y1="150" x2="260" y2="80"
        stroke="url(#line-grad)" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2 }}
      />
      {/* Identity - right */}
      <motion.line x1="365" y1="200" x2="420" y2="160"
        stroke="url(#line-grad)" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      />
      {/* Employment - bottom right */}
      <motion.line x1="340" y1="310" x2="400" y2="360"
        stroke="url(#line-grad)" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
      />
      {/* Education - bottom left */}
      <motion.line x1="185" y1="310" x2="130" y2="370"
        stroke="url(#line-grad)" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.0, duration: 1.2 }}
      />
      {/* Database - left */}
      <motion.line x1="150" y1="210" x2="80" y2="180"
        stroke="url(#line-grad)" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
      />

      {/* Data flow particles along lines */}
      <motion.circle
        cx="0" cy="0" r="3" fill="#14B86A" filter="url(#glow-filter)"
        animate={{
          x: [260, 260],
          y: [150, 80],
          opacity: [0, 1, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="0" cy="0" r="3" fill="#14B86A" filter="url(#glow-filter)"
        animate={{
          x: [365, 420],
          y: [200, 160],
          opacity: [0, 1, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
      />
      <motion.circle
        cx="0" cy="0" r="3" fill="#14B86A" filter="url(#glow-filter)"
        animate={{
          x: [150, 80],
          y: [210, 180],
          opacity: [0, 1, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
      />

      {/* Central verification core */}
      <motion.circle
        cx="260" cy="240" r="72"
        fill="#0A2348"
        stroke="rgba(13,138,102,0.5)"
        strokeWidth="1.5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ transformOrigin: '260px 240px' }}
      />

      {/* Central shield icon */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ transformOrigin: '260px 240px' }}
      >
        {/* Shield shape */}
        <path
          d="M260 205 L285 215 L285 238 Q285 260 260 270 Q235 260 235 238 L235 215 Z"
          fill="rgba(13,138,102,0.15)"
          stroke="#0D8A66"
          strokeWidth="1.5"
        />
        {/* Checkmark */}
        <path
          d="M248 240 L256 248 L274 230"
          stroke="#14B86A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Central label */}
        <text x="260" y="285" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="500" letterSpacing="1">VERIFIED</text>
      </motion.g>

      {/* Pulse rings */}
      <motion.circle
        cx="260" cy="240" r="72"
        stroke="#0D8A66"
        strokeWidth="1"
        fill="none"
        animate={{ r: [72, 100], opacity: [0.5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
      />
      <motion.circle
        cx="260" cy="240" r="72"
        stroke="#0D8A66"
        strokeWidth="1"
        fill="none"
        animate={{ r: [72, 100], opacity: [0.5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 1.25 }}
      />

      {/* Satellite Node: Court Records - Top */}
      <motion.g
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <rect x="222" y="40" width="76" height="44" rx="6"
          fill="#0A2348" stroke="rgba(13,138,102,0.4)" strokeWidth="1"
        />
        <rect x="232" y="52" width="24" height="2" rx="1" fill="#0D8A66" />
        <rect x="232" y="57" width="36" height="1.5" rx="0.75" fill="rgba(148,163,184,0.4)" />
        <rect x="232" y="61" width="28" height="1.5" rx="0.75" fill="rgba(148,163,184,0.3)" />
        <circle cx="278" cy="56" r="5" fill="rgba(13,138,102,0.2)" stroke="#0D8A66" strokeWidth="1" />
        <text x="260" y="95" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="Inter, sans-serif" letterSpacing="0.5">COURT RECORDS</text>
      </motion.g>

      {/* Satellite Node: Identity Verification - Right */}
      <motion.g
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <rect x="418" y="128" width="76" height="44" rx="6"
          fill="#0A2348" stroke="rgba(13,138,102,0.4)" strokeWidth="1"
        />
        <circle cx="437" cy="148" r="8" fill="rgba(13,138,102,0.15)" stroke="#0D8A66" strokeWidth="1" />
        <circle cx="437" cy="145" r="3" fill="#0D8A66" opacity="0.6" />
        <path d="M430 157 Q437 153 444 157" stroke="#0D8A66" strokeWidth="1" fill="none" opacity="0.6" />
        <rect x="450" y="143" width="30" height="2" rx="1" fill="#0D8A66" />
        <rect x="450" y="148" width="22" height="1.5" rx="0.75" fill="rgba(148,163,184,0.4)" />
        <rect x="450" y="152" width="26" height="1.5" rx="0.75" fill="rgba(148,163,184,0.3)" />
        <text x="456" y="182" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="Inter, sans-serif" letterSpacing="0.5">IDENTITY</text>
      </motion.g>

      {/* Satellite Node: Employment - Bottom Right */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <rect x="386" y="350" width="76" height="44" rx="6"
          fill="#0A2348" stroke="rgba(13,138,102,0.4)" strokeWidth="1"
        />
        <rect x="396" y="360" width="16" height="2" rx="1" fill="#0D8A66" />
        <rect x="396" y="365" width="36" height="1.5" rx="0.75" fill="rgba(148,163,184,0.4)" />
        <rect x="396" y="369" width="24" height="1.5" rx="0.75" fill="rgba(148,163,184,0.3)" />
        <rect x="396" y="373" width="30" height="1.5" rx="0.75" fill="rgba(148,163,184,0.25)" />
        <circle cx="448" cy="368" r="6" fill="rgba(20,184,106,0.15)" stroke="#14B86A" strokeWidth="1" />
        <path d="M445 368 L447 370 L452 365" stroke="#14B86A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="424" y="403" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="Inter, sans-serif" letterSpacing="0.5">EMPLOYMENT</text>
      </motion.g>

      {/* Satellite Node: Education - Bottom Left */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <rect x="62" y="358" width="76" height="44" rx="6"
          fill="#0A2348" stroke="rgba(13,138,102,0.4)" strokeWidth="1"
        />
        <path d="M100 368 L120 376 L100 384 L80 376 Z" fill="rgba(13,138,102,0.2)" stroke="#0D8A66" strokeWidth="1" />
        <text x="100" y="412" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="Inter, sans-serif" letterSpacing="0.5">EDUCATION</text>
      </motion.g>

      {/* Satellite Node: Data Sources - Left */}
      <motion.g
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <rect x="24" y="148" width="76" height="44" rx="6"
          fill="#0A2348" stroke="rgba(13,138,102,0.4)" strokeWidth="1"
        />
        <rect x="34" y="157" width="36" height="5" rx="1.5" fill="rgba(13,138,102,0.3)" stroke="#0D8A66" strokeWidth="0.75" />
        <rect x="34" y="165" width="36" height="5" rx="1.5" fill="rgba(13,138,102,0.2)" stroke="#0D8A66" strokeWidth="0.75" />
        <rect x="34" y="173" width="36" height="5" rx="1.5" fill="rgba(13,138,102,0.15)" stroke="#0D8A66" strokeWidth="0.75" />
        <circle cx="78" cy="165" r="5" fill="#0A2348" stroke="#0D8A66" strokeWidth="1" />
        <circle cx="78" cy="165" r="2" fill="#0D8A66" />
        <text x="62" y="202" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="Inter, sans-serif" letterSpacing="0.5">DATA SOURCES</text>
      </motion.g>

      {/* Floating mini data points */}
      <motion.circle cx="180" cy="140" r="2" fill="#0D8A66"
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0 }}
      />
      <motion.circle cx="340" cy="130" r="1.5" fill="#14B86A"
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.7 }}
      />
      <motion.circle cx="380" cy="280" r="2" fill="#0D8A66"
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.4 }}
      />
      <motion.circle cx="145" cy="300" r="1.5" fill="#14B86A"
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2.1 }}
      />
      <motion.circle cx="200" cy="380" r="2" fill="#0D8A66"
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.35 }}
      />

      {/* Scan line effect */}
      <motion.rect
        x="170" y="0" width="180" height="3"
        fill="rgba(13,138,102,0.15)"
        clipPath="url(#circle-clip)"
        animate={{ y: [150, 330, 150] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      {/* Cross grid overlay on core */}
      <g clipPath="url(#circle-clip)">
        {[180, 210, 240, 270, 300, 330].map((y, i) => (
          <line key={i} x1="170" y1={y} x2="350" y2={y} stroke="rgba(13,138,102,0.06)" strokeWidth="0.5" />
        ))}
        {[185, 215, 245, 275, 305, 335].map((x, i) => (
          <line key={i} x1={x} y1="150" x2={x} y2="330" stroke="rgba(13,138,102,0.06)" strokeWidth="0.5" />
        ))}
      </g>

      {/* Status dots on rim */}
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const x = 260 + 115 * Math.cos(rad)
        const y = 240 + 115 * Math.sin(rad)
        return (
          <motion.circle
            key={i}
            cx={x} cy={y} r="3"
            fill="#0D8A66"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          />
        )
      })}
    </svg>
  )
}

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ backgroundColor: '#071B3B' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #071B3B 100%)'
        }}
      />

      {/* Subtle left glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(13,138,102,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span
                className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded border"
                style={{
                  color: '#0D8A66',
                  borderColor: 'rgba(13,138,102,0.3)',
                  backgroundColor: 'rgba(13,138,102,0.08)'
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                Enterprise Verification Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{ color: '#F8FAFC' }}
            >
              Hire With{' '}
              <span className="text-gradient-teal">Confidence.</span>
              <br />
              Verify With{' '}
              <span className="text-gradient-teal">Intelligence.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed mb-10"
              style={{ color: '#94A3B8' }}
            >
              Fast, accurate and compliant background verification solutions built on source-level evidence and enterprise-grade verification workflows.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white px-7 py-3.5 rounded transition-all duration-200"
                style={{ backgroundColor: '#0D8A66' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#14B86A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0D8A66'}
              >
                Start Free Trial
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 text-sm font-medium px-7 py-3.5 rounded border transition-all duration-200 hover:bg-white/05"
                style={{
                  color: '#CBD5E1',
                  borderColor: 'rgba(255,255,255,0.15)'
                }}
              >
                Talk to Sales
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-8 border-t flex flex-wrap gap-6"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
              {[
                { label: '50,000+', sub: 'Verifications' },
                { label: '300+', sub: 'Clients' },
                { label: '98%', sub: 'Accuracy Rate' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-bold" style={{ color: '#F8FAFC' }}>{stat.label}</div>
                  <div className="text-xs mt-0.5 tracking-wide" style={{ color: '#64748B' }}>{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Verification Intelligence Graphic */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="w-full max-w-lg aspect-square">
              <VerificationIntelligenceGraphic />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to bottom, transparent, #071B3B)' }}
      />
    </section>
  )
}
