import React from 'react'
import Grid from '@mui/material/Grid2';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div style={{textAlign: 'center',margin:'10%'}}>
       <Grid container spacing={2}>
  <Grid size={{ xs: 6, md: 6 }}>
    <TextField label='Name' variant='outlined' fullWidth></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField label='Email' variant='outlined' fullWidth></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField label='Password' variant='outlined' fullWidth></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField label='Phone' variant='outlined' fullWidth></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
  <TextField label='Address' variant='outlined' multiline rows={4} fullWidth></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
  <Button style={{backgroundColor:'red'}} variant='contained'>Register</Button> 
  </Grid> <br />
</Grid>
<Grid>
  <Link to={'/'}>Already registered? Login here</Link>
  </Grid>
  
    </div>
  )
}

export default Signup