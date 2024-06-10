"use client"

import Link from 'next/link'
import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose, AiOutlineInstagram } from "react-icons/ai";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/data';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { CgFacebook } from 'react-icons/cg';

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();

  return (
<>
    {/* Desktop navbar */}
    <nav id='navbar' className='hidden bg-white backdrop-blur-sm sticky top-0 md:flex justify-between items-center px-5 py-5 z-10'>
      <div className="logo">
        <Link href={'/'} className='text-2xl font-semibold'>Gallery</Link>
      </div>
      <div className='flex gap-5'>
        { navLinks.map((link) => {
          const isActive = pathname.endsWith(link.href);
          return(
            <div key={link.name} className="menu">
            <ul className='flex justify-between items-center gap-x-5'>
          <li className={isActive ? "text-lime-600 transition ease-in-out duration-200" : "text-zinc-950 hover:text-lime-600 transition duration-200"}><Link href={link.href}>{link.name}</Link></li>
        </ul> 
      </div>
          )
        }) }
        <div className="social flex items-center gap-2 text-lg">
          <Link href={'/'}><CgFacebook className='hover:text-lime-600 cursor-pointer' /></Link>
          <Link href={'/'}><AiOutlineInstagram className='hover:text-lime-600 cursor-pointer' /></Link>
          <Link href={'/'}><FaYoutube className='hover:text-lime-600 cursor-pointer' /></Link>
        </div>
        </div>    
    </nav>

    {/* Mobile Navbar */}
    <nav id='navbar' className='flex md:hidden bg-white sticky top-0 justify-between items-center px-5 py-3 lg:hidden sm:flex z-10'>
    <div>
      <Link href={'/'} className='text-xl font-semibold'>Gallery</Link>
    </div> 
    <button onClick={() => setNavbar(!navbar)}>
    {navbar ? (<AiOutlineClose className='text-zinc-950' />) : (<CiMenuFries className='text-lg text-zinc-950' />)}
    </button>
  </nav>

<div 
className={`${navbar ? '' : 'hidden'}`}
>
  <div className='flex justify-center items-start'>
    <div className='h-full fixed md:hidden w-full bg-lime-100 shadow-md rounded-md z-10'>
      <ul className='space-y-1 p-8 text-center'>
        {navLinks.map((link) => {
          const isActive = pathname.endsWith(link.href);
          return(
            <li key={link.name} className='hover:bg-lime-200 text-md rounded text-zinc-950 hover:text-lime-600 py-2 px-4'>
          <Link className={isActive ? "text-lime-600" : ""} onClick={() => setNavbar(!navbar)} href={link.href}>{link.name}</Link>
          </li>
          )
        })}
      </ul>
      {/* <div className='flex justify-center items-center px-3'>
        <Link onClick={() => setNavbar(!navbar)} href={'/'} className='bg-slate-950 text-md text-slate-300 hover:bg-slate-700 py-2 px-4 w-11/12 rounded-md text-center'>Sign Up</Link>
      </div> */}
      <div className="social flex justify-center items-center gap-3 text-lg">
          <Link href={'/'}><CgFacebook className='hover:text-lime-600 cursor-pointer' /></Link>
          <Link href={'/'}><AiOutlineInstagram className='hover:text-lime-600 cursor-pointer' /></Link>
          <Link href={'/'}><FaYoutube className='hover:text-lime-600 cursor-pointer' /></Link>
        </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default Navbar