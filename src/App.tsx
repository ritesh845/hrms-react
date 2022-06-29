import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';
import Register from './components/auth/Register';

const App: React.FunctionComponent = () => {
    return(  
        <BrowserRouter>      
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
