import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';

const Home = () => {
    const[cardData,setData]=useState([])
    const navigate= useNavigate()
    useEffect(()=>{
      axiosInstance.get('http://localhost:3000/api').then((res)=>{
          setData(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    },[])

    function updateData(val){
      navigate('/addblogs',{state:{val}})
    }
    function deleteData(val){
      axiosInstance.delete('http://localhost:3000/api/delete/'+val._id).then((res)=>{
        // alert(res.data)
        setData(cardData.filter(item=>item._id!==val._id))
      }).catch((err)=>{
        console.log(err)
      })
    }
  return (
    <div style={{margin: '5%',marginTop: '8%'}}>
        <Grid container spacing={2}>
          {cardData.map((row) => (
           <Grid size={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={row.blogImageUrl}
        title={row.blogTitle}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {row.blogTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {row.blogDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='warning' variant='contained' onClick={()=>{updateData(row)}}>Update</Button>
        <Button size="small" color='error' variant='contained' onClick={()=>{deleteData(row)}}>Delete</Button>
      </CardActions>
    </Card>
        </Grid>
        ))}
        </Grid>
           
    </div>
  )
}

export default Home