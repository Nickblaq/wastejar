
import { Button } from '@/components/button'
import { JarForm } from './jar-form'
import { FormMemo } from '@/components/form-memo'
import { main } from '@/lib/seed'
export default async function Home() {
    // await main()
  return (
    <>
      <div className='h-full w-full flex-auto text-center'>
        <div className='space-y-16 py-10'>
        <h1 className='lg:text-6xl text-4xl lg:font-bold font-semibold leading-tight lg:leading-snug font-serif'>Manage & Track <br /> Waste Management Services.</h1>
        <p className=' leading-loose text-xl font-normal text-left font-sans indent-2 italic'>
          The burden of waste mangament and disposal can be tedious, but worry no more.
         </p>
        <h3 className=' lg:text-center leading-loose text-2xl lg:text-4xl font-normal text-left font-sans indent-2'>
          
          <strong>Waste Jar</strong> takes that burden away when instantly!. 
         </h3>
      
       
         {/* <Button className='inline-flex items-center font-mono w-full py-8 text-2xl max-w-md mx-auto font-semibold bg-[#444] rounded-lg'>Subscribe</Button> */}
      </div>
     </div>
     <JarForm />
    
    </>
  )
}
