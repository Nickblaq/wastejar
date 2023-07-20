'use client'

import { Trash2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col mx-auto items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with ❤ by{" "}
            <a
              href='nickblaq.xyz'
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              nickblaq
            </a>
            . 
          </p>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          IG at {" "}
            <a
              href='instagram.com/nickblaq'
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
             Nickblaq
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
