import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Best of the West Festival',
  description:
    'Celebrating Ghana’s Western Region legends in Arts, Sports, and Culture — December 2025.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
