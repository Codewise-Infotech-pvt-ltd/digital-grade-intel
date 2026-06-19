import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const industries = [
  'Banking & Financial Services',
  'Staffing & Recruitment',
  'Healthcare & Pharma',
  'Manufacturing',
  'IT / ITeS',
  'Insurance',
  'Telecommunications',
  'Education',
  'E-commerce',
  'Travel & Hospitality',
  'FMCG / FMCD',
  'Other',
]

const services = [
  'Criminal Background Check',
  'Education Verification',
  'Employment Verification',
  'Drug Testing',
  'Motor Vehicle Records',
  'Complete Background Package',
  'Custom Program',
]

function InputField({ label, id, type = 'text', required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium tracking-wide" style={{ color: '#94A3B8' }}>
        {label} {required && <span style={{ color: '#0D8A66' }}>*</span>}
      </label>
      {children}
    </div>
  )
}

const inputClass = `
  w-full px-4 py-3 text-sm rounded-lg border outline-none transition-all duration-200
  focus:border-teal-600 focus:ring-1 focus:ring-teal-600/30
`
const inputStyle = {
  backgroundColor: 'rgba(7,27,59,0.8)',
  borderColor: 'rgba(255,255,255,0.1)',
  color: '#F8FAFC',
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!formState.name.trim()) e.name = 'Name is required'
    if (!formState.company.trim()) e.company = 'Company is required'
    if (!formState.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) e.email = 'Valid email required'
    if (!formState.industry) e.industry = 'Please select your industry'
    if (!formState.service) e.service = 'Please select a service'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')

    try {
      const formData = new FormData()
      formData.append('access_key', 'YOUR_WEB3FORMS_KEY')
      formData.append('subject', `DGI Verification Consultation - ${formState.company}`)
      formData.append('from_name', 'DGI Website')
      formData.append('botcheck', '')
      Object.entries(formState).forEach(([key, val]) => formData.append(key, val))

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      if (data.success) {
        setStatus('success')
        setFormState({ name: '', company: '', email: '', phone: '', industry: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32"
      style={{ backgroundColor: '#0A2348' }}
    >
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(13,138,102,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Header + info */}
          <motion.div
            className="lg:col-span-2 flex flex-col justify-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#0D8A66' }}>
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: '#F8FAFC' }}>
              Request a Verification Consultation
            </h2>
            <p className="text-sm leading-relaxed mb-10" style={{ color: '#64748B' }}>
              Share your requirements and our enterprise team will design a screening program tailored to your compliance needs, industry, and hiring volume.
            </p>

            {/* Contact info blocks */}
            <div className="space-y-6">
              {[
                {
                  label: 'Enterprise Sales',
                  value: 'sales@digitalgradeint.com',
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                      <path d="M3 5H17M3 10H17M3 15H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  label: 'Support',
                  value: 'support@digitalgradeint.com',
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-3">
                  <div
                    className="mt-0.5 p-1.5 rounded"
                    style={{ backgroundColor: 'rgba(13,138,102,0.1)', color: '#0D8A66' }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs font-medium mb-0.5" style={{ color: '#64748B' }}>{info.label}</div>
                    <div className="text-sm" style={{ color: '#CBD5E1' }}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div
              className="mt-10 pt-8 border-t grid grid-cols-2 gap-4"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
              {[
                { label: 'FCRA Compliant', icon: '✓' },
                { label: 'Data Encrypted', icon: '✓' },
                { label: 'Audit Trails', icon: '✓' },
                { label: 'No Hidden Fees', icon: '✓' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <span className="text-xs font-bold" style={{ color: '#0D8A66' }}>{badge.icon}</span>
                  <span className="text-xs" style={{ color: '#64748B' }}>{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="rounded-xl border p-8"
              style={{
                backgroundColor: 'rgba(7,27,59,0.6)',
                borderColor: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-12 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                      style={{ backgroundColor: 'rgba(13,138,102,0.15)', border: '2px solid #0D8A66' }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13L9 17L19 7" stroke="#0D8A66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#F8FAFC' }}>
                      Request Submitted
                    </h3>
                    <p className="text-sm mb-8" style={{ color: '#64748B' }}>
                      Our enterprise team will be in touch within one business day.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-sm font-medium px-5 py-2.5 rounded border transition-all"
                      style={{ color: '#0D8A66', borderColor: 'rgba(13,138,102,0.4)' }}
                    >
                      Submit Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Hidden botcheck */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <div className="grid sm:grid-cols-2 gap-5">
                      <InputField label="Full Name" id="name" required>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className={inputClass}
                          style={{
                            ...inputStyle,
                            borderColor: errors.name ? '#ef4444' : inputStyle.borderColor
                          }}
                        />
                        {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
                      </InputField>

                      <InputField label="Company" id="company" required>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formState.company}
                          onChange={handleChange}
                          placeholder="Acme Corporation"
                          className={inputClass}
                          style={{
                            ...inputStyle,
                            borderColor: errors.company ? '#ef4444' : inputStyle.borderColor
                          }}
                        />
                        {errors.company && <span className="text-xs text-red-400">{errors.company}</span>}
                      </InputField>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <InputField label="Business Email" id="email" required>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className={inputClass}
                          style={{
                            ...inputStyle,
                            borderColor: errors.email ? '#ef4444' : inputStyle.borderColor
                          }}
                        />
                        {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
                      </InputField>

                      <InputField label="Phone Number" id="phone">
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className={inputClass}
                          style={inputStyle}
                        />
                      </InputField>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <InputField label="Industry" id="industry" required>
                        <select
                          id="industry"
                          name="industry"
                          value={formState.industry}
                          onChange={handleChange}
                          className={inputClass}
                          style={{
                            ...inputStyle,
                            borderColor: errors.industry ? '#ef4444' : inputStyle.borderColor
                          }}
                        >
                          <option value="" style={{ backgroundColor: '#0A2348' }}>Select Industry</option>
                          {industries.map((ind) => (
                            <option key={ind} value={ind} style={{ backgroundColor: '#0A2348' }}>{ind}</option>
                          ))}
                        </select>
                        {errors.industry && <span className="text-xs text-red-400">{errors.industry}</span>}
                      </InputField>

                      <InputField label="Service Needed" id="service" required>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          className={inputClass}
                          style={{
                            ...inputStyle,
                            borderColor: errors.service ? '#ef4444' : inputStyle.borderColor
                          }}
                        >
                          <option value="" style={{ backgroundColor: '#0A2348' }}>Select Service</option>
                          {services.map((svc) => (
                            <option key={svc} value={svc} style={{ backgroundColor: '#0A2348' }}>{svc}</option>
                          ))}
                        </select>
                        {errors.service && <span className="text-xs text-red-400">{errors.service}</span>}
                      </InputField>
                    </div>

                    <InputField label="Message" id="message">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Describe your hiring volume, specific requirements, or any compliance constraints..."
                        className={inputClass}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                      />
                    </InputField>

                    {status === 'error' && (
                      <div
                        className="text-sm p-3 rounded-lg border"
                        style={{
                          color: '#fca5a5',
                          backgroundColor: 'rgba(239,68,68,0.08)',
                          borderColor: 'rgba(239,68,68,0.2)',
                        }}
                      >
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white py-3.5 rounded-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ backgroundColor: '#0D8A66' }}
                      onMouseEnter={(e) => { if (status !== 'submitting') e.currentTarget.style.backgroundColor = '#14B86A' }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#0D8A66' }}
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Request Verification Consultation
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs" style={{ color: '#475569' }}>
                      No commitment required. Our team responds within one business day.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
