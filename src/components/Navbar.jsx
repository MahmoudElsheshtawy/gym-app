/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, Stack } from '@mui/material'
import React from 'react'
import logo from '../assets/images/Logo.png'
const Navbar = () => {
  return (
    <Stack sx={{gap:{sm:'122px',xs:'40px'},mt:{sm:'20px', xs:'20px'}}} 
    direction={"row"} justifyContent={"none"} alignItems={"center"} >
        <Link to="/">
            <img src={logo} alt='logo' style={{width:'48px' , height:'48px ',margin:'0 20px'}}/>
        </Link>
        <Stack direction={'row' }
        gap={"40px"} alignItems={'flex-end'}>
            <Link style={{borderBottom:"#FF2625 2px solid" , textDecoration:"none", color:'#3A1212'}}> Home </Link>
            <a href='#exercise' style={{textDecoration:'none',color:'#aaa'}}>exercise</a>
        </Stack>
    


    </Stack>
  )
}

export default Navbar