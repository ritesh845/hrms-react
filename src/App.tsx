import * as React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import NotFound from './components/NotFound';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import routes from './routes';

const App: React.FunctionComponent = () => {
    
    return(  
        <Routes>
            <Route path='/' element={<ProtectedRoute/>}>
                {
                     routes.map((route, key) => {
                        return (
                            <Route
                                key={key}
                                path={route.path}
                                element={<route.element />}
                            />
                        );
                     })    
                }
            </Route>
            <Route path='/' element={<PublicRoute/>}>
                <Route path="/login" element={<Login/>}/>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
