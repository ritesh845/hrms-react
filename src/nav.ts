import { Home } from '@mui/icons-material';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';

export const adminNavs =  [
    {
        url: '/',
        name: "Dashboard",
        icon: Home 
    },
    {
        url: '/user',
        name: "User",
        icon:  PeopleOutlineOutlinedIcon
    },
    {
        url: '/testa',
        name: "News",
        icon:  NewspaperOutlinedIcon
    },
    {
        url: '/asdasd',
        name: "Jobs",
        icon:  WorkOutlineOutlinedIcon
    },
    {
        url: '/asdasdads',
        name: "Attendence",
        icon:  AccessTimeOutlinedIcon
    }

]
