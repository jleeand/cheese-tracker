import React from 'react'
import { AppBar } from '@mui/material'
import Typography from '@mui/material/Typography'


const Header = () => {

    


  return (
    <header>
    <AppBar enableColorOnDark color="primary" position='static'>
        <Typography color="third" variant='h6' sx={{flexGrow: 1}} textAlign='center'>
            Welcome to Cheese Tracker!
        </Typography>



    </AppBar>
    </header>
  )
}

export default Header