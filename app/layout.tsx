
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

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
    <html className='h-full text-[#eee] bg-[#222]' lang="en">
      <body className={`${inter.className} h-full min-h-screen w-full `}>
        {/* <Navbar /> */}
        {children}
    
        </body>
    </html>
  )
}
