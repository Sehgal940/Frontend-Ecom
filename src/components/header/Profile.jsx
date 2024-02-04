import React, { useState } from 'react'
import { Typography,MenuItem,Menu,Box} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';

function  Profile({accName,setAccName}) {
  const [open,setOpen]=useState(false)
  return (
  <>
  <Box style={{cursor:'pointer'}} onClick={(e)=>setOpen(e.currentTarget)}><Typography style={{borderBottom:'1px solid white',textTransform:'capitalize',fontSize:'1.5rem'}}>{accName}</Typography></Box>
  <Menu anchorEl={open} open={Boolean(open)} onClose={()=>setOpen(false)}>
    <MenuItem onClick={()=>{setOpen(false);setAccName('')}}><LogoutIcon/>Logout</MenuItem>
  </Menu>
  </>
  )
}
export default  Profile