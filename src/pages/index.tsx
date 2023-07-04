import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className='text-red-500 text-5xl'>
        hi mom
      </h1>
    </div>
  )
}
