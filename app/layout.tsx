
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='h-full' lang="en">
      <body className={`${inter.className} h-full min-h-screen w-full text-[#eee] bg-gradient-to-b from-[#222]/70 to-[#222]/90`}>{children}</body>
    </html>
  )
}
