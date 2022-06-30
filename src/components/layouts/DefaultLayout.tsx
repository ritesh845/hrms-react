import React from 'react'
import { Route,Navigate } from 'react-router-dom';
import routes from '../../routes';
import Footer from './Footer';
import Header from './Header';


const DefaultLayout =  (props:any)   =>{
  
  const parentPath = (route:any) => {
    return <Navigate to="/" />;
  }

  return (
    <div className="app">
        <Header />
          {routes.map((route, key) => {
            return (
              <Route
                key={key}
                path={route.path}
                element={<route.element />}
              />
            );
          })}
          <Navigate  to="/home" />
        <Footer />
    </div>
  )
}

export default DefaultLayout;