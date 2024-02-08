import React, { useState,useContext } from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField, Typography ,styled} from '@mui/material';
import authSignup from '../../axios/signup'
import { appState } from '../../context/LoginData';
import { authorization } from '../../axios/login';
import PassUp from './PassUp';
const Comp=styled(Box)
`
min-height:40vh;
min-width:30vw;
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
function LoginOne({islog,setClose}) {
  const[pass,setPass]=useState(false)
  const {setAcc}=useContext(appState)
  const[valid,setValid]=useState(true)
  const[logValid,setLogValid]=useState(false)
  const[signValid,setSignValid]=useState(false)
  const [logDet,setDet]=useState({
    email:'',
    password:'',
  })
  const [details,setDetails]=useState({   
    firstname: '',
    lastname: '',
    email: '',
    username:'',
    password: '',
  })

  const setDialog=()=>{
    setTimeout(()=>setLogValid(false),300);
    setTimeout(()=>setSignValid(false),300);
    setTimeout(()=>setValid(true),200)
    setClose(false);
  }

  const inputFun=(e)=>{
   setDetails({...details,[e.target.name]:e.target.value})
  }
  const inputVal=(e)=>{
    setDet({...logDet,[e.target.name]:e.target.value})
  }

  const login=async()=>{
    for(let key in logDet)
    {
      if(logDet[key]==='')
      {
        alert('fill all fields')
        return
      }
      else if(key==='email' && !(logDet[key].includes('@gmail.com')))
      {
        alert('enter valid E-mail')
        return
      }
    }
    const response=await authorization(logDet);  
    if(response)
    {
      setAcc(response.data)
      setDialog()
      setDet({
      email: '',
      password: '',
      });
    }
    else
    {
      setLogValid(true)
    }
  }

  const signup=async()=>{
    for(let key in details)
    {
      if(details[key]==='')
      {
        alert('fill all fields')
        return
      }
      else if(key==='email' && !(details[key].includes('@gmail.com')))
      {
        alert('enter valid E-mail')
        return
      }
  
    }
    const response=await authSignup(details) 
    if(response)
    {
      setDialog();
      setDetails({
      firstname: '',
      lastname: '',
      email: '',
      username:'',
      password: '',
    });
    }
      else
      {
        setSignValid(true)
      }
    
  }

  return (
    <>
    <Dialog open={islog} onClose={setDialog}>
      {valid ?
      <Comp>
            <Typography style={{fontSize:'1.5rem',fontWeight:'700'}}>LOG IN</Typography>
            {logValid?<Typography  style={{fontSize:'15px',color:'red'}}>Incorrect E-Mail or Password</Typography>:''}
            <TextField variant='standard' label='Email' name="email" onChange={(e)=>inputVal(e)}/>
            <TextField variant='standard' label='Passowrd' name='password' onChange={(e)=>inputVal(e)}/>
            <Button onClick={login} style={{textTransform:'none',fontSize:'1rem',backgroundColor:'#FF5349'}} variant="contained">Login</Button>
            <Button onClick={()=>{setPass(true);setDialog()}} style={{textTransform:'none',fontSize:'1rem'}}  variant="contained">Forget Password</Button>
            <p style={{cursor:'pointer'}} onClick={()=>setValid(!valid)}>new to infikart ? create new Account</p>
      </Comp>
      :
      <Comp>
            <Typography style={{fontSize:'1.5rem',fontWeight:'700'}}>SIGN IN</Typography>
            {signValid?<Typography style={{fontSize:'15px',color:'red'}}>Oops! Already Registered </Typography>:''}
            <TextField variant='standard' onChange={(e)=>inputFun(e)} name='firstname' label='First name'/>
            <TextField variant='standard' onChange={(e)=>inputFun(e)} name='lastname' label='Last name'/>
            <TextField variant='standard' onChange={(e)=>inputFun(e)} name='username' label='Username' />
            <TextField variant='standard' onChange={(e)=>inputFun(e)} name='email' label='Email' />
            <TextField variant='standard' onChange={(e)=>inputFun(e)} name='password' label='Password' />
            <Button onClick={()=>signup()} style={{textTransform:'none',fontSize:'1rem',backgroundColor:'#FF5349'}} variant="contained">Sign in</Button>
      </Comp>
      }
    </Dialog>
    {pass?<PassUp setPass={setPass} setValid={setClose} />:''}

    </>
  )
}

export default LoginOne