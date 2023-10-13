import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Cabecera } from './Components/Cabecera'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="h-screen bg-black">
      <Cabecera/>

    </div>

  )
}
