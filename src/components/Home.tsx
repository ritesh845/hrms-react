import { Typography,Card,Box } from '@mui/material';
import * as React  from 'react';

const Home:React.FC = () => {
    
    
    return (
        <>  
            <Box>
                <Typography variant="h5" sx={{ mb: 5 }}>
                    Hi, Welcome back
                </Typography>

                <Card sx={{
                        py: 5,
                        boxShadow: 0,
                        minWidth:275,
                        textAlign: 'center',
                        bgColor:"red"
                    }}
                    
                >
                    <Typography variant="h3">100</Typography>

                    <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                        Users
                    </Typography>

                </Card>    
                
            </Box>  
           
            
        </>
    );
}
export default Home;
