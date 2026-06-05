
export default function Footer() {
  return (
    <footer className='border-t border-slate-800 bg-slate-950/95 text-slate-300'>
      <div className='mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10'>
        <div className='space-y-3'>
          <p className='text-lg font-semibold text-white'>HireMind</p>
          <p className='max-w-xl text-sm leading-6 text-slate-400'>Helping teams discover talent faster with smarter resume insights and easier hiring workflows.</p>
        </div>

        <div className='grid gap-3 sm:grid-cols-3'>
          <div className='space-y-2'>
            <p className='text-sm font-semibold text-white'>Product</p>
            <ul className='space-y-1 text-sm text-slate-400'>
              <li>Resume review</li>
              <li>Job creation</li>
              <li>AI insights</li>
            </ul>
          </div>
          <div className='space-y-2'>
            <p className='text-sm font-semibold text-white'>Company</p>
            <ul className='space-y-1 text-sm text-slate-400'>
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='space-y-2'>
            <p className='text-sm font-semibold text-white'>Legal</p>
            <ul className='space-y-1 text-sm text-slate-400'>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border-t border-slate-800/70 bg-slate-950/95 px-4 py-4 text-center text-sm text-slate-500 sm:px-6 lg:px-10'>
        © 2026 HireMind. All rights reserved.
      </div>
    </footer>
  )
}
