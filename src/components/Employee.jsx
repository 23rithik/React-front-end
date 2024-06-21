import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <Box
      component="form"
      style={{marginTop:"5%"}}
      sx={{
        '& .MuiTextField-root': { m: 3, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          
        />
        <TextField
          required
          id="outlined-required"
          label="Designation"
          
        />
        </div>
        <div>
        <TextField
          required
          id="outlined-required"
          label="Location"
          
        />
        <TextField
          required
          id="outlined-number"
          type='number'
          label="Salary"
          defaultValue="Salary"
        />
        
      </div>
      <div>
      <Button variant="outlined">Signup</Button>
      </div>
    </Box>
  )
}

export default Login