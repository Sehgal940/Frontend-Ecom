import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Data from '../../consts/banner'
import { Box ,styled} from '@mui/material';
const IMG=styled('img')(({theme})=>({
  height:`100%`,
  width:`100%`,
  [theme.breakpoints.down('sm')]:{
      objectFit:'cover',
      height:'150px'
  }
  }))
function Cara()
{
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items:1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    return (
        <Box style={{marginTop:'10px',width:'98vw',background:'white' }}>
        <Carousel responsive={responsive}  draggable={false} infinite={true} autoPlay={true} autoPlaySpeed={3000}  removeArrowOnDeviceType={["desktop","tablet", "mobile"]} >
        {
          Data.map((val)=><IMG key={val.id}src={val.url} alt='na'/>)
        }
        </Carousel>
        </Box>
    )
}
export default Cara
