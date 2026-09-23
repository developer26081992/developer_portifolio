
'use client'

import {useState} from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('Sending...')

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })

    if (response.ok) {
      setStatus('Message sent successfully.')
      setName('')
      setEmail('')
      setMessage('')
    } else {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <main>
      <h1>Contact Me</h1>

      <p>
        Have a project or question? Send me a message using the form below.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>

      {status && <p>{status}</p>}
    </main>
  )
}

