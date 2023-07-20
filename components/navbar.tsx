
import {Trash} from 'lucide-react'

export default function Navbar () {

    return (
        <>
        <div className=' transition translate-y-6 ease-in-out duration-150'>
            <nav className="flex h-16 mt-10 items-center justify-center gap-4 border border-[hsla(0,0%,100%,.1)] rounded-xl">
                <h1 className='text-2xl font-bold'>Waste Jar</h1>
                <Trash  className='w-7 h-7 ml-1 animate-[wiggle_1s_ease-in-out_infinite]'/>
            </nav>
        </div>
        </>
    )
}