
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/footer'
import Navbar from '@/components/navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Waste Jar',
  description: 'Waste collector services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='h-full text-[#eee] bg-[#222]' lang="en">
      <body className={`${inter.className} h-full min-h-screen w-full antialiased`}>
        <Navbar />
        <main className="flex w-full mx-auto px-6 my-10 flex-col justify-center container  max-w-screen-md">
        <section className='flex-1'>{children}</section>
    </main>
    <Footer />
 
        </body>
    </html>
  )
}
