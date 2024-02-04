import React, { useEffect,useContext} from 'react'
import{Box, Button, Divider, Typography} from '@mui/material'
import {useDispatch,useSelector} from 'react-redux'
import { orderAction,removeOrder } from '../../redux/actions/orderAction'
import { appState } from '../../context/LoginData'
import {useNavigate} from 'react-router-dom'
import { orderCancel } from '../../axios/cancelOrder'

function Orders() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const orders=useSelector(state=>state.getOrder.myorders)
  const {acc}=useContext(appState)
  useEffect(()=>{
    dispatch(orderAction(acc))
  },[])
  return (
    <>
    { acc?
    <>
     <Box style={{width:'100vw',minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center'}}>
     <Box style={{width:'700px',minHeight:'50vh',marginTop:'10px',background:'white',paddingTop:'10px'}}>
     <Typography style={{height:'40px',marginLeft:'20px'}}>Orders</Typography>
      <Divider/>
      {
        orders.map((value)=>
      <Box key={value.id} style={{minHeight:'250px',display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignContent:'center'}}>
        <Box style={{width:'350px',height:'250px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',}}>
          <img style={{height:'50%'}}  src={value.url
          } alt="na"/>
        </Box>
        <Box style={{width:'300px',height:'250px',display:'flex',flexDirection:'column',gap:10,justifyContent:'space-around'}}>
          <Box style={{height:'30%'}}>
          <Typography style={{color:'grey',fontSize:'1.2rem'}}>{value.title.shortTitle}</Typography>
          <Typography style={{fontWeight:600}}> ₹ {value.price.cost*value.quantity}</Typography>
          <Typography> x {value.quantity}</Typography>
          </Box>
          <Button onClick={()=>{dispatch(removeOrder(value._id));orderCancel(value._id);}} variant="contained" style={{color:'white'}}>Cancel Order</Button>
        </Box>
      </Box>
      )}
      </Box>
      </Box>
      </>
      : navigate('/')
    }
    </>
  )
}

export default Orders