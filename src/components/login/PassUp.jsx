import React, { useState } from 'react'
import {Box, Button,Dialog,styled,Typography,TextField } from '@mui/material'
import { authPass } from '../../axios/forgetpass'
const Comp=styled(Box)
`
min-height:40vh;
min-width:20vw;
display:flex;
flex-direction:column;
gap:20px;
text-align:center;
padding:25px;
overflow-y:scroll
justify-content:center;
& > p {
    color:grey;
    font-size:1.2rem;
}
`
function PassUp({setPass,setValid}) {
  const [err,setErr]=useState(false)
  const [send,setSend]=useState(false)
  const [passDet,setPassDet]=useState({email:''})
  const setDet=(e)=>{
    setPassDet({...passDet,[e.target.name]:e.target.value})
  }
  const setAuth=async()=>{
    for(let key in passDet)
    {
      if(passDet[key]==='')
      {
        alert('fill all fields')
        return
      }
      else if(!(passDet[key].includes('@gmail.com')))
      {
        alert('enter valid E-mail')
        return
      }
    }
   const response=await authPass(passDet)
   if(response.data==="email not exist")
   {
    setErr(true)
    setTimeout(()=>{setErr(false)},2000)
   }
   else
   {
    setSend(true)
    setTimeout(()=>{setSend(false)},2000)
   }
  }
  return (
    <>
    <Dialog open={true}>
        <Comp>
            <Typography style={{fontSize:'1.5rem',fontWeight:'700'}}>Enter Your Email</Typography>
            {err?<Typography style={{fontSize:'1.5rem',fontWeight:'700'}}>Not Valid E-mail !</Typography>:''}
            {send?<Typography style={{fontSize:'1.5rem',fontWeight:'700'}}>Mail Sent !</Typography>:''}
            <TextField variant='standard' label='Email' name='email' onChange={(e)=>setDet(e)} />
            <Button onClick={()=>{setAuth()}}style={{textTransform:'none',fontSize:'1rem',backgroundColor:'#FF5349'}} variant="contained">Mail</Button> 
            <Button onClick={()=>{setPass(false);setValid(true)}} style={{textTransform:'none',fontSize:'1rem'}} variant="contained">Back</Button> 
      </Comp>
    </Dialog>:''
    </>
  )
}

export default PassUp