import React from 'react'
import MainNav from './main-nav'
import { Button } from './ui/button'

type Props = {}

function Navbar({}: Props) {
  return (
    <header className='shadow-sm'>
        <div className='h-16 flex justify-between items-center max-w-7xl mx-auto'>
            <h4>Logo</h4>
            <div className='flex'>
                <MainNav /> 
                <Button size="sm">Sign Up</Button>
            </div>
        </div>
    </header>
  )
}

export default Navbar