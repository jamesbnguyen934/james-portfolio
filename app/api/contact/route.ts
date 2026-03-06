import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = 'james.nguyen93112@gmail.com'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `Portfolio: ${subject || 'New Message'} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #06030d; color: #f0eeff; border-radius: 12px; border: 1px solid rgba(139,92,246,0.2);">
          <h2 style="color: #a78bfa; margin-top: 0;">New Portfolio Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #94a3b8; width: 80px;">From:</td><td style="padding: 8px 0; color: #f0eeff; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Email:</td><td style="padding: 8px 0; color: #a78bfa;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Subject:</td><td style="padding: 8px 0; color: #f0eeff;">${subject || '—'}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid rgba(139,92,246,0.2); margin-bottom: 24px;" />
          <p style="color: #94a3b8; margin-top: 0; font-size: 13px;">Message:</p>
          <p style="color: #f0eeff; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          <hr style="border: none; border-top: 1px solid rgba(139,92,246,0.1); margin-top: 32px;" />
          <p style="color: #475569; font-size: 11px; margin-bottom: 0;">Sent from your portfolio — hit Reply to respond directly to ${name}.</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
