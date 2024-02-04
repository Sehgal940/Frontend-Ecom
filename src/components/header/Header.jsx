import React from 'react'
import {Box,AppBar,Toolbar,styled} from '@mui/material'
import Search from './Search'
import Buttons from './Buttons'
import {NavLink } from 'react-router-dom'
import DrawerButton from './Drawer'
const Styleone=styled(AppBar)(({theme})=>({
  position:'fixed',
  background:'#7B68EE',
  height:'60px',
}))
function Header() {
  return (
        <>
        <Styleone>
            <Toolbar>
              <DrawerButton/>
              <NavLink style={{textDecoration:'none',color:"white"}} to={'/'}>
              <Box style={{display:'flex', justifyContent:'center',alignItems:'center',marginTop:'2px'}}>
               <img style={{height:'40px'}} src="/images/cart.png" alt='na'/>
               <i style={{marginLeft:'10px',fontSize:'2rem',display:'block',fontWeight:'bold'}}>infikart</i>
              </Box> 
              </NavLink> 
              <Search/>
              <Buttons/>
            </Toolbar>
        </Styleone>
        </>
  )
}

export default Header