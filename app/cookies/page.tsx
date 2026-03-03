'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function CookiePolicy() {
  const sections = [
    {
      title: '1. What Are Cookies?',
      content: [
        'Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.',
        'Cookies help us understand how you use our website and improve your experience.',
      ],
    },
    {
      title: '2. Types of Cookies We Use',
      content: [
        'Essential Cookies: These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.',
        'Analytics Cookies: We use these cookies to understand how visitors interact with our website, helping us improve our services.',
        'Functional Cookies: These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
        'Marketing Cookies: With your consent, we may use cookies to deliver relevant advertisements and track campaign effectiveness.',
      ],
    },
    {
      title: '3. Third-Party Cookies',
      content: [
        'We may use third-party services like Google Analytics to help us analyze website usage.',
        'These third parties may set their own cookies on your device. We have no control over these cookies and recommend reviewing their privacy policies.',
      ],
    },
    {
      title: '4. How Long Cookies Last',
      content: [
        'Session Cookies: These are temporary and are deleted when you close your browser.',
        'Persistent Cookies: These remain on your device for a set period or until you delete them.',
      ],
    },
    {
      title: '5. Managing Cookies',
      content: [
        'You can control and manage cookies in various ways:',
        'Browser Settings: Most browsers allow you to refuse or accept cookies. Check your browser\'s help section for instructions.',
        'Third-Party Tools: You can use opt-out tools provided by advertising networks.',
        'Note that blocking cookies may impact your experience on our website and limit certain features.',
      ],
    },
    {
      title: '6. Cookies We Use',
      content: [
        '_ga: Google Analytics cookie for tracking user behavior (expires after 2 years)',
        '_gid: Google Analytics cookie for distinguishing users (expires after 24 hours)',
        'cookie_consent: Stores user cookie preferences (expires after 1 year)',
        'session_id: Maintains user session (expires when browser closes)',
      ],
    },
    {
      title: '7. Updates to This Policy',
      content: [
        'We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements.',
        'Please review this page periodically for any updates.',
      ],
    },
    {
      title: '8. Contact Us',
      content: [
        'If you have questions about our use of cookies, please contact us at:',
        'Email: privacy@blueoceanwebs.com',
        'Address: 2507 E 15th St 203 Long Beach CA 90804',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
              Cookie Policy
            </h1>
            <p className="text-lg text-slate-300">
              Last Updated: January 17, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="mb-12 p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <p className="text-slate-300 leading-relaxed mb-0">
                This Cookie Policy explains how Blue Ocean Technology uses cookies and similar technologies on our website. By continuing to use our website, you consent to our use of cookies as described in this policy.
              </p>
            </div>

            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-slate-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}