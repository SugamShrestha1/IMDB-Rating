import React from 'react';
import {Link} from  'react-router-dom';
import logo from '../assets/logo.jpeg'


const Navbar = () => {
  return (
    <nav className=' fixed top-0 left-0 right-0 z-10 flex justify-between bg-cyan-700 '>
    <Link to="/">
      <img src={logo} alt="Logo" className='w-20 h-auto ml-4 '/>
    </Link>
    <div className='flex justify-end mr-16 space-x-8 text-lg text-white ' >
      <Link to='/' className='flex items-center'>Home</Link>
      <Link to='/movies/top_rated' className='flex items-center'>Top Rated</Link>
      <Link to='/movies/upcoming' className='flex items-center'>Upcoming</Link>
      <Link to='/movies/popular' className='flex items-center'>Popular</Link>
    </div>
    </nav>
  )
}

export default Navbar