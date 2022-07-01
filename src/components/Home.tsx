import { Typography } from '@mui/material';
import * as React from 'react';
import { useDispatch} from 'react-redux';
import { logout } from '../redux/auth/auth.action';

const Home:React.FC = () => {
    const dispatch = useDispatch();
    return (
        <>     
          <Typography>
              Home
            
          </Typography>     
        </>
    );
}
export default Home;
