import { useState,useEffect } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './page/Home'
import Dashboard from './page/Dashboard'
import RegisterPage from './page/RegisterPage'
import LoginPage from './page/LoginPage'
import { toast, ToastContainer } from "react-toastify";
function App() {
  
   useEffect(() => {
    toast.success("Welcome!", {
      position: "top-right",
      autoClose: 3000,
    });
  }, []);
  return (
    <>
      <ToastContainer/>
     <Routes>
    

       <Route path="/register" element={<RegisterPage/>}/>
         <Route path="/login" element={<LoginPage/>}/>
      <Route  element={<Layout/>}>
      <Route  index element={<Home/>}/>
      <Route path='/dashboard/:id' element={<Dashboard/>}/>
     
      </Route>
     </Routes>
    </>
  )
}

export default App
