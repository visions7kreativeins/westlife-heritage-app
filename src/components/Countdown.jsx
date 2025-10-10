'use client'
import { useEffect, useState } from 'react'

export default function Countdown({ targetDate }) {
  const calculateTime = () => {
    const now = new Date()
    const target = new Date(targetDate)
    const diff = Math.max(0, target - now)

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    return { days, hours, minutes, seconds }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTime())

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTime()), 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const pad = (num) => num.toString().padStart(2, '0')

  return (
    <div className="flex justify-center gap-4 text-center mt-8">
      {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => (
        <div key={label} className="bg-white/10 px-4 py-3 rounded-lg w-20">
          <div className="text-3xl font-bold text-gold">
            {pad(Object.values(timeLeft)[i])}
          </div>
          <div className="text-xs text-offwhite/70 uppercase">{label}</div>
        </div>
      ))}
    </div>
  )
}
