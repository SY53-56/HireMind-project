import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './page/Home'
import Dashboard from './page/Dashboard'
import RegisterPage from './page/RegisterPage'
import LoginPage from './page/LoginPage'

function App() {


  return (
    <>
     <Routes>
      <Route  element={<Layout/>}>
      <Route  index element={<Home/>}/>
      <Route path='/dashboard/:id' element={<Dashboard/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
         <Route path="/login" element={<LoginPage/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
