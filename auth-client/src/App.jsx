import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Shared/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './Shared/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './pages/ProtectedRoute'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
