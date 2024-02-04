import { Box,Button, Typography,styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginOne from '../login/LoginOne';
import React, { useState,useContext} from 'react'
import { appState } from '../../context/LoginData';
import {NavLink} from 'react-router-dom'
import Profile from './Profile'

const Bbox=styled(Box)(({theme})=>({
  marginTop:'2px',
  minWidth:'30%',
  display:'flex',
  alignItems:'center',
  marginLeft:'50px',
  justifyContent:'space-around',
  [theme.breakpoints.down('sm')]:{
    display:'none'
  }
}))
function Buttons() {
  const {acc,setAcc}=useContext(appState)
  const [log,setLog]=useState(false)
  return (
    <Bbox>
       {acc?
       <Profile accName={acc} setAccName={setAcc}/>:
       <Button style={{width:'25%',padding:'4px',background:'white',color:'blue',textTransform:'none'}} variant="contained" onClick={ ()=>setLog(!log)}>Login</Button>}
       <Box style={{minWidth:'30%',display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'40px'}} >
       <ShoppingCartIcon/>
       <NavLink style={{textDecoration:"none",color:'white'}} to={'/cart'}><Typography style={{fontSize:'1.4rem',cursor:'pointer'}}>cart</Typography></NavLink>
       </Box>
       <LoginOne islog={log} setClose={setLog}/>
    </Bbox>
  )
}

export default Buttons 