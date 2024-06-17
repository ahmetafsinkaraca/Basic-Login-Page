import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './form'
import Login from './login'

export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/form' element={<Form/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}
