import React,{useState} from 'react'
import {Box, Button} from '@mui/material'
import {useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import{addToCart} from '../../redux/actions/cartAction'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductBox({prod}) {
const dispatch=useDispatch()
const Navigate=useNavigate()
const [count,setCount]=useState(1)
const addOnCart=()=>{
 dispatch(addToCart(prod.id,count))
 Navigate('/cart')
}
  return (
    <>
      <Box style={{width:'500px',display:'flex',justifyContent:'center'}}>
        <Box style={{ width:'80%',display:'flex',flexDirection:'column',gap:10,justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
          <img style={{height:'60%'}} src={prod.detailUrl} alt="na"/>
          <Box style={{width:'90%',display:'flex',justifyContent:'center',alignItems:'center',gap:20}}>
            <Button onClick={addOnCart} style={{width:'70%',height:'40px',background:' #f03c16 '}}variant='contained'><ShoppingCartIcon/></Button>
          </Box>
        </Box>
    </Box>
    </>
  )
}

export default ProductBox