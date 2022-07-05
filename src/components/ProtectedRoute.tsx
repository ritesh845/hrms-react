import React, { Suspense } from 'react';
import { Box } from '@mui/system';
import { useSelector,useDispatch } from 'react-redux';
import { Navigate,Outlet } from "react-router-dom";
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import SideBar from './layouts/SideBar';
import { CssBaseline, Toolbar } from '@mui/material';
import { logout } from '../redux/auth/auth.action';


const ProtectedRoute = (props:any) => {
    const dispatch = useDispatch();
    const auth = useSelector((state:any) => state.auth);
    
    const parseJwt = (token:String) => {
        try {
          return JSON.parse(atob(token.split(".")[1]));
        } catch (e) {
          return null;
        }
    };

    if(auth.isAuthenticated){

        const decodedJwt = parseJwt(auth.token);
        if (decodedJwt.exp * 1000 < Date.now()) {
          dispatch(logout());
        }

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