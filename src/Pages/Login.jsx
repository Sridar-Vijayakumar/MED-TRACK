import React, { useState } from 'react'
import Navbar from '../Component/Navbar'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert("Please fill all fields")
      return
    }

    console.log("Email:", email)
    console.log("Password:", password)

    alert("Login Successful")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      
      <Navbar />

      <div className="flex items-center justify-center mt-10 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login to MedTrack
          </h2>

          <form onSubmit={handleLogin}>

            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password }
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Login
            </button>

          </form>

          <p className="text-center text-gray-500 mt-4 text-sm">
            Don't have an account? <span className="text-blue-500 cursor-pointer">Sign Up</span>
          </p>

        </div>
      </div>

    </div>
  )
}

export default Login

