import Link from 'next/link'

export default function Footer() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/legends', label: 'Legends' },
    { href: '/program', label: 'Program' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-white border-t border-white/10 text-black py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        {/* Footer Nav */}
        <div className="flex flex-wrap justify-center gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gold transition text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-32 mx-auto bg-white/10"></div>

        {/* Info */}
        <p className="text-xs text-offwhite/60">
          © {new Date().getFullYear()} Best of the West Festival. All Rights Reserved.
        </p>
        <p className="text-xs text-offwhite/50">
          Designed by <span className="text-gold font-medium">Vision & Kreative Inc.</span>
        </p>
      </div>
    </footer>
  )
}
