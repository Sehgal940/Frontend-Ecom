import React from 'react'
import {Box, Typography,TableRow,TableCell ,TableBody, Table } from '@mui/material'

function ProductDetBox({prod}) 
{
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let date = new Date(); 
let getDy = (date.getDay() + 3 ) % 7; 
let getDt = date.getDate();
let month = date.getMonth();
    if ([0, 2, 4, 6, 7, 9, 11].includes(month)) 
    {
    getDt=(getDt + 3)>31?(getDt + 3)%31: (getDt + 3);
    }
    else if (month === 1) 
    {
      let isLeapYear = (date.getFullYear() % 4 === 0) ;
      if (isLeapYear) getDt = (getDt + 3) > 29 ? (getDt + 3) % 29 : (getDt + 3); 
      else getDt = (getDt + 3) > 28 ? (getDt + 3) % 28 : (getDt + 3);
    } 
    else  getDt=(getDt + 3)>30?(getDt + 3)%30:(getDt + 3);

  return (
    <>
        <Box style={{width:'499px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',paddingLeft:'10px',gap:10}}>
        <Box>
          <Table>
          <TableBody>
          <TableRow>
            <TableCell style={{color:'grey'}}>Product</TableCell>
            <TableCell><Typography style={{fontFamily:'Oswald',color:'grey',fontSize:'1.3rem'}}>{prod.title.longTitle}</Typography></TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{color:'grey'}}>Price</TableCell>
            <TableCell>
              <Box style={{width:'100%',display:'flex',gap:10,alignItems:'center',justifyContent:'start'}}>
              <Typography style={{fontSize:'1.5rem'}}> &#8377;{prod.price.cost}</Typography>
              <Typography style={{color:'grey'}}><del>{prod.price.mrp}</del></Typography>
              <Typography style={{color:'green'}}>{prod.price.discount}off</Typography>
              </Box>
          </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{color:'grey'}}>Description</TableCell>
            <TableCell> <Typography style={{fontFamily:'Abel',textAlign:'start',fontSize:'1rem'}}>{prod.description}</Typography></TableCell>
          </TableRow>
            <TableRow>
            <TableCell style={{color:'grey'}}>Delivery By</TableCell>
            <TableCell><Typography>{getDt},{days[getDy]} {date.getFullYear()}</Typography></TableCell>
            </TableRow>
            <TableRow>
            <TableCell style={{color:'grey'}}>Warranty</TableCell>
            <TableCell><Typography>No Warranty</Typography></TableCell>
            </TableRow>
          </TableBody>
          </Table>
        </Box>
      </Box>
    </>
  )
}

export default ProductDetBox