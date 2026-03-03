'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function TermsOfService() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing and using Blue Ocean Technology\'s website and services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
      ],
    },
    {
      title: '2. Use License',
      content: [
        'Permission is granted to temporarily access the materials on Blue Ocean Technology\'s website for personal, non-commercial transitory viewing only.',
        'This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials, use the materials for any commercial purpose or public display, attempt to decompile or reverse engineer any software contained on the website, or remove any copyright or proprietary notations from the materials.',
      ],
    },
    {
      title: '3. Services',
      content: [
        'Blue Ocean Technology provides web development, design, cloud solutions, and analytics services.',
        'All services are subject to separate service agreements and project specifications.',
        'We reserve the right to modify or discontinue services without notice.',
      ],
    },
    {
      title: '4. Intellectual Property',
      content: [
        'All content, features, and functionality on our website are owned by Blue Ocean Technology and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.',
        'Custom work created for clients remains the property of the client upon full payment, unless otherwise specified in project agreements.',
      ],
    },
    {
      title: '5. User Responsibilities',
      content: [
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You agree to accept responsibility for all activities that occur under your account.',
        'You agree not to use our services for any unlawful purpose or in any way that could damage our reputation.',
      ],
    },
    {
      title: '6. Limitation of Liability',
      content: [
        'In no event shall Blue Ocean Technology be liable for any damages arising out of the use or inability to use our services.',
        'This limitation applies to all claims, whether based on warranty, contract, tort, or any other legal theory.',
      ],
    },
    {
      title: '7. Indemnification',
      content: [
        'You agree to indemnify and hold harmless Blue Ocean Technology and its affiliates from any claims, damages, or expenses arising from your use of our services or violation of these terms.',
      ],
    },
    {
      title: '8. Governing Law',
      content: [
        'These terms shall be governed by and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.',
      ],
    },
    {
      title: '9. Changes to Terms',
      content: [
        'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.',
        'Your continued use of the service after changes constitutes acceptance of the modified terms.',
      ],
    },
    {
      title: '10. Contact Information',
      content: [
        'For questions about these Terms of Service, please contact us at:',
        'Email: legal@blueoceanwebs.com',
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
              Terms of Service
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
                Please read these Terms of Service carefully before using Blue Ocean Technology's website and services. These terms govern your access to and use of our services and constitute a binding legal agreement between you and Blue Ocean Technology.
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