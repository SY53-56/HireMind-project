import React, { useState } from 'react'
import Button from './Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='w-full bg-gradient-to-r from-slate-950 via-indigo-950 to-cyan-900 shadow-2xl shadow-cyan-900/25'>
      <div className='mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-10'>
        <div className='flex items-center justify-between gap-4'>
          <div className='flex items-center gap-4'>
            <div className='flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-white shadow-lg shadow-cyan-900/15'>
              <span className='text-2xl font-bold'>HM</span>
            </div>
            <div>
              <h1 className='text-2xl font-semibold text-white tracking-tight'>HireMind</h1>
              <p className='text-sm text-slate-300'>Home for smarter resume review</p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className='inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden'
            aria-label='Toggle navigation'
          >
            <span className='text-2xl'>{isOpen ? '×' : '☰'}</span>
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full rounded-3xl border border-white/10 bg-slate-950/95 p-4 text-center shadow-xl shadow-cyan-950/20 lg:block lg:w-auto lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}>
          <div className='flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-end'>
            <div className='rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200 lg:hidden'>Home dashboard</div>
            <Button name='Home' to='/' className='w-full rounded-full bg-white/10 px-4 py-2 text-white border border-white/20 text-left hover:bg-white/15 transition lg:w-auto lg:text-center' />
            <Button name='Dashboard' to='/dashboard' className='w-full rounded-full bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-400 transition lg:w-auto' />
            <Button name='Logout' className='w-full rounded-full bg-amber-500 px-4 py-2 text-slate-950 font-semibold hover:bg-amber-400 transition lg:w-auto' />
          </div>
        </div>
      </div>
    </nav>
  )
}
