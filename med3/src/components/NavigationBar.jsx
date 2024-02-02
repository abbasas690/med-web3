import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (

    <header>
       
     <nav>
      <ul className='flex p-4 bg-lime-700 text-white flex-row justify-between'>
        <div>
        <li className='px-4 py-1'>
          <Link to="/">Home</Link>
        </li>
        </div>
          <div className='flex space-x-2 '>
        <li className='px-4 py-1'>
          <Link to="/register">Register</Link>
        </li>
        <li className='px-4 py- bg-blue-500 text-white font-semibold rounded-lg shadow-md focus:ring-2 focus:ring-blue-400 focus:ring-opacity-70'>
          <Link to="/login">Login</Link>
        </li>
        </div>
      </ul>
    </nav>
    </header>
      
  )
}

export default NavigationBar
