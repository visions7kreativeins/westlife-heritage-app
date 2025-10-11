 import partners from '../../data/partners.json'
 import Image from 'next/image'

export const metadata = {
  title: 'About — Best of the West Festival',
  description:
    'Learn more about the vision and mission of the Best of the West Festival — celebrating legends of Arts, Sports, and Culture in Ghana’s Western Region.',
}

export default function About() {
  return (
    <section className="py-20 bg-white pattern text-black min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-12">
        {/* Intro */}
        <div>
          <h1 className="text-4xl md:text-5xl font-heading text-gold mb-4">About the Festival</h1>
          <p className="text-offwhite/90 leading-relaxed max-w-3xl">
            <span className="font-semibold">Savita House</span>, in collaboration with the
            <span className="font-semibold"> Centre for National Culture, Western Region</span>, is
            proud to present the <span className="font-semibold">Best of the West Festival</span>.
            This event celebrates individuals of legendary status across <strong>Arts, Sports, and
            Culture</strong> who have brought recognition to Ghana’s Western Region.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h2 className="text-3xl font-heading text-gold mb-3">Our Mission</h2>
          <p className="text-offwhite/90 leading-relaxed max-w-3xl">
            The festival seeks to preserve and promote the heritage of Western Ghana by honoring
            legends, inspiring the youth, and fostering unity through shared cultural experiences.
            Through this initiative, we align with the <em>Black Star Experience</em> and the{' '}
            <strong>Believe in Ghana</strong> dream, creating a platform that boosts tourism,
            creativity, and pride.
          </p>
        </div>

        {/* Objectives */}
        <div>
          <h2 className="text-3xl font-heading text-gold mb-3">Core Objectives</h2>
          <ul className="list-disc list-inside text-offwhite/90 space-y-2 max-w-3xl">
            <li>Boost sports and cultural tourism in the Western Region.</li>
            <li>Safeguard the heritage and legacies of our icons.</li>
            <li>Inspire the populace through the achievements of these legends.</li>
            <li>Strengthen unity and communal pride across communities.</li>
            <li>Nurture sports and creative talents among the youth.</li>
          </ul>
        </div>

        {/* Partners */}
        <div>
          <h2 className="text-3xl font-heading text-gold mb-6">Our Partners & Collaborators</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {partners.map((p) => (
              <div
                key={p.id}
                className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg hover:scale-105 transition transform"
              >
                {p.logo ? (
                  <Image
                    src={p.logo}
                    alt={p.name}
                    className="max-h-12 object-contain mb-2"
                    width={200}
                    height={80}
                  />
                ) : (
                  <div className="text-offwhite text-center font-medium">{p.name}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="pt-8 border-t border-white/10 max-w-3xl">
          <p className="text-offwhite/80 text-sm leading-relaxed">
            The Best of the West Festival brings together key institutions — including the Ghana
            Tourism Authority, Western Regional Coordinating Council, National Sports Authority, and
            Centre for National Culture — to promote domestic tourism and celebrate excellence. With
            corporate support, we ensure that all deserving legends are honored, preserving their
            contributions as part of our regional heritage.
          </p>
        </div>
      </div>
    </section>
  )
}
