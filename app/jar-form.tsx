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
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
      const data = { name: formValues.name, phone: formValues.phone.replace(/\s/g, "") }
     const res =  await fetch("/api/jar", {
        method: "POST",
        body: JSON.stringify(data),
      })

      setLoading(false)
      setIsOpen(false)
      console.log(res)
      if (!res.ok) {
        return toast({
          title: "Something went wrong.",
          description: "Your post was not saved. Please try again.",
          variant: "destructive",
        })
      }

      router.refresh()

      return toast({
        description: "Your post has been saved.",
      })

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
         <Button onClick={openModal} className='inline-flex items-center font-mono w-full py-8 text-2xl max-w-md mx-auto font-semibold bg-[#444] rounded-lg'>Subscribe</Button>

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
                    className="text-xl text-center font-medium leading-6 my-6"
                  >
                    WasteJar Form
                  </Dialog.Title>
                  <div className="mt-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formValues.name}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div className="mt-2">
                    <Label htmlFor="name">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="0123 456 7890"
                      type="text"
                      value={formValues.phone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div className="mt-4">
                    <Button
                      type="button"
                      onClick={onSubmit}
                    >
                      Submit
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}