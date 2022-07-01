import React, { Suspense } from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { Navigate,Outlet } from "react-router-dom";
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import SideBar from './layouts/SideBar';
import { CssBaseline, Toolbar } from '@mui/material';


const ProtectedRoute = (props:any) => {
    const auth = useSelector((state:any) => state.auth);
    
    if(auth.isAuthenticated){

        return <>
          <div className="app">
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                    <Header />
                    <SideBar />
                    <Box
                            component="main"
                            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                        >
                             <Toolbar />
                             <Suspense fallback={<div>Loading...</div>}>
                                <Outlet />
                             </Suspense>
                        
                    </Box>
                    <Footer /> 
            </Box>
          </div>
        </>
    }
    
    return  <Navigate to="/login" />;
}
export default ProtectedRoute;