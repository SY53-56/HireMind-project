

export default function Input({type , value, onChange, name, id, label , placeholder, className}) {
  return (
  <div className="flex flex-col mb-2">
    <label className=' font-medium mb-1 text-white' htmlFor={id}>{label}</label>
    <input type={type} name={name} className={`${className} outline-amber-500 py-2 px-2.5  bg-gray-400 rounded-lg`} id={id} onChange={onChange} placeholder={placeholder} value={value} />
  </div>
  )
}
