'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function PrivacyPolicy() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        'We collect information that you provide directly to us, including name, email address, phone number, and any other information you choose to provide when you contact us or use our services.',
        'We automatically collect certain information about your device when you use our website, including IP address, browser type, operating system, and usage data.',
      ],
    },
    {
      title: '2. How We Use Your Information',
      content: [
        'To provide, maintain, and improve our services',
        'To communicate with you about our services, including responding to your inquiries',
        'To send you marketing communications (with your consent)',
        'To detect, prevent, and address technical issues and security threats',
        'To comply with legal obligations',
      ],
    },
    {
      title: '3. Information Sharing',
      content: [
        'We do not sell your personal information to third parties.',
        'We may share your information with service providers who assist us in operating our website and conducting our business.',
        'We may disclose your information if required by law or to protect our rights and safety.',
      ],
    },
    {
      title: '4. Data Security',
      content: [
        'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
      ],
    },
    {
      title: '5. Your Rights',
      content: [
        'You have the right to access, correct, or delete your personal information.',
        'You can opt-out of marketing communications at any time.',
        'You have the right to data portability and to restrict processing of your data.',
        'To exercise these rights, please contact us at privacy@blueoceanwebs.com.',
      ],
    },
    {
      title: '6. Cookies',
      content: [
        'We use cookies and similar tracking technologies to enhance your experience on our website.',
        'You can control cookies through your browser settings. Please see our Cookie Policy for more details.',
      ],
    },
    {
      title: '7. Changes to This Policy',
      content: [
        'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.',
      ],
    },
    {
      title: '8. Contact Us',
      content: [
        'If you have any questions about this Privacy Policy, please contact us at:',
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
              Privacy Policy
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
                At Blue Ocean Technology, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
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