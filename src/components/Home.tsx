import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { logout } from '../redux/auth/auth.action';

const Home:React.FC = () => {
    const dispatch = useDispatch();
    return (
        <>
          <button onClick={() => dispatch(logout()) }>logout</button>
        </>
    );
}
export default Home;
