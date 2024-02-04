import React, { useEffect,useState } from 'react'
import { useParams} from 'react-router-dom'
import { getProduct } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import{Blocks} from 'react-loader-spinner'
import {Box} from '@mui/material'
import ProductBox from '../ProductDetails/ProductBox';
import ProductDetBox from '../ProductDetails/ProductDetBox';


function Proddet() {
const [load,setLoad]=useState(true)
const {id}=useParams();
const prod=useSelector((state)=>state.getProduct.product)
const dispatch=useDispatch()

useEffect(()=>{
dispatch(getProduct(id,setLoad))
},[dispatch,id])

  return (<>
    {
    load?
    <Box style={{position:'fixed',paddingTop:'30px',height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Blocks/>
    </Box>
    :
    <Box style={{paddingTop:'30px',minHeight:'100vh',background:'white',width:'100vw',display:'flex',justifyContent:'center',flexWrap:'wrap',alignContent:'start',}}>
    <ProductBox prod={prod}/>
    <ProductDetBox prod={prod}/>
    </Box>
    }
</>
  )
}

export default Proddet