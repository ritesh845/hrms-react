import React, { useEffect,useState } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Toolbar } from '@mui/material';
import UserService from '../../services/user.services';
import { UserModel } from '../../models/user';
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



const User:React.FC = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

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

  return (
    
    <div style={{ height: 400, width: '100%' }}>
      <Toolbar>
          
      </Toolbar>
      {
        users.length !=0 ? 
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