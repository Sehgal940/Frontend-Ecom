import React, { useEffect } from 'react';
import Nav from './Nav';
import Cara from './Cara';
import { getProducts } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import MidBanner from './MidBanner'
import Slide from './Slide';
import { Box } from '@mui/material';

function Home() {
  const dispatch = useDispatch();
  const state = useSelector((val) => val.getProducts);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
    <Box style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Nav/>
      <Cara />
      <Slide products={state.products} heading={"Topmost Products"} />
      <MidBanner/>
    </Box>
    </>
  );
}

export default Home;
