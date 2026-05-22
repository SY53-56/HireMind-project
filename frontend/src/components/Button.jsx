import React from 'react'
import {Link} from "react-router-dom"
export default function Button({name, onClick,type="submit",className,to }) {
     if(to){
        return(
            <Link to={to} className={`${className}`}>{name}</Link>
        )
     }
     return (
        <button onClick={onClick} type={type}className={`${className} cursor-pointer`}>{name}</button>
     )
}
