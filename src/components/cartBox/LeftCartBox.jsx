import React,{useContext,} from 'react'
import{Box, Button, Divider, Typography} from '@mui/material'
import { removeCart,addItem,removeItem} from '../../redux/actions/cartAction'
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { order } from '../../axios/order'
import { appState } from '../../context/LoginData'

function LeftCartBox({cart}) {
  const dispatch=useDispatch()
  const {acc}=useContext(appState)
  const adding=(val)=>{
    dispatch(addItem(val.id));
  }
  const sub=(val)=>{
    dispatch(removeItem(val.id));
  }
  return (
     <>
     <Box style={{width:'700px',minHeight:'50vh',marginTop:'10px',background:'white'}}>
     <Typography style={{height:'40px',marginLeft:'20px'}}>My Cart ({cart.length})</Typography>
     {acc? <NavLink style={{textDecoration:'none'}} to={'/orders'}><Typography style={{height:'40px',marginLeft:'18px',color:'black'}}>My Orders</Typography></NavLink>:''}
      <Divider/>

      { 
      cart.map((val)=>
      <>
      <Box  style={{minHeight:'250px',display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignContent:'center',}}>
        <Box  style={{width:'350px',height:'250px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',}}>
          <img style={{height:'50%'}}  src={val.url} alt="na"/>
          <Box  style={{border:'1px solid grey',borderRadius:'10px',display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'10px'}}>
            <Button onClick={()=>adding(val)} style={{fontSize:'20px',color:'grey'}}>+</Button>
            <Typography>{val.quantity}</Typography>
            <Button onClick={()=>sub(val)} style={{fontSize:'20px',color:'grey'}}>-</Button>
          </Box>
        </Box>
        <Box  style={{width:'300px',height:'250px',display:'flex',flexDirection:'column',gap:10,justifyContent:'space-around'}}>
          <Box  style={{height:'30%'}}>
          <Typography style={{color:'grey',fontSize:'1.2rem'}}>{val.title.longTitle}</Typography>
          <Typography style={{fontWeight:600}}> ₹ {val.price.cost}</Typography>
          </Box>
          <Button onClick={()=>dispatch(removeCart(val.id))}><Typography  style={{cursor:'pointer',fontWeight:600}}>Remove</Typography></Button>
        </Box>
      </Box>
      <Box style={{height:'80px',display:'flex',alignItems:'start',justifyContent:'end'}}>
      {
        (acc && cart.length>0)
        ?
        <Button onClick={()=>{order(val,acc);dispatch(removeCart(val.id))}} style={{height:'50px',margin:'20px'}} variant='contained'>Place order</Button>
        :
        ''
      }
      </Box>
      <Divider/>
      </>
      )
      }
      </Box>
      </>
  )
}

export {LeftCartBox}