import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import OneBox from './pages/OneBox'

 const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<OneBox/>}/>
    </Routes>
    </BrowserRouter>
  )
}
 export default App
