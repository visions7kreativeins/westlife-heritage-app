'use client'

import React, { useState, useMemo, useCallback } from 'react'
import legends from '../data/legends.json'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import Image from 'next/image'

export default function LegendsClient() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const categories = ['All', 'Arts', 'Sports', 'Culture']

  const handleFilter = useCallback((cat) => setFilter(cat), [])
  const handleSearch = useCallback((e) => setSearch(e.target.value), [])
  const handleSelect = useCallback((legend) => setSelected(legend), [])
  const handleClose = useCallback(() => setSelected(null), [])

  const filteredLegends = useMemo(() => {
    const searchLower = search.toLowerCase()
    return legends.filter((legend) => {
      const matchesCategory = filter === 'All' || legend.category === filter
      const matchesSearch = legend.name.toLowerCase().includes(searchLower)
      return matchesCategory && matchesSearch
    })
  }, [filter, search])

  return (
    <section className="bg-white pattern text-black min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h1 className="text-4xl md:text-5xl font-heading text-gold mb-2 text-center">
          Our Honored Legends
        </h1>
        <p className="text-center text-offwhite/80 mb-10 max-w-2xl mx-auto">
          Celebrating the heroes of Arts, Sports, and Culture who shaped Ghana’s Western Region.
        </p>

        {/* 🔍 Search Bar + Filters */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
          {/* Search Input */}
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-2.5 text-offwhite/50 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for a legend..."
              value={search}
              onChange={handleSearch}
              className="w-full bg-white/10 text-offwhite border border-white/20 rounded-full py-2.5 pl-10 pr-4 placeholder:text-offwhite/50 focus:outline-none focus:ring-2 focus:ring-gold transition"
            />
          </div>

          {/* Category Filters */}
          <div className="flex justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filter === cat
                    ? 'bg-gold text-black'
                    : 'bg-white/10 text-offwhite hover:bg-white/20'
                } transition`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 🧱 Legends Grid */}
        {filteredLegends.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredLegends.map((legend) => (
              <motion.div
                key={legend.id}
                whileHover={{ scale: 1.04 }}
                onClick={() => handleSelect(legend)}
                className="cursor-pointer bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-gold/20 transition"
              >
                <div className="h-56 overflow-hidden">
                  <Image
                    src={legend.image}
                    alt={legend.name}
                    width={400}
                    height={224}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-heading text-gold">{legend.name}</h3>
                  <p className="text-offwhite/70 text-sm">{legend.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-offwhite/60 mt-10">No legends found.</p>
        )}

        {/* 🪄 Modal for Legend Details */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white border border-white/10 rounded-2xl max-w-md w-full p-6 relative mx-4"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
              >
                <button
                  className="absolute top-3 right-4 text-white/70 hover:text-gold text-2xl"
                  onClick={handleClose}
                >
                  &times;
                </button>
                <Image
                  src={selected.image}
                  alt={selected.name}
                  width={400}
                  height={240}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-heading text-gold mb-1">{selected.name}</h2>
                <p className="text-offwhite/80 text-sm mb-3">{selected.category}</p>
                <p className="text-offwhite/90 leading-relaxed text-sm">{selected.bio}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
