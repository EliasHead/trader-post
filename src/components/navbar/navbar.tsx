'use client'

import { useState } from 'react'
import { NavbarArray } from '@/utils/NavbarArrayAndTypes'
import Link from 'next/link'
import { List, X } from '@phosphor-icons/react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between bg-teal-500 p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <svg
          className="mr-2 h-8 w-8 fill-current"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="text-xl font-semibold tracking-tight">
          Tailwind CSS
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white"
        >
          {isOpen ? (
            <X size={24} color="#fafafa" weight="bold" />
          ) : (
            <List size={24} color="#ffffff" weight="bold" />
          )}
        </button>
      </div>
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div className="hidden lg:flex lg:flex-grow lg:justify-around">
          {NavbarArray.map((item) => {
            return (
              <Link
                className="lg:mt-0 lg:inline-block"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
        {isOpen && <MobileNavbar />}
      </div>
    </nav>
  )
}

const MobileNavbar = () => {
  return (
    <div className="lg:flex lg:flex-grow">
      {NavbarArray.map((item) => {
        return (
          <Link
            className="mr-4 mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
            key={item.label}
            href={item.href}
          >
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}
