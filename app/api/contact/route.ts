import {NextRequest, NextResponse} from 'next/server'
import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const {name, email, message} = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        {message: 'All fields are required'},
        {status: 400},
      )
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `Portfolio message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    })

    return NextResponse.json({
      message: 'Message sent successfully',
    })
  } catch (error) {
    console.error('Contact form error:', error)

    return NextResponse.json(
      {message: 'Failed to send message'},
      {status: 500},
    )
  }
}