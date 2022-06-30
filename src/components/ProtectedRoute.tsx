import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate,Outlet } from "react-router-dom";

const ProtectedRoute = (props:any) => {
    const auth = useSelector((state:any) => state.auth);
    
    if(auth.isAuthenticated){
        return <Outlet />
    }
    
    return  <Navigate to="/login" />;
}
export default ProtectedRoute;