import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="home-container">
      <h1 className="home-title">HELLO WORLD</h1>
    </main>
  )
}
