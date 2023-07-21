
import {Trash} from 'lucide-react'

export default function Navbar () {

    return (
        <>
        <div className=' transition translate-y-6 ease-in-out duration-150 pb-6 h-16 md:py-0'>
            <nav className="flex h-full items-center justify-between max-w-sm px-6 mx-auto border border-[#bbb] rounded-xl">
                <h1 className='text-2xl font-bold'>500 naira / 2 bags only</h1>
                <Trash  className='w-7 h-7 ml-1 animate-[wiggle_1s_ease-in-out_infinite]'/>
            </nav>
        </div>
        </>
    )
}