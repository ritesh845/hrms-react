import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;



const Header:React.FC = () => {
  return (
    <>
       <AppBar
     
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,backgroundColor:'white' }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" className="text-black" >
              
          </Typography>
        </Toolbar>
      </AppBar>

    </>
  )
}

export default Header;