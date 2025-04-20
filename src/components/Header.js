import React from 'react'
import Logo from './Logo'
import Button from './Button'
import '../App.css'
import logo from '../assets/logo.webp'

export default function Header () {
  return (
    <header className='shadow p-3 mb-4 bg-white rounded sticky-top '>
    <div className='navbar navbar-light '>
      <Logo logo={logo} />
      <div>
        <Button buttonText='Login' css='login' />
        <Button buttonText='Sign Up' css='signUp' />
      </div>
    </div>
    </header>
  )
}
