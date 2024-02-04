import React, { useEffect, useState } from 'react'
import { Box,Typography,Divider,Table,TableBody,TableRow,TableCell } from '@mui/material'
function RightCartBox({cart}) {
  const[price,setPrice]=useState(0);
  const[finalPrice,setFinalPrice]=useState(0);
  const[discount,setDiscount]=useState(0);
  useEffect(()=>{
    let p=0; let fp=0;
    cart.map((val)=>{p+=(val.price.mrp)*(val.quantity);fp+=(val.price.cost)*((val.quantity))})
    setDiscount(p-fp)
    setPrice(p);
    setFinalPrice(fp);
  },[cart])
  return (
    <>
      <Box style={{width:'300px',height:'250px',marginTop:'10px',background:'white',paddingTop:'10px'}}>
      <Typography style={{height:'40px',marginLeft:'20px'}}>PRICE DETAILS</Typography>
      <Divider/>
      <Table>
          <TableBody>
          <TableRow>
            <TableCell style={{color:'grey'}}>Price</TableCell>
            <TableCell><Typography style={{fontFamily:'Oswald',color:'grey',fontSize:'1.3rem'}}>{price}</Typography></TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{color:'grey'}}>Discount</TableCell>
            <TableCell>
              <Box style={{width:'100%',display:'flex',gap:10,alignItems:'center',justifyContent:'start'}}>
              <Typography style={{color:'red'}}>{discount}</Typography>
              </Box>
          </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{color:'grey'}}>Final Price</TableCell>
            <TableCell>
              <Box style={{width:'100%',display:'flex',gap:10,alignItems:'center',justifyContent:'start'}}>
              <Typography style={{color:'green'}}>{finalPrice}</Typography>
              </Box>
          </TableCell>
          </TableRow>
          </TableBody>
          </Table>
      </Box>
    </>
  )
}

export  {RightCartBox}