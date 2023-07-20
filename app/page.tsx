import Image from 'next/image'
import { Button } from '@/components/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


export default function Home() {
  return (
    <>
   
      <div className='h-full w-full flex-auto pt-16 text-center'>
        <div className='space-y-16 py-10'>
        <h1 className='lg:text-6xl text-4xl lg:font-bold font-semibold leading-tight lg:leading-snug'>Manage & Track <br /> Waste Management Services.</h1>
        <h3 className=' leading-loose text-2xl font-normal'>
          The burden of waste mangament and disposal can be tedious, we know and that&apos;s where Jaar comes in. 
          Let&apos;s help you manage your waste removal through our provided services</h3>
    
          <Button className='inline-flex items-center w-full py-8 text-xl font-semibold bg-[#1a1a1a] rounded-md'>Enter App</Button>
 
      </div>
     </div>
    
    </>
  )
}
