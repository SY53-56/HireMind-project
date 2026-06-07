import Box from "../components/box";
import ResumeUpload from "../components/ResumeUpload";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
export default function Home() {
   const dispatch =useDispatch()
  return (
      <section className='grid w-full max-w-6xl gap-8 rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-6 shadow-2xl shadow-cyan-900/30 md:p-10 lg:grid-cols-[1.15fr_0.85fr]'>
          <div className='space-y-6 rounded-[2rem] bg-slate-950/90 p-6 shadow-inner shadow-slate-950/40 lg:p-10'>
            <div className='space-y-3'>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/90'>Job description form</p>
              <h1 className='text-3xl font-semibold text-white sm:text-4xl'>Role details</h1>
              <p className='max-w-xl text-sm leading-6 text-slate-400'>Enter the job title, company details, location, and a short role summary.</p>
            </div>
    
    
    
            <div className='flex flex-col gap-3 rounded-[2rem] bg-slate-900/80 p-5 text-slate-300 shadow-lg shadow-cyan-500/10'>
              <label htmlFor='description' className='font-semibold text-slate-100'>job description</label>
              <textarea
                id='description'
                rows='5'
                className='min-h-[160px] resize-none rounded-2xl border border-slate-700 bg-slate-950/80 p-4 text-sm text-white outline-none transition focus:border-cyan-400/70'
                placeholder='Summarize the role, responsibilities, and must-have skills.'
              />
            </div>
            <Button name="Submit" className="text-white px-10 ml-1 hover:bg-cyan-600 py-1  bg-cyan-700 rounded-2xl"/>
          </div>
    
          <ResumeUpload />
    
        </section>
  )
}
