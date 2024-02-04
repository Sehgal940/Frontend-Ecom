import './App.css'
import React from 'react'
import Header from './components/header/Header'
import Home from './components/main/Home';
import { Box } from '@mui/material';
import LoginData from './context/LoginData'
import{Route,Routes} from 'react-router-dom'
import Proddet from './components/main/Proddet';
import CartPg from './components/main/CartPg';
import Orders from './components/main/Orders';
function App() {
  return (
    <LoginData>
     <Header/>
    <Box style={{marginTop:'60px'}}>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/productDetails/:id' Component={Proddet} />
      <Route path='/cart' Component={CartPg} />
      <Route path='/orders' Component={Orders} />
    </Routes>
    </Box>
    

    </LoginData>
  );
}

export default App;
