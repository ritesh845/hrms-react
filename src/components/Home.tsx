import * as React from 'react';
import Login from './auth/Login';
import { Link } from 'react-router-dom';
const Home:React.FunctionComponent = () => {

    return (
        <>
          <Link to ="login">Login</Link>
        </>
    );
}
export default Home;
