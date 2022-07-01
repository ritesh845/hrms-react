import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { logout } from '../../redux/auth/auth.action';
import { adminNavs } from '../../nav';

const drawerWidth = 240;

const SideBar:React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
         <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }}
              variant="permanent"
              anchor="left"
            >
          <Toolbar >
              <NavLink to="/">eSparkBiz HRMS</NavLink>
          </Toolbar>
          <Divider />
          <List>
            {adminNavs.map((nav, key) => (
              <ListItem key={key} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <nav.icon />
                  </ListItemIcon>
                    <NavLink
                        to={nav.url}>
                        {nav.name}
                      </NavLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
              <ListItemButton onClick={() => dispatch(logout()) }>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary={`Logout`} />
              </ListItemButton>
          </List>
      </Drawer>
    </>
  )
}

export default SideBar;