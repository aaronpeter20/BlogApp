import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate= useNavigate()

  function logout(){
    
      sessionStorage.removeItem('logintoken')
      navigate('/')
  
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Toolbar style={{backgroundColor: 'black',margin: '0px'}}>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogApp
        </Typography>
        <Link to={'/blogs'}><Button style={{color:'red'}}>Home</Button></Link>
        <Link to={'/addblogs'}><Button style={{color:'red'}}>ADDBlog</Button></Link>
        <Link to={'/'}><Button style={{color:'red'}} onClick={logout}>LogOut</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar