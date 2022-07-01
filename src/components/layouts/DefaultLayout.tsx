import React, { ReactFragment } from 'react'
import { Route,Navigate } from 'react-router-dom';
import routes from '../../routes';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';


const DefaultLayout =  (props:any)   =>{
  
  const parentPath = (route:any) => {
    return <Navigate to="/" />;
  }

  return (
    <div className="app">
          <Header />
          <SideBar />
          
          <Navigate  to="/home" />
        <Footer />
    </div>
  )
}

export default DefaultLayout;