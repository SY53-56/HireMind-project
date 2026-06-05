import  {  useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { authRegister } from '../features/auth/authThunk';
export default function RegisterPage() {
const [form, setForm] = useState({
  username:"",
  email:"",
  password:""
})

const handleChange= (e)=>{
  const {name, value} = e.target
  setForm(prev=> ({...prev, [name]:value}) )
}
  const dispatch = useDispatch()
   const navigate= useNavigate()
  const handleSubmit= async(e)=>{
     e.preventDefault();
 try{
 if(!form.username || !form.email ||!form.password){
    return alert("fill the form")
   }
   console.log(form)
     await dispatch( authRegister(form)).unwrap()
   navigate("/")
 }catch(e){
console.log(e)
 }
  }
  

  return (
    <section className='min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-cyan-100 flex items-center justify-center px-4 py-10'>
         <div className='relative max-w-3xl w-full'>
           <div className='absolute -top-10 -left-10 w-40 h-40 rounded-full bg-cyan-200/70 blur-3xl' />
           <div className='absolute -bottom-12 -right-8 w-56 h-56 rounded-full bg-amber-200/70 blur-3xl' />
   
           <form action=''   onSubmit={handleSubmit} className='relative bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-3xl p-8 md:p-12 overflow-hidden'>
             <div className='mb-8 text-center'>
               <p className='text-sm uppercase tracking-[0.3em] text-cyan-700 font-semibold'>Welcome back</p>
               <h1 className='mt-3 text-3xl font-semibold text-slate-900'>Register in to your account</h1>
               <p className='mt-3 text-sm text-slate-500'>Access your resume reports, AI insights, and saved data securely.</p>
             </div>
   
             <div className='space-y-5'>
                <Input type='text' name='username' id='username' value={form.username} onChange={handleChange} labelClass="text-black" label='username' placeholder='Enter your username' />
               <Input type='email' name='email' id='email' label='Email' value={form.email} onChange={handleChange} placeholder='Enter your email' />
               <Input type='password' name='password' id='password' label='Password' value={form.password} onChange={handleChange} placeholder='Enter your password' />
               <Button type='submit' name='register' className='bg-cyan-600 hover:bg-cyan-700 text-white w-full py-3 rounded-2xl transition-colors duration-200 shadow-sm shadow-cyan-200/50' />
             </div>
   
             <p className='mt-6 text-center text-sm text-slate-500'>if you  have an account? <Link to='/login' className='font-semibold text-cyan-700 hover:text-cyan-900'>login</Link></p>
           </form>
         </div>
       </section>
  )
}
