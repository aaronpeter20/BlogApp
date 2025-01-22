import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../login.css'


const Login = () => {

  const[form,setForm]= useState({
    email:'',
    password:''
  })

  const navigate= useNavigate();

  function showValue(){
    // console.log(form)
    axios.post('http://localhost:3000/user/login',form).then((res)=>{
      alert(res.data.message)
      if(res.data.myToken){
        sessionStorage.setItem('logintoken',res.data.myToken)
        navigate('/blogs')
      }
      else{
       navigate('/')
      }
    }).catch((error)=>{
      alert('Invalid login')
    })
  }

  return (
    <div style={{textAlign: 'center',margin:'10%'}}>
       <Typography variant='h5' style={{color:'red',fontWeight:'bold'}}>BlogApp Login</Typography>
       <div> <br />
       <TextField placeholder='Email' variant='outlined' name='email' onChange={(e)=>{
            setForm({...form, email:e.target.value})}}></TextField>
       </div> <br />
       <div>
       <TextField placeholder='Password' variant='outlined' name='password' onChange={(e)=>{
            setForm({...form, password:e.target.value})}}></TextField>
       </div>
       <br></br>
       <Button color='error' variant='contained' onClick={showValue}>Login</Button> 
       <div>
       <br></br>
        <Link to={'/signup'}>New user? Register here</Link>
       </div>
    </div>
  )
}

export default Login