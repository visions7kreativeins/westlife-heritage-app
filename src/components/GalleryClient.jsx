'use client'

import React, { useState } from 'react'
import galleryData from '../data/gallery.json'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'

export default function GalleryClient() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Arts', 'Sports', 'Culture']
  const filteredGallery =
    filter === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === filter)

  return (
    <section className="bg-black pattern text-offwhite min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h1 className="text-4xl md:text-5xl font-heading text-gold mb-2 text-center">
          Festival Gallery
        </h1>
        <p className="text-center text-offwhite/80 mb-10 max-w-2xl mx-auto">
          Relive the unforgettable moments of the Best of the West Festival through pictures and videos.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              className="relative cursor-pointer group rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-gold/30 transition"
              onClick={() => setSelected(item)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <div className="relative w-full h-56 bg-black">
                  <video
                    src={item.src}
                    className="w-full h-full object-cover opacity-70"
                    muted
                    loop
                    autoPlay
                  />
                  <Play className="absolute inset-0 m-auto text-gold w-10 h-10 opacity-80" />
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-2">
                <h3 className="text-gold text-sm font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative max-w-4xl w-full"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
              >
                <button
                  className="absolute top-3 right-3 text-offwhite/70 hover:text-gold z-50"
                  onClick={() => setSelected(null)}
                >
                  <X className="w-6 h-6" />
                </button>

                {selected.type === 'image' ? (
                  <img
                    src={selected.src}
                    alt={selected.title}
                    className="rounded-xl w-full h-auto max-h-[80vh] object-contain"
                  />
                ) : (
                  <video
                    src={selected.src}
                    controls
                    autoPlay
                    className="rounded-xl w-full h-auto max-h-[80vh] object-contain"
                  />
                )}
                <p className="text-center text-offwhite/80 mt-4 text-sm">
                  {selected.title}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
