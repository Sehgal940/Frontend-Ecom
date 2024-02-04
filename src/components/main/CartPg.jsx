import React from 'react'
import {useSelector} from 'react-redux'
import {LeftCartBox} from '../cartBox/LeftCartBox'
import {RightCartBox} from '../cartBox/RightCartBox'
import {Box} from '@mui/material'
function CartPg() {
  const cartItems=useSelector(state=>state.getCart.cartItems)
  return (
    <>
    <Box style={{width:'100vw',minHeight:'50vh',display:'flex',flexWrap:'wrap',alignContent:'center'}}>
     <Box style={{width:'100vw',minHeight:'50vh',display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',alignContent:'start'}}>
     <LeftCartBox cart={cartItems}/>
     </Box>
     <Box style={{width:'100vw',display:'flex',justifyContent:'center'}}>
     <RightCartBox cart={cartItems}/>
     </Box>
    </Box>
    </>
  )
}

export default CartPg