import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';

const AddBlogs = () => {
  const [blogData, setBlogData] = useState({
    blogTitle: '',
    blogImageUrl: '',
    blogDescription: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  function updateValue() {
    if(location.state!=null){
      axiosInstance.put('/api/blog/edit/'+location.state.val._id, blogData).then((res)=>{
        alert(res.data)
        navigate('/blogs')
      })
    }else{
      axiosInstance.post('/api/blog/add', blogData)
      .then((res) => {
        navigate('/blogs');
      })
      .catch((error) => {
        alert("Can't add now");
      });
  }
    }
    

  useEffect(() => {
    if (location.state != null) {
      setBlogData({
        blogTitle: location.state.val.blogTitle,
        blogImageUrl: location.state.val.blogImageUrl,
        blogDescription: location.state.val.blogDescription,
      });
    } else {
      setBlogData({
        blogTitle: '',
        blogImageUrl: '',
        blogDescription: '',
      });
    }
  }, [location.state]);

  return (
    <div style={{ textAlign: 'center', margin: '10%' }}>
      <Grid>
        <Typography variant='h4' style={{ color: 'gray', fontWeight: 'bold' }}>ADD NEW BLOG</Typography> <br />
        <Grid>
          <TextField
            label='Title'
            variant='outlined'
            name='blogTitle'
            value={blogData.blogTitle}
            fullWidth
            onChange={(e) => setBlogData({ ...blogData, blogTitle: e.target.value })}
          />
        </Grid> <br />
        <Grid>
          <TextField
            label='ImageUrl'
            variant='outlined'
            name='blogImageUrl'
            value={blogData.blogImageUrl}
            fullWidth
            onChange={(e) => setBlogData({ ...blogData, blogImageUrl: e.target.value })}
          />
        </Grid> <br />
        <Grid>
          <TextField
            label='Description'
            variant='outlined'
            name='blogDescription'
            value={blogData.blogDescription}
            fullWidth
            onChange={(e) => setBlogData({ ...blogData, blogDescription: e.target.value })}
          />
        </Grid> <br />
        <Grid>
          <Button color='error' variant='contained' onClick={updateValue}>ADD</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddBlogs;
