

import { JarForm } from './jar-form'

export default async function Home() {
    // await main()
    
  return (
    <>
      <div className='h-full w-full flex-auto text-center min-h-[75vh]'>
        <div className='space-y-16 py-10'>
        <h1 className='lg:text-6xl text-4xl lg:font-bold font-semibold leading-tight lg:leading-snug font-serif'>Waste Jar collector services.</h1>
        <p className=' leading-loose text-xl font-normal text-left font-sans indent-2 italic'>
          The burden of waste mangament and disposal can be tedious, but worry no more.
         </p>
        <h3 className='leading-loose text-xl font-normal text-left font-serif'>
          
        Pay as you use. <br /> Only paid users should click button below.
         </h3>
      </div>
      <JarForm />
     </div>
    
    </>
  )
}
