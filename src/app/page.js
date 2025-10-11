'use client'

import { motion } from 'framer-motion'
import Countdown from '../components/Countdown'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 hero-overlay"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <Image
            src="/images/logo.png"
            alt="Festival Logo"
            width={120}
            height={120}
            className="mx-auto mb-4 rounded-full"
          />
          <h1 className="text-5xl md:text-7xl font-heading text-gold mb-4">
            Best of the West Festival
          </h1>
          <p className="text-offwhite/90 text-lg mb-6">
            Honoring legends of Ghana’s Western Region through <span className="text-gold">Arts, Sports & Culture</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/legends" className="btn-primary">Meet the Legends</a>
            <a href="/program" className="btn-accent">View Program</a>
          </div>
        </motion.div>
      </section>

      {/* Countdown */}
      <section className="py-16 bg-yellow-50 pattern text-center">
        <h2 className="text-3xl font-heading text-gold mb-6">
          Countdown to Jam Splash 2025
        </h2>
        <Countdown targetDate="2025-12-05T00:00:00Z" />
        <p className="mt-4 text-offwhite/80">Sekondi–Takoradi • 5th – 30th December 2025</p>
      </section>

      {/* About Preview */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-heading text-gold mb-3">Our Story</h2>
            <p className="text-offwhite/90 leading-relaxed">
              The <strong>Best of the West Festival</strong> is a celebration of Ghanaian heritage — honoring the legends who’ve shaped the nation through creativity, sportsmanship, and culture.  
              <br /><br />
              Organized by <span className="font-semibold">Savita House</span> in partnership with the <span className="font-semibold">Centre for National Culture</span> and the <span className="font-semibold">Western Regional Coordinating Council</span>, it’s a beacon of unity and pride.
            </p>
            <a href="/about" className="btn-primary mt-6 inline-block">Learn More</a>
          </div>
          <div className="relative h-72 md:h-96 rounded-xl overflow-hidden">
            <Image
              src="/images/about-preview.jpg"
              alt="About Festival"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Legends Preview */}
      <section className="py-20 bg-yellow-50 pattern">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-4xl font-heading text-gold mb-8">Meet the Legends</h2>
          <p className="text-offwhite/80 max-w-2xl mx-auto mb-10">
            Icons who defined generations — from the rhythms of Gyedu-Blay Ambolley to the grace of Nana Kobina Nketiah IV.  
            Discover their stories, their legacies, and their enduring impact.
          </p>
          <a href="/legends" className="btn-accent">Explore Legends</a>
        </div>
      </section>

      {/* Program & Gallery Preview */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h2 className="text-3xl font-heading text-gold mb-3">Festival Program</h2>
          <p className="text-offwhite/80 mb-6">
            From traditional dance, music, and storytelling to sports competitions and cultural exhibitions — the festival brings together every facet of Western pride.
          </p>
          <a href="/program" className="btn-primary">View Schedule</a>
        </div>
        <div className="text-left">
          <h2 className="text-3xl font-heading text-gold mb-3">Festival Gallery</h2>
          <p className="text-offwhite/80 mb-6">
            Relive the energy, color, and rhythm of Jam Splash 2025 — see photos, performances, and behind-the-scenes moments.
          </p>
          <a href="/gallery" className="btn-accent">Open Gallery</a>
        </div>
      </section>

      {/* Sponsors / Call to Action */}
      <section className="py-20 bg-black/85 text-center text-white pattern">
        <h2 className="text-4xl font-heading text-gold mb-6">Join the Celebration</h2>
        <p className="text-offwhite/80 max-w-2xl mx-auto mb-8">
          Partner with us to make the Best of the West Festival a legacy of unity, heritage, and pride.  
          Let’s celebrate the icons who built our region’s greatness.
        </p>
        <a href="/contact" className="btn-primary">Become a Partner</a>
      </section>
    </>
  )
}
