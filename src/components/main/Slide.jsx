import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box,Button,Typography,Divider } from '@mui/material';
import styled from '@emotion/styled';
import {NavLink} from 'react-router-dom'
const Comp=styled(Box)
`width:97vw;
padding:0px 5px 0px 5px;
background:white;
margin-top:10px;
`
const Compchild=styled(Box)
`
padding:5px;
display:flex;
`
function Slide({products,heading}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items:6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };
  return (
    <Comp>
     <Compchild>
      <Typography style={{fontSize:'1.5rem',fontWeight:'600',fontFamily:'Oswald'}}>{heading}</Typography>
      <Button style={{marginLeft:'auto',fontSize:'15px',textTransform:'none'}} variant='contained'>View All</Button>
     </Compchild>
     <Divider/>
     <Carousel responsive={responsive}  showDots={false} draggable={true}  removeArrowOnDeviceType={["tablet", "mobile"]}>
       {
        products.map((val)=><Box key={val.id} style={{textAlign:'center',display:'flex',paddingBottom:'10px',justifyContent:'space-between',flexDirection:'column',alignItems:'center'}}>
        <NavLink to={`/productDetails/${val.id}`}>
        <img style={{cursor:'pointer',display:'block',width:'100px',height:'100px',marginTop:'10px'}} src={val.url} alt='na'/></NavLink>
        <Typography style={{fontSize:'13px'}}>{val.title.shortTitle}</Typography>
        <Typography style={{fontSize:'13px',color:'green'}}>{val.discount}</Typography>
        <Typography style={{fontSize:'10px',color:'grey'}}>{val.tagline}</Typography>
        </Box>)
       }
     </Carousel>
    </Comp>
  )
}

export default Slide