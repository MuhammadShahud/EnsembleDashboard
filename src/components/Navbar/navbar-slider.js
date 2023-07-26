import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Settings } from '../../assets/icons/navbar-settings-icon.svg';
import { ReactComponent as Goals } from '../../assets/icons/navbar-goal-icon.svg';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const iconStyles = {
  color: 'white',
  fontSize: '2.1rem'
};
const pages = [
  { title: 'Home', route: '/', icon: <DashboardIcon sx={iconStyles} /> },
  { title: 'Surveys', route: '/survey-dashboard', icon: <ListAltIcon sx={iconStyles} /> },
  { title: 'Employees', route: '/employee-teams', icon: <PeopleAltOutlinedIcon sx={iconStyles} /> },
  { title: 'Goals', route: '/goals', icon: <Goals /> }
];

export default function NavbarSlider() {
  const [state, setState] = React.useState({ left: false });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const icons = [
    {
      title: 'Settings',
      route: '/settings',
      click: () => {
        navigate('/settings');
      },
      icon: <Settings />
    },
    {
      title: 'Profile',
      route: '/admin-profile',
      click: () => {
        navigate('/admin-profile');
      },

      icon: <PersonOutlineOutlinedIcon sx={iconStyles} />
    },
    {
      title: 'Logout',
      route: '/employee-teams',
      click: () => {
        dispatch(logout());
        navigate('/');
      },

      icon: <LogoutRoundedIcon sx={iconStyles} />
    }
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      padding='1rem'
      bgcolor='secondary.main'
      height='inherit'
    >
      <List>
        {pages.map((page, index) => (
          <ListItem key={index}>
            <Link
              to={page.route}
              style={{ textDecoration: 'none', display: 'flex', gap: '1.2rem', minWidth: '100%' }}
            >
              {page.icon}
              <Typography variant='body2' color='white'>
                {page.title}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider color='white' />
      <List>
        {icons.map((icon, index) => (
          <ListItem key={index}>
            <Button
              onClick={icon.click}
              style={{
                textDecoration: 'none',
                display: 'flex',
                justifyContent: 'left',
                gap: '1.2rem',
                minWidth: '100%',
                textTransform: 'capitalize'
              }}
            >
              {icon.icon}
              <Typography variant='body2' color='white'>
                {icon.title}
              </Typography>
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer('left', true)} size='large' color='inherit'>
        <MenuIcon color='white' />
      </IconButton>
      <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </>
  );
}
