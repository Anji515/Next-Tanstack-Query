import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <h1><Link href={'/'}>Home</Link></h1>
        <h1><Link href={'/infinit'}>Infinit Scrolling</Link></h1>
    </div>
  )
}

export default Navbar