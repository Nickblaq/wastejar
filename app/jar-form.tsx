'use client'

import { ChangeEvent, useState, Fragment } from "react"
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from "next/navigation"


import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { toast } from "@/components/use-toast"

interface Props {
    children?: React.ReactNode
}
export function JarForm({ children }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
  })
  const [error, setError] = useState("")
  const [sucess, setSucess] = useState(false)
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (loading) return
    if (!formValues.name || !formValues.phone) return
    setLoading(true)
      const data = { name: formValues.name, phone: formValues.phone.replace(/\s/g, "") }
     const res =  await fetch("/api/jar", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })

      setLoading(false)
     
      console.log('this is res', res)
      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }

      router.refresh()
      console.log(res)
      return setSucess(true)

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(name, value)
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  return (
    <>
   
        {/* <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button> */}
         <Button onClick={openModal} className='inline-flex items-center font-mono w-full py-8 text-2xl max-w-md mx-auto font-semibold bg-[#444] rounded-lg'>500 naira / 2 bags</Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#333] bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#333] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className=" text-center my-6"
                  >
                    {/* <div> */}
                    <h2 className="text-2xl  font-bold leading-6 mb-3">WasteJar</h2>
                    {/* </div> */}
                  </Dialog.Title>
                  { !loading && sucess && (
                    <>
                    <div className="mt-2">
                      <ul className="list-none ">
                        <li>
                          <strong>Name:</strong> {formValues.name}
                        </li>
                        <li>
                          <strong>Phone:</strong> {formValues.phone}
                        </li>
                      </ul>
                    </div>
                    <div className="mt-2">
                    <p className=" text-base text-gray-400">
                      Your details has been successfully submitted. We&apos;ll sent
                      you a message on whatsApp.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                  </>
                  )}


                  { !loading && !sucess && error && (
                    <>
                    <div className="mt-2">
                    <p className=" text-base text-rose-400">
                      Something happened. Fill correct details or try again in few minutes.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                  </>
                  )}


                  {  !sucess && (
                  <>
                  <div className="mt-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                    disabled={loading}
                      id="name"
                      type="text"
                      name="name"
                      placeholder="John"
                      value={formValues.name}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div className="mt-2">
                    <Label htmlFor="name">Wahtsapp no.</Label>
                    <Input
                      disabled={loading}
                      id="phone"
                      name="phone"
                      placeholder="08034567890"
                      type="text"
                      value={formValues.phone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    <p className="">Rate:</p>
                    <p className=" text-base text-[#888]">
                      500/2 bags
                    </p>
                  </div>

                  <div className="mt-2">
                    <p className=" text-base text-[#888]">
                      Please make payment before submitting. Don&apos;t spam me.
                    </p>
                  </div>
                

                  <div className="mt-4">
                    <Button
                      type="button"
                      onClick={onSubmit}
                    >
                    {loading? 'Loading...' : 'Submit'}
                    </Button>
                  </div>
                  </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
