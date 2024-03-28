import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FileNotFound from '@/pages/404'

const Index = () => {
  return (
    <Router>
        <Routes>
            <Route path="login" element={<div>Login</div>}/>
            <Route path='*' element={<FileNotFound/>}/>
        </Routes>
    </Router>
  )
}

export default Index