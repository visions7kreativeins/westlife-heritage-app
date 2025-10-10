'use client'

import React, { useState } from 'react'
import programData from '../data/program.json'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Calendar } from 'lucide-react'

export default function ProgramClient() {
  const [openItem, setOpenItem] = useState(null)
  const toggle = (id) => setOpenItem(openItem === id ? null : id)

  return (
    <section className="bg-black pattern text-offwhite min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <h1 className="text-4xl md:text-5xl font-heading text-gold mb-2 text-center">
          Festival Program Timeline
        </h1>
        <p className="text-center text-offwhite/80 mb-14 max-w-2xl mx-auto">
          Follow the journey — from the grand opening to the final celebration of the Best of the West Festival 2025.
        </p>

        {/* Timeline container */}
        <div className="relative border-l border-white/20 pl-8 space-y-12">
          {programData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[0.9rem] top-2 w-4 h-4 bg-gold rounded-full shadow-lg shadow-gold/30 border-2 border-black"></div>

              {/* Content card */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-gold/30 transition">
                <button
                  onClick={() => toggle(item.id)}
                  className="flex justify-between items-center w-full text-left px-5 py-4 focus:outline-none hover:bg-white/10 transition"
                >
                  <div>
                    <h3 className="text-xl font-heading text-gold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-offwhite/70 text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold" />
                      {item.date} • {item.time} • {item.venue}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gold transform transition-transform ${
                      openItem === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openItem === item.id && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-offwhite/80 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

