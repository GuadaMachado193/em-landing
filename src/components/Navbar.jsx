"use client"

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Cómo funciona', href: '#como-funciona' },
  { name: 'Coberturas', href: '#coberturas' },
  { name: 'Beneficios', href: '#beneficios' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Cotizar', href: '#cotizar' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1 items-center gap-3">
          <a href="#inicio" className="-m-1.5 p-1.5 flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}em-seguros.jpg`} alt="EM Productora de Seguros" className="h-9 w-9 rounded-sm object-cover" />
            <span className="sr-only">EM Productora de Seguros</span>
            <span className="hidden sm:inline text-sm font-semibold text-slate-900">EM Productora de Seguros</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            aria-label="Abrir menú"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold text-slate-900 hover:text-brandBlue">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#cotizar" className="text-sm font-semibold text-white bg-brandOrange px-4 py-2 rounded-md shadow-sm hover:opacity-95">
            Cotizar ahora
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
          <div className="flex items-center justify-between">
            <a href="#inicio" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
              <img alt="EM" src={`${import.meta.env.BASE_URL}em-seguros.jpg`} className="h-9 w-9 rounded-sm object-cover" />
              <span className="text-sm font-semibold text-slate-900">EM Productora de Seguros</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-slate-700"
              aria-label="Cerrar menú"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-200">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#cotizar"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white bg-brandOrange text-center"
                >
                  Cotizar ahora
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

