import sponsors from '@/data/sponsors.json'
import Image from 'next/image'

export const metadata = {
  title: 'Sponsors — Best of the West Festival',
  description: 'Our proud partners and supporters who make the Best of the West Festival possible.',
}

export default function SponsorsPage() {
  return (
    <section className="bg-white pattern text-black py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-heading text-gold mb-4">
          Our Sponsors & Partners
        </h1>
        <p className="text-offwhite/80 mb-10 max-w-2xl mx-auto">
          We proudly collaborate with organizations committed to promoting Ghana’s culture,
          tourism, and sports excellence.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center group hover:scale-105 transition-transform"
            >
              <div className="bg-white p-6 rounded-xl border border-white/10 hover:border-amber-600/30 transition">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={200}
                  height={80}
                  className="max-h-16 w-auto object-contain mb-3 opacity-90 group-hover:opacity-100 transition"
                />
              </div>
              <p className="text-sm text-offwhite/70 group-hover:text-gold mt-2">{sponsor.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
