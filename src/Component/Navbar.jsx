import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="bg-blue-500 text-white px-6 py-4 flex items-center justify-between shadow-md">
      
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate('/')}>
        MedTrack
      </h1>

      {/* Login Button */}
      <button
        onClick={() => navigate('/login')}
        className="bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Login
      </button>

    </nav>
  )
}

export default Navbar