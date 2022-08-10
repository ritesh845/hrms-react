import React, { useEffect,useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Typography,Stack,Modal,Fade,Box, Grid,TextField } from '@mui/material';
import UserService from '../../services/user.services';
import { UserModel } from '../../models/user';
import Backdrop from '@mui/material/Backdrop';

const columns: GridColDef[] = [
  
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  }
];

const style = {
  position: 'absolute' as 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const User:React.FC = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [open, setOpen] = useState(false);

  const getUsers = async () => {
      await UserService.getUser().then((res:any) => {
          let data = res.data.data;
          setUsers(data);
      }).catch(function (err) {
          let res = err.response.data;
          console.log("error",res);
      });
  }

  useEffect(() => {
      getUsers();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    
    <div style={{ height: 400, width: '100%' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h6" gutterBottom>
            User List
          </Typography>
          <Button variant="contained" onClick={handleOpen}>
            New User
          </Button>
        </Stack>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
      >
        <Fade in={open}>
          <Box sx={style}>
              <Typography id="spring-modal-title" variant="h6" component="h2">
                Add New User
              </Typography>
              <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                <TextField
                    id="outline-full-name-input"
                    label="Full Name"
                    rows={4}
                  />
                  <TextField
                    id="outline-email-input"
                    label="Email"
                    className='ml-[10px]'
                  />
                </Box>
          </Box>
        </Fade>
      </Modal>



      {
        users.length !== 0 ? 
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
          :
          <></>
          
      }
         
    </div>
  )
}
export default User;