import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='flex items-center justify-between p-4 bg-blue-500 text-white'>
        <div className='text-2xl font-bold'>
            <h1>MedTrack</h1>
        </div>
        <div>
            <ul className='flex space-x-4 cursor-pointer'>
                <li><a href=''>Home</a></li>
                <li><a href=''>About Us</a></li>
                <li><a href=''>Services</a></li>
                <button className='bg-white text-blue-500 rounded-md hover:bg-gray-200 transition duration-300'>
                    Login
                </button>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar