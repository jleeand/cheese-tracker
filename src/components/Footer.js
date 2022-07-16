import React from 'react'
import { Link, Typography } from '@mui/material'
import '../App.css'



const Footer = () => {
  


  return (
    <footer className='footer'>
        <Typography color="third">Made by <Link target='_blank' href="https://github.com/jleeand" color="inherit">jleeand </Link></Typography>
    </footer>
  )
}

export default Footer