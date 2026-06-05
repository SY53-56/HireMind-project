import React from 'react'

const highlights = [
  'Create scalable UI components with clean, accessible markup.',
  'Collaborate with product and design to ship polished features.',
  'Write clear documentation for hiring managers and teams.',
  'Optimize job listings with strong titles, skills, and benefits.'
]

export default function JobDescription() {
  return (
    <aside className='space-y-6 rounded-[2rem] border border-cyan-500/10 bg-slate-900/90 p-8 text-slate-200 shadow-2xl shadow-cyan-900/20'>
      <div className='space-y-3'>
        <span className='inline-flex rounded-full bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300'>Job description</span>
        <h2 className='text-3xl font-semibold text-white'>Full-stack role overview</h2>
        <p className='text-sm leading-6 text-slate-400'>Use this summary area for a concise job description, role goals, and the key outcomes you expect.</p>
      </div>

      <div className='space-y-5 rounded-[1.75rem] bg-slate-950/80 p-6'>
        <div className='space-y-3'>
          <h3 className='text-lg font-semibold text-white'>What you will own</h3>
          <ul className='space-y-3 text-sm text-slate-300'>
            <li className='flex gap-3'>
              <span className='mt-1 h-2 w-2 rounded-full bg-cyan-400' />
              Build user interfaces that feel fast, intuitive, and modern.
            </li>
            <li className='flex gap-3'>
              <span className='mt-1 h-2 w-2 rounded-full bg-cyan-400' />
              Improve application flows with reusable components and state patterns.
            </li>
            <li className='flex gap-3'>
              <span className='mt-1 h-2 w-2 rounded-full bg-cyan-400' />
              Work with backend APIs, authentication, and resume generation services.
            </li>
          </ul>
        </div>

        <div className='space-y-3'>
          <h3 className='text-lg font-semibold text-white'>Key skills</h3>
          <div className='flex flex-wrap gap-2'>
            {['React', 'Tailwind', 'Node.js', 'REST APIs', 'Responsive UI'].map((skill) => (
              <span key={skill} className='rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200'>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className='rounded-[1.75rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-slate-950/70 p-6 text-sm text-slate-300'>
        <h3 className='mb-3 font-semibold text-white'>Why this matters</h3>
        <p className='leading-6'>A strong description helps candidates understand the role quickly and attracts people who are aligned with the position.</p>
      </div>
    </aside>
  )
}
