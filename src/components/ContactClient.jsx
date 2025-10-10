'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactClient() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="bg-black pattern text-offwhite min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <h1 className="text-4xl md:text-5xl font-heading text-gold text-center mb-4">
          Get in Touch
        </h1>
        <p className="text-center text-offwhite/80 mb-12 max-w-2xl mx-auto">
          Whether you’re a sponsor, artist, volunteer, or media partner, we’d love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="w-6 h-6 text-gold" />
              <div>
                <p className="text-gold font-semibold">Email</p>
                <p className="text-offwhite/80">info@bestofthewestfest.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-gold" />
              <div>
                <p className="text-gold font-semibold">Phone</p>
                <p className="text-offwhite/80">+233 54 123 4567</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-gold" />
              <div>
                <p className="text-gold font-semibold">Location</p>
                <p className="text-offwhite/80">Takoradi, Western Region, Ghana</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4"
          >
            <div>
              <label className="block text-sm text-offwhite/70 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white/10 text-offwhite px-3 py-2 rounded-lg focus:ring-2 focus:ring-gold outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-offwhite/70 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white/10 text-offwhite px-3 py-2 rounded-lg focus:ring-2 focus:ring-gold outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-offwhite/70 mb-1">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-white/10 text-offwhite px-3 py-2 rounded-lg focus:ring-2 focus:ring-gold outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gold text-black font-semibold py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>

            {submitted && (
              <p className="text-green-400 text-sm mt-3 text-center">
                ✅ Message sent! We’ll get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
