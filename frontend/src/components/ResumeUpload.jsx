import React from 'react'

export default function ResumeUpload() {
  return (
    <section className='flex h-full gap-7 flex-col justify-between rounded-[2rem] border border-cyan-500/10 bg-slate-950/90 p-6 shadow-inner shadow-cyan-900/20'>
      <div className='space-y-6'>
        <div className='space-y-4'>
          <p className='text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/90'>Resume upload</p>
          <h2 className='text-3xl font-semibold text-white'>Upload candidate resumes</h2>
          <p className='text-sm leading-6 text-slate-400'>Drop a resume file or choose one from your computer. Supported formats: PDF, DOCX.</p>
        </div>

        <label className='flex h-72 cursor-pointer flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-cyan-500/30 bg-slate-900/80 p-6 text-center text-slate-300 transition hover:border-cyan-400/60 hover:bg-slate-900'>
          <div className='space-y-4'>
            <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300'>
              <span className='text-3xl'>⬆</span>
            </div>
            <div className='space-y-2'>
              <p className='text-lg font-semibold text-white'>Drag & drop resume</p>
              <p className='text-sm text-slate-400'>or browse your files to upload a resume.</p>
            </div>
          </div>
          <input type='file' accept='.pdf,.doc,.docx' className='sr-only' />
        </label>
      </div>

      
    </section>
  )
}
