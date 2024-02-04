import React from 'react'
import {Box,Typography,styled} from '@mui/material'
import Data from '../../consts/data'
const Comp=styled(Box)(({theme})=>({
  minHeight:'20vh',
  width:'100vw',
  background:'white',
  display:'flex',
  justifyContent:'center',
  overflow:'overlay',
  alignItems:'center',
}))

function Nav() {
  return (
    <Comp>
    {
        Data.map(
          (val)=>
          <Box key={val.id}>
            <img src={val.url} alt="na"/>
            <Typography style={{fontSize:'1.2rem',textAlign:'center',marginTop:'-10px',fontFamily:'Abel'}}>{val.text}</Typography>
          </Box>
        )
    }
    </Comp>
  )
}

export default Nav