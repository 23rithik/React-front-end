import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box style={{marginLeft:"-13%",marginRight:"-13%",marginTop:"-2.5%"}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" align='left' sx={{ flexGrow: 1 }}>
            Employee Dashboard
          </Typography>
          <Link to={'/'}><Button  style={{color:'white'}}>Home</Button></Link>
          <Link to={'/Employee'}><Button style={{color:'white'}}>Employee</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar