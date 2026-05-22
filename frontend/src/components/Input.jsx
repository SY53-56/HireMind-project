import React from 'react'

export default function Input({type , value, onChange, name, id, label , placeholder, className}) {
  return (
  <div>
    <label className='mb-1 font-medium' htmlFor={id}>{label}</label>
    <input type={type} name={name} className={`${className}`} id={id} onChange={onChange} placeholder={placeholder} value={value} className={className}/>
  </div>
  )
}
