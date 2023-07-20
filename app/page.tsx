import Image from 'next/image'
import { Button } from '@/components/button'



export default function Home() {
  return (
    <main className="flex h-full mx-auto px-6 flex-col justify-center container">
      <div className='h-full flex-auto pt-16 text-center max-w-screen-md mx-auto'>
        <div className='space-y-16'>
        <h1 className='text-6xl font-bold leading-snug'>Manage & Track <br /> Waste Management Services.</h1>
        <h3 className=' leading-loose text-2xl font-normal'>The burden of waste mangament and disposal can be tedious, we know and that&apos;s where Jaar comes in. Let&apos;s help you manage your waste removal through our provided services</h3>

        <div className='flex items-center'>
          <Button className='w-full py-8 text-xl font-semibold bg-[#1a1a1a] rounded-md'>Enter App</Button>
        </div>
      </div>

      {/* <div className='w-full'> */}
      {/* </div> */}
     
      </div>
    </main>
  )
}
