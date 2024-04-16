import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-full justify-between bg-purple-500 px-5 py-2'>
      <div>
    
        <Link href={'/'}>SHRUTI </Link>
      </div>
      <div className=' space-x-5 '>
        <Link className='hover:text-blue-500' href={'/about'}>ABOUT</Link>
        <Link className=' hover:text-red-500' href={'/contact'}>CONTACT</Link>
        <Link className=' hover:text-red-500' href={'/skill'}>SKILLS</Link>
        
      </div>
    </div>
  )
}

export default Navbar
