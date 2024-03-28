import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FileNotFound from '@/pages/404'
import { Login } from '@/pages'

const Index = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/*' element={<FileNotFound/>}/>
        </Routes>
    </Router>
  )
}

export default Index