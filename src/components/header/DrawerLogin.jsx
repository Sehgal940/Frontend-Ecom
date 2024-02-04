import { Button} from '@mui/material'
import LoginOne from '../login/LoginOne';
import React, { useState,useContext} from 'react'
import { appState } from '../../context/LoginData';
import Profile from './Profile'
function DrawerLogin() {
  const {acc,setAcc}=useContext(appState)
  const [log,setLog]=useState(false)
  return (
    <>
       {acc?
       <Profile accName={acc} setAccName={setAcc}/>:
       <Button style={{width:'100%',marginBottom:'10px',marginTop:'10px'}} onClick={ ()=>setLog(!log)}>Login</Button>}
       <LoginOne islog={log} setClose={setLog}/>
    </>
  )
}

export default DrawerLogin 