import Link from 'next/link'
import React from 'react'
import About from '../pages/about'

const NavBar = () => {
  return (
    <>
        <nav className="bg-stone-950 py-4">
        <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
            <h1 className="text-xl font-bold text-neutral-50">To Do List em NextJS</h1>
            <ul className="flex space-x-4">
            <li><Link href={"/"} className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li><Link href={"pages/About"} className="text-gray-600 hover:text-gray-800">Sobre</Link></li>
            </ul>
        </div>
        </div>
    </nav>
  </>
  )
}

export default NavBar